import { gql } from 'graphql-request'

const AUTHOR_DATA_QUERY = gql`
  query AuthorQuery {
    author(where: { id: "cknk98fgop4um0c71r5p0o65m" }) {
      id
      name
      biography
      projects {
        id
        shortDescription {
          text
        }
        title
        image {
          url
        }
        language
        libraries
        url
        github
        framework
        databases
        typeAplication
      }
      timelines {
        content
      }
    }
  }
`

export { AUTHOR_DATA_QUERY }
