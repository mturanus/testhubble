'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NewsletterSignup from './NewsletterSignup'

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeen = localStorage.getItem('exitIntentShown')
    if (hasSeen) return

    const handleMouseLeave = (e) => {
      // Trigger when mouse leaves the top of the viewport
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true)
        setHasShown(true)
        localStorage.setItem('exitIntentShown', 'true')
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [hasShown])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="exit-popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            className="exit-popup"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <button
              className="exit-popup-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="exit-popup-content">
              <h2>Wait! Before you go...</h2>
              <p>Get our free <strong>Test Automation Guide</strong> delivered to your inbox.</p>
              <ul className="exit-popup-benefits">
                <li>✓ Best practices for test automation</li>
                <li>✓ ROI calculation framework</li>
                <li>✓ Tool comparison guide</li>
                <li>✓ CI/CD integration tips</li>
              </ul>
              <NewsletterSignup variant="inline" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

