import { Skeleton, Stack } from '@chakra-ui/react'
import React from 'react'

const PostGallerySkeleton = () => {
  return (
    <Stack spacing={5}>
      <Stack spacing={5} direction={['row', 'row']}>
        <Skeleton borderRadius="md" width="100%" height="300px" />
        <Skeleton borderRadius="md" width="100%" height="300px" />
        <Skeleton
          borderRadius="md"
          width="100%"
          height="300px"
          display={['none', 'none', 'block']}
        />
      </Stack>

      <Stack spacing={5} direction={['row', 'row']}>
        <Skeleton borderRadius="md" width="100%" height="300px" />
        <Skeleton borderRadius="md" width="100%" height="300px" />
        <Skeleton
          borderRadius="md"
          width="100%"
          height="300px"
          display={['none', 'none', 'block']}
        />
      </Stack>
    </Stack>
  )
}

export { PostGallerySkeleton }
