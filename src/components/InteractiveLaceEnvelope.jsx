import React, { useState } from 'react';
import { weddingData } from '../data/weddingData';
import mailPocketWebp from '../assets/mail_front_pocket.webp';

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

        {/* 2. TEAL-BLUE ENVELOPE FRONT POCKET (Authentic mail.png with 3D flowers, gold leaves & wax seal) */}
        <div 
          onClick={togglePull}
          className="relative w-full h-[300px] sm:h-[350px] overflow-hidden z-20 cursor-pointer"
        >
          <img 
            src={mailPocketWebp} 
            alt="Envelope Front Pocket with Flowers and Seal"
            className="w-full h-full object-cover object-bottom select-none pointer-events-none drop-shadow-2xl"
          />
        </div>

      </div>

    </section>
  );
};

export default InteractiveLaceEnvelope;
