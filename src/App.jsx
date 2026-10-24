import React, { useState } from 'react';
import { InvitationCover } from './components/InvitationCover';
import { EnvelopeAnimation } from './components/EnvelopeAnimation';
import { PalaceInvitation } from './components/PalaceInvitation';
import { CoupleIntroduction } from './components/CoupleIntroduction';
import { SaveTheDate } from './components/SaveTheDate';
import { Countdown } from './components/Countdown';
import { InvitationMessage } from './components/InvitationMessage';
import { EventSchedule } from './components/EventSchedule';
import { VenueDetails } from './components/VenueDetails';
import { ClosingScreen } from './components/ClosingScreen';
import { MusicControl } from './components/MusicControl';
import { NavigationDrawer } from './components/NavigationDrawer';
import { RsvpModal } from './components/RsvpModal';

export const App = () => {
  // Screen sequence states: 'cover' (Screen 1) -> 'envelope' (Screen 2) -> 'main' (Screens 3 to 13)
  const [screenState, setScreenState] = useState('cover');
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [musicAutoplayTrigger, setMusicAutoplayTrigger] = useState(false);

  // User taps "Tap to Open" on Screen 1
  const handleOpenCover = () => {
    setScreenState('envelope');
    setMusicAutoplayTrigger(true);
  };

  // Envelope finishes or user clicks "Skip Intro"
  const handleEnvelopeComplete = () => {
    setScreenState('main');
  };

  // User clicks "Replay" on Screen 12
  const handleReplay = () => {
    setScreenState('cover');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#140104] text-[#FAF4E8] flex justify-center items-center p-0 sm:p-4 select-none">
      {/* Background Ambient Glow on Desktop */}
      <div className="fixed inset-0 bg-radial from-[#38020D]/60 via-[#1A0105] to-[#0A0002] pointer-events-none" />

      {/* Floating Global Audio Player & Modal */}
      <MusicControl autoPlayTrigger={musicAutoplayTrigger} />

      {/* Floating Global Navigation Menu Drawer (Active during main screens) */}
      {screenState === 'main' && (
        <NavigationDrawer onOpenRsvp={() => setIsRsvpOpen(true)} />
      )}

      {/* RSVP Modal */}
      <RsvpModal isOpen={isRsvpOpen} onClose={() => setIsRsvpOpen(false)} />

      {/* Central Portrait Mobile Frame (Matches Reference Aspect Ratio ~ 9:16) */}
      <div className="relative w-full sm:max-w-[420px] min-h-screen sm:min-h-[880px] sm:my-6 sm:rounded-[40px] sm:border-4 sm:border-[#D4AF37]/80 sm:ring-8 sm:ring-[#2B020B] shadow-2xl bg-[#200108] overflow-hidden flex flex-col">
        
        {/* SCREEN 1: Burgundy Ornamental Cover */}
        {screenState === 'cover' && (
          <InvitationCover onOpen={handleOpenCover} />
        )}

        {/* SCREEN 2: 3D Envelope Opening & Palace Sunset Reveal */}
        {screenState === 'envelope' && (
          <EnvelopeAnimation onComplete={handleEnvelopeComplete} />
        )}

        {/* SCREENS 3 to 13: Sequential Invitation Experience */}
        {screenState === 'main' && (
          <main className="w-full flex flex-col">
            {/* Screen 3: Main Invitation Announcement Card */}
            <PalaceInvitation />

            {/* Screen 4: Couple Introduction ("Our Beautiful Couple") */}
            <CoupleIntroduction />

            {/* Screen 5: Save The Date Arch & Calendar Card */}
            <SaveTheDate />

            {/* Screen 6: Countdown to Our Big Day */}
            <Countdown />

            {/* Screens 7 & 8: Invitation Message Card & From Our Families */}
            <InvitationMessage />

            {/* Screen 9: Wedding Schedule */}
            <EventSchedule />

            {/* Screen 10: Venue Details */}
            <VenueDetails />

            {/* Screens 11, 12, 13: Hanging Lanterns, Thank You & Replay, Closing Vignette */}
            <ClosingScreen onReplay={handleReplay} />
          </main>
        )}
      </div>
    </div>
  );
};

export default App;
