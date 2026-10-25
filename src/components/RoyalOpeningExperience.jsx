import React, { useState, useEffect } from 'react';
import { weddingData } from '../data/weddingData';
import { WaxSeal, SunsetPalaceScene, GoldDivider, BrassDeepam } from './decorations/GoldOrnaments';
import { GoldPaisley, GoldLotus, TraditionalToran, IndianLiningPattern, IndianZariBorder, ScallopedMughalArch } from './decorations/IndianOrnaments';

export const RoyalOpeningExperience = ({ onComplete, onStartMusic }) => {
  // Animation phases:
  // 1. 'ambient-intro' -> Scene illuminates, envelope enters gracefully with glowing gold seal
  // 2. 'unsealing'     -> Gold wax seal glows with brilliant amber shimmer and unlocks
  // 3. 'flap-opening'  -> Flap rotates 180° backward around top hinge in 3D
  // 4. 'card-rising'   -> Ivory card slides gracefully upward out of the envelope pocket
  // 5. 'card-settled'  -> Card settles into prime view with wedding announcement
  const [phase, setPhase] = useState('ambient-intro');
  const [hasTriggered, setHasTriggered] = useState(false);

  // Trigger opening sequence
  const handleOpenInvitation = () => {
    if (hasTriggered) return;
    setHasTriggered(true);
    if (onStartMusic) onStartMusic();

    // Stage 1: Golden wax seal glows and unlocks
    setPhase('unsealing');

    // Stage 2: Flap rotates backward around top hinge
    setTimeout(() => {
      setPhase('flap-opening');
    }, 800);

    // Stage 3: Ivory card rises from inside envelope pocket
    setTimeout(() => {
      setPhase('card-rising');
    }, 1800);

    // Stage 4: Card settles into position
    setTimeout(() => {
      setPhase('card-settled');
    }, 3400);

    // Stage 5: Transition into main wedding celebration experience after reading
    setTimeout(() => {
      onComplete();
    }, 7500);
  };

  // Auto-prompt opening after 3.8s if visitor has not yet tapped
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasTriggered) {
        handleOpenInvitation();
      }
    }, 3800);
    return () => clearTimeout(timer);
  }, [hasTriggered]);

  const isFlapOpen = phase === 'flap-opening' || phase === 'card-rising' || phase === 'card-settled';
  const isCardUp = phase === 'card-rising' || phase === 'card-settled';

  // Drifting Rose & Jasmine Petals
  const petals = [
    { left: '10%', delay: '0s', dur: '8.5s', emoji: '🌸' },
    { left: '26%', delay: '1.8s', dur: '9.2s', emoji: '🪷' },
    { left: '48%', delay: '0.6s', dur: '7.8s', emoji: '🌸' },
    { left: '68%', delay: '2.5s', dur: '8.8s', emoji: '🌼' },
    { left: '85%', delay: '1.2s', dur: '9.5s', emoji: '🌸' },
  ];

  return (
    <section 
      onClick={handleOpenInvitation}
      className="relative w-full min-h-screen flex flex-col items-center justify-between overflow-hidden bg-[#180106] select-none cursor-pointer py-6 px-4"
    >
      {/* BACKGROUND: Royal Sunset Palace Courtyard with Water Reflections */}
      <SunsetPalaceScene className="z-0" showFlowers={true} />

      {/* Traditional Indian Wedding Hanging Marigold & Mango Leaf Toran */}
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

      {/* Flanking Brass Stand Deepams with Flickering Wick Flames */}
      <div className="absolute inset-x-4 sm:inset-x-12 bottom-6 flex justify-between items-end pointer-events-none z-25">
        <BrassDeepam className="animate-float-slow -ml-1 sm:ml-2" height={130} width={50} />
        <BrassDeepam className="animate-float-slow -mr-1 sm:mr-2" style={{ animationDelay: '1.5s' }} height={130} width={50} />
      </div>

      {/* Top Right Skip Intro Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onComplete();
        }}
        className="fixed top-5 right-5 z-40 px-4 py-1.5 rounded-full bg-[#2E050D]/90 border border-[#D4AF37]/80 text-xs font-serif italic text-[#FFDF78] tracking-widest backdrop-blur-md shadow-lg hover:bg-[#4A0A16] hover:border-[#FFF2B2] transition-all cursor-pointer"
        aria-label="Skip Intro"
      >
        Skip Intro &gt;
      </button>

      {/* TOP HEADER: Ceremony Title in English with ample headroom */}
      <div className="relative z-20 pt-10 sm:pt-12 text-center px-4 animate-fade-in-scale max-w-xl mx-auto">
        <span className="font-royal text-[10px] sm:text-xs tracking-[0.35em] text-[#FFDF78]/95 uppercase font-semibold block mb-1 drop-shadow">
          The Royal Wedding Celebration of
        </span>
        <h1 className="font-cursive text-5xl sm:text-6xl text-[#FFF6DB] tracking-wide drop-shadow-[0_4px_14px_rgba(0,0,0,0.85)]">
          {weddingData.brideFirstName} &amp; {weddingData.groomFirstName}
        </h1>
        <GoldDivider className="my-1.5" width="140px" />
      </div>

      {/* CENTRAL 3D TRADITIONAL ROYAL MAROON & ANTIQUE GOLD ENVELOPE */}
      {/* Height 340px completely encloses the 320px card when sealed */}
      <div className="relative z-20 my-auto mt-32 sm:mt-40 w-[330px] sm:w-[410px] md:w-[450px] h-[340px] sm:h-[360px] perspective-1200 flex items-center justify-center">
        
        {/* ENVELOPE BASE (No overflow-hidden on outer container so card can rise smoothly) */}
        <div className="relative w-full h-full rounded-2xl shadow-royal-envelope">
          
          {/* 1. ENVELOPE INTERIOR BACK (Ivory Gold Jaali Lining) */}
          <div className="absolute inset-0 bg-[#FFFDF7] rounded-2xl shadow-inner overflow-hidden border border-[#D4AF37]/50 z-0">
            <IndianLiningPattern />
            {/* Soft inner pocket gradient creating true depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
          </div>

          {/* 2. ROYAL INVITATION CARD (Glides smoothly upward from inside the pocket) */}
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
            {/* Card Scalloped Arch Top Crown */}
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

            {/* Interactive "Enter Celebration" button once card has risen */}
            {isCardUp && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onComplete();
                }}
                className="mt-2.5 px-5 py-1.5 rounded-full bg-gradient-to-r from-[#4A0A16] to-[#2B020B] text-[#FFDF78] border border-[#D4AF37] text-[10px] sm:text-xs font-royal tracking-widest uppercase shadow-md hover:scale-105 hover:border-[#FFF2B2] transition-all cursor-pointer animate-fade-in-scale"
              >
                Enter Celebration &gt;
              </button>
            )}
          </div>

          {/* 3. ENVELOPE FRONT POCKET PANELS (Deep Royal Maroon Brocade with Gold Paisley & Lotus) */}
          {/* Sits at z-25, so card emerges from inside behind it! */}
          <div className="absolute inset-0 rounded-2xl border-2 border-[#D4AF37]/90 shadow-2xl overflow-hidden z-25 pointer-events-none bg-royal-brocade">
            
            {/* Left Triangular Flap with Gold Paisley */}
            <div 
              className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-[#520C1A] to-[#2D020B] border-r border-[#D4AF37]/50 flex items-center pl-3"
              style={{
                clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
              }}
            >
              <GoldPaisley width={38} height={54} className="opacity-85" />
            </div>

            {/* Right Triangular Flap with Flipped Gold Paisley */}
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
          {/* Height: 165px. When closed: z-30. When open: rotatesX(180deg), drops to z-5 behind rising card! */}
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

            {/* BACK FACE (Warm Ivory Lining with Gold Jaali - Visible when Flap Opens Backward) */}
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

            {/* Traditional Gold Medallion Lotus Wax Seal with Initials */}
            <div 
              className={`absolute bottom-[-32px] left-1/2 -translate-x-1/2 transition-all duration-700 ${
                phase === 'unsealing' ? 'scale-125 filter drop-shadow-[0_0_24px_#FFD700]' : 'animate-seal-glow'
              } ${isFlapOpen ? 'opacity-0 scale-75 pointer-events-none' : 'opacity-100'}`}
            >
              <WaxSeal initials={weddingData.monogram} size={72} />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM PROMPT (Before Opening) */}
      {!hasTriggered && (
        <div className="relative z-30 pb-6 flex flex-col items-center animate-bounce-slow">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleOpenInvitation();
            }}
            className="group px-7 py-3 rounded-full bg-gradient-to-r from-[#4A0A16] via-[#630E1F] to-[#2B020B] border-2 border-[#D4AF37] text-xs sm:text-sm font-royal font-semibold tracking-[0.25em] text-[#FFDF78] uppercase shadow-2xl animate-pulse-gold hover:scale-105 hover:border-[#FFF2B2] transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Tap to Open Invitation</span>
            <span className="text-[#FFF2B2] group-hover:translate-x-1 transition-transform">&gt;</span>
          </button>
        </div>
      )}

      {/* Settling Message */}
      {hasTriggered && (
        <div className="relative z-20 pb-5 text-center">
          <p className="font-serif italic text-sm tracking-widest text-[#FFDF78]/90 animate-pulse">
            Welcome to Our Royal Wedding Celebration...
          </p>
        </div>
      )}
    </section>
  );
};
