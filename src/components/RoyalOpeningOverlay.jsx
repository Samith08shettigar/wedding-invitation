import React, { useState, useEffect } from 'react';
import { weddingData } from '../data/weddingData';
import { ChevronDown } from 'lucide-react';
import mainWebp from '../assets/main.webp';

// Fluttering Golden Butterflies Configuration (Spreads outward from wax seal across viewport)
const BUTTERFLIES_CONFIG = [
  { id: 1, targetX: '-38vw', targetY: '-34vh', scale: 1.15, rot: -22, flapSpeed: '0.28s', delay: '0.04s' },
  { id: 2, targetX: '38vw', targetY: '-32vh', scale: 1.1, rot: 24, flapSpeed: '0.32s', delay: '0.1s' },
  { id: 3, targetX: '-40vw', targetY: '-12vh', scale: 0.95, rot: -30, flapSpeed: '0.35s', delay: '0.16s' },
  { id: 4, targetX: '40vw', targetY: '-10vh', scale: 1.0, rot: 26, flapSpeed: '0.3s', delay: '0.2s' },
  { id: 5, targetX: '0vw', targetY: '-42vh', scale: 1.25, rot: 0, flapSpeed: '0.25s', delay: '0.08s' },
  { id: 6, targetX: '30vw', targetY: '20vh', scale: 0.9, rot: 35, flapSpeed: '0.34s', delay: '0.24s' },
  { id: 7, targetX: '-30vw', targetY: '22vh', scale: 0.88, rot: -32, flapSpeed: '0.33s', delay: '0.22s' },
];

// Radiant Golden Glitter & Sparkle Constellation
const GLITTER_PARTICLES = [
  { id: 1, angle: 15, dist: 130, size: 16, char: '✦', delay: '0.05s' },
  { id: 2, angle: 45, dist: 210, size: 22, char: '✧', delay: '0.12s' },
  { id: 3, angle: 75, dist: 160, size: 14, char: '★', delay: '0.08s' },
  { id: 4, angle: 105, dist: 240, size: 20, char: '✦', delay: '0.18s' },
  { id: 5, angle: 135, dist: 150, size: 13, char: '•', delay: '0.04s' },
  { id: 6, angle: 165, dist: 200, size: 18, char: '✧', delay: '0.22s' },
  { id: 7, angle: 195, dist: 230, size: 15, char: '✦', delay: '0.15s' },
  { id: 8, angle: 225, dist: 170, size: 19, char: '★', delay: '0.1s' },
  { id: 9, angle: 255, dist: 220, size: 14, char: '✧', delay: '0.25s' },
  { id: 10, angle: 285, dist: 150, size: 12, char: '•', delay: '0.07s' },
  { id: 11, angle: 315, dist: 230, size: 22, char: '✦', delay: '0.16s' },
  { id: 12, angle: 345, dist: 180, size: 16, char: '✧', delay: '0.14s' },
  { id: 13, angle: 30, dist: 290, size: 15, char: '✦', delay: '0.28s' },
  { id: 14, angle: 120, dist: 290, size: 16, char: '★', delay: '0.32s' },
  { id: 15, angle: 210, dist: 280, size: 17, char: '✧', delay: '0.27s' },
  { id: 16, angle: 300, dist: 300, size: 15, char: '✦', delay: '0.3s' },
];

// Royal Golden Butterfly with dual flapping 3D wings
const RoyalButterfly = ({ targetX, targetY, scale = 1, rot = 0, flapSpeed = '0.3s', isFly, isDisappear, delay = '0s' }) => {
  return (
    <div
      className="absolute pointer-events-none z-[100] transition-all ease-out"
      style={{
        top: '60%',
        left: '50%',
        transform: isFly
          ? `translate(calc(-50% + ${targetX}), calc(-50% + ${targetY})) scale(${scale}) rotate(${rot}deg)`
          : 'translate(-50%, -50%) scale(0) rotate(0deg)',
        opacity: !isFly ? 0 : (isDisappear ? 0 : 1),
        transitionProperty: 'transform, opacity',
        transitionDuration: isDisappear ? '900ms' : (isFly ? '2200ms' : '300ms'),
        transitionDelay: isDisappear ? '0s' : (isFly ? delay : '0s'),
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        willChange: 'transform, opacity',
      }}
    >
      <div 
        className="relative flex items-center justify-center filter drop-shadow-[0_2px_12px_rgba(255,215,0,0.85)]"
        style={{
          animation: isFly && !isDisappear ? 'gentleFloat 3s ease-in-out infinite alternate' : 'none',
          animationDelay: delay,
        }}
      >
        {/* Left Wing */}
        <svg
          className="w-6 h-7 sm:w-7 sm:h-8 -mr-[1px]"
          viewBox="0 0 24 30"
          fill="none"
          style={{
            transformOrigin: 'right center',
            animation: `wingFlapLeft ${flapSpeed} ease-in-out infinite alternate`,
            willChange: 'transform',
          }}
        >
          <path
            d="M23 15 C20 4, 8 0, 2 5 C-2 9, 3 18, 12 18 C3 21, 5 28, 12 28 C18 28, 22 21, 23 15 Z"
            fill="url(#goldButterflyGrad)"
            stroke="#FFF9E6"
            strokeWidth="0.8"
          />
          <path d="M22 15 C16 10, 8 8, 4 7" stroke="#FFFDF0" strokeWidth="0.6" strokeOpacity="0.9" fill="none" />
          <path d="M22 15 C15 17, 8 20, 7 24" stroke="#FFFDF0" strokeWidth="0.6" strokeOpacity="0.9" fill="none" />
        </svg>

        {/* Butterfly Torso */}
        <div className="w-[2.5px] h-6 sm:h-7 bg-gradient-to-b from-[#FFF2B2] via-[#D4AF37] to-[#8C6208] rounded-full shadow-[0_0_8px_#FFD700] z-10" />

        {/* Right Wing */}
        <svg
          className="w-6 h-7 sm:w-7 sm:h-8 -ml-[1px]"
          viewBox="0 0 24 30"
          fill="none"
          style={{
            transformOrigin: 'left center',
            animation: `wingFlapRight ${flapSpeed} ease-in-out infinite alternate`,
            willChange: 'transform',
          }}
        >
          <path
            d="M1 15 C4 4, 16 0, 22 5 C26 9, 21 18, 12 18 C21 21, 19 28, 12 28 C6 28, 2 21, 1 15 Z"
            fill="url(#goldButterflyGrad)"
            stroke="#FFF9E6"
            strokeWidth="0.8"
          />
          <path d="M2 15 C8 10, 16 8, 20 7" stroke="#FFFDF0" strokeWidth="0.6" strokeOpacity="0.9" fill="none" />
          <path d="M2 15 C9 17, 16 20, 17 24" stroke="#FFFDF0" strokeWidth="0.6" strokeOpacity="0.9" fill="none" />
        </svg>
      </div>
    </div>
  );
};

