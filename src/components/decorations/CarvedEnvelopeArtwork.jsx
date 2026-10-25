import React from 'react';

/**
 * PURE CODE-RENDERED CARVED BAS-RELIEF ENVELOPE (frame_00s)
 * Deep crimson velvet with sculpted embossed lotus motifs, flowering vines,
 * and 3D wax seal stamped with 'P & V'.
 */

export const CarvedLotusMotif = ({ className = "", size = 120 }) => (
  <svg width={size} height={size * 0.75} viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="embossHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#C44D68" />
        <stop offset="50%" stopColor="#8C223A" />
        <stop offset="100%" stopColor="#4A0B1A" />
      </linearGradient>
      <filter id="reliefShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#140005" floodOpacity="0.8" />
      </filter>
    </defs>
    {/* Central Bloom Petal */}
    <path d="M80 10 C86 35 94 55 80 85 C66 55 74 35 80 10 Z" fill="url(#embossHighlight)" filter="url(#reliefShadow)" stroke="#D46A82" strokeWidth="1" />
    {/* Inner Left Petal */}
    <path d="M78 25 C58 42 50 65 72 90 C56 65 65 42 78 25 Z" fill="url(#embossHighlight)" filter="url(#reliefShadow)" stroke="#D46A82" strokeWidth="0.8" />
    {/* Inner Right Petal */}
    <path d="M82 25 C102 42 110 65 88 90 C104 65 95 42 82 25 Z" fill="url(#embossHighlight)" filter="url(#reliefShadow)" stroke="#D46A82" strokeWidth="0.8" />
    {/* Outer Left Petal */}
    <path d="M68 45 C42 60 36 82 62 98 C40 80 50 58 68 45 Z" fill="url(#embossHighlight)" filter="url(#reliefShadow)" stroke="#B33E56" strokeWidth="0.6" />
    {/* Outer Right Petal */}
    <path d="M92 45 C118 60 124 82 98 98 C120 80 110 58 92 45 Z" fill="url(#embossHighlight)" filter="url(#reliefShadow)" stroke="#B33E56" strokeWidth="0.6" />
    {/* Base Calyx */}
    <path d="M50 95 C70 105 90 105 110 95 C100 112 60 112 50 95 Z" fill="#6A1024" stroke="#D46A82" strokeWidth="0.8" />
  </svg>
);

export const CarvedFoliageVine = ({ className = "" }) => (
  <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="vineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C44D68" />
        <stop offset="70%" stopColor="#8C223A" />
        <stop offset="100%" stopColor="#4A0B1A" />
      </linearGradient>
    </defs>
    {/* Main Scrolling Vine */}
    <path d="M20 180 C40 120 90 90 180 20" stroke="url(#vineGrad)" strokeWidth="3" strokeLinecap="round" />
    <path d="M22 182 C42 122 92 92 182 22" stroke="#1A0208" strokeWidth="1.5" strokeLinecap="round" />
    {/* Little Buds */}
    <circle cx="50" cy="130" r="6" fill="#D46A82" />
    <circle cx="95" cy="85" r="7" fill="#D46A82" />
    <circle cx="145" cy="45" r="6" fill="#D46A82" />
    {/* Leaves */}
    <path d="M50 130 C45 110 65 105 72 120 C70 135 55 140 50 130 Z" fill="#8C223A" stroke="#C44D68" strokeWidth="0.75" />
    <path d="M95 85 C90 65 110 60 118 75 C116 90 100 95 95 85 Z" fill="#8C223A" stroke="#C44D68" strokeWidth="0.75" />
  </svg>
);

export const CarvedWaxSeal = ({ monogram = "P & V", size = 80, isPulsing = true, onClick }) => (
  <div 
    onClick={onClick}
    className={`relative flex items-center justify-center cursor-pointer select-none transition-transform hover:scale-110 active:scale-95 ${
      isPulsing ? 'animate-seal-glow' : ''
    }`}
    style={{ width: size, height: size }}
  >
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="sealRedGrad" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#C42845" />
          <stop offset="25%" stopColor="#9C1A32" />
          <stop offset="60%" stopColor="#6E0D21" />
          <stop offset="100%" stopColor="#38040E" />
        </radialGradient>
        <radialGradient id="sealCenterIndent" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#5E0A1B" />
          <stop offset="70%" stopColor="#7E1126" />
          <stop offset="100%" stopColor="#AA1D38" />
        </radialGradient>
        <filter id="sealDrop" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#000000" floodOpacity="0.85" />
          <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#FFB300" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Irregular Organic Wax Rim */}
      <path
        d="M50 4 C66 3 80 10 88 20 C96 30 98 44 96 58 C93 72 85 84 74 91 C62 98 46 99 34 94 C20 89 10 78 5 65 C0 52 2 37 9 25 C17 13 32 5 50 4 Z"
        fill="url(#sealRedGrad)"
        filter="url(#sealDrop)"
      />

      {/* Stamped Center Rim */}
      <circle cx="50" cy="50" r="36" fill="url(#sealCenterIndent)" />
      <circle cx="50" cy="50" r="35" stroke="#C44D68" strokeWidth="1.2" opacity="0.8" />
      <circle cx="50" cy="50" r="32" stroke="#4A0614" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="30" stroke="#FFDF78" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.6" />
    </svg>

    {/* Gold Stamped Monogram in center */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <span className="font-serif font-bold text-base sm:text-lg text-gold-shimmer tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
        {monogram}
      </span>
    </div>
  </div>
);
