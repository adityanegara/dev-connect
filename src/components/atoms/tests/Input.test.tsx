import React from 'react'
import { ThemeProvider } from '@emotion/react'
import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import theme from '../../../theme/styledTheme'
import Input from '../Input'

describe('Input', () => {
  it('Should run onChange function when user type', () => {
    const onChangeMock = jest.fn()
    const { getByRole } = render(<ThemeProvider theme={theme}>
        <Input
          type="text"
          id="id-test"
          value="value-test"
          onChange={onChangeMock}
        />
      </ThemeProvider>)
    const inputElement = getByRole('id-test')
    fireEvent.change(inputElement, { target: { value: 'new value' } })
    expect(onChangeMock).toHaveBeenCalled()
  })
  it('Should renders with the provided props', () => {
    const onChangeMock = jest.fn()
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Input
          type="text"
          id="id-test"
          value="value-test"
          onChange={onChangeMock}
        />
      </ThemeProvider>
    )
    const inputElement = getByRole('id-test')
    expect(inputElement).toHaveAttribute('type', 'text')
    expect(inputElement).toHaveAttribute('id', 'id-test')
    expect(inputElement).toHaveAttribute('value', 'value-test')
  })
})
