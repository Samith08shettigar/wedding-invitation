import React from 'react';
import { weddingData } from '../data/weddingData';
import { WeddingCourtyardScene } from './decorations/WeddingCourtyardScene';
import { ChevronDown } from 'lucide-react';
import ganapaWebp from '../assets/ganapa.webp';

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
      className="-mt-0.5 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.85)]" 
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
 * Two Red Roses with Golden Acanthus Foliage Divider
 * (High-contrast centerpiece matching reference image beneath couple names)
 */
const RedRosesFoliageDivider = () => (
  <svg 
    viewBox="0 0 420 54" 
    className="w-full max-w-[290px] sm:max-w-[380px] md:max-w-[430px] h-auto my-2.5 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]"
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Velvety Deep Crimson Red Rose Gradients */}
      <radialGradient id="roseRedCore1" cx="45%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#FF4D6D" />
        <stop offset="30%" stopColor="#E6002E" />
        <stop offset="65%" stopColor="#A30022" />
        <stop offset="100%" stopColor="#4D0010" />
      </radialGradient>
      <radialGradient id="roseRedCore2" cx="40%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#FF758F" />
        <stop offset="35%" stopColor="#D90429" />
        <stop offset="70%" stopColor="#8A001C" />
        <stop offset="100%" stopColor="#3B000B" />
      </radialGradient>
      {/* Rich Saturated 24K Gold Foliage Gradient */}
      <linearGradient id="roseGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFCE6" />
        <stop offset="25%" stopColor="#FFE066" />
        <stop offset="50%" stopColor="#F5B718" />
        <stop offset="75%" stopColor="#C48805" />
        <stop offset="100%" stopColor="#7A4E00" />
      </linearGradient>
    </defs>

    {/* LEFT GOLDEN ACANTHUS FOLIAGE & SCROLLWORK */}
    <g>
      {/* Main Left Gold Vine Stem */}
      <path 
        d="M 180 27 Q 140 20, 100 27 T 35 27" 
        stroke="url(#roseGoldGrad)" 
        strokeWidth="2.4" 
        strokeLinecap="round" 
        fill="none" 
      />
      {/* Terminal Curl */}
      <path 
        d="M 35 27 C 22 27, 18 16, 28 14 C 36 12, 40 22, 33 26" 
        stroke="url(#roseGoldGrad)" 
        strokeWidth="2" 
        fill="none" 
      />
      
      {/* Acanthus Leaf Fan 1 */}
      <path d="M165 24 Q145 10, 130 18 Q140 28, 160 27 Z" fill="url(#roseGoldGrad)" />
      <path d="M142 16 L154 22" stroke="#FFFBE6" strokeWidth="0.9" />
      
      {/* Acanthus Leaf Fan 2 */}
      <path d="M135 28 Q115 38, 100 32 Q112 24, 130 26 Z" fill="url(#roseGoldGrad)" />
      
      {/* Acanthus Leaf Fan 3 */}
      <path d="M98 25 Q78 12, 65 20 Q75 30, 94 28 Z" fill="url(#roseGoldGrad)" />
      <path d="M78 18 L88 24" stroke="#FFFBE6" strokeWidth="0.9" />
      
      {/* Delicate Gold Sprig Buds & Pearls */}
      <circle cx="125" cy="14" r="3" fill="url(#roseGoldGrad)" />
      <circle cx="95" cy="35" r="2.8" fill="url(#roseGoldGrad)" />
      <circle cx="60" cy="15" r="2.4" fill="url(#roseGoldGrad)" />
      <circle cx="22" cy="24" r="2.4" fill="url(#roseGoldGrad)" />
    </g>

    {/* RIGHT GOLDEN ACANTHUS FOLIAGE & SCROLLWORK (Mirrored) */}
    <g transform="translate(420, 0) scale(-1, 1)">
      {/* Main Right Gold Vine Stem */}
      <path 
        d="M 180 27 Q 140 20, 100 27 T 35 27" 
        stroke="url(#roseGoldGrad)" 
        strokeWidth="2.4" 
        strokeLinecap="round" 
        fill="none" 
      />
      {/* Terminal Curl */}
      <path 
        d="M 35 27 C 22 27, 18 16, 28 14 C 36 12, 40 22, 33 26" 
        stroke="url(#roseGoldGrad)" 
        strokeWidth="2" 
        fill="none" 
      />
      
      {/* Acanthus Leaf Fan 1 */}
      <path d="M165 24 Q145 10, 130 18 Q140 28, 160 27 Z" fill="url(#roseGoldGrad)" />
      <path d="M142 16 L154 22" stroke="#FFFBE6" strokeWidth="0.9" />
      
      {/* Acanthus Leaf Fan 2 */}
      <path d="M135 28 Q115 38, 100 32 Q112 24, 130 26 Z" fill="url(#roseGoldGrad)" />
      
      {/* Acanthus Leaf Fan 3 */}
      <path d="M98 25 Q78 12, 65 20 Q75 30, 94 28 Z" fill="url(#roseGoldGrad)" />
      <path d="M78 18 L88 24" stroke="#FFFBE6" strokeWidth="0.9" />
      
      {/* Delicate Gold Sprig Buds & Pearls */}
      <circle cx="125" cy="14" r="3" fill="url(#roseGoldGrad)" />
      <circle cx="95" cy="35" r="2.8" fill="url(#roseGoldGrad)" />
      <circle cx="60" cy="15" r="2.4" fill="url(#roseGoldGrad)" />
      <circle cx="22" cy="24" r="2.4" fill="url(#roseGoldGrad)" />
    </g>

    {/* TWO RED VELVET ROSES (Centerpiece) */}
    {/* Left Rose (centered at x: 194, y: 26) */}
    <g transform="translate(194, 26)">
      {/* Outer Dark Wine Petals */}
      <circle cx="0" cy="0" r="16.5" fill="#38000A" />
      <path d="M-13 -6 C-17 3, -11 13, -2 15 C8 17, 16 10, 15 0 C14 -10, 4 -16, -6 -14 Z" fill="#6E0017" />
      {/* Mid Petals */}
      <path d="M-10 -8 C-14 -2, -10 10, 0 12 C10 14, 13 4, 11 -4 C9 -12, 0 -13, -10 -8 Z" fill="url(#roseRedCore1)" />
      {/* Inner Swirl Petals */}
      <path d="M-6 -6 C-10 0, -6 7, 1 8 C8 9, 9 2, 7 -3 C5 -8, 0 -9, -6 -6 Z" fill="#990022" />
      <path d="M-3 -4 C-6 0, -4 4, 1 5 C5 6, 6 2, 4 -1 C2 -4, 0 -5, -3 -4 Z" fill="url(#roseRedCore2)" />
      {/* Edge Highlights */}
      <path d="M-8 -6 C-2 -10, 6 -7, 9 -2" stroke="#FF758F" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.95" />
      <path d="M-11 2 C-12 8, -4 11, 2 11" stroke="#FF5470" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.85" />
      <path d="M-3 2 C-1 4, 3 4, 4 1" stroke="#FFA3B5" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.95" />
    </g>

    {/* Right Rose (centered at x: 226, y: 26) */}
    <g transform="translate(226, 26)">
      {/* Outer Dark Wine Petals */}
      <circle cx="0" cy="0" r="16.5" fill="#38000A" />
      <path d="M13 -6 C17 3, 11 13, 2 15 C-8 17, -16 10, -15 0 C-14 -10, -4 -16, 6 -14 Z" fill="#6E0017" />
      {/* Mid Petals */}
      <path d="M10 -8 C14 -2, 10 10, 0 12 C-10 14, -13 4, -11 -4 C-9 -12, 0 -13, 10 -8 Z" fill="url(#roseRedCore2)" />
      {/* Inner Swirl Petals */}
      <path d="M6 -6 C10 0, 6 7, -1 8 C-8 9, -9 2, -7 -3 C-5 -8, 0 -9, 6 -6 Z" fill="#990022" />
      <path d="M3 -4 C6 0, 4 4, -1 5 C-5 6, -6 2, -4 -1 C-2 -4, 0 -5, 3 -4 Z" fill="url(#roseRedCore1)" />
      {/* Edge Highlights */}
      <path d="M8 -6 C2 -10, -6 -7, -9 -2" stroke="#FF758F" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.95" />
      <path d="M11 2 C12 8, 4 11, -2 11" stroke="#FF5470" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.85" />
      <path d="M3 2 C1 4, -3 4, -4 1" stroke="#FFA3B5" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.95" />
    </g>

    {/* Central Interlocking Golden Foliage Flakes between roses */}
    <path d="M208 14 Q210 20, 212 14 Q210 8, 208 14 Z" fill="url(#roseGoldGrad)" />
    <path d="M207 38 Q210 32, 213 38 Q210 44, 207 38 Z" fill="url(#roseGoldGrad)" />
  </svg>
);

