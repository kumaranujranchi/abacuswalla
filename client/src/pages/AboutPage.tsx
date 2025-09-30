import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Globe, Users, TrendingUp } from "lucide-react";
import teamImage from "@assets/generated_images/Teacher_with_students_113e36c3.png";

export default function AboutPage() {
  return (
    <div>
      <section className="bg-card py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
              About Abacuswalla
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Empowering young minds through proven abacus-based learning since 2015.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2015, Abacuswalla began with a simple mission: to make mathematics enjoyable and accessible for every child. What started as a small learning center has grown into a comprehensive educational platform serving thousands of students.
              </p>
              <p>
                Our innovative approach combines traditional abacus techniques with modern teaching methodologies, creating an engaging learning experience that develops not just mathematical skills, but also cognitive abilities, focus, and confidence.
              </p>
              <p>
                Today, we're proud to be recognized as a leading provider of abacus education, with certified instructors, proven curriculum, and countless success stories from parents and students worldwide.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={teamImage}
              alt="Our team"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="hover-elevate" data-testid="card-stat-students">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold mb-1">5000+</div>
              <p className="text-sm text-muted-foreground">Students Trained</p>
            </CardContent>
          </Card>
          <Card className="hover-elevate" data-testid="card-stat-countries">
            <CardContent className="p-6 text-center">
              <Globe className="h-8 w-8 mx-auto mb-3 text-accent" />
              <div className="text-3xl font-bold mb-1">15+</div>
              <p className="text-sm text-muted-foreground">Countries</p>
            </CardContent>
          </Card>
          <Card className="hover-elevate" data-testid="card-stat-success">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-3 text-secondary" />
              <div className="text-3xl font-bold mb-1">98%</div>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </CardContent>
          </Card>
          <Card className="hover-elevate" data-testid="card-stat-awards">
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold mb-1">25+</div>
              <p className="text-sm text-muted-foreground">Awards Won</p>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8 text-center">
            Our Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-elevate" data-testid="card-mission">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-primary">Mission</Badge>
                <h3 className="font-heading font-semibold text-2xl mb-4">
                  Transforming Young Minds
                </h3>
                <p className="text-muted-foreground">
                  To provide world-class abacus education that develops mathematical excellence, enhances cognitive abilities, and builds confidence in every child we serve. We believe every child has the potential to excel in mathematics with the right guidance and methods.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-elevate" data-testid="card-vision">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-accent">Vision</Badge>
                <h3 className="font-heading font-semibold text-2xl mb-4">
                  Global Education Leader
                </h3>
                <p className="text-muted-foreground">
                  To become the world's most trusted abacus education platform, recognized for our innovative teaching methods, exceptional results, and commitment to nurturing the next generation of mathematical thinkers and problem solvers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8 text-center">
            Our Teaching Philosophy
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <Card className="hover-elevate" data-testid="card-philosophy-1">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">Child-Centric Approach</h4>
                  <p className="text-muted-foreground">
                    We recognize that every child learns differently. Our personalized teaching methods adapt to each student's pace, ensuring they build a strong foundation before advancing.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-elevate" data-testid="card-philosophy-2">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">Holistic Development</h4>
                  <p className="text-muted-foreground">
                    Beyond mathematics, we focus on developing concentration, memory, visualization, and problem-solving skills that benefit all areas of learning and life.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-elevate" data-testid="card-philosophy-3">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">Engaging & Fun Learning</h4>
                  <p className="text-muted-foreground">
                    We make math enjoyable through gamification, interactive activities, and positive reinforcement, transforming what many see as a challenge into an exciting adventure.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
