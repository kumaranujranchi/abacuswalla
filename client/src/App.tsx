import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import ProgramsPage from "@/pages/ProgramsPage";
import PuzzlesPage from "@/pages/PuzzlesPage";
import AboutPage from "@/pages/AboutPage";
import TestimonialsPage from "@/pages/TestimonialsPage";
import ResourcesPage from "@/pages/ResourcesPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/not-found";
import AbacusPage from "@/pages/programs/AbacusPage";
import AcaVedicMathsPage from "@/pages/programs/AcaVedicMathsPage";
import MemorySciencePage from "@/pages/programs/MemorySciencePage";
import RoboticsPage from "@/pages/programs/RoboticsPage";
import CodingPage from "@/pages/programs/CodingPage";
import STEMPage from "@/pages/programs/STEMPage";
import DMITPsychometricPage from "@/pages/programs/DMITPsychometricPage";
import HandwritingCalligraphyPage from "@/pages/programs/HandwritingCalligraphyPage";
import PublicSpeakingPage from "@/pages/programs/PublicSpeakingPage";
import PhonicsPage from "@/pages/programs/PhonicsPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/programs" component={ProgramsPage} />
      <Route path="/programs/abacus" component={AbacusPage} />
      <Route path="/programs/acavedic-maths" component={AcaVedicMathsPage} />
      <Route path="/programs/memory-science" component={MemorySciencePage} />
      <Route path="/programs/robotics" component={RoboticsPage} />
      <Route path="/programs/coding" component={CodingPage} />
      <Route path="/programs/stem" component={STEMPage} />
      <Route path="/programs/dmit-psychometric" component={DMITPsychometricPage} />
      <Route path="/programs/handwriting-calligraphy" component={HandwritingCalligraphyPage} />
      <Route path="/programs/public-speaking" component={PublicSpeakingPage} />
      <Route path="/programs/phonics" component={PhonicsPage} />
      <Route path="/puzzles" component={PuzzlesPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/testimonials" component={TestimonialsPage} />
      <Route path="/resources" component={ResourcesPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <Header />
          <main>
            <Router />
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
