import React from 'react';
import { weddingData } from '../data/weddingData';
import { GoldDivider, VerticalGoldDivider, FloralCornerBouquet, GoldCorner } from './decorations/GoldOrnaments';
import { ScallopedMughalArch, GoldLotus, RoyalMandala } from './decorations/IndianOrnaments';
import { DownArrow } from './DownArrow';

export const InvitationMessage = () => {
  return (
    <>
      {/* SCREEN 7: INVITATION MESSAGE CARD */}
      <section id="message" className="relative w-full min-h-[860px] sm:min-h-[920px] flex flex-col items-center justify-between p-6 sm:p-10 bg-[#FAF5EB] text-[#3B030D] select-none overflow-hidden">
        
        {/* Ivory Parchment Texture */}
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

        {/* Top Spacer */}
        <div className="relative z-20 pt-10" />

        {/* Central Message Content */}
        <div className="relative z-20 my-auto flex flex-col items-center text-center px-4 max-w-lg">
          <ScallopedMughalArch width={180} height={26} className="mb-2" />
          <GoldLotus size={32} className="mb-2" />

          {/* Opening Invitation Verse */}
          <h2 className="font-serif italic text-3xl sm:text-4xl text-[#781124] leading-relaxed tracking-wide font-normal">
            With great joy<br />
            we invite you to be a part of<br />
            <span className="font-royal text-2xl sm:text-3xl text-[#3B030D] font-semibold not-italic">our special day</span>
          </h2>

          <GoldDivider className="my-5" width="160px" />

          {/* Heartfelt Body Text */}
          <p className="font-serif italic text-base sm:text-xl text-[#5C1423] leading-relaxed tracking-wide mb-6 font-medium">
            &ldquo;{weddingData.invitationMessageBody}&rdquo;
          </p>

          {/* Signoff */}
          <div className="mt-2">
            <span className="font-serif italic text-base text-[#AA7C11] block mb-1 font-semibold">
              With love &amp; blessings,
            </span>
            <span className="font-royal text-lg sm:text-xl text-[#781124] font-bold tracking-wider">
              {weddingData.invitationClosingFamily}
            </span>
          </div>

          <GoldDivider className="my-4" width="130px" />
        </div>

        {/* Bottom Down Arrow */}
        <div className="relative z-20 pb-6">
          <DownArrow targetId="families" />
        </div>
      </section>

      {/* SCREEN 8: FROM OUR FAMILIES (PARENTS SECTION) */}
      <section id="families" className="relative w-full min-h-[860px] sm:min-h-[920px] flex flex-col items-center justify-between p-6 sm:p-10 bg-[#FAF5EB] text-[#3B030D] select-none overflow-hidden">
        
        {/* Ivory Parchment Texture */}
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
        <div className="relative z-20 pt-12 sm:pt-16 text-center">
          <ScallopedMughalArch width={180} height={26} className="mx-auto mb-1" />
          <span className="font-royal text-[10px] sm:text-xs tracking-[0.3em] text-[#8C2A3E] uppercase font-semibold block mb-1">
            Cordial Invitation
          </span>
          <h2 className="font-royal text-2xl sm:text-4xl text-[#781124] font-semibold tracking-wider">
            {weddingData.familyDetails.heading}
          </h2>
          <div className="w-6 h-6 mx-auto my-1 flex items-center justify-center text-[#D4AF37]">
            &#10018;
          </div>
        </div>

        {/* Two Columns Separated by Vertical Gold Divider */}
        <div className="relative z-20 my-auto flex flex-col sm:flex-row items-center justify-center w-full max-w-xl px-4 gap-6 sm:gap-4">
          
          {/* Bride's Parents Column */}
          <div className="flex-1 flex flex-col items-center text-center px-3 py-2 bg-[#FFFDF7]/60 rounded-2xl border border-[#D4AF37]/30 shadow-sm w-full sm:w-auto">
            <span className="font-royal text-[10px] tracking-widest text-[#8C2A3E] font-semibold uppercase mb-2">
              {weddingData.familyDetails.brideParents.title}
            </span>
            <p className="font-serif text-lg sm:text-xl text-[#3B030D] font-medium leading-snug">
              {weddingData.familyDetails.brideParents.father}
            </p>
            <span className="font-serif italic text-base text-[#AA7C11] my-1 font-semibold">&amp;</span>
            <p className="font-serif text-lg sm:text-xl text-[#3B030D] font-medium leading-snug">
              {weddingData.familyDetails.brideParents.mother}
            </p>
          </div>

          {/* Central Vertical Gold Divider */}
          <VerticalGoldDivider height="130px" className="mx-2 shrink-0 hidden sm:flex" />

          {/* Groom's Parents Column */}
          <div className="flex-1 flex flex-col items-center text-center px-3 py-2 bg-[#FFFDF7]/60 rounded-2xl border border-[#D4AF37]/30 shadow-sm w-full sm:w-auto">
            <span className="font-royal text-[10px] tracking-widest text-[#8C2A3E] font-semibold uppercase mb-2">
              {weddingData.familyDetails.groomParents.title}
            </span>
            <p className="font-serif text-lg sm:text-xl text-[#3B030D] font-medium leading-snug">
              {weddingData.familyDetails.groomParents.father}
            </p>
            <span className="font-serif italic text-base text-[#AA7C11] my-1 font-semibold">&amp;</span>
            <p className="font-serif text-lg sm:text-xl text-[#3B030D] font-medium leading-snug">
              {weddingData.familyDetails.groomParents.mother}
            </p>
          </div>
        </div>

        {/* Lower Note & Down Arrow */}
        <div className="relative z-20 pb-6 flex flex-col items-center text-center px-4 max-w-md">
          <GoldDivider className="my-2.5" width="150px" />
          <p className="font-serif italic text-sm sm:text-base text-[#5C1423] tracking-wide mb-3 font-medium">
            {weddingData.familyDetails.subheading}
          </p>
          <DownArrow targetId="events" />
        </div>
      </section>
    </>
  );
};
