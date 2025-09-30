import { Hero } from "@/components/Hero";
import { BenefitCard } from "@/components/BenefitCard";
import { ProgramCard } from "@/components/ProgramCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Brain, Zap, Target, Award, TrendingUp, Users, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import juniorImage from "@assets/generated_images/Junior_level_illustration_d3b73f7e.png";
import foundationImage from "@assets/generated_images/Foundation_level_illustration_5a6285b3.png";
import advancedImage from "@assets/generated_images/Advanced_level_illustration_435fe745.png";
import grandmasterImage from "@assets/generated_images/Grand_Master_achievement_illustration_5ae4a7c4.png";
import puzzleImage from "@assets/generated_images/Interactive_puzzle_preview_34bf6088.png";

export default function HomePage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 animate-slide-up">
          <BenefitCard
            icon={Brain}
            title="Enhanced Focus"
            description="Improves concentration and attention span through structured practice and mental visualization."
            iconColor="text-accent"
            iconBgColor="bg-accent/10"
          />
          <BenefitCard
            icon={Zap}
            title="Lightning Fast Math"
            description="Develops rapid calculation abilities and mental arithmetic skills beyond traditional methods."
            iconColor="text-primary"
            iconBgColor="bg-primary/10"
          />
          <BenefitCard
            icon={Target}
            title="Academic Excellence"
            description="Boosts overall academic performance with improved problem-solving and analytical thinking."
            iconColor="text-secondary"
            iconBgColor="bg-secondary/10"
          />
          <BenefitCard
            icon={Award}
            title="Confidence Building"
            description="Increases self-esteem as children master complex calculations and achieve measurable progress."
            iconColor="text-accent"
            iconBgColor="bg-accent/10"
          />
          <BenefitCard
            icon={TrendingUp}
            title="Cognitive Development"
            description="Strengthens memory, visualization, and logical reasoning abilities for lifelong learning."
            iconColor="text-primary"
            iconBgColor="bg-primary/10"
          />
          <BenefitCard
            icon={Users}
            title="Expert Instructors"
            description="Learn from certified teachers with years of experience in abacus education and child development."
            iconColor="text-secondary"
            iconBgColor="bg-secondary/10"
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

      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                Interactive Learning
              </Badge>
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
                Gamified Learning ={" "}
                <span className="text-primary">Faster Results</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Let your child experience the fun of learning with our gamified math puzzles. Earn stars, unlock badges, and watch their skills grow with every challenge!
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full font-accent cta-hover"
              data-testid="button-explore-puzzles"
            >
              <Link href="/puzzles">Explore Free Puzzles</Link>
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
            <img
              src={puzzleImage}
              alt="Interactive puzzle preview"
              className="relative rounded-xl shadow-2xl hover:shadow-primary/20 transition-shadow duration-300"
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

          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.name} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 h-12 w-12 rounded-full shadow-lg bg-background/95 backdrop-blur hover-elevate"
              onClick={scrollPrev}
              data-testid="button-testimonials-prev"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 h-12 w-12 rounded-full shadow-lg bg-background/95 backdrop-blur hover-elevate"
              onClick={scrollNext}
              data-testid="button-testimonials-next"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full hover-elevate"
              data-testid="button-view-testimonials"
            >
              <Link href="/testimonials">View All Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.05),transparent_50%)]" />
          
          <div className="relative z-10">
            <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">
              Ready to Start Your Child's Journey?
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-95">
              Book a free demo class today and see the difference our proven methods can make in your child's mathematical abilities.
            </p>
            <a
              href="/contact"
              className="cta-gradient-button"
              data-testid="button-cta-book-demo"
            >
              Book Free Demo Class
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
