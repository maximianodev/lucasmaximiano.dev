import { Container, VStack } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

import { Footer } from '../Footer'
import { Header } from '../Header'
import { Meta } from '../Meta'

type LayoutProps = {
  children: ReactNode
  dynamicMeta?: ReactNode
}

function Layout({ children, dynamicMeta }: LayoutProps): JSX.Element {
  return (
    <VStack minHeight="100vh">
      <Meta dynamicMeta={dynamicMeta} />

      <Header />

      <Container flex={1} maxW="container.lg">
        {children}
      </Container>

      <Footer />
    </VStack>
  )
}

export { Layout }
