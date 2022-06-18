import React from 'react'
import Link from 'next/link'
import { Box, Container } from '@chakra-ui/react'

const Header = (): JSX.Element => {
  return (
    <Box as="header">
      <Container display="flex" alignItems="center">
        <Link href="/">
          <a>
            <span>Lucas Maximiano</span>
          </a>
        </Link>

        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </Box>
  )
}

export { Header }
