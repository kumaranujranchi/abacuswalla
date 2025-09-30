import { ThemeProvider } from "../ThemeProvider";
import { Header } from "../Header";
import { Router } from "wouter";

export default function HeaderExample() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <div className="p-8">
          <p className="text-center text-muted-foreground">Content below header</p>
        </div>
      </Router>
    </ThemeProvider>
  );
}
