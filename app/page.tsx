"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ArrowRight,
  Users,
  TrendingUp,
  Target,
  Rocket,
  Award,
  Star,
  Quote,
  BarChart3,
  Globe,
  CheckCircle2,
  Zap,
  Sparkles,
  Briefcase,
  FileText,
  Play,
  Shield,
  Clock,
  DollarSign,
  Megaphone,
  Palette,
  Code,
  Sparkle,
} from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { StaggerChildren, StaggerChild } from "@/components/animations/stagger-children"
import { Counter } from "@/components/animations/counter"
import { DashboardPreview } from "@/components/dashboard-preview"
import { CreativeImage } from "@/components/creative-image"
import { motion } from "framer-motion"

const services = [
  {
    icon: Megaphone,
    title: "Public Relations",
    description: "Amplify your brand with top-tier PR talent and strategic media relations.",
    learnMore: "Learn more",
    color: "blue",
  },
  {
    icon: Target,
    title: "Brand Strategy",
    description: "Work with expert strategists to build a compelling brand that drives results.",
    learnMore: "Learn more",
    color: "purple",
  },
  {
    icon: Palette,
    title: "Creative & Content",
    description: "Access world-class creative talent for design, copywriting, and content production.",
    learnMore: "Learn more",
    color: "orange",
  },
  {
    icon: Rocket,
    title: "Performance Marketing",
    description: "Scale your growth with data-driven campaigns managed by expert marketers.",
    learnMore: "Learn more",
    color: "green",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Build and launch high-converting websites with skilled developers.",
    learnMore: "Learn more",
    color: "blue",
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    description: "Connect with the right influencers to amplify your brand message.",
    learnMore: "Learn more",
    color: "purple",
  },
]

const benefits = [
  {
    icon: CheckCircle2,
    title: "Vetted marketing talent",
    description: "Only 3% of applicants pass our rigorous screening process",
    stat: "3%",
  },
  {
    icon: Clock,
    title: "48-hour matching",
    description: "Get matched with the perfect marketing expert in 2 days",
    stat: "48hrs",
  },
  {
    icon: Shield,
    title: "Fully managed",
    description: "We handle contracts, payments, and performance management",
    stat: "100%",
  },
  {
    icon: DollarSign,
    title: "Transparent pricing",
    description: "Simple, all-inclusive pricing with no hidden fees",
    stat: "$0",
  },
]

const stats = [
  {
    value: "10,000+",
    label: "Marketing projects completed",
    sublabel: "Across 50+ countries",
  },
  {
    value: "95%",
    label: "Client satisfaction rate",
    sublabel: "Based on 5,000+ reviews",
  },
  {
    value: "48hrs",
    label: "Average time to match talent",
    sublabel: "Fastest in the industry",
  },
]

const testimonials = [
  {
    company: "TechCorp",
    logo: "TC",
    quote:
      "Genie has transformed how we scale our marketing. We've hired 15+ marketing experts through their platform, and the quality has been consistently outstanding. The time saved on hiring alone has been invaluable.",
    author: "Sarah Chen",
    role: "VP of Marketing",
    companyName: "TechCorp",
    results: "15+ experts hired",
    gradient: "blue",
  },
  {
    company: "StartupXYZ",
    logo: "SX",
    quote:
      "We needed to scale our marketing team quickly, and Genie delivered. The platform is intuitive, the talent is top-notch, and the support team is always responsive. Highly recommend.",
    author: "Marcus Johnson",
    role: "Founder & CEO",
    companyName: "StartupXYZ",
    results: "500% growth in 6 months",
    gradient: "purple",
  },
  {
    company: "GlobalBrand",
    logo: "GB",
    quote:
      "Managing a global marketing team used to be a nightmare. With Genie, we have full visibility and control over all our marketing projects in one place. It's been a game-changer.",
    author: "Elena Rodriguez",
    role: "Global Marketing Director",
    companyName: "GlobalBrand",
    results: "Managed 50+ projects",
    gradient: "orange",
  },
]

