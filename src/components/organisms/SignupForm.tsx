import React from 'react'
import styled from '@emotion/styled'
import InputGroup from '../molecules/InputGroup'

const Form = styled.form(({ theme }) => ({
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
  return (
    <Form autoComplete="off">
      <InputGroup
        id="email"
        labelText="Email"
        type="email"
        errorMessage="Please enter a valid email"
      />
      <InputGroup
        id="username"
        labelText="Username"
        type="text"
        errorMessage="Please enter a valid username"
      />
      <InputGroup
        id="password"
        labelText="Password"
        type="password"
        errorMessage="Password must include at least 8 characters."
      />
      <InputGroup
        id="confirm-password"
        labelText="Confirm password"
        type="password"
        errorMessage="Confirm Password does not match with password."
      />
      <button className="signup-button">Sign up</button>
    </Form>
  )
}

export default SignupForm
