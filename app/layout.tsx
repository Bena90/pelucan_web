"use client"
import { ChakraProvider } from '@chakra-ui/react'
import { Inter } from 'next/font/google'
import './globals.css'
import { HomeLayout } from './layout/home_layout'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Pelucan - Sergio Velazquez Groomer',
//   description: 'Pelucan - Sergio Velazquez Groomer',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <HomeLayout>
            {children}
          </HomeLayout>
        </ChakraProvider>
      </body>
    </html>
  )
}
