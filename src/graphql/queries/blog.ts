import { gql } from '@apollo/client'

export const ALL_POSTS = gql`
  query AllPosts {
    posts {
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
    post(where: { slug: $slugName }) {
      id
      title
      tags
      slug
      publishedAt
      excerpt
      category
      content {
        raw
        html
        markdown
        text
      }
      coverImage {
        url
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
    posts {
      slug
    }
  }
`

export const LATEST_POSTS = gql`
  query LatestPosts($quantity: Int!) {
    posts(last: $quantity) {
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
