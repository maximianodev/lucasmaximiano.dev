import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { ChakraProvider, Container, VStack } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import { clientApollo } from '../client/apollo'
import { theme } from '../styles/@chakra-ui/theme'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={clientApollo}>
      <ChakraProvider theme={theme}>
        <VStack minHeight="100vh">
          <Header />

          <Container flex={1} maxW="container.lg">
            <Component {...pageProps} />
          </Container>

          <Footer />
        </VStack>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
