"use client"

import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"

interface CounterProps {
  value: number
  suffix?: string
  duration?: number
  className?: string
}

export function Counter({ value, suffix = "", duration = 2, className = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })

  useEffect(() => {
    if (isInView) {
      motionValue.set(0)
      setTimeout(() => {
        motionValue.set(value)
      }, 100)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const rounded = Math.round(latest)
        ref.current.textContent = rounded.toLocaleString() + suffix
      }
    })

    return () => {
      unsubscribe()
    }
  }, [springValue, suffix])

  return <span ref={ref} className={className} suppressHydrationWarning>0{suffix}</span>
}

