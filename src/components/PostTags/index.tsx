import React from 'react'
import { Tag, Wrap, WrapItem } from '@chakra-ui/react'

type Tag = string

interface PostTagsProps {
  tags: Tag[]
}

const PostTags = ({ tags }: PostTagsProps) => {
  return (
    <Wrap className="tags">
      {tags.map((item) => (
        <WrapItem key={item}>
          <Tag size="sm">{item}</Tag>
        </WrapItem>
      ))}
    </Wrap>
  )
}

export { PostTags }
