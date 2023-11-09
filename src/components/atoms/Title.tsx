import React from 'react'
import styled from '@emotion/styled'

interface TitleProps {
  text: string
}

const TitleWrapper = styled.a(({ theme }) => ({
  fontSize: '1.25em',
  margin: 0,
  fontFamily: theme.fonts.bold,
  cursor: 'pointer',
  transition: 'ease-in 0.2s',
  '&:hover': {
    color: theme.colors.primary.normal
  }
}))

const Title = ({ text }: TitleProps): JSX.Element => <TitleWrapper role='title'>{text}</TitleWrapper>

export default Title
