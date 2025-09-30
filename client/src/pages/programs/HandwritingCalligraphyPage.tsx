import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle, Pen, BookOpen, Award, Sparkles } from "lucide-react";
import handwritingImage from "@assets/generated_images/Grand_Master_achievement_illustration_5ae4a7c4.png";

export default function HandwritingCalligraphyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            Handwriting & Calligraphy Program
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Master the art of beautiful writing and develop excellent penmanship skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 animate-slide-up">
          <div className="flex items-center justify-center">
            <img 
              src={handwritingImage} 
              alt="Handwriting & Calligraphy" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
                About Handwriting & Calligraphy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Handwriting & Calligraphy program is designed to develop neat, legible, and beautiful 
                handwriting in children. Through systematic practice and proper techniques, students learn 
                correct letter formation, spacing, and writing posture that forms the foundation for effective 
                written communication.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The program progresses from basic handwriting improvement to artistic calligraphy, teaching 
                various writing styles and techniques. Students develop fine motor skills, hand-eye coordination, 
                and attention to detail while creating beautiful written work that boosts their confidence.
              </p>
            </div>
            
            <Button asChild size="lg" className="rounded-full font-accent cta-gradient-button" data-testid="button-enroll">
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
                  <Pen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Proper Techniques</h3>
                  <p className="text-muted-foreground">
                    Learn correct grip, posture, and letter formation for excellent handwriting.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Multiple Styles</h3>
                  <p className="text-muted-foreground">
                    Master cursive, print, and artistic calligraphy styles with expert guidance.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Personalized Feedback</h3>
                  <p className="text-muted-foreground">
                    Receive individual attention and corrections to improve writing quality.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Creative Expression</h3>
                  <p className="text-muted-foreground">
                    Develop artistic skills through beautiful calligraphy and decorative writing.
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
              "Improves handwriting legibility",
              "Develops fine motor skills",
              "Enhances hand-eye coordination",
              "Builds patience and focus",
              "Increases writing speed",
              "Boosts academic performance",
              "Develops artistic abilities",
              "Improves overall presentation"
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
            Transform your child's handwriting into beautiful art
          </p>
          <Button asChild size="lg" className="rounded-full font-accent cta-gradient-button" data-testid="button-book-demo-program">
            <Link href="/contact">Book a Free Demo Class</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
