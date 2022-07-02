import React from 'react'
import Link from 'next/link'
import {
  HStack,
  Link as ChakraLink,
  Box,
  useMediaQuery,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

type MenuItem = {
  title: string
  slug: string
}

interface MenuDesktopProps {
  data: MenuItem[]
}

function getPageName(route: string): string {
  const [, pageName] = route.split('/')

  return pageName
}

const MenuDesktop = ({ data }: MenuDesktopProps): JSX.Element => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')
  const { route } = useRouter()

  const currentRouterName = getPageName(route)

  if (!isDesktop) return null

  return (
    <Box as="header" w="100%">
      <HStack align="self-start" spacing={4}>
        {data.map((item) => (
          <Link href={`/${item.slug}`} key={item.slug}>
            <ChakraLink
              fontSize="lg"
              fontWeight={item.slug === currentRouterName ? 'bold' : 'normal'}
            >
              {item.title}
            </ChakraLink>
          </Link>
        ))}
      </HStack>
    </Box>
  )
}

export { MenuDesktop }
