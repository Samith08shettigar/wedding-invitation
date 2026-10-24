import React, { useState, useEffect } from 'react';
import { SunsetPalaceScene, GoldDivider } from './decorations/GoldOrnaments';
import { GoldLotus, TraditionalToran } from './decorations/IndianOrnaments';

// Traditional Indian Brass Stand Diya / Deepam with Animated Flame
const BrassDeepam = ({ className = "" }) => (
  <div className={`relative flex flex-col items-center pointer-events-none select-none ${className}`}>
    <svg width="44" height="110" viewBox="0 0 44 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="diyaFlameGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#FFF2A3" />
          <stop offset="65%" stopColor="#FF9900" />
          <stop offset="100%" stopColor="#D84315" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8C6616" />
          <stop offset="35%" stopColor="#F5D77F" />
          <stop offset="65%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#6E4C0C" />
        </linearGradient>
      </defs>

      {/* Flame Glow Halo */}
      <circle cx="22" cy="14" r="14" fill="url(#diyaFlameGlow)" className="animate-flame" />
      
      {/* Flame Wick */}
      <ellipse cx="22" cy="14" rx="3.5" ry="7" fill="#FFFBE6" className="animate-flame" />
      <ellipse cx="22" cy="15" rx="1.5" ry="3.5" fill="#FFFFFF" />

      {/* Oil Bowl Basin */}
      <path d="M10 22 C10 28 34 28 34 22 H10 Z" fill="url(#brassGrad)" stroke="#523605" strokeWidth="0.8" />
      
      {/* Tiered Brass Column */}
      <rect x="20" y="28" width="4" height="24" fill="url(#brassGrad)" />
      <ellipse cx="22" cy="38" rx="8" ry="3" fill="url(#brassGrad)" />
      
      {/* Mid Bowl */}
      <path d="M13 52 C13 56 31 56 31 52 H13 Z" fill="url(#brassGrad)" />
      <rect x="20" y="56" width="4" height="28" fill="url(#brassGrad)" />
      <ellipse cx="22" cy="68" rx="10" ry="3.5" fill="url(#brassGrad)" />

      {/* Fluted Base */}
      <path d="M12 84 L6 104 H38 L32 84 H12 Z" fill="url(#brassGrad)" stroke="#523605" strokeWidth="0.8" />
      <rect x="4" y="104" width="36" height="5" rx="1" fill="url(#brassGrad)" />
    </svg>
  </div>
);

