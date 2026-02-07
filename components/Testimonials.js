'use client'

import { motion } from 'framer-motion'
import RevealOnScroll from './animations/RevealOnScroll'
import { useState } from 'react'

const testimonials = [
  {
    quote: "Test Hubble transformed our QA process. We went from spending 40% of our time fixing flaky tests to shipping features faster with confidence.",
    author: "Sarah Chen",
    role: "Engineering Manager",
    company: "FinTech Startup",
    industry: "Finance",
    rating: 5
  },
  {
    quote: "As a healthcare company, compliance is critical. Test Hubble not only automated our testing but ensured we met all HIPAA requirements seamlessly.",
    author: "Dr. Michael Rodriguez",
    role: "CTO",
    company: "HealthTech Solutions",
    industry: "Healthcare",
    rating: 5
  },
  {
    quote: "The team at Test Hubble understood our stack immediately. They integrated with our CI/CD pipeline and we saw results within the first week.",
    author: "James Park",
    role: "VP of Engineering",
    company: "SaaS Platform",
    industry: "SaaS",
    rating: 5
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="testimonials-section">
      <div className="container">
        <RevealOnScroll>
          <div className="section-header">
            <h2>Trusted by engineering teams</h2>
            <p>See what our clients say about working with Test Hubble</p>
          </div>
        </RevealOnScroll>

        <div className="testimonials-container">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="testimonial-card"
          >
            <div className="testimonial-rating">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <span key={i} className="star">⭐</span>
              ))}
            </div>
            <blockquote className="testimonial-quote">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="testimonial-author">
              <div className="testimonial-info">
                <h4>{testimonials[currentIndex].author}</h4>
                <p className="testimonial-role">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </p>
                <span className="testimonial-industry">{testimonials[currentIndex].industry}</span>
              </div>
            </div>
          </motion.div>

          <div className="testimonials-controls">
            <button 
              onClick={prevTestimonial}
              className="testimonial-nav-btn"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <div className="testimonials-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="testimonial-nav-btn"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

