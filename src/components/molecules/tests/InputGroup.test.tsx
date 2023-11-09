import React from 'react'
import '@testing-library/jest-dom'
import { ThemeProvider } from '@emotion/react'
import { render, fireEvent } from '@testing-library/react'
import theme from '../../../theme/styledTheme'
import InputGroup from '../InputGroup'

const getInputGroup = (): JSX.Element => {
  const onChangeMock = jest.fn()
  return (
    <ThemeProvider theme={theme}>
      <InputGroup
        type="password"
        labelText="testing-label"
        id="testing"
        errorMessage="error-message"
        value="test"
        onChange={onChangeMock}
      />
    </ThemeProvider>
  )
}

describe('InputGroup', () => {
  it('Should change the password invisible icon into password visible when password visible is clicked', () => {
    const { getByRole } = render(getInputGroup())
    const passwordVisibilityButton = getByRole('password-visibility-button')
    fireEvent.click(passwordVisibilityButton)
    expect(getByRole('password-visible-icon')).toBeInTheDocument()
  })
  it('Should show the password visibility button when type is password', () => {
    const { getByRole } = render(getInputGroup())
    expect(getByRole('password-visibility-button')).toBeInTheDocument()
    expect(getByRole('password-invisible-icon')).toBeInTheDocument()
  })
  it('Should show the error message', () => {
    const { getByText } = render(getInputGroup())
    expect(getByText('error-message')).toBeInTheDocument()
  })
  it('Should show the label text', () => {
    const { getByText } = render(getInputGroup())
    expect(getByText('testing-label')).toBeInTheDocument()
  })
})
