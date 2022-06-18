import { gql } from "@apollo/client";

const PROJECTS = gql`
  query ProjectsQuery {
    author(where: { id: "cknk98fgop4um0c71r5p0o65m" }) {
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
    }
  }
`

export { PROJECTS }
