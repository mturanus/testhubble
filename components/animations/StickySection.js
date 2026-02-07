'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function StickySection({ 
  children, 
  className = '',
  pinStart = 0,
  pinEnd = 1
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  })
  const prefersReducedMotion = useReducedMotion()

  const opacity = useTransform(
    scrollYProgress,
    [pinStart, pinStart + 0.1, pinEnd - 0.1, pinEnd],
    prefersReducedMotion ? [1, 1, 1, 1] : [0, 1, 1, 0]
  )

  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      className={`sticky top-0 ${className}`}
    >
      {children}
    </motion.section>
  )
}

