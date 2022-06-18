import React from 'react'

import { AUTHOR_DATA_QUERY } from '../graphql/queries/home'

import { AuthorBiography } from '../components/AuthorBiography'

import type { AuthorProjectProps } from '../components/AuthorProjects'
import { apolloClient } from '../client/apollo'
import { Button,  useColorMode } from '@chakra-ui/react'

type Author = {
  biography: string
  projects: AuthorProjectProps[]
}

interface HomeProps {
  data: Author
}

function Home({ data }: HomeProps) {
  const { biography } = data
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div>
      <Button onClick={toggleColorMode} colorScheme="teal">
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
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
