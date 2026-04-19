import { Inter } from 'next/font/google'
import './globals.css'
import { HomeLayout } from './layout/home_layout'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://pelucan.ar'

export const metadata: Metadata = {
  title: 'Pelucan | Peluquería canina en Martínez – Sergio Velazquez Groomer',
  description:
    'Peluquería canina en Martínez, Zona Norte. Salud, conexión y buen trato: baño, corte de raza, deslanado y stripping. Turnos por WhatsApp.',
  keywords: [
    'peluquería canina',
    'grooming perros',
    'Martínez',
    'Martinez',
    'zona norte',
    'corte de raza',
    'baño canino',
    'deslanado',
    'stripping',
    'pelucan',
    'Sergio Velazquez',
    'peluquería canina Martínez',
  ],
  authors: [{ name: 'Sergio Velazquez' }],
  creator: 'Pelucan',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pelucan | Peluquería canina en Martínez',
    description:
      'Salud, conexión y buen trato para tu mascota. Baño, cortes de raza, deslanado y stripping en Martínez, Zona Norte. Turnos por WhatsApp.',
    url: siteUrl,
    siteName: 'Pelucan',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/assets/initial.png',
        width: 800,
        height: 600,
        alt: 'Pelucan, peluquería canina en Martínez',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pelucan | Peluquería canina en Martínez',
    description:
      'Salud, conexión y buen trato. Baño, cortes de raza, deslanado y stripping. Martínez, Zona Norte.',
    images: ['/assets/initial.png'],
  },
  icons: {
    icon: '/favicon-16x16.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// Horarios según ficha de Google Maps (domingo cerrado; no se declara en schema).
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Pelucan - Sergio Velazquez Groomer',
  description:
    'Peluquería canina en Martínez, Zona Norte. Salud, conexión y buen trato; baño, cortes de raza, deslanado y stripping.',
  url: siteUrl,
  telephone: '+5491154954747',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Italia 1624',
    addressLocality: 'Martínez',
    addressRegion: 'Buenos Aires',
    addressCountry: 'AR',
  },
  image: `${siteUrl}/assets/initial.png`,
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '13:00',
    },
  ],
  sameAs: ['https://www.instagram.com/pelucan.sergio/'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <HomeLayout>
          {children}
        </HomeLayout>
      </body>
    </html>
  )
}
