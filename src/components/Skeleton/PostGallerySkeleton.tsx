import { Skeleton, Stack } from '@chakra-ui/react'
import React from 'react'

const PostGallerySkeleton = () => {
  return (
    <Stack spacing={5}>
      <Stack spacing={5} direction={['column', 'row']}>
        <Skeleton width="100%" height="200px" />
        <Skeleton width="100%" height="200px" />
      </Stack>

      <Stack spacing={5} direction={['column', 'row']}>
        <Skeleton width="100%" height="200px" />
        <Skeleton width="100%" height="200px" />
      </Stack>
    </Stack>
  )
}

export { PostGallerySkeleton }
