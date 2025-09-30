import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle, Calculator, Brain, TrendingUp, Users } from "lucide-react";
import abacusImage from "@assets/generated_images/Junior_level_illustration_d3b73f7e.png";

export default function AbacusPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            Abacus Program
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Master the ancient art of mental arithmetic with our comprehensive Abacus program
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 animate-slide-up">
          <div className="flex items-center justify-center">
            <img 
              src={abacusImage} 
              alt="Abacus Learning" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
                About Abacus
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The Abacus program is designed to develop exceptional mental arithmetic abilities in children. 
                Through systematic training with the traditional abacus tool, students learn to visualize and 
                perform complex calculations mentally. This ancient technique has been proven to enhance cognitive 
                abilities, improve concentration, and build a strong mathematical foundation.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Our structured curriculum progresses from basic bead manipulation to advanced mental calculations, 
                enabling students to solve multi-digit problems faster than a calculator. The program is suitable 
                for children aged 5-14 years and is divided into progressive levels.
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
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Lightning Fast Calculations</h3>
                  <p className="text-muted-foreground">
                    Develop the ability to perform complex arithmetic operations mentally at incredible speeds.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Brain className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Enhanced Brain Development</h3>
                  <p className="text-muted-foreground">
                    Stimulate both left and right brain hemispheres for balanced cognitive growth.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Improved Academic Performance</h3>
                  <p className="text-muted-foreground">
                    See significant improvements in math scores and overall academic confidence.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Expert Instructors</h3>
                  <p className="text-muted-foreground">
                    Learn from certified abacus trainers with years of teaching experience.
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
              "Develops photographic memory",
              "Enhances concentration and focus",
              "Improves problem-solving skills",
              "Builds confidence in mathematics",
              "Increases mental calculation speed",
              "Strengthens logical thinking",
              "Boosts creativity and imagination",
              "Improves listening skills and observation"
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
            Join thousands of students who have transformed their math abilities
          </p>
          <Button asChild size="lg" className="rounded-full font-accent" data-testid="button-book-demo">
            <Link href="/contact">Book a Free Demo Class</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
