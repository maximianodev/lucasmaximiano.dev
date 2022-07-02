import React from 'react'
import { Image } from '@chakra-ui/react'

interface PostCoverImageProps {
  url: string
  title: string
}

const PostCoverImage = ({ url, title }: PostCoverImageProps): JSX.Element => {
  if (!url) return <></>
  return (
    <Image
      src={url}
      alt={title}
      width="100%"
      height="250px"
      objectFit="cover"
      objectPosition="center"
      borderRadius="md"
    />
  )
}

export { PostCoverImage }
