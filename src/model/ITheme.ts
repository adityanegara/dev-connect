import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    layout: {
      mobile: string
      desktop: string
    }
    colors: {
      brown: string
      darkerBrown: string
      gray: string
      black: string
      white: string
    }
    fonts: {
      regular: string
      semibold: string
      bold: string
    }
  }
}
