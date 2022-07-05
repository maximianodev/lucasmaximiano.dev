import {
  Box,
  Button,
  HStack,
  Icon,
  Text,
  useMediaQuery,
} from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiArrowLeft } from 'react-icons/fi'
import { Link as ChakraLink } from '@chakra-ui/react'

type Paths = string[]

const Breadcrumb = () => {
  const router = useRouter()
  const paths: Paths = router.asPath.split('/')?.slice(1)
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <HStack align="center" spacing={0}>
      <Box pr={3}>
        <Button
          borderWidth="1px"
          width="30px"
          height="30px"
          borderRadius="100%"
          p={0}
          minW="initial"
          onClick={router.back}
        >
          <Icon as={FiArrowLeft} />
        </Button>
      </Box>

      {isDesktop && paths?.map((path, index) => (
        <React.Fragment key={path}>
          {index !== 0 && (
            <Text fontSize="smaller" px="3px">
              /
            </Text>
          )}

          <Link href={`/${path}`}>
            <ChakraLink fontSize="smaller" textDecor="underline">
              {path}
            </ChakraLink>
          </Link>
        </React.Fragment>
      ))}
    </HStack>
  )
}

export { Breadcrumb }
