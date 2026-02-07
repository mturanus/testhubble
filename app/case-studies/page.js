'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/animations/ScrollProgress'
import RevealOnScroll from '@/components/animations/RevealOnScroll'
import CaseStudyCard from '@/components/CaseStudyCard'
import { useState } from 'react'
import { breadcrumbSchema } from '../metadata'

const caseStudies = [
  {
    slug: 'healthcare-platform',
    title: 'Healthcare Platform Achieves HIPAA Compliance with 500+ Automated Tests',
    description: 'A healthcare technology company needed to automate testing for their patient portal while maintaining strict HIPAA compliance. We delivered comprehensive test coverage in 4 weeks.',
    industry: 'Healthcare',
    featured: true,
    metric1: { value: '500+', label: 'Tests Automated' },
    metric2: { value: '4 Weeks', label: 'Time to Value' },
    tags: ['Healthcare', 'HIPAA', 'Playwright']
  },
  {
    slug: 'fintech-startup',
    title: 'Fintech Startup Reduces QA Time by 70% with Managed Test Automation',
    description: 'A fast-growing fintech startup was spending 40% of engineering time on manual testing. We implemented a comprehensive test automation suite that freed up their team to focus on features.',
    industry: 'Finance',
    featured: true,
    metric1: { value: '70%', label: 'Time Saved' },
    metric2: { value: '99.9%', label: 'Test Reliability' },
    tags: ['Fintech', 'Cypress', 'CI/CD']
  },
  {
    slug: 'saas-platform',
    title: 'SaaS Platform Scales Testing Across 5 Platforms with Test Hubble',
    description: 'A B2B SaaS platform needed to test across web, iOS, Android, and API endpoints. We built a unified test automation strategy that scales with their rapid growth.',
    industry: 'SaaS',
    featured: false,
    metric1: { value: '5', label: 'Platforms' },
    metric2: { value: '200+', label: 'Tests/Month' },
    tags: ['SaaS', 'Multi-platform', 'Appium']
  },
  {
    slug: 'ecommerce-marketplace',
    title: 'E-commerce Marketplace Eliminates Flaky Tests and Improves Release Velocity',
    description: 'An online marketplace was struggling with unreliable test suites that were blocking deployments. We rebuilt their test infrastructure from the ground up, reducing flakiness to near zero and enabling daily releases.',
    industry: 'E-commerce',
    featured: true,
    metric1: { value: '95%', label: 'Flakiness Reduced' },
    metric2: { value: 'Daily', label: 'Release Frequency' },
    tags: ['E-commerce', 'Selenium', 'CI/CD']
  },
  {
    slug: 'edtech-platform',
    title: 'EdTech Platform Achieves 100% Test Coverage Across Learning Management System',
    description: 'A leading education technology company needed comprehensive test coverage for their LMS platform serving millions of students. We automated critical user journeys and integration tests across all modules.',
    industry: 'Education',
    featured: false,
    metric1: { value: '100%', label: 'Coverage' },
    metric2: { value: '800+', label: 'Tests Automated' },
    tags: ['EdTech', 'Playwright', 'Integration']
  },
  {
    slug: 'real-estate-tech',
    title: 'Real Estate Tech Company Cuts QA Costs by 60% with Automated Testing',
    description: 'A real estate technology platform was spending excessive resources on manual QA. We implemented end-to-end test automation for property listings, search, and booking flows, dramatically reducing costs.',
    industry: 'Real Estate',
    featured: false,
    metric1: { value: '60%', label: 'Cost Reduction' },
    metric2: { value: '3 Weeks', label: 'Implementation' },
    tags: ['Real Estate', 'Cypress', 'E2E Testing']
  },
  {
    slug: 'travel-booking',
    title: 'Travel Booking Platform Ensures Zero Downtime with 24/7 Test Monitoring',
    description: 'A global travel booking platform required round-the-clock test monitoring to ensure zero downtime during peak booking seasons. We set up comprehensive monitoring and automated regression testing.',
    industry: 'Travel',
    featured: true,
    metric1: { value: '99.99%', label: 'Uptime' },
    metric2: { value: '24/7', label: 'Monitoring' },
    tags: ['Travel', 'Playwright', 'Monitoring']
  },
  {
    slug: 'insurance-tech',
    title: 'Insurance Tech Startup Accelerates Product Launches with Test Automation',
    description: 'An insurtech startup needed to speed up their product development cycle. We built a scalable test automation framework that enabled them to launch new insurance products 3x faster with confidence.',
    industry: 'Insurance',
    featured: false,
    metric1: { value: '3x', label: 'Faster Launches' },
    metric2: { value: '400+', label: 'Tests Automated' },
    tags: ['Insurance', 'WebdriverIO', 'Scalable']
  },
  {
    slug: 'food-delivery',
    title: 'Food Delivery App Achieves 99% Test Reliability Across Mobile Platforms',
    description: 'A food delivery mobile app needed reliable test automation for both iOS and Android platforms. We implemented Appium-based testing that ensures consistent quality across all devices and OS versions.',
    industry: 'Food & Beverage',
    featured: false,
    metric1: { value: '99%', label: 'Reliability' },
    metric2: { value: '50+', label: 'Devices Tested' },
    tags: ['Food Delivery', 'Appium', 'Mobile']
  }
]

const industries = ['All', 'Healthcare', 'Finance', 'SaaS', 'E-commerce', 'Education', 'Real Estate', 'Travel', 'Insurance', 'Food & Beverage']

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('All')

  const filteredStudies = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry)

  const breadcrumbs = [
    { name: 'Home', url: 'https://testhubble.com' },
    { name: 'Case Studies', url: 'https://testhubble.com/case-studies' }
  ]

  return (
    <>
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
              <h1>Case Studies</h1>
              <p>See how we've helped companies achieve reliable test automation and reduce QA costs</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="case-studies-section">
        <div className="container">
          <div className="case-studies-filters">
            {industries.map(industry => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`filter-btn ${selectedIndustry === industry ? 'active' : ''}`}
              >
                {industry}
              </button>
            ))}
          </div>

          <div className="case-studies-grid">
            {filteredStudies.map((study, index) => (
              <CaseStudyCard key={study.slug} caseStudy={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

