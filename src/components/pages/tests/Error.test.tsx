import './matchMedia.mock'
import React from 'react'
import Error from '../Error'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { useRouteError } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import theme from '../../../theme/styledTheme'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRouteError: jest.fn()
}))

describe('Error page', () => {
  it('Should render error page', () => {
    const mockAdd = jest.fn(useRouteError)
    mockAdd.mockReturnValue({
      status: 404,
      statusText: 'Not Found',
      internal: true,
      data: 'Error: No route matches URL "/xx"',
      error: {}
    })
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Error />
      </ThemeProvider>
    )

    expect(getByText('Oops!')).toBeInTheDocument()
    expect(getByText('Sorry, an unexpected error has occured.')).toBeInTheDocument()
    expect(getByText('Unknown error')).toBeInTheDocument()
  })
})
