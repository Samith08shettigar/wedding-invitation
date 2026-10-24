import React, { useState, useEffect } from 'react';
import { weddingData } from '../data/weddingData';
import { WaxSeal, SunsetPalaceScene, FloralCornerBouquet, GoldDivider } from './decorations/GoldOrnaments';

export const EnvelopeAnimation = ({ onComplete }) => {
  // Animation phases: 'sealed' -> 'unsealing' -> 'flap-open' -> 'card-rising' -> 'revealed'
  const [phase, setPhase] = useState('sealed');

  useEffect(() => {
    // Stage 1: Break seal & begin flap unfold
    const timer1 = setTimeout(() => {
      setPhase('unsealing');
    }, 400);

    // Stage 2: Flap rotates 180deg open
    const timer2 = setTimeout(() => {
      setPhase('flap-open');
    }, 900);

    // Stage 3: Invitation card emerges out of pocket
    const timer3 = setTimeout(() => {
      setPhase('card-rising');
    }, 1800);

    // Stage 4: Smooth transition to main sequential invitation
    const timer4 = setTimeout(() => {
      onComplete();
    }, 3800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div 
      className="relative w-full h-[840px] flex flex-col items-center justify-between overflow-hidden bg-[#1D0208] select-none cursor-pointer"
      onClick={onComplete}
    >
      {/* Background: Sunset Palace Scene with glowing windows and water */}
      <SunsetPalaceScene className="z-0" />

      {/* Skip Intro Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onComplete();
        }}
        className="absolute bottom-6 right-6 z-40 px-3.5 py-1.5 rounded-full bg-[#2E050D]/80 border border-[#D4AF37]/60 text-xs font-serif italic text-[#FFDF78] tracking-widest backdrop-blur-sm hover:bg-[#4A0A16] hover:border-[#D4AF37] transition-all"
      >
        Skip Intro &gt;
      </button>

      {/* Central 3D Interactive Envelope Container */}
      <div className="relative z-20 my-auto w-[340px] sm:w-[360px] h-[480px] perspective-1000">
        
        {/* INVITATION CARD (Slides out from inside envelope pocket) */}
        <div 
          className={`absolute inset-x-4 top-12 h-[380px] bg-[#FAF5EB] rounded-t-[32px] border-2 border-[#D4AF37] p-5 shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-1000 ease-out z-10 ${
            phase === 'card-rising' 
              ? '-translate-y-28 scale-105 opacity-100' 
              : 'translate-y-4 opacity-80'
          }`}
          style={{
            boxShadow: '0 -10px 25px rgba(0,0,0,0.5)',
          }}
        >
          {/* Card Scalloped Arch & Flower Accents */}
          <div className="absolute top-2 inset-x-6 h-6 border-b border-[#D4AF37]/50" />
          
          <span className="font-royal text-[10px] tracking-[0.25em] text-[#781124] uppercase mb-1">
            Royal Wedding Invitation
          </span>

          <h2 className="font-cursive text-4xl text-[#781124] mt-2 mb-1">
            {weddingData.brideFirstName}
          </h2>
          <span className="font-royal text-sm text-[#D4AF37] font-semibold">&amp;</span>
          <h2 className="font-cursive text-4xl text-[#781124] mt-1 mb-2">
            {weddingData.groomFirstName}
          </h2>

          <GoldDivider className="my-1" width="120px" />

          <p className="font-serif text-xs text-[#5C1423] tracking-widest mt-1">
            {weddingData.displayDate}
          </p>
          <p className="font-body text-[10px] text-[#781124]/70 mt-1">
            {weddingData.venueName}
          </p>
        </div>

        {/* ENVELOPE BODY / BACK POCKET */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#38020D] to-[#200108] rounded-2xl border border-[#D4AF37]/80 shadow-2xl overflow-hidden z-20">
          
          {/* Inner Golden Lining Border */}
          <div className="absolute inset-2 border border-dashed border-[#FFDF78]/30 rounded-xl pointer-events-none" />

          {/* Left Triangular Flap */}
          <div 
            className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-[#3B030E] to-[#280108] border-r border-[#D4AF37]/40"
            style={{
              clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
            }}
          />

          {/* Right Triangular Flap */}
          <div 
            className="absolute top-0 bottom-0 right-0 w-1/2 bg-gradient-to-l from-[#3B030E] to-[#280108] border-l border-[#D4AF37]/40"
            style={{
              clipPath: 'polygon(100% 0, 0 50%, 100% 100%)',
            }}
          />

          {/* Bottom Triangular Flap */}
          <div 
            className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-[#200108] to-[#3B030E] border-t border-[#D4AF37]/50"
            style={{
              clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
            }}
          />

          {/* Floral Corner Accents on Envelope Front */}
          <FloralCornerBouquet position="bottom-left" className="absolute bottom-0 left-0 w-24 h-24 pointer-events-none opacity-80" />
          <FloralCornerBouquet position="bottom-right" className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none opacity-80" />
        </div>

        {/* TOP FLAP (3D CSS ROTATION) */}
        <div 
          className="absolute top-0 inset-x-0 h-[240px] z-30 preserve-3d"
          style={{
            transformOrigin: 'top center',
            transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: (phase === 'flap-open' || phase === 'card-rising') ? 'rotateX(180deg)' : 'rotateX(0deg)',
          }}
        >
          {/* Triangular Top Flap Shape */}
          <div 
            className="w-full h-full bg-gradient-to-b from-[#4A0A16] to-[#2A020B] border-b border-[#D4AF37]/80 shadow-lg relative flex items-end justify-center pb-2"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            }}
          >
            {/* Gold Filigree Line along flap edge */}
            <div 
              className="absolute inset-0 border-b-2 border-[#D4AF37]/60" 
              style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} 
            />
          </div>

          {/* Wax Seal at the Apex of the Triangle */}
          <div 
            className={`absolute bottom-[-28px] left-1/2 -translate-x-1/2 transition-all duration-700 ${
              phase === 'unsealing' ? 'scale-125 filter drop-shadow-[0_0_15px_#FFD700]' : ''
            } ${(phase === 'flap-open' || phase === 'card-rising') ? 'opacity-0 scale-75' : 'opacity-100'}`}
          >
            <WaxSeal initials={weddingData.monogram} size={70} />
          </div>
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="relative z-20 pb-4 text-center">
        <p className="font-serif italic text-xs tracking-widest text-[#FFDF78]/70 animate-pulse">
          Opening Your Royal Invitation...
        </p>
      </div>
    </div>
  );
};
