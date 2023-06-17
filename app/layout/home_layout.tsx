"use client"
import { Box, ChakraProvider } from "@chakra-ui/react"
import { ReactNode } from "react"
import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"

export const HomeLayout = ({children}: {children: ReactNode}): JSX.Element => {

    return(
        <ChakraProvider>
            <Box>
                <Navbar />
                {children}
                <Footer />
            </Box>
        </ChakraProvider>
    )
}