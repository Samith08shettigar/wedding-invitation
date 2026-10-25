import React, { useState } from 'react';
import { weddingData } from '../data/weddingData';
import { WeddingCourtyardScene } from './decorations/WeddingCourtyardScene';
import { CarvedFlapArt, CarvedSideFlapArt, CarvedWaxSeal } from './decorations/CarvedEnvelopeArtwork';
import { ChevronDown } from 'lucide-react';

/**
 * HERO COURTYARD & 4-FLAP CARVED ENVELOPE (Matches user screenshot exactly)
 * Sealed bas-relief crimson envelope with the exact lotus & climbing bud vines pattern.
 * When tapped: top flap folds up, revealing the royal courtyard with floral arch & mandap.
 * Bottom flap with carved pattern and 'Skip opening ↗' button anchors the bottom foreground.
 */
export const HeroCourtyard = ({ onStartMusic, onOpenComplete }) => {
  // State: 'sealed' -> 'unfolded'
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    if (onStartMusic) onStartMusic();
    setIsOpen(true);
    if (onOpenComplete) onOpenComplete();
  };

  const handleSkip = (e) => {
    e.stopPropagation();
    handleOpen();
    const target = document.getElementById('scratch-date');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-between overflow-hidden select-none bg-[#1F0107]">
      
      {/* 1. COURTYARD BACKGROUND (Revealed behind the envelope) */}
      <WeddingCourtyardScene />

      {/* 2. COURTYARD HERO TEXT (Floats cleanly inside the upper archway) */}
      <div 
        className={`relative z-20 pt-16 sm:pt-20 px-6 max-w-lg mx-auto text-center flex flex-col items-center transition-all duration-1000 ${
          isOpen ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Sacred Opening Verse */}
        <p className="font-serif italic text-xs sm:text-sm text-[#4A0A16] tracking-wider leading-relaxed max-w-sm mb-4 font-medium drop-shadow-sm">
          {weddingData.openingBlessing}
        </p>

        {/* Couple Names (Priya & Varun) */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 my-1">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#3B0612] tracking-wide font-normal">
            {weddingData.brideFirstName}
          </h1>
          <span className="font-serif italic text-2xl sm:text-3xl text-[#AA7C11]">&amp;</span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#3B0612] tracking-wide font-normal">
            {weddingData.groomFirstName}
          </h1>
        </div>

        {/* Seven Promises Tagline */}
        <p className="font-serif italic text-xs sm:text-sm text-[#6E1225] tracking-wide mt-3 font-medium">
          {weddingData.openingTagline}
        </p>
      </div>

      {/* Down Chevron / Scroll Prompt (Visible once opened) */}
      {isOpen && (
        <div className="relative z-20 pb-20 flex flex-col items-center animate-bounce-slow">
          <a
            href="#scratch-date"
            className="flex flex-col items-center gap-1 text-[#3B0612] hover:text-[#781124] transition-colors p-2"
            aria-label="Scroll to Save The Date"
          >
            <span className="font-serif italic text-xs tracking-widest text-[#4A0A16]">
              Scroll to Explore
            </span>
            <div className="w-8 h-8 rounded-full border border-[#AA7C11] bg-[#FFF8EE]/80 flex items-center justify-center shadow">
              <ChevronDown className="w-4 h-4 text-[#781124]" />
            </div>
          </a>
        </div>
      )}

      {/* 3. CARVED BAS-RELIEF ENVELOPE FLAPS (Matching user screenshot) */}
      <div className="absolute inset-0 z-30 perspective-1600 pointer-events-none">
        
        {/* TOP FLAP: Folds 180deg upward around top screen edge */}
        <div 
          className="absolute top-0 inset-x-0 h-1/2 bg-carved-crimson preserve-3d transition-transform duration-1000 ease-in-out border-b border-[#C44D68]/40 overflow-hidden flex flex-col items-center justify-center pointer-events-auto cursor-pointer"
          onClick={handleOpen}
          style={{
            clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            transformOrigin: 'top center',
            transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
          }}
        >
          <CarvedFlapArt flipY={true} />
        </div>

        {/* LEFT FLAP: Triangular side flap with carved climbing vine */}
        <div 
          className="absolute inset-y-0 left-0 w-1/2 bg-carved-crimson border-r border-[#C44D68]/30 overflow-hidden flex items-center pl-2 pointer-events-auto"
          style={{
            clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
          }}
        >
          <CarvedSideFlapArt />
        </div>

        {/* RIGHT FLAP: Triangular side flap with carved climbing vine */}
        <div 
          className="absolute inset-y-0 right-0 w-1/2 bg-carved-crimson border-l border-[#C44D68]/30 overflow-hidden flex items-center justify-end pr-2 pointer-events-auto"
          style={{
            clipPath: 'polygon(100% 0, 0 50%, 100% 100%)',
          }}
        >
          <CarvedSideFlapArt isRight={true} />
        </div>

        {/* BOTTOM FLAP: THE EXACT PATTERN CIRCLED IN USER'S SCREENSHOT */}
        {/* Anchored at bottom of screen with carved lotus, climbing bud vines, and Skip opening button */}
        <div 
          className="absolute bottom-0 inset-x-0 h-[50%] sm:h-[50%] bg-carved-crimson overflow-hidden flex flex-col items-center justify-end pb-2 pointer-events-auto shadow-[0_-5px_25px_rgba(0,0,0,0.7)]"
          style={{
            clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
          }}
        >
          {/* Exact Carved Lotus, Vines, and Florets Pattern with illuminated fold edges */}
          <CarvedFlapArt showGoldEdges={true} />

          {/* Text when sealed: "You are invited" + "TAP THE SEAL TO OPEN" */}
          {!isOpen && (
            <div className="absolute top-16 inset-x-0 flex flex-col items-center text-center px-4 pointer-events-none">
              <p className="font-serif italic text-2xl sm:text-3xl text-[#FFE6EE] tracking-wide drop-shadow-md mb-0.5">
                You are invited
              </p>
              <span className="font-royal text-[9px] sm:text-[10px] tracking-[0.3em] text-[#FFDF78]/90 uppercase font-semibold mt-1">
                Tap the seal to open
              </span>
            </div>
          )}

          {/* Skip opening button matching user's green circle */}
          <button
            onClick={handleSkip}
            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 px-3.5 py-1.5 rounded-full bg-[#4A0A16]/85 border border-[#E06B85]/60 text-[#FFE6EE] font-serif italic text-xs tracking-wider backdrop-blur-md shadow-lg hover:bg-[#680F22] hover:border-[#FFAAB8] transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
            aria-label="Skip opening to explore invitation"
          >
            <span>Skip opening</span>
            <span className="text-[12px] font-sans leading-none">&#8599;</span>
          </button>
        </div>

        {/* CENTRAL RED WAX SEAL WITH "P & V" (Positioned at apex of flaps) */}
        {!isOpen && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-auto">
            <CarvedWaxSeal 
              monogram={weddingData.monogram} 
              size={90} 
              isPulsing={true}
              onClick={handleOpen} 
            />
          </div>
        )}

      </div>
    </section>
  );
};
