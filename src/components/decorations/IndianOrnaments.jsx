import React from 'react';

// Traditional Indian Paisley (Kalka / Ambi Motif) in Gold Foil
export const GoldPaisley = ({ className = "", width = 48, height = 64, flip = false }) => (
  <div className={`pointer-events-none select-none ${className}`} style={{ transform: flip ? 'scaleX(-1)' : 'none' }}>
    <svg width={width} height={height} viewBox="0 0 50 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="paisleyGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF4D0" />
          <stop offset="30%" stopColor="#E2BA4D" />
          <stop offset="70%" stopColor="#C49326" />
          <stop offset="100%" stopColor="#8C610F" />
        </linearGradient>
      </defs>
      {/* Outer Curved Paisley Body */}
      <path
        d="M25 68 C12 68 3 58 3 43 C3 25 22 14 30 2 C32 10 37 14 43 18 C47 22 49 28 47 34 C45 40 37 42 35 38 C33 34 37 28 35 25 C33 22 28 25 26 29 C22 35 25 44 32 46 C37 48 44 45 46 51 C48 58 40 68 25 68 Z"
        stroke="url(#paisleyGoldGrad)"
        strokeWidth="1.5"
        fill="url(#paisleyGoldGrad)"
        fillOpacity="0.15"
      />
      {/* Inner Paisley Swirl */}
      <path
        d="M24 58 C16 58 10 52 10 44 C10 32 22 24 28 15"
        stroke="url(#paisleyGoldGrad)"
        strokeWidth="1"
        strokeDasharray="2 2"
        fill="none"
      />
      {/* Central Rosette / Eye */}
      <circle cx="25" cy="45" r="4.5" fill="url(#paisleyGoldGrad)" />
      <circle cx="25" cy="45" r="2" fill="#2E040D" />
      {/* Small Beaded Accents */}
      <circle cx="16" cy="36" r="1.5" fill="url(#paisleyGoldGrad)" />
      <circle cx="20" cy="28" r="1.5" fill="url(#paisleyGoldGrad)" />
      <circle cx="34" cy="54" r="1.5" fill="url(#paisleyGoldGrad)" />
      <circle cx="32" cy="36" r="1.2" fill="url(#paisleyGoldGrad)" />
    </svg>
  </div>
);

// Traditional Blooming Gold Lotus Motif (Padma)
export const GoldLotus = ({ className = "", size = 36 }) => (
  <div className={`pointer-events-none select-none flex items-center justify-center ${className}`}>
    <svg width={size} height={size * 0.75} viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lotusGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF9E6" />
          <stop offset="30%" stopColor="#FFDF78" />
          <stop offset="70%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8C610F" />
        </linearGradient>
      </defs>
      {/* Central Petal */}
      <path d="M20 2 C22 10 24 16 20 24 C16 16 18 10 20 2 Z" fill="url(#lotusGoldGrad)" />
      {/* Left Inner Petal */}
      <path d="M19 6 C13 11 11 18 17 25 C13 18 15 11 19 6 Z" fill="url(#lotusGoldGrad)" fillOpacity="0.92" />
      {/* Right Inner Petal */}
      <path d="M21 6 C27 11 29 18 23 25 C27 18 25 11 21 6 Z" fill="url(#lotusGoldGrad)" fillOpacity="0.92" />
      {/* Left Outer Petal */}
      <path d="M16 12 C9 16 7 22 14 26 C8 21 11 15 16 12 Z" fill="url(#lotusGoldGrad)" fillOpacity="0.8" />
      {/* Right Outer Petal */}
      <path d="M24 12 C31 16 33 22 26 26 C32 21 29 15 24 12 Z" fill="url(#lotusGoldGrad)" fillOpacity="0.8" />
      {/* Calyx Base */}
      <path d="M12 25 C16 28 24 28 28 25 C26 29 14 29 12 25 Z" fill="url(#lotusGoldGrad)" />
    </svg>
  </div>
);

