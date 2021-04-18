import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      background: string
      light: string
      dark: string
      overlay: string
      colorGrey: string
      colorText: string
      colorLabel: string
      colorDisabled: string
    }
    sizes: {
      xsmall: string
      small: string
      medium: string
      large: string
      xlarge: string
      xxlarge: string
      xxxlarge: string
    },
    font: {
      family: {
        primary: string
        secondary: string
      },
      weight: {
        light: number
        normal: number
        bold: number
      }
    }
  }

  export interface CustomTheme {
    title: string
    colors: {
      background: string
      light: string
      dark: string
      overlay: string
      colorGrey: string
      colorText: string
      colorLabel: string
      colorDisabled: string
    }
  }
}