import { motion } from "framer-motion";

const CatPawMascot = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="absolute bottom-4 left-4 flex flex-col items-start"
    >
      {/* Speech Bubble */}
      <div className="relative bg-card border border-quiz-card-border rounded-2xl px-4 py-2 mb-2 shadow-sm">
        <span className="font-playfair italic text-foreground text-sm">
          Best of Luck!
        </span>
        {/* Bubble tail */}
        <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-card" />
        <div className="absolute -bottom-[7px] left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-quiz-card-border -z-10" />
      </div>

      {/* Cat Paw */}
      <svg
        width="80"
        height="100"
        viewBox="0 0 80 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Main paw body */}
        <ellipse cx="40" cy="60" rx="28" ry="35" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1.5" />
        
        {/* Fur texture lines */}
        <path d="M20 45 Q25 50 20 55" stroke="#E8E8E8" strokeWidth="1" fill="none" />
        <path d="M60 45 Q55 50 60 55" stroke="#E8E8E8" strokeWidth="1" fill="none" />
        
        {/* Main pad */}
        <ellipse cx="40" cy="55" rx="16" ry="12" fill="#FFB5B5" />
        
        {/* Toe pads */}
        <ellipse cx="25" cy="38" rx="8" ry="9" fill="#FFB5B5" />
        <ellipse cx="40" cy="32" rx="8" ry="9" fill="#FFB5B5" />
        <ellipse cx="55" cy="38" rx="8" ry="9" fill="#FFB5B5" />
        
        {/* Pad highlights */}
        <ellipse cx="38" cy="52" rx="4" ry="3" fill="#FFC5C5" opacity="0.6" />
        <ellipse cx="24" cy="35" rx="2" ry="2" fill="#FFC5C5" opacity="0.6" />
        <ellipse cx="39" cy="29" rx="2" ry="2" fill="#FFC5C5" opacity="0.6" />
        <ellipse cx="54" cy="35" rx="2" ry="2" fill="#FFC5C5" opacity="0.6" />
      </svg>
    </motion.div>
  );
};

export default CatPawMascot;
