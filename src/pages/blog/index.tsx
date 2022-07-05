import React from 'react'
import { Box } from '@chakra-ui/react'

import { PostGallery } from '../../components/PostGallery'
import { Breadcrumb } from '../../components/Breadcrumb'
import { Layout } from '../../components/Layout'

function BlogList() {
  return (
    <Layout>
      <Box mb={5}>
        <Breadcrumb />
      </Box>
      <PostGallery />
    </Layout>
  )
}

export default BlogList
