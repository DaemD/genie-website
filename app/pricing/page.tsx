import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, ArrowRight, Zap, Users, Shield } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 glow-text">
            No long retainers. No hiring headaches.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">Pay for skill, not overhead.</p>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Hourly */}
            <Card className="p-8 hover:border-primary/50 transition-all glow-box">
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Hourly Engagement</h3>
                <p className="text-muted-foreground text-sm">Flexible, pay-as-you-go</p>
              </div>

              <div className="mb-6">
                <div className="text-4xl font-bold mb-2">
                  <span className="text-primary">$7-25</span>
                  <span className="text-xl text-muted-foreground">/hour</span>
                </div>
                <p className="text-sm text-muted-foreground">Depending on seniority & skills</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Fast onboarding</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Single resource needs</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Flexible scaling</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">No long-term commitment</span>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                <Link href="#contact">Get Started</Link>
              </Button>

              <div className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  <span className="text-primary font-medium">Best for:</span> Short-term projects, specific tasks, trial
                  periods
                </p>
              </div>
            </Card>

            {/* Monthly Dedicated */}
            <Card className="p-8 border-secondary hover:border-secondary/70 transition-all glow-box relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-xs font-semibold">
                  MOST POPULAR
                </div>
              </div>

              <div className="mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Monthly Dedicated</h3>
                <p className="text-muted-foreground text-sm">Full-time remote hire</p>
              </div>

              <div className="mb-6">
                <div className="text-4xl font-bold mb-2">
                  <span className="text-secondary">Custom</span>
                </div>
                <p className="text-sm text-muted-foreground">Based on role & experience</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Replacement guarantee</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Project manager (optional)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Accountability reporting</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">No HR burden</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">No legal complexity</span>
                </div>
              </div>

              <Button className="w-full bg-secondary hover:bg-secondary/90" asChild>
                <Link href="#contact">Get Proposal</Link>
              </Button>

              <div className="mt-4 p-3 bg-secondary/5 border border-secondary/20 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  <span className="text-secondary font-medium">Best for:</span> Long-term roles, core team members,
                  ongoing projects
                </p>
              </div>
            </Card>

            {/* Team/Pod */}
            <Card className="p-8 hover:border-accent/50 transition-all glow-box">
              <div className="mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Team/Pod Pricing</h3>
                <p className="text-muted-foreground text-sm">Build a full squad</p>
              </div>

              <div className="mb-6">
                <div className="text-4xl font-bold mb-2">
                  <span className="text-accent">Custom</span>
                </div>
                <p className="text-sm text-muted-foreground">Volume discounts available</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">4-10 member teams</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Engineers + designers + PM + QA</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Dedicated account manager</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Custom team structure</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Priority support</span>
                </div>
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <Link href="#contact">Build My Pod</Link>
              </Button>

              <div className="mt-4 p-3 bg-accent/5 border border-accent/20 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  <span className="text-accent font-medium">Best for:</span> Full product teams, offshore divisions,
                  agencies
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How We Compare</h2>
            <p className="text-xl text-muted-foreground">Traditional hiring vs. Genie</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">Factor</th>
                  <th className="text-center py-4 px-4 font-semibold text-muted-foreground">Traditional Hiring</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary">Genie</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">Time to hire</td>
                  <td className="text-center py-4 px-4 text-muted-foreground">2-4 months</td>
                  <td className="text-center py-4 px-4 text-primary font-semibold">48-72 hours</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">Cost per hire</td>
                  <td className="text-center py-4 px-4 text-muted-foreground">$4,000+</td>
                  <td className="text-center py-4 px-4 text-primary font-semibold">$0</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">Candidates reviewed</td>
                  <td className="text-center py-4 px-4 text-muted-foreground">50-100+</td>
                  <td className="text-center py-4 px-4 text-primary font-semibold">Top 3 only</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">HR overhead</td>
                  <td className="text-center py-4 px-4 text-muted-foreground">High</td>
                  <td className="text-center py-4 px-4 text-primary font-semibold">Zero</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">Replacement guarantee</td>
                  <td className="text-center py-4 px-4 text-muted-foreground">No</td>
                  <td className="text-center py-4 px-4 text-primary font-semibold">Yes</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">Ongoing management</td>
                  <td className="text-center py-4 px-4 text-muted-foreground">Your responsibility</td>
                  <td className="text-center py-4 px-4 text-primary font-semibold">We support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Common Questions</h2>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">How do you bill?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Hourly contracts are billed weekly. Monthly dedicated roles are billed at the start of each month. We
                accept wire transfer, PayPal, or direct bank transfer.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">What if it doesn't work out?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We offer a replacement guarantee. If you're not satisfied with a candidate within the first 2 weeks,
                we'll find you a replacement at no extra cost.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">Can I scale my team up or down?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Absolutely. Add more resources anytime. Scale down with 2 weeks notice on monthly contracts. Hourly
                engagements have no minimums.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">Do you handle contracts and compliance?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes. We handle all employment contracts, NDAs, legal paperwork, and compliance. You get talent without
                the admin burden.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">What timezones do your talent work in?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Pakistan is GMT+5. Most of our talent can accommodate 3-4 hours overlap with US/EU timezones. For
                projects requiring full timezone alignment, we can find candidates willing to work night shifts.
              </p>
            </Card>
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
            Ready to get your custom pricing?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">Tell us what you need. We'll send you a proposal.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 glow-box group" asChild>
              <Link href="mailto:hello@genie.com">
                Get Pricing Proposal
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
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
