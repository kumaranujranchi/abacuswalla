import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Star, Users } from "lucide-react";
import heroImage from "@assets/generated_images/Children_learning_with_abacus_ca88f577.png";

export function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <Badge className="mb-6 bg-accent/20 backdrop-blur-sm border-accent text-accent-foreground animate-fade-in" data-testid="badge-trust">
            <Users className="h-3 w-3 mr-1" />
            500+ Happy Students
          </Badge>

          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 animate-slide-up">
            Unlock Your Child's{" "}
            <span className="text-accent yellow-glow">Math Genius</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Transform your child's mathematical abilities through proven abacus-based learning. Build confidence, speed, and mental agility with our engaging programs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button
              asChild
              size="lg"
              className="rounded-full font-accent text-base"
              data-testid="button-try-puzzle"
            >
              <Link href="/puzzles">Try a Free Puzzle</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full font-accent text-base bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              data-testid="button-hero-book-demo"
            >
              <Link href="/contact">Book a Demo Class</Link>
            </Button>
          </div>

          <div className="flex items-center gap-6 mt-8">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-5 w-5 fill-accent text-accent"
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
