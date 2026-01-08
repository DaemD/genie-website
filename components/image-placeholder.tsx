"use client"

import { motion } from "framer-motion"
import { Image as ImageIcon } from "lucide-react"

interface ImagePlaceholderProps {
  aspectRatio?: "square" | "video" | "wide"
  className?: string
  gradient?: boolean
}

export function ImagePlaceholder({ aspectRatio = "video", className = "", gradient = false }: ImagePlaceholderProps) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
  }

  return (
    <div className={`${aspectClasses[aspectRatio]} ${className} relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary via-background to-secondary/50`}>
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
      )}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-3">
            <ImageIcon className="h-8 w-8 text-primary/60" />
          </div>
        </div>
      </div>
      {/* Decorative dots pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_2px_2px,currentColor_1px,transparent_0)] bg-[length:24px_24px]" />
    </div>
  )
}

