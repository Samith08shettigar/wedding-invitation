import React from 'react';
import { GoldLotus } from './IndianOrnaments';

// Horizontal Gold Ornamental Divider with central fleuron rosette
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

// Vector Floral Corner Bouquet with soft roses & gold foliage
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
        </defs>

        {/* Delicate Golden Vines */}
        <path d="M10 110 C20 70 45 45 110 10" stroke="url(#leafGrad)" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M15 90 C35 65 65 35 90 15" stroke="url(#leafGrad)" strokeWidth="0.8" strokeLinecap="round" />

        {/* Golden Leaves */}
        <path d="M30 65 C25 55 35 45 42 50 C45 60 38 68 30 65 Z" fill="url(#leafGrad)" />
        <path d="M55 40 C50 30 60 20 67 25 C70 35 63 43 55 40 Z" fill="url(#leafGrad)" />
        <path d="M22 80 C15 72 22 62 30 67 C32 75 28 82 22 80 Z" fill="url(#leafGrad)" />

        {/* Small Golden Berries */}
        <circle cx="48" cy="52" r="2.5" fill="#FFE082" />
        <circle cx="72" cy="28" r="2" fill="#FFE082" />
        <circle cx="28" cy="88" r="2" fill="#FFE082" />
        <circle cx="40" cy="74" r="1.5" fill="#FFD54F" />

        {/* Large Central Burgundy Rose */}
        <circle cx="34" cy="34" r="16" fill="url(#rosePink)" />
        <circle cx="34" cy="34" r="12" fill="#781124" />
        <path d="M26 34 C26 28 34 26 38 30 C42 34 38 40 32 40 C28 40 26 36 26 34 Z" fill="url(#rosePink)" />
        <circle cx="34" cy="34" r="4" fill="#FFAAB8" />

        {/* Secondary Peach Rose Accent */}
        <circle cx="58" cy="26" r="11" fill="url(#rosePeach)" />
        <circle cx="58" cy="26" r="7" fill="#8C2A3E" />
        <circle cx="58" cy="26" r="3" fill="#FFE0D6" />

        {/* Small Bud Left */}
        <circle cx="20" cy="52" r="8" fill="url(#rosePink)" />
        <circle cx="20" cy="52" r="4" fill="#6A0C1D" />
      </svg>
    </div>
  );
};

