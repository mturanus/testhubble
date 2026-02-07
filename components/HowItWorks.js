'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'
import RevealOnScroll from './animations/RevealOnScroll'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const steps = [
  {
    number: '1',
    title: 'Discovery & Planning',
    description: 'We understand your application, user flows, and testing priorities. Together, we define what success looks like.',
    icon: '📋'
  },
  {
    number: '2',
    title: 'Test Development',
    description: 'Our team builds comprehensive test suites using industry-standard tools. You review and approve as we go.',
    icon: '⚙️'
  },
  {
    number: '3',
    title: 'CI/CD Integration',
    description: 'We integrate tests into your existing pipeline or help you set one up. Tests run automatically on every deployment.',
    icon: '🔄'
  },
  {
    number: '4',
    title: 'Ongoing Maintenance',
    description: 'We monitor, maintain, and update your tests as your product evolves. You get reports, not problems.',
    icon: '✨'
  }
]

export default function HowItWorks() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  const prefersReducedMotion = useReducedMotion()
  
  // Sticky scrollytelling effect
  const stickyY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    prefersReducedMotion ? [0, 0, 0, 0] : [0, -100, -200, -300]
  )

  return (
    <section ref={containerRef} className="how-it-works-modern">
      <div className="container">
        <RevealOnScroll>
          <div className="section-header">
            <h2>How it works</h2>
            <p>A straightforward process designed for busy engineering teams.</p>
          </div>
        </RevealOnScroll>
        
        <motion.div 
          className="process-steps-modern"
          style={prefersReducedMotion ? {} : { y: stickyY }}
        >
          {steps.map((step, index) => {
            const stepRef = useRef(null)
            const isInView = useInView(stepRef, { 
              once: false, 
              margin: "-100px",
              amount: 0.5
            })
            
            return (
              <motion.div
                key={index}
                ref={stepRef}
                className={`step-modern ${isInView ? 'active' : ''}`}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0.3, x: -30 }}
                transition={{
                  duration: prefersReducedMotion ? 0.2 : 0.6,
                  delay: prefersReducedMotion ? 0 : index * 0.1
                }}
              >
                <motion.div
                  className="step-number-modern"
                  animate={isInView ? {
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0]
                  } : {}}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <span className="step-icon">{step.icon}</span>
                  <span className="step-number-text">{step.number}</span>
                </motion.div>
                <div className="step-content-modern">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="step-connector" />
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

