'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import RevealOnScroll from './animations/RevealOnScroll'
import { trackContactFormSubmitted } from '@/lib/analytics'

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submission:', formData)
    
    // Track conversion
    trackContactFormSubmitted()
    
    setIsSubmitted(true)
    setFormData({ name: '', email: '', company: '', message: '' })
    
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="cta-section">
      <div className="container">
        <RevealOnScroll>
          <div className="cta-content">
            <h2>Ready to automate with confidence?</h2>
            <p>Let's discuss how Test Hubble can help your team ship faster with fewer bugs.</p>
            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Work email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell us about your testing needs"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <motion.button
                type="submit"
                className="btn btn-primary btn-large"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule a Consultation
              </motion.button>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="form-success"
                >
                  Thank you! We'll be in touch soon.
                </motion.div>
              )}
            </motion.form>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

