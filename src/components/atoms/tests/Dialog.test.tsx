import React from 'react'
import Dialog from '../Dialog'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import theme from '../../../theme/styledTheme'

describe('Dialog', () => {
  it('Should render the text', () => {
    render(<Dialog text='testing' status='success'/>)
    const dialogText = screen.getByText('testing')
    expect(dialogText).toBeInTheDocument()
  })
  it('Should render success dialog when status is success', () => {
    render(<Dialog text='testing' status='success'/>)
    const dialog = screen.getByRole('dialog')
    const successIcon = screen.getByRole('success-icon')
    expect(successIcon).toBeInTheDocument()
    expect(dialog).toHaveStyle(`backgroundColor: ${theme.colors.accent.success}`)
  })
  it('Should render warning dialog when status is warning', () => {
    render(<Dialog text='testing' status='warning'/>)
    const dialog = screen.getByRole('dialog')
    const warningIcon = screen.getByRole('warning-icon')
    expect(warningIcon).toBeInTheDocument()
    expect(dialog).toHaveStyle(`backgroundColor: ${theme.colors.accent.warning}`)
  })
  it('Should render danger dialog when status is danger', () => {
    render(<Dialog text='testing' status='danger'/>)
    const dialog = screen.getByRole('dialog')
    const dangerIcon = screen.getByRole('danger-icon')
    expect(dangerIcon).toBeInTheDocument()
    expect(dialog).toHaveStyle(`backgroundColor: ${theme.colors.accent.danger}`)
  })
})
