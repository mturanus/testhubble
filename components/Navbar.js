'use client'

import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="container">
        <div className="nav-content">
          <Link href="/" className="logo">
            <span className="logo-icon">🔭</span>
            <span className="logo-text">Test Hubble</span>
          </Link>
          <ul className="nav-links">
            <li>
              <Link href="/" className={pathname === '/' ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className={pathname === '/services' ? 'active' : ''}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/case-studies" className={pathname === '/case-studies' ? 'active' : ''}>
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="/blog" className={pathname === '/blog' ? 'active' : ''}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="cta-link">
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  )
}

