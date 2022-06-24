import React from 'react'
import { useQuery } from '@apollo/client'
import { SimpleGrid } from '@chakra-ui/react'

import { ALL_POSTS } from '../../graphql/queries/blog'
import { PostGallerySkeleton } from '../Skeleton/PostGallerySkeleton'
import { PostCard } from '../PostCard'
import { ErrorMessage } from '../ui/ErrorMessage'

interface PostGalleryProps {
  posts: [
    {
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
  ]
}

function PostGallery(): JSX.Element {
  const { data, loading, error } = useQuery<PostGalleryProps>(ALL_POSTS)

  if (loading) return <PostGallerySkeleton />

  if (error)
    return (
      <ErrorMessage
        title="Erro ao buscar os dados, tente novamente mais tarde"
        status="error"
      />
    )

  const { posts } = data

  return (
    <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} spacing={5}>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </SimpleGrid>
  )
}

export { PostGallery }
