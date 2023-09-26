import React from 'react'
import styled from '@emotion/styled'

interface AuthenticationHeaderProps {
  header: string
  paragraph: string
  linkText: string
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
  linkText
}: AuthenticationHeaderProps): JSX.Element => {
  return (
    <AuthenticationHeaderWrapper>
      <h1>{header}</h1>
      <p>{paragraph}</p>
      <a>{linkText}</a>
    </AuthenticationHeaderWrapper>
  )
}

export default AuthenticationHeader
