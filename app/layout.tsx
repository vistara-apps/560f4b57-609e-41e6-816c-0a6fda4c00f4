import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { ThemeProvider } from './components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CivicBot AI - Your AI-powered partner for transparent public services',
  description: 'An AI chatbot and analytics platform designed for citizens and public service providers to streamline communication, resource allocation, and feedback analysis.',
  keywords: ['civic tech', 'AI chatbot', 'public services', 'sentiment analysis', 'Base', 'blockchain'],
  authors: [{ name: 'CivicBot AI Team' }],
  openGraph: {
    title: 'CivicBot AI',
    description: 'Your AI-powered partner for transparent and efficient public services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CivicBot AI',
    description: 'Your AI-powered partner for transparent and efficient public services',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Providers>
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}
