import React, { HTMLInputTypeAttribute } from 'react'
import styled from '@emotion/styled'
import { AiFillEye } from 'react-icons/ai'

interface InputGroupProps {
  id: string
  type: HTMLInputTypeAttribute
  errorMessage: string
  labelText: string
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
    top: '53%',
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
  input: {
    marginTop: '1.3px',
    fontSize: '17px',
    paddingTop: '5px',
    paddingBottom: '5px',
    borderRadius: '2px',
    textIndent: '10px',
    transition: 'ease-in 0.2s',
    outline: 'none',
    border: `1px solid ${theme.colors.accent.black}`
  },
  'input: focus': {
    border: `1px solid ${theme.colors.primary.normal}`,
    outline: `1px solid ${theme.colors.primary.normal}`
  },
  small: {
    color: theme.colors.accent.danger,
    opacity: 0
  }
}))

const InputGroup = ({
  id,
  errorMessage,
  labelText,
  type
}: InputGroupProps): JSX.Element => {
  const renderPasswordVisibilityButton = (
    type: HTMLInputTypeAttribute
  ): JSX.Element | null => {
    return type === 'password'
      ? (
      <button className="password-button">
        <AiFillEye className="password-visibility" />
      </button>
        )
      : null
  }

  return (
    <InputGroupStyled>
      <label htmlFor={id}>{labelText}</label>
      <input type={type} id={id} name={id} />
      <small>{errorMessage}</small>
      {renderPasswordVisibilityButton(type)}
    </InputGroupStyled>
  )
}

export default InputGroup
