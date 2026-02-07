'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import RevealOnScroll from './animations/RevealOnScroll'

const badges = [
  {
    name: 'SOC 2 Type II',
    description: 'Certified for security, availability, and confidentiality',
    icon: '🔒',
    color: 'blue'
  },
  {
    name: 'GDPR Compliant',
    description: 'EU data protection standards',
    icon: '🛡️',
    color: 'mint'
  },
  {
    name: 'HIPAA Ready',
    description: 'Healthcare data protection compliant',
    icon: '🏥',
    color: 'lavender'
  },
  {
    name: '256-bit Encryption',
    description: 'End-to-end data encryption',
    icon: '🔐',
    color: 'blue'
  }
]

export default function SecurityBadges({ showDescription = false, className = '' }) {
  return (
    <div className={`security-badges ${className}`}>
      {badges.map((badge, index) => (
        <RevealOnScroll key={badge.name} delay={index * 0.1}>
          <motion.div
            className={`security-badge security-badge-${badge.color}`}
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="security-badge-icon">{badge.icon}</div>
            <div className="security-badge-content">
              <h4>{badge.name}</h4>
              {showDescription && <p>{badge.description}</p>}
            </div>
          </motion.div>
        </RevealOnScroll>
      ))}
    </div>
  )
}

