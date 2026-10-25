import React from 'react';
import { weddingData } from '../data/weddingData';
import { WeddingCourtyardScene } from './decorations/WeddingCourtyardScene';
import { ChevronDown } from 'lucide-react';

/**
 * ROYAL COURTYARD HERO SECTION (Section 1 of Wedding Page)
 * Displays the magnificent Rajput palace pavilion archway (background1.webp),
 * mandap canopy, sunset sky, lanterns, and royal couple announcement.
 */
export const HeroCourtyard = () => {
  return (
    <section id="courtyard" className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-between overflow-hidden select-none">
      
      {/* 1. COURTYARD BACKGROUND (background1.webp / png with floating dust) */}
      <WeddingCourtyardScene />

      {/* 2. COURTYARD HERO TEXT (Framed within the upper scalloped archway) */}
      <div className="relative z-20 pt-16 sm:pt-24 px-6 max-w-lg mx-auto text-center flex flex-col items-center animate-fade-in">
        
        {/* Sacred Opening Verse */}
        <p className="font-serif italic text-xs sm:text-sm text-[#FFF5EB] tracking-wider leading-relaxed max-w-sm mb-3 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
          {weddingData.openingBlessing}
        </p>

        {/* Couple Names (Priya & Varun) */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 my-1">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#FFFDF8] tracking-wide font-normal drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]">
            {weddingData.brideFirstName}
          </h1>
          <span className="font-serif italic text-2xl sm:text-3xl text-[#FFDF78] drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">&amp;</span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#FFFDF8] tracking-wide font-normal drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]">
            {weddingData.groomFirstName}
          </h1>
        </div>

        {/* Seven Promises Tagline */}
        <p className="font-serif italic text-xs sm:text-sm text-[#FFE8B8] tracking-wide mt-2 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
          {weddingData.openingTagline}
        </p>
      </div>

      {/* 3. SCROLL DOWN PROMPT TO SAVE THE DATE */}
      <div className="relative z-20 pb-16 sm:pb-20 flex flex-col items-center animate-bounce-slow">
        <a
          href="#scratch-date"
          className="flex flex-col items-center gap-2 text-[#FFF8EE] hover:text-[#FFDF78] transition-colors p-2"
          aria-label="Scroll to Save The Date"
        >
          <span className="font-serif italic text-xs tracking-widest text-[#FFF8EE] font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            Scroll to Explore
          </span>
          <div className="w-9 h-9 rounded-full border border-[#D4AF37] bg-[#2A050E]/85 backdrop-blur-md flex items-center justify-center shadow-xl">
            <ChevronDown className="w-4 h-4 text-[#FFDF78]" />
          </div>
        </a>
      </div>

    </section>
  );
};

export default HeroCourtyard;
