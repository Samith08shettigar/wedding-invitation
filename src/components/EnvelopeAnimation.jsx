import React, { useState, useEffect } from 'react';
import { weddingData } from '../data/weddingData';
import { WaxSeal, SunsetPalaceScene, GoldDivider } from './decorations/GoldOrnaments';
import { GoldPaisley, GoldLotus, TraditionalToran, IndianLiningPattern, IndianZariBorder } from './decorations/IndianOrnaments';

export const EnvelopeAnimation = ({ onComplete }) => {
  // Animation phases: 'sealed' -> 'unsealing' -> 'flap-open' -> 'card-rising' -> 'revealed'
  const [phase, setPhase] = useState('sealed');

  useEffect(() => {
    // Stage 1: Break seal & begin flap unfold
    const timer1 = setTimeout(() => {
      setPhase('unsealing');
    }, 400);

    // Stage 2: Flap rotates 180deg open backward around top hinge
    const timer2 = setTimeout(() => {
      setPhase('flap-open');
    }, 950);

    // Stage 3: Royal Invitation card emerges smoothly out of pocket
    const timer3 = setTimeout(() => {
      setPhase('card-rising');
    }, 1800);

    // Stage 4: Settle and transition to main invitation experience
    const timer4 = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  const isFlapOpen = phase === 'flap-open' || phase === 'card-rising';

  return (
    <div 
      className="relative w-full h-[840px] flex flex-col items-center justify-between overflow-hidden bg-[#1B0207] select-none cursor-pointer"
      onClick={onComplete}
    >
      {/* Background: Code-Rendered Sunset Palace Scene with glowing windows and water */}
      <SunsetPalaceScene className="z-0" />

      {/* Traditional Indian Wedding Hanging Flower Garland (Toran) */}
      <TraditionalToran />

      {/* Skip Intro Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onComplete();
        }}
        className="absolute bottom-6 right-6 z-40 px-3.5 py-1.5 rounded-full bg-[#2E050D]/90 border border-[#D4AF37]/80 text-xs font-serif italic text-[#FFDF78] tracking-widest backdrop-blur-md shadow-lg hover:bg-[#4A0A16] hover:border-[#FFF2B2] transition-all cursor-pointer"
      >
        Skip Intro &gt;
      </button>

      {/* Central 3D Interactive Traditional Indian Envelope Container */}
      <div className="relative z-20 my-auto w-[335px] sm:w-[360px] h-[490px] perspective-1000">
        
        {/* ENVELOPE BACK INTERIOR (Ivory Traditional Printed Lining) */}
        <div className="absolute inset-x-2 top-4 bottom-2 bg-[#FFFDF7] rounded-2xl shadow-inner overflow-hidden border border-[#D4AF37]/40 z-0">
          <IndianLiningPattern />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30 pointer-events-none" />
        </div>

        {/* INVITATION CARD (Slides smoothly out from inside envelope pocket) */}
        <div 
          className={`absolute inset-x-4 top-10 h-[390px] bg-[#FAF5EB] rounded-t-[34px] rounded-b-[18px] border-2 border-[#D4AF37] p-5 shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-1000 ease-out z-10 ${
            phase === 'card-rising' 
              ? '-translate-y-32 scale-105 opacity-100' 
              : 'translate-y-6 opacity-75'
          }`}
          style={{
            boxShadow: '0 -15px 35px rgba(0,0,0,0.6), 0 0 20px rgba(212,175,55,0.3)',
          }}
        >
          {/* Card Scalloped Arch Crown */}
          <div className="w-full flex justify-center -mt-1 mb-2">
            <svg width="140" height="22" viewBox="0 0 140 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 20 C25 20 40 12 55 6 C62 3 67 1 70 0 C73 1 78 3 85 6 C100 12 115 20 140 20"
                stroke="#D4AF37"
                strokeWidth="1.5"
                fill="none"
              />
              <circle cx="70" cy="2" r="2" fill="#D4AF37" />
            </svg>
          </div>

          {/* Inner Dotted Gold Lining */}
          <div className="absolute inset-2 border border-dashed border-[#D4AF37]/50 rounded-t-[28px] rounded-b-[12px] pointer-events-none" />
          
          {/* Gold Lotus Accent at Card Top */}
          <GoldLotus size={28} className="mb-1" />

          <span className="font-royal text-[9px] sm:text-[10px] tracking-[0.25em] text-[#8C2A3E] font-semibold uppercase mb-1">
            Royal Wedding Invitation
          </span>

          <h2 className="font-cursive text-4xl sm:text-5xl text-[#781124] tracking-wide my-0.5 drop-shadow-sm">
            {weddingData.brideFirstName}
          </h2>
          <span className="font-serif italic text-base text-[#AA7C11] font-semibold">&amp;</span>
          <h2 className="font-cursive text-4xl sm:text-5xl text-[#781124] tracking-wide my-0.5 drop-shadow-sm">
            {weddingData.groomFirstName}
          </h2>

          <GoldDivider className="my-1.5" width="120px" />

          <p className="font-royal text-xs text-[#3B030D] font-medium tracking-widest mt-1">
            {weddingData.displayDate}
          </p>
          <p className="font-serif text-[11px] text-[#781124]/80 tracking-wide mt-1">
            {weddingData.venueName} &bull; Bengaluru
          </p>
        </div>

        {/* ENVELOPE FRONT PANELS (Deep Royal Maroon Brocade with Gold Paisley) */}
        <div className="absolute inset-0 rounded-2xl border-2 border-[#D4AF37]/90 shadow-2xl overflow-hidden z-20 pointer-events-none">
          
          {/* Rich Maroon Base */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#4A0A16] via-[#33040E] to-[#1E0106]" />

          {/* Left Triangular Flap with Paisley */}
          <div 
            className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-[#520C1A] to-[#2D020B] border-r border-[#D4AF37]/50 flex items-center pl-3"
            style={{
              clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
            }}
          >
            <GoldPaisley width={36} height={50} className="opacity-80" />
          </div>

          {/* Right Triangular Flap with Paisley */}
          <div 
            className="absolute top-0 bottom-0 right-0 w-1/2 bg-gradient-to-l from-[#520C1A] to-[#2D020B] border-l border-[#D4AF37]/50 flex items-center justify-end pr-3"
            style={{
              clipPath: 'polygon(100% 0, 0 50%, 100% 100%)',
            }}
          >
            <GoldPaisley width={36} height={50} flip={true} className="opacity-80" />
          </div>

          {/* Bottom Triangular Flap with Sacred Lotus Motif */}
          <div 
            className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-[#200108] via-[#3B030E] to-[#4A0A16] border-t border-[#D4AF37]/60 flex flex-col items-center justify-end pb-3"
            style={{
              clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
            }}
          >
            <GoldLotus size={32} className="opacity-85 mt-4" />
          </div>

          {/* Outer Border Gold Trim */}
          <div className="absolute inset-1.5 border border-dashed border-[#FFDF78]/30 rounded-xl" />
        </div>

        {/* TOP FLAP (Realistic 3D Backward Rotation with Dual-Sided Maroon & Ivory Lining) */}
        <div 
          className={`absolute top-0 inset-x-0 h-[245px] preserve-3d transition-transform duration-1000 ease-in-out ${
            isFlapOpen ? 'z-5' : 'z-30'
          }`}
          style={{
            transformOrigin: 'top center',
            transform: isFlapOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
          }}
        >
          {/* FRONT FACE: Deep Royal Maroon with Gold Zari Border & Lotus */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-[#5C0D1E] to-[#3B0410] border-b-2 border-[#D4AF37] shadow-xl flex flex-col items-center justify-between pb-3"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              backfaceVisibility: 'hidden',
            }}
          >
            {/* Top Zari Trim */}
            <IndianZariBorder className="mt-1" />

            {/* Sacred Lotus at Apex */}
            <div className="mb-8">
              <GoldLotus size={26} className="opacity-90" />
            </div>
          </div>

          {/* BACK FACE: Traditional Warm Ivory Lining with Gold Jali Pattern (Visible when open) */}
          <div 
            className="absolute inset-0 bg-[#FFFDF7] border-b-2 border-[#D4AF37] shadow-md flex flex-col items-center justify-center overflow-hidden"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              transform: 'rotateX(180deg)',
              backfaceVisibility: 'hidden',
            }}
          >
            <IndianLiningPattern />
            <div className="absolute top-6">
              <GoldLotus size={24} className="opacity-60" />
            </div>
          </div>

          {/* Traditional Gold Medallion Wax Seal with Initials */}
          <div 
            className={`absolute bottom-[-32px] left-1/2 -translate-x-1/2 transition-all duration-700 ${
              phase === 'unsealing' ? 'scale-125 filter drop-shadow-[0_0_20px_#FFD700]' : ''
            } ${isFlapOpen ? 'opacity-0 scale-75' : 'opacity-100'}`}
          >
            <WaxSeal initials={weddingData.monogram} size={76} />
          </div>
        </div>
      </div>

      {/* Bottom Hint in English */}
      <div className="relative z-20 pb-5 text-center">
        <p className="font-serif italic text-xs tracking-widest text-[#FFDF78]/80 animate-pulse">
          Opening Your Traditional Indian Wedding Invitation...
        </p>
      </div>
    </div>
  );
};
