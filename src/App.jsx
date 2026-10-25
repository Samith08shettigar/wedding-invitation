import React, { useState } from 'react';
import { HeroCourtyard } from './components/HeroCourtyard';
import { ScratchSaveTheDate } from './components/ScratchSaveTheDate';
import { InteractiveLaceEnvelope } from './components/InteractiveLaceEnvelope';
import { ScheduleOfEvents } from './components/ScheduleOfEvents';
import { VenueCard } from './components/VenueCard';
import { ClosingHearts } from './components/ClosingHearts';
import { FloatingAudioButton } from './components/FloatingAudioButton';
import { ScrollToTop } from './components/ScrollToTop';

export const App = () => {
  const [audioTrigger, setAudioTrigger] = useState(false);
  const [key, setKey] = useState(0);

  // Trigger audio on first interaction
  const handleStartMusic = () => {
    setAudioTrigger(true);
  };

  // Replay from top
  const handleReplay = () => {
    setKey(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div key={key} className="relative min-h-screen bg-[#FAF7F2] text-[#3B0612] selection:bg-[#781124] selection:text-[#FFF8EE] overflow-x-hidden">
      
      {/* Floating Soundwave Audio Button (bottom right matching video) */}
      <FloatingAudioButton autoPlayTrigger={audioTrigger} />

      {/* Floating Scroll-to-Top Button */}
      <ScrollToTop />

      {/* Main Single-Column Wedding Experience matching reference video mobile layout */}
      <div className="relative w-full max-w-xl mx-auto shadow-2xl bg-[#FAF7F2] overflow-hidden flex flex-col">
        
        {/* SECTION 1: 4-Flap Carved Envelope & Royal Courtyard (frame_00s - frame_12s) */}
        <HeroCourtyard 
          onStartMusic={handleStartMusic}
        />

        {/* SECTION 2: Scratch-to-Reveal Save The Date & Live Countdown (frame_16s - frame_22s) */}
        <ScratchSaveTheDate />

        {/* SECTION 3: Interactive Pull-Out Letter inside Lace Envelope (frame_28s - frame_36s) */}
        <InteractiveLaceEnvelope />

        {/* SECTION 4: Schedule of Events Timeline (frame_40s) */}
        <ScheduleOfEvents />

        {/* SECTION 5: Venue Details Arched Card (frame_46s) */}
        <VenueCard />

        {/* SECTION 6: Closing Hearts Message & Replay (frame_48s) */}
        <ClosingHearts onReplay={handleReplay} />

      </div>
    </div>
  );
};

export default App;
