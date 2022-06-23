import React from 'react'
import Link from 'next/link'
import {
  Box,
  Link as ChakraLink,
  Image,
  HStack,
  Text,
  useMediaQuery,
} from '@chakra-ui/react'

import { formatData } from '../../utils/formatDate'

interface PostCardProps {
  post: {
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
}

function PostCard({ post }: PostCardProps): JSX.Element {
  const [isPhone] = useMediaQuery('(max-width: 767px)')

  return (
    <Box shadow="md" borderRadius="md" key={post.id}>
      <Link href={`/blog/post/${post.slug}`}>
        <ChakraLink p={3} display="block">
          {isPhone && (
            <Image
              src={post.coverImage.url}
              alt={post.slug}
              height="200px"
              width={'100%'}
              objectFit="cover"
              objectPosition="center"
              borderRadius="md"
              display={['block', 'block', 'none']}
              mb={3}
            />
          )}
          <HStack align="flex-start" spacing={3}>
            {!isPhone && (
              <Image
                src={post.coverImage.url}
                alt={post.slug}
                height="200px"
                width="200px"
                objectFit="cover"
                objectPosition="center"
                borderRadius="md"
              />
            )}
            <Box>
              <Text as="h2" fontSize="xl">
                {post.title}
              </Text>
              <HStack my={1}>
                {post.tags.map((tag) => (
                  <Text
                    key={tag}
                    fontSize="x-small"
                    bg="blackAlpha.200"
                    color="currentcolor"
                    fontWeight="bold"
                    py="3px"
                    px="7px"
                    borderRadius="sm"
                  >
                    {tag}
                  </Text>
                ))}
              </HStack>
              <Text as="time" fontSize="xs">
                {formatData(post.publishedAt)}
              </Text>
              <Text mt={4} fontSize="sm">
                {post.excerpt}
              </Text>
            </Box>
          </HStack>
        </ChakraLink>
      </Link>
    </Box>
  )
}

export { PostCard }
