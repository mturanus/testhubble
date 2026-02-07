'use client'

import RevealOnScroll from './animations/RevealOnScroll'
import AnimatedCard from './animations/AnimatedCard'
import { motion } from 'framer-motion'

const services = [
  {
    icon: '🌐',
    title: 'Web Application Testing',
    description: 'Comprehensive end-to-end testing for web applications across all major browsers and devices. We test user flows, API integrations, and cross-browser compatibility.',
    features: ['E2E user flow testing', 'Cross-browser validation', 'API integration testing', 'Visual regression testing'],
    featured: true
  },
  {
    icon: '📱',
    title: 'Mobile Application Testing',
    description: 'Native and hybrid mobile app testing across iOS and Android platforms. We handle device fragmentation, OS versions, and real device testing.',
    features: ['iOS & Android testing', 'Real device validation', 'Performance testing', 'App store compliance'],
    featured: true
  },
  {
    icon: '🔄',
    title: 'CI/CD Integration',
    description: 'Seamless integration with your existing CI/CD pipeline. We set up automated test runs, parallel execution, and intelligent test scheduling.'
  },
  {
    icon: '📊',
    title: 'Test Strategy & Consulting',
    description: 'Expert guidance on test architecture, coverage strategy, and best practices. We help you build a sustainable testing culture.'
  },
  {
    icon: '🛠️',
    title: 'Test Maintenance & Updates',
    description: 'Ongoing maintenance of your test suite. We update tests as your application evolves, fix flaky tests, and optimize performance.'
  },
  {
    icon: '📈',
    title: 'Reporting & Analytics',
    description: 'Comprehensive test reporting with insights into coverage, flakiness, and trends. Make data-driven decisions about your testing strategy.'
  }
]

export default function ServicesPage() {
  return (
    <section className="services-overview">
      <div className="container">
        <RevealOnScroll>
          <div className="section-header">
            <h2>What we offer</h2>
            <p>Full-service test automation tailored to your technology stack and business needs.</p>
          </div>
        </RevealOnScroll>
        <div className="services-grid">
          {services.map((service, index) => (
            <AnimatedCard
              key={index}
              delay={index * 0.1}
              className={`service-card ${service.featured ? 'featured' : ''}`}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.features && (
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              )}
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}

