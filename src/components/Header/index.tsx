import React from 'react'
import { Box, Container, HStack } from '@chakra-ui/react'

import { MenuMobile } from './MenuMobile'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { MenuDesktop } from './MenuDesktop'

const menuItems = [
  { slug: '', title: 'Home' },
  { slug: 'blog', title: 'Blog' }
]

const Header = (): JSX.Element => {
  return (
    <Box as="header" w="100%">
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        py={[5, 7]}
        maxW="container.lg"
      >
        <HStack display="flex" alignItems="center" spacing={[5, 10]}>
          <MenuMobile data={menuItems} />

          <MenuDesktop data={menuItems} />
        </HStack>

        <ThemeSwitcher />
      </Container>
    </Box>
  )
}

export { Header }
