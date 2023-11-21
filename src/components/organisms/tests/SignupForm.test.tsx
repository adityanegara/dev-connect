import React from 'react'
import { render, fireEvent, waitFor, cleanup, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ThemeProvider } from '@emotion/react'
import theme from '../../../theme/styledTheme'
import SignupForm from '../SignupForm'
import axiosClient from '../../../api/apiClient'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axiosClient)

beforeAll(() => {
  mock.reset()
})

afterEach(cleanup)

const sendingRegisterForm = (): void => {
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
}

describe('SingupForm', () => {
  it('Should show error banner when the user is already exist', async () => {
    mock.onPost('/users').reply(400, {
      status: 'fail',
      message: 'User ID already exist',
      data: {}
    })
    sendingRegisterForm()
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toHaveTextContent('User ID already exist')
    })
  })
  it('Should show error banner when there is network error', async () => {
    mock.onPost('/users').networkError()
    sendingRegisterForm()
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toHaveTextContent('Network Error')
    })
  })
  it('Should show success banner after submitting', async () => {
    mock.onPost('/users').reply(200, {
      status: 'success',
      message: 'User created',
      data: {
        user: {
          id: 'Testing23',
          name: 'Testing23',
          photo: 'Testing Photo'
        }
      }
    })
    sendingRegisterForm()
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toHaveTextContent('User created')
    })
  })
  it('Should show loading indicator when submitting', async () => {
    sendingRegisterForm()
    await waitFor(() => {
      expect(screen.getByRole('loading-indicator')).toBeInTheDocument()
    })
  })
  it('Should show valdation error when input is invalid', () => {
    const { getByRole, getByLabelText, getByText } = render(<ThemeProvider theme={theme}><SignupForm/></ThemeProvider>)
    const emailInput = getByLabelText('Email') as HTMLInputElement
    const usernameInput = getByLabelText('Username')
    const passwordInput = getByLabelText('Password')
    const confirmPasswordInput = getByLabelText('Confirm password')
    const signUpButton = getByRole('signup-button')
    fireEvent.change(emailInput, { target: { value: 'aditnegara' } })
    fireEvent.change(usernameInput, { target: { value: '' } })
    fireEvent.change(passwordInput, { target: { value: 'testing' } })
    fireEvent.change(confirmPasswordInput, { target: { value: 'testing' } })
    fireEvent.click(signUpButton)
    expect(getByText('Email is missing @ symbol')).toBeInTheDocument()
    expect(getByText('Please fill the username')).toBeInTheDocument()
    expect(getByText('Password need to contain at least one uppercase letters')).toBeInTheDocument()
  })
  it('Should show valdation error when input is empty', () => {
    const { getByRole, getByLabelText, getByText } = render(<ThemeProvider theme={theme}><SignupForm/></ThemeProvider>)
    const emailInput = getByLabelText('Email') as HTMLInputElement
    const usernameInput = getByLabelText('Username')
    const passwordInput = getByLabelText('Password')
    const confirmPasswordInput = getByLabelText('Confirm password')
    const signUpButton = getByRole('signup-button')
    fireEvent.change(emailInput, { target: { value: '' } })
    fireEvent.change(usernameInput, { target: { value: '' } })
    fireEvent.change(passwordInput, { target: { value: '' } })
    fireEvent.change(confirmPasswordInput, { target: { value: '' } })
    fireEvent.click(signUpButton)
    expect(getByText('Please fill the email')).toBeInTheDocument()
    expect(getByText('Please fill the username')).toBeInTheDocument()
    expect(getByText('Please fill the password')).toBeInTheDocument()
    expect(getByText('Please fill the confirm password')).toBeInTheDocument()
  })
  it('Should show valdation error when confirm password does not match with password', () => {
    const { getByRole, getByLabelText, getByText } = render(<ThemeProvider theme={theme}><SignupForm/></ThemeProvider>)
    const emailInput = getByLabelText('Email') as HTMLInputElement
    const usernameInput = getByLabelText('Username')
    const passwordInput = getByLabelText('Password')
    const confirmPasswordInput = getByLabelText('Confirm password')
    const signUpButton = getByRole('signup-button')
    fireEvent.change(emailInput, { target: { value: '' } })
    fireEvent.change(usernameInput, { target: { value: '' } })
    fireEvent.change(passwordInput, { target: { value: '123' } })
    fireEvent.change(confirmPasswordInput, { target: { value: '321' } })
    fireEvent.click(signUpButton)
    expect(getByText('Confirm password must match with password')).toBeInTheDocument()
  })
})
