import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Heart, Activity, Brain, Shield, CheckCircle, Users, Lightbulb, Target } from "lucide-react";

export default function PsychosomaticTestPage() {
  const aspects = [
    {
      icon: Heart,
      title: "Emotional Well-being",
      description: "Assess emotional health, stress levels, and coping mechanisms"
    },
    {
      icon: Activity,
      title: "Behavioral Patterns",
      description: "Identify behavior triggers and response patterns"
    },
    {
      icon: Brain,
      title: "Cognitive Function",
      description: "Evaluate attention span, focus, and mental clarity"
    },
    {
      icon: Shield,
      title: "Stress Management",
      description: "Understand stress factors and resilience levels"
    }
  ];

  const benefits = [
    "Early identification of learning difficulties",
    "Understanding emotional and behavioral challenges",
    "Personalized stress management strategies",
    "Improved parent-child communication",
    "Academic performance optimization",
    "Building emotional resilience"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-accent/10 via-background to-primary/10 py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
              <Heart className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Holistic Assessment</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Psychosomatic <span className="text-primary">Test</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Comprehensive assessment of your child's psychological and behavioral well-being. 
              Understand the mind-body connection and support holistic development.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full cta-hover" data-testid="button-book-psychosomatic">
                <Link href="/contact">Book Assessment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full cta-hover" data-testid="button-learn-psychosomatic">
                <a href="#details">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is It */}
      <section className="py-20" id="details">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-center">
              What is Psychosomatic Assessment?
            </h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground mb-4">
                  A psychosomatic test explores the interconnection between psychological factors and physical symptoms. 
                  It helps identify how emotional and mental states affect a child's learning, behavior, and overall well-being.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Our assessment uses standardized psychological tools, behavioral observation, and parent-child interaction 
                  analysis to provide a comprehensive understanding of your child's mental and emotional health.
                </p>
                <div className="mt-8 p-6 bg-accent/10 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">Ideal For:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span>Children showing sudden behavioral changes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span>Academic stress and anxiety management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span>Learning difficulties or concentration issues</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span>Social adjustment challenges</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Assessment Areas */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What We Assess
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive evaluation across multiple dimensions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aspects.map((aspect, index) => {
              const Icon = aspect.icon;
              return (
                <Card key={index} className="hover-elevate" data-testid={`card-aspect-${index}`}>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg">{aspect.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{aspect.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits & Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Benefits</CardTitle>
                <CardDescription>How this assessment helps your child</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Assessment Process</CardTitle>
                <CardDescription>What to expect during the session</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { icon: Users, title: "Parent Interview", desc: "30-minute detailed discussion" },
                    { icon: Lightbulb, title: "Child Assessment", desc: "60-minute interactive session" },
                    { icon: Brain, title: "Analysis", desc: "Expert psychological evaluation" },
                    { icon: Target, title: "Consultation", desc: "45-minute counseling session" }
                  ].map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={index} className="flex gap-4">
                        <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{step.title}</h4>
                          <p className="text-sm text-muted-foreground">{step.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-accent to-accent/80 text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Support Your Child's Well-being
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book a psychosomatic assessment for comprehensive insights and guidance
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="rounded-full cta-hover" data-testid="button-book-cta">
              <Link href="/contact">Book Assessment</Link>
            </Button>
            <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full">
              <Heart className="h-5 w-5" />
              <span>Starting at ₹2,999</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