// Intricate Royal Indian Gold Mandala
export const RoyalMandala = ({ className = "", size = 180, opacity = 0.15 }) => (
  <div 
    className={`pointer-events-none select-none flex items-center justify-center ${className}`}
    style={{ width: size, height: size, opacity }}
  >
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mandalaGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8C610F" />
        </linearGradient>
      </defs>
      {/* Outer Petal Ring */}
      <circle cx="100" cy="100" r="95" stroke="url(#mandalaGold)" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="100" cy="100" r="88" stroke="url(#mandalaGold)" strokeWidth="1.2" />
      <circle cx="100" cy="100" r="76" stroke="url(#mandalaGold)" strokeWidth="0.8" />
      
      {/* 8 Radial Lotus Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 100 100)`}>
          <path d="M100 15 C108 35 116 55 100 75 C84 55 92 35 100 15 Z" fill="url(#mandalaGold)" fillOpacity="0.3" stroke="url(#mandalaGold)" strokeWidth="0.8" />
          <circle cx="100" cy="22" r="2.5" fill="url(#mandalaGold)" />
          <path d="M100 76 L100 88" stroke="url(#mandalaGold)" strokeWidth="1" />
        </g>
      ))}

      {/* Secondary 8 Intermediate Points */}
      {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => (
        <g key={`mid-${i}`} transform={`rotate(${angle} 100 100)`}>
          <path d="M100 30 C105 45 110 58 100 70 C90 58 95 45 100 30 Z" stroke="url(#mandalaGold)" strokeWidth="0.7" fill="none" />
          <circle cx="100" cy="35" r="1.5" fill="url(#mandalaGold)" />
        </g>
      ))}

      {/* Inner Rosette */}
      <circle cx="100" cy="100" r="45" stroke="url(#mandalaGold)" strokeWidth="1.2" />
      <circle cx="100" cy="100" r="32" stroke="url(#mandalaGold)" strokeWidth="0.8" strokeDasharray="2 2" />
      <circle cx="100" cy="100" r="18" fill="url(#mandalaGold)" fillOpacity="0.25" stroke="url(#mandalaGold)" strokeWidth="1" />
      <circle cx="100" cy="100" r="6" fill="url(#mandalaGold)" />
    </svg>
  </div>
);

// Traditional Indian Hanging Toran (Marigolds & Mango Leaves)
export const TraditionalToran = ({ className = "" }) => (
  <div className={`absolute top-0 inset-x-0 h-14 pointer-events-none select-none z-20 overflow-hidden ${className}`}>
    <svg className="w-full h-full" viewBox="0 0 1000 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="marigoldOrange" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE082" />
          <stop offset="40%" stopColor="#FFB300" />
          <stop offset="80%" stopColor="#FF6F00" />
          <stop offset="100%" stopColor="#E65100" />
        </radialGradient>
        <radialGradient id="marigoldYellow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF9C4" />
          <stop offset="50%" stopColor="#FFD54F" />
          <stop offset="100%" stopColor="#FF8F00" />
        </radialGradient>
        <linearGradient id="mangoLeafGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#33691E" />
          <stop offset="70%" stopColor="#558B2F" />
          <stop offset="100%" stopColor="#2E7D32" />
        </linearGradient>
        <linearGradient id="toranCordGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#AA7C11" />
          <stop offset="50%" stopColor="#FFF4D0" />
          <stop offset="100%" stopColor="#AA7C11" />
        </linearGradient>
      </defs>

      {/* Hanging Top Gold Braided Cord */}
      <line x1="0" y1="5" x2="1000" y2="5" stroke="url(#toranCordGrad)" strokeWidth="3" />
      <line x1="0" y1="8" x2="1000" y2="8" stroke="#FF6F00" strokeWidth="1" strokeDasharray="4 4" />

      {/* Repeating Swags across 1000 width */}
      {[0, 166, 333, 500, 666, 833].map((start, idx) => (
        <path
          key={`swag-${idx}`}
          d={`M${start} 5 Q${start + 83} 32 ${start + 167} 5`}
          stroke="url(#toranCordGrad)"
          strokeWidth="1.8"
          fill="none"
        />
      ))}

      {/* Mango Leaves hanging down */}
      {[30, 83, 136, 196, 249, 302, 363, 416, 469, 530, 583, 636, 696, 749, 802, 863, 916, 969].map((x, i) => (
        <path
          key={`leaf-${i}`}
          d={`M${x} 7 C${x - 5} 18 ${x - 6} 28 ${x} 38 C${x + 6} 28 ${x + 5} 18 ${x} 7 Z`}
          fill="url(#mangoLeafGrad)"
          stroke="#1B5E20"
          strokeWidth="0.5"
        />
      ))}

      {/* Genda / Marigold Flower Blooms along top line */}
      {Array.from({ length: 25 }).map((_, i) => {
        const x = i * 42;
        return (
          <g key={`flower-${i}`} transform={`translate(${x}, 6)`}>
            <circle cx="0" cy="0" r="6" fill={i % 2 === 0 ? "url(#marigoldOrange)" : "url(#marigoldYellow)"} />
            <circle cx="0" cy="0" r="2.5" fill="#FFF2A3" />
          </g>
        );
      })}

      {/* Hanging Brass Bells at each swag junction */}
      {[166, 333, 500, 666, 833].map((x, i) => (
        <g key={`bell-${i}`} transform={`translate(${x}, 5)`}>
          <line x1="0" y1="0" x2="0" y2="22" stroke="url(#toranCordGrad)" strokeWidth="1.5" />
          <circle cx="0" cy="22" r="5" fill="url(#toranCordGrad)" />
          <circle cx="0" cy="29" r="2.5" fill="#FFB300" />
        </g>
      ))}
    </svg>
  </div>
);

