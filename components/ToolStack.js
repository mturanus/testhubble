'use client'

import { motion } from 'framer-motion'
import RevealOnScroll from './animations/RevealOnScroll'
import AnimatedCard from './animations/AnimatedCard'

// Tool data with SVG icons
const tools = [
  {
    name: 'Playwright',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: 'blue'
  },
  {
    name: 'Cypress',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 12L12 8L16 12L12 16L8 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: 'mint'
  },
  {
    name: 'Selenium',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 8H16M8 12H16M8 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    color: 'green'
  },
  {
    name: 'Appium',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    color: 'lavender'
  },
  {
    name: 'WebdriverIO',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: 'blue'
  },
  {
    name: 'GitHub Actions',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.49C9.34 21.58 9.54 21.27 9.54 21C9.54 20.75 9.52 20.01 9.52 19.22C7.04 19.67 6.34 18.16 6.34 18.16C5.8 16.83 5.13 16.5 5.13 16.5C4.36 15.91 5.23 15.92 5.23 15.92C6.12 15.99 6.58 16.84 6.58 16.84C7.33 18.15 8.59 17.81 9.05 17.6C9.15 17.08 9.35 16.73 9.57 16.53C7.95 16.33 6.25 15.64 6.25 13.14C6.25 12.14 6.61 11.33 7.08 10.73C7.01 10.52 6.73 9.42 7.25 8.39C7.25 8.39 8.14 8.11 9.54 9.43C10.47 9.16 11.47 9.03 12.47 9C13.47 9.03 14.47 9.16 15.4 9.43C16.8 8.12 17.69 8.39 17.69 8.39C18.21 9.42 17.93 10.52 17.86 10.73C18.33 11.33 18.69 12.14 18.69 13.14C18.69 15.65 16.98 16.33 15.35 16.53C15.61 16.78 15.86 17.26 15.86 18.01C15.86 19.16 15.85 20.05 15.85 21C15.85 21.27 16.05 21.59 16.55 21.49C20.52 20.16 23.39 16.42 23.39 12C23.39 6.48 18.91 2 13.39 2H12Z" fill="currentColor"/>
      </svg>
    ),
    color: 'blue'
  },
  {
    name: 'GitLab CI',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: 'orange'
  },
  {
    name: 'Jenkins',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 8H16V16H8V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: 'blue'
  },
  {
    name: 'CircleCI',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
      </svg>
    ),
    color: 'mint'
  },
  {
    name: 'BrowserStack',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 8H16M8 12H16M8 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    color: 'lavender'
  }
]

export default function ToolStack() {
  return (
    <section className="tool-stack-section">
      <div className="container">
        <RevealOnScroll>
          <div className="section-header">
            <h2 className="tool-stack-title">Trusted by teams using industry-leading tools</h2>
            <p className="tool-stack-subtitle">We integrate seamlessly with your existing test automation stack</p>
          </div>
        </RevealOnScroll>
        
        <div className="tool-stack-grid">
          {tools.map((tool, index) => (
            <AnimatedCard
              key={tool.name}
              delay={index * 0.05}
              className={`tool-card-modern tool-card-${tool.color}`}
              hoverScale={1.05}
              hoverY={-6}
            >
              <motion.div
                className="tool-icon-wrapper"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {tool.icon}
              </motion.div>
              <h3 className="tool-name">{tool.name}</h3>
              <div className="tool-glow" />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
