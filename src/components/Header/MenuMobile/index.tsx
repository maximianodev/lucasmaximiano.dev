import React, { useEffect } from 'react'
import Link from 'next/link'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  VStack,
  Link as ChakraLink,
  useMediaQuery,
  Icon,
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { SocialNetwork } from '../../SocialNetwork'

type MenuItem = {
  title: string
  slug: string
}

interface MenuMobileProps {
  data: MenuItem[]
}

const MenuMobile = ({ data }: MenuMobileProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isPhone] = useMediaQuery('(max-width: 767px)')
  const { route } = useRouter()

  const btnRef = React.useRef()

  useEffect(() => {
    if (isPhone) {
      onClose()
    }
  }, [route])

  if (!isPhone) {
    return null
  }

  return (
    <div>
      <Button ref={btnRef} variant="outline" onClick={onOpen}>
        <Icon as={FiMenu} fontSize={24}  />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody mt={7}>
            <VStack align="self-start">
              {data.map((item) => (
                <Link href={`/${item.slug}`} key={item.slug}>
                  <ChakraLink>{item.title}</ChakraLink>
                </Link>
              ))}
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <SocialNetwork />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export { MenuMobile }
