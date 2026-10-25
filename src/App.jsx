import React, { useState } from 'react';
import { RoyalOpeningExperience } from './components/RoyalOpeningExperience';
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
import { BrassDeepam } from './components/decorations/GoldOrnaments';
import { TraditionalToran } from './components/decorations/IndianOrnaments';

export const App = () => {
  // Screen sequence states: 
  // 'opening' (Cinematic Royal Ceremonial Courtyard & 3D Traditional Letterbox Opening) 
  // -> 'main' (Sequential Royal Wedding Journey)
  const [screenState, setScreenState] = useState('opening');
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [musicAutoplayTrigger, setMusicAutoplayTrigger] = useState(false);

  // Transition from opening letterbox to main celebration
  const handleOpeningComplete = () => {
    setScreenState('main');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Replay experience from closing screen
  const handleReplay = () => {
    setScreenState('opening');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#150105] text-[#FAF4E8] flex justify-center items-center selection:bg-[#D4AF37] selection:text-[#3B020D] overflow-x-hidden">
      
      {/* GLOBAL LAYER 1: Deep Royal Maroon Brocade Ambient Texture */}
      <div className="fixed inset-0 bg-royal-brocade opacity-45 pointer-events-none z-0" />

      {/* GLOBAL LAYER 2: Ambient Ceremonial Lighting Glow Spots */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-radial from-[#FFA726]/18 via-[#D4AF37]/8 to-transparent blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-0 inset-x-0 h-[250px] bg-gradient-to-t from-[#200108]/90 via-[#3B030E]/30 to-transparent pointer-events-none z-0" />

      {/* DESKTOP ARCHITECTURAL FRAMING: Standing Brass Deepams flanking viewport on wide monitors */}
      <div className="fixed left-6 bottom-10 hidden 2xl:flex flex-col items-center pointer-events-none z-30 opacity-80">
        <BrassDeepam height={140} width={52} className="animate-float-slow" />
        <span className="font-royal text-[9px] tracking-widest text-[#FFDF78]/60 uppercase mt-2">
          Royal Blessings
        </span>
      </div>
      <div className="fixed right-6 bottom-10 hidden 2xl:flex flex-col items-center pointer-events-none z-30 opacity-80">
        <BrassDeepam height={140} width={52} className="animate-float-slow" style={{ animationDelay: '1.6s' }} />
        <span className="font-royal text-[9px] tracking-widest text-[#FFDF78]/60 uppercase mt-2">
          Shubh Vivah
        </span>
      </div>

      {/* Floating Global Audio Player & Modal */}
      <MusicControl autoPlayTrigger={musicAutoplayTrigger} />

      {/* Floating Global Navigation Menu Drawer (Active during main celebration) */}
      {screenState === 'main' && (
        <NavigationDrawer onOpenRsvp={() => setIsRsvpOpen(true)} />
      )}

      {/* RSVP Modal */}
      <RsvpModal isOpen={isRsvpOpen} onClose={() => setIsRsvpOpen(false)} />

      {/* STAGE 1: CINEMATIC ROYAL INDIAN OPENING & 3D LETTERBOX REVEAL */}
      {screenState === 'opening' && (
        <div className="w-full min-h-screen flex items-center justify-center z-10">
          <RoyalOpeningExperience 
            onComplete={handleOpeningComplete}
            onStartMusic={() => setMusicAutoplayTrigger(true)}
          />
        </div>
      )}

      {/* STAGE 2: SEQUENTIAL ROYAL WEDDING INVITATION JOURNEY */}
      {screenState === 'main' && (
        <div className="relative w-full max-w-4xl min-h-screen my-0 sm:my-8 sm:rounded-[44px] sm:border-2 sm:border-[#D4AF37]/85 shadow-2xl bg-[#1F0107] overflow-hidden flex flex-col z-10 transition-all duration-700">
          
          {/* Top Decorative Toran on Main Pavilion */}
          <TraditionalToran className="z-25" />

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

            {/* Screens 11, 12, 13: Hanging Lanterns, Thank You & Replay */}
            <ClosingScreen onReplay={handleReplay} />
          </main>
        </div>
      )}
    </div>
  );
};

export default App;
