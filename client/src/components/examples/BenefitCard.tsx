import { ThemeProvider } from "../ThemeProvider";
import { BenefitCard } from "../BenefitCard";
import { Brain } from "lucide-react";

export default function BenefitCardExample() {
  return (
    <ThemeProvider>
      <div className="p-8 max-w-md">
        <BenefitCard
          icon={Brain}
          title="Enhanced Focus"
          description="Improves concentration and attention span through structured practice and mental visualization techniques."
        />
      </div>
    </ThemeProvider>
  );
}
