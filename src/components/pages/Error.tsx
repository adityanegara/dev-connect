import React from 'react'
import styled from '@emotion/styled'
import { DefaultPage } from '../../App'
import { useRouteError } from 'react-router-dom'
import Container from '../atoms/Container'
import { useMediaQuery } from '../../hooks/useMediaQueries'
import theme from '../../theme/styledTheme'
import Title from '../atoms/Title'
import getErrorPageMessage from '../../utilities/getErrorPageMessage'

const ErrorMessage = styled.div({
  paddingTop: '5vh',
  textAlign: 'center',
  h1: {
    fontSize: '3em',
    marginBottom: '3vh'
  },
  p: {
    fontSize: '1.1em',
    marginBottom: '3vh'
  }
})

const Error = (): JSX.Element => {
  const error = useRouteError()

  const isDesktop = useMediaQuery(`(min-width: ${theme.layout.mobile})`)
  return (
    <DefaultPage>
      <Container size={isDesktop ? 80 : 90}>
        <Title text="<Dev Connect/>" />
      </Container>
      <ErrorMessage>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occured.</p>
        <p>
          <i>{getErrorPageMessage(error)}</i>
        </p>
      </ErrorMessage>
    </DefaultPage>
  )
}

export default Error