/**
 * Slender High-Contrast Golden Diamond Divider
 */
const GoldDiamondDivider = ({ className = "my-2" }) => (
  <div className={`flex items-center justify-center gap-2 w-full max-w-[240px] sm:max-w-[320px] ${className}`}>
    <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#FFD700] to-[#FFD700] drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]" />
    {/* Diamond Fleuron */}
    <div className="flex items-center gap-1.5 text-[#FFD700] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
      <span className="w-1.5 h-1.5 rotate-45 border border-[#FFE57F] bg-[#FFD700]" />
      <span className="text-[11px] leading-none text-[#FFE57F] font-bold">&#10022;</span>
      <span className="w-1.5 h-1.5 rotate-45 border border-[#FFE57F] bg-[#FFD700]" />
    </div>
    <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#FFD700] to-[#FFD700] drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]" />
  </div>
);

/**
 * ROYAL COURTYARD HERO SECTION (Section 1 of Wedding Page)
 * Displays the magnificent Rajput palace pavilion archway (background1.webp),
 * 5 hanging golden temple bells, exact Ganapati emblem from ganapa.png,
 * high-contrast bright sacred blessing, bold 24K gold foil Akshitha & Tushar,
 * red velvet roses with gold acanthus foliage, and seven promises tagline.
 */