// Traditional Indian Luxury Printed Inner Lining Pattern (Lattice with Lotus & Gold Butis)
export const IndianLiningPattern = ({ className = "" }) => (
  <div className={`absolute inset-0 bg-[#FFFDF7] overflow-hidden ${className}`}>
    <svg className="w-full h-full opacity-35" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="indianJaliPat" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
          {/* Diagonal Jaali Grid */}
          <path d="M0 16 L16 0 L32 16 L16 32 Z" stroke="#D4AF37" strokeWidth="0.75" fill="none" />
          <circle cx="16" cy="16" r="2" fill="#AA7C11" />
          {/* Micro rosettes at lattice intersections */}
          <circle cx="0" cy="0" r="1.5" fill="#D4AF37" />
          <circle cx="32" cy="0" r="1.5" fill="#D4AF37" />
          <circle cx="0" cy="32" r="1.5" fill="#D4AF37" />
          <circle cx="32" cy="32" r="1.5" fill="#D4AF37" />
          {/* Diamond dots */}
          <path d="M16 6 L18 8 L16 10 L14 8 Z" fill="#D4AF37" opacity="0.6" />
          <path d="M16 22 L18 24 L16 26 L14 24 Z" fill="#D4AF37" opacity="0.6" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#indianJaliPat)" />
    </svg>
  </div>
);

// Traditional Indian Gold Embroidery Border (Zari Trim along envelope flap and card edges)
export const IndianZariBorder = ({ className = "" }) => (
  <div className={`w-full overflow-hidden ${className}`}>
    <svg className="w-full h-4" viewBox="0 0 400 16" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="zariGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#AA7C11" />
          <stop offset="25%" stopColor="#FFF2B2" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="75%" stopColor="#FFF2B2" />
          <stop offset="100%" stopColor="#AA7C11" />
        </linearGradient>
      </defs>
      {/* Top & Bottom Gold Filigree Lines */}
      <line x1="0" y1="2" x2="400" y2="2" stroke="url(#zariGoldGrad)" strokeWidth="1.2" />
      <line x1="0" y1="14" x2="400" y2="14" stroke="url(#zariGoldGrad)" strokeWidth="1.2" />
      {/* Continuous Scallop Embroidery */}
      <path
        d="M0 8 Q10 3 20 8 Q30 13 40 8 Q50 3 60 8 Q70 13 80 8 Q90 3 100 8 Q110 13 120 8 Q130 3 140 8 Q150 13 160 8 Q170 3 180 8 Q190 13 200 8 Q210 3 220 8 Q230 13 240 8 Q250 3 260 8 Q270 13 280 8 Q290 3 300 8 Q310 13 320 8 Q330 3 340 8 Q350 13 360 8 Q370 3 380 8 Q390 13 400 8"
        stroke="url(#zariGoldGrad)"
        strokeWidth="1.2"
        fill="none"
      />
      {/* Tiny Gold Dots */}
      {[10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230, 250, 270, 290, 310, 330, 350, 370, 390].map((x) => (
        <circle key={x} cx={x} cy="8" r="1.2" fill="#FFF2B2" />
      ))}
    </svg>
  </div>
);

// Scalloped Mughal Ogee Arch Header
export const ScallopedMughalArch = ({ className = "", width = 240, height = 32 }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <svg width={width} height={height} viewBox="0 0 240 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mughalArchGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#AA7C11" stopOpacity="0.2" />
          <stop offset="30%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#FFF2B2" />
          <stop offset="70%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#AA7C11" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <path
        d="M0 30 C40 30 70 20 90 12 C105 6 114 2 120 0 C126 2 135 6 150 12 C170 20 200 30 240 30"
        stroke="url(#mughalArchGold)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M20 30 C50 30 75 22 94 15 C107 10 114 6 120 4 C126 6 133 10 146 15 C165 22 190 30 220 30"
        stroke="url(#mughalArchGold)"
        strokeWidth="0.8"
        strokeDasharray="3 2"
        fill="none"
      />
      <circle cx="120" cy="2" r="3" fill="#FFF2B2" stroke="#AA7C11" strokeWidth="0.8" />
    </svg>
  </div>
);
