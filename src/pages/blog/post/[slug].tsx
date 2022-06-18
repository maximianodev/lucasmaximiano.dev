import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import ReactMarkDown from 'react-markdown'

import { ALL_POSTS_SLUG, POST_BY_SLUG } from '../../../graphql/queries/blog'
import { apolloClient } from '../../../client/apollo'

interface PostItem {
  post: {
    category: string
    content: { markdown: string }
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
    createdAt: string
  }
}

export const Post = ({ post }: PostItem) => {
  const router = useRouter()

  if (router.isFallback) return <>Carregando...</>

  if (!post) return <h1>Não foi possivel encontrar este post ☹</h1>

  return (
    <div>
      <Head>
        <title>{`Blog - ${post.title}`}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={router.asPath} />
        <meta property="og:type" content={`${post.tags}`} />
      </Head>
      <h1>{post.title}</h1>
      <div className="author">
        <img
          src={post.author.picture.url}
          title={post.author.name}
          alt={post.author.name}
        />
        <span>{post.author.name}</span>
      </div>
      <small>
        Postado em {new Date(post.createdAt).toLocaleDateString('pt-BR')}
      </small>
      <div className="tags">
        {post.tags.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <img src={post.coverImage.url} alt={post.title} className="post-img" />
      <div className="content">
        <ReactMarkDown>{post.content.markdown}</ReactMarkDown>
      </div>
    </div>
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
