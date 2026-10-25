import React from 'react';
import { weddingData } from '../data/weddingData';
import { WeddingCourtyardScene } from './decorations/WeddingCourtyardScene';
import { ChevronDown } from 'lucide-react';

/**
 * Single Hanging Golden Temple Bell
 */
const HangingBell = ({ chainHeight = 50, bellWidth = 24, bellHeight = 28, swayClass = "animate-bell-sway-left" }) => (
  <div className={`flex flex-col items-center ${swayClass}`}>
    {/* Fine Golden Link Chain */}
    <div 
      className="w-[1.5px] bg-gradient-to-b from-[#FFF2B2] via-[#E2BA4D] to-[#AA7C11]" 
      style={{ height: `${chainHeight}px` }} 
    />
    
    {/* Bell SVG */}
    <svg 
      className="-mt-0.5 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.65)]" 
      width={bellWidth} 
      height={bellHeight} 
      viewBox="0 0 24 28" 
      fill="none"
    >
      <defs>
        <linearGradient id="bellGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C9971E" />
          <stop offset="25%" stopColor="#FFF4D0" />
          <stop offset="50%" stopColor="#E5BA4D" />
          <stop offset="75%" stopColor="#FFF2B2" />
          <stop offset="100%" stopColor="#9E7310" />
        </linearGradient>
      </defs>
      {/* Top Ring / Mount */}
      <circle cx="12" cy="3" r="2.5" fill="none" stroke="url(#bellGoldGrad)" strokeWidth="1.2" />
      {/* Bell Cap */}
      <ellipse cx="12" cy="6" rx="4" ry="1.5" fill="url(#bellGoldGrad)" />
      {/* Flared Bell Body */}
      <path 
        d="M8 6 C8 15, 3 19, 2 23 L22 23 C21 19, 16 15, 16 6 Z" 
        fill="url(#bellGoldGrad)" 
      />
      {/* Lower Rim Ridge */}
      <rect x="1.5" y="22" width="21" height="2.8" rx="1.2" fill="url(#bellGoldGrad)" />
      {/* Clapper Ball */}
      <circle cx="12" cy="25.5" r="2" fill="#FFEAA0" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.5))" />
    </svg>
  </div>
);

/**
 * Sacred Golden Lord Ganesha Emblem with Red Accents & Aura
 */
