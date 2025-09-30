import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { Brain, Target, TrendingUp, Users, Award, Lightbulb, Zap, BookOpen } from "lucide-react";

export default function StudentEnrollmentPage() {
  const { toast } = useToast();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      parentName: "",
      email: "",
      phone: "",
      childName: "",
      childAge: "",
      message: "",
    },
  });

  const createInquiryMutation = useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to submit enquiry");
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Enquiry Submitted!",
        description: "We'll contact you within 24 hours to discuss enrollment.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/inquiries"] });
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error.message,
      });
    },
  });

  const onSubmit = (data: InsertInquiry) => {
    createInquiryMutation.mutate(data);
  };

  const benefits = [
    {
      icon: Brain,
      title: "Enhanced Cognitive Development",
      description: "Improve concentration, memory, visualization, and analytical thinking through structured abacus training"
    },
    {
      icon: TrendingUp,
      title: "Academic Excellence",
      description: "Students show 35% improvement in math scores and enhanced performance across all subjects"
    },
    {
      icon: Zap,
      title: "Lightning-Fast Mental Math",
      description: "Perform complex calculations mentally without calculator or pen and paper"
    },
    {
      icon: Target,
      title: "Confidence Building",
      description: "Success in math builds overall academic confidence and positive self-image"
    },
    {
      icon: Lightbulb,
      title: "Creative Problem Solving",
      description: "Develop multiple approaches to problem-solving and critical thinking skills"
    },
    {
      icon: BookOpen,
      title: "Life-Long Skills",
      description: "Abacus training creates neural pathways that benefit lifelong learning and career success"
    }
  ];

  const ageGroups = [
    {
      range: "5-7 years",
      level: "Foundation Level",
      focus: "Number recognition, basic addition and subtraction, finger dexterity",
      duration: "6-8 months"
    },
    {
      range: "8-10 years",
      level: "Intermediate Level",
      focus: "Mental calculations, multiplication, division, visualization techniques",
      duration: "8-10 months"
    },
    {
      range: "11-14 years",
      level: "Advanced Level",
      focus: "Complex calculations, speed math, competition preparation",
      duration: "10-12 months"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
              <Users className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-accent">Student Enrollment</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Unlock Your Child's{" "}
              <span className="text-primary">Full Potential</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Join 50,000+ students who have transformed their math skills and cognitive abilities 
              through our proven abacus-based learning programs.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              How Students Benefit from Our Courses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Research-backed benefits that extend far beyond mathematics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Age-Appropriate Programs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Age-Appropriate Learning Paths
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Structured programs designed for different age groups and skill levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ageGroups.map((group, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-age-group-${index}`}>
                <CardHeader>
                  <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-3 w-fit">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{group.range}</span>
                  </div>
                  <CardTitle className="text-2xl">{group.level}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Focus Areas:</p>
                    <p className="text-sm">{group.focus}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Duration:</p>
                    <p className="text-sm">{group.duration}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Enquiry Section */}
      <section className="py-20" id="enquiry">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Student Enquiry Form
              </h2>
              <p className="text-lg text-muted-foreground">
                Get started with a free demo class and assessment
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Enroll Your Child Today</CardTitle>
                <CardDescription>
                  Fill in the details below and we'll contact you within 24 hours to schedule a free demo class
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                      <Input
                        id="parentName"
                        placeholder="Your full name"
                        {...form.register("parentName")}
                        data-testid="input-parent-name"
                      />
                      {form.formState.errors.parentName && (
                        <p className="text-sm text-destructive">{form.formState.errors.parentName.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        {...form.register("email")}
                        data-testid="input-parent-email"
                      />
                      {form.formState.errors.email && (
                        <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        {...form.register("phone")}
                        data-testid="input-parent-phone"
                      />
                      {form.formState.errors.phone && (
                        <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="childName">Child's Name *</Label>
                      <Input
                        id="childName"
                        placeholder="Child's full name"
                        {...form.register("childName")}
                        data-testid="input-child-name"
                      />
                      {form.formState.errors.childName && (
                        <p className="text-sm text-destructive">{form.formState.errors.childName.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="childAge">Child's Age *</Label>
                    <Select
                      onValueChange={(value) => form.setValue("childAge", value)}
                    >
                      <SelectTrigger data-testid="select-child-age">
                        <SelectValue placeholder="Select age" />
                      </SelectTrigger>
                      <SelectContent>
                        {[5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((age) => (
                          <SelectItem key={age} value={age.toString()}>
                            {age} years
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {form.formState.errors.childAge && (
                      <p className="text-sm text-destructive">{form.formState.errors.childAge.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your child's current math level, any specific concerns, or questions you have..."
                      rows={4}
                      {...form.register("message")}
                      data-testid="input-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full"
                    disabled={createInquiryMutation.isPending}
                    data-testid="button-submit-enquiry"
                  >
                    {createInquiryMutation.isPending ? "Submitting..." : "Submit Enquiry"}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting this form, you agree to receive communication about enrollment and programs.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent to-accent/80 text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Limited Seats Available!
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Enroll now for the upcoming batch and give your child the gift of mental math mastery
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full" data-testid="button-enroll-cta">
            <a href="#enquiry">Enroll Your Child</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
