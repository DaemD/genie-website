import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Code2, Palette, TrendingUp, Settings } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 glow-text">
            We don&apos;t outsource. We build remote engines.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Pick your team. We&apos;ll deliver the horsepower.
          </p>
        </div>
      </section>

      {/* Tech & Engineering */}
      <section id="tech" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                <Code2 className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Tech & Engineering Teams</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Code that ships. Not slips.</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Build products that scale. From MVP to enterprise, we staff engineering teams that execute.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Full Stack Development</h3>
                    <p className="text-sm text-muted-foreground">React, Node, .NET, Next.js, Vue, Python</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Mobile Engineering</h3>
                    <p className="text-sm text-muted-foreground">Flutter, React Native, iOS, Android</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Backend & API</h3>
                    <p className="text-sm text-muted-foreground">Microservices, REST, GraphQL, Serverless</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">QA & Test Automation</h3>
                    <p className="text-sm text-muted-foreground">Manual, automated, performance testing</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">DevOps & Cloud</h3>
                    <p className="text-sm text-muted-foreground">AWS, Azure, GCP, CI/CD, Kubernetes</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                For SaaS, fintech, marketplaces, e-commerce, AI startups.
              </p>

              <Button className="bg-primary hover:bg-primary/90 glow-box group" asChild>
                <Link href="#contact">
                  Build My Tech Pod
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <Card className="p-8 glow-box">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">48-72hrs</div>
                  <p className="text-muted-foreground">Time to first candidate</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">Top 1%</div>
                  <p className="text-muted-foreground">Vetted engineering talent</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">5+ years</div>
                  <p className="text-muted-foreground">Average experience level</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Creative & Design */}
      <section id="creative" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="p-8 glow-box order-2 md:order-1">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What we deliver</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Brand identity that sticks
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    UI/UX that converts
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Motion graphics that pop
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Social content that spreads
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Video that engages
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground italic pt-4">
                  If it needs visual energy, we&apos;re the spark.
                </p>
              </div>
            </Card>

            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-6">
                <Palette className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium text-secondary">Creative & Design Studio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Design that slaps. Brands that stay.</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From brand identity to product design, we create visual experiences that make your company
                unforgettable.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Branding + Identity</h3>
                    <p className="text-sm text-muted-foreground">Logos, brand guides, visual systems</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">UI/UX Design</h3>
                    <p className="text-sm text-muted-foreground">Apps, websites, product interfaces</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Motion & Animations</h3>
                    <p className="text-sm text-muted-foreground">Explainer videos, product demos, micro-interactions</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Social Creatives</h3>
                    <p className="text-sm text-muted-foreground">Ads, posts, stories, thumbnails</p>
                  </div>
                </div>
              </div>

              <Button className="bg-secondary hover:bg-secondary/90 glow-box group" asChild>
                <Link href="#contact">
                  Get Creative Team
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Growth & Marketing */}
      <section id="growth" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
                <TrendingUp className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">Growth & Marketing Teams</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Your numbers go 📈. Fast.</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We don&apos;t run ads. We run profit engines. Data-driven marketers who turn spend into revenue.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Performance Marketing</h3>
                    <p className="text-sm text-muted-foreground">Google Ads, Meta Ads, TikTok Ads</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">SEO + Content</h3>
                    <p className="text-sm text-muted-foreground">Rank higher, traffic faster, content that converts</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Social Media Growth</h3>
                    <p className="text-sm text-muted-foreground">LinkedIn, Instagram, Twitter/X community building</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Influencer Campaigns</h3>
                    <p className="text-sm text-muted-foreground">Via our sister brand Shark Talent</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Analytics & Tracking</h3>
                    <p className="text-sm text-muted-foreground">GA4, conversion optimization, attribution modeling</p>
                  </div>
                </div>
              </div>

              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground glow-box group" asChild>
                <Link href="#contact">
                  Scale My Marketing
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 glow-box">
              <h3 className="text-xl font-semibold mb-6">What success looks like</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">CAC</span>
                    <span className="text-sm font-semibold text-accent">Down 40%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[40%] bg-accent rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Organic Traffic</span>
                    <span className="text-sm font-semibold text-accent">Up 300%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[90%] bg-accent rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">ROAS</span>
                    <span className="text-sm font-semibold text-accent">4.5x avg</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[75%] bg-accent rounded-full" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Sales & Ops */}
      <section id="ops" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="p-8 glow-box order-2 md:order-1">
              <h3 className="text-xl font-semibold mb-6">We handle the back office</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-2 h-2 bg-chart-4 rounded-full" />
                  <span className="text-sm">Outbound SDRs & BDRs</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-2 h-2 bg-chart-4 rounded-full" />
                  <span className="text-sm">Customer Success Teams</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-2 h-2 bg-chart-4 rounded-full" />
                  <span className="text-sm">Project/Account Managers</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-2 h-2 bg-chart-4 rounded-full" />
                  <span className="text-sm">Admin, Finance, Virtual Assistants</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-2 h-2 bg-chart-4 rounded-full" />
                  <span className="text-sm">Operations Coordinators</span>
                </div>
              </div>
            </Card>

            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-chart-4/10 border border-chart-4/20 rounded-full mb-6">
                <Settings className="h-4 w-4 text-chart-4" />
                <span className="text-sm font-medium text-chart-4">Sales, CS & Operations</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Pipeline. Process. Power. Delivered.</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                You build strategy — we run the machine. From cold outreach to customer onboarding to back-office ops.
              </p>

              <p className="text-foreground font-medium mb-6">We place talent that doesn&apos;t need babysitting.</p>

              <Button className="bg-chart-4 hover:bg-chart-4/90 text-foreground glow-box group" asChild>
                <Link href="#contact">
                  Hire Ops Team
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 glow-text">
            Ready to build your remote engine?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">Tell us what you need. We&apos;ll show you who we have.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 glow-box" asChild>
              <Link href="mailto:hello@genie.com">Get Pricing Proposal</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent" asChild>
              <Link href="/how-it-works">See How It Works</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
