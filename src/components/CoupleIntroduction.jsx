import React from 'react';
import { weddingData } from '../data/weddingData';
import { GoldDivider, FloralCornerBouquet, GoldCorner } from './decorations/GoldOrnaments';
import { GoldLotus, ScallopedMughalArch, RoyalMandala } from './decorations/IndianOrnaments';
import { DownArrow } from './DownArrow';

export const CoupleIntroduction = () => {
  return (
    <section id="couple" className="relative w-full min-h-[860px] sm:min-h-[920px] flex flex-col items-center justify-between p-6 sm:p-10 bg-[#FAF5EB] text-[#3B030D] select-none overflow-hidden">
      
      {/* Background Indian Jaali Texture with low opacity */}
      <div className="absolute inset-0 bg-cream-parchment opacity-80 pointer-events-none" />

      {/* Subtle Background Gold Mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <RoyalMandala size={420} opacity={0.08} className="animate-mandala-spin" />
      </div>

      {/* Outer & Inner Gold Card Borders */}
      <div className="absolute inset-4 sm:inset-6 border-2 border-[#D4AF37]/90 rounded-[32px] pointer-events-none z-10">
        <div className="absolute inset-2 border border-dashed border-[#AA7C11]/35 rounded-[26px]" />
      </div>

      {/* 4 Corner Floral Bouquets */}
      <FloralCornerBouquet position="top-left" className="absolute top-3 left-3 w-28 h-28 sm:w-36 sm:h-36 z-15" />
      <FloralCornerBouquet position="top-right" className="absolute top-3 right-3 w-28 h-28 sm:w-36 sm:h-36 z-15" />
      <FloralCornerBouquet position="bottom-left" className="absolute bottom-3 left-3 w-28 h-28 sm:w-36 sm:h-36 z-15" />
      <FloralCornerBouquet position="bottom-right" className="absolute bottom-3 right-3 w-28 h-28 sm:w-36 sm:h-36 z-15" />

      {/* Gold Corner Filigree */}
      <GoldCorner position="top-left" className="absolute top-6 left-6 z-15" />
      <GoldCorner position="top-right" className="absolute top-6 right-6 z-15" />
      <GoldCorner position="bottom-left" className="absolute bottom-6 left-6 z-15" />
      <GoldCorner position="bottom-right" className="absolute bottom-6 right-6 z-15" />

      {/* Header Section */}
      <div className="relative z-20 pt-10 sm:pt-14 text-center">
        <ScallopedMughalArch width={180} height={26} className="mx-auto mb-1" />
        <span className="font-royal text-[10px] sm:text-xs tracking-[0.3em] text-[#8C2A3E] uppercase font-semibold block mb-1">
          With Sacred Blessings
        </span>
        <h2 className="font-serif italic text-3xl sm:text-5xl text-[#781124] tracking-wide drop-shadow-sm font-normal">
          Our Beautiful Couple
        </h2>
        <GoldDivider className="my-2.5" width="140px" />
      </div>

      {/* Central Couple Portraits & Names */}
      <div className="relative z-20 my-auto flex flex-col items-center text-center px-4 max-w-2xl w-full">
        
        {/* Two Jharokha Circular Framed Photos Side-by-Side (matching screen_04.png) */}
        <div className="flex flex-row items-center justify-center gap-4 sm:gap-10 mb-6">
          
          {/* Bride Photo Frame */}
          <div className="flex flex-col items-center group">
            <div className="relative w-28 h-28 sm:w-40 sm:h-40 rounded-full p-1.5 bg-gradient-to-br from-[#FFF2B2] via-[#D4AF37] to-[#8C610F] shadow-2xl transition-transform duration-500 group-hover:scale-105">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#FAF5EB] bg-[#F5DE88]">
                <img 
                  src={weddingData.images.bridePhoto} 
                  alt={weddingData.brideName} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "/images/couple-bride.webp";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Groom Photo Frame */}
          <div className="flex flex-col items-center group">
            <div className="relative w-28 h-28 sm:w-40 sm:h-40 rounded-full p-1.5 bg-gradient-to-br from-[#FFF2B2] via-[#D4AF37] to-[#8C610F] shadow-2xl transition-transform duration-500 group-hover:scale-105">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#FAF5EB] bg-[#F5DE88]">
                <img 
                  src={weddingData.images.groomPhoto} 
                  alt={weddingData.groomName} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "/images/couple-groom.webp";
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Couple Names (Centered below photos) */}
        <div className="flex flex-col items-center text-center mt-2 mb-1">
          <h3 className="font-serif italic text-2xl sm:text-4xl text-[#781124] font-medium tracking-wide">
            {weddingData.brideName}
          </h3>
          <span className="font-serif italic text-xl sm:text-2xl text-[#AA7C11] my-0.5 font-semibold">&amp;</span>
          <h3 className="font-serif italic text-2xl sm:text-4xl text-[#781124] font-medium tracking-wide">
            {weddingData.groomName}
          </h3>
        </div>

        {/* Gold Divider */}
        <GoldDivider className="my-3" width="160px" />

        {/* Tagline */}
        <p className="font-serif italic text-base sm:text-lg text-[#5C1423] tracking-widest max-w-md font-medium leading-relaxed">
          &ldquo;{weddingData.subtitle}&rdquo;
        </p>
      </div>

      {/* Bottom Down Arrow */}
      <div className="relative z-20 pb-6">
        <DownArrow targetId="save-the-date" />
      </div>
    </section>
  );
};
