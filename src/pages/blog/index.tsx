import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'

import { PostGallery } from '../../components/PostGallery'
import Breadcrumb from '../../components/Breadcrumb'

function BlogList() {
  return (
    <>
      <Head>
        <title>Blog | Max</title>
      </Head>

      <Box mb={5}>
        <Breadcrumb />
      </Box>
      <PostGallery />
    </>
  )
}

export default BlogList
