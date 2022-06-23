import React from 'react'
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
} from '@chakra-ui/react'

import { ALL_POSTS_SLUG, POST_BY_SLUG } from '../../../graphql/queries/blog'
import { apolloClient } from '../../../client/apollo'
import { RichText } from '../../../components/ui/RichText'
import { formatData } from '../../../utils/formatDate'

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

  if (router.isFallback) return <>Carregando...</>

  if (!post) return <h1>Não foi possivel encontrar este post ☹</h1>

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
            <WrapItem
              key={item}
              fontSize="x-small"
              bg="blackAlpha.200"
              color="currentcolor"
              fontWeight="bold"
              py="3px"
              px="7px"
              borderRadius="sm"
            >
              {item}
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

export const getStaticProps = async (context) => {
  try {
    const { data } = await apolloClient.query({
      query: POST_BY_SLUG,
      variables: {
        slugName: context.params.slug,
      },
    })
    const { post } = data

    if (!post) {
      return {
        notFound: true,
      }
    }

    return {
      props: { post },
    }
  } catch (err) {
    console.log(err)

    return {
      notFound: true,
    }
  }
}

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query({
    query: ALL_POSTS_SLUG,
  })

  const paths = data.posts.map(({ slug }) => {
    return { params: { slug: slug } }
  })

  return {
    paths,
    fallback: true,
  }
}

export default Post