export const HeroCourtyard = () => {
  return (
    <section id="courtyard" className="relative w-full min-h-[96vh] sm:min-h-screen flex flex-col items-center justify-between overflow-hidden select-none">
      
      {/* 1. COURTYARD BACKGROUND (background1.webp / png with twilight sky contrast) */}
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
        
        {/* Soft Contrast Aura Backdrop behind text (Ensures all letters stand out boldly against sunset sky) */}
        <div className="absolute inset-x-4 -top-4 -bottom-6 bg-radial from-[#120206]/55 via-[#120206]/25 to-transparent rounded-full filter blur-xl pointer-events-none -z-10" />

        {/* A. Golden Lord Ganesha Emblem from ganapa.png (Background removed, exact emblem displayed) */}
        <div className="relative mb-2 flex items-center justify-center">
          <img 
            src={ganapaWebp} 
            alt="Lord Ganesha Emblem" 
            className="w-24 h-auto sm:w-28 md:w-32 max-h-32 object-contain filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] drop-shadow-[0_0_20px_rgba(255,200,0,0.35)] select-none pointer-events-none"
            loading="eager"
            decoding="sync"
          />
        </div>

        {/* B. Sacred Opening Verse (Bright crisp white with multi-layer deep shadow) */}
        <p className="font-serif italic text-sm sm:text-base md:text-lg text-[#FFFFFF] tracking-wider leading-relaxed max-w-md my-1.5 font-normal [text-shadow:0_2px_4px_rgba(0,0,0,0.95),0_4px_14px_rgba(0,0,0,0.9)]">
          With the blessings of Lord Ganesha,
          <br />
          and our families, our forever begins.
        </p>

        {/* C. Upper Fine Gold Diamond Divider */}
        <GoldDiamondDivider className="my-1.5" />

        {/* D. Couple Names: Akshitha & Tushar in Bold, Saturated 24K Gold Foil Typography */}
        <div className="my-1.5 sm:my-2.5 flex items-center justify-center filter drop-shadow-[0_3px_6px_rgba(0,0,0,0.95)] drop-shadow-[0_6px_20px_rgba(0,0,0,0.9)] drop-shadow-[0_0_25px_rgba(255,215,0,0.45)]">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-wide flex items-center justify-center flex-wrap">
            <span 
              className="font-serif font-bold"
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #FFE873 20%, #FFAE19 50%, #D48800 75%, #FFF099 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                WebkitTextStroke: '0.6px rgba(255, 235, 120, 0.7)',
              }}
            >
              Akshitha
            </span>
            <span className="font-serif italic text-2xl sm:text-4xl md:text-5xl text-[#FFE57F] mx-2.5 sm:mx-3.5 leading-none [text-shadow:0_2px_8px_rgba(0,0,0,0.95),0_0_12px_rgba(255,215,0,0.6)]">
              &amp;
            </span>
            <span 
              className="font-serif font-bold"
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #FFE873 20%, #FFAE19 50%, #D48800 75%, #FFF099 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                WebkitTextStroke: '0.6px rgba(255, 235, 120, 0.7)',
              }}
            >
              Tushar
            </span>
          </h1>
        </div>

        {/* E. Two Red Roses with Golden Acanthus Foliage Divider */}
        <RedRosesFoliageDivider />

        {/* F. Seven Promises Tagline (Bright crisp white with deep shadow) */}
        <p className="font-serif italic text-xs sm:text-sm md:text-base text-[#FFFFFF] tracking-wider mt-1 font-medium [text-shadow:0_2px_4px_rgba(0,0,0,0.95),0_4px_14px_rgba(0,0,0,0.9)]">
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