// 3D Realistic Gold Wax Seal with Lotus Motif & Initials
export const WaxSeal = ({ initials = "P & A", className = "", size = 76 }) => (
  <div className={`relative flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="waxBaseGrad" cx="38%" cy="32%" r="65%">
          <stop offset="0%" stopColor="#FFF4D0" />
          <stop offset="20%" stopColor="#F5D77F" />
          <stop offset="55%" stopColor="#D4AF37" />
          <stop offset="80%" stopColor="#8C610F" />
          <stop offset="100%" stopColor="#4A3105" />
        </radialGradient>
        <radialGradient id="waxIndentGrad" cx="44%" cy="38%" r="52%">
          <stop offset="0%" stopColor="#7E560B" />
          <stop offset="35%" stopColor="#AA7C11" />
          <stop offset="75%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#FFDF78" />
        </radialGradient>
        <filter id="waxShadowFilter" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#000000" floodOpacity="0.65" />
        </filter>
      </defs>

      {/* Irregular Organic Melted Wax Pool Rim */}
      <path
        d="M50 3 C64 2 77 7 86 16 C95 25 99 38 97 51 C95 64 89 76 80 85 C70 94 57 98 44 97 C31 96 19 89 12 79 C4 69 1 56 3 43 C5 30 13 18 23 11 C32 4 41 3 50 3 Z"
        fill="url(#waxBaseGrad)"
        filter="url(#waxShadowFilter)"
      />

      {/* Stamped Recessed Impression */}
      <circle cx="50" cy="50" r="35" fill="url(#waxIndentGrad)" />
      <circle cx="50" cy="50" r="33.5" fill="none" stroke="#523605" strokeWidth="1.2" strokeOpacity="0.7" />
      <circle cx="50" cy="50" r="31" fill="none" stroke="#FFF2B2" strokeWidth="0.8" strokeOpacity="0.8" />
      <circle cx="50" cy="50" r="28" fill="none" stroke="#523605" strokeWidth="0.8" strokeDasharray="2 2" strokeOpacity="0.6" />

      {/* Embossed Lotus Accent at Top of Seal */}
      <g transform="translate(50, 36) scale(0.4) translate(-20, -15)">
        <path d="M20 2 C22 10 24 16 20 24 C16 16 18 10 20 2 Z" fill="#FFF2B2" />
        <path d="M19 6 C13 11 11 18 17 25 C13 18 15 11 19 6 Z" fill="#FFF2B2" fillOpacity="0.85" />
        <path d="M21 6 C27 11 29 18 23 25 C27 18 25 11 21 6 Z" fill="#FFF2B2" fillOpacity="0.85" />
      </g>
    </svg>

    {/* Embossed Monogram Initials in Wax */}
    <div className="absolute inset-0 flex items-center justify-center pt-3 select-none pointer-events-none">
      <span className="font-royal text-sm sm:text-base font-bold tracking-widest text-[#FFFDF7] drop-shadow-[0_2px_3px_rgba(0,0,0,0.85)]">
        {initials}
      </span>
    </div>
  </div>
);

// Traditional Brass Standing Diya / Deepam with Animated Flickering Flame
export const BrassDeepam = ({ className = "", height = 110, width = 44 }) => (
  <div className={`relative flex flex-col items-center pointer-events-none select-none ${className}`}>
    <svg width={width} height={height} viewBox="0 0 44 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="deepamFlameHalo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#FFF2A3" />
          <stop offset="65%" stopColor="#FF9900" />
          <stop offset="100%" stopColor="#D84315" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="brassColumnGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8C6616" />
          <stop offset="35%" stopColor="#F5D77F" />
          <stop offset="65%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#6E4C0C" />
        </linearGradient>
      </defs>

      {/* Flame Glow Halo */}
      <circle cx="22" cy="14" r="14" fill="url(#deepamFlameHalo)" className="animate-flame" />
      
      {/* Flame Wick */}
      <ellipse cx="22" cy="14" rx="3.5" ry="7" fill="#FFFBE6" className="animate-flame" />
      <ellipse cx="22" cy="15" rx="1.5" ry="3.5" fill="#FFFFFF" />

      {/* Oil Basin */}
      <path d="M10 22 C10 28 34 28 34 22 H10 Z" fill="url(#brassColumnGrad)" stroke="#523605" strokeWidth="0.8" />
      
      {/* Tiered Brass Column */}
      <rect x="20" y="28" width="4" height="24" fill="url(#brassColumnGrad)" />
      <ellipse cx="22" cy="38" rx="8" ry="3" fill="url(#brassColumnGrad)" />
      
      {/* Mid Basin */}
      <path d="M13 52 C13 56 31 56 31 52 H13 Z" fill="url(#brassColumnGrad)" />
      <rect x="20" y="56" width="4" height="28" fill="url(#brassColumnGrad)" />
      <ellipse cx="22" cy="68" rx="10" ry="3.5" fill="url(#brassColumnGrad)" />

      {/* Fluted Base */}
      <path d="M12 84 L6 104 H38 L32 84 H12 Z" fill="url(#brassColumnGrad)" stroke="#523605" strokeWidth="0.8" />
      <rect x="4" y="104" width="36" height="5" rx="1" fill="url(#brassColumnGrad)" />
    </svg>
  </div>
);

// Hanging Moroccan / Royal Indian Gold Lantern with Candle Flame
export const HangingLantern = ({ className = "", height = 130, lanternWidth = 36 }) => (
  <div className={`relative flex flex-col items-center select-none ${className}`}>
    <svg width={lanternWidth} height={height} viewBox="0 0 40 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="lanternFlameGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF9D2" />
          <stop offset="35%" stopColor="#FFC83B" />
          <stop offset="70%" stopColor="#FF7700" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FF4500" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lanternBrassGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#AA7C11" />
          <stop offset="50%" stopColor="#FFF2B2" />
          <stop offset="100%" stopColor="#996515" />
        </linearGradient>
      </defs>

      {/* Hanging Chain */}
      <line x1="20" y1="0" x2="20" y2="40" stroke="url(#lanternBrassGrad)" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="20" cy="40" r="3" fill="url(#lanternBrassGrad)" />

      {/* Lantern Cap / Dome */}
      <path d="M10 52 L20 44 L30 52 Z" fill="url(#lanternBrassGrad)" />
      <rect x="8" y="52" width="24" height="4" rx="1" fill="url(#lanternBrassGrad)" />

      {/* Glass Chamber with Candle Flame */}
      <rect x="10" y="56" width="20" height="32" rx="2" fill="#2E0810" fillOpacity="0.45" stroke="url(#lanternBrassGrad)" strokeWidth="1" />
      
      {/* Candle Flame Glow */}
      <circle cx="20" cy="72" r="14" fill="url(#lanternFlameGlow)" className="animate-flame" />
      <ellipse cx="20" cy="73" rx="2.5" ry="4.5" fill="#FFFFFF" />

      {/* Filigree Cage Ribs */}
      <line x1="16" y1="56" x2="16" y2="88" stroke="url(#lanternBrassGrad)" strokeWidth="0.8" />
      <line x1="24" y1="56" x2="24" y2="88" stroke="url(#lanternBrassGrad)" strokeWidth="0.8" />

      {/* Bottom Finial */}
      <rect x="8" y="88" width="24" height="4" rx="1" fill="url(#lanternBrassGrad)" />
      <path d="M12 92 L20 102 L28 92 Z" fill="url(#lanternBrassGrad)" />
      <circle cx="20" cy="104" r="2.5" fill="url(#lanternBrassGrad)" />
    </svg>
  </div>
);

// Code-Rendered Sunset Palace Scene (SVG + Water Reflection + Lighting)
export const SunsetPalaceScene = ({ className = "", showFlowers = true, opacity = 1 }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`} style={{ opacity }}>
    {/* Sky Gradient: Rich Pink to Peach to Golden Sunset */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#781B38] via-[#B83E38] via-[#DF6B35] via-[#E88C43] to-[#FCD27B]" />

    {/* Sun Glow / Dusk Horizon */}
    <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-96 h-96 bg-radial from-[#FFF3D1]/85 via-[#FFA726]/45 to-transparent rounded-full blur-3xl pointer-events-none" />

    {/* Majestic SVG Palace Architecture Silhouette with Warm Lit Windows */}
    <div className="absolute top-[8%] inset-x-0 h-[52%] flex items-end justify-center">
      <svg className="w-full h-full" viewBox="0 0 1000 240" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="palaceBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4D0E1D" />
            <stop offset="40%" stopColor="#3B0814" />
            <stop offset="100%" stopColor="#1E0208" />
          </linearGradient>
          <radialGradient id="palaceWinGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#FFE066" />
            <stop offset="80%" stopColor="#FF9900" />
            <stop offset="100%" stopColor="#E65100" />
          </radialGradient>
        </defs>

        {/* Wings spanning full width */}
        <rect x="0" y="120" width="1000" height="120" fill="url(#palaceBodyGrad)" />

        {/* Left Side Chattris */}
        {[80, 220].map((cx, i) => (
          <g key={`lchat-${i}`}>
            <path d={`M${cx - 30} 100 C${cx - 30} 75 ${cx - 15} 55 ${cx} 42 C${cx + 15} 55 ${cx + 30} 75 ${cx + 30} 100 Z`} fill="url(#palaceBodyGrad)" />
            <line x1={cx} y1="30" x2={cx} y2="42" stroke="#FFC83B" strokeWidth="2" />
            <circle cx={cx} cy="28" r="3" fill="#FFF2B2" />
            <rect x={cx - 24} y="100" width="4" height="30" fill="url(#palaceBodyGrad)" />
            <rect x={cx - 8} y="100" width="4" height="30" fill="url(#palaceBodyGrad)" />
            <rect x={cx + 8} y="100" width="4" height="30" fill="url(#palaceBodyGrad)" />
            <rect x={cx + 24} y="100" width="4" height="30" fill="url(#palaceBodyGrad)" />
          </g>
        ))}

        {/* Right Side Chattris */}
        {[780, 920].map((cx, i) => (
          <g key={`rchat-${i}`}>
            <path d={`M${cx - 30} 100 C${cx - 30} 75 ${cx - 15} 55 ${cx} 42 C${cx + 15} 55 ${cx + 30} 75 ${cx + 30} 100 Z`} fill="url(#palaceBodyGrad)" />
            <line x1={cx} y1="30" x2={cx} y2="42" stroke="#FFC83B" strokeWidth="2" />
            <circle cx={cx} cy="28" r="3" fill="#FFF2B2" />
            <rect x={cx - 24} y="100" width="4" height="30" fill="url(#palaceBodyGrad)" />
            <rect x={cx - 8} y="100" width="4" height="30" fill="url(#palaceBodyGrad)" />
            <rect x={cx + 8} y="100" width="4" height="30" fill="url(#palaceBodyGrad)" />
            <rect x={cx + 24} y="100" width="4" height="30" fill="url(#palaceBodyGrad)" />
          </g>
        ))}

        {/* Secondary Domes */}
        <path d="M350 100 C350 72 375 52 400 40 C425 52 450 72 450 100 Z" fill="url(#palaceBodyGrad)" />
        <path d="M550 100 C550 72 575 52 600 40 C625 52 650 72 650 100 Z" fill="url(#palaceBodyGrad)" />

        {/* Grand Central Onion Dome */}
        <path
          d="M440 90 C440 50 470 20 500 2 C530 20 560 50 560 90 H440 Z"
          fill="url(#palaceBodyGrad)"
        />
        <line x1="500" y1="-8" x2="500" y2="2" stroke="#FFD700" strokeWidth="3" />
        <circle cx="500" cy="-10" r="4" fill="#FFF2B2" />

        {/* Central Facade & Grand Arch */}
        <rect x="420" y="90" width="160" height="150" fill="url(#palaceBodyGrad)" />
        <path d="M480 150 C480 120 520 120 520 150 V240 H480 Z" fill="url(#palaceWinGlow)" opacity="0.95" />

        {/* Illuminated Arched Windows */}
        {[
          50, 100, 150, 200, 250, 300, 350,
          650, 700, 750, 800, 850, 900, 950,
          440, 560,
        ].map((x, i) => (
          <rect key={`win-${i}`} x={x} y="140" width="14" height="24" rx="7" fill="url(#palaceWinGlow)" opacity="0.9" />
        ))}
      </svg>
    </div>

    {/* Lake Water Surface with Reflections & Animated Ripples */}
    <div className="absolute top-[58%] inset-x-0 bottom-0 bg-gradient-to-b from-[#2B050E] via-[#3D0A16] to-[#150005]">
      {/* Reflected Palace Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-gradient-to-b from-[#FFA726]/40 via-[#FF7043]/20 to-transparent blur-2xl" />
      
      {/* Ripples */}
      <div className="absolute inset-x-0 top-3 h-[1.5px] bg-gradient-to-r from-transparent via-[#FFD54F]/50 to-transparent animate-pulse" />
      <div className="absolute inset-x-0 top-10 h-[1px] bg-gradient-to-r from-transparent via-[#FFB74D]/35 to-transparent" />
      <div className="absolute inset-x-0 top-18 h-[1px] bg-gradient-to-r from-transparent via-[#FF8A65]/25 to-transparent" />

      {/* Floating Lotus & Diya details */}
      <div className="absolute inset-x-0 bottom-6 flex justify-between px-8 items-end pointer-events-none">
        <div className="flex flex-col items-center animate-bounce-slow">
          <div className="w-3 h-4 bg-gradient-to-t from-[#FF6F00] via-[#FFD54F] to-white rounded-full blur-[0.5px] animate-pulse" />
          <div className="w-7 h-2.5 bg-[#8C5512] rounded-full shadow-lg -mt-0.5" />
        </div>

        <div className="text-2xl filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] animate-pulse">
          🪷
        </div>

        <div className="flex flex-col items-center animate-bounce-slow" style={{ animationDelay: '1.4s' }}>
          <div className="w-3 h-4 bg-gradient-to-t from-[#FF6F00] via-[#FFD54F] to-white rounded-full blur-[0.5px] animate-pulse" />
          <div className="w-7 h-2.5 bg-[#8C5512] rounded-full shadow-lg -mt-0.5" />
        </div>
      </div>
    </div>

    {/* Optional Corner Bouquets */}
    {showFlowers && (
      <div className="absolute bottom-0 inset-x-0 h-16 flex items-end justify-between px-2 pointer-events-none">
        <FloralCornerBouquet position="bottom-left" className="w-28 h-28 -mb-3 -ml-3" />
        <FloralCornerBouquet position="bottom-right" className="w-28 h-28 -mb-3 -mr-3" />
      </div>
    )}
  </div>
);

// Event Timeline Badges
export const ScheduleBadge = ({ type = "ceremony", className = "" }) => {
  return (
    <div className={`relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#FAF5EB] via-[#F3E5C8] to-[#E2CA92] border-2 border-[#D4AF37] shadow-md select-none shrink-0 ${className}`}>
      {type === "mehendi" && (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#781124" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 11V6a2 2 0 0 0-4 0v4M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v7" />
          <path d="M6 13a4 4 0 0 0-2 3.5V18a4 4 0 0 0 4 4h7a5 5 0 0 0 5-5v-5a2 2 0 0 0-4 0" />
          <circle cx="12" cy="16" r="1" fill="#781124" />
        </svg>
      )}

      {type === "ceremony" && (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#781124" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 20h16M6 20v-5M18 20v-5M8 15h8" />
          <path d="M12 4c1.5 2.5 3 4 3 6a3 3 0 1 1-6 0c0-2 1.5-3.5 3-6Z" fill="#D4AF37" />
          <path d="M12 8c.5 1 1 1.5 1 2a1 1 0 1 1-2 0c0-.5.5-1 1-2Z" fill="#FAF5EB" />
        </svg>
      )}

      {type === "reception" && (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#781124" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="12" r="5" />
          <circle cx="15" cy="12" r="5" />
          <path d="M12 7l1.5-3h-3L12 7Z" fill="#D4AF37" stroke="#781124" strokeWidth="1" />
        </svg>
      )}
    </div>
  );
};
