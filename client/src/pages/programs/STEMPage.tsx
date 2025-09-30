import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle, Atom, Beaker, Microscope, Rocket } from "lucide-react";
import stemImage from "@assets/generated_images/Foundation_level_illustration_5a6285b3.png";

export default function STEMPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            STEM Program
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore Science, Technology, Engineering, and Mathematics through hands-on learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 animate-slide-up">
          <div className="flex items-center justify-center">
            <img 
              src={stemImage} 
              alt="STEM Program" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
                About STEM
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our comprehensive STEM program integrates Science, Technology, Engineering, and Mathematics 
                into exciting, hands-on learning experiences. Students engage in experiments, build projects, 
                and solve real-world problems while developing critical thinking and innovation skills.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Through inquiry-based learning, children explore scientific concepts, design engineering solutions, 
                apply mathematical thinking, and leverage technology tools. The program fosters curiosity, creativity, 
                and a passion for discovery that prepares students for future STEM careers.
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
                  <Atom className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Scientific Discovery</h3>
                  <p className="text-muted-foreground">
                    Conduct experiments and explore scientific principles through hands-on activities.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Beaker className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Practical Learning</h3>
                  <p className="text-muted-foreground">
                    Apply concepts through real-world projects and engineering challenges.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Microscope className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Investigation Skills</h3>
                  <p className="text-muted-foreground">
                    Develop research, observation, and analytical thinking abilities.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Innovation Focus</h3>
                  <p className="text-muted-foreground">
                    Design innovative solutions to complex problems and challenges.
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
              "Integrates multiple disciplines",
              "Enhances critical thinking skills",
              "Builds problem-solving abilities",
              "Encourages creativity and innovation",
              "Develops research skills",
              "Prepares for STEM careers",
              "Fosters teamwork and collaboration",
              "Cultivates scientific curiosity"
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
            Embark on an exciting STEM learning adventure
          </p>
          <Button asChild size="lg" className="rounded-full font-accent cta-gradient-button" data-testid="button-book-demo">
            <Link href="/contact">Book a Free Demo Class</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
