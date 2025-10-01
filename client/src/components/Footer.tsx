import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="relative border-t">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-heading font-bold text-primary mb-3">
                    Abacuswalla
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Empowering children with mental math skills and cognitive development through abacus-based learning.
                  </p>
                </div>
                
                {/* Social Links */}
                <div>
                  <p className="text-sm font-medium mb-3">Connect With Us</p>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center hover-elevate active-elevate-2 transition-all"
                      data-testid="link-facebook"
                    >
                      <Facebook className="h-5 w-5 text-primary" />
                    </a>
                    <a
                      href="#"
                      className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center hover-elevate active-elevate-2 transition-all"
                      data-testid="link-instagram"
                    >
                      <Instagram className="h-5 w-5 text-primary" />
                    </a>
                    <a
                      href="#"
                      className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center hover-elevate active-elevate-2 transition-all"
                      data-testid="link-twitter"
                    >
                      <Twitter className="h-5 w-5 text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Partnerships & Enrollment */}
            <div>
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-primary" />
                Partnerships
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/partnership/for-schools">
                    <span className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-flex items-center gap-1 transition-all cursor-pointer group" data-testid="link-footer-schools">
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      For Schools
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/partnership/for-individuals">
                    <span className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-flex items-center gap-1 transition-all cursor-pointer group" data-testid="link-footer-individuals">
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      For Individuals
                    </span>
                  </Link>
                </li>
              </ul>

              <h4 className="font-semibold text-lg mb-4 mt-8 flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-primary" />
                Enrollment
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/enrollment/students">
                    <span className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-flex items-center gap-1 transition-all cursor-pointer group" data-testid="link-footer-enrollment">
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      Student Enrollment
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Olympiad & Resources */}
            <div>
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-primary" />
                Olympiad
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/olympiad/abacus">
                    <span className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-flex items-center gap-1 transition-all cursor-pointer group" data-testid="link-footer-abacus-olympiad">
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      Abacus Olympiad
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/olympiad/talent">
                    <span className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-flex items-center gap-1 transition-all cursor-pointer group" data-testid="link-footer-talent-olympiad">
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      Talent Olympiad
                    </span>
                  </Link>
                </li>
              </ul>

              <h4 className="font-semibold text-lg mb-4 mt-8 flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-primary" />
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/puzzles">
                    <span className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-flex items-center gap-1 transition-all cursor-pointer group" data-testid="link-footer-puzzles">
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      Games
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/resources">
                    <span className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-flex items-center gap-1 transition-all cursor-pointer group" data-testid="link-footer-resources">
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      Worksheets
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Counselling */}
            <div>
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-primary" />
                Counselling
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/counselling/dmit">
                    <span className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-flex items-center gap-1 transition-all cursor-pointer group" data-testid="link-footer-dmit">
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      DMIT Test
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/counselling/psychosomatic">
                    <span className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-flex items-center gap-1 transition-all cursor-pointer group" data-testid="link-footer-psychosomatic">
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      Psychosomatic Test
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/counselling/combined">
                    <span className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-flex items-center gap-1 transition-all cursor-pointer group" data-testid="link-footer-combined">
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      Combined Test
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-primary" />
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground/70 mb-0.5">Address</p>
                    <p className="text-sm font-medium">Dhurwa, Ranchi – 834004</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground/70 mb-0.5">Phone</p>
                    <a href="tel:9525230232" className="text-sm font-medium hover:text-primary transition-colors">
                      9525230232
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground/70 mb-0.5">Email</p>
                    <a href="mailto:info@abacuswalla.com" className="text-sm font-medium hover:text-primary transition-colors">
                      info@abacuswalla.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t bg-card/50 backdrop-blur-sm mb-24 md:mb-0">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © 2025 Abacuswalla. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground">
                Designed & Maintained by{" "}
                <a
                  href="https://synergybrandarchitect.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF6B35] hover:text-[#FF8555] hover:underline font-medium transition-all duration-300"
                  data-testid="link-synergy"
                >
                  Synergy Brand Architect
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
