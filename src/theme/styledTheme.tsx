import { type Theme } from '@emotion/react'

const theme: Theme = {
  layout: {
    mobile: '400px',
    desktop: '1000px'
  },
  colors: {
    primary: {
      normal: '#FF432A',
      hover: '#E53C25'
    },
    accent: {
      backgroundColor: '#FFF0E5',
      black: '#000000',
      white: '#FFFFFF',
      gray: '#F1F1F1',
      danger: '#F32013',
      success: '#44bf60',
      warning: '#f0ad4e'
    }
  },
  fonts: {
    regular: 'InterRegular',
    semibold: 'InterSemibold',
    bold: 'InterBold'
  }
}

export default theme
