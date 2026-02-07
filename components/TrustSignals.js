'use client'

import RevealOnScroll from './animations/RevealOnScroll'
import { motion } from 'framer-motion'

const badges = ['Enterprise Security', 'SOC 2 Compliant', '24/7 Monitoring', 'SLA Guaranteed']

export default function TrustSignals() {
  return (
    <section className="trust-signals">
      <div className="container">
        <RevealOnScroll>
          <div className="trust-content">
            <h2>Built for teams that can't afford downtime</h2>
            <p>We work with engineering leaders who need test automation that just works—reliable, scalable, and maintainable.</p>
            <div className="trust-badges">
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  className="trust-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {badge}
                </motion.div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

