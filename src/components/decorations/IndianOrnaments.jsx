import React from 'react';

// Traditional Indian Paisley (Kalka / Ambi Motif) in Gold Foil
export const GoldPaisley = ({ className = "", width = 48, height = 64, flip = false }) => (
  <div className={`pointer-events-none select-none ${className}`} style={{ transform: flip ? 'scaleX(-1)' : 'none' }}>
    <svg width={width} height={height} viewBox="0 0 50 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="paisleyGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF4D0" />
          <stop offset="30%" stopColor="#E2BA4D" />
          <stop offset="70%" stopColor="#C49326" />
          <stop offset="100%" stopColor="#8C610F" />
        </linearGradient>
      </defs>
      {/* Outer Curved Paisley Body */}
      <path
        d="M25 68 C12 68 3 58 3 43 C3 25 22 14 30 2 C32 10 37 14 43 18 C47 22 49 28 47 34 C45 40 37 42 35 38 C33 34 37 28 35 25 C33 22 28 25 26 29 C22 35 25 44 32 46 C37 48 44 45 46 51 C48 58 40 68 25 68 Z"
        stroke="url(#paisleyGold)"
        strokeWidth="1.5"
        fill="url(#paisleyGold)"
        fillOpacity="0.12"
      />
      {/* Inner Paisley Swirl */}
      <path
        d="M24 58 C16 58 10 52 10 44 C10 32 22 24 28 15"
        stroke="url(#paisleyGold)"
        strokeWidth="1"
        strokeDasharray="2 2"
        fill="none"
      />
      {/* Central Rosette / Eye */}
      <circle cx="25" cy="45" r="4" fill="url(#paisleyGold)" />
      <circle cx="25" cy="45" r="1.5" fill="#2E040D" />
      {/* Small Beaded Accents */}
      <circle cx="16" cy="36" r="1.5" fill="url(#paisleyGold)" />
      <circle cx="20" cy="28" r="1.5" fill="url(#paisleyGold)" />
      <circle cx="34" cy="54" r="1.5" fill="url(#paisleyGold)" />
    </svg>
  </div>
);

// Traditional Blooming Gold Lotus Motif (Padma)
export const GoldLotus = ({ className = "", size = 36 }) => (
  <div className={`pointer-events-none select-none ${className}`}>
    <svg width={size} height={size * 0.75} viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lotusGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF6D6" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#996515" />
        </linearGradient>
      </defs>
      {/* Central Petal */}
      <path d="M20 2 C22 10 24 16 20 24 C16 16 18 10 20 2 Z" fill="url(#lotusGold)" />
      {/* Left Inner Petal */}
      <path d="M19 6 C13 11 11 18 17 25 C13 18 15 11 19 6 Z" fill="url(#lotusGold)" fillOpacity="0.9" />
      {/* Right Inner Petal */}
      <path d="M21 6 C27 11 29 18 23 25 C27 18 25 11 21 6 Z" fill="url(#lotusGold)" fillOpacity="0.9" />
      {/* Left Outer Petal */}
      <path d="M16 12 C9 16 7 22 14 26 C8 21 11 15 16 12 Z" fill="url(#lotusGold)" fillOpacity="0.75" />
      {/* Right Outer Petal */}
      <path d="M24 12 C31 16 33 22 26 26 C32 21 29 15 24 12 Z" fill="url(#lotusGold)" fillOpacity="0.75" />
      {/* Calyx Base */}
      <path d="M12 25 C16 28 24 28 28 25 C26 29 14 29 12 25 Z" fill="url(#lotusGold)" />
    </svg>
  </div>
);

