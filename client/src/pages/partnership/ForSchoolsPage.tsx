import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { School, Users, TrendingUp, Award, CheckCircle, BookOpen, Target, Lightbulb } from "lucide-react";

export default function ForSchoolsPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Boost Academic Performance",
      description: "Enhance students' math skills and overall cognitive abilities through structured abacus training"
    },
    {
      icon: Users,
      title: "Comprehensive Teacher Training",
      description: "Certified curriculum and professional development for your teaching staff"
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Join 500+ schools nationwide that have successfully integrated our programs"
    },
    {
      icon: BookOpen,
      title: "Curriculum Integration",
      description: "Seamlessly aligns with national education standards and your existing curriculum"
    }
  ];

  const programs = [
    {
      title: "In-School Program",
      description: "Year-round abacus mental math integration into your regular curriculum",
      features: [
        "Weekly classes during school hours",
        "Age-appropriate curriculum (Grades 1-8)",
        "Regular assessments and progress reports",
        "Parent-teacher workshops"
      ]
    },
    {
      title: "After-School Club",
      description: "Adventure-based mental math mastery program after regular school hours",
      features: [
        "Flexible scheduling options",
        "Small group instruction",
        "STEM integration activities",
        "Competition preparation"
      ]
    },
    {
      title: "Workshop Series",
      description: "Fun-based mental math experiences through intensive workshops",
      features: [
        "Weekend or holiday programs",
        "Themed learning experiences",
        "Interactive demonstrations",
        "Certificate of completion"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <School className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Partnership Programs</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Transform Your School with{" "}
              <span className="text-primary">Abacuswalla</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Partner with us to bring world-class abacus and mental math education to your students. 
              Enhance cognitive development, boost academic performance, and prepare students for future success.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full" data-testid="button-schedule-demo">
                <Link href="/contact">Schedule a Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full" data-testid="button-download-brochure">
                <Link href="/contact">Download Brochure</Link>
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
              Join leading schools that have transformed math from the "most dreaded" to the "most loved" subject
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
              Flexible program options designed to fit your school's schedule and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-program-${index}`}>
                <CardHeader>
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
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

      {/* Implementation Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Simple Implementation Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started in just 4 easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Target, title: "Initial Consultation", desc: "Discuss your school's needs and objectives" },
              { icon: Lightbulb, title: "Pilot Program", desc: "Start with a small group to measure impact" },
              { icon: Users, title: "Teacher Training", desc: "Comprehensive staff certification and support" },
              { icon: TrendingUp, title: "Full Integration", desc: "Scale across grades with ongoing support" }
            ].map((step, index) => {
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

      {/* Reference Note */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
            <p>
              Our partnership model is inspired by successful educational programs like{" "}
              <a href="https://ucmas-usa.com/ucmas-in-school/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                UCMAS School Integration
              </a>{" "}
              and{" "}
              <a href="https://actiontutoring.org.uk/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Action Tutoring UK
              </a>
              , adapted to meet Indian educational standards and curriculum requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Transform Your School?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how Abacuswalla can enhance your students' learning experience
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full" data-testid="button-partner-cta">
            <Link href="/contact">Become a Partner School</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
