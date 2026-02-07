'use client'

import { useEffect } from 'react'
import { trackScrollDepth } from '@/lib/analytics'

export default function ScrollTracking() {
  useEffect(() => {
    const trackedDepths = new Set()
    const depths = [25, 50, 75, 100]

    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const scrollPercentage = Math.round(
        (scrollTop / (documentHeight - windowHeight)) * 100
      )

      depths.forEach((depth) => {
        if (scrollPercentage >= depth && !trackedDepths.has(depth)) {
          trackedDepths.add(depth)
          trackScrollDepth(depth)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null
}

