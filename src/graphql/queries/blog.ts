import { gql } from '@apollo/client'

export const ALL_POSTS = gql`
  query AllPosts {
    posts(orderBy: createdAt_DESC, locales: en) {
      id
      title
      slug
      tags
      stage
      publishedAt
      excerpt
      category
      coverImage {
        fileName
        url(transformation: { image: { resize: { width: 350, height: 350 } } })
      }
      content {
        markdown
      }
    }
  }
`

export const POST_BY_SLUG = gql`
  query PostBySlug($slugName: String) {
    post(where: { slug: $slugName }, locales: en) {
      id
      title
      tags
      slug
      publishedAt
      excerpt
      category
      content {
        raw
      }
      coverImage {
        url(transformation: { image: { resize: { width: 1300, height: 400 } } })
      }
      author {
        name
        picture {
          url(
            transformation: { image: { resize: { width: 100, height: 100 } } }
          )
        }
      }
      createdAt
    }
  }
`

export const ALL_POSTS_SLUG = gql`
  query AllPostSlug {
    posts(orderBy: createdAt_DESC, locales: en) {
      slug
    }
  }
`

export const LATEST_POSTS = gql`
  query LatestPosts($quantity: Int!) {
    posts(last: $quantity, orderBy: createdAt_DESC, locales: en) {
      title
      slug
      tags
      excerpt
      category
      updatedAt
      coverImage {
        fileName
        url
      }
    }
  }
`
