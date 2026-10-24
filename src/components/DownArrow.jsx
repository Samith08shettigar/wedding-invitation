import React from 'react';
import { ChevronDown } from 'lucide-react';

export const DownArrow = ({ targetId, light = false }) => {
  const handleClick = () => {
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to next section"
      className="inline-flex items-center justify-center p-2 rounded-full cursor-pointer transition-transform hover:scale-110 active:scale-95 animate-bounce-slow"
    >
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center border shadow-md ${
          light
            ? 'border-[#D4AF37] bg-[#2C020A]/70 text-[#FFDF78]'
            : 'border-[#D4AF37]/60 bg-[#250108]/80 text-[#FFDF78]'
        }`}
      >
        <ChevronDown className="w-4 h-4 text-[#FFDF78]" />
      </div>
    </button>
  );
};