// Traditional Indian Hanging Toran / Flower Garland (Marigolds & Mango Leaves)
export const TraditionalToran = ({ className = "" }) => (
  <div className={`absolute top-0 inset-x-0 h-14 pointer-events-none select-none z-20 ${className}`}>
    <svg className="w-full h-full" viewBox="0 0 420 50" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <linearGradient id="mangoLeaf" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#33691E" />
          <stop offset="70%" stopColor="#558B2F" />
          <stop offset="100%" stopColor="#2E7D32" />
        </linearGradient>
        <linearGradient id="toranCord" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#FFF4D0" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>

      {/* Hanging Top Gold Braided Cord */}
      <line x1="0" y1="4" x2="420" y2="4" stroke="url(#toranCord)" strokeWidth="2.5" />
      <line x1="0" y1="7" x2="420" y2="7" stroke="#FF6F00" strokeWidth="1" strokeDasharray="3 3" />

      {/* Repeating Festoon Swags (3 Arched Swags across top) */}
      <path d="M0 4 Q70 28 140 4" stroke="url(#toranCord)" strokeWidth="1.5" fill="none" />
      <path d="M140 4 Q210 28 280 4" stroke="url(#toranCord)" strokeWidth="1.5" fill="none" />
      <path d="M280 4 Q350 28 420 4" stroke="url(#toranCord)" strokeWidth="1.5" fill="none" />

      {/* Mango Leaves (Paan / Ashoka leaves pointing down) */}
      {[25, 70, 115, 165, 210, 255, 305, 350, 395].map((x, i) => (
        <path
          key={`leaf-${i}`}
          d={`M${x} 6 C${x - 4} 16 ${x - 5} 24 ${x} 32 C${x + 5} 24 ${x + 4} 16 ${x} 6 Z`}
          fill="url(#mangoLeaf)"
          stroke="#1B5E20"
          strokeWidth="0.5"
        />
      ))}

      {/* Genda / Marigold Bloom Clusters */}
      {[0, 35, 70, 105, 140, 175, 210, 245, 280, 315, 350, 385, 420].map((x, i) => (
        <g key={`flower-${i}`} transform={`translate(${x}, 5)`}>
          <circle cx="0" cy="0" r="5" fill={i % 2 === 0 ? "url(#marigoldOrange)" : "url(#marigoldYellow)"} />
          <circle cx="0" cy="0" r="2" fill="#FFE082" />
        </g>
      ))}

      {/* Hanging Bell / Brass Pendant at Swag Junctions */}
      {[140, 280].map((x, i) => (
        <g key={`bell-${i}`} transform={`translate(${x}, 4)`}>
          <line x1="0" y1="0" x2="0" y2="18" stroke="url(#toranCord)" strokeWidth="1.2" />
          <circle cx="0" cy="18" r="4" fill="url(#toranCord)" />
          <circle cx="0" cy="24" r="2" fill="#FFB300" />
        </g>
      ))}
    </svg>
  </div>
);

// Traditional Indian Luxury Printed Inner Lining Pattern (Lattice with Lotus & Gold Butis)
export const IndianLiningPattern = ({ className = "" }) => (
  <div className={`absolute inset-0 bg-[#FFFDF7] overflow-hidden ${className}`}>
    <svg className="w-full h-full opacity-30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="indianJali" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
          {/* Subtle Diagonal Lattice */}
          <path d="M0 15 L15 0 L30 15 L15 30 Z" stroke="#D4AF37" strokeWidth="0.6" fill="none" />
          <circle cx="15" cy="15" r="1.5" fill="#AA7C11" />
          {/* Small 4-petal flower at grid points */}
          <circle cx="0" cy="0" r="1" fill="#D4AF37" />
          <circle cx="30" cy="0" r="1" fill="#D4AF37" />
          <circle cx="0" cy="30" r="1" fill="#D4AF37" />
          <circle cx="30" cy="30" r="1" fill="#D4AF37" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#indianJali)" />
    </svg>
  </div>
);

// Traditional Indian Gold Embroidery Border (Zari Trim along envelope flap)
export const IndianZariBorder = ({ className = "" }) => (
  <div className={`w-full overflow-hidden ${className}`}>
    <svg className="w-full h-4" viewBox="0 0 360 16" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="zariGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#AA7C11" />
          <stop offset="25%" stopColor="#FFF2B2" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="75%" stopColor="#FFF2B2" />
          <stop offset="100%" stopColor="#AA7C11" />
        </linearGradient>
      </defs>
      {/* Top & Bottom Gold Filigree Lines */}
      <line x1="0" y1="2" x2="360" y2="2" stroke="url(#zariGold)" strokeWidth="1.2" />
      <line x1="0" y1="14" x2="360" y2="14" stroke="url(#zariGold)" strokeWidth="1.2" />
      {/* Continuous Wave / Scallop Embroidery */}
      <path
        d="M0 8 Q10 3 20 8 Q30 13 40 8 Q50 3 60 8 Q70 13 80 8 Q90 3 100 8 Q110 13 120 8 Q130 3 140 8 Q150 13 160 8 Q170 3 180 8 Q190 13 200 8 Q210 3 220 8 Q230 13 240 8 Q250 3 260 8 Q270 13 280 8 Q290 3 300 8 Q310 13 320 8 Q330 3 340 8 Q350 13 360 8"
        stroke="url(#zariGold)"
        strokeWidth="1"
        fill="none"
      />
      {/* Tiny Gold Dots */}
      {[10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230, 250, 270, 290, 310, 330, 350].map((x) => (
        <circle key={x} cx={x} cy="8" r="1" fill="#FFF2B2" />
      ))}
    </svg>
  </div>
);
