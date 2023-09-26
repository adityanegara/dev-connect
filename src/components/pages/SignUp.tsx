import React from 'react'
import styled from '@emotion/styled'
import Container from '../atoms/Container'
import Title from '../atoms/Title'
import AuthenticationHeader from '../organisms/AuthenticationHeader'
import SignupForm from '../organisms/SignupForm'

const SingupFormWrapper = styled.div({
  marginTop: '5vh'
})

const SignupPage = styled.section(({ theme }) => ({
  marginTop: '3vh'
}))

const SignUp = (): JSX.Element => {
  return (
    <SignupPage>
      <Container size={90}>
        <>
          <Title text="<Dev Connect/>" />
          <AuthenticationHeader
            header="Sign up"
            paragraph="If you already have an account You can"
            linkText="Login here!"
          />
          <SingupFormWrapper>
            <SignupForm />
          </SingupFormWrapper>
        </>
      </Container>
    </SignupPage>
  )
}

export default SignUp
