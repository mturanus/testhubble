'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const defaultVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export default function RevealOnScroll({ 
  children, 
  delay = 0, 
  duration = 0.6,
  variants = defaultVariants,
  className = '',
  once = true
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once, 
    margin: '-100px',
    amount: 0.2
  })
  const prefersReducedMotion = useReducedMotion()

  const animationVariants = prefersReducedMotion 
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : variants

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animationVariants}
      transition={{
        duration: prefersReducedMotion ? 0.2 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

