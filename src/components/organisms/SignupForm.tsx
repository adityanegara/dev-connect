import React, { useState } from 'react'
import styled from '@emotion/styled'
import ReactLoading from 'react-loading'
import RegisterResponse from '../../model/registerResponse'
import Users from '../../model/users'
import InputGroup from '../molecules/InputGroup'
import { AxiosError } from 'axios'
import Dialog from '../atoms/Dialog'
import { registerUser } from '../../api/users'
import {
  isConfirmPasswordError,
  isEmailError,
  isPasswordError,
  isUsernameError
} from '../../utilities/validation'

interface SignUpFormInput extends Users {
  confirmPassword: string
}

const FormStyled = styled.form(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  '.signup-button': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: theme.colors.primary.normal,
    fontFamily: theme.fonts.bold,
    color: theme.colors.accent.white,
    transition: 'ease-in 0.2s',
    paddingTop: '5px',
    paddingBottom: '5px'
  },
  '.signup-button:hover': {
    backgroundColor: theme.colors.primary.hover
  }
}))

const SignupForm = (): JSX.Element => {
  const [email, setEmail] = useState<string>('')
  const [emailError, setEmailError] = useState<string | null>(null)
  const [username, setUsername] = useState<string>('')
  const [usernameError, setUsernameError] = useState<string | null>(null)
  const [password, setPassword] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string | null>(null)
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [confirmPasswordError, setConfirmPasswordError] = useState<
  string | null
  >(null)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [response, setResponse] = useState<RegisterResponse>()

  const isFormError = ({
    email,
    username,
    password,
    confirmPassword
  }: SignUpFormInput): boolean => {
    const emailError = isEmailError(email, setEmailError)
    const usernameError = isUsernameError(username, setUsernameError)
    const passwordError = isPasswordError(password, setPasswordError)
    const confirmPasswordError = isConfirmPasswordError(
      confirmPassword,
      password,
      setConfirmPasswordError
    )

    return emailError || usernameError || passwordError || confirmPasswordError
  }

  const signUpUser = async (): Promise<void> => {
    try {
      setIsSubmitting(true)
      const response = await registerUser({ email, username, password })
      setResponse(response.data)
    } catch (error) {
      const responseError = error as AxiosError
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (responseError.response?.data as RegisterResponse) {
        setResponse(responseError.response?.data as RegisterResponse)
      } else {
        setResponse({ status: 'error', message: 'Network Error' })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleOnSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    if (!isFormError({ email, username, password, confirmPassword })) {
      await signUpUser()
    }
  }
  const renderLoadingIndicator = (
    isSubmitting: boolean
  ): JSX.Element | string => {
    return isSubmitting
      ? (
      <div role="loading-indicator">
        {' '}
        <ReactLoading
          type={'spin'}
          color={'white'}
          height={'35px'}
          width={'35px'}
        />
      </div>
        )
      : (
          'Sign up'
        )
  }

  const renderDialog = (
    response: RegisterResponse | undefined
  ): JSX.Element | null => {
    if (response != null) {
      return (
        <Dialog
          text={response.message}
          status={response.status === 'success' ? 'success' : 'danger'}
        />
      )
    }
    return null
  }

  return (
    <FormStyled
      autoComplete="off"
      onSubmit={(e) => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        handleOnSubmit(e)
      }}
    >
      <InputGroup
        onChange={(e) => {
          setEmail(e.currentTarget.value)
        }}
        id="email"
        labelText="Email"
        type="text"
        errorMessage={emailError}
        value={email}
      />
      <InputGroup
        onChange={(e) => {
          setUsername(e.currentTarget.value)
        }}
        id="username"
        labelText="Username"
        type="text"
        errorMessage={usernameError}
        value={username}
      />
      <InputGroup
        onChange={(e) => {
          setPassword(e.currentTarget.value)
        }}
        id="password"
        labelText="Password"
        type="password"
        errorMessage={passwordError}
        value={password}
      />
      <InputGroup
        onChange={(e) => {
          setConfirmPassword(e.currentTarget.value)
        }}
        id="confirm-password"
        labelText="Confirm password"
        type="password"
        errorMessage={confirmPasswordError}
        value={confirmPassword}
      />
      <button type="submit" className="signup-button" role="signup-button">
        {renderLoadingIndicator(isSubmitting)}
      </button>
      {renderDialog(response)}
    </FormStyled>
  )
}

export default SignupForm
