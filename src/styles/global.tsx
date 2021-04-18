import { createGlobalStyle, css } from 'styled-components'
import media from 'styled-media-query'


const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      outline: none;
      font-family: ${theme.font.family.primary};
    }
  
    body {
      color: ${theme.colors.colorText};
      background: ${theme.colors.background};
      font-size: ${theme.sizes.medium};
      ${media.lessThan('large')`
        font-size: ${theme.sizes.xsmall};
      `}
    }

    body * {
      &::selection {
        background: ${theme.colors.colorText};
        color: ${theme.colors.background};
      } 
    }

    .container {
      max-width: 48rem;
      margin: 0 auto;
      ${media.lessThan('large')`
        max-width: 100%;
        margin: unset;
      `}
    }

    img {
      max-width: 100%;
      height: auto;
    }
    
    ${media.lessThan('large')`
      html {
          font-size: 93.75%;
      }
    `}
    ${media.lessThan('medium')`
      html {
          font-size: 87.5%;
      }
    `}
  `}
`

export { GlobalStyle }