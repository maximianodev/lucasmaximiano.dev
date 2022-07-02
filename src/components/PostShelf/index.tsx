import React from 'react'
import { useQuery } from '@apollo/client'

import { PostShelfSkeleton } from '../Skeleton/PostShelfSkeleton'
import { LATEST_POSTS } from '../../graphql/queries/blog'
import { PostCard } from '../PostCard'
import {
  Center,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react'

type PostShelfData = {
  posts: {
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
  }[]
}

interface PostShelfProps {
  title: string
}

const PostShelf = ({ title }: PostShelfProps) => {
  const { data, loading, error } = useQuery<PostShelfData>(LATEST_POSTS, {
    variables: {
      quantity: 3,
    },
  })
  const { colorMode } = useColorMode()

  if (loading) {
    return <PostShelfSkeleton />
  }

  if (error) {
    return <></>
  }

  const { posts } = data

  const themeBgColor = colorMode === 'dark' ? '#fff' : '#1a202c'

  return (
    <>
      <Text
        as="h2"
        fontWeight="bold"
        fontSize="4xl"
        mb={4}
        color={"chakra-body-bg"}
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
