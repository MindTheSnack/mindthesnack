import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600', '800'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'MindTheSnack - Healthy Vending',
  description: 'The healthy vending revolution. Natural, tasty, and sustainable products for your break.',
  robots: 'index, follow',
  openGraph: {
    title: 'MindTheSnack - Healthy Vending',
    description: 'The healthy vending revolution.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  )
}
