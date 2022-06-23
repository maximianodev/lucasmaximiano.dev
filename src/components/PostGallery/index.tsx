import React from 'react'
import { Box } from '@chakra-ui/react'

import { PostCard } from '../PostCard'

interface PostGalleryProps {
  posts: [
    {
      category: string
      coverImage: {
        fileName: string
        url: string
      }
      excerpt: string
      id: string
      publishedAt: Date
      slug: string
      stage: string
      tags: string[]
      title: string
    }
  ]
}

function PostGallery({ posts }: PostGalleryProps): JSX.Element {
  return (
    <>
      {posts.map((post) => (
        <Box shadow="md" border="1px" borderRadius="md" key={post.id}>
          <PostCard post={post} />
        </Box>
      ))}
    </>
  )
}

export { PostGallery }
