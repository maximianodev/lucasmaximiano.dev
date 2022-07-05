import React from 'react'
import { Box, Image, HStack } from '@chakra-ui/react'
import { RichTextContent } from '@graphcms/rich-text-types'

import { RichText } from '../ui/RichText'

export type Author = {
  biography: { raw: RichTextContent }
  picture: {
    url: string
  }
}

interface AuthorBiographyProps {
  author: Author
}

const AuthorBiography = ({ author }: AuthorBiographyProps) => {
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
