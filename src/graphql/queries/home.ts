import { gql } from 'graphql-request'

const getDataHome = gql`
  query MyQuery {
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

export { getDataHome }
