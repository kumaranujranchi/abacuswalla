import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { Calculator, Brain, Bot, Code, Atom, Target, Pen, Mic, BookOpen, Sparkles } from "lucide-react";
import juniorImage from "@assets/generated_images/Junior_level_illustration_d3b73f7e.png";
import foundationImage from "@assets/generated_images/Foundation_level_illustration_5a6285b3.png";
import advancedImage from "@assets/generated_images/Advanced_level_illustration_435fe745.png";
import grandmasterImage from "@assets/generated_images/Grand_Master_achievement_illustration_5ae4a7c4.png";

export default function ProgramsPage() {
  const courses = [
    {
      title: "Abacus",
      description: "Master mental arithmetic with ancient abacus techniques for lightning-fast calculations.",
      icon: Calculator,
      image: juniorImage,
      link: "/programs/abacus",
      color: "primary" as const
    },
    {
      title: "AcaVedic Maths",
      description: "Discover Vedic mathematics for rapid mental calculations using ancient Indian techniques.",
      icon: Sparkles,
      image: foundationImage,
      link: "/programs/acavedic-maths",
      color: "accent" as const
    },
    {
      title: "Memory Science",
      description: "Develop photographic memory and extraordinary recall abilities through scientific training.",
      icon: Brain,
      image: advancedImage,
      link: "/programs/memory-science",
      color: "secondary" as const
    },
    {
      title: "Robotics",
      description: "Build, program, and innovate with hands-on robotics and engineering education.",
      icon: Bot,
      image: grandmasterImage,
      link: "/programs/robotics",
      color: "primary" as const
    },
    {
      title: "Coding",
      description: "Learn programming from Scratch to Python and create amazing applications and games.",
      icon: Code,
      image: juniorImage,
      link: "/programs/coding",
      color: "accent" as const
    },
    {
      title: "STEM",
      description: "Explore Science, Technology, Engineering, and Mathematics through practical projects.",
      icon: Atom,
      image: foundationImage,
      link: "/programs/stem",
      color: "secondary" as const
    },
    {
      title: "DMIT & Psychometric",
      description: "Discover innate talents and learning styles through scientific assessment and analysis.",
      icon: Target,
      image: advancedImage,
      link: "/programs/dmit-psychometric",
      color: "primary" as const
    },
    {
      title: "Handwriting & Calligraphy",
      description: "Develop beautiful handwriting and master the art of elegant calligraphy.",
      icon: Pen,
      image: grandmasterImage,
      link: "/programs/handwriting-calligraphy",
      color: "accent" as const
    },
    {
      title: "Public Speaking",
      description: "Build confidence and master effective communication through public speaking training.",
      icon: Mic,
      image: juniorImage,
      link: "/programs/public-speaking",
      color: "secondary" as const
    },
    {
      title: "Phonics",
      description: "Build strong reading and pronunciation foundations through systematic phonics instruction.",
      icon: BookOpen,
      image: foundationImage,
      link: "/programs/phonics",
      color: "primary" as const
    }
  ];

  return (
    <div>
      <section className="bg-card py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
              Our Programs
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Comprehensive learning programs designed to develop excellence across multiple disciplines for children aged 5-14 years.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <Card key={course.title} className="p-6 hover-elevate animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg ${
                      course.color === 'primary' ? 'bg-primary/10' :
                      course.color === 'accent' ? 'bg-accent/10' :
                      'bg-secondary/10'
                    }`}>
                      <Icon className={`h-5 w-5 ${
                        course.color === 'primary' ? 'text-primary' :
                        course.color === 'accent' ? 'text-accent' :
                        'text-secondary'
                      }`} />
                    </div>
                    <h3 className="font-heading font-bold text-xl">{course.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {course.description}
                  </p>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full rounded-full font-accent"
                    data-testid={`button-learn-more-${course.title.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`}
                  >
                    <Link href={course.link}>Learn More</Link>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8 text-center">
            Why Choose Our Programs?
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">👨‍🏫</div>
                <h3 className="font-heading font-bold text-xl mb-2">Expert Instructors</h3>
                <p className="text-muted-foreground">
                  Learn from certified trainers with years of teaching experience
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-heading font-bold text-xl mb-2">Personalized Learning</h3>
                <p className="text-muted-foreground">
                  Tailored curriculum to match each child's pace and learning style
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="font-heading font-bold text-xl mb-2">Proven Results</h3>
                <p className="text-muted-foreground">
                  Thousands of successful students with measurable improvements
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger data-testid="accordion-class-duration">How long are the classes?</AccordionTrigger>
              <AccordionContent>
                Each class is 60 minutes long, held twice a week. This schedule provides optimal learning without overwhelming young students.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger data-testid="accordion-online-offline">Are classes online or offline?</AccordionTrigger>
              <AccordionContent>
                We offer both online and offline classes to suit your preferences. Our interactive online platform ensures engaging learning from home, while our physical centers provide hands-on experience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger data-testid="accordion-age-range">What age groups do you cater to?</AccordionTrigger>
              <AccordionContent>
                Our programs are designed for children aged 5-14 years. Each program has age-appropriate content and difficulty levels to ensure effective learning.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger data-testid="accordion-progress">How do you track my child's progress?</AccordionTrigger>
              <AccordionContent>
                We provide regular progress reports, monthly assessments, and parent-teacher meetings. You'll receive detailed feedback on your child's development and achievements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger data-testid="accordion-certification">Do you provide certificates?</AccordionTrigger>
              <AccordionContent>
                Yes! Students receive certificates upon completing each program. These certifications recognize their achievements and can be valuable for their academic portfolios.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
