import React, { HTMLInputTypeAttribute, useState } from 'react'
import styled from '@emotion/styled'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import Input from '../atoms/Input'

interface InputGroupProps {
  id: string
  type: HTMLInputTypeAttribute
  errorMessage: string | null
  labelText: string
  value: string
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

const InputGroupStyled = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  '.password-button': {
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
    position: 'absolute',
    right: '3px',
    top: '52px',
    transform: 'translate(0, -50%)',
    zIndex: 2,
    '.password-visibility': {
      color: theme.colors.accent.black,
      fontSize: '25px',
      transition: 'ease-in 0.2s'
    },
    '.password-visibility:hover': {
      color: theme.colors.primary.hover
    }
  },
  small: {
    minHeight: '15px',
    color: theme.colors.accent.danger,
    fontSize: '15px'
  }
}))

const InputGroup = ({
  id,
  errorMessage,
  labelText,
  type,
  value,
  onChange
}: InputGroupProps): JSX.Element => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

  const togglePasswordVisibility = (): void => {
    setIsPasswordVisible((currentVisibility) => !currentVisibility)
  }

  const renderPasswordVisibilityButton = (
    type: HTMLInputTypeAttribute
  ): JSX.Element | null => {
    return type === 'password'
      ? (
      <button role='password-visibility-button' type="button" className="password-button" onClick={togglePasswordVisibility}>
        {isPasswordVisible
          ? (
          <AiFillEyeInvisible role='password-visible-icon' className="password-visibility" />
            )
          : (
          <AiFillEye role='password-invisible-icon' className="password-visibility" />
            )}
      </button>
        )
      : null
  }

  const getInputType = (
    type: HTMLInputTypeAttribute
  ): HTMLInputTypeAttribute => {
    if (type === 'password') {
      return isPasswordVisible ? 'text' : 'password'
    }
    return type
  }

  return (
    <InputGroupStyled role='input-group'>
      <label role='label' htmlFor={id}>{labelText}</label>
      <Input
        type={getInputType(type)}
        id={id}
        value={value}
        onChange={onChange}
      />
      <small>{errorMessage}</small>
      {renderPasswordVisibilityButton(type)}
    </InputGroupStyled>
  )
}

export default InputGroup
