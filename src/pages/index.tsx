import React from 'react'

import { AUTHOR_DATA_QUERY } from '../graphql/queries/home'

import { AuthorBiography } from '../components/AuthorBiography'

import type { AuthorProjectProps } from '../components/AuthorProjects'
import { apolloClient } from '../client/apollo'

type Author = {
  biography: string
  projects: AuthorProjectProps[]
}

interface HomeProps {
  data: Author
}

function Home({ data }: HomeProps) {
  const { biography } = data

  return (
    <div>
      <AuthorBiography data={biography} />
    </div>
  )
}

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: AUTHOR_DATA_QUERY,
  })

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