const clientLogos = [
  "TechCorp",
  "StartupXYZ",
  "GlobalBrand",
  "Samsung",
  "Xiaomi",
  "Philip Morris",
  "Frito-Lay",
  "Dairah",
  "Mozilla",
  "Toyota",
  "Burger King",
  "Aston Martin",
  "HelloFresh",
  "DoorDash",
  "SoundCloud",
]

const resources = [
  {
    type: "Guide",
    title: "How to build a world-class marketing team",
    description: "Learn the strategies used by top companies to scale their marketing operations.",
    readTime: "5 min read",
    gradient: "blue",
  },
  {
    type: "Case Study",
    title: "How TechCorp scaled from 0 to $50M with Genie",
    description: "Discover how a fast-growing startup built their entire marketing team through our platform.",
    readTime: "8 min read",
    gradient: "purple",
  },
  {
    type: "Tool",
    title: "Marketing ROI Calculator",
    description: "Calculate the true cost and ROI of hiring marketing talent for your business.",
    readTime: "3 min read",
    gradient: "orange",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle background elements - Professional and non-distracting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/2 rounded-full blur-3xl opacity-40" />
      </div>

      <Navigation />

      {/* Hero Section - Sleek dark mode design */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-secondary/10 overflow-hidden">
        {/* Subtle background elements - dark mode optimized */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl opacity-30" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            {/* Trust badge - Sleek dark mode style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/15 border border-primary/30 rounded-full mb-8 backdrop-blur-sm"
            >
              <Sparkle className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary tracking-wide uppercase">Trusted by 10,000+ companies</span>
            </motion.div>

            {/* Main headline - Toptal/Remote style with better hierarchy */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-extrabold mb-8 leading-[1.1] tracking-tight text-foreground max-w-5xl mx-auto text-balance"
            >
              Hire world-class{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
                  marketing talent
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  className="absolute -bottom-1 left-0 right-0 h-2 bg-primary/15 rounded-full -z-10"
                />
              </span>
            </motion.h1>
            
            {/* Subheadline - Clear and concise */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-normal"
            >
              Connect with pre-vetted marketing experts. Hire, manage, and scale your team from one powerful platform.
            </motion.p>
            
            {/* CTA Buttons - Professional spacing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-10 py-7 h-auto font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                Get started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base px-10 py-7 h-auto border-2 border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 font-medium"
              >
                Book a demo
              </Button>
            </motion.div>
            
            {/* Trust indicators - Clean and minimal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span className="font-medium">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span className="font-medium">Free 30-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span className="font-medium">Setup in minutes</span>
              </div>
            </motion.div>
          </div>

          {/* Dashboard preview - Professional presentation */}
          <ScrollReveal>
            <div className="mt-20 relative">
              {/* Subtle glow - less aggressive */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl blur-3xl opacity-40" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.97, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-background backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary/3 pointer-events-none" />
                <DashboardPreview />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Client Logos - Sleek dark mode */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/20 to-background border-y border-border/30 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold text-muted-foreground text-center mb-12 tracking-wider uppercase"
          >
            Trusted by thousands of companies worldwide
          </motion.p>
          <div className="marquee-container">
            <div className="marquee-content">
              {clientLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-base font-semibold text-muted-foreground whitespace-nowrap flex-shrink-0 px-8 py-4 bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 hover:text-primary transition-all shadow-sm hover:shadow-md"
                >
                  {logo}
                </motion.div>
              ))}
              {clientLogos.map((logo, index) => (
                <motion.div
                  key={`duplicate-${index}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-base font-semibold text-muted-foreground whitespace-nowrap flex-shrink-0 px-8 py-4 bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 hover:text-primary transition-all shadow-sm hover:shadow-md"
                >
                  {logo}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Professional layout */}
      <section className="relative section-spacing px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-6"
              >
                <span className="text-xs font-semibold text-primary uppercase tracking-wider px-4 py-1.5 bg-primary/15 rounded-full border border-primary/30">
                  Our Solutions
                </span>
              </motion.div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 tracking-tight text-foreground text-balance max-w-4xl mx-auto">
                Find the right marketing solution
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                From brand strategy to performance marketing, access expert talent for every marketing need.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="group h-full"
                  >
                    <Card className="p-0 border border-border/40 hover:border-primary/40 hover:shadow-xl transition-all duration-300 h-full cursor-pointer overflow-hidden relative bg-card group-hover:bg-card/80">
                      {/* Image section - More refined */}
                      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-secondary/50 to-secondary/20">
                        <CreativeImage
                          aspectRatio="video"
                          gradient={service.color as "blue" | "purple" | "orange" | "green"}
                          className="h-full w-full rounded-none opacity-60"
                          overlay={false}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                        <div className="absolute top-6 left-6">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            className="w-12 h-12 bg-background/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-md border border-border/30 group-hover:bg-primary group-hover:border-primary transition-colors duration-300"
                          >
                            <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Content - Better spacing */}
                      <div className="p-8">
                        <h3 className="text-xl font-heading font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed text-[15px]">
                          {service.description}
                        </p>
                        <Link href="#" className="text-sm font-semibold text-primary hover:text-primary/80 inline-flex items-center gap-2 group/link transition-colors">
                          {service.learnMore}
                          <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                        </Link>
                      </div>
                    </Card>
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section - Sleek dark mode */}
      <section className="relative section-spacing px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/10 via-background to-background overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-6"
              >
                <span className="text-xs font-semibold text-primary uppercase tracking-wider px-4 py-1.5 bg-primary/15 rounded-full border border-primary/30">
                  Why Choose Us
                </span>
              </motion.div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 tracking-tight text-balance max-w-4xl mx-auto">
                Why choose Genie
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We make it easy to find, hire, and manage world-class marketing talent.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative"
                  >
                    <Card className="p-8 border border-border/40 hover:border-primary/40 hover:shadow-xl transition-all duration-300 text-center bg-card h-full relative overflow-hidden group flex flex-col">
                      <div className="relative z-10 flex flex-col flex-grow">
                        {/* Icon with better styling */}
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                          className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300 flex-shrink-0"
                        >
                          <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                        </motion.div>
                        
                        {/* Stat badge - More prominent */}
                        <div className="inline-flex items-center justify-center min-w-[3rem] h-10 px-3 rounded-full bg-primary/20 text-primary font-bold text-base mb-5 group-hover:bg-primary/30 transition-colors flex-shrink-0">
                          {benefit.stat}
                        </div>
                        
                        <h3 className="text-lg font-heading font-semibold mb-3 text-foreground group-hover:text-primary transition-colors flex-shrink-0">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm flex-grow">
                          {benefit.description}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section - Clean and impactful */}
      <section className="relative section-spacing px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <StaggerChild key={index}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative"
                >
                  <Card className="p-12 border border-border/40 hover:border-primary/40 hover:shadow-xl transition-all duration-300 text-center bg-card relative overflow-hidden group">
                    <div className="relative z-10">
                      <div className="text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold mb-5 bg-gradient-to-br from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
                        <Counter value={parseInt(stat.value.replace(/[^0-9]/g, '')) || 0} suffix={stat.value.includes('%') ? '%' : stat.value.includes('hrs') ? 'hrs' : '+'} />
                      </div>
                      <p className="text-xl font-semibold text-foreground mb-2">{stat.label}</p>
                      <p className="text-sm text-muted-foreground font-medium">{stat.sublabel}</p>
                    </div>
                  </Card>
                </motion.div>
              </StaggerChild>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Testimonials Section - Sleek dark mode */}
      <section className="relative section-spacing px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/10 via-background to-background overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-6"
              >
                <span className="text-xs font-semibold text-primary uppercase tracking-wider px-4 py-1.5 bg-primary/15 rounded-full border border-primary/30">
                  Customer Stories
                </span>
              </motion.div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 tracking-tight text-balance max-w-4xl mx-auto">
                Loved by marketing teams worldwide
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="h-full"
                >
                  <Card className="p-0 border border-border/40 hover:border-primary/40 hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden bg-card relative group">
                    {/* Image header - More refined */}
                    <div className="relative h-40 overflow-hidden bg-gradient-to-br from-secondary/50 to-secondary/20">
                      <CreativeImage
                        aspectRatio="video"
                        gradient={testimonial.gradient as "blue" | "purple" | "orange" | "green"}
                        className="h-full w-full rounded-none opacity-50"
                        overlay={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                      
                      {/* Company badge */}
                      <div className="absolute bottom-6 left-6 flex items-center gap-3">
                        <div className="w-12 h-12 bg-card/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-md border border-border/40 group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                          <span className="text-lg font-bold text-primary group-hover:text-primary-foreground transition-colors">
                            {testimonial.logo}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-sm">{testimonial.companyName}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.results}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content - Better spacing */}
                    <div className="p-8 flex flex-col flex-grow">
                      <Quote className="h-5 w-5 text-primary/30 mb-4" />
                      <blockquote className="text-foreground mb-6 leading-relaxed flex-grow text-[15px]">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="pt-6 border-t border-border/30">
                        <p className="font-semibold text-foreground mb-1">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section - Professional layout */}
      <section className="relative section-spacing px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-6"
              >
                <span className="text-xs font-semibold text-primary uppercase tracking-wider px-4 py-1.5 bg-primary/15 rounded-full border border-primary/30">
                  Learn & Grow
                </span>
              </motion.div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 tracking-tight text-balance max-w-4xl mx-auto">
                Resources and guides
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Learn how to build and scale world-class marketing teams.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="h-full group"
                >
                  <Card className="p-0 border border-border/40 hover:border-primary/40 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden bg-card h-full flex flex-col">
                    <div className="aspect-video bg-secondary/30 relative overflow-hidden">
                      <CreativeImage
                        aspectRatio="video"
                        gradient={resource.gradient as "blue" | "purple" | "orange" | "green"}
                        className="h-full opacity-50"
                        overlay={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                      
                      {/* Type badge */}
                      <div className="absolute top-4 left-4">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider px-3 py-1.5 bg-card/95 backdrop-blur-sm rounded-full border border-border/40 shadow-md">
                          {resource.type}
                        </span>
                      </div>
                      
                      {/* Arrow icon overlay on hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-14 h-14 bg-card/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-border/40">
                          <ArrowRight className="h-5 w-5 text-primary ml-0.5" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-lg font-heading font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {resource.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 text-[15px] leading-relaxed flex-grow">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between pt-6 border-t border-border/30">
                        <span className="text-xs text-muted-foreground font-medium">{resource.readTime}</span>
                        <Link href="#" className="text-sm font-semibold text-primary hover:text-primary/80 inline-flex items-center gap-2 group/link transition-colors">
                          Read more
                          <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                        </Link>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Sleek dark mode with vibrant primary */}
      <section id="contact" className="relative section-spacing px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-primary/85 text-primary-foreground overflow-hidden">
        {/* Subtle background patterns - dark mode optimized */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold mb-8 tracking-tight text-balance">
                Ready to scale your marketing team?
              </h2>
              <p className="text-lg sm:text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                Join thousands of companies using Genie to hire and manage world-class marketing talent.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <Button 
                  size="lg" 
                  className="bg-background hover:bg-background/90 text-foreground text-base px-10 py-7 h-auto font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Get started free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-10 py-7 h-auto border-2 border-primary-foreground/40 hover:border-primary-foreground/60 hover:bg-primary-foreground/20 text-primary-foreground backdrop-blur-sm font-medium"
                >
                  Book a demo
                </Button>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="font-medium">No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="font-medium">Free 30-day trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="font-medium">Setup in minutes</span>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}