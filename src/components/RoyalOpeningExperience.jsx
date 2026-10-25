import React, { useState } from 'react';
import { weddingData } from '../data/weddingData';
import { 
  WaxSeal, 
  SunsetPalaceScene, 
  GoldDivider, 
  BrassDeepam, 
  FloralCornerBouquet, 
  GoldCorner, 
  MedallionMonogram, 
  JharokhaCornerArch, 
  EnvelopeSealFloralSprigs 
} from './decorations/GoldOrnaments';
import { 
  GoldPaisley, 
  GoldLotus, 
  TraditionalToran, 
  IndianLiningPattern, 
  IndianZariBorder, 
  ScallopedMughalArch 
} from './decorations/IndianOrnaments';
import { ChevronDown } from 'lucide-react';

export const RoyalOpeningExperience = ({ onComplete, onStartMusic }) => {
  // Phases:
  // 1. 'cover'         -> Screen 1: Closed Royal Invitation Cover with "Tap to Open"
  // 2. 'envelope'      -> Screen 2: Sunset Palace Courtyard with sealed Envelope & Jharokha arch
  // 3. 'unsealing'     -> Gold wax seal shimmers and unlocks
  // 4. 'flap-opening'  -> Flap rotates 180° backward around top hinge in 3D
  // 5. 'card-rising'   -> Ivory card glides upward out of envelope pocket (Screen 3)
  // 6. 'card-settled'  -> Invitation card prominently displayed with Down Arrow & Enter button
  const [phase, setPhase] = useState('cover');

  // Start sequence when guest taps cover or "Tap to Open"
  const handleStartExperience = () => {
    if (phase !== 'cover') return;
    if (onStartMusic) onStartMusic();
    setPhase('envelope');

    // Stage 1: Wax seal unlocks with gold shimmer
    setTimeout(() => {
      setPhase('unsealing');
    }, 700);

    // Stage 2: Flap rotates backward
    setTimeout(() => {
      setPhase('flap-opening');
    }, 1500);

    // Stage 3: Ivory card rises out of envelope
    setTimeout(() => {
      setPhase('card-rising');
    }, 2400);

    // Stage 4: Card settles into prime view
    setTimeout(() => {
      setPhase('card-settled');
    }, 3900);
  };

  const isFlapOpen = phase === 'flap-opening' || phase === 'card-rising' || phase === 'card-settled';
  const isCardUp = phase === 'card-rising' || phase === 'card-settled';

  // Drifting Rose & Jasmine Petals
  const petals = [
    { left: '12%', delay: '0s', dur: '8.5s', emoji: '🌸' },
    { left: '28%', delay: '1.8s', dur: '9.2s', emoji: '🪷' },
    { left: '50%', delay: '0.6s', dur: '7.8s', emoji: '🌸' },
    { left: '72%', delay: '2.5s', dur: '8.8s', emoji: '🌼' },
    { left: '88%', delay: '1.2s', dur: '9.5s', emoji: '🌸' },
  ];

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden select-none">
      
      {/* =========================================================================
          STAGE 1: SCREEN 01 — CLOSED ROYAL INVITATION COVER (Tap to Open)
          ========================================================================= */}
      {phase === 'cover' && (
        <section 
          onClick={handleStartExperience}
          className="relative w-full min-h-screen flex flex-col items-center justify-between p-6 sm:p-10 cursor-pointer bg-radial from-[#4A0A16] via-[#2D020B] to-[#140004] text-[#FAF4E8] overflow-hidden transition-all duration-700 animate-fade-in"
          style={{
            boxShadow: "inset 0 0 100px rgba(0, 0, 0, 0.85)",
          }}
        >
          {/* Deep Royal Brocade Texture */}
          <div className="absolute inset-0 bg-royal-brocade opacity-60 pointer-events-none" />

          {/* Outer & Inner Gold Ornamental Arch Border */}
          <div className="absolute inset-4 sm:inset-6 border-2 border-[#D4AF37]/80 rounded-[32px] pointer-events-none z-10">
            <div className="absolute inset-2 border border-dashed border-[#FFDF78]/40 rounded-[26px]" />
          </div>

          {/* 4 Vector Floral Corner Bouquets */}
          <FloralCornerBouquet position="top-left" className="absolute top-2 left-2 w-28 h-28 sm:w-36 sm:h-36 z-15" />
          <FloralCornerBouquet position="top-right" className="absolute top-2 right-2 w-28 h-28 sm:w-36 sm:h-36 z-15" />
          <FloralCornerBouquet position="bottom-left" className="absolute bottom-2 left-2 w-28 h-28 sm:w-36 sm:h-36 z-15" />
          <FloralCornerBouquet position="bottom-right" className="absolute bottom-2 right-2 w-28 h-28 sm:w-36 sm:h-36 z-15" />

          {/* Gold Corner Filigree */}
          <GoldCorner position="top-left" className="absolute top-6 left-6 z-15" />
          <GoldCorner position="top-right" className="absolute top-6 right-6 z-15" />
          <GoldCorner position="bottom-left" className="absolute bottom-6 left-6 z-15" />
          <GoldCorner position="bottom-right" className="absolute bottom-6 right-6 z-15" />

          {/* Flanking Brass Stand Deepams on Wide Screens */}
          <div className="fixed left-6 bottom-10 hidden 2xl:flex flex-col items-center pointer-events-none z-30 opacity-80">
            <BrassDeepam height={140} width={52} className="animate-float-slow" />
          </div>
          <div className="fixed right-6 bottom-10 hidden 2xl:flex flex-col items-center pointer-events-none z-30 opacity-80">
            <BrassDeepam height={140} width={52} className="animate-float-slow" style={{ animationDelay: '1.6s' }} />
          </div>

          {/* Top Arch Crown */}
          <div className="relative z-10 pt-10 sm:pt-14 text-center">
            <ScallopedMughalArch width={160} height={24} className="mx-auto" />
          </div>

          {/* Central Monogram Medallion & Title */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center px-4">
            <div className="animate-float-slow">
              <MedallionMonogram monogram={weddingData.monogram} size={155} />
            </div>

            <h1 className="font-royal text-2xl sm:text-4xl font-medium tracking-wider text-gold-shimmer mt-7 mb-2 drop-shadow-lg">
              Our Wedding Invitation
            </h1>

            <GoldDivider className="my-2.5" width="160px" />

            <p className="font-serif italic text-base sm:text-xl text-[#F3E5C8]/90 tracking-wide mt-1">
              {weddingData.brideFirstName} &amp; {weddingData.groomFirstName}
            </p>
          </div>

          {/* Bottom Section: Tap to Open Button */}
          <div className="relative z-10 pb-8 sm:pb-12 flex flex-col items-center text-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleStartExperience();
              }}
              className="group relative flex flex-col items-center focus:outline-none cursor-pointer"
              aria-label="Tap to Open Wedding Invitation"
            >
              {/* Concentric Pulsing Gold Ring Icon */}
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border-2 border-[#D4AF37] bg-[#3B030D] flex items-center justify-center shadow-2xl animate-pulse-gold group-hover:scale-110 transition-transform">
                <svg 
                  className="w-6 h-6 text-[#FFDF78]" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3.5" fill="#D4AF37" />
                  <circle cx="12" cy="12" r="8" stroke="#D4AF37" strokeDasharray="3 3" />
                </svg>
              </div>

              <span className="font-serif italic text-sm sm:text-base tracking-widest text-[#FFDF78] mt-2.5 group-hover:text-white transition-colors">
                Tap to Open
              </span>
            </button>
          </div>
        </section>
      )}

      {/* =========================================================================
          STAGE 2: SCREEN 02 & SCREEN 03 — 3D ENVELOPE UNSEALING & PALACE REVEAL
          ========================================================================= */}
      {phase !== 'cover' && (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-between overflow-hidden bg-[#180106] select-none py-6 px-4 animate-fade-in">
          
          {/* BACKGROUND: Sunset Palace Lake with illuminated windows and water */}
          <SunsetPalaceScene className="z-0" showFlowers={true} />

          {/* Top-Left Traditional Rajasthani Carved Jharokha Arch (Screen 02 spec) */}
          <JharokhaCornerArch className="absolute top-0 left-0 z-15" />

          {/* Traditional Hanging Toran (Marigold & Mango Leaves) */}
          <TraditionalToran />

          {/* Ambient Drifting Flower Petals */}
          <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
            {petals.map((p, idx) => (
              <div
                key={idx}
                className="absolute top-0 text-base sm:text-lg opacity-80"
                style={{
                  left: p.left,
                  animation: `driftPetalSlow ${p.dur} linear infinite`,
                  animationDelay: p.delay,
                }}
              >
                {p.emoji}
              </div>
            ))}
          </div>

          {/* Flanking Brass Stand Deepams */}
          <div className="absolute inset-x-4 sm:inset-x-12 bottom-6 flex justify-between items-end pointer-events-none z-25">
            <BrassDeepam className="animate-float-slow -ml-1 sm:ml-2" height={130} width={50} />
            <BrassDeepam className="animate-float-slow -mr-1 sm:mr-2" style={{ animationDelay: '1.5s' }} height={130} width={50} />
          </div>

          {/* Top Right Skip Intro Button */}
          <button
            onClick={onComplete}
            className="fixed top-5 right-5 z-40 px-4 py-1.5 rounded-full bg-[#2E050D]/90 border border-[#D4AF37]/80 text-xs font-serif italic text-[#FFDF78] tracking-widest backdrop-blur-md shadow-lg hover:bg-[#4A0A16] hover:border-[#FFF2B2] transition-all cursor-pointer"
            aria-label="Skip Intro"
          >
            Skip Intro &gt;
          </button>

          {/* Top Announcement Header */}
          <div className="relative z-20 pt-8 sm:pt-10 text-center px-4 animate-fade-in-scale max-w-xl mx-auto">
            <span className="font-royal text-[10px] sm:text-xs tracking-[0.35em] text-[#FFDF78]/95 uppercase font-semibold block mb-1 drop-shadow">
              The Royal Wedding Celebration of
            </span>
            <h1 className="font-cursive text-5xl sm:text-6xl text-[#FFF6DB] tracking-wide drop-shadow-[0_4px_14px_rgba(0,0,0,0.85)]">
              {weddingData.brideFirstName} &amp; {weddingData.groomFirstName}
            </h1>
            <GoldDivider className="my-1.5" width="140px" />
          </div>

          {/* CENTRAL 3D TRADITIONAL ROYAL MAROON & ANTIQUE GOLD ENVELOPE */}
          <div className="relative z-20 my-auto mt-28 sm:mt-36 w-[330px] sm:w-[410px] md:w-[450px] h-[340px] sm:h-[360px] perspective-1200 flex items-center justify-center">
            
            {/* ENVELOPE BASE */}
            <div className="relative w-full h-full rounded-2xl shadow-royal-envelope">
              
              {/* 1. ENVELOPE INTERIOR BACK (Ivory Gold Jaali Lining) */}
              <div className="absolute inset-0 bg-[#FFFDF7] rounded-2xl shadow-inner overflow-hidden border border-[#D4AF37]/50 z-0">
                <IndianLiningPattern />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
              </div>

              {/* 2. ROYAL INVITATION CARD (Glides smoothly upward from inside pocket) */}
              <div 
                className={`absolute inset-x-3.5 sm:inset-x-5 top-3 h-[320px] sm:h-[340px] bg-[#FAF5EB] rounded-t-[34px] rounded-b-[16px] border-2 border-[#D4AF37] p-4 sm:p-5 shadow-royal-card flex flex-col items-center justify-center text-center transition-all duration-1000 ease-out z-15 ${
                  isCardUp 
                    ? '-translate-y-52 sm:-translate-y-60 scale-100 opacity-100' 
                    : 'translate-y-0 scale-95 opacity-90'
                }`}
                style={{
                  boxShadow: isCardUp 
                    ? '0 20px 50px rgba(0,0,0,0.85), 0 0 35px rgba(212,175,55,0.45)' 
                    : '0 4px 15px rgba(0,0,0,0.4)',
                }}
              >
                {/* Scalloped Arch Top Crown */}
                <ScallopedMughalArch width={150} height={22} className="-mt-1 mb-1" />

                {/* Inner Dotted Gold Lining */}
                <div className="absolute inset-2 border border-dashed border-[#D4AF37]/50 rounded-t-[28px] rounded-b-[10px] pointer-events-none" />
                
                {/* Sacred Gold Lotus */}
                <GoldLotus size={26} className="mb-0.5" />

                <span className="font-royal text-[8px] sm:text-[9px] tracking-[0.25em] text-[#8C2A3E] font-semibold uppercase mb-0.5">
                  Royal Wedding Invitation
                </span>

                <h2 className="font-cursive text-4xl sm:text-5xl text-[#781124] tracking-wide my-0.5 drop-shadow-sm">
                  {weddingData.brideFirstName}
                </h2>
                <span className="font-serif italic text-base text-[#AA7C11] font-semibold">&amp;</span>
                <h2 className="font-cursive text-4xl sm:text-5xl text-[#781124] tracking-wide my-0.5 drop-shadow-sm">
                  {weddingData.groomFirstName}
                </h2>

                <GoldDivider className="my-1.5" width="120px" />

                <p className="font-royal text-xs sm:text-sm text-[#3B030D] font-medium tracking-widest mt-0.5">
                  {weddingData.displayDate}
                </p>
                <p className="font-serif text-[11px] sm:text-xs text-[#781124]/85 tracking-wide mt-0.5 font-medium">
                  {weddingData.venueName} &bull; Bengaluru
                </p>

                {/* Interactive "Enter Celebration" button on card */}
                {isCardUp && (
                  <button
                    onClick={onComplete}
                    className="mt-2.5 px-5 py-1.5 rounded-full bg-gradient-to-r from-[#4A0A16] to-[#2B020B] text-[#FFDF78] border border-[#D4AF37] text-[10px] sm:text-xs font-royal tracking-widest uppercase shadow-md hover:scale-105 hover:border-[#FFF2B2] transition-all cursor-pointer animate-fade-in-scale"
                  >
                    Enter Celebration &gt;
                  </button>
                )}
              </div>

              {/* 3. ENVELOPE FRONT POCKET PANELS */}
              <div className="absolute inset-0 rounded-2xl border-2 border-[#D4AF37]/90 shadow-2xl overflow-hidden z-25 pointer-events-none bg-royal-brocade">
                {/* Left Diagonal Triangular Flap with Gold Paisley */}
                <div 
                  className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-[#520C1A] to-[#2D020B] border-r border-[#D4AF37]/50 flex items-center pl-3"
                  style={{
                    clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                  }}
                >
                  <GoldPaisley width={38} height={54} className="opacity-85" />
                </div>

                {/* Right Diagonal Triangular Flap with Flipped Gold Paisley */}
                <div 
                  className="absolute top-0 bottom-0 right-0 w-1/2 bg-gradient-to-l from-[#520C1A] to-[#2D020B] border-l border-[#D4AF37]/50 flex items-center justify-end pr-3"
                  style={{
                    clipPath: 'polygon(100% 0, 0 50%, 100% 100%)',
                  }}
                >
                  <GoldPaisley width={38} height={54} flip={true} className="opacity-85" />
                </div>

                {/* Bottom Triangular Flap with Sacred Lotus Motif */}
                <div 
                  className="absolute bottom-0 inset-x-0 h-[55%] bg-gradient-to-t from-[#200108] via-[#3B030E] to-[#4A0A16] border-t border-[#D4AF37]/60 flex flex-col items-center justify-end pb-3"
                  style={{
                    clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
                  }}
                >
                  <GoldLotus size={32} className="opacity-90 mt-2" />
                </div>

                {/* Outer Border Gold Trim */}
                <div className="absolute inset-1.5 border border-dashed border-[#FFDF78]/35 rounded-xl pointer-events-none" />
              </div>

              {/* 4. TOP FLAP (Realistic 3D Backward Rotation around Top Hinge) */}
              <div 
                className={`absolute top-0 inset-x-0 h-[165px] sm:h-[180px] preserve-3d transition-transform duration-1000 ease-in-out ${
                  isFlapOpen ? 'z-5' : 'z-30'
                }`}
                style={{
                  transformOrigin: 'top center',
                  transform: isFlapOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
                }}
              >
                {/* FRONT FACE (Deep Royal Maroon Brocade with Gold Zari Border & Lotus) */}
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-[#5C0D1E] via-[#4A0A16] to-[#2D020B] border-b-2 border-[#D4AF37] shadow-xl flex flex-col items-center justify-between pb-3 backface-hidden"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  }}
                >
                  <IndianZariBorder className="mt-1" />
                  <div className="mb-6">
                    <GoldLotus size={26} className="opacity-95" />
                  </div>
                </div>

                {/* BACK FACE (Warm Ivory Lining with Gold Jaali) */}
                <div 
                  className="absolute inset-0 bg-[#FFFDF7] border-b-2 border-[#D4AF37] shadow-md flex flex-col items-center justify-center overflow-hidden backface-hidden"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                    transform: 'rotateX(180deg)',
                  }}
                >
                  <IndianLiningPattern />
                  <div className="absolute top-4">
                    <GoldLotus size={22} className="opacity-70" />
                  </div>
                </div>

                {/* Floral Sprigs Flanking the Wax Seal (Screen 02) */}
                {!isFlapOpen && (
                  <div className="absolute bottom-[-32px] inset-x-0 flex items-center justify-center pointer-events-none">
                    <EnvelopeSealFloralSprigs className="w-56 px-2" />
                  </div>
                )}

                {/* Traditional Gold Medallion Lotus Wax Seal with "P & A" Initials */}
                <div 
                  className={`absolute bottom-[-32px] left-1/2 -translate-x-1/2 transition-all duration-700 ${
                    phase === 'unsealing' ? 'scale-125 filter drop-shadow-[0_0_24px_#FFD700]' : 'animate-seal-glow'
                  } ${isFlapOpen ? 'opacity-0 scale-75 pointer-events-none' : 'opacity-100'}`}
                >
                  <WaxSeal initials={weddingData.monogram} size={74} />
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM CONTROLS & DOWN CHEVRON BUTTON (Screen 03) */}
          <div className="relative z-30 pb-6 flex flex-col items-center">
            {isCardUp ? (
              <button
                onClick={onComplete}
                className="group relative flex flex-col items-center focus:outline-none cursor-pointer animate-bounce-slow"
                aria-label="Scroll to Wedding Journey"
              >
                <div className="w-9 h-9 rounded-full border border-[#D4AF37] bg-[#2E020B]/90 text-[#FFDF78] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <ChevronDown className="w-5 h-5 text-[#FFDF78]" />
                </div>
                <span className="font-serif italic text-xs tracking-widest text-[#FFDF78] mt-1.5 opacity-90 group-hover:opacity-100">
                  Scroll to Explore
                </span>
              </button>
            ) : (
              <p className="font-serif italic text-xs tracking-widest text-[#FFDF78]/80 animate-pulse">
                Opening Your Royal Indian Wedding Invitation...
              </p>
            )}
          </div>
        </section>
      )}
    </div>
  );
};
