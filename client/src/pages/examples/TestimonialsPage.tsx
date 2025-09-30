import { ThemeProvider } from "@/components/ThemeProvider";
import { Router } from "wouter";
import TestimonialsPage from "../TestimonialsPage";

export default function TestimonialsPageExample() {
  return (
    <ThemeProvider>
      <Router>
        <TestimonialsPage />
      </Router>
    </ThemeProvider>
  );
}
