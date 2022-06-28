import React from 'react'
import { Skeleton, Stack } from '@chakra-ui/react'

const PostSkeleton = () => {
  return (
    <Stack spacing={5}>
      <Skeleton width="100%" height="400px" />
      <Skeleton width="30%" height="80px" />
      <Skeleton width="30%" height="20px" />
      <Stack spacing={2}>
        {Array.from(Array(10).keys()).map((item) => (
          <Skeleton width="100%" height="10px" key={item} />
        ))}
      </Stack>
    </Stack>
  )
}

export { PostSkeleton }
