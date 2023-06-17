import { Inter } from 'next/font/google'
import './globals.css'
import { HomeLayout } from './layout/home_layout'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Pelucan - Sergio Velazquez Groomer</title>
      </head>
      <body className={inter.className}>

          <HomeLayout>
            {children}
          </HomeLayout>

      </body>
    </html>
  )
}
