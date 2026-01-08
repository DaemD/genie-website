"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Globe, DollarSign, TrendingUp, Users, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function TalentSignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skillset: "",
    experience: "",
    expectedSalary: "",
    portfolio: "",
    linkedIn: "",
    github: "",
    availability: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thanks for applying! We'll review your profile and get back to you soon.")
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-sm font-medium text-primary">For Talent</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 glow-text">Got skill? We place it.</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-4">
            If you&apos;re a designer, developer, marketer, operator — and you&apos;re good at what you do — the world
            is hiring.
          </p>
          <p className="text-2xl text-foreground font-medium">Through us.</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">What You Get</h2>
            <p className="text-xl text-muted-foreground">Earn in USD. Work worldwide. Grow faster.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:border-primary/50 transition-colors glow-box">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Remote global placements</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Work with startups, scale-ups, and enterprises worldwide
              </p>
            </Card>

            <Card className="p-6 text-center hover:border-secondary/50 transition-colors glow-box">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <DollarSign className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">International pay</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Earn competitive USD rates for your skills
              </p>
            </Card>

            <Card className="p-6 text-center hover:border-accent/50 transition-colors glow-box">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Career acceleration</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Work on cutting-edge projects that level up your portfolio
              </p>
            </Card>

            <Card className="p-6 text-center hover:border-chart-4/50 transition-colors glow-box">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-chart-4/10 rounded-full mb-4">
                <Users className="h-8 w-8 text-chart-4" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Skill-based matching</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No bias. Just your work. Let your skills speak.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Apply to Join Genie</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fill out the form below. We review every application and shortlist based on skill, not credentials.
            </p>
          </div>

          <Card className="p-8 glow-box">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+92 300 1234567"
                  required
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </div>

              {/* Skillset */}
              <div className="space-y-2">
                <Label htmlFor="skillset">
                  Primary Skillset <span className="text-destructive">*</span>
                </Label>
                <Select onValueChange={(value) => handleChange("skillset", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your primary skillset" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="frontend">Frontend Developer</SelectItem>
                    <SelectItem value="backend">Backend Developer</SelectItem>
                    <SelectItem value="fullstack">Full-Stack Developer</SelectItem>
                    <SelectItem value="mobile">Mobile Developer</SelectItem>
                    <SelectItem value="devops">DevOps Engineer</SelectItem>
                    <SelectItem value="qa">QA Engineer</SelectItem>
                    <SelectItem value="uiux">UI/UX Designer</SelectItem>
                    <SelectItem value="graphic">Graphic Designer</SelectItem>
                    <SelectItem value="motion">Motion Designer</SelectItem>
                    <SelectItem value="ppc">PPC Specialist</SelectItem>
                    <SelectItem value="seo">SEO Specialist</SelectItem>
                    <SelectItem value="content">Content Writer</SelectItem>
                    <SelectItem value="social">Social Media Manager</SelectItem>
                    <SelectItem value="sdr">Sales Development Rep (SDR)</SelectItem>
                    <SelectItem value="cs">Customer Success</SelectItem>
                    <SelectItem value="pm">Project Manager</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Experience */}
              <div className="space-y-2">
                <Label htmlFor="experience">
                  Years of Experience <span className="text-destructive">*</span>
                </Label>
                <Select onValueChange={(value) => handleChange("experience", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-2">1-2 years</SelectItem>
                    <SelectItem value="3-4">3-4 years</SelectItem>
                    <SelectItem value="5-7">5-7 years</SelectItem>
                    <SelectItem value="8+">8+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Expected Salary */}
              <div className="space-y-2">
                <Label htmlFor="expectedSalary">
                  Expected Hourly Rate (USD) <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="expectedSalary"
                  type="text"
                  placeholder="e.g. $15-20/hour"
                  required
                  value={formData.expectedSalary}
                  onChange={(e) => handleChange("expectedSalary", e.target.value)}
                />
                <p className="text-xs text-muted-foreground">Be realistic. We match based on skill and experience.</p>
              </div>

              {/* Portfolio */}
              <div className="space-y-2">
                <Label htmlFor="portfolio">Portfolio / Website</Label>
                <Input
                  id="portfolio"
                  type="url"
                  placeholder="https://yourportfolio.com"
                  value={formData.portfolio}
                  onChange={(e) => handleChange("portfolio", e.target.value)}
                />
              </div>

              {/* LinkedIn */}
              <div className="space-y-2">
                <Label htmlFor="linkedIn">LinkedIn Profile</Label>
                <Input
                  id="linkedIn"
                  type="url"
                  placeholder="https://linkedin.com/in/yourprofile"
                  value={formData.linkedIn}
                  onChange={(e) => handleChange("linkedIn", e.target.value)}
                />
              </div>

              {/* GitHub */}
              <div className="space-y-2">
                <Label htmlFor="github">GitHub / Behance / Dribbble</Label>
                <Input
                  id="github"
                  type="url"
                  placeholder="https://github.com/yourusername"
                  value={formData.github}
                  onChange={(e) => handleChange("github", e.target.value)}
                />
                <p className="text-xs text-muted-foreground">GitHub for developers, Behance/Dribbble for designers</p>
              </div>

              {/* Availability */}
              <div className="space-y-2">
                <Label htmlFor="availability">
                  Availability <span className="text-destructive">*</span>
                </Label>
                <Select onValueChange={(value) => handleChange("availability", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="When can you start?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate (within 1 week)</SelectItem>
                    <SelectItem value="2weeks">2 weeks notice</SelectItem>
                    <SelectItem value="1month">1 month notice</SelectItem>
                    <SelectItem value="flexible">Flexible / Open to discuss</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Additional Info */}
              <div className="space-y-2">
                <Label htmlFor="additionalInfo">Tell Us About Yourself (Optional)</Label>
                <Textarea
                  id="additionalInfo"
                  placeholder="Why do you want to work with Genie? What makes you stand out? Any specific skills or achievements?"
                  rows={5}
                  className="resize-none"
                />
                <p className="text-xs text-muted-foreground">Help us understand what makes you unique</p>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-lg py-6 glow-box group"
                >
                  Submit Application
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <p className="text-xs text-center text-muted-foreground">
                By submitting, you agree to be contacted by Genie for potential job opportunities
              </p>
            </form>
          </Card>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Happens Next?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-4">01</div>
              <h3 className="text-lg font-semibold mb-2">We Review</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our team reviews your profile within 48 hours. We look at your skills, portfolio, and fit.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-secondary mb-4">02</div>
              <h3 className="text-lg font-semibold mb-2">We Test</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If you&apos;re a good fit, we invite you to a quick skills assessment and interview.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-4">03</div>
              <h3 className="text-lg font-semibold mb-2">We Place You</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Once approved, we start matching you with companies looking for your exact skillset.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-4">Average time from application to first interview:</p>
            <p className="text-3xl font-bold text-primary">1-2 weeks</p>
          </div>
        </div>
      </section>

      {/* FAQ for Talent */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Talent FAQs</h2>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Do I need to pay anything to apply?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                No. Genie is 100% free for talent. We never charge you to apply or get placed. We make money from
                companies, not from you.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">How much can I earn?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                It depends on your skill level. Junior roles start around $7-12/hour. Mid-level is $12-18/hour. Senior
                roles can go $18-25+/hour. Be realistic about your expectations based on your experience.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">Can I work part-time?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes. We have both full-time and part-time roles. Let us know your availability in the application.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">What if I don&apos;t have a portfolio?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Then build one. GitHub for developers, Behance/Dribbble for designers. Show us your work. Without proof
                of skill, it&apos;s hard to match you with quality roles.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">How do payments work?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                You work, you track hours, we handle invoicing and payments. You get paid via bank transfer or PayPal.
                Simple.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 glow-text">Ready to go global?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Your next opportunity is waiting. Let&apos;s make it happen.
          </p>

          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 glow-box group" asChild>
            <a href="#top">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
