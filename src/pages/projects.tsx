import React from 'react'

import { AuthorProjects } from '../components/AuthorProjects'

import type { AuthorProjectProps } from '../components/AuthorProjects'
import { apolloClient } from '../client/apollo'
import { PROJECTS } from '../graphql/queries/projects'

interface ProjectsPageProps {
  projects: AuthorProjectProps[]
}

function Home({ projects }: ProjectsPageProps) {
  
  return (
    <div>
      <h1>Projetos</h1>

      <AuthorProjects data={projects} />
    </div>
  )
}

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: PROJECTS,
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    revalidate: 518400, // 6 Days
    props: {
      projects: data.author.projects,
    },
  }
}

export default Home
