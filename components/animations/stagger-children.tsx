"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface StaggerChildrenProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function StaggerChildren({ children, delay = 0, className = "" }: StaggerChildrenProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={container} className={className}>
      {children}
    </motion.div>
  )
}

export function StaggerChild({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.21, 1.11, 0.81, 0.99],
      },
    },
  }

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  )
}

