import { Inter } from 'next/font/google'
import './globals.css'
import AnalyticsWrapper from '@/components/analytics/AnalyticsWrapper'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://testhubble.com'),
  title: {
    default: 'Test Hubble - Managed Test Automation Services | Calm, Reliable Automation',
    template: '%s | Test Hubble'
  },
  description: 'Professional managed test automation services for web and mobile applications. SOC 2 certified, HIPAA ready. Trusted by finance, healthcare, and SaaS companies. Playwright, Cypress, Selenium experts.',
  keywords: [
    'test automation',
    'managed QA',
    'automated testing services',
    'test automation outsourcing',
    'QA automation',
    'Playwright testing',
    'Cypress experts',
    'Selenium automation',
    'Appium mobile testing',
    'healthcare test automation',
    'fintech QA',
    'SaaS test automation',
    'CI/CD test integration',
    'test automation consulting'
  ],
  authors: [{ name: 'Test Hubble' }],
  creator: 'Test Hubble',
  publisher: 'Test Hubble',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testhubble.com',
    siteName: 'Test Hubble',
    title: 'Test Hubble - Managed Test Automation Services',
    description: 'Professional managed test automation services for web and mobile applications. SOC 2 certified, HIPAA ready. Trusted by finance, healthcare, and SaaS companies.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Test Hubble - Managed Test Automation Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Hubble - Managed Test Automation Services',
    description: 'Professional managed test automation services. SOC 2 certified, HIPAA ready.',
    creator: '@testhubble',
    images: ['/twitter-image.jpg'],
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
  alternates: {
    canonical: 'https://testhubble.com',
  },
  verification: {
    // Add verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnalyticsWrapper />
        {children}
      </body>
    </html>
  )
}

