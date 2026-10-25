import React from 'react';
import { weddingData } from '../data/weddingData';
import { SunsetPalaceScene, HangingLantern, GoldDivider, FloralCornerBouquet, GoldCorner } from './decorations/GoldOrnaments';
import { ScallopedMughalArch, GoldLotus, RoyalMandala } from './decorations/IndianOrnaments';
import { RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ClosingScreen = ({ onReplay }) => {
  const handleReplayClick = () => {
    // Trigger celebratory royal confetti on replay
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.75 },
        colors: ['#D4AF37', '#FFF2B2', '#8C2A3E', '#FFDF78', '#FAF5EB'],
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
      <section id="closing" className="relative w-full min-h-[860px] sm:min-h-[920px] flex flex-col items-center justify-between p-6 sm:p-10 bg-radial from-[#4A0A16] via-[#2D020B] to-[#140004] text-[#FAF4E8] select-none overflow-hidden">
        
        {/* Brocade Background Texture & Mandala */}
        <div className="absolute inset-0 bg-royal-brocade opacity-65 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
          <RoyalMandala size={440} opacity={0.12} className="animate-mandala-spin" />
        </div>

        {/* Outer & Inner Gold Card Borders */}
        <div className="absolute inset-4 sm:inset-6 border-2 border-[#D4AF37]/80 rounded-[32px] pointer-events-none z-10">
          <div className="absolute inset-2 border border-dashed border-[#FFDF78]/35 rounded-[26px]" />
        </div>

        {/* Hanging Moroccan / Royal Indian Gold Lanterns (Top Row) with Gentle Sway */}
        <div className="absolute top-0 inset-x-4 sm:inset-x-12 flex justify-between items-start pointer-events-none z-15">
          <HangingLantern height={150} lanternWidth={34} className="animate-lantern-sway -mt-2" />
          <HangingLantern height={120} lanternWidth={30} className="animate-lantern-sway mt-3" style={{ animationDelay: '1.5s' }} />
          <HangingLantern height={165} lanternWidth={38} className="animate-lantern-sway -mt-1 hidden sm:flex" style={{ animationDelay: '0.8s' }} />
          <HangingLantern height={125} lanternWidth={30} className="animate-lantern-sway mt-2" style={{ animationDelay: '2.2s' }} />
          <HangingLantern height={145} lanternWidth={32} className="animate-lantern-sway -mt-2" style={{ animationDelay: '1s' }} />
        </div>

        {/* 2 Bottom Floral Bouquets & Gold Corners */}
        <FloralCornerBouquet position="bottom-left" className="absolute bottom-3 left-3 w-28 h-28 sm:w-36 sm:h-36 z-15" />
        <FloralCornerBouquet position="bottom-right" className="absolute bottom-3 right-3 w-28 h-28 sm:w-36 sm:h-36 z-15" />
        <GoldCorner position="bottom-left" className="absolute bottom-6 left-6 z-15" />
        <GoldCorner position="bottom-right" className="absolute bottom-6 right-6 z-15" />

        {/* Spacer for hanging lanterns */}
        <div className="relative z-20 pt-36 sm:pt-44" />

        {/* Central Announcement Text */}
        <div className="relative z-20 my-auto flex flex-col items-center text-center px-4 max-w-lg">
          <ScallopedMughalArch width={180} height={26} className="mb-2" />
          <p className="font-serif italic text-xl sm:text-2xl text-[#FFF3D1] tracking-wide leading-relaxed font-normal">
            &ldquo;{weddingData.closingNote}&rdquo;
          </p>

          <h2 className="font-cursive text-5xl sm:text-7xl text-gold-shimmer tracking-wide my-4 drop-shadow-md">
            {weddingData.brideFirstName} &amp; {weddingData.groomFirstName}
          </h2>

          <GoldDivider className="my-2.5" width="160px" />

          <p className="font-royal text-base sm:text-xl text-[#F3E5C8] tracking-widest mt-2 font-semibold">
            {weddingData.displayDate}
          </p>
        </div>

        {/* Down Arrow to Thank You screen */}
        <div className="relative z-20 pb-6 flex justify-center">
          <a href="#thankyou" className="animate-bounce-slow text-[#FFDF78]/80 hover:text-[#FFF2B2] transition-colors p-2">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>
        </div>
      </section>

      {/* SCREEN 12: THANK YOU & REPLAY EXPERIENCE */}
      <section id="thankyou" className="relative w-full min-h-[860px] sm:min-h-[920px] flex flex-col items-center justify-between p-6 sm:p-10 overflow-hidden select-none">
        
        {/* Code-Generated Sunset Palace Scene in Background */}
        <SunsetPalaceScene className="z-0" showFlowers={true} />

        {/* Top Header: Thank You */}
        <div className="relative z-20 pt-16 sm:pt-20 text-center max-w-lg">
          <ScallopedMughalArch width={180} height={26} className="mx-auto mb-2" />
          <GoldLotus size={34} className="mb-2" />
          <h2 className="font-cursive text-6xl sm:text-7xl text-[#FFF3D1] tracking-wide drop-shadow-[0_4px_14px_rgba(0,0,0,0.85)]">
            Thank You
          </h2>
          <p className="font-serif italic text-lg sm:text-2xl text-[#FFE8C2] tracking-wider drop-shadow-md mt-2 font-medium">
            {weddingData.thankYouMessage}
          </p>
        </div>

        {/* Center: Replay Experience Button */}
        <div className="relative z-20 my-auto flex flex-col items-center">
          <button
            onClick={handleReplayClick}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#4A0A16] via-[#630E1F] to-[#2B020B] border-2 border-[#D4AF37] text-sm sm:text-base font-royal font-semibold tracking-widest text-[#FFDF78] shadow-2xl hover:scale-105 hover:border-[#FFF2B2] active:scale-95 transition-all cursor-pointer"
            style={{
              boxShadow: '0 12px 30px rgba(0,0,0,0.8), 0 0 25px rgba(212,175,55,0.45)',
            }}
          >
            <RotateCcw className="w-5 h-5 text-[#FFDF78] group-hover:-rotate-90 transition-transform duration-500" />
            <span>Replay Experience</span>
          </button>
        </div>

        {/* SCREEN 13: CLOSING VIGNETTE ("A new beginning of forever") */}
        <div className="relative z-20 pb-8 flex flex-col items-center text-center">
          <GoldDivider className="my-2.5" width="140px" />
          <p className="font-serif italic text-base sm:text-lg text-[#FFF3D1]/90 tracking-widest drop-shadow-md font-medium">
            &ldquo;{weddingData.endingQuote}&rdquo;
          </p>
          <span className="font-royal text-xs tracking-[0.35em] text-[#D4AF37]/90 mt-1 uppercase font-semibold">
            {weddingData.monogram} &bull; 2027
          </span>
        </div>
      </section>
    </>
  );
};
