'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function AnimatedSVGIcon({ className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const prefersReducedMotion = useReducedMotion()

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: prefersReducedMotion ? 0 : 2, ease: "easeInOut" },
        opacity: { duration: 0.3 }
      }
    }
  }

  return (
    <motion.svg
      ref={ref}
      width="100"
      height="100"
      viewBox="0 0 100 100"
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="2"
        variants={pathVariants}
      />
      <motion.path
        d="M30 50 L45 65 L70 35"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8D4E3" />
          <stop offset="100%" stopColor="#D4C5E8" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}

