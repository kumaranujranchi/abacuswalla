import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle, Code, Terminal, Rocket, Trophy } from "lucide-react";
import codingImage from "@assets/generated_images/Junior_level_illustration_d3b73f7e.png";

export default function CodingPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            Coding Program
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn to code and create amazing applications, games, and websites
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 animate-slide-up">
          <div className="flex items-center justify-center">
            <img 
              src={codingImage} 
              alt="Coding Program" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
                About Coding
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Coding program introduces children to the fundamentals of computer programming through 
                engaging, age-appropriate projects. Students learn to think like programmers, breaking down 
                problems into logical steps and creating solutions through code.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Starting with visual programming languages like Scratch and progressing to text-based languages 
                like Python and JavaScript, our curriculum builds a strong foundation in computational thinking. 
                Students create games, animations, websites, and apps while developing critical 21st-century skills.
              </p>
            </div>
            
            <Button asChild size="lg" className="rounded-full font-accent cta-gradient-button" data-testid="button-enroll">
              <Link href="/contact">Enroll Now</Link>
            </Button>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="font-heading font-bold text-3xl mb-6 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Multiple Languages</h3>
                  <p className="text-muted-foreground">
                    Learn Scratch, Python, JavaScript, and other popular programming languages.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Terminal className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Interactive Projects</h3>
                  <p className="text-muted-foreground">
                    Build real games, apps, and websites that you can show to friends and family.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Rocket className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Step-by-Step Learning</h3>
                  <p className="text-muted-foreground">
                    Progress from beginner to advanced concepts at your own pace.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Coding Competitions</h3>
                  <p className="text-muted-foreground">
                    Participate in coding challenges and showcase your programming skills.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Card className="p-8 bg-primary/5">
          <h2 className="font-heading font-bold text-3xl mb-6">Program Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Develops computational thinking",
              "Enhances problem-solving abilities",
              "Builds creativity and innovation",
              "Prepares for future tech careers",
              "Improves logical reasoning",
              "Encourages persistence and debugging",
              "Creates real-world applications",
              "Develops digital literacy skills"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </Card>

        <div className="mt-12 text-center">
          <h3 className="font-heading font-bold text-2xl mb-4">Ready to Start?</h3>
          <p className="text-muted-foreground mb-6">
            Start your coding journey and create amazing things
          </p>
          <Button asChild size="lg" className="rounded-full font-accent cta-gradient-button" data-testid="button-book-demo-program">
            <Link href="/contact">Book a Free Demo Class</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