const SacredGaneshaEmblem = () => (
  <svg 
    viewBox="0 0 160 170" 
    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-1 filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="ganeshGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFBE6" />
        <stop offset="25%" stopColor="#FFE075" />
        <stop offset="50%" stopColor="#E2BA4D" />
        <stop offset="75%" stopColor="#C9971E" />
        <stop offset="100%" stopColor="#8C6208" />
      </linearGradient>
      <linearGradient id="ganeshRedAccent" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF4D6D" />
        <stop offset="50%" stopColor="#C41E3A" />
        <stop offset="100%" stopColor="#780016" />
      </linearGradient>
    </defs>

    {/* Radiant Aureole Halo Petals */}
    <g opacity="0.85">
      {[...Array(14)].map((_, i) => {
        const angle = -120 + i * 18.5;
        const rad = (angle * Math.PI) / 180;
        const x1 = 80 + Math.cos(rad) * 48;
        const y1 = 78 + Math.sin(rad) * 48;
        const x2 = 80 + Math.cos(rad) * 58;
        const y2 = 78 + Math.sin(rad) * 58;
        return (
          <line 
            key={i} 
            x1={x1} 
            y1={y1} 
            x2={x2} 
            y2={y2} 
            stroke="url(#ganeshGoldGrad)" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
          />
        );
      })}
    </g>

    {/* Flanking Red Ornamental Flames / Lotus Petals at Sides */}
    <path d="M48 68 C42 62, 42 50, 48 44 C52 50, 52 60, 48 68 Z" fill="url(#ganeshRedAccent)" />
    <path d="M44 82 C38 76, 38 66, 44 60 C48 66, 48 74, 44 82 Z" fill="url(#ganeshRedAccent)" />
    <path d="M112 68 C118 62, 118 50, 112 44 C108 50, 108 60, 112 68 Z" fill="url(#ganeshRedAccent)" />
    <path d="M116 82 C122 76, 122 66, 116 60 C112 66, 112 74, 116 82 Z" fill="url(#ganeshRedAccent)" />

    {/* Outer Golden Botanical Aura Leaves */}
    <path d="M42 96 C30 90, 32 75, 45 78 C42 85, 40 92, 42 96 Z" fill="url(#ganeshGoldGrad)" />
    <path d="M118 96 C130 90, 128 75, 115 78 C118 85, 120 92, 118 96 Z" fill="url(#ganeshGoldGrad)" />

    {/* Crown Spire / Kalash (Top Center) */}
    <path d="M80 12 L83 20 L77 20 Z" fill="url(#ganeshGoldGrad)" />
    <circle cx="80" cy="11" r="2.2" fill="#FFF2B2" />
    <path d="M74 20 C74 20, 80 17, 86 20 L88 28 L72 28 Z" fill="url(#ganeshGoldGrad)" />
    <circle cx="80" cy="24" r="2" fill="url(#ganeshRedAccent)" />

    {/* Crown Tier 2 & Head Band */}
    <path d="M68 28 L92 28 L95 38 L65 38 Z" fill="url(#ganeshGoldGrad)" />
    <rect x="63" y="38" width="34" height="4" rx="2" fill="url(#ganeshGoldGrad)" />
    
    {/* Sacred Tilak on Forehead */}
    <line x1="75" y1="44" x2="85" y2="44" stroke="#FFFDF0" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="76" y1="47" x2="84" y2="47" stroke="#FFFDF0" strokeWidth="1" strokeLinecap="round" />
    <circle cx="80" cy="45.5" r="1.8" fill="url(#ganeshRedAccent)" />

    {/* Ganesha Face Profile & Sweeping Trunk */}
    {/* Head Dome */}
    <path 
      d="M68 44 C66 54, 70 65, 78 70 C84 74, 88 80, 86 92 C84 104, 76 112, 68 110 C62 108, 62 100, 68 98 C72 96, 74 100, 72 104" 
      stroke="url(#ganeshGoldGrad)" 
      strokeWidth="5" 
      strokeLinecap="round" 
      fill="none" 
    />

    {/* Modak (Sweet) in Trunk Tip */}
    <circle cx="67" cy="98" r="3.5" fill="#FFEAA0" filter="drop-shadow(0 1px 3px rgba(0,0,0,0.6))" />
    <circle cx="67" cy="98" r="1.5" fill="#FFFBE6" />

    {/* Right Tusk */}
    <path d="M73 72 L65 74 L71 77 Z" fill="#FFFFFF" />

    {/* Large Elephant Ear with Ornate Filigree (Right Side) */}
    <path 
      d="M86 46 C102 46, 108 58, 104 74 C100 88, 88 94, 86 94" 
      stroke="url(#ganeshGoldGrad)" 
      strokeWidth="4" 
      strokeLinecap="round" 
      fill="none" 
    />
    <path d="M92 56 C98 62, 98 72, 94 80" stroke="#FFDF78" strokeWidth="1.4" fill="none" />
    <path d="M88 64 C92 68, 92 74, 90 78" stroke="#FFDF78" strokeWidth="1" fill="none" />

    {/* Sacred Eye */}
    <ellipse cx="76" cy="56" rx="2" ry="1" transform="rotate(-15, 76, 56)" fill="#2A050E" />

    {/* Base Lotus Pedestal / Ornamental Flourishes */}
    <path 
      d="M56 122 C64 116, 74 118, 80 124 C86 118, 96 116, 104 122 C96 128, 88 132, 80 134 C72 132, 64 128, 56 122 Z" 
      fill="url(#ganeshGoldGrad)" 
    />
    <circle cx="80" cy="125" r="2.5" fill="url(#ganeshRedAccent)" />
    <circle cx="70" cy="122" r="1.8" fill="#FFF2B2" />
    <circle cx="90" cy="122" r="1.8" fill="#FFF2B2" />
  </svg>
);

/**
 * Two Red Roses with Golden Acanthus Foliage Divider
 * (Exactly matching reference image beneath couple names)
 */
