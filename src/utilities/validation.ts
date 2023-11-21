export const isEmailError = (
  email: string,
  setEmailError: (value: React.SetStateAction<string | null>) => void
): boolean => {
  if (email === '') {
    setEmailError('Please fill the email')
    return true
  } else if (!email.includes('@')) {
    setEmailError('Email is missing @ symbol')
    return true
  } else if (!email.includes('.')) {
    setEmailError('Email is missing . symbol')
    return true
  } else {
    setEmailError(null)
    return false
  }
}

export const isUsernameError = (
  username: string,
  setUsernameError: (value: React.SetStateAction<string | null>) => void
): boolean => {
  if (username === '') {
    setUsernameError('Please fill the username')
    return true
  } else {
    setUsernameError(null)
    return false
  }
}

export const isPasswordError = (
  password: string,
  setPasswordError: (value: React.SetStateAction<string | null>) => void
): boolean => {
  const lowerCaseLetters = /[a-z]/g
  const upperCaseLetters = /[A-Z]/g
  const numbers = /[0-9]/g
  if (password === '') {
    setPasswordError('Please fill the password')
    return true
  } else if (password.match(lowerCaseLetters) == null) {
    setPasswordError('Password need to contain at least one lowercase letters')
    return true
  } else if (password.match(upperCaseLetters) == null) {
    setPasswordError('Password need to contain at least one uppercase letters')
    return true
  } else if (password.match(numbers) == null) {
    setPasswordError('Password need to contain at least one numbers')
    return true
  } else if (password.length < 8) {
    setPasswordError('Password need at least 8 characters long')
    return true
  } else if (password === '') {
    setPasswordError('Please fill the password')
    return true
  } else {
    setPasswordError(null)
    return false
  }
}

export const isConfirmPasswordError = (
  confirmPassword: string,
  password: string,
  setConfirmPasswordError: (value: React.SetStateAction<string | null>) => void
): boolean => {
  if (confirmPassword === '') {
    setConfirmPasswordError('Please fill the confirm password')
    return true
  } else if (confirmPassword !== password) {
    setConfirmPasswordError('Confirm password must match with password')
    return true
  } else {
    setConfirmPasswordError(null)
    return false
  }
}
