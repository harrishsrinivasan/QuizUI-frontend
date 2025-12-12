import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QuizProgress from "./QuizProgress";
import QuizOption from "./QuizOption";
import QuizNavigation from "./QuizNavigation";
import QuizResults from "./QuizResults";
import CatPawMascot from "./CatPawMascot";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What sound does a cat make?",
    options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "What would you probably find in your fridge?",
    options: ["Shoes", "Ice Cream", "Books"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "What color are bananas?",
    options: ["Blue", "Yellow", "Red"],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: "How many stars are in the sky?",
    options: ["Two", "Infinite", "One Hundred"],
    correctAnswer: 1,
  },
];

const QuizCard = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const totalQuestions = questions.length;
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(new Array(totalQuestions).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedAnswers((prev) => {
      const next = [...prev];
      next[currentQuestion] = optionIndex;
      return next;
    });
  };

  if (showResults) {
    const score = selectedAnswers.reduce(
      (acc, answer, index) => acc + (answer === questions[index].correctAnswer ? 1 : 0),
      0
    );

    return (
      <div className="w-full max-w-4xl mx-auto">
        <QuizResults
          score={score}
          totalQuestions={totalQuestions}
          onRestart={() => {
            setCurrentQuestion(0);
            setSelectedAnswers(new Array(totalQuestions).fill(null));
            setShowResults(false);
          }}
        />
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === totalQuestions - 1;

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="bg-quiz-card-bg border border-quiz-card-border rounded-3xl p-8 md:p-12 quiz-card-shadow">
        <div className="text-center mb-6">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-4">
            <span className="italic text-quiz-title-dark">Test Your</span>{" "}
            <span className="italic text-quiz-title-light">Knowledge</span>
          </h1>
          <div className="inline-block bg-card border border-quiz-card-border rounded-full px-4 py-1.5">
            <span className="text-sm text-muted-foreground">
              Answer all questions to see your results
            </span>
          </div>
        </div>

        <QuizProgress currentStep={currentQuestion} totalSteps={totalQuestions} />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-3">
            <div className="bg-quiz-question-bg rounded-xl py-4 px-6 text-center">
              <span className="font-medium text-foreground">
                {question.id}. {question.question}
              </span>
            </div>

            <div className="space-y-3">
              {question.options.map((option, index) => (
                <QuizOption
                  key={index}
                  label={option}
                  isSelected={selectedAnswers[currentQuestion] === index}
                  onClick={() => handleOptionSelect(index)}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <QuizNavigation
          onPrevious={() => setCurrentQuestion((q) => Math.max(q - 1, 0))}
          onNext={() => setCurrentQuestion((q) => Math.min(q + 1, totalQuestions - 1))}
          canGoPrevious={currentQuestion > 0}
          canGoNext={selectedAnswers[currentQuestion] !== null}
          isLastQuestion={isLastQuestion}
          onSubmit={() => setShowResults(true)}
        />
      </div>

      {currentQuestion === 0 && <CatPawMascot />}
    </div>
  );
};

export default QuizCard;
