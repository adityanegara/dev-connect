import React from 'react'
import Container from '../Container'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Container', () => {
  it('should have a width equal to the props', () => {
    render(
        <Container size={90}>
          <p>Testing</p>
        </Container>
    )
    const container = screen.getByRole('container')
    expect(container).toHaveStyle('width: 90%')
  })
  it('Should render children', () => {
    render(
      <Container size={90}>
        <p>Testing</p>
      </Container>
    )
    const testingParagraph = screen.getByText('Testing')
    expect(testingParagraph).toBeInTheDocument()
  })
})
