'use client'

import RevealOnScroll from './animations/RevealOnScroll'
import AnimatedCard from './animations/AnimatedCard'

const benefits = [
  {
    title: 'Faster time to market',
    description: 'Get comprehensive test coverage in weeks, not months. No hiring delays, no learning curves.'
  },
  {
    title: 'Cost-effective',
    description: 'No need to hire, train, and retain specialized test automation engineers. Predictable monthly costs.'
  },
  {
    title: 'Expert knowledge',
    description: 'Our team has years of experience across industries and tech stacks. We have seen it all.'
  },
  {
    title: 'Always up-to-date',
    description: 'We stay current with testing best practices, tool updates, and industry trends so you do not have to.'
  },
  {
    title: 'Scalable',
    description: 'Easily scale your test coverage up or down as your product and team evolve.'
  },
  {
    title: 'Focus on what matters',
    description: 'Free your engineering team to focus on building features, not maintaining test suites.'
  }
]

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="container">
        <RevealOnScroll>
          <div className="section-header">
            <h2>Benefits of working with Test Hubble</h2>
            <p>What sets us apart from building an in-house team or working with traditional QA vendors.</p>
          </div>
        </RevealOnScroll>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <AnimatedCard
              key={index}
              delay={index * 0.08}
              className="benefit-item"
            >
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}

