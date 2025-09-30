import { ThemeProvider } from "../ThemeProvider";
import { TestimonialCard } from "../TestimonialCard";

export default function TestimonialCardExample() {
  return (
    <ThemeProvider>
      <div className="p-8 max-w-md">
        <TestimonialCard
          name="Sarah Johnson"
          childName="Emily"
          rating={5}
          quote="Emily's math skills have improved dramatically! She's more confident and actually enjoys math now. The teachers are fantastic!"
          program="Foundation Module"
          location="New York, NY"
        />
      </div>
    </ThemeProvider>
  );
}
