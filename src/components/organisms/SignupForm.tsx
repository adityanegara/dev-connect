import React, { useState } from 'react'
import styled from '@emotion/styled'
import ReactLoading from 'react-loading'
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
      console.log('Response data', response.data)
    } catch (error) {
      const responseError = error as AxiosError
      console.error('Error', responseError.response?.data)
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
      <ReactLoading
        type={'spin'}
        color={'white'}
        height={'35px'}
        width={'35px'}
      />
        )
      : (
          'Sign up'
        )
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
      <button type="submit" className="signup-button">
        {renderLoadingIndicator(isSubmitting)}
      </button>
      <Dialog text="Succesfully signup an account" status="warning" />
    </FormStyled>
  )
}

export default SignupForm
