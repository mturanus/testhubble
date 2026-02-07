'use client'

import RevealOnScroll from './animations/RevealOnScroll'
import AnimatedCard from './animations/AnimatedCard'

const problems = [
  {
    title: 'Test maintenance overhead',
    description: 'Your team spends more time fixing broken tests than writing new ones. We handle all maintenance so you don\'t have to.'
  },
  {
    title: 'Inconsistent coverage',
    description: 'Critical user flows aren\'t tested, or tests only run locally. We ensure comprehensive coverage across all environments.'
  },
  {
    title: 'Resource constraints',
    description: 'Your engineers are stretched thin. Test automation expertise is hard to find and expensive to hire.'
  },
  {
    title: 'CI/CD bottlenecks',
    description: 'Slow or unreliable test suites block deployments. We optimize your pipeline for speed and reliability.'
  },
  {
    title: 'Mobile testing complexity',
    description: 'Testing across devices and platforms is time-consuming and error-prone. We make it seamless.'
  },
  {
    title: 'Technical debt',
    description: 'Legacy test frameworks are brittle and hard to maintain. We build modern, maintainable test suites.'
  }
]

export default function ProblemsSolved() {
  return (
    <section className="problems-solved">
      <div className="container">
        <RevealOnScroll>
          <div className="section-header">
            <h2>The problems we solve</h2>
            <p>If any of these sound familiar, we can help.</p>
          </div>
        </RevealOnScroll>
        <div className="problems-grid">
          {problems.map((problem, index) => (
            <AnimatedCard
              key={index}
              delay={index * 0.08}
              className="problem-card"
            >
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}

