import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
  iconBgColor?: string;
}

export function BenefitCard({ icon: Icon, title, description, iconColor = "text-primary", iconBgColor = "bg-primary/10" }: BenefitCardProps) {
  return (
    <Card 
      className="hover-elevate active-elevate-2 transition-all animate-fade-up" 
      data-testid={`card-benefit-${title.toLowerCase().replace(/\s+/g, '-')}`}
      data-feature-icon
    >
      <CardContent className="p-6">
        <div className={`mb-4 inline-flex p-3 rounded-lg ${iconBgColor} icon-glow-ring`} data-icon>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <h3 className="font-heading font-semibold text-xl mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
