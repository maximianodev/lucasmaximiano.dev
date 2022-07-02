import React from 'react'
import { Avatar, HStack, VStack } from '@chakra-ui/react'

import { formattedDate } from '../../utils/formatDate'

type Author = {
  name: string
  picture: {
    url: string
  }
}

interface PostAuthorInfoProps {
  post: {
    author: Author
    createdAt: Date
  }
}

const PostAuthorInfo = ({ post }: PostAuthorInfoProps) => {
  return (
    <HStack spacing={4}>
      <Avatar
        src={post.author.picture?.url}
        title={post.author.name}
        name={post.author.name}
        bg="teal.900"
      />

      <VStack align="flex-start" spacing={0}>
        <span>{post.author.name}</span>
        <small>{formattedDate(post.createdAt)}</small>
      </VStack>
    </HStack>
  )
}

export { PostAuthorInfo }
