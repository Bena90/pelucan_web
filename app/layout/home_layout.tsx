"use client"

import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"
import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"
import { ChakraProvider } from "../providers/chakra-provider"

interface HomeLayoutProps {
  children: ReactNode
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <ChakraProvider>
      <Box>
        <Navbar />
        {children}
        <Footer />
      </Box>
    </ChakraProvider>
  )
}