import React from 'react'
import Link from 'next/link'
import { Link as ChakraLink, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const Logo = (): JSX.Element => {
  const router = useRouter()

  function getRouteName() {
    return router.pathname.split('/')[1]
  }

  return (
    <Link href="/">
      <ChakraLink
        lineHeight={1}
        fontWeight="bold"
        fontSize={['2xl', '3xl']}
        position="relative"
      >
        Max{' '}
        <Text fontSize="x-small" position="absolute" top="-6px" right={0}>
          {getRouteName()}
        </Text>
      </ChakraLink>
    </Link>
  )
}

export { Logo }
