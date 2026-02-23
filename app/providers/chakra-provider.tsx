"use client"

import { ChakraProvider as ChakraUIProvider } from "@chakra-ui/react"
import { ReactNode } from "react"

interface ChakraProviderProps {
  children: ReactNode
}

export const ChakraProvider = ({ children }: ChakraProviderProps) => {
  return (
    <ChakraUIProvider>
      {children}
    </ChakraUIProvider>
  )
}
