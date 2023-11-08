import React from 'react'
import {
  AiOutlineWarning,
  AiOutlineCheck,
  AiOutlineStop
} from 'react-icons/ai'
import styled from '@emotion/styled'
import theme from '../../theme/styledTheme'

type Status = 'success' | 'warning' | 'danger'

interface DialogProps {
  status: Status
  text: string
}

const getBackgroundColor = (status: Status): string => {
  if (status === 'success') {
    return theme.colors.accent.success
  } else if (status === 'warning') {
    return theme.colors.accent.warning
  }
  return theme.colors.accent.danger
}

const getDialogIcon = (status: Status): JSX.Element => {
  if (status === 'success') {
    return <AiOutlineCheck role='success-icon' className="dialog-icon" />
  } else if (status === 'warning') {
    return <AiOutlineWarning role='warning-icon' className="dialog-icon" />
  }
  return <AiOutlineStop role='danger-icon' className="dialog-icon" />
}

const DialogStyled = styled.div(({ status }: { status: Status }) => ({
  borderRadius: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px 0px 10px 0px',
  gap: '5px',
  backgroundColor: getBackgroundColor(status),
  '.dialog-icon': {
    color: 'white',
    fontSize: '20px'
  },
  p: {
    color: theme.colors.accent.white,
    fontWeight: theme.fonts.bold
  }
}))

const Dialog = ({ status, text }: DialogProps): JSX.Element => {
  return (
    <DialogStyled status={status} role='dialog'>
      {getDialogIcon(status)}
      <p>{text}</p>
    </DialogStyled>
  )
}

export default Dialog
