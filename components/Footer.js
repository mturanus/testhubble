'use client'

import Link from 'next/link'
import RevealOnScroll from './animations/RevealOnScroll'
import SecurityBadges from './SecurityBadges'
import NewsletterSignup from './NewsletterSignup'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <RevealOnScroll>
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-icon">🔭</span>
                <span className="logo-text">Test Hubble</span>
              </div>
              <p className="footer-tagline">Calm, Reliable Automation.</p>
              <div className="footer-security">
                <SecurityBadges showDescription={false} />
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <Link href="/services">Services</Link>
                <Link href="/case-studies">Case Studies</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/#how-it-works">How It Works</Link>
                <Link href="/#faq">FAQ</Link>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/security">Security</Link>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
              </div>
              <div className="footer-column">
                <h4>Newsletter</h4>
                <NewsletterSignup variant="inline" />
              </div>
            </div>
          </div>
        </RevealOnScroll>
        <div className="footer-bottom">
          <p>&copy; 2024 Test Hubble. All rights reserved.</p>
          <p className="footer-compliance">SOC 2 Type II Certified | GDPR Compliant | HIPAA Ready</p>
        </div>
      </div>
    </footer>
  )
}

