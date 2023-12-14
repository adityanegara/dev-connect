import { render } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import App from '../../../App'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import theme from '../../../theme/styledTheme'

describe('test', () => {
  beforeAll(() => {
    window.matchMedia = (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    })
  })
  it('should render all', async () => {
    render(<ThemeProvider theme={theme}><App /></ThemeProvider>, { wrapper: BrowserRouter })
  })

  it('should land on a bad page', () => {
    const badRoute = '/signup'
    const { getByText } = render(
        <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={[badRoute]}>

        <App />

      </MemoryRouter>
      </ThemeProvider>
    )
    expect(getByText('Oops!')).toBeInTheDocument()
  })
})
