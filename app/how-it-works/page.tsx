import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageSquare, Search, Users, Rocket, RefreshCw, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-sm font-medium text-primary">Simple. Fast. Zero hiring friction.</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 glow-text">How Genie Works</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From brief to onboarded talent in days, not months.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Card className="p-8 glow-box order-2 md:order-1">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Step 1</div>
                      <h3 className="text-xl font-semibold">Tell Us What You Need</h3>
                    </div>
                  </div>

                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      <span>Skills, tech stack, experience level</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      <span>Timezone preferences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      <span>Culture fit & team dynamics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      <span>Budget & timeline</span>
                    </li>
                  </ul>
                </div>
              </Card>

              <div className="order-1 md:order-2">
                <div className="text-7xl font-bold text-primary/20 mb-4">01</div>
                <h2 className="text-3xl font-bold mb-4">Start with a conversation</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Jump on a quick call or fill out a brief. We want to understand your company, culture, and what
                  success looks like for you.
                </p>
                <p className="text-foreground font-medium mt-4">No generic resumes. Just the right people.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-7xl font-bold text-secondary/20 mb-4">02</div>
                <h2 className="text-3xl font-bold mb-4">We Hunt + Filter + Test</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We don&apos;t just post job ads. We actively source from our network of top 1% Pakistan talent, then
                  put them through the ringer.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-secondary">✓</span>
                    </div>
                    <span className="text-foreground">Technical skills assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-secondary">✓</span>
                    </div>
                    <span className="text-foreground">Communication & English fluency check</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-secondary">✓</span>
                    </div>
                    <span className="text-foreground">Culture & attitude match</span>
                  </div>
                </div>
              </div>

              <Card className="p-8 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 glow-box">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Search className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Step 2</div>
                    <h3 className="text-xl font-semibold">Sourcing & Vetting</h3>
                  </div>
                </div>
                <div className="bg-background/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Typical funnel</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Sourced candidates</span>
                      <span className="text-muted-foreground">100+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>After screening</span>
                      <span className="text-secondary font-medium">10-15</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Sent to you</span>
                      <span className="text-secondary font-bold">Top 3</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Card className="p-8 glow-box order-2 md:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Step 3</div>
                    <h3 className="text-xl font-semibold">Meet Your Top 3</h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  No resume flood. No wasting time. Just 3 pre-vetted candidates who actually match your needs.
                </p>

                <div className="bg-accent/5 border border-accent/20 p-4 rounded-lg">
                  <p className="text-sm font-medium mb-2">You get:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Detailed profiles with portfolio/GitHub</li>
                    <li>• Video introductions</li>
                    <li>• Technical test results</li>
                    <li>• Our honest assessment</li>
                  </ul>
                </div>
              </Card>

              <div className="order-1 md:order-2">
                <div className="text-7xl font-bold text-accent/20 mb-4">03</div>
                <h2 className="text-3xl font-bold mb-4">You interview only the best</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Interview 2-3 candidates max. No 47-person pipelines. No "maybe" profiles. Just A-players.
                </p>
                <div className="mt-6 p-4 bg-card border border-border rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Average time to shortlist</p>
                  <p className="text-3xl font-bold text-accent">48-72 hours</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-7xl font-bold text-chart-4/20 mb-4">04</div>
                <h2 className="text-3xl font-bold mb-4">Onboard + Plug-In</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Once you pick your person, we handle all the boring stuff.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-chart-4/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-chart-4 rounded-full" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Contracts & compliance</h3>
                      <p className="text-sm text-muted-foreground">NDAs, work agreements, legal paperwork</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-chart-4/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-chart-4 rounded-full" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Tools & access setup</h3>
                      <p className="text-sm text-muted-foreground">Slack, GitHub, Jira, Figma — whatever you use</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-chart-4/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-chart-4 rounded-full" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Handover & kickoff</h3>
                      <p className="text-sm text-muted-foreground">We introduce them properly to your team</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-8 bg-gradient-to-br from-chart-4/10 to-chart-4/5 border-chart-4/20 glow-box">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-chart-4/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Rocket className="h-6 w-6 text-chart-4" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Step 4</div>
                    <h3 className="text-xl font-semibold">Launch Day</h3>
                  </div>
                </div>
                <p className="text-foreground font-medium mb-4">Your new team member hits the ground running.</p>
                <p className="text-sm text-muted-foreground">
                  No HR burden. No legal complexity. Just talent, ready to execute.
                </p>
              </Card>
            </div>

            {/* Step 5 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Card className="p-8 glow-box order-2 md:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Step 5</div>
                    <h3 className="text-xl font-semibold">Scale Anytime</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="font-medium mb-2">Need more people?</p>
                    <p className="text-sm text-muted-foreground">Add resources instantly. Same quality, same speed.</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="font-medium mb-2">Something not working?</p>
                    <p className="text-sm text-muted-foreground">Replacement guarantee. We find you someone better.</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="font-medium mb-2">Want to scale down?</p>
                    <p className="text-sm text-muted-foreground">Flexible agreements. Grow at your pace.</p>
                  </div>
                </div>
              </Card>

              <div className="order-1 md:order-2">
                <div className="text-7xl font-bold text-primary/20 mb-4">05</div>
                <h2 className="text-3xl font-bold mb-4">Ongoing support & flexibility</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We don&apos;t disappear after placement. We manage, support, and help you scale as your needs evolve.
                </p>
                <p className="text-foreground font-medium mt-6">Time to hire? Days. Not months.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">The Timeline</h2>
            <p className="text-xl text-muted-foreground">From kickoff to onboarded talent</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">Day 1</div>
              <p className="text-sm text-muted-foreground">Initial call & requirements</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-secondary mb-2">Day 2-3</div>
              <p className="text-sm text-muted-foreground">Sourcing & vetting</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">Day 4-5</div>
              <p className="text-sm text-muted-foreground">You interview top 3</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-chart-4 mb-2">Day 6-7</div>
              <p className="text-sm text-muted-foreground">Onboarding & launch</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-foreground mb-4">Total time: ~1 week</p>
            <p className="text-muted-foreground">Compare that to traditional hiring: 2-4 months</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 glow-text">Ready to move fast?</h2>
          <p className="text-xl text-muted-foreground mb-8">Let&apos;s start the conversation today.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 glow-box group" asChild>
              <Link href="mailto:hello@genie.com">
                Build My Team
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent" asChild>
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
