import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useToast } from '@chakra-ui/react'

interface ErrorMessageProps {
  title: string
  status: 'info' | 'warning' | 'success' | 'error' | 'loading'
}

const ErrorMessage = ({ title, status }: ErrorMessageProps) => {
  const toast = useToast()
  const { push } = useRouter()

  useEffect(() => {
    toast({
      title,
      status,
      isClosable: true,
    })

    setTimeout(() => push('/'), 3000)
  }, [])

  return <></>
}

export { ErrorMessage }
