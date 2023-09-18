import styled from '@emotion/styled'
import React from 'react'

const SignupPage = styled.section(({ theme }) => ({
  fontFamily: theme.fonts.regular,
  width: '90%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '3vh',
  h1: {
    margin: 0,
    fontFamily: theme.fonts.bold
  },
  '.sign-in': {
    marginTop: '5vh',
    h2: {
      margin: 0,
      fontSize: '30px',
      fontFamily: theme.fonts.regular
    },
    p: {
      marginTop: '15px'
    },
    a: {
      marginTop: '10px',
      display: 'inline-block',
      fontFamily: theme.fonts.bold,
      color: '#FF432A'
    }
  },
  form: {
    marginTop: '5vh',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    div: {
      gap: '5px',
      display: 'flex',
      flexDirection: 'column',
      input: {
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
        border: '1px solid #FF432A',
        outline: '1px solid #FF432A'
      },
      'input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active':
        {
          '-webkit-box-shadow': '0 0 0 30px white inset !important'
        }
    }
  }
}))

const SignUp = (): JSX.Element => {
  return (
    <SignupPage>
      <h1>{'<Dev Connect/>'}</h1>
      <div className="sign-in">
        <h2>Sign up</h2>
        <p>If you already have an account You can</p>
        <a>Login here!</a>
      </div>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <label htmlFor="password">Confirm Password</label>
          <input type="password" id="password" name="password" />
        </div>
      </form>
    </SignupPage>
  )
}

export default SignUp
