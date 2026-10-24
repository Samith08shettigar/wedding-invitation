import React from 'react';
import { weddingData } from '../data/weddingData';
import { MedallionMonogram, GoldDivider, FloralCornerBouquet, GoldCorner } from './decorations/GoldOrnaments';

export const InvitationCover = ({ onOpen }) => {
  return (
    <section 
      onClick={onOpen}
      className="relative w-full min-h-[780px] sm:min-h-[840px] flex flex-col items-center justify-between p-6 cursor-pointer bg-radial from-[#4A0A16] via-[#2D020B] to-[#140004] text-[#FAF4E8] select-none overflow-hidden transition-all duration-700 hover:brightness-105"
      style={{
        boxShadow: "inset 0 0 80px rgba(0, 0, 0, 0.8)",
      }}
    >
      {/* Outer & Inner Gold Ornamental Arch Border */}
      <div className="absolute inset-4 sm:inset-5 border border-[#D4AF37]/80 rounded-[28px] pointer-events-none">
        <div className="absolute inset-1.5 border border-dashed border-[#FFDF78]/40 rounded-[24px]" />
      </div>

      {/* 4 Vector Floral Corner Bouquets */}
      <FloralCornerBouquet position="top-left" className="absolute top-2 left-2 w-28 h-28" />
      <FloralCornerBouquet position="top-right" className="absolute top-2 right-2 w-28 h-28" />
      <FloralCornerBouquet position="bottom-left" className="absolute bottom-2 left-2 w-28 h-28" />
      <FloralCornerBouquet position="bottom-right" className="absolute bottom-2 right-2 w-28 h-28" />

      {/* Gold Corner Filigree */}
      <GoldCorner position="top-left" className="absolute top-5 left-5" />
      <GoldCorner position="top-right" className="absolute top-5 right-5" />
      <GoldCorner position="bottom-left" className="absolute bottom-5 left-5" />
      <GoldCorner position="bottom-right" className="absolute bottom-5 right-5" />

      {/* Top Scalloped Arch Accent */}
      <div className="relative z-10 pt-10 text-center">
        <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-2" />
      </div>

      {/* Central Section: Medallion & Title */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center px-4">
        {/* Intricate Gold Monogram Medallion */}
        <div className="animate-float-slow">
          <MedallionMonogram monogram={weddingData.monogram} />
        </div>

        {/* Title: Our Wedding Invitation */}
        <h1 className="font-royal text-2xl sm:text-3xl font-medium tracking-wider text-gold-shimmer mt-6 mb-2 drop-shadow-lg">
          Our Wedding Invitation
        </h1>

        {/* Gold Ornamental Rosette Divider */}
        <GoldDivider className="my-2" width="150px" />

        {/* Couple Subtitle */}
        <p className="font-serif italic text-base sm:text-lg text-[#F3E5C8]/80 tracking-wide mt-1">
          {weddingData.brideFirstName} &amp; {weddingData.groomFirstName}
        </p>
      </div>

      {/* Bottom Section: Tap to Open Button */}
      <div className="relative z-10 pb-8 flex flex-col items-center text-center">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
          }}
          className="group relative flex flex-col items-center focus:outline-none"
          aria-label="Tap to Open Wedding Invitation"
        >
          {/* Pulsing Circular Gold Icon */}
          <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37] bg-[#3B030D] flex items-center justify-center shadow-lg animate-pulse-gold group-hover:scale-110 transition-transform">
            <svg 
              className="w-5 h-5 text-[#FFDF78] transform group-hover:translate-y-0.5 transition-transform" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" fill="#D4AF37" />
              <circle cx="12" cy="12" r="8" stroke="#D4AF37" strokeDasharray="3 3" />
            </svg>
          </div>

          <span className="font-serif italic text-sm tracking-widest text-[#FFDF78] mt-2 group-hover:text-white transition-colors">
            Tap to Open
          </span>
        </button>
      </div>
    </section>
  );
};
