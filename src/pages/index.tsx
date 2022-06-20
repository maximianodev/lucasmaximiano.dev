import React from 'react'

import { AUTHOR_DATA_QUERY } from '../graphql/queries/home'

import { AuthorBiography } from '../components/AuthorBiography'

import type { AuthorProjectProps } from '../components/AuthorProjects'
import { apolloClient } from '../client/apollo'
import Head from 'next/head'

type Author = {
  biography: { markdown: string }
  projects: AuthorProjectProps[]
}

interface HomeProps {
  data: Author
}

function Home({ data }: HomeProps) {
  const { biography } = data

  return (
    <>
      <Head>
        <title>Max | Home</title>
      </Head>
      <AuthorBiography data={biography.markdown} />
    </>
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
    props: {
      data: data.author,
    },
  }
}

export default Home
