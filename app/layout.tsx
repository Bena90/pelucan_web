import { Roboto } from 'next/font/google'
import './globals.css'
import { HomeLayout } from './layout/home_layout'
import { Metadata } from 'next'

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})

export const metadata: Metadata = {
  title: 'Pelucan - Sergio Velazquez Groomer | Peluquería Canina en Martinez',
  description: 'Peluquería canina profesional en Martinez, Zona Norte. Servicios de corte de raza, baño, deslanado y stripping para tu mascota. Turnos por WhatsApp.',
  keywords: ['peluquería canina', 'grooming perros', 'Martinez', 'zona norte', 'corte de raza', 'baño canino', 'deslanado', 'stripping', 'pelucan', 'Sergio Velazquez'],
  authors: [{ name: 'Sergio Velazquez' }],
  creator: 'Pelucan',
  metadataBase: new URL('https://pelucan.ar'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pelucan - Peluquería Canina Profesional en Martinez',
    description: 'Resaltá la belleza de tu mejor amigo con nuestros servicios de peluquería canina profesional. Cortes de raza, baño, deslanado y stripping.',
    url: 'https://pelucan.ar',
    siteName: 'Pelucan',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/assets/initial.png',
        width: 800,
        height: 600,
        alt: 'Pelucan - Peluquería Canina Profesional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pelucan - Peluquería Canina Profesional en Martinez',
    description: 'Resaltá la belleza de tu mejor amigo con nuestros servicios de peluquería canina profesional.',
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

// Datos estructurados JSON-LD para SEO local (Schema.org LocalBusiness)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Pelucan - Sergio Velazquez Groomer',
  description: 'Peluquería canina profesional en Martinez, Zona Norte.',
  url: 'https://pelucan.ar',
  telephone: '+5491154954747',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Italia 1624',
    addressLocality: 'Martinez',
    addressRegion: 'Buenos Aires',
    addressCountry: 'AR',
  },
  image: '/assets/initial.png',
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  sameAs: [
    'https://www.instagram.com/pelucan.sergio/',
  ],
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
      <body className={roboto.className}>
        <HomeLayout>
          {children}
        </HomeLayout>
      </body>
    </html>
  )
}
