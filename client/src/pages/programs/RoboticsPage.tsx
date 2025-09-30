import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle, Bot, Cpu, Wrench, Zap } from "lucide-react";
import roboticsImage from "@assets/generated_images/Grand_Master_achievement_illustration_5ae4a7c4.png";

export default function RoboticsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            Robotics Program
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Build, program, and innovate with hands-on robotics education
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 animate-slide-up">
          <div className="flex items-center justify-center">
            <img 
              src={roboticsImage} 
              alt="Robotics Program" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
                About Robotics
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Robotics program introduces children to the exciting world of automation, engineering, and 
                programming. Students learn to design, build, and program their own robots, developing critical 
                skills in problem-solving, creativity, and logical thinking.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Through hands-on projects and challenges, children explore mechanical engineering concepts, 
                electronics, and programming logic. The program uses age-appropriate robotics kits and platforms 
                to ensure engaging learning experiences that prepare students for future technology careers.
              </p>
            </div>
            
            <Button asChild size="lg" className="rounded-full font-accent cta-hover" data-testid="button-enroll">
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
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Hands-On Building</h3>
                  <p className="text-muted-foreground">
                    Construct real robots using industry-standard kits and components.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Cpu className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Programming Skills</h3>
                  <p className="text-muted-foreground">
                    Learn to code and control robots through visual and text-based programming.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Wrench className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Engineering Concepts</h3>
                  <p className="text-muted-foreground">
                    Understand mechanics, electronics, and design principles practically.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Project-Based Learning</h3>
                  <p className="text-muted-foreground">
                    Complete real-world projects and participate in robotics competitions.
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
              "Develops problem-solving skills",
              "Enhances creativity and innovation",
              "Builds logical thinking abilities",
              "Introduces programming fundamentals",
              "Encourages teamwork and collaboration",
              "Prepares for STEM careers",
              "Improves spatial reasoning",
              "Fosters technological literacy"
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
            Begin your journey into the world of robotics
          </p>
          <Button asChild size="lg" className="rounded-full font-accent cta-hover" data-testid="button-book-demo">
            <Link href="/contact">Book a Free Demo Class</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
