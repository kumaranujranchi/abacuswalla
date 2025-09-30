import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Star, Users } from "lucide-react";
import heroImage from "@assets/generated_images/Children_learning_with_abacus_ca88f577.png";
import { useEffect } from "react";

export function Hero() {
  useEffect(() => {
    // Initialize parallax effect on hero background
    const heroBackground = document.querySelector('[data-hero-bg]') as HTMLElement;
    if (!heroBackground) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;
    const updateParallax = () => {
      const scrolled = window.scrollY;
      const parallaxSpeed = 0.5;
      const translateY = scrolled * parallaxSpeed;
      heroBackground.style.transform = `translate3d(0, ${translateY}px, 0)`;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      <div
        data-hero-bg
        className="absolute inset-0 bg-cover bg-center parallax-bg"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <Badge className="mb-6 bg-accent/20 backdrop-blur-sm border-accent text-accent-foreground animate-fade-in" data-testid="badge-trust">
            <Users className="h-3 w-3 mr-1" />
            500+ Happy Students
          </Badge>

          <h1 className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            <span className="block hero-line-1">Unlock Your Child's</span>{" "}
            <span className="block hero-line-2 text-accent yellow-glow">Math Genius</span>
          </h1>

          <p className="text-base md:text-lg text-white/80 mb-10 max-w-2xl font-normal hero-subline">
            Transform your child's mathematical abilities through proven abacus-based learning. Build confidence, speed, and mental agility with our engaging programs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 hero-subline" style={{ animationDelay: '0.6s' }}>
            <Button
              asChild
              size="lg"
              className="rounded-full font-accent text-base cta-hover"
              data-testid="button-try-puzzle"
            >
              <Link href="/puzzles">Try a Free Puzzle</Link>
            </Button>
            <a
              href="/contact"
              className="cta-gradient-button cta-pulse-once"
              data-testid="button-hero-book-demo"
              data-ripple
            >
              Book a Demo Class
            </a>
          </div>

          <div className="flex items-center gap-6 mt-8 hero-subline" style={{ animationDelay: '0.7s' }}>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-5 w-5 fill-accent text-accent"
                  data-star
                />
              ))}
            </div>
            <p className="text-sm text-white/80">
              Rated 4.9/5 by parents
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
