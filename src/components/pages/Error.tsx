import React from 'react'
import { DefaultPage } from '../../App'
import { useRouteError } from 'react-router-dom'
import Container from '../atoms/Container'
import { useMediaQuery } from '../../hooks/useMediaQueries'
import theme from '../../theme/styledTheme'
import Title from '../atoms/Title'
import getErrorPageMessage from '../../utilities/getErrorPageMessage'

const Error = (): JSX.Element => {
  const error = useRouteError()

  const isDesktop = useMediaQuery(`(min-width: ${theme.layout.mobile})`)
  return (
    <DefaultPage>
      <Container size={isDesktop ? 80 : 90}>
        <Title text="<Dev Connect/>" />
      </Container>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>
        <i>{getErrorPageMessage(error)}</i>
      </p>
    </DefaultPage>
  )
}

export default Error
