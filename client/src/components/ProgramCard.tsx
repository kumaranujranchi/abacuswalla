import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

interface ProgramCardProps {
  title: string;
  ageRange: string;
  duration: string;
  image: string;
  benefits: string[];
  color: "primary" | "secondary" | "accent";
}

export function ProgramCard({ title, ageRange, duration, image, benefits, color }: ProgramCardProps) {
  const colorClasses = {
    primary: "border-primary/20",
    secondary: "border-secondary/20",
    accent: "border-accent/20",
  };

  return (
    <Card className={`overflow-hidden hover-elevate active-elevate-2 transition-all ${colorClasses[color]}`} data-testid={`card-program-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="gap-2">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <CardTitle className="font-heading text-2xl">{title}</CardTitle>
          <Badge variant="outline" data-testid={`badge-age-${title.toLowerCase().replace(/\s+/g, '-')}`}>{ageRange}</Badge>
        </div>
        <p className="text-sm text-muted-foreground">{duration}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <span className={`h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-${color}`} />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="gap-2 flex-wrap">
        <Button asChild variant="default" className="flex-1 rounded-full font-accent cta-hover" data-testid={`button-enroll-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          <Link href="/contact">Enroll Now</Link>
        </Button>
        <Button asChild variant="outline" className="flex-1 rounded-full hover-elevate" data-testid={`button-learn-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          <Link href="/programs">Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
