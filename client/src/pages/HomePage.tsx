import { Hero } from "@/components/Hero";
import { BenefitCard } from "@/components/BenefitCard";
import { ProgramCard } from "@/components/ProgramCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Brain, Zap, Target, Award, TrendingUp, Users } from "lucide-react";
import juniorImage from "@assets/generated_images/Junior_level_illustration_d3b73f7e.png";
import foundationImage from "@assets/generated_images/Foundation_level_illustration_5a6285b3.png";
import advancedImage from "@assets/generated_images/Advanced_level_illustration_435fe745.png";
import grandmasterImage from "@assets/generated_images/Grand_Master_achievement_illustration_5ae4a7c4.png";
import puzzleImage from "@assets/generated_images/Interactive_puzzle_preview_34bf6088.png";

export default function HomePage() {
  //todo: remove mock functionality
  const programs = [
    {
      title: "Junior Module",
      ageRange: "Ages 5-7",
      duration: "6 months program",
      image: juniorImage,
      benefits: [
        "Introduction to abacus basics",
        "Number recognition & counting",
        "Simple addition & subtraction",
        "Visual memory development"
      ],
      color: "primary" as const,
    },
    {
      title: "Foundation Module",
      ageRange: "Ages 7-9",
      duration: "8 months program",
      image: foundationImage,
      benefits: [
        "Advanced calculation techniques",
        "Mental math proficiency",
        "Speed and accuracy training",
        "Concentration improvement"
      ],
      color: "accent" as const,
    },
    {
      title: "Advanced Module",
      ageRange: "Ages 9-12",
      duration: "10 months program",
      image: advancedImage,
      benefits: [
        "Complex problem solving",
        "Multi-digit calculations",
        "Competitive math preparation",
        "Leadership skills development"
      ],
      color: "secondary" as const,
    },
    {
      title: "Grand Master",
      ageRange: "Ages 12-14",
      duration: "12 months program",
      image: grandmasterImage,
      benefits: [
        "Master-level calculations",
        "Competition readiness",
        "Teaching methodology",
        "Certification pathway"
      ],
      color: "primary" as const,
    },
  ];

  //todo: remove mock functionality
  const testimonials = [
    {
      name: "Sarah Johnson",
      childName: "Emily",
      rating: 5,
      quote: "Emily's math skills have improved dramatically! She's more confident and actually enjoys math now.",
      program: "Foundation Module",
      location: "New York, NY"
    },
    {
      name: "Michael Chen",
      childName: "David",
      rating: 5,
      quote: "The structured approach and caring teachers made all the difference. David went from struggling to excelling!",
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
  ];

  return (
    <div>
      <Hero />

      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
            Why Choose Abacuswalla?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our proven methodology combines traditional abacus techniques with modern teaching approaches to unlock your child's full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-slide-up">
          <BenefitCard
            icon={Brain}
            title="Enhanced Focus"
            description="Improves concentration and attention span through structured practice and mental visualization."
          />
          <BenefitCard
            icon={Zap}
            title="Lightning Fast Math"
            description="Develops rapid calculation abilities and mental arithmetic skills beyond traditional methods."
          />
          <BenefitCard
            icon={Target}
            title="Academic Excellence"
            description="Boosts overall academic performance with improved problem-solving and analytical thinking."
          />
          <BenefitCard
            icon={Award}
            title="Confidence Building"
            description="Increases self-esteem as children master complex calculations and achieve measurable progress."
          />
          <BenefitCard
            icon={TrendingUp}
            title="Cognitive Development"
            description="Strengthens memory, visualization, and logical reasoning abilities for lifelong learning."
          />
          <BenefitCard
            icon={Users}
            title="Expert Instructors"
            description="Learn from certified teachers with years of experience in abacus education and child development."
          />
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
              Our Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Structured learning paths designed for every age and skill level, from beginners to advanced learners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
              Try Our Interactive Puzzles
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Let your child experience the fun of learning with our gamified math puzzles. Earn stars, unlock badges, and watch their skills grow!
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full font-accent"
              data-testid="button-explore-puzzles"
            >
              <Link href="/puzzles">Explore Puzzles</Link>
            </Button>
          </div>
          <div className="relative">
            <img
              src={puzzleImage}
              alt="Interactive puzzle preview"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
              Parent Testimonials
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See what parents are saying about their children's transformation with Abacuswalla.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full"
              data-testid="button-view-testimonials"
            >
              <Link href="/testimonials">View All Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Ready to Start Your Child's Journey?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book a free demo class today and see the difference our proven methods can make in your child's mathematical abilities.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-full font-accent text-base"
            data-testid="button-cta-book-demo"
          >
            <Link href="/contact">Book Free Demo Class</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
