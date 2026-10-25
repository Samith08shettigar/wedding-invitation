import React, { useState } from 'react';
import { weddingData } from '../data/weddingData';
import { WeddingCourtyardScene } from './decorations/WeddingCourtyardScene';
import { CarvedWaxSeal } from './decorations/CarvedEnvelopeArtwork';
import { ChevronDown } from 'lucide-react';
import openingWebp from '../assets/opening.webp';
import openingPng from '../../IMG/opening.png';

/**
 * HERO COURTYARD & 4-PETAL CARVED ENVELOPE (Matches reference video)
 * Uses high-resolution carved crimson velvet envelope asset (opening.webp).
 * When tapped: all 4 petals unfold outward in 3D, revealing the magnificent
 * royal palace courtyard (background1.webp), mandap, and couple announcement.
 */
export const HeroCourtyard = ({ onStartMusic, onOpenComplete }) => {
  // State: 'sealed' | 'opening' | 'opened'
  const [openState, setOpenState] = useState('sealed');

  const handleOpen = () => {
    if (openState !== 'sealed') return;
    if (onStartMusic) onStartMusic();
    setOpenState('opening');

    // 2.4s total: allows the luxurious 2.2s petal unfolding to complete fully and gracefully
    setTimeout(() => {
      setOpenState('opened');
      if (onOpenComplete) onOpenComplete();
    }, 2400);
  };

  const handleSkip = (e) => {
    e.stopPropagation();
    if (onStartMusic) onStartMusic();
    setOpenState('opened');
    if (onOpenComplete) onOpenComplete();
    const target = document.getElementById('scratch-date');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isOpened = openState === 'opened';
  const isOpening = openState === 'opening' || isOpened;

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-between overflow-hidden select-none">
      
      {/* 1. COURTYARD BACKGROUND (background1.webp / png) */}
      <WeddingCourtyardScene />

      {/* 2. COURTYARD HERO TEXT (Floats cleanly inside the upper archway as petals unfold) */}
      <div 
        className={`relative z-20 pt-14 sm:pt-20 px-6 max-w-lg mx-auto text-center flex flex-col items-center transition-all duration-1200 ease-out ${
          isOpening ? 'opacity-100 translate-y-0 delay-700' : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
      >
        {/* Sacred Opening Verse */}
        <p className="font-serif italic text-xs sm:text-sm text-[#FFF5EB] tracking-wider leading-relaxed max-w-sm mb-3 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          {weddingData.openingBlessing}
        </p>

        {/* Couple Names (Priya & Varun) */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 my-1">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#FFFDF8] tracking-wide font-normal drop-shadow-[0_3px_10px_rgba(0,0,0,0.95)]">
            {weddingData.brideFirstName}
          </h1>
          <span className="font-serif italic text-2xl sm:text-3xl text-[#FFDF78] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">&amp;</span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#FFFDF8] tracking-wide font-normal drop-shadow-[0_3px_10px_rgba(0,0,0,0.95)]">
            {weddingData.groomFirstName}
          </h1>
        </div>

        {/* Seven Promises Tagline */}
        <p className="font-serif italic text-xs sm:text-sm text-[#FFE8B8] tracking-wide mt-2 font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
          {weddingData.openingTagline}
        </p>
      </div>

      {/* Down Chevron / Scroll Prompt (Visible once opened) */}
      {isOpened && (
        <div className="relative z-20 pb-20 flex flex-col items-center animate-bounce-slow">
          <a
            href="#scratch-date"
            className="flex flex-col items-center gap-1.5 text-[#FFF8EE] hover:text-[#FFDF78] transition-colors p-2"
            aria-label="Scroll to Save The Date"
          >
            <span className="font-serif italic text-xs tracking-widest text-[#FFF8EE] font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              Scroll to Explore
            </span>
            <div className="w-8 h-8 rounded-full border border-[#D4AF37] bg-[#2A050E]/85 backdrop-blur-md flex items-center justify-center shadow-lg">
              <ChevronDown className="w-4 h-4 text-[#FFDF78]" />
            </div>
          </a>
        </div>
      )}

      {/* 3. 4-PETAL CARVED ENVELOPE (Slowly and gracefully unfolds in 3D) */}
      {!isOpened && (
        <div 
          className={`absolute inset-0 z-30 perspective-1600 ${
            isOpening ? 'pointer-events-none' : 'pointer-events-auto cursor-pointer'
          }`}
          onClick={handleOpen}
        >
          {/* TOP PETAL */}
          <div 
            className="absolute top-0 inset-x-0 h-1/2 overflow-hidden"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              transformOrigin: 'top center',
              transform: isOpening ? 'rotateX(115deg) translateY(-30%) scaleY(0.7)' : 'rotateX(0deg) translateY(0) scaleY(1)',
              opacity: isOpening ? 0 : 1,
              transition: 'transform 2200ms cubic-bezier(0.25, 1, 0.4, 1), opacity 2000ms cubic-bezier(0.4, 0, 0.2, 1) 200ms',
            }}
          >
            <picture>
              <source srcSet={openingWebp} type="image/webp" />
              <img src={openingPng} alt="Envelope Top" className="w-full h-[200%] object-cover object-top pointer-events-none" />
            </picture>
          </div>

          {/* LEFT PETAL */}
          <div 
            className="absolute inset-y-0 left-0 w-1/2 overflow-hidden"
            style={{
              clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
              transformOrigin: 'left center',
              transform: isOpening ? 'rotateY(-115deg) translateX(-30%) scaleX(0.7)' : 'rotateY(0deg) translateX(0) scaleX(1)',
              opacity: isOpening ? 0 : 1,
              transition: 'transform 2200ms cubic-bezier(0.25, 1, 0.4, 1) 100ms, opacity 2000ms cubic-bezier(0.4, 0, 0.2, 1) 300ms',
            }}
          >
            <picture>
              <source srcSet={openingWebp} type="image/webp" />
              <img src={openingPng} alt="Envelope Left" className="w-[200%] h-full object-cover object-left pointer-events-none max-w-none" />
            </picture>
          </div>

          {/* RIGHT PETAL */}
          <div 
            className="absolute inset-y-0 right-0 w-1/2 overflow-hidden"
            style={{
              clipPath: 'polygon(100% 0, 0 50%, 100% 100%)',
              transformOrigin: 'right center',
              transform: isOpening ? 'rotateY(115deg) translateX(30%) scaleX(0.7)' : 'rotateY(0deg) translateX(0) scaleX(1)',
              opacity: isOpening ? 0 : 1,
              transition: 'transform 2200ms cubic-bezier(0.25, 1, 0.4, 1) 100ms, opacity 2000ms cubic-bezier(0.4, 0, 0.2, 1) 300ms',
            }}
          >
            <picture>
              <source srcSet={openingWebp} type="image/webp" />
              <img src={openingPng} alt="Envelope Right" className="w-[200%] h-full object-cover object-right pointer-events-none max-w-none -ml-[100%]" />
            </picture>
          </div>

          {/* BOTTOM PETAL */}
          <div 
            className="absolute bottom-0 inset-x-0 h-1/2 overflow-hidden"
            style={{
              clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
              transformOrigin: 'bottom center',
              transform: isOpening ? 'rotateX(-115deg) translateY(30%) scaleY(0.7)' : 'rotateX(0deg) translateY(0) scaleY(1)',
              opacity: isOpening ? 0 : 1,
              transition: 'transform 2200ms cubic-bezier(0.25, 1, 0.4, 1) 150ms, opacity 2000ms cubic-bezier(0.4, 0, 0.2, 1) 350ms',
            }}
          >
            <picture>
              <source srcSet={openingWebp} type="image/webp" />
              <img src={openingPng} alt="Envelope Bottom" className="w-full h-[200%] object-cover object-bottom pointer-events-none -mt-[100%]" />
            </picture>
          </div>

          {/* Sealed Invitation Text */}
          <div 
            className="absolute top-16 inset-x-0 flex flex-col items-center text-center px-4 pointer-events-none transition-all duration-600 ease-out"
            style={{
              opacity: isOpening ? 0 : 1,
              transform: isOpening ? 'translateY(-12px)' : 'translateY(0)',
            }}
          >
            <p className="font-serif italic text-2xl sm:text-3xl text-[#FFE6EE] tracking-wide drop-shadow-md mb-0.5">
              You are invited
            </p>
            <span className="font-royal text-[9px] sm:text-[10px] tracking-[0.3em] text-[#FFDF78]/90 uppercase font-semibold mt-1">
              Tap the seal to open
            </span>
          </div>

          {/* Central Red Wax Seal */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-500 ease-out"
            style={{
              opacity: isOpening ? 0 : 1,
              transform: isOpening ? 'translate(-50%, -50%) scale(1.15)' : 'translate(-50%, -50%) scale(1)',
              pointerEvents: isOpening ? 'none' : 'auto',
            }}
          >
            <CarvedWaxSeal 
              monogram={weddingData.monogram} 
              size={90} 
              isPulsing={!isOpening}
              onClick={handleOpen} 
            />
          </div>

        </div>
      )}

      {/* SKIP OPENING PILL BUTTON (Permanently in lower right corner matching video) */}
      <button
        onClick={handleSkip}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 px-3.5 py-1.5 rounded-full bg-[#4A0A16]/85 border border-[#E06B85]/60 text-[#FFE6EE] font-serif italic text-xs tracking-wider backdrop-blur-md shadow-lg hover:bg-[#680F22] hover:border-[#FFAAB8] transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
        aria-label="Skip opening to explore invitation"
      >
        <span>Skip opening</span>
        <span className="text-[12px] font-sans leading-none">&#8599;</span>
      </button>

    </section>
  );
};

