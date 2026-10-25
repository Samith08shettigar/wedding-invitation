import React from 'react';
import { weddingData } from '../data/weddingData';
import { RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

/**
 * CLOSING HEARTS MESSAGE (frame_48s)
 * "A little space in your hearts" -> Emotional sign-off -> Priya & Varun -> Replay button
 */
export const ClosingHearts = ({ onReplay }) => {
  const handleReplayClick = () => {
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#D4AF37', '#8C132B', '#FFDF78'],
      });
    } catch {
      // safe fallback
    }
    if (onReplay) onReplay();
  };

  return (
    <section id="closing" className="relative w-full pt-8 pb-28 sm:pb-36 px-6 bg-transparent text-[#3B0612] flex flex-col items-center text-center select-none">
      
      {/* Delicate Golden Heart Ribbon Accent */}
      <div className="absolute top-2 right-6 pointer-events-none opacity-40">
        <svg width="48" height="32" viewBox="0 0 48 32" fill="none">
          <path d="M10 24 C10 16, 24 8, 36 6 C42 5, 45 10, 41 15 C37 19, 28 25, 26 27 C24 29, 20 28, 22 24 C24 18, 32 14, 38 17" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Container */}
      <div className="max-w-md mx-auto flex flex-col items-center">
        
        {/* Header */}
        <h2 className="font-serif italic text-3xl sm:text-5xl text-[#2E020A] tracking-wide mb-6 font-normal">
          {weddingData.closingHeading}
        </h2>

        {/* Paragraph 1 */}
        <p className="font-serif text-xs sm:text-sm text-[#4A0A16] leading-relaxed mb-4">
          {weddingData.closingText1}
        </p>

        {/* Paragraph 2 */}
        <p className="font-serif text-xs sm:text-sm text-[#4A0A16] leading-relaxed mb-8">
          {weddingData.closingText2}
        </p>

        {/* Sign-off */}
        <span className="font-serif italic text-xs text-[#8C132B] block mb-1 font-semibold">
          With love,
        </span>

        <h3 className="font-serif text-3xl sm:text-4xl text-[#2E020A] font-medium tracking-wide mb-10">
          {weddingData.brideFirstName} &amp; {weddingData.groomFirstName}
        </h3>

        {/* Replay Button */}
        <button
          onClick={handleReplayClick}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#AA7C11] bg-[#FFFDF8] text-[#3B0612] font-royal text-xs tracking-[0.2em] uppercase font-semibold shadow hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5 text-[#AA7C11]" />
          <span>Replay Experience</span>
        </button>

        {/* Monogram Seal */}
        <div className="mt-12 text-[#AA7C11]/50 text-xs tracking-widest font-royal uppercase">
          {weddingData.monogram} &bull; 2026
        </div>
      </div>

    </section>
  );
};
