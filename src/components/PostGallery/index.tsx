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
        perPage: 6,
      },
    }
  )

  if (loading) return <PostGallerySkeleton />
  if (error)
    return (
      <ErrorMessage
        title="Erro ao buscar os dados, tente novamente mais tarde"
        status="error"
      />
    )

  const { postsConnection } = data
  const posts = postsConnection.edges.map((post) => ({ ...post.node }))
  const hasNextPage = data.postsConnection.pageInfo.hasNextPage

  function loadMore() {
    refetch({
      perPage: postsConnection.edges.length + 3,
    })
  }

  return (
    <>
      <SimpleGrid columns={{ sm: 2, md: 2, lg: 3 }} spacing={5}>
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </SimpleGrid>

      {hasNextPage && (
        <Center mt={3} onClick={loadMore}>
          <Button>Load More</Button>
        </Center>
      )}
    </>
  )
}

export { PostGallery }
