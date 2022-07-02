import React from 'react'
import Head from 'next/head'

import { AuthorBiography } from '../components/AuthorBiography'
import { PostShelf } from '../components/PostShelf'
import { Box } from '@chakra-ui/react'

function Home() {
  return (
    <>
      <Head>
        <title>Home | Max</title>
      </Head>
      <AuthorBiography />
      <Box my={7}>
        <PostShelf title="Latest Posts" />
      </Box>
    </>
  )
}

export default Home
