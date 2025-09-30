import { ProgramCard } from "@/components/ProgramCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle } from "lucide-react";
import juniorImage from "@assets/generated_images/Junior_level_illustration_d3b73f7e.png";
import foundationImage from "@assets/generated_images/Foundation_level_illustration_5a6285b3.png";
import advancedImage from "@assets/generated_images/Advanced_level_illustration_435fe745.png";
import grandmasterImage from "@assets/generated_images/Grand_Master_achievement_illustration_5ae4a7c4.png";

export default function ProgramsPage() {
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
      curriculum: [
        "Bead recognition and manipulation",
        "Single-digit addition and subtraction",
        "Number visualization techniques",
        "Fun math games and activities"
      ]
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
      curriculum: [
        "Multi-digit calculations",
        "Mental arithmetic without abacus",
        "Speed calculation drills",
        "Problem-solving strategies"
      ]
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
      curriculum: [
        "Advanced multiplication & division",
        "Decimal and fraction operations",
        "Competition preparation",
        "Peer teaching opportunities"
      ]
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
      curriculum: [
        "Complex mathematical operations",
        "International competition training",
        "Teaching assistant program",
        "Instructor certification path"
      ]
    },
  ];

  return (
    <div>
      <section className="bg-card py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
              Our Programs & Curriculum
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Comprehensive learning paths designed to develop mathematical excellence at every age and skill level.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {programs.map((program, index) => (
            <div key={program.title} className="grid md:grid-cols-2 gap-8 items-start">
              <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                <ProgramCard {...program} />
              </div>
              <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">
                  Curriculum Details
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our {program.title} is carefully structured to ensure progressive skill development and mastery.
                </p>
                <ul className="space-y-3">
                  {program.curriculum.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
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
                <AccordionTrigger data-testid="accordion-progress">How do you track my child's progress?</AccordionTrigger>
                <AccordionContent>
                  We provide regular progress reports, monthly assessments, and parent-teacher meetings. You'll receive detailed feedback on your child's development and achievements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger data-testid="accordion-certification">Do you provide certificates?</AccordionTrigger>
                <AccordionContent>
                  Yes! Students receive certificates upon completing each module. Advanced students can also pursue instructor certification through our Grand Master program.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
