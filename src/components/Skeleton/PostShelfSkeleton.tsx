import React from 'react'
import { Skeleton, Stack } from '@chakra-ui/react'

const PostShelfSkeleton = () => {
  return (
    <Stack
      direction={['column', 'row']}
      w="100%"
      justify="space-between"
      spacing={5}
    >
      <Skeleton flex={1} h="300px" borderRadius="md" />
      <Skeleton flex={1} h="300px" borderRadius="md" />
      <Skeleton flex={1} h="300px" borderRadius="md" />
    </Stack>
  )
}

export { PostShelfSkeleton }
