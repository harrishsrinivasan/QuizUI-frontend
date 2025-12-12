import { motion } from "framer-motion";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const QuizResults = ({ score, totalQuestions, onRestart }: QuizResultsProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[60vh] text-center"
    >
      {/* Encouragement Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card border border-quiz-card-border rounded-full px-6 py-2 mb-8 shadow-sm"
      >
        <span className="text-foreground font-medium">Keep Learning!</span>
      </motion.div>

      {/* Score Title */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="font-playfair text-3xl md:text-4xl mb-4"
      >
        <span className="italic text-quiz-title-dark">Your</span>{" "}
        <span className="italic text-quiz-title-light">Final score is</span>
      </motion.h2>

      {/* Score Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        className="flex items-baseline mb-12"
      >
        <span className="font-playfair text-8xl md:text-9xl font-bold text-quiz-title-dark">
          {percentage}
        </span>
        <span className="font-playfair text-4xl md:text-5xl text-quiz-title-light ml-2">
          %
        </span>
      </motion.div>

      {/* Restart Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onRestart}
        className="px-8 py-3 bg-quiz-nav-bg hover:bg-quiz-nav-hover text-foreground font-medium rounded-xl transition-all duration-200"
      >
        Start Again
      </motion.button>
    </motion.div>
  );
};

export default QuizResults;
