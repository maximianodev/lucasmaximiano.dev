import React from 'react'
import { Box, Image, HStack } from '@chakra-ui/react'
import { RichTextContent } from '@graphcms/rich-text-types'

import { RichText } from '../ui/RichText'

type Author = {
  biography: { raw: RichTextContent }
  picture: {
    url: string
  }
}

interface AuthorBiographyProps {
  data: Author
}

const AuthorBiography = ({ data }: AuthorBiographyProps) => {
  return (
    <HStack
      align="self-start"
      borderWidth="1px"
      borderRadius="md"
      p={5}
      spacing={0}
      shadow="md"
      _hover={{ shadow: 'lg' }}
      transition="box-shadow .3s ease"
      fontSize={['sm', 'md']}
      flexDirection={['column', 'row']}
    >
      <Image
        src={data.picture.url}
        width={['100%', '300px']}
        height={['auto', '300px']}
        objectFit="cover"
        objectPosition="center"
        borderRadius="md"
      />
      <Box pl={['0', '1rem']} pt={['1rem', '0']}>
        <RichText content={data.biography.raw} fontSize={['sm', 'md']} />
      </Box>
    </HStack>
  )
}

export { AuthorBiography }
