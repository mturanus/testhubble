'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function AnimatedCard({ 
  children, 
  className = '',
  delay = 0,
  hoverScale = 1.02,
  hoverY = -4
}) {
  const [isHovered, setIsHovered] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const hoverProps = prefersReducedMotion
    ? {}
    : {
        scale: hoverScale,
        y: hoverY,
        transition: {
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={hoverProps}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={className}
      style={{
        boxShadow: isHovered && !prefersReducedMotion
          ? '0 8px 30px rgba(45, 55, 72, 0.12)'
          : '0 4px 20px rgba(45, 55, 72, 0.08)'
      }}
    >
      {children}
    </motion.div>
  )
}

