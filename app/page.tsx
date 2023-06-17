"use client"
import { Divider } from '@chakra-ui/react'
import ArticleList from './components/about/about'
import Contact from './components/contact/contact'
import Feature from './components/feature/feature'
import Hero from './components/hero/hero'

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
