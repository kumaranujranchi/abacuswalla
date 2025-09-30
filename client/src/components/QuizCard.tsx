import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Sparkles } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { InsertQuizProgress } from "@shared/schema";

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizCardProps {
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  questions: QuizQuestion[];
}

export function QuizCard({ title, difficulty, questions }: QuizCardProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const saveProgress = useMutation({
    mutationFn: async (data: InsertQuizProgress) => {
      const res = await apiRequest("POST", "/api/quiz-progress", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Progress Saved!",
        description: "Your quiz score has been recorded.",
      });
      setShowEmailPrompt(false);
      setEmail("");
      queryClient.invalidateQueries({ queryKey: ["/api/quiz-progress"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to save progress. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleAnswer = (answerIndex: number) => {
    if (answered) return;

    setSelectedAnswer(answerIndex);
    setAnswered(true);

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setAnswered(false);
    setShowEmailPrompt(false);
  };

  const handleSaveProgress = () => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email to save progress.",
        variant: "destructive",
      });
      return;
    }
    const quizSlug = title.toLowerCase().replace(/\s+/g, '-');
    saveProgress.mutate({
      email,
      quizSlug,
      score,
      totalQuestions: questions.length,
    });
  };

  const difficultyColor = {
    Easy: "bg-accent",
    Medium: "bg-secondary",
    Hard: "bg-primary",
  };

  return (
    <Card className="w-full max-w-2xl mx-auto" data-testid={`card-quiz-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader className="gap-2">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <CardTitle className="font-heading text-2xl">{title}</CardTitle>
          <Badge className={difficultyColor[difficulty]} data-testid="badge-difficulty">
            {difficulty}
          </Badge>
        </div>
        {!showResult && (
          <div className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        )}
      </CardHeader>

      <CardContent className="min-h-[200px]">
        {!showResult ? (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              {questions[currentQuestion].question}
            </h3>
            <div className="grid gap-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    answered
                      ? index === questions[currentQuestion].correctAnswer
                        ? "default"
                        : index === selectedAnswer
                        ? "destructive"
                        : "outline"
                      : "outline"
                  }
                  className="w-full justify-start text-left h-auto py-3 px-4"
                  onClick={() => handleAnswer(index)}
                  disabled={answered}
                  data-testid={`button-answer-${index}`}
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="mb-6">
              <Sparkles className="h-16 w-16 mx-auto text-accent mb-4" />
              <h3 className="font-heading text-3xl font-bold mb-2">
                Great Job!
              </h3>
              <p className="text-lg text-muted-foreground">
                You scored {score} out of {questions.length}
              </p>
            </div>
            <div className="flex justify-center gap-2 mb-4">
              {Array.from({ length: questions.length }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < score
                      ? "fill-accent text-accent"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>

            {showEmailPrompt && (
              <div className="mt-6 space-y-3 text-left max-w-sm mx-auto">
                <Label htmlFor="quiz-email">Enter your email to save progress</Label>
                <Input
                  id="quiz-email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  data-testid="input-quiz-email"
                />
              </div>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter>
        {!showResult ? (
          <Button
            className="w-full rounded-full font-accent"
            onClick={handleNext}
            disabled={!answered}
            data-testid="button-next-question"
          >
            {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
          </Button>
        ) : (
          <div className="w-full flex gap-3">
            <Button
              className="flex-1 rounded-full font-accent"
              onClick={handleRestart}
              data-testid="button-restart-quiz"
            >
              Try Again
            </Button>
            {showEmailPrompt ? (
              <Button
                variant="default"
                className="flex-1 rounded-full"
                onClick={handleSaveProgress}
                disabled={saveProgress.isPending}
                data-testid="button-save-progress"
              >
                {saveProgress.isPending ? "Saving..." : "Submit"}
              </Button>
            ) : (
              <Button
                variant="outline"
                className="flex-1 rounded-full"
                onClick={() => setShowEmailPrompt(true)}
                data-testid="button-save-progress"
              >
                Save Progress
              </Button>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
