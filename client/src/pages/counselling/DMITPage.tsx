import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Brain, Fingerprint, Target, Users, CheckCircle, Award, TrendingUp, Heart } from "lucide-react";

export default function DMITPage() {
  const benefits = [
    {
      icon: Brain,
      title: "Brain Dominance Analysis",
      description: "Identify left/right brain dominance and learning style preferences"
    },
    {
      icon: Target,
      title: "Multiple Intelligence",
      description: "Discover your child's unique combination of 8 intelligence types"
    },
    {
      icon: TrendingUp,
      title: "Learning Quotient",
      description: "Understand optimal learning methods and strategies"
    },
    {
      icon: Heart,
      title: "Personality Traits",
      description: "Comprehensive personality profile and behavioral patterns"
    }
  ];

  const process = [
    { title: "Fingerprint Scanning", desc: "Quick 10-minute biometric data collection" },
    { title: "Analysis", desc: "Scientific dermatoglyphics analysis by experts" },
    { title: "Report Generation", desc: "Detailed 30-40 page personalized report" },
    { title: "Counseling Session", desc: "60-minute consultation with our experts" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Fingerprint className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Scientific Assessment</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              DMIT <span className="text-primary">Assessment</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Dermatoglyphics Multiple Intelligence Test - Unlock your child's innate potential 
              through scientific fingerprint analysis and personalized guidance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full" data-testid="button-book-dmit">
                <Link href="/contact">Book DMIT Test</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full" data-testid="button-learn-dmit">
                <a href="#details">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is DMIT */}
      <section className="py-20" id="details">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-center">
              What is DMIT?
            </h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground mb-4">
                  DMIT (Dermatoglyphics Multiple Intelligence Test) is a scientific study of fingerprint patterns 
                  that reveals an individual's innate intelligence, talents, and personality traits.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Based on the neuroscience principle that fingerprints are linked to brain development, DMIT helps 
                  identify the best learning methods, career paths, and development areas for your child.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">98%</div>
                    <p className="text-sm">Accuracy Rate</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">10+</div>
                    <p className="text-sm">Years Experience</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                    <p className="text-sm">Tests Conducted</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What You'll Discover
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive insights into your child's potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="hover-elevate" data-testid={`card-benefit-${index}`}>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              The DMIT Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, scientific, and comprehensive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="text-center" data-testid={`step-${index}`}>
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "10-finger fingerprint scanning",
                    "Detailed 30-40 page personalized report",
                    "Brain dominance and learning style analysis",
                    "Multiple intelligence assessment",
                    "Career guidance and subject recommendations",
                    "60-minute one-on-one counseling session",
                    "Follow-up support for 3 months"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Discover Your Child's True Potential
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book a DMIT assessment today and get personalized guidance for your child's success
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="rounded-full" data-testid="button-book-cta">
              <Link href="/contact">Book DMIT Test</Link>
            </Button>
            <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full">
              <Award className="h-5 w-5" />
              <span>Starting at ₹3,999</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
