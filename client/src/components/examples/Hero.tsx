import { ThemeProvider } from "../ThemeProvider";
import { Hero } from "../Hero";
import { Router } from "wouter";

export default function HeroExample() {
  return (
    <ThemeProvider>
      <Router>
        <Hero />
      </Router>
    </ThemeProvider>
  );
}
