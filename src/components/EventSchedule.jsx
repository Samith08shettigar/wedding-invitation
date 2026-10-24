import React from 'react';
import { weddingData } from '../data/weddingData';
import { GoldDivider, FloralCornerBouquet, GoldCorner, ScheduleBadge } from './decorations/GoldOrnaments';
import { DownArrow } from './DownArrow';

export const EventSchedule = () => {
  return (
    <section id="events" className="relative w-full min-h-[820px] sm:min-h-[880px] flex flex-col items-center justify-between p-6 bg-[#FAF5EB] text-[#3B030D] select-none overflow-hidden">
      
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
        <h2 className="font-serif italic text-3xl sm:text-4xl text-[#781124] tracking-wide drop-shadow-sm">
          Wedding Schedule
        </h2>
        <GoldDivider className="my-2" width="130px" />
      </div>

      {/* Event Timeline Rows */}
      <div className="relative z-10 my-auto flex flex-col w-full max-w-sm px-4">
        {weddingData.events.map((event, index) => (
          <React.Fragment key={event.id}>
            <div className="flex items-center gap-4 py-3">
              {/* Circular Golden Motif Badge with Vector Icon */}
              <ScheduleBadge type={event.iconType} />

              {/* Event Information */}
              <div className="flex flex-col text-left">
                <h3 className="font-royal text-base sm:text-lg font-semibold text-[#781124]">
                  {event.title}
                </h3>
                <p className="font-serif italic text-sm sm:text-base text-[#5C1423] tracking-wide mt-0.5">
                  {event.displaySchedule}
                </p>
              </div>
            </div>

            {/* Divider between events */}
            {index < weddingData.events.length - 1 && (
              <div className="w-full flex items-center justify-center my-1">
                <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rotate-45 bg-[#AA7C11]" />
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Footer Note & Down Arrow */}
      <div className="relative z-10 pb-4 flex flex-col items-center text-center px-4">
        <GoldDivider className="my-2" width="140px" />
        <p className="font-serif italic text-sm text-[#5C1423] tracking-wide mb-3">
          We look forward to celebrating with you!
        </p>
        <DownArrow targetId="venue" />
      </div>
    </section>
  );
};
