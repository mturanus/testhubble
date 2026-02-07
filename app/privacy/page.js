'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/animations/ScrollProgress'
import RevealOnScroll from '@/components/animations/RevealOnScroll'
import { breadcrumbSchema } from '../metadata'

export default function Privacy() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://testhubble.com' },
    { name: 'Privacy Policy', url: 'https://testhubble.com/privacy' }
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
              <h1>Privacy Policy</h1>
              <p>Last updated: January 15, 2024</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="legal-page">
        <div className="container-medium">
          <RevealOnScroll>
            <div className="legal-content">
              <h2>1. Introduction</h2>
              <p>Test Hubble ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>

              <h2>2. Information We Collect</h2>
              <h3>2.1 Information You Provide</h3>
              <p>We collect information that you provide directly to us, including:</p>
              <ul>
                <li>Name and contact information (email, phone, company)</li>
                <li>Information about your testing needs</li>
                <li>Communication preferences</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>

              <h3>2.2 Automatically Collected Information</h3>
              <p>We automatically collect certain information when you visit our website:</p>
              <ul>
                <li>IP address and browser type</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
                <li>Device information</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you updates and marketing communications (with your consent)</li>
                <li>Analyze website usage and improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>4. Data Sharing and Disclosure</h2>
              <p>We do not sell your personal information. We may share your information with:</p>
              <ul>
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your consent</li>
              </ul>

              <h2>5. Your Rights (GDPR)</h2>
              <p>If you are located in the European Economic Area (EEA), you have the right to:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Rectify inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>

              <h2>6. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information, including encryption, access controls, and regular security audits.</p>

              <h2>7. Cookies</h2>
              <p>We use cookies to enhance your experience. You can control cookies through your browser settings. For more information, see our Cookie Policy.</p>

              <h2>8. Children's Privacy</h2>
              <p>Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.</p>

              <h2>9. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>

              <h2>10. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at:</p>
              <p>
                <strong>Email:</strong> privacy@testhubble.com<br />
                <strong>Address:</strong> [Your Address]
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </>
  )
}

