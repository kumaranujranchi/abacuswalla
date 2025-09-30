import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  childName: string;
  avatar?: string;
  rating: number;
  quote: string;
  program: string;
  location: string;
}

export function TestimonialCard({
  name,
  childName,
  avatar,
  rating,
  quote,
  program,
  location,
}: TestimonialCardProps) {
  return (
    <Card className="hover-elevate transition-all" data-testid={`card-testimonial-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Avatar>
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-muted-foreground">Parent of {childName}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
          ))}
        </div>

        <p className="text-sm mb-4 italic">"{quote}"</p>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{program}</span>
          <span>{location}</span>
        </div>
      </CardContent>
    </Card>
  );
}
