import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-archivo',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'NOVA — Wear the unexpected.',
    template: '%s — NOVA',
  },
  description:
    'NOVA is a contemporary fashion house. Collection 06 — Spring / Summer 2026. Wear the unexpected.',
  applicationName: 'NOVA',
  keywords: ['NOVA', 'independent fashion', 'Cairo fashion', 'contemporary apparel'],
  authors: [{ name: 'NOVA Studio' }],
  openGraph: {
    title: 'NOVA — Wear the unexpected.',
    description: 'Collection 06 — Spring / Summer 2026.',
    type: 'website',
    siteName: 'NOVA',
    images: [{ url: '/images/campaign/nova-campaign-cairo-courtyard.webp', width: 1536, height: 1024 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NOVA — Wear the unexpected.',
    description: 'Collection 06 — Spring / Summer 2026.',
    images: ['/images/campaign/nova-campaign-cairo-courtyard.webp'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F3EBDD',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${archivo.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
