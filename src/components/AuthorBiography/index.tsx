import React from 'react'
import { Box, Image, HStack, Skeleton } from '@chakra-ui/react'
import { RichTextContent } from '@graphcms/rich-text-types'

import { RichText } from '../ui/RichText'
import { useQuery } from '@apollo/client'
import { AUTHOR_DATA_QUERY } from '../../graphql/queries/home'

type Author = {
  author: {
    biography: { raw: RichTextContent }
    picture: {
      url: string
    }
  }
}

const AuthorBiography = () => {
  const { data, loading, error } = useQuery<Author>(AUTHOR_DATA_QUERY)

  if (loading) return <Skeleton w="100%" h="400px" borderRadius="md" />

  const { author } = data

  return (
    <HStack
      borderWidth="1px"
      borderRadius="md"
      spacing={0}
      fontSize={['sm', 'md']}
      flexDirection={['column', 'row']}
      justifyContent="space-between"
      shadow="sm"
    >
      <Box pl={5} pr={0}>
        <RichText content={author.biography.raw} fontSize={['sm']} />
      </Box>
      <Image
        src={author.picture.url}
        width={['200px']}
        height={['auto', '200px']}
        objectFit="cover"
        objectPosition="center"
        borderRadius="md"
        alignSelf="flex-end"
      />
    </HStack>
  )
}

export { AuthorBiography }
