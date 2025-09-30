import { ThemeProvider } from "../ThemeProvider";
import { QuizCard } from "../QuizCard";

export default function QuizCardExample() {
  const sampleQuestions = [
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

  return (
    <ThemeProvider>
      <div className="p-8">
        <QuizCard
          title="Quick Math Challenge"
          difficulty="Easy"
          questions={sampleQuestions}
        />
      </div>
    </ThemeProvider>
  );
}
