import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle, Sparkles, Zap, BookOpen, Award } from "lucide-react";
import vedicImage from "@assets/generated_images/Foundation_level_illustration_5a6285b3.png";

export default function AcaVedicMathsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            AcaVedic Maths Program
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the ancient Vedic mathematics techniques for lightning-fast mental calculations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 animate-slide-up">
          <div className="flex items-center justify-center">
            <img 
              src={vedicImage} 
              alt="Vedic Mathematics" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
                About AcaVedic Maths
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                AcaVedic Maths combines traditional Vedic mathematics principles with modern teaching methodologies. 
                These ancient Indian techniques, based on 16 sutras (formulas), enable students to solve complex 
                mathematical problems mentally with remarkable speed and accuracy.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Our program teaches students powerful shortcuts and tricks that make mathematics fun, easy, and 
                intuitive. From basic arithmetic to advanced algebra, Vedic Maths provides elegant solutions that 
                reduce calculation time and improve accuracy.
              </p>
            </div>
            
            <Button asChild size="lg" className="rounded-full font-accent" data-testid="button-enroll">
              <Link href="/contact">Enroll Now</Link>
            </Button>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="font-heading font-bold text-3xl mb-6 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Ancient Wisdom</h3>
                  <p className="text-muted-foreground">
                    Learn time-tested Vedic sutras that simplify complex mathematical operations.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Rapid Calculations</h3>
                  <p className="text-muted-foreground">
                    Master techniques for multiplication, division, squaring, and more in seconds.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <BookOpen className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Comprehensive Curriculum</h3>
                  <p className="text-muted-foreground">
                    Cover all mathematical operations with easy-to-understand Vedic methods.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Competitive Edge</h3>
                  <p className="text-muted-foreground">
                    Excel in competitive exams with faster problem-solving techniques.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Card className="p-8 bg-primary/5">
          <h2 className="font-heading font-bold text-3xl mb-6">Program Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Simplifies complex calculations",
              "Reduces calculation time significantly",
              "Improves mental agility",
              "Makes mathematics enjoyable",
              "Builds strong number sense",
              "Enhances logical reasoning",
              "Perfect for competitive exams",
              "Boosts overall confidence in math"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </Card>

        <div className="mt-12 text-center">
          <h3 className="font-heading font-bold text-2xl mb-4">Ready to Start?</h3>
          <p className="text-muted-foreground mb-6">
            Unlock the power of Vedic mathematics today
          </p>
          <Button asChild size="lg" className="rounded-full font-accent" data-testid="button-book-demo">
            <Link href="/contact">Book a Free Demo Class</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
