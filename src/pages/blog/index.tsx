import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { ALL_POSTS } from '../../graphql/queries/blog'
import { apolloClient } from '../../client/apollo'

interface Posts {
  posts: [
    {
      category: string
      content: {
        markdown: string
      }
      coverImage: {
        fileName: string
        url: string
      }
      excerpt: string
      id: string
      publishedAt: string
      slug: string
      stage: string
      tags: string[]
      title: string
    }
  ]
}

function BlogList({ posts }: Posts) {
  const router = useRouter()

  if (router.isFallback) return <h1>carregando...</h1>

  return (
    <div>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <Link href={`/blog/post/${post.slug}`}>
            <a style={{ background: `url(${post.coverImage.url})` }}>
              <h2>{post.title}</h2>
            </a>
          </Link>
        </div>
      ))}
    </div>
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
