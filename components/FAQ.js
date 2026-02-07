'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import RevealOnScroll from './animations/RevealOnScroll'

const faqs = [
  {
    question: "How quickly can you set up test automation for our application?",
    answer: "We typically deliver initial test suites within 2-4 weeks, depending on your application's complexity. You'll see results from the first week as we integrate with your CI/CD pipeline."
  },
  {
    question: "What testing frameworks do you support?",
    answer: "We work with all major testing frameworks including Playwright, Cypress, Selenium, Appium, and WebdriverIO. We choose the best tool for your specific tech stack and requirements."
  },
  {
    question: "How do you ensure test reliability and reduce flakiness?",
    answer: "We follow industry best practices including proper wait strategies, stable selectors, and comprehensive error handling. Our team maintains and updates tests as your application evolves, ensuring 99%+ reliability."
  },
  {
    question: "Is Test Hubble compliant with healthcare and finance regulations?",
    answer: "Yes. We're SOC 2 Type II certified, GDPR compliant, and HIPAA ready. We work with healthcare and fintech companies and understand the compliance requirements for regulated industries."
  },
  {
    question: "What's included in your managed test automation service?",
    answer: "Our full-service includes test development, CI/CD integration, ongoing maintenance, test updates, monitoring, and regular reporting. You get a dedicated test automation engineer and weekly updates."
  },
  {
    question: "Can we maintain the tests ourselves after you build them?",
    answer: "Absolutely. We offer a hybrid engagement model where we build your test suite and provide comprehensive knowledge transfer and training. You can maintain them with our ongoing support available on-demand."
  },
  {
    question: "How do you handle mobile app testing?",
    answer: "We test native iOS and Android apps using Appium and real device testing platforms. We handle device fragmentation, OS versions, and ensure your apps work across all target devices."
  },
  {
    question: "What's the typical ROI for test automation?",
    answer: "Most teams see ROI within 3-6 months through reduced bug escape rates, faster release cycles, and freed-up engineering time. We typically reduce QA time by 60-80% while improving coverage."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section">
      <div className="container">
        <RevealOnScroll>
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about Test Hubble's managed test automation services</p>
          </div>
        </RevealOnScroll>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <RevealOnScroll key={index} delay={index * 0.05}>
              <motion.div
                className={`faq-item ${openIndex === index ? 'open' : ''}`}
                initial={false}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <motion.span
                    className="faq-icon"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

