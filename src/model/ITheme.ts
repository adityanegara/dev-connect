import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    layout: {
      mobile: string
      desktop: string
    }
    colors: {
      primary: {
        normal: string
        hover: string
      }
      accent: {
        backgroundColor: string
        black: string
        gray: string
        white: string
        danger: string
      }
    }
    fonts: {
      regular: string
      semibold: string
      bold: string
    }
  }
}
