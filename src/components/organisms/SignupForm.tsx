import React from 'react'
import styled from '@emotion/styled'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const Form = styled.form(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  '.password': {
    position: 'relative',
    button: {
      cursor: 'pointer',
      backgroundColor: 'transparent',
      border: 'none',
      position: 'absolute',
      right: '3px',
      top: '53%',
      transform: 'translate(0, -50%)',
      zIndex: 2,
      '.password-visibility': {
        color: theme.colors.accent.black,
        fontSize: '25px',
        transition: 'ease-in 0.2s'
      },
      '.password-visibility:hover': {
        color: theme.colors.primary.hover
      }
    }
  },
  div: {
    display: 'flex',
    flexDirection: 'column',
    input: {
      marginTop: '1.3px',
      fontSize: '17px',
      paddingTop: '5px',
      paddingBottom: '5px',
      borderRadius: '2px',
      textIndent: '10px',
      transition: 'ease-in 0.2s',
      outline: 'none',
      border: '1px solid black'
    },
    'input:focus': {
      border: `1px solid ${theme.colors.primary.normal}`,
      outline: `1px solid ${theme.colors.primary.normal}`
    },
    small: {
      color: theme.colors.accent.danger,
      opacity: 0
    }
  },
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
    <Form autoComplete='off'>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <small>Please enter a valid email address</small>
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />
        <small>Please enter a valid username</small>
      </div>
      <div className="password">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <small>Password must include at least 8 characters.</small>
        <button>
          <AiFillEyeInvisible className="password-visibility" />
        </button>
      </div>
      <div className="password">
        <label htmlFor="password">Confirm Password</label>
        <input type="password" id="password" name="password" />
        <small>Confirm Password does not match with password</small>
        <button>
          <AiFillEye className="password-visibility" />
        </button>
      </div>
      <button className="signup-button">Sign up</button>
    </Form>
  )
}

export default SignupForm
