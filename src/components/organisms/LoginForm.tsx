import React, { useState } from 'react'
import styled from '@emotion/styled'
import ReactLoading from 'react-loading'
import AuthenticationResponse from '../../model/IauthenticationResponse'
import InputGroup from '../molecules/InputGroup'
import { AxiosError } from 'axios'
import Dialog from '../atoms/Dialog'
import { loginUser } from '../../api/users'
import { isPasswordError, isUsernameError } from '../../utilities/validation'

const FormStyled = styled.form(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  '.login-button': {
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
  '.login-button:hover': {
    backgroundColor: theme.colors.primary.hover
  }
}))

const LoginForm = (): JSX.Element => {
  const [username, setUsername] = useState<string>('')
  const [usernameError, setUsernameError] = useState<string | null>(null)
  const [password, setPassword] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [response, setResponse] = useState<AuthenticationResponse>()

  const isFormError = (username: string, password: string): boolean => {
    const usernameError = isUsernameError(username, setUsernameError)
    const passwordError = isPasswordError(password, setPasswordError)
    return usernameError || passwordError
  }

  const login = async (): Promise<void> => {
    try {
      setIsSubmitting(true)
      const response = await loginUser(username, password)
      setResponse(response.data)
    } catch (error) {
      const responseError = error as AxiosError
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (responseError.response?.data as AuthenticationResponse) {
        setResponse(responseError.response?.data as AuthenticationResponse)
      } else {
        setResponse({ status: 'error', message: 'Network Error' })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleOnSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    if (!isFormError(username, password)) {
      await login()
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
          'Login'
        )
  }

  const renderDialog = (
    response: AuthenticationResponse | undefined
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
      <button type="submit" className="login-button" role="login-button">
        {renderLoadingIndicator(isSubmitting)}
      </button>
      {renderDialog(response)}
    </FormStyled>
  )
}

export default LoginForm
