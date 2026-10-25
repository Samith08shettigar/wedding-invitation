import React, { useState } from 'react';
import { weddingData } from '../data/weddingData';
import { CarvedLotusMotif, CarvedFoliageVine } from './decorations/CarvedEnvelopeArtwork';

/**
 * INTERACTIVE PULL-OUT LACE ENVELOPE (frame_28s - frame_36s)
 * "You're invited" -> Crimson envelope with delicate white lace border ->
 * Pull-out / expandable ivory invitation card with full letter & family blessings.
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
        <h2 className="font-serif italic text-4xl sm:text-6xl text-[#2E020A] tracking-wide font-normal">
          You&apos;re invited
        </h2>
        <p className="font-serif italic text-xs sm:text-sm text-[#8C132B]/85 mt-2">
          {isPulledOut ? 'Tap card to tuck back inside' : 'Tap or pull card to read formal invitation'}
        </p>
      </div>

      {/* ENVELOPE & SLIDING CARD CONTAINER */}
      <div className="relative w-full max-w-[340px] sm:max-w-[420px] h-[520px] sm:h-[600px] flex items-end justify-center">
        
        {/* 1. SLIDING INVITATION CARD (Sits inside the pocket, slides up when clicked/pulled) */}
        <div 
          onClick={togglePull}
          className={`absolute inset-x-3 sm:inset-x-5 top-0 bg-[#FFFDF9] rounded-2xl border-2 border-[#D4AF37]/60 shadow-2xl p-6 sm:p-8 flex flex-col text-left transition-all duration-700 ease-out cursor-pointer z-10 ${
            isPulledOut 
              ? '-translate-y-24 sm:-translate-y-32 shadow-[0_20px_50px_rgba(0,0,0,0.35)]' 
              : 'translate-y-28 opacity-90 hover:-translate-y-2'
          }`}
          style={{
            minHeight: '480px',
          }}
        >
          {/* Inner hairline border */}
          <div className="absolute inset-2 sm:inset-3 border border-[#AA7C11]/30 rounded-xl pointer-events-none" />

          {/* Letter Heading */}
          <h3 className="font-serif italic text-2xl sm:text-3xl text-[#2E020A] mb-4">
            {weddingData.letterTitle}
          </h3>

          {/* Letter Body */}
          <p className="font-serif text-xs sm:text-sm text-[#4A0A16] leading-relaxed mb-4">
            {weddingData.letterParagraph1}
          </p>

          {/* Diamond Fleuron */}
          <div className="text-center text-[#AA7C11] text-xs my-2">
            &#10022;
          </div>

          <p className="font-serif text-xs sm:text-sm text-[#4A0A16] leading-relaxed mb-5">
            {weddingData.letterParagraph2}
          </p>

          {/* Family Sign-Off */}
          <div className="mt-auto pt-3 border-t border-[#AA7C11]/25 text-center">
            <span className="font-serif italic text-xs text-[#8C132B] block mb-2 font-semibold">
              With love,
            </span>

            {/* Bride & Parents */}
            <h4 className="font-serif text-xl sm:text-2xl text-[#2E020A] font-medium">
              {weddingData.brideFirstName}
            </h4>
            <p className="font-serif text-[11px] text-[#6E1225]">
              Daughter of {weddingData.parents.bride.mother}<br />
              and {weddingData.parents.bride.father}
            </p>

            <span className="font-serif italic text-lg text-[#AA7C11] my-1 inline-block">&amp;</span>

            {/* Groom & Parents */}
            <h4 className="font-serif text-xl sm:text-2xl text-[#2E020A] font-medium">
              {weddingData.groomFirstName}
            </h4>
            <p className="font-serif text-[11px] text-[#6E1225]">
              Son of {weddingData.parents.groom.mother}<br />
              and {weddingData.parents.groom.father}
            </p>
          </div>
        </div>

        {/* 2. CRIMSON ENVELOPE FRONT POCKET (Covers bottom of card, card rises out from inside) */}
        <div 
          onClick={togglePull}
          className="relative w-full h-[280px] sm:h-[320px] bg-carved-crimson rounded-b-2xl border-2 border-[#AA7C11]/60 shadow-2xl overflow-hidden z-20 cursor-pointer"
        >
          {/* Delicate Victorian / Mughal Lace Border along top V-rim */}
          <div className="absolute top-0 inset-x-0 h-10 overflow-hidden pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 400 40" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 5 Q200 45 400 5"
                stroke="#FFE6EE"
                strokeWidth="4"
                fill="none"
              />
              <path
                d="M0 5 Q200 45 400 5"
                stroke="#D4AF37"
                strokeWidth="1.2"
                strokeDasharray="4 3"
                fill="none"
              />
              {/* Lace Scallops */}
              {Array.from({ length: 20 }).map((_, i) => {
                const x = i * 20 + 10;
                return (
                  <circle key={i} cx={x} cy={12 + Math.sin((i / 20) * Math.PI) * 18} r="3" fill="#FFE6EE" opacity="0.85" />
                );
              })}
            </svg>
          </div>

          {/* Carved Lotus Motif in Center */}
          <div className="relative z-10 flex flex-col items-center justify-center pt-8 text-center px-4">
            <CarvedLotusMotif size={80} className="opacity-90" />
            
            {/* Monogram P & V */}
            <div className="flex items-center justify-center gap-1 mt-3">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-gold-shimmer">
                P
              </span>
              <span className="font-serif italic text-base text-[#FFDF78] mx-1">&amp;</span>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-gold-shimmer">
                V
              </span>
            </div>

            <span className="font-royal text-[9px] tracking-[0.3em] text-[#FFDF78]/80 uppercase mt-1">
              Together, With You
            </span>
          </div>

          {/* Background Carved Vine Texture */}
          <div className="absolute inset-0 opacity-25 pointer-events-none">
            <CarvedFoliageVine />
          </div>
        </div>

      </div>

    </section>
  );
};
