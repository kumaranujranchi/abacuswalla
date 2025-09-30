import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link } from "wouter";
import { Trophy, Download, Lock, CheckCircle, Award, Calendar, Users, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AbacusOlympiadPage() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [selectedClass, setSelectedClass] = useState("");

  const classes = [
    { value: "lkg", label: "LKG (Lower Kindergarten)", age: "4-5 years" },
    { value: "ukg", label: "UKG (Upper Kindergarten)", age: "5-6 years" },
    { value: "1", label: "Class 1", age: "6-7 years" },
    { value: "2", label: "Class 2", age: "7-8 years" },
    { value: "3", label: "Class 3", age: "8-9 years" },
    { value: "4", label: "Class 4", age: "9-10 years" },
    { value: "5", label: "Class 5", age: "10-11 years" },
    { value: "6", label: "Class 6", age: "11-12 years" },
    { value: "7", label: "Class 7", age: "12-13 years" },
    { value: "8", label: "Class 8", age: "13-14 years" },
  ];

  const features = [
    {
      icon: Trophy,
      title: "State & National Level",
      description: "Compete with students across India and showcase your mental math skills"
    },
    {
      icon: Award,
      title: "Certificates & Prizes",
      description: "Win medals, certificates, and scholarships for top performers"
    },
    {
      icon: Calendar,
      title: "Annual Competition",
      description: "Held every year in March with multiple rounds"
    },
    {
      icon: Users,
      title: "Structured Levels",
      description: "Age-appropriate question papers for fair competition"
    }
  ];

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        variant: "destructive",
        title: "Email Required",
        description: "Please enter your email address to access materials.",
      });
      return;
    }

    if (!selectedClass) {
      toast({
        variant: "destructive",
        title: "Class Required",
        description: "Please select a class to download materials.",
      });
      return;
    }

    // In a real implementation, this would call an API
    try {
      const response = await fetch("/api/email-captures", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "olympiad" }),
      });

      if (response.ok) {
        toast({
          title: "Access Granted!",
          description: "Check your email for the download link and practice materials.",
        });
        setEmail("");
        setSelectedClass("");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to process your request. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full mb-6">
              <Trophy className="h-5 w-5" />
              <span className="text-sm font-medium">Abacus Olympiad</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              National Abacus{" "}
              <span className="text-primary">Olympiad</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Test your mental math prowess against thousands of students nationwide. 
              Showcase your abacus skills and win exciting prizes and scholarships!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full" data-testid="button-register">
                <Link href="/contact">Register Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full" data-testid="button-sample">
                <a href="#materials">Get Sample Papers</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover-elevate" data-testid={`card-feature-${index}`}>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Class Selection */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Select Your Class
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your class to view syllabus and access practice materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {classes.map((classInfo) => (
              <Card
                key={classInfo.value}
                className={`hover-elevate cursor-pointer transition-all ${
                  selectedClass === classInfo.value ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedClass(classInfo.value)}
                data-testid={`card-class-${classInfo.value}`}
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{classInfo.label}</CardTitle>
                  <CardDescription className="text-xs">{classInfo.age}</CardDescription>
                  {selectedClass === classInfo.value && (
                    <CheckCircle className="h-6 w-6 text-primary mx-auto mt-2" />
                  )}
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Study Materials Access */}
      <section className="py-20" id="materials">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Access Practice Materials
              </h2>
              <p className="text-lg text-muted-foreground">
                Get free sample papers and practice questions delivered to your email
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Download Study Materials</CardTitle>
                <CardDescription>
                  Enter your email to receive:
                </CardDescription>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Sample question papers for your class</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Complete syllabus and exam pattern</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Tips and strategies for preparation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Full question bank (after registration)</span>
                  </li>
                </ul>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleDownload} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      data-testid="input-email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Selected Class: {selectedClass ? classes.find(c => c.value === selectedClass)?.label : "None"}</Label>
                    {!selectedClass && (
                      <p className="text-sm text-muted-foreground">Please select a class above</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full"
                    disabled={!selectedClass}
                    data-testid="button-download"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Get Study Materials
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    <Lock className="inline h-3 w-3 mr-1" />
                    Sample papers are free. Full question bank and detailed solutions available after official registration.
                  </p>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 p-6 bg-accent/10 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Target className="h-5 w-5 text-accent" />
                How It Works
              </h3>
              <ol className="space-y-2 text-sm">
                <li><strong>1. Free Sample Materials:</strong> Access sample papers immediately via email</li>
                <li><strong>2. Official Registration:</strong> Register for the Olympiad to unlock full materials</li>
                <li><strong>3. Complete Access:</strong> Get previous years' papers, detailed solutions, and preparation guides</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Compete?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Register now for the National Abacus Olympiad and showcase your mental math skills
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full" data-testid="button-register-cta">
            <Link href="/contact">Register for Olympiad</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
