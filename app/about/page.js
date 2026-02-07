'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/animations/ScrollProgress'
import RevealOnScroll from '@/components/animations/RevealOnScroll'
import { organizationSchema, breadcrumbSchema } from '../metadata'

// Metadata handled via layout or head component

export default function About() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://testhubble.com' },
    { name: 'About', url: 'https://testhubble.com/about' }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />
      <ScrollProgress />
      <Navbar />
      <section className="page-hero">
        <div className="container">
          <RevealOnScroll>
            <div className="page-hero-content">
              <h1>About Test Hubble</h1>
              <p>We're a team of test automation experts dedicated to helping engineering teams ship faster with confidence.</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      <section className="about-content">
        <div className="container-medium">
          <RevealOnScroll>
            <div className="about-section">
              <h2>Our Mission</h2>
              <p>We believe that test automation shouldn't be a burden on your engineering team. Our mission is to provide reliable, maintainable test automation that scales with your product, so your team can focus on building features, not fixing flaky tests.</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="about-section">
              <h2>Why We Started</h2>
              <p>After years of working with engineering teams struggling with test automation, we saw a pattern: teams were spending more time maintaining tests than writing new ones. We founded Test Hubble to solve this problem by providing expert-managed test automation services.</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="about-section">
              <h2>Our Expertise</h2>
              <p>Our team has years of experience across industries and tech stacks. We're certified in all major testing frameworks including Playwright, Cypress, Selenium, and Appium. We understand the unique challenges of regulated industries like healthcare and finance.</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      <Footer />
    </>
  )
}

