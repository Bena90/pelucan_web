import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"
import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"

export const HomeLayout = ({children}: {children: ReactNode}): JSX.Element => {

    return(
        <Box>
            <Navbar />
            {children}
            <Footer />
        </Box>
    )
}