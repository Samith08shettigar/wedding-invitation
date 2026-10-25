import React from 'react';
import { weddingData } from '../data/weddingData';
import { GoldDivider, FloralCornerBouquet, GoldCorner, ScheduleBadge } from './decorations/GoldOrnaments';
import { ScallopedMughalArch, GoldLotus } from './decorations/IndianOrnaments';
import { DownArrow } from './DownArrow';

export const EventSchedule = () => {
  return (
    <section id="events" className="relative w-full min-h-[860px] sm:min-h-[920px] flex flex-col items-center justify-between p-6 sm:p-10 bg-[#FAF5EB] text-[#3B030D] select-none overflow-hidden">
      
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
          Sacred Ceremonies
        </span>
        <h2 className="font-serif italic text-3xl sm:text-5xl text-[#781124] tracking-wide drop-shadow-sm font-normal">
          Wedding Schedule
        </h2>
        <GoldDivider className="my-2.5" width="140px" />
      </div>

      {/* Event Timeline Cards */}
      <div className="relative z-20 my-auto flex flex-col w-full max-w-md px-4 gap-2">
        {weddingData.events.map((event, index) => (
          <React.Fragment key={event.id}>
            <div className="flex items-center gap-4 sm:gap-5 p-3.5 sm:p-4 rounded-2xl bg-[#FFFDF7]/70 border border-[#D4AF37]/40 shadow-sm hover:border-[#D4AF37] hover:shadow-md transition-all">
              {/* Circular Golden Motif Badge with Vector Icon */}
              <ScheduleBadge type={event.iconType} className="hover:scale-105 transition-transform" />

              {/* Event Information */}
              <div className="flex flex-col text-left">
                <span className="font-royal text-[9px] tracking-widest text-[#AA7C11] uppercase font-semibold">
                  Ceremony {index + 1}
                </span>
                <h3 className="font-royal text-lg sm:text-xl font-bold text-[#781124] mt-0.5">
                  {event.title}
                </h3>
                <p className="font-serif italic text-sm sm:text-base text-[#5C1423] tracking-wide mt-0.5 font-medium">
                  {event.displaySchedule}
                </p>
              </div>
            </div>

            {/* Ornamental Divider between events */}
            {index < weddingData.events.length - 1 && (
              <div className="w-full flex items-center justify-center my-1">
                <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent flex items-center justify-center">
                  <div className="w-2 h-2 rotate-45 bg-[#AA7C11]" />
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Footer Note & Down Arrow */}
      <div className="relative z-20 pb-6 flex flex-col items-center text-center px-4">
        <GoldDivider className="my-2.5" width="150px" />
        <p className="font-serif italic text-sm sm:text-base text-[#5C1423] tracking-wider mb-3 font-medium">
          We look forward to celebrating each moment with you!
        </p>
        <DownArrow targetId="venue" />
      </div>
    </section>
  );
};
