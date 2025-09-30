import { ThemeProvider } from "../ThemeProvider";
import { ProgramCard } from "../ProgramCard";
import { Router } from "wouter";
import juniorImage from "@assets/generated_images/Junior_level_illustration_d3b73f7e.png";

export default function ProgramCardExample() {
  return (
    <ThemeProvider>
      <Router>
        <div className="p-8 max-w-md">
          <ProgramCard
            title="Junior Module"
            ageRange="Ages 5-7"
            duration="6 months program"
            image={juniorImage}
            benefits={[
              "Introduction to abacus basics",
              "Number recognition & counting",
              "Simple addition & subtraction",
              "Visual memory development"
            ]}
            color="primary"
          />
        </div>
      </Router>
    </ThemeProvider>
  );
}
