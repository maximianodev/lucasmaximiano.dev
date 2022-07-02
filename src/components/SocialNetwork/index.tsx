import React from 'react'
import { HStack, Icon, Link } from '@chakra-ui/react'
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi'

const SocialNetwork = () => {
  return (
    <HStack as="address" spacing={5}>
      <Link
        href="mailto:lucas97lopes@hotmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon as={FiMail} fontSize={['22px', '24px']} />
      </Link>
      <Link
        href="https://www.instagram.com/lucasl.max/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon as={FiInstagram} fontSize={['22px', '24px']} />
      </Link>
      <Link
        href="https://github.com/maximianodev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon as={FiGithub} fontSize={['22px', '24px']} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/lucaslopesmaximiano/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon as={FiLinkedin} fontSize={['22px', '24px']} />
      </Link>
    </HStack>
  )
}

export { SocialNetwork }
