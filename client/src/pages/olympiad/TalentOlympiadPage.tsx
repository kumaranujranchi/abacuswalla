import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link } from "wouter";
import { GraduationCap, Download, Lock, CheckCircle, BookOpen, Award, Brain, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function TalentOlympiadPage() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [selectedClass, setSelectedClass] = useState("");

  const classes = [
    { value: "lkg", label: "LKG", age: "4-5 years" },
    { value: "ukg", label: "UKG", age: "5-6 years" },
    { value: "1", label: "Class 1", age: "6-7 years" },
    { value: "2", label: "Class 2", age: "7-8 years" },
    { value: "3", label: "Class 3", age: "8-9 years" },
    { value: "4", label: "Class 4", age: "9-10 years" },
    { value: "5", label: "Class 5", age: "10-11 years" },
    { value: "6", label: "Class 6", age: "11-12 years" },
    { value: "7", label: "Class 7", age: "12-13 years" },
    { value: "8", label: "Class 8", age: "13-14 years" },
  ];

  const subjects = [
    { icon: Brain, name: "Mathematics", desc: "Problem solving and logical reasoning" },
    { icon: BookOpen, name: "Science", desc: "General science and environmental studies" },
    { icon: Star, name: "English", desc: "Grammar, comprehension, and vocabulary" },
    { icon: Award, name: "General Knowledge", desc: "Current affairs and general awareness" },
  ];

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !selectedClass) {
      toast({
        variant: "destructive",
        title: "Required Fields",
        description: "Please enter your email and select a class.",
      });
      return;
    }

    try {
      const response = await fetch("/api/email-captures", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "olympiad",
          metadata: JSON.stringify({ selectedClass, olympiadType: "talent" }),
        }),
      });

      if (response.ok) {
        toast({
          title: "Materials Sent!",
          description: "Check your email for practice papers and study materials.",
        });
        setEmail("");
        setSelectedClass("");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to process request. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/10 via-background to-primary/10 py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
              <GraduationCap className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Academic Olympiad</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Abacuswalla Talent{" "}
              <span className="text-primary">Olympiad</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Multi-subject academic competition covering Mathematics, Science, English, and General Knowledge. 
              Excel across all subjects and win scholarships!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full" data-testid="button-register">
                <Link href="/contact">Register Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full" data-testid="button-materials">
                <a href="#materials">Get Study Materials</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Competition Subjects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Test your knowledge across multiple subjects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject, index) => {
              const Icon = subject.icon;
              return (
                <Card key={index} className="hover-elevate" data-testid={`card-subject-${index}`}>
                  <CardHeader className="text-center">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle>{subject.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{subject.desc}</CardDescription>
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
              Choose your class level to access appropriate practice materials
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {classes.map((classInfo) => (
              <Card
                key={classInfo.value}
                className={`hover-elevate cursor-pointer transition-all ${
                  selectedClass === classInfo.value ? "ring-2 ring-accent" : ""
                }`}
                onClick={() => setSelectedClass(classInfo.value)}
                data-testid={`card-class-${classInfo.value}`}
              >
                <CardHeader className="text-center p-4">
                  <CardTitle className="text-base">{classInfo.label}</CardTitle>
                  <CardDescription className="text-xs">{classInfo.age}</CardDescription>
                  {selectedClass === classInfo.value && (
                    <CheckCircle className="h-5 w-5 text-accent mx-auto mt-2" />
                  )}
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Study Materials */}
      <section className="py-20" id="materials">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Practice Materials & PDFs
              </h2>
              <p className="text-lg text-muted-foreground">
                Get subject-wise practice papers delivered to your email
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Access Study Materials</CardTitle>
                <CardDescription className="mt-4">
                  Receive via email:
                </CardDescription>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Sample papers for all 4 subjects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Detailed syllabus and exam pattern</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Preparation tips and strategies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Complete question bank (post-registration)</span>
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
                    Get Practice Materials
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Sample materials are free. Full access granted after registration.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-accent to-accent/80 text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Show Your Talent!
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Register for Abacuswalla Talent Olympiad and compete with the best
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full" data-testid="button-register-cta">
            <Link href="/contact">Register Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
