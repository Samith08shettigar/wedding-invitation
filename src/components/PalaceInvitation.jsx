import React from 'react';
import { weddingData } from '../data/weddingData';
import { SunsetPalaceScene, GoldDivider, FloralCornerBouquet, GoldCorner } from './decorations/GoldOrnaments';
import { GoldLotus, ScallopedMughalArch, RoyalMandala } from './decorations/IndianOrnaments';
import { DownArrow } from './DownArrow';

export const PalaceInvitation = () => {
  return (
    <section id="home" className="relative w-full min-h-[860px] sm:min-h-[920px] flex flex-col items-center justify-between p-4 sm:p-8 overflow-hidden select-none">
      {/* Code-Generated Sunset Palace Background Scene */}
      <SunsetPalaceScene className="z-0" showFlowers={true} />

      {/* Subtle Rotating Gold Mandala in Background */}
      <div className="absolute top-[28%] left-1/2 -translate-x-1/2 pointer-events-none z-5">
        <RoyalMandala size={360} opacity={0.12} className="animate-mandala-spin" />
      </div>

      {/* Top Spacer allowing Grand Central Dome to be admired */}
      <div className="relative z-10 pt-12 sm:pt-16" />

      {/* Centered Scalloped Ivory Royal Invitation Announcement Card */}
      <div 
        className="relative z-10 w-full max-w-[360px] sm:max-w-[440px] md:max-w-[480px] bg-[#FAF5EB] rounded-[40px] border-2 border-[#D4AF37] p-6 sm:p-9 my-auto flex flex-col items-center text-center shadow-2xl animate-fade-in-scale"
        style={{
          boxShadow: '0 25px 60px -12px rgba(0,0,0,0.8), 0 0 35px rgba(212,175,55,0.35)',
        }}
      >
        {/* Scalloped Mughal Ogee Arch Top Crown */}
        <ScallopedMughalArch width={200} height={28} className="-mt-3 mb-2" />

        {/* Inner Dotted Gold Lining */}
        <div className="absolute inset-2.5 sm:inset-3.5 border border-dashed border-[#D4AF37]/50 rounded-[34px] pointer-events-none" />

        {/* 4 Corner Floral Flourishes */}
        <FloralCornerBouquet position="top-left" className="absolute top-1 left-1 w-20 h-20 opacity-80" />
        <FloralCornerBouquet position="top-right" className="absolute top-1 right-1 w-20 h-20 opacity-80" />
        <GoldCorner position="bottom-left" className="absolute bottom-3 left-3 opacity-60" />
        <GoldCorner position="bottom-right" className="absolute bottom-3 right-3 opacity-60" />

        {/* Sacred Gold Lotus */}
        <GoldLotus size={32} className="mb-2" />

        {/* Invitation Intro */}
        <p className="font-serif text-xs sm:text-sm text-[#5C1423] tracking-widest leading-relaxed uppercase px-2 mb-2 font-medium">
          Together with our families<br />
          we cordially invite you to the<br />
          <span className="font-royal text-xs sm:text-sm tracking-[0.25em] font-semibold text-[#8C2A3E]">Wedding of</span>
        </p>

        {/* Bride Name in Great Vibes Cursive */}
        <h1 className="font-cursive text-5xl sm:text-6xl md:text-7xl text-[#781124] tracking-wide my-1 drop-shadow-sm">
          {weddingData.brideFirstName}
        </h1>

        {/* Golden Ampersand */}
        <div className="my-0.5 flex items-center justify-center">
          <span className="font-serif italic text-2xl sm:text-3xl text-[#AA7C11] font-semibold">&amp;</span>
        </div>

        {/* Groom Name in Great Vibes Cursive */}
        <h1 className="font-cursive text-5xl sm:text-6xl md:text-7xl text-[#781124] tracking-wide my-1 drop-shadow-sm">
          {weddingData.groomFirstName}
        </h1>

        {/* Wedding Date */}
        <p className="font-royal text-base sm:text-xl text-[#3B030D] font-semibold tracking-widest mt-4">
          {weddingData.displayDate}
        </p>

        {/* Gold Ornamental Divider */}
        <GoldDivider className="my-2" width="150px" />

        {/* Venue Hint */}
        <p className="font-serif text-xs sm:text-sm text-[#781124]/90 tracking-wider mt-0.5 font-medium">
          {weddingData.venueName} &bull; Bengaluru
        </p>
      </div>

      {/* Bottom Bouncing Navigation Down Arrow */}
      <div className="relative z-10 pb-6">
        <DownArrow targetId="couple" />
      </div>
    </section>
  );
};
