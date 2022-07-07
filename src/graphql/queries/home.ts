import { gql } from '@apollo/client'

const AUTHOR_DATA_QUERY = gql`
  query AuthorQuery {
    author(where: { name: "Lucas Maximiano" }) {
      id
      name
      biography {
        raw
      }
      picture {
        url(transformation: { image: { resize: { width: 300, height: 300 } } })
      }
    }
  }
`

export { AUTHOR_DATA_QUERY }
