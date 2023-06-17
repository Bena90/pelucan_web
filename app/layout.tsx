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
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16"/>
      </head>
      <body className={inter.className}>

          <HomeLayout>
            {children}
          </HomeLayout>

      </body>
    </html>
  )
}
