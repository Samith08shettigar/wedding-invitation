import React, { useState } from 'react';
import { weddingData } from '../data/weddingData';

/**
 * INTERACTIVE PULL-OUT MAILBOX ENVELOPE (Matching mail.png design)
 * Deep teal-blue envelope with gold metallic borders, white floral blossoms,
 * dark teal wax seal, and sliding ivory letter card with ornate corner flourishes.
 */
export const InteractiveLaceEnvelope = () => {
  const [isPulledOut, setIsPulledOut] = useState(false);

  const togglePull = () => {
    setIsPulledOut(!isPulledOut);
  };

  return (
    <section id="invitation-letter" className="relative w-full py-16 sm:py-24 px-4 bg-luxury-damask text-[#3B0612] flex flex-col items-center text-center select-none overflow-hidden">
      
      {/* Header: "You're invited" */}
      <div className="mb-8 text-center">
        <h2 className="font-serif italic text-4xl sm:text-6xl text-[#1B3847] tracking-wide font-normal drop-shadow-sm">
          You&apos;re invited
        </h2>
        <p className="font-serif italic text-xs sm:text-sm text-[#2D5A6E] mt-2 font-medium">
          {isPulledOut ? 'Tap card to tuck back inside' : 'Tap or pull card to read formal invitation'}
        </p>
      </div>

      {/* ENVELOPE & SLIDING CARD CONTAINER */}
      <div className="relative w-full max-w-[340px] sm:max-w-[420px] h-[520px] sm:h-[600px] flex items-end justify-center">
        
        {/* 1. SLIDING INVITATION CARD (Sits inside the pocket, slides up when clicked/pulled) */}
        <div 
          onClick={togglePull}
          className={`absolute inset-x-3 sm:inset-x-5 top-0 bg-[#FFFDF9] rounded-2xl border-2 border-[#D4AF37] shadow-2xl p-6 sm:p-8 flex flex-col text-left transition-all duration-700 ease-out cursor-pointer z-10 ${
            isPulledOut 
              ? '-translate-y-24 sm:-translate-y-32 shadow-[0_20px_50px_rgba(0,0,0,0.35)]' 
              : 'translate-y-28 opacity-90 hover:-translate-y-2'
          }`}
          style={{
            minHeight: '480px',
          }}
        >
          {/* Double Gold Ornate Filigree Border with Corner Flourishes (matching mail.png) */}
          <div className="absolute inset-2 sm:inset-3 border border-[#D4AF37]/60 rounded-xl pointer-events-none">
            <div className="absolute inset-1 border border-dashed border-[#AA7C11]/30 rounded-lg" />
            <span className="absolute top-1 left-1.5 text-[#D4AF37] text-xs font-serif leading-none">&#10087;</span>
            <span className="absolute top-1 right-1.5 text-[#D4AF37] text-xs font-serif leading-none">&#10087;</span>
            <span className="absolute bottom-1 left-1.5 text-[#D4AF37] text-xs font-serif leading-none">&#10087;</span>
            <span className="absolute bottom-1 right-1.5 text-[#D4AF37] text-xs font-serif leading-none">&#10087;</span>
          </div>

          {/* Letter Heading */}
          <h3 className="font-serif italic text-2xl sm:text-3xl text-[#1B3847] mb-4">
            {weddingData.letterTitle}
          </h3>

          {/* Letter Body */}
          <p className="font-serif text-xs sm:text-sm text-[#2C4957] leading-relaxed mb-4">
            {weddingData.letterParagraph1}
          </p>

          {/* Diamond Fleuron */}
          <div className="text-center text-[#D4AF37] text-xs my-2">
            &#10022;
          </div>

          <p className="font-serif text-xs sm:text-sm text-[#2C4957] leading-relaxed mb-6">
            {weddingData.letterParagraph2}
          </p>

          {/* Family Sign-off */}
          <div className="mt-auto pt-4 border-t border-[#AA7C11]/30 text-xs font-serif text-[#1F3E4E]">
            <p className="italic font-semibold text-[#183644] mb-1">Warm regards,</p>
            <p className="leading-snug">
              {weddingData.parents.bride.mother} &amp; {weddingData.parents.bride.father}
            </p>
            <p className="leading-snug">
              and {weddingData.parents.groom.mother} &amp; {weddingData.parents.groom.father}
            </p>
          </div>
        </div>

        {/* 2. TEAL-BLUE ENVELOPE FRONT POCKET (Matching mail.png with gold borders, white flowers, and teal seal) */}
        <div 
          onClick={togglePull}
          className="relative w-full h-[280px] sm:h-[320px] rounded-b-2xl bg-gradient-to-t from-[#142C38] via-[#224C5F] to-[#34667C] border-2 border-[#D4AF37] shadow-2xl overflow-hidden z-20 cursor-pointer"
        >
          {/* Subtle Damask Texture */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

          {/* V-Cut Front Flap Shading with Gold Filigree Line */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-[#3D7188]/90 to-[#183544] border-t-2 border-[#D4AF37]"
            style={{
              clipPath: 'polygon(0 0, 50% 60%, 100% 0, 100% 100%, 0 100%)',
            }}
          />

          {/* Gold Filigree Line along V-rim */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 0 0 L 50 60 L 100 0" fill="none" stroke="#FFDF78" strokeWidth="1.2" strokeOpacity="0.9" />
          </svg>

          {/* White Blossoms and Gold Botanical Sprigs Flanking the Seal */}
          <div className="absolute top-2 inset-x-6 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-1 -rotate-12 opacity-95">
              <span className="text-[#FFFDF8] text-base drop-shadow">&#10047;</span>
              <span className="text-[#FFDF78] text-xs drop-shadow">&#10048;</span>
              <span className="text-[#FFFDF8] text-xs drop-shadow">&#9679;</span>
            </div>
            <div className="flex items-center gap-1 rotate-12 opacity-95">
              <span className="text-[#FFFDF8] text-xs drop-shadow">&#9679;</span>
              <span className="text-[#FFDF78] text-xs drop-shadow">&#10048;</span>
              <span className="text-[#FFFDF8] text-base drop-shadow">&#10047;</span>
            </div>
          </div>

          {/* Central Dark Teal Wax Seal with Gold Botanical Monogram */}
          <div className="relative z-10 flex flex-col items-center justify-center pt-10 text-center px-4">
            <div className="w-16 h-16 rounded-full border-2 border-[#D4AF37] bg-gradient-to-br from-[#2D5A6E] via-[#1A3D4D] to-[#0E2530] flex items-center justify-center shadow-xl">
              <span className="text-[#FFDF78] text-xl font-serif font-bold">P &amp; V</span>
            </div>

            <span className="font-royal text-[9px] tracking-[0.3em] text-[#FFDF78] uppercase mt-2 font-semibold drop-shadow">
              Together, With You
            </span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default InteractiveLaceEnvelope;
