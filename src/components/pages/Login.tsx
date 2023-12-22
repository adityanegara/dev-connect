import React from 'react'
import styled from '@emotion/styled'
import Container from '../atoms/Container'
import AuthenticationHeader from '../organisms/AuthenticationHeader'
import SignupForm from '../organisms/SignupForm'
import { useMediaQuery } from '../../hooks/useMediaQueries'
import theme from '../../theme/styledTheme'

const SingupFormWrapper = styled.div({
  marginTop: '5vh'
})

const Login = (): JSX.Element => {
  const isDesktop = useMediaQuery(`(min-width: ${theme.layout.mobile})`)
  return (
    <Container size={isDesktop ? 60 : 90}>
      <>
        <AuthenticationHeader
          header='Login'
          paragraph='New to DevConnect?'
          linkText='Sign up here!'
          linkTo='/signup'
        />
        <SingupFormWrapper>
          <SignupForm />
        </SingupFormWrapper>
      </>
    </Container>
  )
}

export default Login