export const RoyalOpeningOverlay = ({ onComplete, onStartMusic }) => {
  // Master Scene: 'entrance' -> 'mailbox' -> 'entering' (fade out)
  const [scene, setScene] = useState('entrance');

  // Entrance 4-petal animation state: 'sealed' | 'petals-opening'
  const [entrancePhase, setEntrancePhase] = useState('sealed');

  // Mailbox animation state: 'closed' | 'opening' | 'card-up'
  const [mailboxPhase, setMailboxPhase] = useState('closed');

  // Butterflies disappearance state: true after spread out
  const [butterfliesDisappear, setButterfliesDisappear] = useState(false);

  // Lock document scroll completely while overlay is active
  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, []);

  // Step 1: Trigger 4-petal entrance opening
  const handleOpenEntrance = (e) => {
    if (e && e.type === 'touchend') e.preventDefault();
    if (entrancePhase !== 'sealed') return;
    if (onStartMusic) onStartMusic();

    setEntrancePhase('petals-opening');

    // Mailbox opens at 800ms as petals sweep outward
    setTimeout(() => {
      setMailboxPhase('opening');
    }, 800);

    // Switch scene to mailbox at 1200ms to free up interaction
    setTimeout(() => {
      setScene('mailbox');
    }, 1200);

    // Slide card gracefully upward from inside pocket at 1400ms
    setTimeout(() => {
      setMailboxPhase('card-up');
    }, 1400);

    // Butterflies spread across screen and gently disappear at 3400ms
    setTimeout(() => {
      setButterfliesDisappear(true);
    }, 3400);
  };

  // Step 2: Trigger mailbox flap opening manually if tapped
  const handleOpenMailbox = (e) => {
    if (e && e.type === 'touchend') e.preventDefault();
    if (mailboxPhase === 'closed') {
      setMailboxPhase('opening');
      setTimeout(() => {
        setMailboxPhase('card-up');
      }, 600);
      setTimeout(() => {
        setButterfliesDisappear(true);
      }, 2800);
    }
  };

  // Final Step: Enter celebration and unlock full website
  const handleEnterWebsite = (e) => {
    if (e && e.type === 'touchend') e.preventDefault();
    if (onStartMusic) onStartMusic();
    setScene('entering');
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 600);
  };

  const isPetalsOpening = entrancePhase === 'petals-opening';
  const isMailboxFlapOpen = mailboxPhase === 'opening' || mailboxPhase === 'card-up';
  const isCardUp = mailboxPhase === 'card-up';

  return (
    <div 
      className={`fixed inset-0 z-[9999] w-full h-[100dvh] min-h-screen bg-[#140004] flex items-center justify-center overflow-hidden select-none transition-opacity duration-600 ease-out ${
        scene === 'entering' ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
      style={{ 
        touchAction: 'none',
        overscrollBehavior: 'none',
      }}
    >
      
      {/* Skip Opening Button (Always accessible in corner) */}
      <button
        onClick={handleEnterWebsite}
        onTouchEnd={handleEnterWebsite}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[10000] px-4 py-2 rounded-full bg-[#183B4A]/90 border border-[#D4AF37]/80 text-[#FFF9E6] font-serif italic text-xs tracking-wider backdrop-blur-md shadow-2xl hover:bg-[#255266] hover:border-[#FFF2B2] transition-all flex items-center gap-2 cursor-pointer active:scale-95"
        aria-label="Skip opening to explore invitation"
      >
        <span>Skip opening</span>
        <span className="text-[13px] font-sans leading-none">&#8599;</span>
      </button>

      {/* =========================================================================
          STAGE 2: LUXURY TEAL-BLUE & IVORY CODE-DESIGNED MAILBOX (Matching mail.png)
          Designed 100% with clean SVG, CSS, and HTML — zero image artifacts, zero tearing!
          ========================================================================= */}
      <div 
        className={`absolute inset-0 w-full h-full flex items-center justify-center z-20 transition-opacity duration-700 ease-out ${
          scene === 'entering' 
            ? 'opacity-0 pointer-events-none' 
            : 'opacity-100 pointer-events-auto'
        }`}
      >
        {/* SINGLE LUXURY IVORY & CHAMPAGNE BACKDROP (Non-repeating, zero duplication!) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden bg-gradient-to-b from-[#FCFAF6] via-[#F4EFE6] to-[#E8DEC\-C]/30" style={{ background: 'radial-gradient(circle at 50% 45%, #FDFBF8 0%, #F5EFE7 55%, #E9DFD2 100%)' }}>
          
          {/* Subtle Antique-Gold Corner Flourishes */}
          <svg className="absolute top-0 left-0 w-44 h-44 sm:w-56 sm:h-56 text-[#D4AF37] opacity-40 pointer-events-none" viewBox="0 0 200 200" fill="none">
            <path d="M 0 30 Q 80 30 110 70 Q 140 110 170 200" stroke="currentColor" strokeWidth="1.2" fill="none" />
            <path d="M 0 55 Q 60 55 85 90 Q 110 125 130 200" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" fill="none" />
            <circle cx="110" cy="70" r="3" fill="currentColor" />
            <circle cx="85" cy="90" r="2.5" fill="currentColor" />
          </svg>

          <svg className="absolute bottom-0 right-0 w-44 h-44 sm:w-56 sm:h-56 text-[#D4AF37] opacity-40 pointer-events-none rotate-180" viewBox="0 0 200 200" fill="none">
            <path d="M 0 30 Q 80 30 110 70 Q 140 110 170 200" stroke="currentColor" strokeWidth="1.2" fill="none" />
            <path d="M 0 55 Q 60 55 85 90 Q 110 125 130 200" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" fill="none" />
            <circle cx="110" cy="70" r="3" fill="currentColor" />
          </svg>
        </div>

        {/* Floating Subtle Gold Shimmer Dust */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
          {[
            { top: '16%', left: '20%', size: 3, delay: '0s' },
            { top: '24%', left: '80%', size: 2.5, delay: '1s' },
            { top: '72%', left: '15%', size: 3.5, delay: '2s' },
            { top: '85%', left: '82%', size: 2, delay: '1.4s' },
          ].map((pt, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#FFF2B2] animate-pulse"
              style={{
                top: pt.top,
                left: pt.left,
                width: `${pt.size}px`,
                height: `${pt.size}px`,
                animationDelay: pt.delay,
                boxShadow: '0 0 10px #FFD700',
              }}
            />
          ))}
        </div>

        {/* MAILBOX STAGE CONTAINER (Centered, perfectly proportioned, pure vector precision) */}
        <div className="relative w-full max-w-[400px] sm:max-w-[430px] h-full max-h-[100dvh] flex flex-col items-center justify-center px-3 sm:px-4">
          
          <div className="relative w-full h-[270px] sm:h-[290px] flex items-end justify-center perspective-1600">
            
            {/* 1. ENVELOPE INTERIOR BACK (Deep Teal with delicate Gold Botanical Jaali) */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#0F222C] via-[#142E3B] to-[#1B3E4F] border-2 border-[#D4AF37]/60 shadow-[0_20px_50px_rgba(0,0,0,0.55)] overflow-hidden z-10 pointer-events-none">
              <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#D4AF37_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
              <div className="absolute top-4 inset-x-0 flex flex-col items-center text-center opacity-40">
                <span className="font-serif italic text-[11px] text-[#E5C158] tracking-widest">&#10022; With Love &amp; Blessings &#10022;</span>
              </div>
            </div>

            {/* 2. THE SINGLE INVITATION CARD (Sliding gracefully UP from INSIDE the envelope pocket!) */}
            <div 
              onClick={isCardUp ? handleEnterWebsite : undefined}
              onTouchEnd={isCardUp ? handleEnterWebsite : undefined}
              className={`absolute inset-x-3 sm:inset-x-4 top-2 rounded-2xl bg-[#FFFDF8] border-2 border-[#D4AF37] p-5 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.85)] flex flex-col items-center justify-between text-center select-none z-20 transition-all duration-[1400ms] ease-out ${
                isCardUp 
                  ? '-translate-y-48 sm:-translate-y-56 scale-100 opacity-100 cursor-pointer hover:shadow-[0_25px_70px_rgba(212,175,55,0.45)]' 
                  : 'translate-y-16 scale-95 opacity-0 pointer-events-none'
              }`}
              style={{
                height: '430px',
                transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.4, 1)',
                willChange: 'transform, opacity',
              }}
            >
              {/* Double Gold Ornate Filigree Border with Corner Flourishes */}
              <div className="absolute inset-2 border border-[#D4AF37]/60 rounded-xl pointer-events-none">
                <div className="absolute inset-1 border border-dashed border-[#AA7C11]/35 rounded-lg" />
                <span className="absolute top-1 left-1.5 text-[#D4AF37] text-xs font-serif leading-none">&#10087;</span>
                <span className="absolute top-1 right-1.5 text-[#D4AF37] text-xs font-serif leading-none">&#10087;</span>
                <span className="absolute bottom-1 left-1.5 text-[#D4AF37] text-xs font-serif leading-none">&#10087;</span>
                <span className="absolute bottom-1 right-1.5 text-[#D4AF37] text-xs font-serif leading-none">&#10087;</span>
              </div>

              {/* Sacred Heading */}
              <div className="flex flex-col items-center pt-0.5">
                <span className="text-[#AA7C11] text-[10px] sm:text-xs font-serif italic tracking-widest">
                  &#10022; || Shree Ganeshay Namah || &#10022;
                </span>
                <p className="font-serif italic text-xs sm:text-sm text-[#244654] leading-relaxed max-w-xs mt-2 font-medium">
                  Together with our families, we cordially invite you to celebrate the Wedding of
                </p>
              </div>

              {/* Couple Names in Grand Royal Calligraphy */}
              <div className="my-1 flex flex-col items-center">
                <h2 className="font-cursive text-4xl sm:text-5xl text-[#1B3D4D] tracking-wide my-0.5 drop-shadow-sm font-normal">
                  {weddingData.brideFirstName}
                </h2>
                <span className="font-serif italic text-lg sm:text-xl text-[#AA7C11] my-0.5">&amp;</span>
                <h2 className="font-cursive text-4xl sm:text-5xl text-[#1B3D4D] tracking-wide my-0.5 drop-shadow-sm font-normal">
                  {weddingData.groomFirstName}
                </h2>
              </div>

              {/* Date & Venue Box */}
              <div className="w-full py-2 border-y border-[#AA7C11]/30 my-0.5 flex flex-col items-center bg-[#FAF7F0]/60 rounded-md">
                <p className="font-royal text-sm sm:text-base text-[#183644] font-bold tracking-widest">
                  {weddingData.displayDate}
                </p>
                <p className="font-serif text-[11px] sm:text-xs text-[#2A5265] tracking-wide mt-0.5 font-medium">
                  {weddingData.venueName} &bull; {weddingData.venueCity}
                </p>
              </div>

              {/* Tap To Enter Button */}
              <div className="flex flex-col items-center mt-1 pb-0.5">
                <button
                  onClick={handleEnterWebsite}
                  onTouchEnd={handleEnterWebsite}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#183D4C] via-[#24596F] to-[#12303D] text-[#FFFDF8] border-2 border-[#D4AF37] font-royal text-[11px] sm:text-xs tracking-[0.2em] uppercase font-bold shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer animate-pulse"
                >
                  <span>Tap to Enter Celebration</span>
                  <span className="text-[13px]">&#8599;</span>
                </button>
                <span className="font-serif italic text-[11px] text-[#244654]/85 mt-1 flex items-center gap-1 font-medium">
                  View ceremony timings, schedule &amp; venue details
                  <ChevronDown className="w-3.5 h-3.5 inline animate-bounce text-[#D4AF37]" />
                </span>
              </div>
            </div>

            {/* 3. FRONT POCKET WITH V-CUT, 3D BLOSSOMS, GOLD LEAVES & WAX SEAL (Designed by code itself!) */}
            <svg 
              viewBox="0 0 400 190" 
              className="absolute bottom-0 inset-x-0 w-full z-30 pointer-events-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
              style={{ overflow: 'visible' }}
            >
              <defs>
                <linearGradient id="pocketTealGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2A5C70" />
                  <stop offset="35%" stopColor="#1B4353" />
                  <stop offset="100%" stopColor="#102C38" />
                </linearGradient>
                <linearGradient id="goldRimGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D4AF37" />
                  <stop offset="50%" stopColor="#FFF2B2" />
                  <stop offset="100%" stopColor="#D4AF37" />
                </linearGradient>
                <linearGradient id="goldLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF7D6" />
                  <stop offset="40%" stopColor="#E5C158" />
                  <stop offset="100%" stopColor="#99700E" />
                </linearGradient>
                <radialGradient id="tealSealGrad" cx="35%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#31677E" />
                  <stop offset="50%" stopColor="#1C4454" />
                  <stop offset="100%" stopColor="#0B2029" />
                </radialGradient>
              </defs>

              {/* Envelope Front Pocket Body: V-Cut from (0, 0) down to (200, 105) up to (400, 0) */}
              <path
                d="M 0 0 L 200 105 L 400 0 L 400 190 L 0 190 Z"
                fill="url(#pocketTealGrad)"
              />

              {/* Gold V-Rim Filigree Stroke */}
              <path
                d="M 0 0 L 200 105 L 400 0"
                fill="none"
                stroke="url(#goldRimGrad)"
                strokeWidth="2.8"
              />
              <path
                d="M 6 8 L 200 111 L 394 8"
                fill="none"
                stroke="#AA7C11"
                strokeWidth="0.8"
                strokeDasharray="2 2"
                opacity="0.65"
              />

              {/* LEFT BOTANICAL CLUSTER (Layered White Flowers, Gold Leaves & Teal Foliage) */}
              <g transform="translate(130, 95)">
                {/* Teal Eucalyptus Foliage */}
                <ellipse cx="-45" cy="-25" rx="14" ry="7" transform="rotate(-25, -45, -25)" fill="#35667A" opacity="0.9" />
                <ellipse cx="-65" cy="-35" rx="12" ry="6" transform="rotate(-40, -65, -35)" fill="#254F60" opacity="0.9" />
                {/* Gold Metallic Botanical Sprigs */}
                <path d="M-80 -40 Q-50 -25 -20 -5" stroke="url(#goldLeafGrad)" strokeWidth="1.6" fill="none" />
                <circle cx="-75" cy="-38" r="3.2" fill="url(#goldLeafGrad)" />
                <circle cx="-55" cy="-28" r="3.5" fill="url(#goldLeafGrad)" />
                <circle cx="-35" cy="-18" r="3.2" fill="url(#goldLeafGrad)" />
                {/* Gold Foliage Leaves */}
                <path d="M-40 -15 Q-50 -30 -35 -35 Q-25 -25 -40 -15" fill="url(#goldLeafGrad)" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.3))" />
                <path d="M-20 -5 Q-30 -20 -15 -25 Q-5 -15 -20 -5" fill="url(#goldLeafGrad)" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.3))" />
                {/* White Layered Blossom 1 */}
                <g transform="translate(-45, -12)">
                  <circle cx="-7" cy="-7" r="6.5" fill="#FFFDF8" stroke="#E6DCC8" strokeWidth="0.6" />
                  <circle cx="7" cy="-7" r="6.5" fill="#FFFDF8" stroke="#E6DCC8" strokeWidth="0.6" />
                  <circle cx="-7" cy="7" r="6.5" fill="#FFFDF8" stroke="#E6DCC8" strokeWidth="0.6" />
                  <circle cx="7" cy="7" r="6.5" fill="#FFFDF8" stroke="#E6DCC8" strokeWidth="0.6" />
                  <circle cx="0" cy="0" r="7.5" fill="#FFFFFF" stroke="#E6DCC8" strokeWidth="0.6" />
                  <circle cx="0" cy="0" r="3.2" fill="#D4AF37" />
                </g>
                {/* White Layered Blossom 2 */}
                <g transform="translate(-20, 2) scale(0.85)">
                  <circle cx="-6" cy="-6" r="5.5" fill="#FFFDF8" stroke="#E6DCC8" strokeWidth="0.6" />
                  <circle cx="6" cy="-6" r="5.5" fill="#FFFDF8" stroke="#E6DCC8" strokeWidth="0.6" />
                  <circle cx="-6" cy="6" r="5.5" fill="#FFFDF8" stroke="#E6DCC8" strokeWidth="0.6" />
                  <circle cx="6" cy="6" r="5.5" fill="#FFFDF8" stroke="#E6DCC8" strokeWidth="0.6" />
                  <circle cx="0" cy="0" r="6.5" fill="#FFFFFF" stroke="#E6DCC8" strokeWidth="0.6" />
                  <circle cx="0" cy="0" r="2.8" fill="#D4AF37" />
                </g>
              </g>

              {/* RIGHT BOTANICAL CLUSTER (Mirrored Symmetry) */}
              <g transform="translate(270, 95) scale(-1, 1)">
                {/* Teal Eucalyptus Foliage */}
                <ellipse cx="-45" cy="-25" rx="14" ry="7" transform="rotate(-25, -45, -25)" fill="#35667A" opacity="0.9" />
                <ellipse cx="-65" cy="-35" rx="12" ry="6" transform="rotate(-40, -65, -35)" fill="#254F60" opacity="0.9" />
                {/* Gold Metallic Botanical Sprigs */}
                <path d="M-80 -40 Q-50 -25 -20 -5" stroke="url(#goldLeafGrad)" strokeWidth="1.6" fill="none" />
                <circle cx="-75" cy="-38" r="3.2" fill="url(#goldLeafGrad)" />
                <circle cx="-55" cy="-28" r="3.5" fill="url(#goldLeafGrad)" />
                <circle cx="-35" cy="-18" r="3.2" fill="url(#goldLeafGrad)" />
                {/* Gold Foliage Leaves */}
                <path d="M-40 -15 Q-50 -30 -35 -35 Q-25 -25 -40 -15" fill="url(#goldLeafGrad)" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.3))" />
                <path d="M-20 -5 Q-30 -20 -15 -25 Q-5 -15 -20 -5" fill="url(#goldLeafGrad)" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.3))" />
                {/* White Layered Blossom 1 */}
                <g transform="translate(-45, -12)">
                  <circle cx="-7" cy="-7" r="6.5" fill="#FFFDF8" stroke="#E6DCC8" strokeWidth="0.6" />
                  <circle cx="7" cy="-7" r="6.5" fill="#FFFDF8" stroke="#E6DCC8" strokeWidth="0.6" />
                  <circle cx="-7" cy="7" r="6.5" fill="#FFFDF8" stroke="#E6DCC8" strokeWidth="0.6" />
                  <circle cx="7" cy="7" r="6.5" fill="#FFFDF8" stroke="#E6DCC8" strokeWidth="0.6" />
                  <circle cx="0" cy="0" r="7.5" fill="#FFFFFF" stroke="#E6DCC8" strokeWidth="0.6" />
                  <circle cx="0" cy="0" r="3.2" fill="#D4AF37" />
                </g>
                {/* White Layered Blossom 2 */}
                <g transform="translate(-20, 2) scale(0.85)">
                  <circle cx="-6" cy="-6" r="5.5" fill="#FFFDF8" stroke="#E6DCC8" strokeWidth="0.6" />
                  <circle cx="6" cy="-6" r="5.5" fill="#FFFDF8" stroke="#E6DCC8" strokeWidth="0.6" />
                  <circle cx="-6" cy="6" r="5.5" fill="#FFFDF8" stroke="#E6DCC8" strokeWidth="0.6" />
                  <circle cx="6" cy="6" r="5.5" fill="#FFFDF8" stroke="#E6DCC8" strokeWidth="0.6" />
                  <circle cx="0" cy="0" r="6.5" fill="#FFFFFF" stroke="#E6DCC8" strokeWidth="0.6" />
                  <circle cx="0" cy="0" r="2.8" fill="#D4AF37" />
                </g>
              </g>

              {/* CENTER CIRCULAR WAX SEAL */}
              <g transform="translate(200, 105)">
                <circle cx="0" cy="0" r="27" fill="url(#tealSealGrad)" stroke="#42788F" strokeWidth="1.2" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.5))" />
                <circle cx="0" cy="0" r="22" fill="none" stroke="url(#goldRimGrad)" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.85" />
                <circle cx="0" cy="0" r="18" fill="#132E3A" stroke="#0A1C24" strokeWidth="1" />
                {/* Gold Botanical Leaf Emblem */}
                <path d="M0 -11 C-7 -5, -7 5, 0 11 C7 5, 7 -5, 0 -11 Z" fill="url(#goldLeafGrad)" />
                <path d="M-6 -2 C-10 -7, -4 -9, 0 -5" stroke="#FFF5CC" strokeWidth="0.8" fill="none" />
                <path d="M6 -2 C10 -7, 4 -9, 0 -5" stroke="#FFF5CC" strokeWidth="0.8" fill="none" />
              </g>
            </svg>

            {/* 4. UPPER FLAP (3D Hinge: Folds DOWN to touch wax seal when closed, Rotates UPWARD 180° when open) */}
            <div 
              className={`absolute top-0 inset-x-0 h-[115px] cursor-pointer transition-transform duration-[1200ms] ease-out ${
                isMailboxFlapOpen ? 'z-15 pointer-events-none' : 'z-35 pointer-events-auto'
              }`}
              style={{
                transformOrigin: 'top center',
                transformStyle: 'preserve-3d',
                transform: isMailboxFlapOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
                transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.4, 1)',
                willChange: 'transform',
              }}
              onClick={handleOpenMailbox}
              onTouchEnd={handleOpenMailbox}
            >
              {/* FRONT FACE (Closed Flap: Points DOWN to the wax seal!) */}
              <div 
                className="absolute inset-0 w-full h-full backface-hidden"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  background: 'linear-gradient(to bottom, #2B576B 0%, #1B4353 50%, #12323F 100%)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <svg className="w-full h-full" viewBox="0 0 400 115" preserveAspectRatio="none">
                  <path d="M 0 0 L 200 115 L 400 0" fill="none" stroke="url(#goldRimGrad)" strokeWidth="2.8" />
                </svg>
                
                {/* Central Gold Tip Emblem touching seal */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-[#D4AF37] bg-[#143542] flex items-center justify-center shadow-lg">
                  <span className="text-[#FFDF78] text-[10px] font-serif font-bold">P &amp; V</span>
                </div>
              </div>

              {/* BACK FACE (Open Flap: Points UPWARD, displaying dark teal botanical jaali lining) */}
              <div 
                className="absolute inset-0 w-full h-full backface-hidden"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  transform: 'rotateX(180deg)',
                  background: 'linear-gradient(to top, #163644 0%, #0D222C 100%)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#D4AF37_1.5px,transparent_1.5px)] [background-size:14px_14px]" />
                <svg className="w-full h-full" viewBox="0 0 400 115" preserveAspectRatio="none">
                  <path d="M 0 0 L 200 115 L 400 0" fill="none" stroke="#D4AF37" strokeWidth="2" />
                </svg>
                <div className="absolute bottom-2 inset-x-0 text-center">
                  <span className="font-serif italic text-[10px] text-[#D4AF37] tracking-widest">&#10022; With Love &amp; Blessings &#10022;</span>
                </div>
              </div>
            </div>

            {/* INTERACTIVE TAP HOTSPOT ON WAX SEAL WHEN CLOSED */}
            {!isMailboxFlapOpen && (
              <div 
                onClick={handleOpenMailbox}
                onTouchEnd={handleOpenMailbox}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full z-40 cursor-pointer flex items-center justify-center group"
                aria-label="Tap seal to open envelope"
              >
                <div className="w-16 h-16 rounded-full border-2 border-[#FFDF78]/80 animate-ping opacity-40" />
                <div className="absolute w-14 h-14 rounded-full bg-[#FFD700]/15 border border-[#FFDF78]/60 shadow-[0_0_20px_#FFD700]" />
              </div>
            )}

          </div>
        </div>

      </div>

      {/* =========================================================================
          STAGE 1: ROYAL ENTRANCE ANIMATION (Main.png with 4 Petals & P & V Seal)
          Fills screen completely, then 4 petals unfold simultaneously in 3D!
          ========================================================================= */}
      <div 
        className={`absolute inset-0 w-full h-full z-40 perspective-1600 transition-all duration-700 ${
          scene !== 'entrance' 
            ? 'pointer-events-none opacity-0' 
            : 'pointer-events-auto opacity-100'
        }`}
      >
        <div className="relative w-full h-full overflow-hidden">

          {/* 1. TOP PETAL: Folds upward in 3D */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden cursor-pointer"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 50%)',
              transformOrigin: 'top center',
              transform: isPetalsOpening ? 'rotateX(115deg) translateY(-25%) translateZ(0) scale(0.85)' : 'rotateX(0deg) translateY(0) translateZ(0) scale(1)',
              opacity: isPetalsOpening ? 0 : 1,
              transition: 'transform 1800ms cubic-bezier(0.25, 1, 0.4, 1), opacity 1600ms ease-out 200ms',
              willChange: 'transform, opacity',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
            }}
            onClick={handleOpenEntrance}
            onTouchEnd={handleOpenEntrance}
          >
            <img 
              src={mainWebp} 
              alt="Envelope Top Petal" 
              className="w-full h-full object-cover object-center select-none pointer-events-none" 
              loading="eager"
              decoding="async"
            />
          </div>

          {/* 2. BOTTOM PETAL: Folds downward in 3D */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden cursor-pointer"
            style={{
              clipPath: 'polygon(0 100%, 50% 50%, 100% 100%)',
              transformOrigin: 'bottom center',
              transform: isPetalsOpening ? 'rotateX(-115deg) translateY(25%) translateZ(0) scale(0.85)' : 'rotateX(0deg) translateY(0) translateZ(0) scale(1)',
              opacity: isPetalsOpening ? 0 : 1,
              transition: 'transform 1800ms cubic-bezier(0.25, 1, 0.4, 1), opacity 1600ms ease-out 200ms',
              willChange: 'transform, opacity',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
            }}
            onClick={handleOpenEntrance}
            onTouchEnd={handleOpenEntrance}
          >
            <img 
              src={mainWebp} 
              alt="Envelope Bottom Petal" 
              className="w-full h-full object-cover object-center select-none pointer-events-none" 
              loading="eager"
              decoding="async"
            />
          </div>

          {/* 3. LEFT PETAL: Folds leftward in 3D */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden cursor-pointer"
            style={{
              clipPath: 'polygon(0 0, 50% 50%, 0 100%)',
              transformOrigin: 'left center',
              transform: isPetalsOpening ? 'rotateY(-115deg) translateX(-25%) translateZ(0) scale(0.85)' : 'rotateY(0deg) translateX(0) translateZ(0) scale(1)',
              opacity: isPetalsOpening ? 0 : 1,
              transition: 'transform 1800ms cubic-bezier(0.25, 1, 0.4, 1), opacity 1600ms ease-out 200ms',
              willChange: 'transform, opacity',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
            }}
            onClick={handleOpenEntrance}
            onTouchEnd={handleOpenEntrance}
          >
            <img 
              src={mainWebp} 
              alt="Envelope Left Petal" 
              className="w-full h-full object-cover object-center select-none pointer-events-none" 
              loading="eager"
              decoding="async"
            />
          </div>

          {/* 4. RIGHT PETAL: Folds rightward in 3D */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden cursor-pointer"
            style={{
              clipPath: 'polygon(100% 0, 100% 100%, 50% 50%)',
              transformOrigin: 'right center',
              transform: isPetalsOpening ? 'rotateY(115deg) translateX(25%) translateZ(0) scale(0.85)' : 'rotateY(0deg) translateX(0) translateZ(0) scale(1)',
              opacity: isPetalsOpening ? 0 : 1,
              transition: 'transform 1800ms cubic-bezier(0.25, 1, 0.4, 1), opacity 1600ms ease-out 200ms',
              willChange: 'transform, opacity',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
            }}
            onClick={handleOpenEntrance}
            onTouchEnd={handleOpenEntrance}
          >
            <img 
              src={mainWebp} 
              alt="Envelope Right Petal" 
              className="w-full h-full object-cover object-center select-none pointer-events-none" 
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Symmetrical Gold Hairline Seams */}
          <svg 
            className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500 ${
              isPetalsOpening ? 'opacity-0' : 'opacity-100'
            }`} 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
          >
            <line x1="0" y1="0" x2="50" y2="50" stroke="#FFDF78" strokeWidth="0.4" strokeOpacity="0.4" />
            <line x1="100" y1="0" x2="50" y2="50" stroke="#FFDF78" strokeWidth="0.4" strokeOpacity="0.4" />
            <line x1="0" y1="100" x2="50" y2="50" stroke="#FFDF78" strokeWidth="0.4" strokeOpacity="0.4" />
            <line x1="100" y1="100" x2="50" y2="50" stroke="#FFDF78" strokeWidth="0.4" strokeOpacity="0.4" />
          </svg>

          {/* Invitation Sealed Prompt Text */}
          <div 
            className={`absolute top-10 sm:top-14 inset-x-0 flex flex-col items-center text-center px-4 pointer-events-none transition-all duration-600 ease-out z-45 ${
              isPetalsOpening ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <p className="font-serif italic text-2xl sm:text-3xl text-[#FFF0F4] tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              You are invited
            </p>
            <span className="font-royal text-[9px] sm:text-[10px] tracking-[0.35em] text-[#FFDF78] uppercase font-bold mt-1.5 drop-shadow">
              Tap the seal to open
            </span>
          </div>

          {/* Central Circular P & V Wax Seal on Crimson Velvet Entrance */}
          <div 
            onClick={handleOpenEntrance}
            onTouchEnd={handleOpenEntrance}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-700 ease-out cursor-pointer ${
              isPetalsOpening 
                ? 'scale-110 opacity-0 pointer-events-none filter drop-shadow-[0_0_35px_#FFD700]' 
                : 'scale-100 opacity-100 hover:scale-105 active:scale-95'
            }`}
            style={{
              width: '92px',
              height: '92px',
            }}
          >
            <svg 
              className="w-full h-full aspect-square filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.85)]" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="pvWaxRimEnt" cx="35%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#8C132B" />
                  <stop offset="35%" stopColor="#630B1C" />
                  <stop offset="75%" stopColor="#3B0510" />
                  <stop offset="100%" stopColor="#1C0106" />
                </radialGradient>
                <radialGradient id="pvCenterCoreEnt" cx="45%" cy="40%" r="55%">
                  <stop offset="0%" stopColor="#30030C" />
                  <stop offset="70%" stopColor="#4A0714" />
                  <stop offset="100%" stopColor="#6E0E22" />
                </radialGradient>
                <linearGradient id="pvGoldTextEnt" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF8E0" />
                  <stop offset="35%" stopColor="#FFDF78" />
                  <stop offset="70%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#9E7310" />
                </linearGradient>
              </defs>

              <circle cx="50" cy="50" r="47" fill="url(#pvWaxRimEnt)" stroke="#A31835" strokeWidth="0.8" />
              <circle cx="50" cy="50" r="42" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="2 2.5" opacity="0.8" />
              <circle cx="50" cy="50" r="36" fill="url(#pvCenterCoreEnt)" stroke="#1F0106" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="33" fill="none" stroke="#FFDF78" strokeWidth="0.9" strokeDasharray="1.8 2" opacity="0.9" />

              <text x="33" y="56" textAnchor="middle" fill="url(#pvGoldTextEnt)" fontSize="17" fontFamily="Georgia, serif" fontWeight="bold">P</text>
              <text x="50" y="55" textAnchor="middle" fill="#FFDF78" fontSize="13" fontFamily="Georgia, serif" fontStyle="italic">&amp;</text>
              <text x="67" y="56" textAnchor="middle" fill="url(#pvGoldTextEnt)" fontSize="17" fontFamily="Georgia, serif" fontWeight="bold">V</text>
            </svg>

            <div className={`absolute inset-0 rounded-full pointer-events-none ${!isPetalsOpening ? 'animate-seal-glow' : ''}`} />
          </div>

        </div>
      </div>

      {/* =========================================================================
          STAGE 3: ROYAL GOLDEN BUTTERFLIES & GLITTER BURST
          Bursts brightly from the wax seal right as the mailbox opens!
          ========================================================================= */}
      {/* Hidden SVG Gradient Definition for 3D Golden Butterfly Wings */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <linearGradient id="goldButterflyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFCE6" />
            <stop offset="35%" stopColor="#FFE075" />
            <stop offset="70%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8C6208" />
          </linearGradient>
        </defs>
      </svg>

      {/* Fluttering Golden Butterflies with 3D Flapping Wings */}
      {BUTTERFLIES_CONFIG.map((b) => (
        <RoyalButterfly
          key={b.id}
          targetX={b.targetX}
          targetY={b.targetY}
          scale={b.scale}
          rot={b.rot}
          flapSpeed={b.flapSpeed}
          delay={b.delay}
          isFly={isMailboxFlapOpen}
          isDisappear={butterfliesDisappear}
        />
      ))}

      {/* Sparkling Glitter Stars & Dust Constellation */}
      <div className="absolute inset-0 pointer-events-none z-[99] overflow-hidden">
        {GLITTER_PARTICLES.map((p) => {
          const rad = (p.angle * Math.PI) / 180;
          const x = Math.round(Math.cos(rad) * p.dist);
          const y = Math.round(Math.sin(rad) * p.dist);

          return (
            <div
              key={p.id}
              className="absolute text-[#FFF2B2] select-none transition-all ease-out"
              style={{
                top: '60%',
                left: '50%',
                transform: isMailboxFlapOpen
                  ? `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`
                  : 'translate(-50%, -50%) scale(0)',
                opacity: !isMailboxFlapOpen ? 0 : (butterfliesDisappear ? 0 : 0.95),
                fontSize: `${p.size}px`,
                transitionProperty: 'transform, opacity',
                transitionDuration: butterfliesDisappear ? '800ms' : (isMailboxFlapOpen ? '2200ms' : '400ms'),
                transitionDelay: butterfliesDisappear ? '0s' : (isMailboxFlapOpen ? p.delay : '0s'),
                transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.4, 1)',
                animation: isMailboxFlapOpen && !butterfliesDisappear ? 'glitterTwinkle 2.2s ease-in-out infinite alternate' : 'none',
                animationDelay: p.delay,
                textShadow: '0 0 10px #FFD700, 0 0 20px #FFA500',
                willChange: 'transform, opacity',
              }}
            >
              {p.char}
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default RoyalOpeningOverlay;
