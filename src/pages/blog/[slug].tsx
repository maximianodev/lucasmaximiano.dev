import React from 'react'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { RichTextContent } from '@graphcms/rich-text-types'
import { Box, Center } from '@chakra-ui/react'

import { clientApollo } from '../../client/apollo'
import { ALL_POSTS_SLUG, POST_BY_SLUG } from '../../graphql/queries/blog'
import { PostSkeleton } from '../../components/Skeleton/PostSkeleton'
import { PostAuthorInfo } from '../../components/PostAuthorInfo'
import { PostTags } from '../../components/PostTags'
import { PostContent } from '../../components/PostContent'
import { PostCoverImage } from '../../components/PostCoverImage'
import { Breadcrumb } from '../../components/Breadcrumb'
import { Layout } from '../../components/Layout'

type Author = {
  name: string
  picture: {
    url: string
  }
}

type Tag = string

type CoverImage = {
  fileName: string
  url: string
}

type Content = {
  raw: RichTextContent
}

type Post = {
  createdAt: Date
  category: string
  content: Content
  coverImage: CoverImage
  excerpt: string
  tags: Tag[]
  title: string
  author: Author
}

interface PostPageProps {
  post: Post
}

export const Post = ({ post }: PostPageProps) => {
  const router = useRouter()

  if (router.isFallback) return <PostSkeleton />

  if (!post) {
    setTimeout(() => router.push('/blog'), 3000)
    return <Center>Post Not Found ☹</Center>
  }

  const Meta = (
    <>
      <title>{`Blog - ${post.title}`}</title>
      <meta name="description" content={post.excerpt} />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.excerpt} />
      <meta property="og:url" content={router.asPath} />
      <meta property="og:type" content={`${post.tags}`} />
      <meta property="og:image" content={post.coverImage?.url} />
    </>
  )

  return (
    <Layout dynamicMeta={Meta}>
      <Box mb={5}>
        <Breadcrumb /> 
      </Box>

      <Box shadow="sm" borderRadius="md" borderWidth="1px" p={5}>
        <Box mb={5}>
          <PostCoverImage title={post.title} url={post.coverImage?.url} />
        </Box>

        <Box mb={5}>
          <PostAuthorInfo post={post} />
        </Box>

        <Box mb={5}>
          <PostTags tags={post.tags} />
        </Box>

        <Box>
          <PostContent title={post.title} content={post.content.raw} />
        </Box>
      </Box>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await clientApollo.query({
    query: ALL_POSTS_SLUG,
  })

  const paths = data.posts.map(({ slug }) => {
    return { params: { slug } }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { data } = await clientApollo.query({
      query: POST_BY_SLUG,
      variables: {
        slugName: context.params.slug
      },
    })
    const { post } = data

    return {
      props: { post },
      revalidate: 60 * 60 * 12, // 12 hours
    }
  } catch (err) {
    return {
      notFound: true,
    }
  }
}

export default Post
