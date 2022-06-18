import React from 'react'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import { apolloClient } from '../client/apollo'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={apolloClient}>
      <Header />

      <main>
        <Component {...pageProps} />
      </main>

      <Footer />
    </ApolloProvider>
  )
}

export default MyApp
