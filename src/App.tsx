import React from 'react'
import { Global, ThemeProvider } from '@emotion/react'
import { Outlet as Children } from 'react-router-dom'
import styled from '@emotion/styled'
import global from './theme/global'
import theme from './theme/styledTheme'
import Container from './components/atoms/Container'
import Title from './components/atoms/Title'
import { useMediaQuery } from './hooks/useMediaQueries'

const DefaultPage = styled.section(() => ({
  marginTop: '3vh',
  paddingBottom: '8vh',
  height: '100%'
}))

const App = (): JSX.Element => {
  const isDesktop = useMediaQuery(`(min-width: ${theme.layout.mobile})`)

  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <DefaultPage>
        <Container size={isDesktop ? 80 : 90}>
          <Title text="<Dev Connect/>" />
        </Container>
        <Children/>
      </DefaultPage>
    </ThemeProvider>
  )
}

export default App
