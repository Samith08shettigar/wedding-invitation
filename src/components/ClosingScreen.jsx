import React from 'react';
import { weddingData } from '../data/weddingData';
import { SunsetPalaceScene, HangingLantern, GoldDivider, FloralCornerBouquet, GoldCorner } from './decorations/GoldOrnaments';
import { RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ClosingScreen = ({ onReplay }) => {
  const handleReplayClick = () => {
    // Trigger celebratory confetti on replay
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#D4AF37', '#FFF2B2', '#8C2A3E', '#FFDF78'],
      });
    } catch {
      // safe fallback if confetti fails
    }
    setTimeout(() => {
      onReplay();
    }, 400);
  };

  return (
    <>
      {/* SCREEN 11: HANGING LANTERNS INVITATION ANNOUNCEMENT */}
      <section id="closing" className="relative w-full min-h-[820px] sm:min-h-[880px] flex flex-col items-center justify-between p-6 bg-radial from-[#4A0A16] via-[#2D020B] to-[#140004] text-[#FAF4E8] select-none overflow-hidden">
        
        {/* Outer & Inner Gold Card Borders */}
        <div className="absolute inset-4 sm:inset-5 border border-[#D4AF37]/80 rounded-[28px] pointer-events-none">
          <div className="absolute inset-1.5 border border-dashed border-[#FFDF78]/30 rounded-[24px]" />
        </div>

        {/* Hanging Moroccan / Indian Gold Lanterns (Top Row) */}
        <div className="absolute top-0 inset-x-6 flex justify-between items-start pointer-events-none z-10">
          <HangingLantern height={140} lanternWidth={32} className="animate-float-slow -mt-2" />
          <HangingLantern height={110} lanternWidth={28} className="animate-float-slow mt-2" style={{ animationDelay: '1.5s' }} />
          <HangingLantern height={150} lanternWidth={34} className="animate-float-slow -mt-1" style={{ animationDelay: '0.8s' }} />
          <HangingLantern height={115} lanternWidth={28} className="animate-float-slow mt-1" style={{ animationDelay: '2.2s' }} />
          <HangingLantern height={135} lanternWidth={30} className="animate-float-slow -mt-2" style={{ animationDelay: '1s' }} />
        </div>

        {/* 2 Bottom Floral Bouquets & Gold Corners */}
        <FloralCornerBouquet position="bottom-left" className="absolute bottom-2 left-2 w-28 h-28" />
        <FloralCornerBouquet position="bottom-right" className="absolute bottom-2 right-2 w-28 h-28" />
        <GoldCorner position="bottom-left" className="absolute bottom-5 left-5" />
        <GoldCorner position="bottom-right" className="absolute bottom-5 right-5" />

        {/* Spacer for hanging lanterns */}
        <div className="relative z-10 pt-36" />

        {/* Central Announcement Text */}
        <div className="relative z-10 my-auto flex flex-col items-center text-center px-4 max-w-sm">
          <p className="font-serif italic text-lg sm:text-xl text-[#FFF3D1] tracking-wide leading-relaxed">
            {weddingData.closingNote}
          </p>

          <h2 className="font-cursive text-5xl sm:text-6xl text-gold-shimmer tracking-wide my-4 drop-shadow-md">
            {weddingData.brideFirstName} &amp; {weddingData.groomFirstName}
          </h2>

          <GoldDivider className="my-2" width="140px" />

          <p className="font-royal text-base sm:text-lg text-[#F3E5C8] tracking-widest mt-2">
            {weddingData.displayDate}
          </p>
        </div>

        {/* Down Arrow to Thank You screen */}
        <div className="relative z-10 pb-6 flex justify-center">
          <a href="#thankyou" className="animate-bounce-slow text-[#FFDF78]/80 hover:text-[#FFF2B2] transition-colors">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>
        </div>
      </section>

      {/* SCREEN 12: THANK YOU & REPLAY EXPERIENCE */}
      <section id="thankyou" className="relative w-full min-h-[820px] sm:min-h-[880px] flex flex-col items-center justify-between p-6 overflow-hidden select-none">
        
        {/* Code-Generated Sunset Palace Scene in Background */}
        <SunsetPalaceScene className="z-0" showFlowers={true} />

        {/* Top Header: Thank You */}
        <div className="relative z-10 pt-16 text-center">
          <h2 className="font-cursive text-5xl sm:text-6xl text-[#FFF3D1] tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Thank You
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#FFE8C2] tracking-wider drop-shadow-md mt-2">
            for being a part of our journey
          </p>
        </div>

        {/* Center: Replay Experience Button */}
        <div className="relative z-10 my-auto flex flex-col items-center">
          <button
            onClick={handleReplayClick}
            className="group relative inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-gradient-to-r from-[#4A0A16] to-[#2B020B] border-2 border-[#D4AF37] text-sm font-royal font-semibold tracking-wider text-[#FFDF78] shadow-2xl hover:scale-105 hover:border-[#FFF2B2] active:scale-95 transition-all"
            style={{
              boxShadow: '0 10px 25px rgba(0,0,0,0.7), 0 0 20px rgba(212,175,55,0.4)',
            }}
          >
            <RotateCcw className="w-4 h-4 text-[#FFDF78] group-hover:-rotate-90 transition-transform duration-500" />
            <span>Replay</span>
          </button>
        </div>

        {/* SCREEN 13: CLOSING VIGNETTE ("A new beginning of forever") */}
        <div className="relative z-10 pb-8 flex flex-col items-center text-center">
          <GoldDivider className="my-2" width="120px" />
          <p className="font-serif italic text-xs sm:text-sm text-[#FFF3D1]/80 tracking-widest drop-shadow-md">
            &ldquo;{weddingData.endingQuote}&rdquo;
          </p>
          <span className="font-royal text-[10px] tracking-[0.3em] text-[#D4AF37]/90 mt-1 uppercase">
            {weddingData.monogram} &bull; 2027
          </span>
        </div>
      </section>
    </>
  );
};
