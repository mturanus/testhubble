'use client'

import { useEffect, useRef } from 'react'
import { trackTimeOnPage } from '@/lib/analytics'

export default function TimeOnPageTracking() {
  const startTime = useRef(Date.now())
  const trackedTimes = useRef(new Set())

  useEffect(() => {
    const intervals = [30, 60, 120, 300] // 30s, 1m, 2m, 5m

    const checkTime = () => {
      const timeOnPage = Math.floor((Date.now() - startTime.current) / 1000)
      
      intervals.forEach((interval) => {
        if (timeOnPage >= interval && !trackedTimes.current.has(interval)) {
          trackedTimes.current.add(interval)
          trackTimeOnPage(interval)
        }
      })
    }

    const intervalId = setInterval(checkTime, 10000) // Check every 10 seconds

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return null
}

