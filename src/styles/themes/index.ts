import { DefaultTheme, CustomTheme } from 'styled-components'
import { light, dark } from './themes'

const defaultTheme = {
  sizes: {
    xsmall: '14px',
    small: '16px',
    medium: '18px',
    large: '22px',
    xlarge: '36px',
    xxlarge: '48px',
    xxxlarge: '90px'
  },
  font: {
    family: {
      primary: "'Nunito Sans', sans-serif",
      secondary: "sans-serif"
    },
    weight: {
      light: 200,
      normal: 400,
      bold: 900,
    }
  }
}


function combineTheme(theme: CustomTheme): DefaultTheme {
  return { ...defaultTheme, ...theme }
}

export { combineTheme, dark, light }
