import React from 'react'
import { Text, useColorMode } from '@chakra-ui/react'
import { RichTextContent } from '@graphcms/rich-text-types'

import { RichText } from '../ui/RichText'

interface PostContent {
  title: string
  content: RichTextContent
}

const PostContent = ({ title, content }: PostContent) => {
  const { colorMode } = useColorMode()

  const titleColor = {
    dark: '#fff',
    light: '#1a202c',
  }

  return (
    <div>
      <Text
        as="h1"
        fontSize="5xl"
        fontWeight="bold"
        color={'chakra-body-bg'}
        textShadow={`
            -2px -2px 0 ${titleColor[colorMode]},
            2px -2px 0 ${titleColor[colorMode]},
            -2px 2px 0 ${titleColor[colorMode]},
            2px 2px 0 ${titleColor[colorMode]};`}
      >
        {title}
      </Text>

      <RichText content={content} />
    </div>
  )
}

export { PostContent }
