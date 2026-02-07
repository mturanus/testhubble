// Google Analytics 4 Event Tracking

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'

// Initialize GA4
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    window.gtag = window.gtag || function() {
      (window.gtag.q = window.gtag.q || []).push(arguments)
    }
    window.gtag.l = +new Date()
    
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script)
    
    window.gtag('js', new Date())
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    })
  }
}

// Track page views
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// Track events
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Conversion Events
export const trackDemoBookingStarted = () => {
  event({
    action: 'demo_booking_started',
    category: 'conversion',
    label: 'Demo Booking Started',
  })
}

export const trackDemoBookingCompleted = (source) => {
  event({
    action: 'demo_booking_completed',
    category: 'conversion',
    label: `Demo Booking Completed - ${source}`,
  })
}

export const trackNewsletterSignup = (source) => {
  event({
    action: 'newsletter_signup',
    category: 'conversion',
    label: `Newsletter Signup - ${source}`,
  })
}

export const trackContactFormSubmitted = () => {
  event({
    action: 'contact_form_submitted',
    category: 'conversion',
    label: 'Contact Form Submitted',
  })
}

export const trackPDFDownload = (filename) => {
  event({
    action: 'pdf_downloaded',
    category: 'engagement',
    label: `PDF Downloaded - ${filename}`,
  })
}

export const trackCTAClick = (location, ctaText) => {
  event({
    action: 'cta_clicked',
    category: 'engagement',
    label: `CTA Clicked - ${location} - ${ctaText}`,
  })
}

// Engagement Events
export const trackScrollDepth = (depth) => {
  event({
    action: `scroll_depth_${depth}`,
    category: 'engagement',
    label: `Scroll Depth ${depth}%`,
  })
}

export const trackTimeOnPage = (seconds) => {
  const minutes = Math.floor(seconds / 60)
  event({
    action: `time_on_page_${minutes}m`,
    category: 'engagement',
    label: `Time on Page ${minutes} minutes`,
  })
}

// Video tracking
export const trackVideoPlay = (videoTitle) => {
  event({
    action: 'video_played',
    category: 'engagement',
    label: `Video Played - ${videoTitle}`,
  })
}

// Form tracking
export const trackFormStart = (formName) => {
  event({
    action: 'form_started',
    category: 'engagement',
    label: `Form Started - ${formName}`,
  })
}

export const trackFormAbandon = (formName, fieldsCompleted) => {
  event({
    action: 'form_abandoned',
    category: 'engagement',
    label: `Form Abandoned - ${formName} - ${fieldsCompleted} fields`,
  })
}

