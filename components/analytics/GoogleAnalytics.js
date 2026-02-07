'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { initGA, pageview } from '@/lib/analytics'

export default function GoogleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    initGA()
  }, [])

  useEffect(() => {
    if (pathname) {
      pageview(pathname)
    }
  }, [pathname])

  return null
}

