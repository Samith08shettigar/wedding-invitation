import React from 'react';
import { weddingData } from '../data/weddingData';
import { GoldDivider, FloralCornerBouquet, GoldCorner } from './decorations/GoldOrnaments';
import { ScallopedMughalArch, GoldLotus } from './decorations/IndianOrnaments';
import { DownArrow } from './DownArrow';
import { MapPin, ExternalLink } from 'lucide-react';

export const VenueDetails = () => {
  return (
    <section id="venue" className="relative w-full min-h-[860px] sm:min-h-[920px] flex flex-col items-center justify-between p-6 sm:p-10 bg-[#FAF5EB] text-[#3B030D] select-none overflow-hidden">
      
      {/* Background Parchment Texture */}
      <div className="absolute inset-0 bg-cream-parchment opacity-80 pointer-events-none" />

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

      {/* Header */}
      <div className="relative z-20 pt-10 sm:pt-14 text-center">
        <ScallopedMughalArch width={180} height={26} className="mx-auto mb-1" />
        <span className="font-royal text-[10px] sm:text-xs tracking-[0.3em] text-[#8C2A3E] uppercase font-semibold block mb-1">
          Palatial Destination
        </span>
        <h2 className="font-royal text-3xl sm:text-5xl text-[#781124] font-medium tracking-wider drop-shadow-sm">
          Venue Details
        </h2>
        <GoldDivider className="my-2.5" width="140px" />
      </div>

      {/* Scalloped Arch Palace Venue Vignette */}
      <div className="relative z-20 my-auto flex flex-col items-center text-center px-4 w-full max-w-lg">
        
        {/* Ornate Arch Vignette Frame */}
        <div className="relative w-full max-w-[340px] sm:max-w-[420px] h-48 sm:h-56 rounded-[36px] p-1.5 bg-gradient-to-br from-[#FFF2B2] via-[#D4AF37] to-[#8C610F] shadow-2xl group">
          <div className="relative w-full h-full rounded-[30px] overflow-hidden border-2 border-[#FAF5EB] bg-gradient-to-b from-[#8C2A49] to-[#F9C368]">
            <img 
              src={weddingData.images.venuePhoto} 
              alt={weddingData.venueName} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              onError={(e) => {
                e.currentTarget.src = "/images/venue-palace.webp";
              }}
            />
            {/* Subtle Vignette Shading */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#200108]/70 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Venue Title */}
        <h3 className="font-royal text-2xl sm:text-3xl text-[#781124] font-bold tracking-wide mt-6">
          {weddingData.venueName}
        </h3>

        {/* Address with Map Pin Icon */}
        <div className="flex items-start justify-center gap-2 mt-2 max-w-sm text-center">
          <MapPin className="w-5 h-5 text-[#AA7C11] shrink-0 mt-0.5" />
          <p className="font-serif italic text-base sm:text-lg text-[#5C1423] leading-relaxed font-medium">
            {weddingData.venueAddress}
          </p>
        </div>

        {/* Google Maps External Button */}
        <a 
          href={weddingData.googleMapsUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-5 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#3B030D] via-[#4A0A16] to-[#2B020B] text-[#FFDF78] border-2 border-[#D4AF37] text-xs sm:text-sm font-royal font-semibold tracking-wider shadow-xl hover:scale-105 hover:border-[#FFF2B2] transition-all"
        >
          <span>Get Directions on Google Maps</span>
          <ExternalLink className="w-4 h-4 text-[#FFDF78]" />
        </a>
      </div>

      {/* Bottom Down Arrow */}
      <div className="relative z-20 pb-6">
        <DownArrow targetId="closing" />
      </div>
    </section>
  );
};