// Carved Wooden Palace Door Half (Left or Right)
const PalaceDoorLeaf = ({ side = "left", isOpen = false }) => {
  const isLeft = side === "left";

  return (
    <div
      className={`relative w-1/2 h-full preserve-3d transition-all duration-[2400ms] ${
        isLeft ? 'origin-left' : 'origin-right'
      }`}
      style={{
        transform: isOpen
          ? isLeft
            ? 'rotateY(-108deg)'
            : 'rotateY(108deg)'
          : 'rotateY(0deg)',
        transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.35, 1)',
        boxShadow: isOpen
          ? isLeft
            ? '-15px 0 35px rgba(0,0,0,0.85)'
            : '15px 0 35px rgba(0,0,0,0.85)'
          : '0 10px 30px rgba(0,0,0,0.9)',
      }}
    >
      {/* Deep Royal Teakwood & Maroon Door Leaf */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3B0711] via-[#2A040B] to-[#170104] border-t-4 border-b-4 border-[#D4AF37] overflow-hidden flex flex-col justify-between p-3 sm:p-4">
        
        {/* Fine Woodgrain Sheen & Outer Beaded Border */}
        <div className={`absolute inset-1.5 border-2 border-[#D4AF37]/75 rounded-lg ${
          isLeft ? 'border-r-4' : 'border-l-4'
        }`} />
        
        <div className="absolute inset-3 border border-dashed border-[#FFDF78]/35 rounded-md pointer-events-none" />

        {/* 3 Carved Ornate Panels per Door Leaf */}
        {[1, 2, 3].map((panelIdx) => (
          <div
            key={panelIdx}
            className="relative w-full h-[30%] bg-gradient-to-br from-[#2E050D] to-[#1A0207] rounded-md border-2 border-[#D4AF37]/80 p-2 flex flex-col items-center justify-center shadow-inner overflow-hidden"
          >
            {/* Panel Corner Stud Bosses (Brass Kila Rivets) */}
            <div className="absolute top-1.5 left-1.5 w-2 h-2 rounded-full bg-gradient-to-br from-[#FFF2B2] to-[#8C610F] shadow-sm" />
            <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-gradient-to-br from-[#FFF2B2] to-[#8C610F] shadow-sm" />
            <div className="absolute bottom-1.5 left-1.5 w-2 h-2 rounded-full bg-gradient-to-br from-[#FFF2B2] to-[#8C610F] shadow-sm" />
            <div className="absolute bottom-1.5 right-1.5 w-2 h-2 rounded-full bg-gradient-to-br from-[#FFF2B2] to-[#8C610F] shadow-sm" />

            {/* Inner Gold Frame */}
            <div className="absolute inset-1 border border-[#D4AF37]/40 rounded-sm" />

            {/* Center Lotus Blossom Carving */}
            <GoldLotus size={panelIdx === 2 ? 34 : 28} className="opacity-85 filter drop-shadow-md" />

            {/* Subtle Mandala Radiating Lines */}
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent my-1" />
            
            <span className="font-royal text-[8px] tracking-[0.25em] text-[#FFDF78]/70 uppercase">
              {panelIdx === 1 ? "Royal" : panelIdx === 2 ? "Shubh" : "Vivah"}
            </span>
          </div>
        ))}

        {/* Ornate Antique Brass Door Knocker / Ring Handle */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 z-20 flex flex-col items-center ${
            isLeft ? 'right-2' : 'left-2'
          }`}
        >
          {/* Brass Lion/Flower Backplate */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFF2B2] via-[#D4AF37] to-[#785108] border-2 border-[#3B0711] shadow-lg flex items-center justify-center">
            <div className="w-4 h-4 rounded-full border border-[#FAF5EB]/60 bg-[#573A05]" />
          </div>
          {/* Hanging Brass Ring Handle */}
          <div className="w-7 h-9 rounded-b-full border-4 border-[#D4AF37] shadow-xl -mt-2 bg-transparent" />
        </div>
      </div>
    </div>
  );
};

export const PalaceDoorOpening = ({ onComplete, onStartMusic }) => {
  // Animation states: 'closed' -> 'opening' -> 'revealed'
  const [doorState, setDoorState] = useState('closed');
  const [hasInteracted, setHasInteracted] = useState(false);

  // Trigger door opening
  const handleOpenDoors = () => {
    if (hasInteracted) return;
    setHasInteracted(true);
    if (onStartMusic) onStartMusic();
    setDoorState('opening');

    // After doors fully open and courtyard settles, smoothly transition to envelope
    setTimeout(() => {
      setDoorState('revealed');
    }, 2800);

    setTimeout(() => {
      onComplete();
    }, 4800);
  };

  // Optional: Auto open after 2 seconds if user doesn't click
  useEffect(() => {
    const autoTimer = setTimeout(() => {
      if (!hasInteracted) {
        handleOpenDoors();
      }
    }, 2200);

    return () => clearTimeout(autoTimer);
  }, [hasInteracted]);

  const isOpen = doorState === 'opening' || doorState === 'revealed';

  // Drifting Rose Petals positions
  const petals = [
    { left: '12%', delay: '0s', dur: '5.2s' },
    { left: '26%', delay: '1.2s', dur: '6s' },
    { left: '45%', delay: '0.5s', dur: '4.8s' },
    { left: '68%', delay: '2s', dur: '5.6s' },
    { left: '84%', delay: '1.5s', dur: '5s' },
    { left: '92%', delay: '2.8s', dur: '6.4s' },
  ];

  return (
    <section 
      onClick={handleOpenDoors}
      className="relative w-full min-h-[820px] sm:min-h-[880px] h-full flex flex-col items-center justify-between overflow-hidden bg-[#120104] select-none cursor-pointer"
    >
      {/* REVEALED BACKGROUND: Illuminated Royal Palace Courtyard */}
      <SunsetPalaceScene className="z-0" showFlowers={true} />

      {/* Warm Golden Light Beams flooding forward when doors open */}
      <div 
        className={`absolute inset-0 bg-radial from-[#FFE082]/40 via-[#FF9900]/20 to-transparent pointer-events-none transition-opacity duration-1000 z-5 ${
          isOpen ? 'opacity-100 animate-ray-pulse' : 'opacity-0'
        }`} 
      />

      {/* Floating Rose Petals Drifting Downwards */}
      <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
        {petals.map((p, idx) => (
          <div
            key={idx}
            className="absolute top-0 text-base sm:text-lg opacity-80"
            style={{
              left: p.left,
              animation: `driftPetal ${p.dur} linear infinite`,
              animationDelay: p.delay,
            }}
          >
            🌸
          </div>
        ))}
      </div>

      {/* REVEALED COURTYARD TYPOGRAPHY (Revealed as doors open) */}
      <div 
        className={`relative z-10 my-auto flex flex-col items-center text-center px-4 max-w-sm transition-all duration-1000 ${
          isOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="w-16 h-16 rounded-full border border-[#D4AF37] bg-[#2E050D]/80 flex items-center justify-center shadow-xl mb-3 animate-float-slow">
          <GoldLotus size={32} />
        </div>

        <h1 className="font-royal text-2xl sm:text-3xl text-gold-shimmer font-semibold tracking-wider drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          Our Wedding Invitation
        </h1>

        <GoldDivider className="my-2.5" width="140px" />

        <p className="font-serif italic text-lg sm:text-xl text-[#FFF3D1] tracking-wide drop-shadow-md">
          A new chapter begins...
        </p>

        <p className="font-royal text-xs text-[#D4AF37]/90 tracking-[0.25em] uppercase mt-3">
          Entering the Royal Celebration
        </p>
      </div>

      {/* GRAND MUGHAL PALACE ENTRANCE ARCH (Surrounds the Doors) */}
      <div className="absolute inset-0 pointer-events-none z-25 flex flex-col justify-between">
        
        {/* Grand Scalloped Marble & Gold Arch Header */}
        <div className="w-full flex flex-col items-center">
          <svg className="w-full max-w-[420px] h-20" viewBox="0 0 420 80" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="doorArchGold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8C6616" />
                <stop offset="25%" stopColor="#FFF2B2" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="75%" stopColor="#FFF2B2" />
                <stop offset="100%" stopColor="#8C6616" />
              </linearGradient>
            </defs>
            {/* Multi-Cusped Arch Profile */}
            <path
              d="M0 0 H420 V35 C420 35 380 40 340 25 C300 10 270 5 210 5 C150 5 120 10 80 25 C40 40 0 35 0 35 V0 Z"
              fill="#240208"
            />
            <path
              d="M0 35 C40 40 80 25 120 10 C150 5 210 5 210 5 C210 5 270 5 300 10 C340 25 380 40 420 35"
              stroke="url(#doorArchGold)"
              strokeWidth="3"
            />
            <circle cx="210" cy="18" r="3.5" fill="url(#doorArchGold)" />
          </svg>

          {/* Hanging Marigold Toran Garland */}
          <TraditionalToran className="-mt-3" />
        </div>

        {/* Flanking Pillars & Brass Deepams */}
        <div className="flex justify-between items-end w-full px-2 pb-6">
          <BrassDeepam className="animate-float-slow -mb-1 ml-1" />
          <BrassDeepam className="animate-float-slow -mb-1 mr-1" style={{ animationDelay: '1.2s' }} />
        </div>
      </div>

      {/* 3D DOUBLE ROYAL PALACE DOORS CONTAINER */}
      <div 
        className={`absolute inset-x-4 sm:inset-x-6 top-16 bottom-8 z-20 flex perspective-1000 ${
          doorState === 'revealed' ? 'pointer-events-none' : ''
        }`}
        style={{
          perspective: '1400px',
        }}
      >
        {/* Left Palace Door */}
        <PalaceDoorLeaf side="left" isOpen={isOpen} />

        {/* Right Palace Door */}
        <PalaceDoorLeaf side="right" isOpen={isOpen} />

        {/* Center Vertical Light Seam before opening */}
        {!isOpen && (
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-[#FFF2B2] via-[#FFDF78] to-[#D4AF37] shadow-[0_0_15px_#FFD700] z-30 animate-pulse pointer-events-none" />
        )}
      </div>

      {/* Pulsing "Tap to Enter" Button (Before Door Opens) */}
      {!isOpen && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleOpenDoors();
            }}
            className="group px-6 py-2.5 rounded-full bg-gradient-to-r from-[#4A0A16] to-[#2B020B] border-2 border-[#D4AF37] text-xs font-royal font-semibold tracking-[0.2em] text-[#FFDF78] uppercase shadow-2xl animate-pulse-gold hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Tap to Enter</span>
            <span className="text-[#FFF2B2] group-hover:translate-x-1 transition-transform">&gt;</span>
          </button>
        </div>
      )}

      {/* Skip Intro Button */}
      {isOpen && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onComplete();
          }}
          className="absolute bottom-6 right-6 z-40 px-3.5 py-1.5 rounded-full bg-[#2E050D]/90 border border-[#D4AF37]/80 text-xs font-serif italic text-[#FFDF78] tracking-widest backdrop-blur-md shadow-lg hover:bg-[#4A0A16] transition-all cursor-pointer"
        >
          Skip Intro &gt;
        </button>
      )}
    </section>
  );
};
