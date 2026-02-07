'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { trackNewsletterSignup } from '@/lib/analytics'

export default function NewsletterSignup({ variant = 'default', className = '' }) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log('Newsletter signup:', email)
    
    // Track conversion
    const source = variant === 'inline' ? 'footer' : 'popup'
    trackNewsletterSignup(source)
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    setEmail('')

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className={`newsletter-signup-inline ${className}`}>
        <div className="newsletter-input-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="newsletter-input"
            required
            disabled={isSubmitting || isSubmitted}
          />
          <button
            type="submit"
            className="btn btn-primary-modern"
            disabled={isSubmitting || isSubmitted}
          >
            {isSubmitting ? 'Subscribing...' : isSubmitted ? 'Subscribed!' : 'Subscribe'}
          </button>
        </div>
        {error && <p className="newsletter-error">{error}</p>}
        {isSubmitted && (
          <motion.p
            className="newsletter-success"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ✓ Thanks! Check your email for confirmation.
          </motion.p>
        )}
      </form>
    )
  }

  return (
    <div className={`newsletter-signup ${className}`}>
      <h3>Stay Updated</h3>
      <p>Get test automation tips, industry insights, and product updates delivered to your inbox.</p>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <div className="newsletter-input-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="newsletter-input"
            required
            disabled={isSubmitting || isSubmitted}
          />
          <button
            type="submit"
            className="btn btn-primary-modern"
            disabled={isSubmitting || isSubmitted}
          >
            {isSubmitting ? 'Subscribing...' : isSubmitted ? 'Subscribed!' : 'Subscribe'}
          </button>
        </div>
        {error && <p className="newsletter-error">{error}</p>}
        {isSubmitted && (
          <motion.p
            className="newsletter-success"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ✓ Thanks! Check your email for confirmation.
          </motion.p>
        )}
        <p className="newsletter-privacy">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </div>
  )
}

