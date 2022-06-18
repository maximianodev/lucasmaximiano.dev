import { gql } from "@apollo/client";

const AUTHOR_DATA_QUERY = gql`
  query AuthorQuery {
    author(where: { id: "cknk98fgop4um0c71r5p0o65m" }) {
      id
      name
      biography
    }
  }
`

export { AUTHOR_DATA_QUERY }
