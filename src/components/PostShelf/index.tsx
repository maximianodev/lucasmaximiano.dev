import React from 'react'

import { PostShelfSkeleton } from '../Skeleton/PostShelfSkeleton'
import { PostCard } from '../PostCard'
import { SimpleGrid, Text, useColorMode } from '@chakra-ui/react'

export type PostShelfData = {
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

interface PostShelfProps {
  title: string
  posts: PostShelfData[]
}

const PostShelf = ({ title, posts }: PostShelfProps) => {
  const { colorMode } = useColorMode()

  if (!posts) {
    return <PostShelfSkeleton />
  }

  if (!posts.length) return <></>

  const themeBgColor = colorMode === 'dark' ? '#fff' : '#1a202c'

  return (
    <>
      <Text
        as="h2"
        fontWeight="bold"
        fontSize="4xl"
        mb={4}
        color={'chakra-body-bg'}
        textShadow={`
        -1px -1px 0 ${themeBgColor},
        1px -1px 0 ${themeBgColor},
        -1px 1px 0 ${themeBgColor},
        1px 1px 0 ${themeBgColor};`}
      >
        {title}
      </Text>
      <SimpleGrid
        columns={{ sm: 1, lg: 3 }}
        spacing={5}
        alignItems="center"
        justifyItems="center"
      >
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </SimpleGrid>
    </>
  )
}
export { PostShelf }
