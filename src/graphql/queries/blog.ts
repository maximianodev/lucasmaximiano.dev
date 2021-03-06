import { gql } from '@apollo/client'

export const ALL_POSTS = gql`
  query AllPosts($perPage: Int!) {
    postsConnection(orderBy: createdAt_DESC, first: $perPage) {
      pageInfo {
        pageSize
        hasPreviousPage
        hasNextPage
      }
      edges {
        node {
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
            url(
              transformation: { image: { resize: { width: 350, height: 350 } } }
            )
          }
          content {
            markdown
          }
        }
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
    posts(orderBy: createdAt_DESC) {
      slug
    }
  }
`

export const LATEST_POSTS = gql`
  query LatestPosts($quantity: Int!) {
    posts(last: $quantity, orderBy: createdAt_DESC) {
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
