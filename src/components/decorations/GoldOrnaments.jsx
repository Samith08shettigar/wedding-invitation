import React from 'react';

// Horizontal Gold Ornamental Divider with central fleuron
export const GoldDivider = ({ className = "my-4", width = "160px" }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <svg width={width} height="18" viewBox="0 0 160 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 9H60M100 9H160" stroke="url(#goldGrad)" strokeWidth="1" strokeLinecap="round" />
      <circle cx="68" cy="9" r="1.5" fill="url(#goldGrad)" />
      <circle cx="92" cy="9" r="1.5" fill="url(#goldGrad)" />
      {/* Central Rosette */}
      <path d="M80 3L82.5 7.5L87 9L82.5 10.5L80 15L77.5 10.5L73 9L77.5 7.5L80 3Z" fill="url(#goldGrad)" />
      <circle cx="80" cy="9" r="2" fill="#FAF5EB" />
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#AA7C11" stopOpacity="0.1" />
          <stop offset="25%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#FFF2B2" />
          <stop offset="75%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#AA7C11" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// Vertical Gold Divider with diamond fleuron (for From Our Families)
export const VerticalGoldDivider = ({ height = "120px", className = "" }) => (
  <div className={`flex flex-col items-center justify-center ${className}`}>
    <svg width="18" height={height} viewBox="0 0 18 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 0V48M9 72V120" stroke="url(#vGoldGrad)" strokeWidth="1" strokeLinecap="round" />
      <circle cx="9" cy="54" r="1.5" fill="url(#vGoldGrad)" />
      <circle cx="9" cy="66" r="1.5" fill="url(#vGoldGrad)" />
      <path d="M9 56L12.5 60L9 64L5.5 60L9 56Z" fill="url(#vGoldGrad)" />
      <defs>
        <linearGradient id="vGoldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#FFF2B2" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// Intricate Corner Floral Flourish
export const GoldCorner = ({ position = "top-left", className = "" }) => {
  const rotation = {
    "top-left": "rotate-0",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90",
  }[position];

  return (
    <div className={`pointer-events-none select-none ${rotation} ${className}`}>
      <svg width="52" height="52" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 36V2H36" stroke="url(#cornerGold)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 32V6H32" stroke="url(#cornerGold)" strokeWidth="0.8" strokeDasharray="2 2" />
        <path d="M6 6C14 14 18 10 24 16C26 18 28 24 28 24C28 24 22 22 20 24C14 30 18 34 10 40" stroke="url(#cornerGold)" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="15" cy="15" r="2" fill="url(#cornerGold)" />
        <circle cx="24" cy="9" r="1.5" fill="url(#cornerGold)" />
        <circle cx="9" cy="24" r="1.5" fill="url(#cornerGold)" />
        <defs>
          <linearGradient id="cornerGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF6D6" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#996515" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// Vector Floral Corner Bouquet with soft pink, coral, burgundy roses & gold foliage
export const FloralCornerBouquet = ({ position = "top-left", className = "" }) => {
  const transform = {
    "top-left": "",
    "top-right": "scale(-1, 1)",
    "bottom-left": "scale(1, -1)",
    "bottom-right": "scale(-1, -1)",
  }[position];

  return (
    <div className={`pointer-events-none select-none ${className}`} style={{ transform }}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#7A560D" />
          </linearGradient>
          <linearGradient id="rosePink" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFAAB8" />
            <stop offset="50%" stopColor="#E26D85" />
            <stop offset="100%" stopColor="#9E223D" />
          </linearGradient>
          <linearGradient id="rosePeach" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD2C2" />
            <stop offset="50%" stopColor="#FA8F75" />
            <stop offset="100%" stopColor="#B34A32" />
          </linearGradient>
          <linearGradient id="roseBurgundy" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C93B58" />
            <stop offset="60%" stopColor="#781124" />
            <stop offset="100%" stopColor="#4A0512" />
          </linearGradient>
        </defs>

        {/* Golden Vines and Leaves */}
        <path d="M4 4 C30 18 45 35 60 75 C64 85 75 95 90 100" stroke="#C59B27" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 14 C35 10 44 22 38 30 C32 38 22 28 22 14 Z" fill="url(#leafGrad)" fillOpacity="0.6" stroke="#D4AF37" strokeWidth="0.8" />
        <path d="M12 28 C8 42 20 48 26 40 C32 32 24 24 12 28 Z" fill="url(#leafGrad)" fillOpacity="0.6" stroke="#D4AF37" strokeWidth="0.8" />
        <path d="M48 36 C62 30 68 42 60 50 C52 58 40 48 48 36 Z" fill="url(#leafGrad)" fillOpacity="0.6" stroke="#D4AF37" strokeWidth="0.8" />
        <path d="M36 65 C50 62 56 75 46 84 C36 93 28 80 36 65 Z" fill="url(#leafGrad)" fillOpacity="0.6" stroke="#D4AF37" strokeWidth="0.8" />

        {/* Gold Bud Accents */}
        <circle cx="72" cy="48" r="3.5" fill="#D4AF37" />
        <circle cx="85" cy="62" r="4" fill="#FFDF78" />
        <circle cx="58" cy="88" r="3.5" fill="#D4AF37" />

        {/* Layered Rose 1 (Top Left Pink) */}
        <g transform="translate(24, 24)">
          <circle cx="0" cy="0" r="16" fill="url(#rosePink)" />
          <path d="M-12 -5 C-14 6 -5 14 6 12 C17 10 16 -5 7 -11 C-2 -17 -10 -15 -12 -5 Z" fill="#D9536F" />
          <path d="M-9 -3 C-10 4 -3 10 5 8 C13 6 12 -3 5 -8 C-2 -13 -7 -10 -9 -3 Z" fill="#FFAAB8" />
          <path d="M-5 0 C-5 4 0 7 4 5 C8 4 7 0 3 -3 C-1 -6 -5 -4 -5 0 Z" fill="#FFF0F3" />
        </g>

        {/* Layered Rose 2 (Outer Peach) */}
        <g transform="translate(54, 28)">
          <circle cx="0" cy="0" r="13" fill="url(#rosePeach)" />
          <path d="M-9 -4 C-11 4 -4 10 4 9 C11 7 10 -4 5 -8 C0 -12 -6 -12 -9 -4 Z" fill="#F07C60" />
          <path d="M-6 -2 C-7 3 -1 7 4 6 C9 4 8 -2 4 -5 C0 -8 -5 -8 -6 -2 Z" fill="#FFD2C2" />
          <circle cx="0" cy="0" r="3.5" fill="#FFF5F0" />
        </g>

        {/* Layered Rose 3 (Lower Burgundy) */}
        <g transform="translate(28, 56)">
          <circle cx="0" cy="0" r="14" fill="url(#roseBurgundy)" />
          <path d="M-10 -4 C-12 5 -4 12 5 10 C14 8 13 -4 6 -9 C0 -14 -8 -13 -10 -4 Z" fill="#991D34" />
          <path d="M-7 -2 C-8 4 -2 9 4 7 C10 5 9 -2 4 -6 C-1 -10 -6 -8 -7 -2 Z" fill="#C93B58" />
          <circle cx="0" cy="0" r="3" fill="#FFC2D0" />
        </g>
      </svg>
    </div>
  );
};

// Intricate Gold Monogram Medallion
export const MedallionMonogram = ({ monogram = "P & A", className = "" }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg width="200" height="200" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="medallionBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4A0A16" />
          <stop offset="70%" stopColor="#2A020B" />
          <stop offset="100%" stopColor="#150005" />
        </radialGradient>
        <linearGradient id="medallionGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF6D6" />
          <stop offset="30%" stopColor="#D4AF37" />
          <stop offset="70%" stopColor="#AA7C11" />
          <stop offset="100%" stopColor="#F5DE88" />
        </linearGradient>
        <filter id="goldDrop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.6" />
        </filter>
      </defs>

      {/* Outer Halo */}
      <circle cx="90" cy="90" r="82" fill="none" stroke="url(#medallionGold)" strokeWidth="0.8" strokeOpacity="0.5" />
      
      {/* Scalloped Floral Outer Frame (16 cusps) */}
      <path
        d="M90 6 C96 16 104 16 114 10 C122 18 130 18 142 16 C146 26 154 30 162 36 C162 48 168 54 172 66 C168 76 170 84 174 90 C170 96 168 104 172 114 C168 126 162 132 162 144 C154 150 146 154 142 164 C130 162 122 162 114 170 C104 164 96 164 90 174 C84 164 76 164 66 170 C58 162 50 162 38 164 C34 154 26 150 18 144 C18 132 12 126 8 114 C12 104 10 96 6 90 C10 84 12 76 8 66 C12 54 18 48 18 36 C26 30 34 26 38 16 C50 18 58 18 66 10 C76 16 84 16 90 6 Z"
        fill="url(#medallionBg)"
        stroke="url(#medallionGold)"
        strokeWidth="2.2"
        filter="url(#goldDrop)"
      />

      {/* Inner Decorative Beaded Rings */}
      <circle cx="90" cy="90" r="68" fill="none" stroke="url(#medallionGold)" strokeWidth="1.2" />
      <circle cx="90" cy="90" r="63" fill="none" stroke="url(#medallionGold)" strokeWidth="0.8" strokeDasharray="3 3" />
      <circle cx="90" cy="90" r="54" fill="none" stroke="url(#medallionGold)" strokeWidth="1.5" />

      {/* 8 Ornamental Lotus Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 90 90)`}>
          <path d="M90 28 C93 35 95 40 90 44 C85 40 87 35 90 28 Z" fill="url(#medallionGold)" />
          <circle cx="90" cy="25" r="1.5" fill="url(#medallionGold)" />
        </g>
      ))}
    </svg>

    {/* Center Typography */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none">
      <span className="font-royal text-3xl sm:text-4xl font-semibold tracking-wider text-gold-shimmer drop-shadow-md">
        {monogram}
      </span>
    </div>
  </div>
);

// 3D Realistic Gold Wax Seal with initials
export const WaxSeal = ({ initials = "P & A", className = "", size = 76 }) => (
  <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="waxBase" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="25%" stopColor="#E2BA4D" />
          <stop offset="65%" stopColor="#C49326" />
          <stop offset="85%" stopColor="#8C610F" />
          <stop offset="100%" stopColor="#5E3F05" />
        </radialGradient>
        <radialGradient id="waxIndent" cx="45%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#7E560B" />
          <stop offset="40%" stopColor="#A67B1E" />
          <stop offset="85%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#ECC45F" />
        </radialGradient>
        <filter id="waxShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.55" />
        </filter>
      </defs>

      {/* Irregular Organic Wax Pool Rim */}
      <path
        d="M50 4 C62 3 74 8 83 17 C92 26 97 38 96 50 C95 63 90 75 81 84 C72 93 59 97 47 96 C34 95 23 89 15 80 C7 71 3 59 4 47 C5 34 11 23 20 15 C29 7 40 3 50 4 Z"
        fill="url(#waxBase)"
        filter="url(#waxShadow)"
      />

      {/* Stamped Recessed Impression */}
      <circle cx="50" cy="50" r="34" fill="url(#waxIndent)" />
      <circle cx="50" cy="50" r="33" fill="none" stroke="#604005" strokeWidth="1.2" strokeOpacity="0.6" />
      <circle cx="50" cy="50" r="31" fill="none" stroke="#FFF2B2" strokeWidth="0.8" strokeOpacity="0.7" />
      <circle cx="50" cy="50" r="28" fill="none" stroke="#604005" strokeWidth="0.8" strokeDasharray="2 2" strokeOpacity="0.5" />
    </svg>

    {/* Embossed Text in Wax */}
    <div className="absolute inset-0 flex items-center justify-center select-none">
      <span className="font-royal text-sm sm:text-base font-bold tracking-widest text-[#FFF9E6] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
        {initials}
      </span>
    </div>
  </div>
);

// Hanging Moroccan / Indian Gold Lantern with Candle Flame Glow
export const HangingLantern = ({ className = "", height = 120, lanternWidth = 36 }) => (
  <div className={`relative flex flex-col items-center select-none ${className}`}>
    <svg width={lanternWidth} height={height} viewBox="0 0 40 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="candleFlameGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF9D2" />
          <stop offset="35%" stopColor="#FFC83B" />
          <stop offset="70%" stopColor="#FF7700" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FF4500" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lanternBrass" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#AA7C11" />
          <stop offset="50%" stopColor="#FFF2B2" />
          <stop offset="100%" stopColor="#996515" />
        </linearGradient>
      </defs>

      {/* Hanging Chain */}
      <line x1="20" y1="0" x2="20" y2="40" stroke="url(#lanternBrass)" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="20" cy="40" r="3" fill="url(#lanternBrass)" />

      {/* Lantern Cap / Dome */}
      <path d="M10 52 L20 44 L30 52 Z" fill="url(#lanternBrass)" />
      <rect x="8" y="52" width="24" height="4" rx="1" fill="url(#lanternBrass)" />

      {/* Glass Chamber with Candle Flame */}
      <rect x="10" y="56" width="20" height="32" rx="2" fill="#2E0810" fillOpacity="0.4" stroke="url(#lanternBrass)" strokeWidth="1" />
      
      {/* Candle Flame Glow */}
      <circle cx="20" cy="72" r="14" fill="url(#candleFlameGlow)" className="animate-pulse" />
      <ellipse cx="20" cy="73" rx="2.5" ry="4.5" fill="#FFFFFF" />

      {/* Filigree Cage Ribs */}
      <line x1="16" y1="56" x2="16" y2="88" stroke="url(#lanternBrass)" strokeWidth="0.8" />
      <line x1="24" y1="56" x2="24" y2="88" stroke="url(#lanternBrass)" strokeWidth="0.8" />

      {/* Bottom Finial */}
      <rect x="8" y="88" width="24" height="4" rx="1" fill="url(#lanternBrass)" />
      <path d="M12 92 L20 102 L28 92 Z" fill="url(#lanternBrass)" />
      <circle cx="20" cy="104" r="2" fill="url(#lanternBrass)" />
    </svg>
  </div>
);

// Code-Rendered Sunset Palace Scene (SVG + CSS Animation)
export const SunsetPalaceScene = ({ className = "", showFlowers = true, opacity = 1 }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`} style={{ opacity }}>
    {/* Sky Gradient: Rich Pink to Peach to Golden Sunset */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#781B38] via-[#B83E38] via-[#DF6B35] via-[#E88C43] to-[#FCD27B]" />

    {/* Sun Glow / Dusk Horizon */}
    <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-80 h-80 bg-radial from-[#FFF3D1]/80 via-[#FFA726]/40 to-transparent rounded-full blur-3xl" />

    {/* Majestic SVG Palace Architecture Silhouette with Illuminated Warm Windows */}
    <div className="absolute top-[10%] inset-x-0 h-[48%] flex items-end justify-center">
      <svg className="w-full h-full" viewBox="0 0 420 220" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="palaceBody" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4D0E1D" />
            <stop offset="40%" stopColor="#3B0814" />
            <stop offset="100%" stopColor="#1E0208" />
          </linearGradient>
          <radialGradient id="windowGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#FFE066" />
            <stop offset="80%" stopColor="#FF9900" />
            <stop offset="100%" stopColor="#E65100" />
          </radialGradient>
          <filter id="warmGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Far Background Wings */}
        <rect x="10" y="110" width="400" height="110" fill="url(#palaceBody)" />

        {/* Left Chattri Pavilion */}
        <path d="M40 90 C40 70 58 55 70 45 C82 55 100 70 100 90 Z" fill="url(#palaceBody)" />
        <rect x="69" y="32" width="2" height="13" fill="#FFC83B" />
        <circle cx="70" cy="30" r="2.5" fill="#FFF2B2" />
        {/* Chattri Pillars */}
        <rect x="44" y="90" width="4" height="30" fill="url(#palaceBody)" />
        <rect x="60" y="90" width="4" height="30" fill="url(#palaceBody)" />
        <rect x="76" y="90" width="4" height="30" fill="url(#palaceBody)" />
        <rect x="92" y="90" width="4" height="30" fill="url(#palaceBody)" />

        {/* Right Chattri Pavilion */}
        <path d="M320 90 C320 70 338 55 350 45 C362 55 380 70 380 90 Z" fill="url(#palaceBody)" />
        <rect x="349" y="32" width="2" height="13" fill="#FFC83B" />
        <circle cx="350" cy="30" r="2.5" fill="#FFF2B2" />
        {/* Chattri Pillars */}
        <rect x="324" y="90" width="4" height="30" fill="url(#palaceBody)" />
        <rect x="340" y="90" width="4" height="30" fill="url(#palaceBody)" />
        <rect x="356" y="90" width="4" height="30" fill="url(#palaceBody)" />
        <rect x="372" y="90" width="4" height="30" fill="url(#palaceBody)" />

        {/* Main Central Grand Onion Dome (Towers High in the Sunset Sky) */}
        <path
          d="M160 80 C160 50 185 24 210 6 C235 24 260 50 260 80 H160 Z"
          fill="url(#palaceBody)"
        />
        {/* Grand Finial on Central Dome */}
        <line x1="210" y1="0" x2="210" y2="7" stroke="#FFD700" strokeWidth="3" />
        <circle cx="210" cy="0" r="3.5" fill="#FFF2B2" />

        {/* Flanking Secondary Domes */}
        <path d="M120 95 C120 75 138 60 150 50 C162 60 180 75 180 95 Z" fill="url(#palaceBody)" />
        <path d="M240 95 C240 75 258 60 270 50 C282 60 300 75 300 95 Z" fill="url(#palaceBody)" />

        {/* Central Multi-Story Arch Facade */}
        <rect x="130" y="80" width="160" height="140" fill="url(#palaceBody)" />
        
        {/* Grand Center Jharokha Arch with Golden Illumination */}
        <path d="M188 150 C188 120 232 120 232 150 V220 H188 Z" fill="#140104" />
        <path d="M190 152 C190 125 230 125 230 152 V220 H190 Z" fill="url(#windowGlow)" opacity="0.95" filter="url(#warmGlow)" />

        {/* Illuminated Warm Arched Windows (Upper & Lower Tiers) */}
        {[
          { x: 30, y: 130 }, { x: 50, y: 130 }, { x: 75, y: 130 }, { x: 95, y: 130 },
          { x: 140, y: 105 }, { x: 160, y: 105 }, { x: 250, y: 105 }, { x: 270, y: 105 },
          { x: 315, y: 130 }, { x: 335, y: 130 }, { x: 360, y: 130 }, { x: 380, y: 130 },
          { x: 140, y: 155 }, { x: 160, y: 155 }, { x: 250, y: 155 }, { x: 270, y: 155 },
          { x: 40, y: 165 }, { x: 80, y: 165 }, { x: 330, y: 165 }, { x: 370, y: 165 },
        ].map((win, i) => (
          <g key={i}>
            <rect x={win.x} y={win.y} width="12" height="20" rx="6" fill="url(#windowGlow)" opacity="0.95" filter="url(#warmGlow)" />
            <path d={`M${win.x + 1} ${win.y + 8} H${win.x + 11}`} stroke="#3B030D" strokeWidth="0.8" />
          </g>
        ))}

        {/* Water Edge Stone Balustrade */}
        <rect x="0" y="210" width="420" height="10" fill="#150005" />
      </svg>
    </div>

    {/* Lake Water Surface with Reflections & Ripple Animations */}
    <div className="absolute top-[58%] inset-x-0 bottom-0 bg-gradient-to-b from-[#2B050E] via-[#3D0A16] to-[#150005]">
      {/* Reflected Palace Glow in Water */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-36 bg-gradient-to-b from-[#FFA726]/50 via-[#FF7043]/30 to-transparent blur-xl" />
      
      {/* Animated Water Ripples */}
      <div className="absolute inset-x-0 top-3 h-[1.5px] bg-gradient-to-r from-transparent via-[#FFD54F]/60 to-transparent animate-pulse" />
      <div className="absolute inset-x-0 top-10 h-[1px] bg-gradient-to-r from-transparent via-[#FFB74D]/40 to-transparent" style={{ animationDelay: '1s' }} />
      <div className="absolute inset-x-0 top-18 h-[1px] bg-gradient-to-r from-transparent via-[#FF8A65]/30 to-transparent" style={{ animationDelay: '2s' }} />

      {/* Floating Lotus Flowers & Diyas on the Water */}
      <div className="absolute inset-x-0 bottom-6 flex justify-between px-6 items-end">
        {/* Floating Diya Left */}
        <div className="flex flex-col items-center animate-bounce-slow">
          <div className="w-3 h-4 bg-gradient-to-t from-[#FF6F00] via-[#FFD54F] to-white rounded-full blur-[0.5px] animate-pulse" />
          <div className="w-7 h-2.5 bg-[#8C5512] rounded-full shadow-lg -mt-0.5" />
        </div>

        {/* Floating Lotus Blossom Center */}
        <div className="text-2xl filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] animate-pulse">
          🪷
        </div>

        {/* Floating Diya Right */}
        <div className="flex flex-col items-center animate-bounce-slow" style={{ animationDelay: '1.2s' }}>
          <div className="w-3 h-4 bg-gradient-to-t from-[#FF6F00] via-[#FFD54F] to-white rounded-full blur-[0.5px] animate-pulse" />
          <div className="w-7 h-2.5 bg-[#8C5512] rounded-full shadow-lg -mt-0.5" />
        </div>
      </div>
    </div>

    {/* Foreground Garden Blossoms across bottom edge */}
    {showFlowers && (
      <div className="absolute bottom-0 inset-x-0 h-16 flex items-end justify-between px-1 pointer-events-none">
        <FloralCornerBouquet position="bottom-left" className="w-28 h-28 -mb-3 -ml-3" />
        <FloralCornerBouquet position="bottom-right" className="w-28 h-28 -mb-3 -mr-3" />
      </div>
    )}
  </div>
);

// Event Timeline Badges (Mehendi, Ceremony, Reception)
export const ScheduleBadge = ({ type = "ceremony", className = "" }) => {
  return (
    <div className={`relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#FAF5EB] via-[#F3E5C8] to-[#E2CA92] border-2 border-[#D4AF37] shadow-md select-none shrink-0 ${className}`}>
      {type === "mehendi" && (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#781124" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Henna Hand / Paisley */}
          <path d="M18 11V6a2 2 0 0 0-4 0v4M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v7" />
          <path d="M6 13a4 4 0 0 0-2 3.5V18a4 4 0 0 0 4 4h7a5 5 0 0 0 5-5v-5a2 2 0 0 0-4 0" />
          <circle cx="12" cy="16" r="1" fill="#781124" />
        </svg>
      )}

      {type === "ceremony" && (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#781124" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Sacred Mandap / Havan Fire */}
          <path d="M4 20h16M6 20v-5M18 20v-5M8 15h8" />
          <path d="M12 4c1.5 2.5 3 4 3 6a3 3 0 1 1-6 0c0-2 1.5-3.5 3-6Z" fill="#D4AF37" />
          <path d="M12 8c.5 1 1 1.5 1 2a1 1 0 1 1-2 0c0-.5.5-1 1-2Z" fill="#FAF5EB" />
        </svg>
      )}

      {type === "reception" && (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#781124" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Royal Garland / Rings */}
          <circle cx="9" cy="12" r="5" />
          <circle cx="15" cy="12" r="5" />
          <path d="M12 7l1.5-3h-3L12 7Z" fill="#D4AF37" stroke="#781124" strokeWidth="1" />
        </svg>
      )}
    </div>
  );
};
