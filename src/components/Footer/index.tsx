import { Container } from '@chakra-ui/react'
import React from 'react'
import { SocialNetwork } from '../SocialNetwork'

const Footer = (): JSX.Element => {
  return (
    <Container as="footer" py={10} maxW='container.xl'>
      <SocialNetwork />
    </Container>
  )
}

export { Footer }