const RedRosesFoliageDivider = () => (
  <svg 
    viewBox="0 0 420 54" 
    className="w-full max-w-[290px] sm:max-w-[380px] md:max-w-[420px] h-auto my-2 filter drop-shadow-[0_3px_10px_rgba(0,0,0,0.85)]"
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Velvety Crimson Red Rose Gradients */}
      <radialGradient id="roseRedCore1" cx="45%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#FF4D6D" />
        <stop offset="35%" stopColor="#D90429" />
        <stop offset="70%" stopColor="#9B0024" />
        <stop offset="100%" stopColor="#4A0010" />
      </radialGradient>
      <radialGradient id="roseRedCore2" cx="40%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#FF758F" />
        <stop offset="40%" stopColor="#C9184A" />
        <stop offset="75%" stopColor="#800F2F" />
        <stop offset="100%" stopColor="#3B020D" />
      </radialGradient>
      {/* Gold Foliage Gradient */}
      <linearGradient id="roseGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFCE6" />
        <stop offset="25%" stopColor="#FFE57F" />
        <stop offset="50%" stopColor="#E2BA4D" />
        <stop offset="75%" stopColor="#AA7C11" />
        <stop offset="100%" stopColor="#664603" />
      </linearGradient>
    </defs>

    {/* LEFT GOLDEN ACANTHUS FOLIAGE & SCROLLWORK */}
    <g>
      {/* Main Left Gold Vine Stem */}
      <path 
        d="M 180 27 Q 140 20, 100 27 T 35 27" 
        stroke="url(#roseGoldGrad)" 
        strokeWidth="2.2" 
        strokeLinecap="round" 
        fill="none" 
      />
      {/* Terminal Curl */}
      <path 
        d="M 35 27 C 22 27, 18 16, 28 14 C 36 12, 40 22, 33 26" 
        stroke="url(#roseGoldGrad)" 
        strokeWidth="1.8" 
        fill="none" 
      />
      
      {/* Acanthus Leaf Fan 1 */}
      <path d="M165 24 Q145 10, 130 18 Q140 28, 160 27 Z" fill="url(#roseGoldGrad)" />
      <path d="M142 16 L154 22" stroke="#FFFBE6" strokeWidth="0.8" />
      
      {/* Acanthus Leaf Fan 2 */}
      <path d="M135 28 Q115 38, 100 32 Q112 24, 130 26 Z" fill="url(#roseGoldGrad)" />
      
      {/* Acanthus Leaf Fan 3 */}
      <path d="M98 25 Q78 12, 65 20 Q75 30, 94 28 Z" fill="url(#roseGoldGrad)" />
      <path d="M78 18 L88 24" stroke="#FFFBE6" strokeWidth="0.8" />
      
      {/* Delicate Gold Sprig Buds & Pearls */}
      <circle cx="125" cy="14" r="2.8" fill="url(#roseGoldGrad)" />
      <circle cx="95" cy="35" r="2.5" fill="url(#roseGoldGrad)" />
      <circle cx="60" cy="15" r="2.2" fill="url(#roseGoldGrad)" />
      <circle cx="22" cy="24" r="2.2" fill="url(#roseGoldGrad)" />
    </g>

    {/* RIGHT GOLDEN ACANTHUS FOLIAGE & SCROLLWORK (Mirrored) */}
    <g transform="translate(420, 0) scale(-1, 1)">
      {/* Main Right Gold Vine Stem */}
      <path 
        d="M 180 27 Q 140 20, 100 27 T 35 27" 
        stroke="url(#roseGoldGrad)" 
        strokeWidth="2.2" 
        strokeLinecap="round" 
        fill="none" 
      />
      {/* Terminal Curl */}
      <path 
        d="M 35 27 C 22 27, 18 16, 28 14 C 36 12, 40 22, 33 26" 
        stroke="url(#roseGoldGrad)" 
        strokeWidth="1.8" 
        fill="none" 
      />
      
      {/* Acanthus Leaf Fan 1 */}
      <path d="M165 24 Q145 10, 130 18 Q140 28, 160 27 Z" fill="url(#roseGoldGrad)" />
      <path d="M142 16 L154 22" stroke="#FFFBE6" strokeWidth="0.8" />
      
      {/* Acanthus Leaf Fan 2 */}
      <path d="M135 28 Q115 38, 100 32 Q112 24, 130 26 Z" fill="url(#roseGoldGrad)" />
      
      {/* Acanthus Leaf Fan 3 */}
      <path d="M98 25 Q78 12, 65 20 Q75 30, 94 28 Z" fill="url(#roseGoldGrad)" />
      <path d="M78 18 L88 24" stroke="#FFFBE6" strokeWidth="0.8" />
      
      {/* Delicate Gold Sprig Buds & Pearls */}
      <circle cx="125" cy="14" r="2.8" fill="url(#roseGoldGrad)" />
      <circle cx="95" cy="35" r="2.5" fill="url(#roseGoldGrad)" />
      <circle cx="60" cy="15" r="2.2" fill="url(#roseGoldGrad)" />
      <circle cx="22" cy="24" r="2.2" fill="url(#roseGoldGrad)" />
    </g>

    {/* TWO RED VELVET ROSES (Centerpiece) */}
    {/* Left Rose (centered at x: 194, y: 26) */}
    <g transform="translate(194, 26)">
      {/* Outer Dark Wine Petals */}
      <circle cx="0" cy="0" r="16" fill="#3D000C" />
      <path d="M-13 -6 C-17 3, -11 13, -2 15 C8 17, 16 10, 15 0 C14 -10, 4 -16, -6 -14 Z" fill="#6B061A" />
      {/* Mid Petals */}
      <path d="M-10 -8 C-14 -2, -10 10, 0 12 C10 14, 13 4, 11 -4 C9 -12, 0 -13, -10 -8 Z" fill="url(#roseRedCore1)" />
      {/* Inner Swirl Petals */}
      <path d="M-6 -6 C-10 0, -6 7, 1 8 C8 9, 9 2, 7 -3 C5 -8, 0 -9, -6 -6 Z" fill="#990B27" />
      <path d="M-3 -4 C-6 0, -4 4, 1 5 C5 6, 6 2, 4 -1 C2 -4, 0 -5, -3 -4 Z" fill="url(#roseRedCore2)" />
      {/* Edge Highlights */}
      <path d="M-8 -6 C-2 -10, 6 -7, 9 -2" stroke="#FF758F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.9" />
      <path d="M-11 2 C-12 8, -4 11, 2 11" stroke="#FF5470" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.8" />
      <path d="M-3 2 C-1 4, 3 4, 4 1" stroke="#FFA3B5" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.95" />
    </g>

    {/* Right Rose (centered at x: 226, y: 26) */}
    <g transform="translate(226, 26)">
      {/* Outer Dark Wine Petals */}
      <circle cx="0" cy="0" r="16" fill="#3D000C" />
      <path d="M13 -6 C17 3, 11 13, 2 15 C-8 17, -16 10, -15 0 C-14 -10, -4 -16, 6 -14 Z" fill="#6B061A" />
      {/* Mid Petals */}
      <path d="M10 -8 C14 -2, 10 10, 0 12 C-10 14, -13 4, -11 -4 C-9 -12, 0 -13, 10 -8 Z" fill="url(#roseRedCore2)" />
      {/* Inner Swirl Petals */}
      <path d="M6 -6 C10 0, 6 7, -1 8 C-8 9, -9 2, -7 -3 C-5 -8, 0 -9, 6 -6 Z" fill="#990B27" />
      <path d="M3 -4 C6 0, 4 4, -1 5 C-5 6, -6 2, -4 -1 C-2 -4, 0 -5, 3 -4 Z" fill="url(#roseRedCore1)" />
      {/* Edge Highlights */}
      <path d="M8 -6 C2 -10, -6 -7, -9 -2" stroke="#FF758F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.9" />
      <path d="M11 2 C12 8, 4 11, -2 11" stroke="#FF5470" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.8" />
      <path d="M3 2 C1 4, -3 4, -4 1" stroke="#FFA3B5" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.95" />
    </g>

    {/* Central Interlocking Golden Foliage Flakes between roses */}
    <path d="M208 14 Q210 20, 212 14 Q210 8, 208 14 Z" fill="url(#roseGoldGrad)" />
    <path d="M207 38 Q210 32, 213 38 Q210 44, 207 38 Z" fill="url(#roseGoldGrad)" />
  </svg>
);

