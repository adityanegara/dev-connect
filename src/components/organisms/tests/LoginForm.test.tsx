import React from 'react'
import {
  render,
  fireEvent,
  waitFor,
  cleanup,
  screen
} from '@testing-library/react'
import '@testing-library/jest-dom'
import { ThemeProvider } from '@emotion/react'
import theme from '../../../theme/styledTheme'
import LoginForm from '../LoginForm'
import axiosClient from '../../../api/apiClient'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axiosClient)

beforeAll(() => {
  mock.reset()
})

afterEach(cleanup)

const sendingLoginForm = (): void => {
  const { getByRole, getByLabelText } = render(
    <ThemeProvider theme={theme}>
      <LoginForm />
    </ThemeProvider>
  )
  const usernameInput = getByLabelText('Username')
  const passwordInput = getByLabelText('Password')
  const loginButton = getByRole('login-button')
  fireEvent.change(usernameInput, { target: { value: 'testuser' } })
  fireEvent.change(passwordInput, { target: { value: 'Password_123' } })

  fireEvent.click(loginButton)
}

describe('LoginForm', () => {
  it('Should show error banner when the username or password is wrong', async () => {
    mock.onPost('/login').reply(400, {
      status: 'fail',
      message: 'User ID or password is wrong',
      data: {}
    })
    sendingLoginForm()
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toHaveTextContent(
        'User ID or password is wrong'
      )
    })
  })
  it('Should show error banner when there is network error', async () => {
    mock.onPost('/login').networkError()
    sendingLoginForm()
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toHaveTextContent('Network Error')
    })
  })
  it('Should show success banner after succesfully login', async () => {
    mock.onPost('/login').reply(200, {
      status: 'success',
      message: 'ok',
      data: {
        token: '123'
      }
    })
    sendingLoginForm()
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toHaveTextContent('ok')
    })
  })
  it('Should show loading indicator when submitting', async () => {
    sendingLoginForm()
    await waitFor(() => {
      expect(screen.getByRole('loading-indicator')).toBeInTheDocument()
    })
  })
  it('Should show valdation error when input is invalid', () => {
    const { getByRole, getByLabelText, getByText } = render(
      <ThemeProvider theme={theme}>
        <LoginForm />
      </ThemeProvider>
    )
    const usernameInput = getByLabelText('Username')
    const passwordInput = getByLabelText('Password')
    const loginButton = getByRole('login-button')
    fireEvent.change(usernameInput, { target: { value: '' } })
    fireEvent.change(passwordInput, { target: { value: 'testing' } })
    fireEvent.click(loginButton)
    expect(getByText('Please fill the username')).toBeInTheDocument()
    expect(
      getByText('Password need to contain at least one uppercase letters')
    ).toBeInTheDocument()
  })
  it('Should show valdation error when input is empty', () => {
    const { getByRole, getByLabelText, getByText } = render(
      <ThemeProvider theme={theme}>
        <LoginForm />
      </ThemeProvider>
    )
    const usernameInput = getByLabelText('Username')
    const passwordInput = getByLabelText('Password')
    const loginButton = getByRole('login-button')
    fireEvent.change(usernameInput, { target: { value: '' } })
    fireEvent.change(passwordInput, { target: { value: '' } })
    fireEvent.click(loginButton)
    expect(getByText('Please fill the username')).toBeInTheDocument()
    expect(getByText('Please fill the password')).toBeInTheDocument()
  })
})
