import React from 'react';
import { weddingData } from '../data/weddingData';
import { GoldDivider, FloralCornerBouquet, GoldCorner } from './decorations/GoldOrnaments';
import { DownArrow } from './DownArrow';

export const CoupleIntroduction = () => {
  return (
    <section id="couple" className="relative w-full min-h-[820px] sm:min-h-[880px] flex flex-col items-center justify-between p-6 bg-[#FAF5EB] text-[#3B030D] select-none overflow-hidden">
      
      {/* Outer & Inner Gold Card Borders */}
      <div className="absolute inset-4 sm:inset-5 border border-[#D4AF37]/80 rounded-[28px] pointer-events-none">
        <div className="absolute inset-1.5 border border-dashed border-[#AA7C11]/30 rounded-[24px]" />
      </div>

      {/* 4 Corner Floral Bouquets */}
      <FloralCornerBouquet position="top-left" className="absolute top-2 left-2 w-28 h-28" />
      <FloralCornerBouquet position="top-right" className="absolute top-2 right-2 w-28 h-28" />
      <FloralCornerBouquet position="bottom-left" className="absolute bottom-2 left-2 w-28 h-28" />
      <FloralCornerBouquet position="bottom-right" className="absolute bottom-2 right-2 w-28 h-28" />

      {/* Gold Corner Filigree */}
      <GoldCorner position="top-left" className="absolute top-5 left-5" />
      <GoldCorner position="top-right" className="absolute top-5 right-5" />
      <GoldCorner position="bottom-left" className="absolute bottom-5 left-5" />
      <GoldCorner position="bottom-right" className="absolute bottom-5 right-5" />

      {/* Header Section */}
      <div className="relative z-10 pt-10 text-center">
        <h2 className="font-serif italic text-3xl sm:text-4xl text-[#781124] tracking-wide drop-shadow-sm">
          Our Beautiful Couple
        </h2>
        <GoldDivider className="my-2" width="130px" />
      </div>

      {/* Central Couple Portraits & Names */}
      <div className="relative z-10 my-auto flex flex-col items-center text-center px-4">
        
        {/* Two Circular Framed Photos */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6">
          
          {/* Bride Photo Frame */}
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-br from-[#FFF2B2] via-[#D4AF37] to-[#8C610F] shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#FAF5EB] bg-[#F5DE88]">
                <img 
                  src={weddingData.images.bridePhoto} 
                  alt={weddingData.brideName} 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to elegant portrait avatar if network image is blocked
                    e.currentTarget.src = "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80";
                  }}
                />
              </div>
            </div>
            <span className="font-royal text-xs tracking-widest text-[#781124] font-semibold mt-2 uppercase">
              The Bride
            </span>
          </div>

          {/* Groom Photo Frame */}
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-br from-[#FFF2B2] via-[#D4AF37] to-[#8C610F] shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#FAF5EB] bg-[#F5DE88]">
                <img 
                  src={weddingData.images.groomPhoto} 
                  alt={weddingData.groomName} 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80";
                  }}
                />
              </div>
            </div>
            <span className="font-royal text-xs tracking-widest text-[#781124] font-semibold mt-2 uppercase">
              The Groom
            </span>
          </div>
        </div>

        {/* Full Names */}
        <h3 className="font-serif italic text-2xl sm:text-3xl text-[#781124] font-medium tracking-wide">
          {weddingData.brideName}
        </h3>
        
        <span className="font-serif italic text-xl text-[#AA7C11] my-0.5">&amp;</span>
        
        <h3 className="font-serif italic text-2xl sm:text-3xl text-[#781124] font-medium tracking-wide">
          {weddingData.groomName}
        </h3>

        {/* Gold Divider */}
        <GoldDivider className="my-3" width="140px" />

        {/* Tagline */}
        <p className="font-serif italic text-sm sm:text-base text-[#5C1423] tracking-wider max-w-xs">
          &ldquo;{weddingData.subtitle}&rdquo;
        </p>
      </div>

      {/* Bottom Down Arrow */}
      <div className="relative z-10 pb-4">
        <DownArrow targetId="save-the-date" />
      </div>
    </section>
  );
};
