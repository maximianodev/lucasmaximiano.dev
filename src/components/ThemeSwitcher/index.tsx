import React from 'react'
import { Icon, Stack, Switch, useColorMode } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'

const ThemeSwitcher = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode()

  const isDarkMode = colorMode === 'dark' ? true : false

  return (
    <Stack direction="row" alignItems="center">
      <Icon as={FiSun} fontSize={['16px', '18px']} />
      <Switch
        colorScheme="teal"
        size={['lg']}
        onChange={toggleColorMode}
        isChecked={isDarkMode}
      />
      <Icon as={FiMoon} fontSize={['16px', '18px']} />
    </Stack>
  )
}

export { ThemeSwitcher }
