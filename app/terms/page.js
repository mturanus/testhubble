'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/animations/ScrollProgress'
import RevealOnScroll from '@/components/animations/RevealOnScroll'
import { breadcrumbSchema } from '../metadata'

export default function Terms() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://testhubble.com' },
    { name: 'Terms of Service', url: 'https://testhubble.com/terms' }
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
              <h1>Terms of Service</h1>
              <p>Last updated: January 15, 2024</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="legal-page">
        <div className="container-medium">
          <RevealOnScroll>
            <div className="legal-content">
              <h2>1. Agreement to Terms</h2>
              <p>By accessing or using Test Hubble's services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.</p>

              <h2>2. Services</h2>
              <p>Test Hubble provides managed test automation services, including but not limited to:</p>
              <ul>
                <li>Test suite development and maintenance</li>
                <li>CI/CD integration</li>
                <li>Test automation consulting</li>
                <li>Ongoing test maintenance and updates</li>
              </ul>

              <h2>3. Service Level Agreement (SLA)</h2>
              <p>We commit to:</p>
              <ul>
                <li>99.9% test reliability</li>
                <li>24/7 test monitoring</li>
                <li>Response time: 24 hours for support requests</li>
                <li>Weekly status reports</li>
              </ul>

              <h2>4. Payment Terms</h2>
              <p>Payment terms are specified in your service agreement. Generally:</p>
              <ul>
                <li>Invoices are due within 30 days</li>
                <li>Late payments may incur fees</li>
                <li>Services may be suspended for non-payment</li>
              </ul>

              <h2>5. Intellectual Property</h2>
              <p>Test suites and automation code developed by Test Hubble remain the property of Test Hubble, unless otherwise specified in your agreement. You retain rights to your application code and test requirements.</p>

              <h2>6. Confidentiality</h2>
              <p>We maintain strict confidentiality regarding your application, code, and business information. We will not disclose your information to third parties without your consent, except as required by law.</p>

              <h2>7. Limitation of Liability</h2>
              <p>Test Hubble's liability is limited to the amount paid for services in the 12 months preceding any claim. We are not liable for indirect, incidental, or consequential damages.</p>

              <h2>8. Termination</h2>
              <p>Either party may terminate services with 30 days written notice. Upon termination, we will provide a handoff of test suites and documentation.</p>

              <h2>9. Dispute Resolution</h2>
              <p>Any disputes will be resolved through good faith negotiation. If unresolved, disputes will be settled through binding arbitration.</p>

              <h2>10. Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of modified terms.</p>

              <h2>11. Contact</h2>
              <p>For questions about these Terms, contact us at:</p>
              <p>
                <strong>Email:</strong> legal@testhubble.com
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </>
  )
}

