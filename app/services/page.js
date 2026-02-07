'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/animations/ScrollProgress'
import RevealOnScroll from '@/components/animations/RevealOnScroll'
import ServicesPage from '@/components/ServicesPage'
import ToolStack from '@/components/ToolStack'
import EngagementModels from '@/components/EngagementModels'
import Benefits from '@/components/Benefits'
import ClientJourney from '@/components/ClientJourney'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { serviceSchema, breadcrumbSchema } from '../metadata'

export default function Services() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://testhubble.com' },
    { name: 'Services', url: 'https://testhubble.com/services' }
  ]

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />
      <ScrollProgress />
      <Navbar />
      <section className="page-hero">
        <div className="container">
          <motion.div
            className="page-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Comprehensive Test Automation Services</h1>
            <p>End-to-end test automation for web and mobile applications, delivered by experts who understand your stack.</p>
          </motion.div>
        </div>
      </section>
      <ServicesPage />
      <ToolStack />
      <EngagementModels />
      <Benefits />
      <ClientJourney />
      <section className="cta-section">
        <div className="container">
          <RevealOnScroll>
            <div className="cta-content">
              <h2>Ready to get started?</h2>
              <p>Let's discuss how Test Hubble can help your team achieve reliable test automation.</p>
              <Link href="/#contact" className="btn btn-primary btn-large">
                Schedule a Consultation
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      <Footer />
    </>
  )
}
