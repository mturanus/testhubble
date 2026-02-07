'use client'

import GoogleAnalytics from './GoogleAnalytics'
import ScrollTracking from './ScrollTracking'
import TimeOnPageTracking from './TimeOnPageTracking'

export default function AnalyticsWrapper() {
  return (
    <>
      <GoogleAnalytics />
      <ScrollTracking />
      <TimeOnPageTracking />
    </>
  )
}

