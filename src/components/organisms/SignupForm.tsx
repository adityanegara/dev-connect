import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Users } from '../../model/users'
import InputGroup from '../molecules/InputGroup'
import axios, { AxiosError } from 'axios'
import Dialog from '../atoms/Dialog'

interface SignUpFormInput extends Users {
  confirmPassword: string
}

const FormStyled = styled.form(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  '.signup-button': {
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: theme.colors.primary.normal,
    fontFamily: theme.fonts.bold,
    color: theme.colors.accent.white,
    transition: 'ease-in 0.2s'
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

  const isEmailError = (email: string): boolean => {
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!expression.test(email)) {
      setEmailError('Invalid Email')
      return true
    } else if (email === '') {
      setEmailError('Please fill the email')
      return true
    } else {
      setEmailError(null)
      return false
    }
  }

  const isUsernameError = (username: string): boolean => {
    if (username === '') {
      setUsernameError('Please fill the username')
      return true
    } else {
      setUsernameError(null)
      return false
    }
  }

  const isPasswordError = (password: string): boolean => {
    const lowerCaseLetters = /[a-z]/g
    const upperCaseLetters = /[A-Z]/g
    const numbers = /[0-9]/g
    if (password === '') {
      setPasswordError('Please fill the password')
      return true
    } else if (password.match(lowerCaseLetters) == null) {
      setPasswordError(
        'Password need to contain at least one lowercase letters'
      )
      return true
    } else if (password.match(upperCaseLetters) == null) {
      setPasswordError(
        'Password need to contain at least one uppercase letters'
      )
      return true
    } else if (password.match(numbers) == null) {
      setPasswordError('Password need to contain at least one numbers')
      return true
    } else if (password.length < 8) {
      setPasswordError('Password need at least 8 characters long')
      return true
    } else if (password === '') {
      setPasswordError('Please fill the password')
      return true
    } else {
      setPasswordError(null)
      return false
    }
  }

  const isConfirmPasswordError = (
    confirmPassword: string,
    password: string
  ): boolean => {
    if (confirmPassword === '') {
      setConfirmPasswordError('Please fill the confirm password')
      return true
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Confirm password must match with password')
      return true
    } else {
      setConfirmPasswordError(null)
      return false
    }
  }

  const isFormError = ({
    email,
    username,
    password,
    confirmPassword
  }: SignUpFormInput): boolean => {
    const emailError = isEmailError(email)
    const usernameError = isUsernameError(username)
    const passwordError = isPasswordError(password)
    const confirmPasswordError = isConfirmPasswordError(
      confirmPassword,
      password
    )

    return emailError || usernameError || passwordError || confirmPasswordError
  }

  const signUpUser = async (): Promise<void> => {
    try {
      const userData = {
        id: username,
        name: username,
        password
      }
      const response = await axios.post<{
        id: string
        name: string
        password: string
      }>('https://openspace-api.netlify.app/v1/users', userData)
      console.log('Response data', response.data)
    } catch (error) {
      const responseError = error as AxiosError
      console.error('Error', responseError.response?.data)
    }
  }

  const handleOnSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    if (!isFormError({ email, username, password, confirmPassword })) {
      await signUpUser()
    }
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
        Sign up
      </button>
      <Dialog text='Succesfully signup an account' status='warning'/>
    </FormStyled>
  )
}

export default SignupForm
