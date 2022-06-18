import { gql } from '@apollo/client'

const PROJECTS = gql`
  query ProjectsQuery {
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
`

export { PROJECTS }
