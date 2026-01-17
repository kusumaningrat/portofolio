import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Kusuma Ningrat',
  description: 'DevOps Engineer specializing in Kubernetes, Nomad, Terraform, AWS, CI/CD, and observability stack. Infrastructure automation and cloud-native solutions.',
  keywords: ['DevOps', 'Kubernetes', 'Terraform', 'AWS', 'CI/CD', 'Infrastructure', 'Automation', 'Cloud Native'],
  authors: [{ name: 'DevOps Engineer' }],
  openGraph: {
    title: 'Kusuma Ningrat',
    description: 'DevOps Engineer specializing in Kubernetes, Nomad, Terraform, AWS, CI/CD, and observability stack.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kusuma Ningrat',
    description: 'DevOps Engineer specializing in Kubernetes, Nomad, Terraform, AWS, CI/CD, and observability stack.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
