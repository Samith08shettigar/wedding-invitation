import React from 'react';
import { weddingData } from '../data/weddingData';
import { GoldDivider, VerticalGoldDivider, FloralCornerBouquet, GoldCorner } from './decorations/GoldOrnaments';
import { DownArrow } from './DownArrow';

export const InvitationMessage = () => {
  return (
    <>
      {/* SCREEN 7: INVITATION MESSAGE CARD */}
      <section id="message" className="relative w-full min-h-[820px] sm:min-h-[880px] flex flex-col items-center justify-between p-6 bg-[#FAF5EB] text-[#3B030D] select-none overflow-hidden">
        
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

        {/* Top Spacer */}
        <div className="relative z-10 pt-8" />

        {/* Central Message Content */}
        <div className="relative z-10 my-auto flex flex-col items-center text-center px-4 max-w-sm">
          
          {/* Opening Invitation Verse */}
          <h2 className="font-serif italic text-2xl sm:text-3xl text-[#781124] leading-relaxed tracking-wide">
            With great joy<br />
            we invite you to be a part of<br />
            <span className="font-royal text-xl sm:text-2xl text-[#3B030D] font-semibold not-italic">our special day</span>
          </h2>

          <GoldDivider className="my-5" width="150px" />

          {/* Heartfelt Body Text */}
          <p className="font-serif italic text-base sm:text-lg text-[#5C1423] leading-relaxed tracking-wide mb-6">
            {weddingData.invitationMessageBody}
          </p>

          {/* Signoff */}
          <div className="mt-2">
            <span className="font-serif italic text-sm text-[#AA7C11] block mb-1">
              With love,
            </span>
            <span className="font-royal text-base sm:text-lg text-[#781124] font-semibold tracking-wider">
              {weddingData.invitationClosingFamily}
            </span>
          </div>

          <GoldDivider className="my-4" width="120px" />
        </div>

        {/* Bottom Down Arrow */}
        <div className="relative z-10 pb-4">
          <DownArrow targetId="families" />
        </div>
      </section>

      {/* SCREEN 8: FROM OUR FAMILIES (PARENTS SECTION) */}
      <section id="families" className="relative w-full min-h-[820px] sm:min-h-[880px] flex flex-col items-center justify-between p-6 bg-[#FAF5EB] text-[#3B030D] select-none overflow-hidden">
        
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
        <div className="relative z-10 pt-12 text-center">
          <h2 className="font-royal text-2xl sm:text-3xl text-[#781124] font-semibold tracking-wider">
            {weddingData.familyDetails.heading}
          </h2>
          <div className="w-6 h-6 mx-auto my-1 flex items-center justify-center text-[#D4AF37]">
            &#10018;
          </div>
        </div>

        {/* Two Columns Separated by Vertical Gold Divider */}
        <div className="relative z-10 my-auto flex items-center justify-center w-full max-w-sm px-2">
          
          {/* Bride's Parents Column */}
          <div className="flex-1 flex flex-col items-center text-center px-2">
            <h3 className="font-serif italic text-sm sm:text-base text-[#8C2A3E] font-semibold tracking-wider uppercase mb-2">
              {weddingData.familyDetails.brideParents.title}
            </h3>
            <p className="font-serif text-base sm:text-lg text-[#3B030D] font-medium leading-snug">
              {weddingData.familyDetails.brideParents.father}
            </p>
            <span className="font-serif italic text-sm text-[#AA7C11] my-1">&amp;</span>
            <p className="font-serif text-base sm:text-lg text-[#3B030D] font-medium leading-snug">
              {weddingData.familyDetails.brideParents.mother}
            </p>
          </div>

          {/* Central Vertical Gold Divider */}
          <VerticalGoldDivider height="130px" className="mx-2 shrink-0" />

          {/* Groom's Parents Column */}
          <div className="flex-1 flex flex-col items-center text-center px-2">
            <h3 className="font-serif italic text-sm sm:text-base text-[#8C2A3E] font-semibold tracking-wider uppercase mb-2">
              {weddingData.familyDetails.groomParents.title}
            </h3>
            <p className="font-serif text-base sm:text-lg text-[#3B030D] font-medium leading-snug">
              {weddingData.familyDetails.groomParents.father}
            </p>
            <span className="font-serif italic text-sm text-[#AA7C11] my-1">&amp;</span>
            <p className="font-serif text-base sm:text-lg text-[#3B030D] font-medium leading-snug">
              {weddingData.familyDetails.groomParents.mother}
            </p>
          </div>
        </div>

        {/* Lower Note & Down Arrow */}
        <div className="relative z-10 pb-4 flex flex-col items-center text-center px-4">
          <GoldDivider className="my-3" width="140px" />
          <p className="font-serif italic text-sm text-[#5C1423] tracking-wide mb-3">
            {weddingData.familyDetails.subheading}
          </p>
          <DownArrow targetId="schedule" />
        </div>
      </section>
    </>
  );
};
