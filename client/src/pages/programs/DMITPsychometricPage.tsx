import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle, Brain, Target, TrendingUp, Award } from "lucide-react";
import dmitImage from "@assets/generated_images/Advanced_level_illustration_435fe745.png";

export default function DMITPsychometricPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            DMIT & Psychometric Program
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover your child's innate talents and learning style through scientific assessment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 animate-slide-up">
          <div className="flex items-center justify-center">
            <img 
              src={dmitImage} 
              alt="DMIT & Psychometric" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
                About DMIT & Psychometric
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Dermatoglyphics Multiple Intelligence Test (DMIT) and Psychometric assessments are scientific 
                methods to understand a child's innate capabilities, learning styles, and personality traits. 
                These assessments analyze fingerprint patterns and conduct comprehensive evaluations to provide 
                insights into cognitive abilities and behavioral tendencies.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Our comprehensive program helps parents and educators understand each child's unique potential, 
                enabling personalized learning strategies and career guidance. The detailed reports provide 
                actionable insights for optimizing educational approaches and nurturing individual strengths.
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
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Intelligence Analysis</h3>
                  <p className="text-muted-foreground">
                    Identify multiple intelligences and cognitive strengths through scientific testing.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Learning Style Assessment</h3>
                  <p className="text-muted-foreground">
                    Discover optimal learning methods tailored to individual preferences.
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
                  <h3 className="font-semibold text-lg mb-2">Career Guidance</h3>
                  <p className="text-muted-foreground">
                    Get insights into suitable career paths based on innate abilities.
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
                  <h3 className="font-semibold text-lg mb-2">Detailed Reports</h3>
                  <p className="text-muted-foreground">
                    Receive comprehensive analysis reports with actionable recommendations.
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
              "Identifies innate talents and abilities",
              "Reveals optimal learning styles",
              "Provides personality insights",
              "Guides career selection",
              "Enables personalized education",
              "Enhances self-awareness",
              "Improves academic performance",
              "Supports holistic development"
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
            Unlock your child's true potential through scientific assessment
          </p>
          <Button asChild size="lg" className="rounded-full font-accent cta-gradient-button" data-testid="button-book-demo">
            <Link href="/contact">Book a Free Demo Class</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
