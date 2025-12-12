import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface QuizNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  isLastQuestion: boolean;
  onSubmit?: () => void;
}

const QuizNavigation = ({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  isLastQuestion,
  onSubmit,
}: QuizNavigationProps) => {
  return (
    <div className="flex justify-end items-center gap-2 mt-6">
      <motion.button
        whileHover={canGoPrevious ? { scale: 1.05 } : {}}
        whileTap={canGoPrevious ? { scale: 0.95 } : {}}
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
          canGoPrevious
            ? "bg-quiz-nav-bg hover:bg-quiz-nav-hover text-foreground"
            : "bg-quiz-nav-bg/50 text-muted-foreground cursor-not-allowed"
        }`}
      >
        <ChevronLeft className="w-5 h-5" />
      </motion.button>

      {isLastQuestion ? (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onSubmit}
          className="px-6 py-2.5 rounded-lg bg-quiz-nav-bg hover:bg-quiz-nav-hover text-foreground font-medium transition-all duration-200"
        >
          Submit
        </motion.button>
      ) : (
        <motion.button
          whileHover={canGoNext ? { scale: 1.05 } : {}}
          whileTap={canGoNext ? { scale: 0.95 } : {}}
          onClick={onNext}
          disabled={!canGoNext}
          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
            canGoNext
              ? "bg-quiz-nav-bg hover:bg-quiz-nav-hover text-foreground"
              : "bg-quiz-nav-bg/50 text-muted-foreground cursor-not-allowed"
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  );
};

export default QuizNavigation;
