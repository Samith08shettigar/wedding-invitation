import React, { useState } from 'react';
import { weddingData } from '../data/weddingData';
import { WeddingCourtyardScene } from './decorations/WeddingCourtyardScene';
import { CarvedLotusMotif, CarvedFoliageVine, CarvedWaxSeal } from './decorations/CarvedEnvelopeArtwork';
import { ChevronDown } from 'lucide-react';

/**
 * HERO COURTYARD & 4-FLAP ENVELOPE OPENING (frame_00s - frame_12s)
 * Sealed bas-relief crimson envelope -> Tap seal -> 3D Flaps unfold ->
 * Royal Indian Wedding Courtyard with floral arch, mandap, and couple announcement.
 */
export const HeroCourtyard = ({ onStartMusic, onOpenComplete }) => {
  // State: 'sealed' -> 'unfolding' -> 'opened'
  const [envelopeState, setEnvelopeState] = useState('sealed');

  const handleOpen = () => {
    if (envelopeState !== 'sealed') return;
    if (onStartMusic) onStartMusic();
    setEnvelopeState('unfolding');

    setTimeout(() => {
      setEnvelopeState('opened');
      if (onOpenComplete) onOpenComplete();
    }, 1200);
  };

  const isUnfolded = envelopeState === 'unfolding' || envelopeState === 'opened';

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-between overflow-hidden select-none">
      
      {/* 1. COURTYARD BACKGROUND (Revealed behind the envelope) */}
      <WeddingCourtyardScene />

      {/* Skip Opening Button */}
      {!isUnfolded && (
        <button
          onClick={handleOpen}
          className="fixed top-5 right-5 z-50 px-4 py-1.5 rounded-full bg-[#3B0712]/90 border border-[#D4AF37]/80 text-xs font-serif italic text-[#FFDF78] tracking-widest backdrop-blur-md shadow-lg hover:bg-[#5C0E1E] transition-all cursor-pointer"
        >
          Skip opening &gt;
        </button>
      )}

      {/* 2. COURTYARD HERO TEXT (Floats cleanly inside the upper archway) */}
      <div 
        className={`relative z-20 pt-16 sm:pt-20 px-6 max-w-lg mx-auto text-center flex flex-col items-center transition-all duration-1000 ${
          isUnfolded ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-8'
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
      {isUnfolded && (
        <div className="relative z-20 pb-8 flex flex-col items-center animate-bounce-slow">
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

      {/* 3. 4-FLAP CARVED BAS-RELIEF ENVELOPE (Full-screen overlay when sealed) */}
      <div 
        className={`fixed inset-0 z-40 perspective-1600 transition-opacity duration-1000 ${
          envelopeState === 'opened' ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        <div className="relative w-full h-full preserve-3d">
          
          {/* TOP FLAP: Folds 180deg upward around top screen edge */}
          <div 
            className="absolute top-0 inset-x-0 h-1/2 bg-carved-crimson preserve-3d transition-transform duration-1000 ease-in-out border-b border-[#C44D68]/40 overflow-hidden flex flex-col items-center justify-center"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              transformOrigin: 'top center',
              transform: isUnfolded ? 'rotateX(180deg)' : 'rotateX(0deg)',
            }}
          >
            <div className="absolute top-4">
              <CarvedLotusMotif size={130} />
            </div>
            <div className="absolute inset-0 opacity-40">
              <CarvedFoliageVine />
            </div>
          </div>

          {/* BOTTOM FLAP: Carved lotus, 'You are invited', 'TAP THE SEAL TO OPEN' */}
          <div 
            className="absolute bottom-0 inset-x-0 h-1/2 bg-carved-crimson preserve-3d transition-transform duration-1000 ease-in-out border-t border-[#C44D68]/40 overflow-hidden flex flex-col items-center justify-end pb-8"
            style={{
              clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
              transformOrigin: 'bottom center',
              transform: isUnfolded ? 'rotateX(-180deg)' : 'rotateX(0deg)',
            }}
          >
            <div className="relative z-10 flex flex-col items-center text-center px-4">
              <p className="font-serif italic text-2xl sm:text-3xl text-[#FFE6EE] tracking-wide drop-shadow mb-1">
                You are invited
              </p>
              <CarvedLotusMotif size={70} className="my-1 opacity-90" />
              <span className="font-royal text-[9px] sm:text-[10px] tracking-[0.3em] text-[#FFDF78]/90 uppercase font-semibold mt-1">
                Tap the seal to open
              </span>
            </div>
            <div className="absolute inset-0 opacity-35">
              <CarvedFoliageVine />
            </div>
          </div>

          {/* LEFT FLAP: Folds outward to the left */}
          <div 
            className="absolute inset-y-0 left-0 w-1/2 bg-carved-crimson preserve-3d transition-transform duration-1000 ease-in-out border-r border-[#C44D68]/40 overflow-hidden flex items-center pl-4"
            style={{
              clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
              transformOrigin: 'left center',
              transform: isUnfolded ? 'rotateY(-180deg)' : 'rotateY(0deg)',
            }}
          >
            <CarvedLotusMotif size={90} className="opacity-80" />
          </div>

          {/* RIGHT FLAP: Folds outward to the right */}
          <div 
            className="absolute inset-y-0 right-0 w-1/2 bg-carved-crimson preserve-3d transition-transform duration-1000 ease-in-out border-l border-[#C44D68]/40 overflow-hidden flex items-center justify-end pr-4"
            style={{
              clipPath: 'polygon(100% 0, 0 50%, 100% 100%)',
              transformOrigin: 'right center',
              transform: isUnfolded ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
          >
            <CarvedLotusMotif size={90} className="opacity-80" />
          </div>

          {/* CENTRAL RED WAX SEAL WITH "P & V" */}
          {!isUnfolded && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
              <CarvedWaxSeal 
                monogram={weddingData.monogram} 
                size={90} 
                isPulsing={true}
                onClick={handleOpen} 
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
