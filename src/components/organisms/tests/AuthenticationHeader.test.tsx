import React from 'react'
import '@testing-library/jest-dom'
import { ThemeProvider } from '@emotion/react'
import { render } from '@testing-library/react'
import theme from '../../../theme/styledTheme'
import AuthenticationHeader from '../AuthenticationHeader'
import { BrowserRouter } from 'react-router-dom'

describe('AuthenticationHeader', () => {
  it('Should render header, paragraph. and linkText correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <AuthenticationHeader header='header' linkText='linkText' paragraph='paragraph' linkTo='test'/>
        </ThemeProvider>
      </BrowserRouter>
    )
    expect(getByText('header')).toBeInTheDocument()
    expect(getByText('linkText')).toBeInTheDocument()
    expect(getByText('paragraph')).toBeInTheDocument()
  })
})
