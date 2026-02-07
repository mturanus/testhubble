'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/animations/ScrollProgress'
import RevealOnScroll from '@/components/animations/RevealOnScroll'
import ContactForm from '@/components/ContactForm'
import SecurityBadges from '@/components/SecurityBadges'
import { breadcrumbSchema } from '../metadata'

export default function Contact() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://testhubble.com' },
    { name: 'Contact', url: 'https://testhubble.com/contact' }
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
              <h1>Get in Touch</h1>
              <p>Let's discuss how Test Hubble can help your team achieve reliable test automation</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="contact-page-section">
        <div className="container">
          <div className="contact-page-grid">
            <div className="contact-info">
              <RevealOnScroll>
                <div className="contact-info-card">
                  <h2>Contact Information</h2>
                  <div className="contact-details">
                    <div className="contact-detail-item">
                      <span className="contact-icon">📧</span>
                      <div>
                        <strong>Email</strong>
                        <p>contact@testhubble.com</p>
                      </div>
                    </div>
                    <div className="contact-detail-item">
                      <span className="contact-icon">💬</span>
                      <div>
                        <strong>Response Time</strong>
                        <p>We respond within 24 hours</p>
                      </div>
                    </div>
                    <div className="contact-detail-item">
                      <span className="contact-icon">🕐</span>
                      <div>
                        <strong>Business Hours</strong>
                        <p>Monday - Friday, 9 AM - 6 PM EST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.2}>
                <div className="contact-security">
                  <h3>Your Data is Secure</h3>
                  <SecurityBadges showDescription={false} />
                  <p className="security-note">
                    We take data privacy seriously. All information is encrypted and handled according to GDPR and SOC 2 standards.
                  </p>
                </div>
              </RevealOnScroll>
            </div>

            <div className="contact-form-wrapper">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

