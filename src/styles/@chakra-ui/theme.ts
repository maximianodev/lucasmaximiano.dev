import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    body: `'Poppins', sans-serif`,
  },
})

export { theme }
