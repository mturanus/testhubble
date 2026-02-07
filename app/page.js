import HomePageClient from '@/components/HomePageClient'
import { organizationSchema, serviceSchema, websiteSchema, faqSchema } from './metadata'

// FAQ data for schema
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
  }
]

export default function Home() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <HomePageClient />
    </>
  )
}
