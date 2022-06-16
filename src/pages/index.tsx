import React from 'react'
import { request } from 'graphql-request'

import { AUTHOR_DATA_QUERY } from '../graphql/queries/home'

import { AuthorBiography } from '../components/AuthorBiography'
import { AuthorProjects } from '../components/AuthorProjects'
import { AuthorTimeline } from '../components/AuthorTimeline'

import type { AuthorProjectProps } from '../components/AuthorProjects'
import type { AuthorTimeLineContent } from '../components/AuthorTimeline'

type Author = {
  biography: string
  projects: AuthorProjectProps[]
  timelines: AuthorTimeLineContent[]
}

interface HomeProps {
  data: Author
}

function Home({ data }: HomeProps) {
  const { biography, projects, timelines } = data

  return (
    <main>
      <AuthorBiography data={biography} />

      <AuthorProjects data={projects} />

      <AuthorTimeline data={timelines} />
    </main>
  )
}

export const getStaticProps = async () => {
  const data = await request(process.env.GRAPHQL_URL, AUTHOR_DATA_QUERY)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    revalidate: 518400, // 6 Days
    props: {
      data: data.author,
    },
  }
}

export default Home
