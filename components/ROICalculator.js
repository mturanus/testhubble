'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import RevealOnScroll from './animations/RevealOnScroll'

export default function ROICalculator() {
  const [engineers, setEngineers] = useState(2)
  const [hoursPerWeek, setHoursPerWeek] = useState(10)
  const [hourlyRate, setHourlyRate] = useState(150)

  // Calculate ROI
  const engineerCost = engineers * hoursPerWeek * hourlyRate * 52 // Annual cost
  const testHubbleCost = 5000 * 12 // Monthly cost estimate
  const timeSaved = 0.7 // 70% time savings
  const annualSavings = engineerCost * timeSaved - testHubbleCost
  const roi = ((annualSavings / testHubbleCost) * 100).toFixed(0)

  return (
    <section className="roi-calculator-section">
      <div className="container">
        <RevealOnScroll>
          <div className="section-header">
            <h2>Calculate Your ROI</h2>
            <p>See how much you could save with managed test automation</p>
          </div>
        </RevealOnScroll>

        <div className="roi-calculator-container">
          <motion.div
            className="roi-calculator-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="roi-inputs">
              <div className="roi-input-group">
                <label htmlFor="engineers">QA Engineers</label>
                <input
                  type="range"
                  id="engineers"
                  min="1"
                  max="10"
                  value={engineers}
                  onChange={(e) => setEngineers(Number(e.target.value))}
                  className="roi-slider"
                />
                <div className="roi-value">{engineers}</div>
              </div>

              <div className="roi-input-group">
                <label htmlFor="hours">Hours per Week on Testing</label>
                <input
                  type="range"
                  id="hours"
                  min="5"
                  max="40"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="roi-slider"
                />
                <div className="roi-value">{hoursPerWeek} hrs</div>
              </div>

              <div className="roi-input-group">
                <label htmlFor="rate">Average Hourly Rate ($)</label>
                <input
                  type="range"
                  id="rate"
                  min="50"
                  max="300"
                  step="10"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="roi-slider"
                />
                <div className="roi-value">${hourlyRate}</div>
              </div>
            </div>

            <div className="roi-results">
              <div className="roi-result-card">
                <div className="roi-result-label">Current Annual Cost</div>
                <div className="roi-result-value">${engineerCost.toLocaleString()}</div>
              </div>

              <div className="roi-result-card highlight">
                <div className="roi-result-label">Estimated Annual Savings</div>
                <div className="roi-result-value savings">
                  ${annualSavings > 0 ? annualSavings.toLocaleString() : '0'}
                </div>
                <div className="roi-roi-percentage">ROI: {roi}%</div>
              </div>

              <div className="roi-result-card">
                <div className="roi-result-label">Time Saved</div>
                <div className="roi-result-value">{(timeSaved * 100).toFixed(0)}%</div>
              </div>
            </div>

            <motion.a
              href="#contact"
              className="btn btn-primary-modern"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Today
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

