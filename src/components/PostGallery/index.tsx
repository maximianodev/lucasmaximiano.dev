import React from 'react'
import { useQuery } from '@apollo/client'
import { Button, Center, SimpleGrid } from '@chakra-ui/react'

import { ALL_POSTS } from '../../graphql/queries/blog'
import { PostGallerySkeleton } from '../Skeleton/PostGallerySkeleton'
import { PostCard } from '../PostCard'
import { ErrorMessage } from '../ui/ErrorMessage'

interface PostGalleryProps {
  postsConnection: {
    edges: {
      node: {
        category: string
        coverImage: {
          fileName: string
          url: string
        }
        excerpt: string
        id: string
        publishedAt: Date
        slug: string
        stage: string
        tags: string[]
        title: string
      }
    }[]
    pageInfo: {
      hasNextPage: boolean
      hasPreviousPage: boolean
      pageSize: number
    }
  }
}

function PostGallery(): JSX.Element {
  const { data, loading, error, refetch } = useQuery<PostGalleryProps>(
    ALL_POSTS,
    {
      variables: {
        perPage: 4,
      },
    }
  )

  if (loading) return <PostGallerySkeleton />

  if (error || !data.postsConnection)
    return (
      <ErrorMessage
        title="Erro ao buscar os dados, tente novamente mais tarde"
        status="error"
      />
    )

  const { postsConnection } = data

  const posts = postsConnection.edges.map((post) => ({ ...post.node }))

  const hasNextPage = data.postsConnection.pageInfo.hasNextPage

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} spacing={5}>
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </SimpleGrid>

      {hasNextPage && (
        <Center
          mt={3}
          onClick={() => refetch({ perPage: postsConnection.edges.length + 4 })}
        >
          <Button>Load More</Button>
        </Center>
      )}
    </>
  )
}

export { PostGallery }
