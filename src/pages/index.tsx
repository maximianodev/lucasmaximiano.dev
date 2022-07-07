import React from 'react'
import { GetStaticProps } from 'next'
import { Box } from '@chakra-ui/react'

import { clientApollo } from '../client/apollo'
import { AUTHOR_DATA_QUERY } from '../graphql/queries/home'
import { AuthorBiography } from '../components/AuthorBiography'
import { PostShelf } from '../components/PostShelf'
import { LATEST_POSTS } from '../graphql/queries/blog'

import type { PostShelfData } from '../components/PostShelf'
import type { Author } from '../components/AuthorBiography'
import { Layout } from '../components/Layout'

interface HomeProps {
  author: Author
  posts: PostShelfData[]
}

function Home({ author, posts }: HomeProps) {
  return (
    <Layout>
      <AuthorBiography author={author} />

      <Box my={7}>
        <PostShelf title="Latest Posts" posts={posts} />
      </Box>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: authorData } = await clientApollo.query({
    query: AUTHOR_DATA_QUERY,
  })

  const { data: postsData } = await clientApollo.query({
    query: LATEST_POSTS,
    variables: {
      quantity: 3,
    },
  })

  return {
    props: {
      author: authorData.author,
      posts: postsData.posts,
    },
    revalidate: 60 * 60 * 12,
  }
}

export default Home
