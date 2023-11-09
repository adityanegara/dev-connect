import React from 'react'
import '@testing-library/jest-dom'
import { ThemeProvider } from '@emotion/react'
import { render } from '@testing-library/react'
import theme from '../../../theme/styledTheme'
import Title from '../Title'

describe('Title', () => {
  it('Should render text', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Title text="testing" />
      </ThemeProvider>
    )
    const testingElement = getByText('testing')
    expect(testingElement).toBeInTheDocument()
  })
})
