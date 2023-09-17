import styled from '@emotion/styled'
import React from 'react'

const SignupPage = styled.section({
  fontFamily: 'InterBold'
})

const SignUp = (): JSX.Element => {
  return (
        <SignupPage>
            <h1>Dev Connect</h1>
            <h2>Sign up</h2>
            <p>If you already have an account You can <a>Login here!</a></p>
            <form>
              <label htmlFor='email'/>
              <input type='email' id='email' name='email'/>
              <label htmlFor='username'/>
              <input type='text' id='username' name='username'/>
              <label htmlFor='password'/>
              <input type='password' id='password' name='password'/>
            </form>
        </SignupPage>
  )
}

export default SignUp
