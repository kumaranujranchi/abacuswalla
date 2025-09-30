import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle, BookOpen, Volume2, Award, Sparkles } from "lucide-react";
import phonicsImage from "@assets/generated_images/Foundation_level_illustration_5a6285b3.png";

export default function PhonicsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            Phonics Program
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Build strong reading and pronunciation skills through systematic phonics training
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 animate-slide-up">
          <div className="flex items-center justify-center">
            <img 
              src={phonicsImage} 
              alt="Phonics Program" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
                About Phonics
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Phonics program teaches children the relationship between letters and sounds, providing 
                them with the essential skills needed for reading, writing, and pronunciation. Through systematic 
                instruction in letter-sound correspondence, blending, and decoding, students develop strong 
                literacy foundations.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The program uses a multi-sensory approach with engaging activities, songs, and games that make 
                learning phonics fun and effective. Students progress from recognizing individual letter sounds 
                to reading complete words and sentences with fluency and confidence.
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
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Reading Mastery</h3>
                  <p className="text-muted-foreground">
                    Develop strong reading skills through systematic phonics instruction.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Volume2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Sound Recognition</h3>
                  <p className="text-muted-foreground">
                    Master letter-sound relationships for accurate pronunciation.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Structured Learning</h3>
                  <p className="text-muted-foreground">
                    Follow a proven, step-by-step curriculum from basics to advanced.
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
                  <h3 className="font-semibold text-lg mb-2">Fun & Engaging</h3>
                  <p className="text-muted-foreground">
                    Learn through songs, games, and interactive activities.
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
              "Builds strong reading foundation",
              "Improves pronunciation skills",
              "Enhances spelling abilities",
              "Develops vocabulary naturally",
              "Increases reading fluency",
              "Boosts academic confidence",
              "Enables independent reading",
              "Prepares for advanced literacy"
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
            Give your child the gift of strong reading skills
          </p>
          <Button asChild size="lg" className="rounded-full font-accent cta-hover" data-testid="button-book-demo">
            <Link href="/contact">Book a Free Demo Class</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
