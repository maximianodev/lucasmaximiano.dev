import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import { SocialNetwork } from '../SocialNetwork'

const Footer = (): JSX.Element => {
  return (
    <Box w="100%">
      <Container as="footer" py={10} maxW="container.lg">
        <SocialNetwork />
      </Container>
    </Box>
  )
}

export { Footer }
