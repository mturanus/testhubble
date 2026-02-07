'use client'

import RevealOnScroll from './animations/RevealOnScroll'
import Timeline from './animations/Timeline'
import { motion } from 'framer-motion'

const journeySteps = [
  {
    icon: '📞',
    title: 'Week 1: Discovery',
    description: 'We meet with your team to understand your application, testing goals, and technical requirements. We\'ll provide a detailed proposal and timeline.'
  },
  {
    icon: '🚀',
    title: 'Weeks 2-4: Setup & Initial Tests',
    description: 'We set up our infrastructure, integrate with your CI/CD, and begin developing your first test suites. You\'ll see results within the first month.'
  },
  {
    icon: '📈',
    title: 'Weeks 5-8: Expansion',
    description: 'We expand test coverage based on your priorities. You\'ll receive weekly updates and can review tests as they\'re developed.'
  },
  {
    icon: '✨',
    title: 'Ongoing: Maintenance & Growth',
    description: 'We maintain your test suite, update tests as your product evolves, and provide regular reports. Your tests run reliably, every time.'
  }
]

export default function ClientJourney() {
  const timelineItems = journeySteps.map((step, index) => (
    <div key={index} className="journey-step">
      <motion.div
        className="journey-icon"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 0.5,
          delay: index * 0.15,
          type: 'spring',
          stiffness: 200
        }}
      >
        {step.icon}
      </motion.div>
      <div className="journey-content">
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </div>
    </div>
  ))

  return (
    <section className="client-journey">
      <div className="container">
        <RevealOnScroll>
          <div className="section-header">
            <h2>Your journey with Test Hubble</h2>
            <p>From initial consultation to ongoing success, here's what to expect.</p>
          </div>
        </RevealOnScroll>
        <Timeline items={timelineItems} className="journey-timeline" />
      </div>
    </section>
  )
}

