import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle, Brain, Lightbulb, Target, Sparkles } from "lucide-react";
import memoryImage from "@assets/generated_images/Advanced_level_illustration_435fe745.png";

export default function MemorySciencePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            Memory Science Program
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Unlock your child's photographic memory and cognitive potential
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 animate-slide-up">
          <div className="flex items-center justify-center">
            <img 
              src={memoryImage} 
              alt="Memory Science" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
                About Memory Science
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Memory Science is a scientifically designed program that trains children to develop extraordinary 
                memory capabilities. Using proven techniques like visualization, association, and mnemonic devices, 
                students learn to remember vast amounts of information effortlessly.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Our curriculum is based on cognitive neuroscience principles and includes practical memory techniques 
                that can be applied to academics, daily life, and beyond. Students develop the ability to recall 
                information quickly and accurately, giving them a significant advantage in their studies.
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
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Brain Training</h3>
                  <p className="text-muted-foreground">
                    Scientific exercises to enhance memory retention and recall abilities.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Memory Techniques</h3>
                  <p className="text-muted-foreground">
                    Learn powerful mnemonics, visualization, and association methods.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Practical Application</h3>
                  <p className="text-muted-foreground">
                    Apply memory skills to academics, languages, facts, and daily activities.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Photographic Memory</h3>
                  <p className="text-muted-foreground">
                    Develop the ability to visualize and recall information like photographs.
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
              "Improved academic performance",
              "Better retention of information",
              "Enhanced concentration skills",
              "Increased confidence in learning",
              "Faster information processing",
              "Better exam preparation",
              "Improved visualization abilities",
              "Lifelong memory skills"
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
            Transform your child's memory capabilities forever
          </p>
          <Button asChild size="lg" className="rounded-full font-accent cta-hover" data-testid="button-book-demo">
            <Link href="/contact">Book a Free Demo Class</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
