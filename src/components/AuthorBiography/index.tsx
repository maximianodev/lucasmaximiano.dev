import { VStack } from '@chakra-ui/react'
import React from 'react'
import ReactMarkdown from 'react-markdown'

type AuthorBiographyProps = {
  data: string
}

const AuthorBiography = ({ data }: AuthorBiographyProps) => {
  return (
    <VStack
      align="self-start"
      borderWidth="1px"
      borderRadius="md"
      p={5}
      spacing={5}
      shadow="md"
      _hover={{ shadow: 'lg' }}
      transition="box-shadow .3s ease"
      fontSize={['sm', 'md']}
    >
      <ReactMarkdown>{data}</ReactMarkdown>
    </VStack>
  )
}

export { AuthorBiography }
