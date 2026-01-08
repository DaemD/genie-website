import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Zap, Target, Heart, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-sm font-medium text-primary">About Genie</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 glow-text">
            We&apos;re not traditional outsourcing.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">We&apos;re a talent-matchmaking powerhouse.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">We built apps used by millions.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Before Genie, we were builders. Engineers, designers, and product people who shipped products at scale.
                We worked with startups, enterprises, and everything in between.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                But we saw a problem: Companies waste months hiring. They sift through hundreds of resumes. They
                interview dozens of people. And they still end up with mediocre talent.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Meanwhile, Pakistan has some of the most talented engineers, designers, and operators in the world —
                hungry, skilled, and underutilized.
              </p>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">So we built Genie.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                A talent engine that matches world-class remote teams with companies that need to move fast.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We don&apos;t just place resumes. We match sparks. We find people who will own outcomes, not just
                complete tasks. People who make your team stronger, not slower.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl text-foreground font-medium max-w-3xl mx-auto leading-relaxed">
              Make high-potential Pakistani talent visible, global, and unstoppable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:border-primary/50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Speed over bureaucracy</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Move fast. Hire faster. No red tape.</p>
            </Card>

            <Card className="p-6 text-center hover:border-secondary/50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Skill over CV</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We test for ability, not pedigree. Talent speaks louder than credentials.
              </p>
            </Card>

            <Card className="p-6 text-center hover:border-accent/50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Delivery over promises</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We place people who ship. Not people who talk about shipping.
              </p>
            </Card>

            <Card className="p-6 text-center hover:border-chart-4/50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-chart-4/10 rounded-full mb-4">
                <Globe className="h-8 w-8 text-chart-4" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Global ambition</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We break down walls. Local talent, global impact.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Think */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">How We Think</h2>

          <div className="space-y-8">
            <Card className="p-8 border-l-4 border-l-primary">
              <p className="text-lg leading-relaxed">
                <span className="text-primary font-bold">Speed over bureaucracy.</span> Traditional hiring is broken. It
                takes too long, costs too much, and wastes everyone&apos;s time. We built Genie to cut through the noise
                and deliver quality fast.
              </p>
            </Card>

            <Card className="p-8 border-l-4 border-l-secondary">
              <p className="text-lg leading-relaxed">
                <span className="text-secondary font-bold">Skill over CV.</span> We don&apos;t care where you went to
                school or what companies you&apos;ve worked at. We care about what you can build. Show us your work.
                Prove your skill. That&apos;s what matters.
              </p>
            </Card>

            <Card className="p-8 border-l-4 border-l-accent">
              <p className="text-lg leading-relaxed">
                <span className="text-accent font-bold">Delivery over promises.</span> We&apos;re tired of people who
                talk big but ship small. We place talent that executes. People who own outcomes, not excuses.
              </p>
            </Card>

            <Card className="p-8 border-l-4 border-l-chart-4">
              <p className="text-lg leading-relaxed">
                <span className="text-chart-4 font-bold">Global ambition over local walls.</span> The best talent
                doesn&apos;t live in one city. It&apos;s everywhere. We&apos;re building the new workforce movement —
                where location doesn&apos;t limit opportunity.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet the Founders</h2>
            <p className="text-xl text-muted-foreground">Building the future of remote talent</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl">👩‍💼</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">Mahrukh</h3>
              <p className="text-muted-foreground text-center mb-4">Vision, Growth, Talent Futures</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Obsessed with connecting great talent with great opportunities. Built Genie to prove that Pakistan has
                world-class professionals who deserve global recognition.
              </p>
            </Card>

            <Card className="p-8">
              <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl">👨‍💼</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">Jahanzaib</h3>
              <p className="text-muted-foreground text-center mb-4">Creative Strategy, Global Branding</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Product designer turned entrepreneur. Believes great teams are built, not hired. On a mission to make
                remote work feel seamless, not second-best.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">The world needs talent.</h2>
          <p className="text-2xl text-foreground font-medium mb-4">Pakistan has it.</p>
          <p className="text-2xl text-primary font-bold mb-12 glow-text">We connect it.</p>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            We&apos;re building the new workforce movement. One that&apos;s borderless, skill-first, and unstoppable.
          </p>

          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 glow-box group" asChild>
            <Link href="#contact">
              Let&apos;s Build Your Team
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 glow-text">Ready to experience the difference?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let&apos;s show you what talent-as-a-service should look like.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 glow-box" asChild>
              <Link href="mailto:hello@genie.com">Get Started Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
