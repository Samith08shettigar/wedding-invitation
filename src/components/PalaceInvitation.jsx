import React from 'react';
import { weddingData } from '../data/weddingData';
import { SunsetPalaceScene, GoldDivider, FloralCornerBouquet } from './decorations/GoldOrnaments';
import { DownArrow } from './DownArrow';

export const PalaceInvitation = () => {
  return (
    <section id="home" className="relative w-full min-h-[820px] sm:min-h-[880px] flex flex-col items-center justify-between p-4 sm:p-6 overflow-hidden select-none">
      {/* Code-Generated Sunset Palace Background Scene */}
      <SunsetPalaceScene className="z-0" showFlowers={true} />

      {/* Top Spacer allowing Grand Central Dome to be fully visible */}
      <div className="relative z-10 pt-16 sm:pt-20" />

      {/* Centered Scalloped / Ogee Arched Cream Invitation Card */}
      <div 
        className="relative z-10 w-full max-w-[340px] sm:max-w-[350px] bg-[#FAF5EB] rounded-[36px] border-2 border-[#D4AF37] p-6 sm:p-7 my-auto flex flex-col items-center text-center shadow-2xl animate-fade-in-scale"
        style={{
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.75), 0 0 25px rgba(212,175,55,0.3)',
        }}
      >
        {/* Scalloped Ogee Arch Top Crown */}
        <div className="w-full flex justify-center -mt-2 mb-2">
          <svg width="180" height="26" viewBox="0 0 180 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 24 C30 24 50 16 65 10 C75 6 82 2 90 0 C98 2 105 6 115 10 C130 16 150 24 180 24"
              stroke="#D4AF37"
              strokeWidth="1.5"
              fill="none"
            />
            <circle cx="90" cy="2" r="2.5" fill="#D4AF37" />
          </svg>
        </div>

        {/* Inner Dotted Gold Frame */}
        <div className="absolute inset-2 sm:inset-3 border border-dashed border-[#D4AF37]/50 rounded-[30px] pointer-events-none" />

        {/* Corner Floral Bouquets on Card */}
        <FloralCornerBouquet position="top-left" className="absolute top-1 left-1 w-16 h-16 opacity-75" />
        <FloralCornerBouquet position="top-right" className="absolute top-1 right-1 w-16 h-16 opacity-75" />

        {/* Invitation Intro */}
        <p className="font-serif text-xs sm:text-sm text-[#5C1423] tracking-wider leading-relaxed uppercase px-2 mb-2">
          Together with our families<br />
          we cordially invite you to the<br />
          <span className="font-royal text-xs tracking-[0.2em] font-semibold text-[#8C2A3E]">Wedding of</span>
        </p>

        {/* Bride Name in Great Vibes Cursive */}
        <h1 className="font-cursive text-5xl sm:text-6xl text-[#781124] tracking-wide my-1 drop-shadow-sm">
          {weddingData.brideFirstName}
        </h1>

        {/* Golden Ampersand */}
        <div className="my-0.5 flex items-center justify-center">
          <span className="font-serif italic text-2xl text-[#AA7C11] font-semibold">&amp;</span>
        </div>

        {/* Groom Name in Great Vibes Cursive */}
        <h1 className="font-cursive text-5xl sm:text-6xl text-[#781124] tracking-wide my-1 drop-shadow-sm">
          {weddingData.groomFirstName}
        </h1>

        {/* Wedding Date */}
        <p className="font-royal text-base sm:text-lg text-[#3B030D] font-medium tracking-widest mt-3">
          {weddingData.displayDate}
        </p>

        {/* Gold Ornamental Divider */}
        <GoldDivider className="my-1.5" width="130px" />

        {/* Venue Hint */}
        <p className="font-serif text-xs text-[#781124]/80 tracking-wide mt-0.5">
          {weddingData.venueName} &bull; Bengaluru
        </p>
      </div>

      {/* Bottom Bouncing Navigation Down Arrow */}
      <div className="relative z-10 pb-4">
        <DownArrow targetId="couple" />
      </div>
    </section>
  );
};
