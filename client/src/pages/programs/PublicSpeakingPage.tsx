import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle, Mic, Users, Trophy, Sparkles } from "lucide-react";
import speakingImage from "@assets/generated_images/Junior_level_illustration_d3b73f7e.png";

export default function PublicSpeakingPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            Public Speaking Program
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Build confidence and master the art of effective communication
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 animate-slide-up">
          <div className="flex items-center justify-center">
            <img 
              src={speakingImage} 
              alt="Public Speaking" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
                About Public Speaking
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Public Speaking program empowers children to express themselves confidently and effectively 
                in front of audiences. Through structured training in voice modulation, body language, content 
                organization, and presentation skills, students overcome stage fear and develop into confident 
                communicators.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The program includes practical sessions with speeches, debates, storytelling, and presentations 
                on various topics. Students learn to articulate their thoughts clearly, engage audiences, and 
                deliver impactful messages that prepare them for academic and professional success.
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
                  <Mic className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Confident Speaking</h3>
                  <p className="text-muted-foreground">
                    Overcome stage fear and speak confidently in front of any audience.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Communication Skills</h3>
                  <p className="text-muted-foreground">
                    Master verbal and non-verbal communication for effective expression.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Trophy className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Competition Ready</h3>
                  <p className="text-muted-foreground">
                    Prepare for debates, elocution, and public speaking competitions.
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
                  <h3 className="font-semibold text-lg mb-2">Stage Presence</h3>
                  <p className="text-muted-foreground">
                    Develop powerful stage presence and audience engagement skills.
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
              "Builds self-confidence",
              "Improves articulation and clarity",
              "Develops leadership qualities",
              "Enhances body language",
              "Overcomes stage fear",
              "Improves social skills",
              "Strengthens critical thinking",
              "Prepares for future success"
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
            Become a confident and effective communicator
          </p>
          <Button asChild size="lg" className="rounded-full font-accent cta-gradient-button" data-testid="button-book-demo">
            <Link href="/contact">Book a Free Demo Class</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
