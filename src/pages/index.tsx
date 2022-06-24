import React from 'react'
import Head from 'next/head'
import { RichTextContent } from '@graphcms/rich-text-types'

import { AUTHOR_DATA_QUERY } from '../graphql/queries/home'

import { AuthorBiography } from '../components/AuthorBiography'

import { clientApollo } from '../client/apollo'

type Author = {
  biography: { raw: RichTextContent }
  picture: {
    url: string
  }
}

interface HomeProps {
  data: Author
}

function Home({ data }: HomeProps) {
  return (
    <>
      <Head>
        <title>Max | Home</title>
      </Head>
      <AuthorBiography data={data} />
    </>
  )
}

export const getStaticProps = async () => {
  const { data } = await clientApollo.query({
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
