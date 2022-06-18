import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import { apolloClient } from '../client/apollo'
import { theme } from '../styles/@chakra-ui/theme'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <Header />

        <main>
          <Component {...pageProps} />
        </main>

        <Footer />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
