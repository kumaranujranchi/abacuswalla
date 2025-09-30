import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { User, GraduationCap, Briefcase, Star, CheckCircle, Clock, Users, Trophy } from "lucide-react";

export default function ForIndividualsPage() {
  const benefits = [
    {
      icon: GraduationCap,
      title: "Certified Training",
      description: "Comprehensive certification program to become an Abacuswalla trainer"
    },
    {
      icon: Briefcase,
      title: "Business Support",
      description: "Complete setup assistance to start your own abacus teaching center"
    },
    {
      icon: Star,
      title: "Proven Curriculum",
      description: "Access to our research-backed, age-appropriate teaching materials"
    },
    {
      icon: Users,
      title: "Community Network",
      description: "Join a network of successful educators and entrepreneurs"
    }
  ];

  const programs = [
    {
      title: "Franchise Partnership",
      description: "Start your own Abacuswalla learning center with full support",
      investment: "₹3,50,000 - ₹5,00,000",
      features: [
        "Complete business setup guidance",
        "Marketing and branding materials",
        "Ongoing operational support",
        "Territory protection",
        "Student enrollment assistance",
        "Regular training workshops"
      ]
    },
    {
      title: "Certified Trainer Program",
      description: "Become a certified Abacuswalla instructor and teach independently",
      investment: "₹50,000 - ₹1,00,000",
      features: [
        "Intensive training program (60 hours)",
        "Teaching methodology certification",
        "Access to teaching materials",
        "Curriculum and assessment tools",
        "Flexible teaching options",
        "Lifetime support and updates"
      ]
    },
    {
      title: "Home-Based Instructor",
      description: "Start teaching from home with minimal investment",
      investment: "₹25,000 - ₹40,000",
      features: [
        "Basic training and certification",
        "Starter teaching kit",
        "Small batch teaching guidelines",
        "Online support community",
        "Flexible schedule",
        "Additional income opportunity"
      ]
    }
  ];

  const steps = [
    { icon: User, title: "Application", desc: "Submit your interest and background" },
    { icon: GraduationCap, title: "Training", desc: "Complete certification program" },
    { icon: Briefcase, title: "Setup", desc: "Establish your teaching center" },
    { icon: Trophy, title: "Launch", desc: "Start enrolling students" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full mb-6">
              <User className="h-5 w-5 text-secondary-foreground" />
              <span className="text-sm font-medium">Individual Partnerships</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Build Your Career in{" "}
              <span className="text-primary">Education</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Join the Abacuswalla family as a certified trainer, franchise partner, or home-based instructor. 
              Make a difference in children's lives while building a rewarding career.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="cta-gradient-button"
                data-testid="button-apply-now"
              >
                Apply Now
              </a>
              <Button asChild size="lg" variant="outline" className="rounded-full hover-elevate" data-testid="button-learn-more">
                <Link href="/contact">Request Information</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Partner with Abacuswalla?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join 1000+ successful individual partners across the country
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="hover-elevate" data-testid={`card-benefit-${index}`}>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
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

      {/* Programs Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Choose Your Partnership Model
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible options to match your goals, investment capacity, and time commitment
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className="hover-elevate flex flex-col" data-testid={`card-program-${index}`}>
                <CardHeader>
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <CardDescription className="text-base mb-2">{program.description}</CardDescription>
                  <div className="text-2xl font-bold text-primary">{program.investment}</div>
                  <p className="text-xs text-muted-foreground">Estimated Investment</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {program.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              How to Get Started
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Begin your journey in 4 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center" data-testid={`step-${index}`}>
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our successful partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Priya Sharma",
                role: "Franchise Partner, Delhi",
                story: "Started with 15 students, now running a center with 150+ enrollments. The support from Abacuswalla has been incredible!",
                achievement: "150+ Students"
              },
              {
                name: "Rajesh Kumar",
                role: "Certified Trainer, Mumbai",
                story: "Teaching part-time while working my day job. Great additional income and immense satisfaction from teaching children.",
                achievement: "₹40K+ Monthly"
              },
              {
                name: "Anita Verma",
                role: "Home-Based Instructor, Bangalore",
                story: "Perfect work-from-home opportunity. I teach 3 batches from home while taking care of my family.",
                achievement: "35 Students"
              }
            ].map((story, index) => (
              <Card key={index} className="hover-elevate" data-testid={`story-${index}`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                      {story.name.charAt(0)}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{story.name}</CardTitle>
                      <p className="text-xs text-muted-foreground">{story.role}</p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1 bg-accent/10 px-3 py-1 rounded-full">
                    <Trophy className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium">{story.achievement}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">"{story.story}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reference Note */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
            <p>
              Our individual partnership programs are modeled after successful franchise systems like{" "}
              <a href="https://alohamindmath.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                ALOHA Mind Math
              </a>{" "}
              and{" "}
              <a href="https://www.mastermindabacus.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Mastermind Abacus
              </a>
              , offering comprehensive support for individual entrepreneurs and educators.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-secondary/80">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join us and make a meaningful impact while building a successful career
          </p>
          <a
            href="/contact"
            className="cta-gradient-button"
            data-testid="button-partner-cta"
          >
            Apply for Partnership
          </a>
        </div>
      </section>
    </div>
  );
}
