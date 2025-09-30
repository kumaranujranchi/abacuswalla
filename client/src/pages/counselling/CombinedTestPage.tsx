import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Sparkles, CheckCircle, Target, TrendingUp, Award } from "lucide-react";

export default function CombinedTestPage() {
  const packages = [
    {
      name: "DMIT + Psychosomatic",
      description: "Complete assessment package for holistic understanding",
      price: "₹5,999",
      originalPrice: "₹6,998",
      savings: "₹999",
      features: [
        "DMIT fingerprint analysis",
        "Psychosomatic behavioral assessment",
        "Comprehensive 50+ page report",
        "90-minute counseling session",
        "Career guidance and subject selection",
        "Learning style optimization",
        "Emotional well-being strategies",
        "6 months follow-up support"
      ],
      popular: true
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "360° Understanding",
      description: "Complete picture of innate potential and current psychological state"
    },
    {
      icon: TrendingUp,
      title: "Better Outcomes",
      description: "Holistic insights lead to more effective guidance and support"
    },
    {
      icon: Award,
      title: "Value Package",
      description: "Save money while getting comprehensive assessment"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Best Value Package</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Combined <span className="text-primary">Assessment</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Get the most comprehensive understanding of your child with our combined DMIT and 
              Psychosomatic assessment package. Save money while gaining complete insights.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full" data-testid="button-book-combined">
                <Link href="/contact">Book Combined Test</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full" data-testid="button-compare">
                <a href="#package">View Package</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Combined */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Choose Combined Assessment?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get the best of both worlds for complete clarity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="hover-elevate text-center" data-testid={`card-benefit-${index}`}>
                  <CardHeader>
                    <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-primary" />
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

      {/* Package Details */}
      <section className="py-20 bg-muted/30" id="package">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className="relative overflow-hidden" data-testid="card-package">
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-3xl mb-2">{pkg.name}</CardTitle>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                  
                  <div className="mt-6">
                    <div className="text-sm text-muted-foreground line-through mb-1">
                      {pkg.originalPrice}
                    </div>
                    <div className="text-5xl font-bold text-primary">
                      {pkg.price}
                    </div>
                    <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-1 rounded-full mt-2">
                      <span className="text-sm font-medium text-accent">Save {pkg.savings}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="border-t pt-6">
                    <h3 className="font-semibold text-lg mb-4">What's Included:</h3>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-6 space-y-4">
                    <Button asChild size="lg" className="w-full rounded-full" data-testid="button-book-package">
                      <Link href="/contact">Book Combined Assessment</Link>
                    </Button>
                    
                    <div className="grid grid-cols-2 gap-4 text-center text-sm">
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <div className="font-semibold text-primary">2-3 Hours</div>
                        <div className="text-muted-foreground">Total Duration</div>
                      </div>
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <div className="font-semibold text-primary">50+ Pages</div>
                        <div className="text-muted-foreground">Detailed Report</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
              Compare Options
            </h2>
            
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4">Assessment</th>
                        <th className="text-center p-4">Individual Price</th>
                        <th className="text-center p-4">Combined Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-4">DMIT Test</td>
                        <td className="text-center p-4">₹3,999</td>
                        <td className="text-center p-4 text-muted-foreground" rowSpan={2}>
                          ₹5,999<br/>
                          <span className="text-accent text-sm font-medium">(Save ₹999)</span>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4">Psychosomatic Test</td>
                        <td className="text-center p-4">₹2,999</td>
                      </tr>
                      <tr className="font-semibold">
                        <td className="p-4">Total</td>
                        <td className="text-center p-4">₹6,998</td>
                        <td className="text-center p-4 text-primary">₹5,999</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Get Complete Clarity About Your Child's Future
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book the combined assessment package today and save while gaining comprehensive insights
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full" data-testid="button-book-final-cta">
            <Link href="/contact">Book Combined Assessment - Save ₹999</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
