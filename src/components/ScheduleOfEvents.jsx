import React from 'react';
import { weddingData } from '../data/weddingData';

/**
 * SCHEDULE OF EVENTS TIMELINE (frame_40s)
 * "A DAY WRITTEN IN THE STARS" -> "Schedule of Events" ->
 * Vertical golden line with diamond nodes and ceremony cards.
 */
export const ScheduleOfEvents = () => {
  return (
    <section id="schedule" className="relative w-full py-12 sm:py-16 px-4 bg-transparent text-[#3B0612] flex flex-col items-center text-center select-none">
      
      {/* Header */}
      <div className="max-w-md mx-auto mb-12">
        <span className="font-royal text-[10px] sm:text-xs tracking-[0.35em] text-[#8C132B] uppercase font-semibold block mb-2">
          A Day Written In The Stars
        </span>
        <h2 className="font-serif italic text-3xl sm:text-5xl text-[#2E020A] tracking-wide mb-3 font-normal">
          Schedule of Events
        </h2>
        <p className="font-serif italic text-sm sm:text-base text-[#520917] tracking-wider font-medium">
          A promise. A prayer. A beautiful beginning.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative w-full max-w-md mx-auto flex flex-col items-center">
        
        {/* Continuous Golden Timeline Line */}
        <div className="absolute top-4 bottom-8 left-1/2 -translate-x-1/2 w-[1.5px] bg-gradient-to-b from-[#D4AF37] via-[#AA7C11] to-[#D4AF37]" />

        {/* Timeline Event Items */}
        <div className="flex flex-col gap-10 w-full z-10">
          {weddingData.events.map((event, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={event.id} className="relative flex items-center justify-between w-full">
                
                {/* Left Side Content or Spacer */}
                <div className={`w-[42%] text-right ${isLeft ? 'block' : 'invisible'}`}>
                  <h3 className="font-serif text-lg sm:text-xl text-[#2E020A] font-semibold">
                    {event.title}
                  </h3>
                  <p className="font-serif italic text-xs sm:text-sm text-[#8C132B] mt-0.5">
                    {event.description}
                  </p>
                  <span className="font-royal text-[10px] tracking-widest text-[#AA7C11] uppercase font-medium mt-1 block">
                    {event.time} &bull; {event.date}
                  </span>
                </div>

                {/* Central Golden Diamond Node */}
                <div className="relative w-7 h-7 flex items-center justify-center shrink-0">
                  <div className="w-3.5 h-3.5 rotate-45 bg-[#D4AF37] border-2 border-[#FFFDF8] shadow-md flex items-center justify-center" />
                </div>

                {/* Right Side Content or Spacer */}
                <div className={`w-[42%] text-left ${!isLeft ? 'block' : 'invisible'}`}>
                  <h3 className="font-serif text-lg sm:text-xl text-[#2E020A] font-semibold">
                    {event.title}
                  </h3>
                  <p className="font-serif italic text-xs sm:text-sm text-[#8C132B] mt-0.5">
                    {event.description}
                  </p>
                  <span className="font-royal text-[10px] tracking-widest text-[#AA7C11] uppercase font-medium mt-1 block">
                    {event.time} &bull; {event.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Golden Fleuron Transition to Venue Card */}
        <div className="mt-8 flex items-center justify-center gap-2 pointer-events-none opacity-60">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </div>

      </div>

    </section>
  );
};
