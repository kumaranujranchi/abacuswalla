import { ThemeProvider } from "../ThemeProvider";
import { Footer } from "../Footer";
import { Router } from "wouter";

export default function FooterExample() {
  return (
    <ThemeProvider>
      <Router>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
