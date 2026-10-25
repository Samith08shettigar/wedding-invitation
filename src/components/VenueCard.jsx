import React from 'react';
import { weddingData } from '../data/weddingData';
import { ExternalLink } from 'lucide-react';

/**
 * VENUE DETAILS CARD (frame_46s)
 * Arched ivory destination card with venue name, Jaipur address, timing, and View Location button.
 */
export const VenueCard = () => {
  return (
    <section id="venue" className="relative w-full py-16 sm:py-24 px-4 bg-luxury-damask text-[#3B0612] flex flex-col items-center text-center select-none">
      
      {/* Arched Venue Card matching frame_46s */}
      <div 
        className="relative w-full max-w-[340px] sm:max-w-[400px] bg-[#FFFDF8] rounded-t-[50px] rounded-b-2xl border border-[#D4AF37]/50 p-8 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.08)] flex flex-col items-center text-center"
      >
        {/* Venue Title */}
        <h2 className="font-serif text-3xl sm:text-4xl text-[#2E020A] font-normal leading-tight mb-2">
          {weddingData.venueName}
        </h2>

        {/* Location City */}
        <p className="font-serif text-base sm:text-lg text-[#520917] font-medium">
          {weddingData.venueCity}
        </p>

        {/* Subtitle */}
        <p className="font-serif italic text-xs sm:text-sm text-[#8C132B] mt-1 mb-5">
          {weddingData.venueEvent}
        </p>

        {/* Horizontal Divider Line */}
        <div className="w-16 h-[1px] bg-[#AA7C11]/40 mx-auto mb-5" />

        {/* Day & Date */}
        <p className="font-serif text-sm sm:text-base text-[#2E020A] font-medium">
          {weddingData.dayOfWeek}, {weddingData.displayDate}
        </p>

        {/* Time */}
        <p className="font-serif italic text-sm text-[#8C132B] mt-1 mb-8">
          {weddingData.time}
        </p>

        {/* View Location Button with Arrow */}
        <a 
          href={weddingData.googleMapsUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#3B0612]/70 rounded-md text-[#3B0612] font-royal text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold hover:bg-[#3B0612] hover:text-[#FFF8EE] transition-all cursor-pointer"
        >
          <span>View Location</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

    </section>
  );
};
