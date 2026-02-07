'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import ScrollHint from './ScrollHint'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import CountUp from './animations/CountUp'

// Animated gradient background with floating shapes
const FloatingShape = ({ delay = 0, size = 100, x = 0, y = 0, color = 'blue' }) => {
  const prefersReducedMotion = useReducedMotion()
  
  return (
    <motion.div
      className={`floating-shape floating-shape-${color}`}
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
      }}
      animate={prefersReducedMotion ? {} : {
        y: [0, -30, 0],
        x: [0, 15, 0],
        rotate: [0, 10, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    />
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  const prefersReducedMotion = useReducedMotion()
  
  // Parallax effects for background elements
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, 200]
  )
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, 0]
  )

  return (
    <section ref={ref} className="hero-modern">
      {/* Animated gradient background */}
      <motion.div 
        className="hero-gradient-bg"
        style={{ y: backgroundY, opacity }}
      >
        <div className="gradient-layer gradient-layer-1" />
        <div className="gradient-layer gradient-layer-2" />
        <div className="gradient-layer gradient-layer-3" />
      </motion.div>

      {/* Floating decorative shapes */}
      <div className="floating-shapes-container">
        <FloatingShape delay={0} size={120} x={10} y={20} color="blue" />
        <FloatingShape delay={1} size={80} x={85} y={30} color="lavender" />
        <FloatingShape delay={2} size={100} x={70} y={60} color="mint" />
        <FloatingShape delay={0.5} size={60} x={20} y={70} color="pink" />
        <FloatingShape delay={1.5} size={90} x={90} y={80} color="blue" />
      </div>

      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-content-modern"
        >
          <motion.div variants={itemVariants} className="tagline-badge-modern">
            <span className="tagline-dot" />
            Calm, Reliable Automation.
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="hero-headline-modern">
            Test automation that works,
            <br />
            <span className="gradient-text">without the headaches</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-subheadline-modern">
            We handle your web and mobile test automation so your team can focus on building features, not fixing flaky tests.
          </motion.p>
          
          <motion.div 
            variants={itemVariants} 
            className="hero-cta-modern"
          >
            <motion.button 
              onClick={() => {
                const event = new CustomEvent('openDemoModal')
                window.dispatchEvent(event)
              }}
              className="btn btn-primary-modern"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule a Demo
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="btn-arrow">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
            <motion.a 
              href="/services" 
              className="btn btn-secondary-modern"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            variants={itemVariants}
            className="hero-trust-indicators"
          >
            <div className="trust-indicator">
              <CountUp 
                end={99.9} 
                suffix="%" 
                duration={2000}
                decimals={1}
                className="trust-number"
              />
              <span className="trust-label">Uptime</span>
            </div>
            <div className="trust-indicator">
              <CountUp 
                end="24/7" 
                duration={1500}
                className="trust-number"
              />
              <span className="trust-label">Monitoring</span>
            </div>
            <div className="trust-indicator">
              <CountUp 
                end="SOC 2" 
                duration={1500}
                className="trust-number"
              />
              <span className="trust-label">Compliant</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint indicator */}
      <ScrollHint />
    </section>
  )
}
