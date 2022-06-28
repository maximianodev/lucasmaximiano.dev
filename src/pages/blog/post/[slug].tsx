import React from 'react'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { RichTextContent } from '@graphcms/rich-text-types'
import {
  Avatar,
  Box,
  Container,
  HStack,
  Text,
  VStack,
  Wrap,
  WrapItem,
  Image,
  useColorMode,
  Tag,
  Center,
} from '@chakra-ui/react'

import { ALL_POSTS_SLUG, POST_BY_SLUG } from '../../../graphql/queries/blog'
import { clientApollo } from '../../../client/apollo'
import { RichText } from '../../../components/ui/RichText'
import { formatData } from '../../../utils/formatDate'
import { PostSkeleton } from '../../../components/Skeleton/PostSkeleton'

interface PostPageProps {
  post: {
    category: string
    content: { raw: RichTextContent }
    coverImage: { fileName: string; url: string }
    excerpt: string
    id: string
    publishedAt: string
    slug: string
    stage: string
    tags: string[]
    title: string
    author: {
      name: string
      picture: {
        url: string
      }
    }
    createdAt: Date
  }
}

export const Post = ({ post }: PostPageProps) => {
  const router = useRouter()
  const { colorMode } = useColorMode()

  if (router.isFallback) return <PostSkeleton />

  if (!post) {
    setTimeout(() => router.push('/blog'), 3000)
    return <Center>Post Not Found ☹</Center>
  }

  const themeColor = colorMode === 'dark' ? 'base' : 'white'
  const themeColorInvert = colorMode === 'dark' ? 'base' : 'black'

  return (
    <>
      <Head>
        <title>{`Blog - ${post.title}`}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={router.asPath} />
        <meta property="og:type" content={`${post.tags}`} />
      </Head>

      <Container
        maxW="container.lg"
        border="1px"
        p={5}
        borderRadius="md"
        boxShadow="2xl"
      >
        <Image
          src={post.coverImage?.url}
          alt={post.title}
          width="100%"
          height="250px"
          objectFit="cover"
          objectPosition="center"
          borderRadius="md"
        />

        <HStack spacing={4} mt={7} mb={5}>
          <Avatar
            src={post.author.picture?.url}
            title={post.author.name}
            name={post.author.name}
          />
          <VStack align="flex-start" spacing={0}>
            <span>{post.author.name}</span>
            <small>{formatData(post.createdAt)}</small>
          </VStack>
        </HStack>

        <Wrap className="tags">
          {post.tags.map((item) => (
            <WrapItem key={item}>
              <Tag size="sm">{item}</Tag>
            </WrapItem>
          ))}
        </Wrap>

        <Box mt={10} mb={5}>
          <Text
            as="h1"
            fontSize="5xl"
            fontWeight="bold"
            color={themeColor}
            textShadow={`
            -2px -2px 0 ${themeColorInvert}, 
            2px -2px 0 ${themeColorInvert}, 
            -2px 2px 0 ${themeColorInvert}, 
            2px 2px 0 ${themeColorInvert};
            `}
          >
            {post.title}
          </Text>
        </Box>

        <RichText content={post.content.raw} />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { data } = await clientApollo.query({
      query: POST_BY_SLUG,
      variables: {
        slugName: context.params.slug,
      },
    })
    const { post } = data

    return {
      props: { post },
      revalidate: 60 * 60 * 24,
    }
  } catch (err) {
    return {
      notFound: true,
    }
  }
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

export default Post
