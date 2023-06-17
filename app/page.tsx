"use client"
import { Divider } from '@chakra-ui/react'
import { Metadata } from 'next'
import ArticleList from './components/about/about'
import Contact from './components/contact/contact'
import Feature from './components/feature/feature'
import Hero from './components/hero/hero'

export const metadata: Metadata = {
  title: 'Pelucan - Sergio Velazquez Groomer',
  description: 'Pelucan - Sergio Velazquez Groomer',
}

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Feature/>
        <Divider />
        <ArticleList />
        <Contact/>
      </main>
    </div>
  )
}
