import { ThemeProvider } from "@/components/ThemeProvider";
import { Router } from "wouter";
import HomePage from "../HomePage";

export default function HomePageExample() {
  return (
    <ThemeProvider>
      <Router>
        <HomePage />
      </Router>
    </ThemeProvider>
  );
}
