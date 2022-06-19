import React from 'react'
import Link from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'

const Logo = (): JSX.Element => {
  return (
    <Link href="/">
      <ChakraLink fontWeight="bold" ml={5} fontSize="large" textDecor="underline">
        Lucas Maximiano
      </ChakraLink>
    </Link>
  )
}

export { Logo }
