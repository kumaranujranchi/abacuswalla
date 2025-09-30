import { ThemeProvider } from "@/components/ThemeProvider";
import { Router } from "wouter";
import ProgramsPage from "../ProgramsPage";

export default function ProgramsPageExample() {
  return (
    <ThemeProvider>
      <Router>
        <ProgramsPage />
      </Router>
    </ThemeProvider>
  );
}
