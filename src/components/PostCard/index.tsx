import React from 'react'
import Link from 'next/link'
import {
  Box,
  Link as ChakraLink,
  Image,
  HStack,
  Text,
  Tag,
} from '@chakra-ui/react'

import { formattedDate } from '../../utils/formatDate'

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
  return (
    <Box shadow="sm" borderRadius="md" key={post.id} borderWidth="1px">
      <Link href={`/blog/${post.slug}`}>
        <ChakraLink p={3} display="block">
          <Image
            src={post.coverImage?.url}
            alt={post.slug}
            height="200px"
            width={'100%'}
            objectFit="cover"
            objectPosition="center"
            borderRadius="md"
            mb={3}
          />

          <HStack align="flex-start" spacing={3}>
            <Box>
              <Text as="h2" fontSize="xl">
                {post.title}
              </Text>

              <HStack my={1}>
                {post.tags.map((tag) => (
                  <Tag key={tag} size="sm">
                    {tag}
                  </Tag>
                ))}
              </HStack>

              <Text as="time" fontSize="xs">
                {formattedDate(post.publishedAt)}
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