/**
 * Slender Golden Diamond Divider
 */
const GoldDiamondDivider = ({ className = "my-2" }) => (
  <div className={`flex items-center justify-center gap-2 w-full max-w-[240px] sm:max-w-[320px] ${className}`}>
    <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#E2BA4D]/80 to-[#E2BA4D]" />
    {/* Diamond Fleuron */}
    <div className="flex items-center gap-1 text-[#FFDF78]">
      <span className="w-1.5 h-1.5 rotate-45 border border-[#FFDF78] bg-[#FFE075]" />
      <span className="text-[10px] leading-none">&#10022;</span>
      <span className="w-1.5 h-1.5 rotate-45 border border-[#FFDF78] bg-[#FFE075]" />
    </div>
    <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#E2BA4D]/80 to-[#E2BA4D]" />
  </div>
);

/**
 * ROYAL COURTYARD HERO SECTION (Section 1 of Wedding Page)
 * Displays the magnificent Rajput palace pavilion archway (background1.webp),
 * 5 hanging golden temple bells, ornate Ganesha emblem, sacred blessing,
 * Akshitha & Tushar in gold foil calligraphy, red roses with gold acanthus foliage,
 * and the seven promises tagline.
 */
export const HeroCourtyard = () => {
  return (
    <section id="courtyard" className="relative w-full min-h-[96vh] sm:min-h-screen flex flex-col items-center justify-between overflow-hidden select-none">
      
      {/* 1. COURTYARD BACKGROUND (background1.webp / png with floating dust) */}
      <WeddingCourtyardScene />

      {/* 2. FIVE HANGING GOLDEN TEMPLE BELLS (Suspended from arch ceiling) */}
      <div className="absolute top-0 inset-x-0 flex justify-center items-start gap-4 sm:gap-8 md:gap-14 z-20 pointer-events-none px-4">
        {/* Bell 1 (Outer Left) */}
        <HangingBell chainHeight={45} bellWidth={22} bellHeight={25} swayClass="animate-bell-sway-left" />
        
        {/* Bell 2 (Mid Left) */}
        <HangingBell chainHeight={65} bellWidth={25} bellHeight={28} swayClass="animate-bell-sway-right" />
        
        {/* Bell 3 (Center, highest) */}
        <HangingBell chainHeight={35} bellWidth={27} bellHeight={30} swayClass="animate-bell-sway-center" />
        
        {/* Bell 4 (Mid Right) */}
        <HangingBell chainHeight={65} bellWidth={25} bellHeight={28} swayClass="animate-bell-sway-left" />
        
        {/* Bell 5 (Outer Right) */}
        <HangingBell chainHeight={45} bellWidth={22} bellHeight={25} swayClass="animate-bell-sway-right" />
      </div>

      {/* 3. COURTYARD HERO TEXT & ORNAMENTS (Framed within the upper scalloped archway) */}
      <div className="relative z-20 pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 max-w-xl mx-auto text-center flex flex-col items-center animate-fade-in">
        
        {/* A. Golden Lord Ganesha Emblem */}
        <SacredGaneshaEmblem />

        {/* B. Sacred Opening Verse */}
        <p className="font-serif italic text-xs sm:text-sm md:text-base text-[#FFFDF8] tracking-wider leading-relaxed max-w-md my-1.5 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
          With the blessings of Lord Ganesha,
          <br />
          and our families, our forever begins.
        </p>

        {/* C. Upper Fine Gold Diamond Divider */}
        <GoldDiamondDivider className="my-1.5" />

        {/* D. Couple Names: Akshitha & Tushar in Grand Luxury Gold Foil Typography */}
        <div className="my-1 sm:my-2 flex items-center justify-center filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] drop-shadow-[0_0_24px_rgba(212,175,55,0.45)]">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-wide flex items-center justify-center flex-wrap">
            <span className="text-gold-gradient font-serif font-normal">
              Akshitha
            </span>
            <span className="font-serif italic text-2xl sm:text-4xl md:text-5xl text-[#FFDF78] mx-2 sm:mx-3 leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              &amp;
            </span>
            <span className="text-gold-gradient font-serif font-normal">
              Tushar
            </span>
          </h1>
        </div>

        {/* E. Two Red Roses with Golden Acanthus Foliage Divider */}
        <RedRosesFoliageDivider />

        {/* F. Seven Promises Tagline */}
        <p className="font-serif italic text-xs sm:text-sm md:text-base text-[#FFF4D0] tracking-wider mt-1 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
          Two souls, seven promises, a lifetime of love.
        </p>

        {/* G. Bottom Fine Gold Diamond Fleuron Divider */}
        <GoldDiamondDivider className="my-1.5" />

      </div>

      {/* 4. SCROLL DOWN PROMPT TO SAVE THE DATE */}
      <div className="relative z-20 pb-8 sm:pb-12 flex flex-col items-center animate-bounce-slow">
        <a
          href="#scratch-date"
          className="flex flex-col items-center gap-1.5 text-[#FFF8EE] hover:text-[#FFDF78] transition-colors p-2"
          aria-label="Scroll to Save The Date"
        >
          <span className="font-serif italic text-xs tracking-widest text-[#FFF8EE] font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            Scroll to Explore
          </span>
          <div className="w-8 h-8 rounded-full border border-[#D4AF37] bg-[#2A050E]/85 backdrop-blur-md flex items-center justify-center shadow-xl">
            <ChevronDown className="w-3.5 h-3.5 text-[#FFDF78]" />
          </div>
        </a>
      </div>

    </section>
  );
};

export default HeroCourtyard;
