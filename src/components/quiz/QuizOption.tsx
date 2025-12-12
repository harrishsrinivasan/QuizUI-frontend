import { motion } from "framer-motion";

interface QuizOptionProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const QuizOption = ({ label, isSelected, onClick }: QuizOptionProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className={`w-full py-4 px-6 rounded-xl border text-center font-medium transition-all duration-200 ${
        isSelected
          ? "bg-quiz-option-selected border-quiz-option-border"
          : "bg-quiz-option-bg border-quiz-option-border hover:bg-quiz-option-selected/50"
      }`}
    >
      <span className="text-foreground">{label}</span>
    </motion.button>
  );
};

export default QuizOption;
