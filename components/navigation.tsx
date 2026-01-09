"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group z-10">
            <div className="text-2xl font-heading font-bold tracking-tight">
              <span className="text-foreground group-hover:text-primary transition-colors">Genie</span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            <Link
              href="/services"
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/talent-signup"
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              For Talent
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4 z-10">
            <Button variant="ghost" asChild className="text-sm font-semibold text-muted-foreground hover:text-foreground">
              <Link href="#contact">Log in</Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold px-6 shadow-md hover:shadow-lg transition-all">
              <Link href="#contact">Get started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/services"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/talent-signup"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              For Talent
            </Link>
            <div className="flex flex-col gap-3 pt-4">
              <Button variant="ghost" asChild>
                <Link href="#contact">Log in</Link>
              </Button>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#contact">Get started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
