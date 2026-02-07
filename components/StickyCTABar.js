'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DemoBookingModal from './DemoBookingModal'

export default function StickyCTABar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="sticky-cta-bar"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="sticky-cta-content">
              <div className="sticky-cta-text">
                <strong>Ready to automate your testing?</strong>
                <span>Get a free 30-minute demo</span>
              </div>
              <div className="sticky-cta-buttons">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn btn-primary-modern btn-small"
                >
                  Schedule Demo
                </button>
                <a
                  href="#contact"
                  className="btn btn-secondary-modern btn-small"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <DemoBookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

