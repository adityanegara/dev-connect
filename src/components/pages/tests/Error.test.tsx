import './matchMedia.mock'
import React from 'react'
import Error from '../Error'
import { render } from '@testing-library/react'
import { useRouteError } from 'react-router-dom'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRouteError: jest.fn()
}))

describe('Error page', () => {
  it('Should render error page', () => {
    const mockAdd = jest.fn(useRouteError)
    mockAdd.mockReturnValue(5)
    render(<Error />)
  })
})
