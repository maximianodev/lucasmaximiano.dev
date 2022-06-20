import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { ALL_POSTS } from '../../graphql/queries/blog'
import { apolloClient } from '../../client/apollo'
import {
  Box,
  VStack,
  Link as ChakraLink,
  Image,
  HStack,
  Text,
} from '@chakra-ui/react'

interface Posts {
  posts: [
    {
      category: string
      coverImage: {
        fileName: string
        url: string
      }
      excerpt: string
      id: string
      publishedAt: string
      slug: string
      stage: string
      tags: string[]
      title: string
    }
  ]
}

function BlogList({ posts }: Posts) {
  const router = useRouter()

  if (router.isFallback) return <h1>carregando...</h1>

  return (
    <VStack align="flex-start" spacing={5}>
      {posts.map((post) => (
        <Box shadow="md" border="1px" borderRadius="md" key={post.id}>
          <Link href={`/blog/post/${post.slug}`}>
            <ChakraLink p={3} display="block">
              <HStack align="flex-start" spacing={3}>
                <Image
                  src={post.coverImage.url}
                  alt={post.slug}
                  height="200px"
                  width="200px"
                  objectFit="cover"
                  objectPosition="center"
                  borderRadius="md"
                />
                <Box>
                  <Text as="h2" fontSize="xl">
                    {post.title}
                  </Text>
                  <HStack>
                    {post.tags.map((tag) => (
                      <Text key={tag} fontSize="xs">
                        {tag}
                      </Text>
                    ))}
                  </HStack>
                  <Text as="time" fontSize="xs">
                    {post.publishedAt}
                  </Text>
                  <Text mt={4}>{post.excerpt}</Text>
                </Box>
              </HStack>
            </ChakraLink>
          </Link>
        </Box>
      ))}
    </VStack>
  )
}

export const getServerSideProps = async () => {
  try {
    const { data } = await apolloClient.query({
      query: ALL_POSTS,
    })

    const { posts } = data

    if (!posts || !posts.length) {
      return {
        notFound: true,
      }
    }

    return {
      props: { posts },
    }
  } catch (err) {
    console.log(err)

    return {
      notFound: true,
    }
  }
}

export default BlogList
