import React from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import usePersistedState from '../hooks/usePersistedState'
import { GlobalStyle } from '../styles/global'
import { combineTheme, light } from '../styles/themes/index'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    'theme',
    combineTheme(light)
  )

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header themeContext={{ theme, setTheme, combineTheme }} />

      <Component {...pageProps} />

      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
