/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { isRouteErrorResponse } from 'react-router-dom'

const getErrorPageMessage = (error: unknown): string => {
  let errorMessage: string
  if (isRouteErrorResponse(error)) {
    errorMessage = error.data.message || error.statusText
  } else if (error instanceof Error) {
    errorMessage = error.message
  } else if (typeof error === 'string') {
    errorMessage = error
  } else {
    errorMessage = 'Unknown error'
  }
  return errorMessage
}

export default getErrorPageMessage
