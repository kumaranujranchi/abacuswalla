import { QuizCard } from "@/components/QuizCard";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Sparkles } from "lucide-react";

export default function PuzzlesPage() {
  //todo: remove mock functionality
  const easyQuestions = [
    {
      question: "What is 15 + 8?",
      options: ["21", "23", "25", "27"],
      correctAnswer: 1,
    },
    {
      question: "What is 30 - 12?",
      options: ["16", "18", "20", "22"],
      correctAnswer: 1,
    },
    {
      question: "What is 7 × 3?",
      options: ["18", "21", "24", "27"],
      correctAnswer: 1,
    },
  ];

  //todo: remove mock functionality
  const mediumQuestions = [
    {
      question: "What is 45 + 67?",
      options: ["102", "112", "122", "132"],
      correctAnswer: 1,
    },
    {
      question: "What is 89 - 34?",
      options: ["45", "55", "65", "75"],
      correctAnswer: 1,
    },
    {
      question: "What is 12 × 8?",
      options: ["86", "96", "106", "116"],
      correctAnswer: 1,
    },
  ];

  return (
    <div>
      <section className="bg-card py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
              Interactive Puzzles & Games
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Challenge yourself with fun math puzzles! Earn stars and track your progress as you sharpen your mental math skills.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="hover-elevate" data-testid="card-stat-puzzles">
            <CardContent className="p-6 text-center">
              <Sparkles className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-3xl font-bold mb-1">50+</div>
              <p className="text-sm text-muted-foreground">Puzzles Available</p>
            </CardContent>
          </Card>
          <Card className="hover-elevate" data-testid="card-stat-students">
            <CardContent className="p-6 text-center">
              <Trophy className="h-8 w-8 mx-auto mb-2 text-accent" />
              <div className="text-3xl font-bold mb-1">1000+</div>
              <p className="text-sm text-muted-foreground">Students Playing</p>
            </CardContent>
          </Card>
          <Card className="hover-elevate" data-testid="card-stat-completed">
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 mx-auto mb-2 text-secondary" />
              <div className="text-3xl font-bold mb-1">10K+</div>
              <p className="text-sm text-muted-foreground">Puzzles Completed</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="font-heading font-bold text-3xl">Beginner Level</h2>
              <Badge className="bg-accent">Easy</Badge>
            </div>
            <QuizCard
              title="Quick Math Challenge"
              difficulty="Easy"
              questions={easyQuestions}
            />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="font-heading font-bold text-3xl">Intermediate Level</h2>
              <Badge className="bg-secondary">Medium</Badge>
            </div>
            <QuizCard
              title="Speed Calculator"
              difficulty="Medium"
              questions={mediumQuestions}
            />
          </div>
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Want to Save Your Progress?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create a free account to track your achievements, earn badges, and unlock advanced puzzles!
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Badge className="bg-accent/20 text-accent border-accent px-4 py-2 text-sm">
              <Star className="h-4 w-4 mr-1" />
              Earn Stars
            </Badge>
            <Badge className="bg-secondary/20 text-secondary border-secondary px-4 py-2 text-sm">
              <Trophy className="h-4 w-4 mr-1" />
              Unlock Badges
            </Badge>
            <Badge className="bg-primary/20 text-primary border-primary px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 mr-1" />
              Track Progress
            </Badge>
          </div>
        </div>
      </section>
    </div>
  );
}
