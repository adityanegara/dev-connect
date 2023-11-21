import React from 'react'
import styled from '@emotion/styled'
import Container from '../atoms/Container'
import Title from '../atoms/Title'
import AuthenticationHeader from '../organisms/AuthenticationHeader'
import SignupForm from '../organisms/SignupForm'
import { useMediaQuery } from '../../hooks/useMediaQueries'
import theme from '../../theme/styledTheme'

const SingupFormWrapper = styled.div({
  marginTop: '5vh'
})

const SignupPage = styled.section(({ theme }) => ({
  marginTop: '3vh',
  paddingBottom: '8vh',
  height: '100%'
}))

const SignUp = (): JSX.Element => {
  const isDesktop = useMediaQuery(`(min-width: ${theme.layout.mobile})`)
  return (
    <SignupPage>
      <Container size={isDesktop ? 80 : 90}>
        <Title text="<Dev Connect/>" />
      </Container>
      <Container size={isDesktop ? 60 : 90}>
        <>
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
