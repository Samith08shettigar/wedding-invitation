import React from 'react';
import { weddingData } from '../data/weddingData';
import { GoldDivider, FloralCornerBouquet, GoldCorner } from './decorations/GoldOrnaments';
import { DownArrow } from './DownArrow';
import { MapPin, ExternalLink } from 'lucide-react';

export const VenueDetails = () => {
  return (
    <section id="venue" className="relative w-full min-h-[820px] sm:min-h-[880px] flex flex-col items-center justify-between p-6 bg-[#FAF5EB] text-[#3B030D] select-none overflow-hidden">
      
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

      {/* Header */}
      <div className="relative z-10 pt-10 text-center">
        <h2 className="font-royal text-3xl sm:text-4xl text-[#781124] font-medium tracking-wider drop-shadow-sm">
          Venue
        </h2>
        <GoldDivider className="my-2" width="130px" />
      </div>

      {/* Scalloped Arch Palace Venue Vignette */}
      <div className="relative z-10 my-auto flex flex-col items-center text-center px-4 w-full max-w-sm">
        
        {/* Ornate Arch Vignette Frame */}
        <div className="relative w-64 sm:w-72 h-44 sm:h-48 rounded-[36px] p-1.5 bg-gradient-to-br from-[#FFF2B2] via-[#D4AF37] to-[#8C610F] shadow-xl">
          <div className="relative w-full h-full rounded-[30px] overflow-hidden border-2 border-[#FAF5EB] bg-gradient-to-b from-[#8C2A49] to-[#F9C368]">
            <img 
              src={weddingData.images.venuePhoto} 
              alt={weddingData.venueName} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1599818816942-e19574347717?auto=format&fit=crop&w=800&q=80";
              }}
            />
            {/* Subtle Vignette Shading */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3B030D]/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Venue Title */}
        <h3 className="font-royal text-xl sm:text-2xl text-[#781124] font-semibold tracking-wide mt-5">
          {weddingData.venueName}
        </h3>

        {/* Address with Map Pin Icon */}
        <div className="flex items-start justify-center gap-2 mt-2 max-w-xs text-center">
          <MapPin className="w-4 h-4 text-[#AA7C11] shrink-0 mt-1" />
          <p className="font-serif italic text-sm sm:text-base text-[#5C1423] leading-relaxed">
            {weddingData.venueAddress}
          </p>
        </div>

        {/* Google Maps External Button */}
        <a 
          href={weddingData.googleMapsUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-4 px-4 py-1.5 rounded-full bg-[#3B030D] text-[#FFDF78] border border-[#D4AF37] text-xs font-serif tracking-wider shadow-md hover:bg-[#5C0A19] hover:scale-105 transition-all"
        >
          <span>View on Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Bottom Down Arrow */}
      <div className="relative z-10 pb-4">
        <DownArrow targetId="closing" />
      </div>
    </section>
  );
};
