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
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);

  const handleOptionSelect = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(questions.length).fill(null));
    setShowResults(false);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      if (answer === questions[index].correctAnswer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  if (showResults) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <QuizResults
          score={calculateScore()}
          totalQuestions={questions.length}
          onRestart={handleRestart}
        />
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Card */}
      <div className="bg-quiz-card-bg border border-quiz-card-border rounded-3xl p-8 md:p-12 quiz-card-shadow">
        {/* Title */}
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

        {/* Progress Bar */}
        <QuizProgress
          currentStep={currentQuestion}
          totalSteps={questions.length}
        />

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            {/* Question Box */}
            <div className="bg-quiz-question-bg rounded-xl py-4 px-6 text-center">
              <span className="font-medium text-foreground">
                {question.id}. {question.question}
              </span>
            </div>

            {/* Options */}
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

        {/* Navigation */}
        <QuizNavigation
          onPrevious={handlePrevious}
          onNext={handleNext}
          canGoPrevious={currentQuestion > 0}
          canGoNext={selectedAnswers[currentQuestion] !== null}
          isLastQuestion={currentQuestion === questions.length - 1}
          onSubmit={handleSubmit}
        />
      </div>

      {/* Cat Paw Mascot - Only show on first question */}
      {currentQuestion === 0 && <CatPawMascot />}
    </div>
  );
};

export default QuizCard;
