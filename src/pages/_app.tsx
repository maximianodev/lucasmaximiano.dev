import React, { useEffect } from 'react'

import usePersistedState from '../utils/usePersistedState'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { combineTheme, light, dark } from '../styles/themes/index'

import Header from '../components/Header'
import Footer from '../components/Footer'

function getTimeForTheme() {
  const date = new Date();
  const hours = date.getHours();
  if (hours < 18) {
    return light;
  } else {
    return dark;
  }
}

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', combineTheme(getTimeForTheme()))

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? combineTheme(dark) : combineTheme(light));
  }

  console.log("version 1.0.1")

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp