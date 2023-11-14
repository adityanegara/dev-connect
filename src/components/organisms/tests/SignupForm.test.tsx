import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ThemeProvider } from '@emotion/react'
import theme from '../../../theme/styledTheme'
import SignupForm from '../SignupForm'

describe('SingupForm', () => {
  it('Should show loading indicator when submitting', async () => {
    const { getByRole, getByLabelText } = render(<ThemeProvider theme={theme}><SignupForm/></ThemeProvider>)
    const emailInput = getByLabelText('Email') as HTMLInputElement
    const usernameInput = getByLabelText('Username')
    const passwordInput = getByLabelText('Password')
    const confirmPasswordInput = getByLabelText('Confirm password')
    const signUpButton = getByRole('signup-button')
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(usernameInput, { target: { value: 'testuser' } })
    fireEvent.change(passwordInput, { target: { value: 'Password_123' } })
    fireEvent.change(confirmPasswordInput, { target: { value: 'Password_123' } })
    fireEvent.click(signUpButton)
    await waitFor(() => {
      expect(getByRole('loading-indicator')).toBeInTheDocument()
    })
  })
})
