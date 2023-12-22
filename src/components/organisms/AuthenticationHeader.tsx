import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

interface AuthenticationHeaderProps {
  header: string
  paragraph: string
  linkText: string
  linkTo: string
}

const AuthenticationHeaderWrapper = styled.div(({ theme }) => ({
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
    color: theme.colors.primary.normal,
    transition: 'ease-in 0.2s',
    cursor: 'pointer'
  },
  'a:hover': {
    color: theme.colors.primary.hover
  }
}))

const AuthenticationHeader = ({
  header,
  paragraph,
  linkText,
  linkTo
}: AuthenticationHeaderProps): JSX.Element => {
  return (
    <AuthenticationHeaderWrapper>
      <h1>{header}</h1>
      <p>{paragraph}</p>
      <Link to={linkTo}>{linkText}</Link>
    </AuthenticationHeaderWrapper>
  )
}

export default AuthenticationHeader
