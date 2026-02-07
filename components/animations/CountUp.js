'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function CountUp({ 
  end, 
  duration = 2000, 
  prefix = '', 
  suffix = '',
  decimals = 1,
  className = ''
}) {
  const [count, setCount] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const hasAnimated = useRef(false)

  // Intersection Observer to detect when element is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsInView(true)
          }
        })
      },
      { threshold: 0.1, rootMargin: '-50px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isInView || hasAnimated.current) {
      if (prefersReducedMotion || !isInView) {
        setCount(end)
      }
      return
    }

    hasAnimated.current = true

    // Handle text values (like "24/7" or "SOC 2") - just set them immediately
    if (typeof end === 'string' && !end.match(/^\d+\.?\d*$/)) {
      setCount(end)
      return
    }

    // Handle numeric values - animate from 0 to end
    const numericEnd = typeof end === 'string' ? parseFloat(end) : end
    const start = 0
    const increment = numericEnd / (duration / 16) // 60fps
    let current = start

    const timer = setInterval(() => {
      current += increment
      if (current >= numericEnd) {
        setCount(numericEnd)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, end, duration, prefersReducedMotion])

  // Format the display value
  const formatValue = (value) => {
    if (typeof end === 'string' && !end.match(/^\d+\.?\d*$/)) {
      return end
    }
    
    const numValue = typeof value === 'string' ? parseFloat(value) : value
    return numValue.toFixed(decimals)
  }

  // For text values, use fade-in animation
  const isTextValue = typeof end === 'string' && !end.match(/^\d+\.?\d*$/)

  return (
    <motion.span 
      ref={ref} 
      className={className}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0.8
      }}
      transition={{ duration: 0.5, delay: isTextValue ? 0.3 : 0 }}
    >
      {prefix}{formatValue(count)}{suffix}
    </motion.span>
  )
}

