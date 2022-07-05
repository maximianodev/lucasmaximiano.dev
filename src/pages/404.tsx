import React from 'react'
import Link from 'next/link'
import { Center, Link as ChakraLink } from '@chakra-ui/react'
import { Layout } from '../components/Layout'

function Custom404() {
  return (
    <Layout>
      <Center bg="blackAlpha.300">
        <Link href="/">
          <ChakraLink>
            <img src="/images/404.gif" />
          </ChakraLink>
        </Link>
      </Center>
    </Layout>
  )
}

export default Custom404
