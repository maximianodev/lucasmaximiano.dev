import React from 'react'
import { RichText as GraphCMSRichText } from '@graphcms/rich-text-react-renderer'
import { RichTextContent } from '@graphcms/rich-text-types'

import { Link, Text } from '@chakra-ui/react'

interface RichTextComponentProps {
  content: RichTextContent
}

const RichText = ({ content }: RichTextComponentProps) => {
  return (
    <GraphCMSRichText
      content={content}
      renderers={{
        h1: ({ children }) => (
          <Text as="h1" fontWeight="bold" mt={5} mb={3} fontSize="xxx-large">
            {children}
          </Text>
        ),
        h2: ({ children }) => (
          <Text as="h2" fontWeight="bold" mt={5} mb={3} fontSize="xx-large">
            {children}
          </Text>
        ),
        h3: ({ children }) => (
          <Text as="h3" fontWeight="bold" mt={5} mb={3} fontSize="x-large">
            {children}
          </Text>
        ),
        h4: ({ children }) => (
          <Text as="h4" fontWeight="bold" mt={5} mb={3} fontSize="large">
            {children}
          </Text>
        ),
        h5: ({ children }) => (
          <Text as="h5" fontWeight="bold" mt={5} mb={3} fontSize="medium">
            {children}
          </Text>
        ),
        h6: ({ children }) => (
          <Text as="h6" fontWeight="bold" mt={5} mb={3} fontSize="sm">
            {children}
          </Text>
        ),
        bold: ({ children }) => <Text as="strong">{children}</Text>,
        a: ({ children, href }) => <Link href={href}>{children}</Link>,
        code: ({ children }) => <Text as="code">{children}</Text>,
        p: ({ children }) => (
          <Text as="p" my={3}  fontSize="sm">
            {children}
          </Text>
        ),
      }}
    />
  )
}

export { RichText }
