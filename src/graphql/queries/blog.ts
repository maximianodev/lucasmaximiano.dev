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
        url
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
        markdown
      }
      coverImage {
        url
      }
      author {
        name
        picture {
          url
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
