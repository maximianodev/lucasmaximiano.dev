import React from 'react'
import { Box, Container } from '@chakra-ui/react'

import { MenuMobile } from './MenuMobile'
import { Logo } from '../Logo'
import { ThemeSwitcher } from '../ThemeSwitcher'

const menuItems = [
  { slug: '', title: 'Home' },
  { slug: 'blog', title: 'Blog' },
  { slug: 'projects', title: 'Projects' },
]

const Header = (): JSX.Element => {
  return (
    <Box as="header">
      <Container display="flex" alignItems="center" justifyContent="space-between" py={5}>
        <Box display="flex" alignItems="center">
          <MenuMobile data={menuItems} />

          <Logo />
        </Box>

        <ThemeSwitcher />
      </Container>
    </Box>
  )
}

export { Header }
