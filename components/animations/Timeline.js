'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function Timeline({ items, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: prefersReducedMotion ? 0 : -30 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0.2 : 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="relative"
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  )
}

