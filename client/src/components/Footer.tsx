import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-card mt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              Abacuswalla
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Empowering children with mental math skills and cognitive development through abacus-based learning.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 rounded-md hover-elevate active-elevate-2"
                data-testid="link-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-md hover-elevate active-elevate-2"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-md hover-elevate active-elevate-2"
                data-testid="link-twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-home">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/programs">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-programs">
                    Programs
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-about">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-contact">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/puzzles">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-puzzles">
                    Puzzles & Games
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/resources">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-resources">
                    Worksheets
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/testimonials">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-testimonials">
                    Success Stories
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 Learning Street, Education City</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@abacuswalla.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Abacuswalla. All rights reserved.</p>
          <p className="mt-2">
            Designed & Maintained by{" "}
            <a
              href="https://synergybrandarchitect.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF6B35] hover:text-[#FF8555] hover:underline transition-all duration-300"
              data-testid="link-synergy"
            >
              Synergy Brand Architect
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
