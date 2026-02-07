'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { trackDemoBookingStarted, trackDemoBookingCompleted } from '@/lib/analytics'

export default function DemoBookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    useCase: '',
    preferredTime: ''
  })
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (isOpen) {
      trackDemoBookingStarted()
    }
  }, [isOpen])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    console.log('Demo booking submitted:', formData)
    
    // Track conversion
    const source = document.referrer || 'direct'
    trackDemoBookingCompleted(source)
    
    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      onClose()
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        useCase: '',
        preferredTime: ''
      })
      setCurrentStep(1)
    }, 3000)
  }

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const isStepValid = () => {
    if (currentStep === 1) {
      return formData.name && formData.email && formData.company
    }
    if (currentStep === 2) {
      return formData.role && formData.useCase
    }
    return true
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="demo-modal-overlay" onClick={onClose}>
        <motion.div
          className="demo-modal"
          onClick={(e) => e.stopPropagation()}
          initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9, y: 20 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
          exit={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <button className="demo-modal-close" onClick={onClose} aria-label="Close">
            ×
          </button>

          {isSubmitted ? (
            <motion.div
              className="demo-modal-success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="success-icon">✓</div>
              <h2>Demo Request Received!</h2>
              <p>We'll send you a calendar invite within 24 hours.</p>
              <p className="success-email">Check your email: {formData.email}</p>
            </motion.div>
          ) : (
            <>
              <div className="demo-modal-header">
                <h2>Schedule Your Demo</h2>
                <p>See how Test Hubble can transform your QA process</p>
              </div>

              <div className="demo-modal-progress">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`progress-step ${currentStep >= step ? 'active' : ''} ${currentStep === step ? 'current' : ''}`}
                  >
                    <div className="progress-step-number">{step}</div>
                    <div className="progress-step-label">
                      {step === 1 && 'Contact Info'}
                      {step === 2 && 'Details'}
                      {step === 3 && 'Schedule'}
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="demo-modal-form">
                {currentStep === 1 && (
                  <motion.div
                    className="demo-form-step"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Work Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Company Name *</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Your Company"
                      />
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    className="demo-form-step"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="form-group">
                      <label htmlFor="role">Your Role *</label>
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select your role</option>
                        <option value="cto">CTO / VP Engineering</option>
                        <option value="engineering-manager">Engineering Manager</option>
                        <option value="qa-lead">QA Lead</option>
                        <option value="product-manager">Product Manager</option>
                        <option value="developer">Developer</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="useCase">Tell us about your testing needs *</label>
                      <textarea
                        id="useCase"
                        name="useCase"
                        value={formData.useCase}
                        onChange={handleChange}
                        required
                        rows="4"
                        placeholder="What challenges are you facing with test automation?"
                      />
                    </div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    className="demo-form-step"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="form-group">
                      <label htmlFor="preferredTime">Preferred Demo Time</label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                      >
                        <option value="">Select a time</option>
                        <option value="morning">Morning (9 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                        <option value="flexible">Flexible</option>
                      </select>
                      <p className="form-help-text">
                        We'll send you a calendar link to choose your exact time slot
                      </p>
                    </div>
                    <div className="demo-benefits">
                      <h4>What to expect:</h4>
                      <ul>
                        <li>✓ 30-minute personalized demo</li>
                        <li>✓ See your app tested live</li>
                        <li>✓ Q&A with our experts</li>
                        <li>✓ Custom pricing proposal</li>
                      </ul>
                    </div>
                  </motion.div>
                )}

                <div className="demo-modal-actions">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="btn btn-secondary-modern"
                    >
                      Back
                    </button>
                  )}
                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="btn btn-primary-modern"
                      disabled={!isStepValid()}
                    >
                      Next Step →
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-primary-modern"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Scheduling...' : 'Schedule Demo'}
                    </button>
                  )}
                </div>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

