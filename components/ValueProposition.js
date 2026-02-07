'use client'

import RevealOnScroll from './animations/RevealOnScroll'
import AnimatedCard from './animations/AnimatedCard'

const values = [
  {
    icon: '✓',
    title: 'Zero flaky tests',
    description: 'Our tests run consistently, every time. We maintain and update them so you don\'t have to.'
  },
  {
    icon: '⚡',
    title: 'Fast time to value',
    description: 'Get comprehensive test coverage in weeks, not months. Start seeing results from day one.'
  },
  {
    icon: '📈',
    title: 'Scales with you',
    description: 'As your product grows, your test suite grows with it. No technical debt, no shortcuts.'
  },
  {
    icon: '🔒',
    title: 'Enterprise-ready',
    description: 'Built for teams that need reliability, security, and compliance. We\'ve got you covered.'
  }
]

export default function ValueProposition() {
  return (
    <section className="value-proposition">
      <div className="container">
        <RevealOnScroll>
          <div className="section-header">
            <h2>Why engineering teams choose Test Hubble</h2>
            <p>We take the complexity out of test automation, delivering reliable coverage that scales with your product.</p>
          </div>
        </RevealOnScroll>
        <div className="value-grid">
          {values.map((value, index) => (
            <AnimatedCard
              key={index}
              delay={index * 0.1}
              className="value-card"
            >
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}

