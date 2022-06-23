import React from 'react'
import { useRouter } from 'next/router'
import { SimpleGrid } from '@chakra-ui/react'

import { ALL_POSTS } from '../../graphql/queries/blog'
import { apolloClient } from '../../client/apollo'

import { PostGallery } from '../../components/PostGallery'

interface Posts {
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

function BlogList({ posts }: Posts) {
  const router = useRouter()

  if (router.isFallback) return <h1>Loading...</h1>

  return (
    <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} spacing={5}>
      <PostGallery posts={posts} />
    </SimpleGrid>
  )
}

export const getServerSideProps = async () => {
  try {
    const { data } = await apolloClient.query({
      query: ALL_POSTS,
    })

    const { posts } = data

    if (!posts || !posts.length) {
      return {
        notFound: true,
      }
    }

    return {
      props: { posts },
    }
  } catch (err) {
    console.log(err)

    return {
      notFound: true,
    }
  }
}

export default BlogList
