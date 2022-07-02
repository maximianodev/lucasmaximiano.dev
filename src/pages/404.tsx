import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Center, Link as ChakraLink } from '@chakra-ui/react'

function Custom404() {
  return (
    <>
      <Head>
        <title>404 | Max</title>
      </Head>
      <Center bg="blackAlpha.300">
        <Link href="/">
          <ChakraLink>
            <img src="/images/404.gif" />
          </ChakraLink>
        </Link>
      </Center>
    </>
  )
}

export default Custom404
