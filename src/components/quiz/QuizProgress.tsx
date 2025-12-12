interface QuizProgressProps {
  currentStep: number;
  totalSteps: number;
}

const QuizProgress = ({ currentStep, totalSteps }: QuizProgressProps) => {
  return (
    <div className="flex items-center gap-2 w-full max-w-xl mx-auto mb-8">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
            index <= currentStep
              ? "bg-quiz-progress-active"
              : "bg-quiz-progress-inactive"
          }`}
        />
      ))}
    </div>
  );
};

export default QuizProgress;
