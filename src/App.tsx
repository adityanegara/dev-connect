import React from 'react'
import { Global, ThemeProvider } from '@emotion/react'
import global from './theme/global'
import SignUp from './components/pages/SignUp'
import theme from './theme/styledTheme'

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global}/>
      <SignUp/>
    </ThemeProvider>
  )
}

export default App
