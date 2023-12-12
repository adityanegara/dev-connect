import React from 'react'
import { Outlet as Children } from 'react-router-dom'
import styled from '@emotion/styled'
import theme from './theme/styledTheme'
import Container from './components/atoms/Container'
import Title from './components/atoms/Title'
import { useMediaQuery } from './hooks/useMediaQueries'

export const DefaultPage = styled.section(() => ({
  marginTop: '3vh',
  paddingBottom: '8vh',
  height: '100%'
}))

const App = (): JSX.Element => {
  const isDesktop = useMediaQuery(`(min-width: ${theme.layout.mobile})`)

  return (
    <DefaultPage>
      <Container size={isDesktop ? 80 : 90}>
        <Title text="<Dev Connect/>" />
      </Container>
      <Children />
    </DefaultPage>
  )
}

export default App
