import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <div className="text-2xl font-heading font-bold mb-6 tracking-tight">
              <span className="text-foreground">Genie</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-6">
              Hire, manage, and scale world-class marketing talent from one platform.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-foreground text-sm uppercase tracking-wider">Solutions</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors font-medium">
                  Public Relations
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors font-medium">
                  Brand Strategy
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors font-medium">
                  Performance Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors font-medium">
                  Creative & Content
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-foreground text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="#resources" className="hover:text-foreground transition-colors font-medium">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/talent-signup" className="hover:text-foreground transition-colors font-medium">
                  For Talent
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-foreground transition-colors font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-foreground text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors font-medium">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors font-medium">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-foreground transition-colors font-medium">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-muted-foreground font-medium">
              &copy; {new Date().getFullYear()} Genie. All rights reserved.
            </p>
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors font-medium">Twitter</Link>
              <Link href="#" className="hover:text-foreground transition-colors font-medium">LinkedIn</Link>
              <Link href="#" className="hover:text-foreground transition-colors font-medium">Instagram</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
