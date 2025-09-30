import { TestimonialCard } from "@/components/TestimonialCard";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Amit Kumar",
      childName: "Rohan",
      rating: 5,
      quote: "Rohan's confidence in math has grown so much! He now solves sums quickly and even enjoys practicing at home. The teachers here are excellent!",
      program: "Foundation Module",
      location: "Ranchi, Jharkhand"
    },
    {
      name: "Pooja Singh",
      childName: "Ananya",
      rating: 5,
      quote: "The personal attention and structured classes made a big difference. Ananya went from average scores to becoming one of the top students in just a few months.",
      program: "Advanced Module",
      location: "Patna, Bihar"
    },
    {
      name: "Sandeep Das",
      childName: "Souvik",
      rating: 5,
      quote: "Best decision we took for Souvik's learning! His mental math speed and focus have improved a lot. He is now more confident in school competitions too.",
      program: "Junior Module",
      location: "Kolkata, West Bengal"
    },
    {
      name: "Ritika Sharma",
      childName: "Aarav",
      rating: 5,
      quote: "Aarav was very anxious about math earlier, but now he enjoys solving problems and even helps his classmates. Truly grateful to the mentors.",
      program: "Foundation Module",
      location: "Dhanbad, Jharkhand"
    },
    {
      name: "Prakash Choudhary",
      childName: "Neha",
      rating: 5,
      quote: "The online classes are engaging and interactive. Neha eagerly waits for her sessions and has shown great improvement in both speed and accuracy.",
      program: "Advanced Module",
      location: "Gaya, Bihar"
    },
    {
      name: "Shalini Roy",
      childName: "Ishita",
      rating: 5,
      quote: "We tried other programs before, but this one is the most effective. Ishita's progress in just 4 months has been amazing. Highly recommended!",
      program: "Junior Module",
      location: "Howrah, West Bengal"
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
