import React from 'react'
import styled from '@emotion/styled'

interface ContainerProps {
  children: JSX.Element
  size: number
}

interface ContainerWrapperProps {
  size: number
}

const ContainerWrapper = styled.div(({ size }: ContainerWrapperProps) => ({
  marginLeft: 'auto',
  marginRight: 'auto',
  width: `${size}%`
}))

const Container = ({ children, size }: ContainerProps): JSX.Element => {
  return <ContainerWrapper role='container' size={size}>{children}</ContainerWrapper>
}

export default Container
