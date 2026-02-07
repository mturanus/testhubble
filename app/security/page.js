'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/animations/ScrollProgress'
import RevealOnScroll from '@/components/animations/RevealOnScroll'
import SecurityBadges from '@/components/SecurityBadges'
import { breadcrumbSchema } from '../metadata'

export default function Security() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://testhubble.com' },
    { name: 'Security & Compliance', url: 'https://testhubble.com/security' }
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
              <h1>Security & Compliance</h1>
              <p>Enterprise-grade security and compliance for regulated industries</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="security-page">
        <div className="container">
          <RevealOnScroll>
            <div className="security-badges-large">
              <SecurityBadges showDescription={true} />
            </div>
          </RevealOnScroll>

          <div className="security-content">
            <RevealOnScroll>
              <div className="security-section">
                <h2>Security Practices</h2>
                <div className="security-features">
                  <div className="security-feature">
                    <h3>🔒 Data Encryption</h3>
                    <p>All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We use industry-standard encryption protocols to protect your information.</p>
                  </div>
                  <div className="security-feature">
                    <h3>🛡️ Access Controls</h3>
                    <p>Strict access controls and authentication. We use multi-factor authentication and role-based access control for all systems.</p>
                  </div>
                  <div className="security-feature">
                    <h3>🔐 Secure Infrastructure</h3>
                    <p>Our infrastructure is hosted on secure, compliant cloud platforms with regular security audits and penetration testing.</p>
                  </div>
                  <div className="security-feature">
                    <h3>📊 Monitoring & Logging</h3>
                    <p>24/7 security monitoring, comprehensive logging, and real-time threat detection to ensure your data is always protected.</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className="security-section">
                <h2>Compliance Certifications</h2>
                <div className="compliance-details">
                  <div className="compliance-item">
                    <h3>SOC 2 Type II</h3>
                    <p>We maintain SOC 2 Type II certification, demonstrating our commitment to security, availability, and confidentiality. Our controls are audited annually by independent third parties.</p>
                  </div>
                  <div className="compliance-item">
                    <h3>GDPR Compliant</h3>
                    <p>We comply with the General Data Protection Regulation (GDPR) for all EU customers. We respect your data rights and provide transparent data handling practices.</p>
                  </div>
                  <div className="compliance-item">
                    <h3>HIPAA Ready</h3>
                    <p>We're HIPAA ready and work with healthcare companies to ensure protected health information (PHI) is handled according to HIPAA requirements.</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
              <div className="security-section">
                <h2>Data Handling</h2>
                <p>We take data privacy seriously:</p>
                <ul className="security-list">
                  <li>Data is stored in secure, compliant data centers</li>
                  <li>Regular backups with encryption</li>
                  <li>Data retention policies aligned with regulations</li>
                  <li>Right to deletion (GDPR compliance)</li>
                  <li>Data processing agreements available</li>
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.6}>
              <div className="security-section">
                <h2>Security Audits</h2>
                <p>We undergo regular security audits and assessments:</p>
                <ul className="security-list">
                  <li>Annual SOC 2 audits</li>
                  <li>Penetration testing</li>
                  <li>Vulnerability assessments</li>
                  <li>Third-party security reviews</li>
                </ul>
                <p className="security-note">For security audit reports or additional compliance documentation, please contact us at security@testhubble.com</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

