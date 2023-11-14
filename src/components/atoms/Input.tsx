import React, { HTMLInputTypeAttribute } from 'react'
import styled from '@emotion/styled'

interface InputProps {
  type: HTMLInputTypeAttribute
  id: string
  value: string
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

const InputStyled = styled.input(({ theme }) => ({
  marginTop: '1.3px',
  fontSize: '17px',
  paddingTop: '5px',
  paddingBottom: '5px',
  borderRadius: '2px',
  textIndent: '10px',
  transition: 'ease-in 0.2s',
  outline: 'none',
  border: `1px solid ${theme.colors.accent.black}`,
  '&: focus': {
    border: `1px solid ${theme.colors.primary.normal}`,
    outline: `1px solid ${theme.colors.primary.normal}`
  }
}))

const Input = ({ type, id, value, onChange }: InputProps): JSX.Element => (
  <InputStyled type={type} id={id} name={id} value={value} onChange={onChange} role={id}/>
)

export default Input
