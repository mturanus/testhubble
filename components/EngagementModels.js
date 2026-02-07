'use client'

import RevealOnScroll from './animations/RevealOnScroll'
import AnimatedCard from './animations/AnimatedCard'

const models = [
  {
    title: 'Full Service',
    description: 'Complete test automation management',
    features: [
      'Test development & maintenance',
      'CI/CD integration & monitoring',
      'Dedicated test automation engineer',
      'Weekly reports & updates',
      '24/7 test monitoring'
    ],
    note: 'Best for teams that want to outsource test automation entirely.'
  },
  {
    title: 'Hybrid',
    description: 'We build, you maintain (with support)',
    features: [
      'Initial test suite development',
      'Knowledge transfer & training',
      'Ongoing support & consultation',
      'Quarterly test audits',
      'On-demand maintenance'
    ],
    note: 'Best for teams that want to own testing but need expert guidance.',
    featured: true
  },
  {
    title: 'Project-Based',
    description: 'One-time test suite development',
    features: [
      'Scoped test suite development',
      'CI/CD integration setup',
      'Documentation & handoff',
      '30-day support period'
    ],
    note: 'Best for teams with specific testing needs or pilot projects.'
  }
]

export default function EngagementModels() {
  return (
    <section className="engagement-models">
      <div className="container">
        <RevealOnScroll>
          <div className="section-header">
            <h2>Engagement models</h2>
            <p>Flexible options designed to fit your team's needs and budget.</p>
          </div>
        </RevealOnScroll>
        <div className="models-grid">
          {models.map((model, index) => (
            <AnimatedCard
              key={index}
              delay={index * 0.1}
              className={`model-card ${model.featured ? 'featured' : ''}`}
            >
              {model.featured && <div className="featured-badge">Most Popular</div>}
              <h3>{model.title}</h3>
              <p className="model-description">{model.description}</p>
              <ul className="model-features">
                {model.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <p className="model-note">{model.note}</p>
            </AnimatedCard>
          ))}
        </div>
        <RevealOnScroll>
          <div className="engagement-cta">
            <p>Not sure which model fits? <a href="/#contact">Let's discuss your needs</a></p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

