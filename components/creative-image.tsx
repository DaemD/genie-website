"use client"

import { motion } from "framer-motion"

interface CreativeImageProps {
  src?: string
  alt?: string
  aspectRatio?: "square" | "video" | "wide" | "portrait"
  className?: string
  overlay?: boolean
  gradient?: "blue" | "purple" | "orange" | "green"
}

export function CreativeImage({ 
  src, 
  alt = "", 
  aspectRatio = "video", 
  className = "",
  overlay = true,
  gradient = "blue"
}: CreativeImageProps) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
    portrait: "aspect-[3/4]",
  }

  const gradientClasses = {
    blue: "from-blue-600/30 via-blue-500/20 to-purple-600/30",
    purple: "from-purple-600/30 via-purple-500/20 to-pink-600/30",
    orange: "from-orange-600/30 via-orange-500/20 to-red-600/30",
    green: "from-green-600/30 via-green-500/20 to-teal-600/30",
  }

  return (
    <div className={`${aspectClasses[aspectRatio]} ${className} relative overflow-hidden rounded-lg`}>
      {/* Background gradient - creates image-like appearance */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClasses[gradient]}`} />
      
      {/* Pattern overlay for texture */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
      </div>

      {/* If src provided, use img tag */}
      {src && (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
      )}

      {/* Texture pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[length:24px_24px]" />
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-50" />
    </div>
  )
}

