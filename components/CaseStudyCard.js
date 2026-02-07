'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import RevealOnScroll from './animations/RevealOnScroll'

export default function CaseStudyCard({ caseStudy, index = 0 }) {
  return (
    <RevealOnScroll delay={index * 0.1}>
      <motion.div
        className="case-study-card"
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="case-study-header">
          <span className="case-study-industry">{caseStudy.industry}</span>
          {caseStudy.featured && <span className="case-study-featured">Featured</span>}
        </div>
        <h3 className="case-study-title">{caseStudy.title}</h3>
        <p className="case-study-description">{caseStudy.description}</p>
        <div className="case-study-metrics">
          <div className="case-study-metric">
            <span className="metric-value">{caseStudy.metric1.value}</span>
            <span className="metric-label">{caseStudy.metric1.label}</span>
          </div>
          <div className="case-study-metric">
            <span className="metric-value">{caseStudy.metric2.value}</span>
            <span className="metric-label">{caseStudy.metric2.label}</span>
          </div>
        </div>
        <Link href={`/case-studies/${caseStudy.slug}`} className="case-study-link">
          Read Case Study →
        </Link>
      </motion.div>
    </RevealOnScroll>
  )
}

