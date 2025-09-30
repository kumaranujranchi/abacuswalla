import { TestimonialCard } from "@/components/TestimonialCard";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function TestimonialsPage() {
  //todo: remove mock functionality
  const testimonials = [
    {
      name: "Sarah Johnson",
      childName: "Emily",
      rating: 5,
      quote: "Emily's math skills have improved dramatically! She's more confident and actually enjoys math now. The teachers are fantastic!",
      program: "Foundation Module",
      location: "New York, NY"
    },
    {
      name: "Michael Chen",
      childName: "David",
      rating: 5,
      quote: "The structured approach and caring teachers made all the difference. David went from struggling to excelling in just 6 months!",
      program: "Advanced Module",
      location: "San Francisco, CA"
    },
    {
      name: "Priya Patel",
      childName: "Anika",
      rating: 5,
      quote: "Best investment we made in Anika's education. Her focus and mental math abilities are incredible now.",
      program: "Junior Module",
      location: "Austin, TX"
    },
    {
      name: "James Anderson",
      childName: "Lucas",
      rating: 5,
      quote: "Lucas was struggling with math anxiety. Now he's the top of his class and even helps his classmates!",
      program: "Foundation Module",
      location: "Chicago, IL"
    },
    {
      name: "Maria Rodriguez",
      childName: "Sofia",
      rating: 5,
      quote: "The online classes are so engaging! Sofia looks forward to every session. Amazing curriculum and supportive instructors.",
      program: "Advanced Module",
      location: "Miami, FL"
    },
    {
      name: "Robert Kim",
      childName: "Alex",
      rating: 5,
      quote: "We've tried other programs, but Abacuswalla is by far the best. Alex's improvement in just 3 months has been remarkable.",
      program: "Junior Module",
      location: "Seattle, WA"
    },
  ];

  //todo: remove mock functionality
  const successStories = [
    {
      title: "From Math Anxiety to Math Champion",
      student: "Emma, Age 9",
      story: "Emma used to dread math homework. After joining our Foundation Module, she not only overcame her anxiety but won 1st place in her school's math competition!",
      achievement: "School Math Competition Winner"
    },
    {
      title: "Confidence Through Calculation",
      student: "Ryan, Age 11",
      story: "Ryan was a quiet, reserved student. Through our program, he developed confidence in his abilities and now volunteers to solve problems on the board in class.",
      achievement: "Academic Excellence Award"
    },
  ];

  return (
    <div>
      <section className="bg-card py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
              Success Stories & Testimonials
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Real stories from real parents who've witnessed their children's transformation through our programs.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8 text-center">
          What Parents Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8 text-center">
            Student Success Stories
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {successStories.map((story, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-success-${index}`}>
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-heading font-bold text-2xl mb-2">
                    {story.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{story.student}</p>
                  <p className="text-muted-foreground mb-4">{story.story}</p>
                  <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    {story.achievement}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <Card className="bg-primary text-primary-foreground" data-testid="card-cta">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join hundreds of families who've transformed their children's mathematical abilities with Abacuswalla.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
