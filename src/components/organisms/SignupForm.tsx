import React, { useState } from 'react'
import styled from '@emotion/styled'
import InputGroup from '../molecules/InputGroup'

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
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  const handleOnSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    console.log('email', email)
    console.log('username', username)
    console.log('password', password)
    console.log('confirm password', confirmPassword)
  }

  return (
    <FormStyled autoComplete="off" onSubmit={handleOnSubmit}>
      <InputGroup
        onChange={(e) => {
          setEmail(e.currentTarget.value)
        }}
        id="email"
        labelText="Email"
        type="email"
        errorMessage="Please enter a valid email"
        value={email}
      />
      <InputGroup
        onChange={(e) => {
          setUsername(e.currentTarget.value)
        }}
        id="username"
        labelText="Username"
        type="text"
        errorMessage="Please enter a valid username"
        value={username}
      />
      <InputGroup
        onChange={(e) => {
          setPassword(e.currentTarget.value)
        }}
        id="password"
        labelText="Password"
        type="password"
        errorMessage="Password must include at least 8 characters."
        value={password}
      />
      <InputGroup
        onChange={(e) => {
          setConfirmPassword(e.currentTarget.value)
        }}
        id="confirm-password"
        labelText="Confirm password"
        type="password"
        errorMessage="Confirm Password does not match with password."
        value={confirmPassword}
      />
      <button type='submit' className="signup-button">Sign up</button>
    </FormStyled>
  )
}

export default SignupForm
