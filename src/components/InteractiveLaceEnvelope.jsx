import React, { useState } from 'react';
import { weddingData } from '../data/weddingData';
import { ChevronUp, ChevronDown } from 'lucide-react';

/**
 * INTERACTIVE PULL-OUT INVITATION LETTER (Section 2)
 * Royal Teal-Blue Envelope with Gold Filigree, Layered Gardenia Blossoms,
 * Acanthus Foliage, and a sliding Ivory Formal Letter Card.
 */
export const InteractiveLaceEnvelope = () => {
  const [isPulledOut, setIsPulledOut] = useState(false);

  const togglePull = () => {
    setIsPulledOut(!isPulledOut);
  };

  return (
    <section id="invitation-letter" className="relative w-full py-16 sm:py-24 px-4 bg-luxury-damask text-[#3B0612] flex flex-col items-center text-center select-none overflow-hidden">
      
      {/* Section Header */}
      <div className="mb-6 text-center">
        <span className="text-[#AA7C11] text-xs font-serif italic tracking-widest uppercase block mb-1">
          Formal Invitation
        </span>
        <h2 className="font-serif italic text-4xl sm:text-5xl text-[#1B3847] tracking-wide font-normal drop-shadow-sm">
          You&apos;re invited
        </h2>
        <p className="font-serif italic text-xs sm:text-sm text-[#2D5A6E] mt-2 font-medium flex items-center justify-center gap-1.5">
          <span>{isPulledOut ? 'Tap card to tuck back inside' : 'Tap or pull card to read formal invitation'}</span>
          {isPulledOut ? (
            <ChevronDown className="w-4 h-4 text-[#AA7C11] animate-bounce" />
          ) : (
            <ChevronUp className="w-4 h-4 text-[#AA7C11] animate-bounce" />
          )}
        </p>
      </div>

      {/* ENVELOPE & SLIDING CARD CONTAINER */}
      <div className="relative w-full max-w-[370px] sm:max-w-[420px] flex flex-col items-center justify-center mt-20 sm:mt-24 pb-8">
        
        <div className="relative w-full h-[260px] sm:h-[280px] flex items-end justify-center perspective-1600">
          
          {/* 1. ENVELOPE INTERIOR BACK (Midnight Teal with Gold Jaali) */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#0F222C] via-[#142E3B] to-[#1B3E4F] border-2 border-[#D4AF37]/70 shadow-[0_20px_50px_rgba(0,0,0,0.45)] overflow-hidden z-10 pointer-events-none">
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#D4AF37_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
            <div className="absolute top-4 inset-x-0 flex flex-col items-center text-center opacity-50">
              <span className="font-serif italic text-[11px] text-[#E5C158] tracking-widest">&#10022; With Love &amp; Blessings &#10022;</span>
            </div>
          </div>

          {/* 2. OPEN TOP FLAP (Points UPWARD behind the card, framing it like an authentic open royal envelope) */}
          <div 
            className="absolute top-0 inset-x-0 h-[175px] sm:h-[195px] z-15 pointer-events-none -translate-y-full"
            style={{
              clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
              background: 'linear-gradient(to top, #1A4050 0%, #0F2A36 60%, #091C24 100%)',
            }}
          >
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#D4AF37_1.5px,transparent_1.5px)] [background-size:14px_14px]" />
            <svg className="w-full h-full" viewBox="0 0 400 175" preserveAspectRatio="none">
              <path d="M 0 175 L 200 0 L 400 175" fill="none" stroke="url(#letterGoldRim)" strokeWidth="3.2" />
              <path d="M 6 171 L 200 6 L 394 171" fill="none" stroke="#FFDF78" strokeWidth="0.8" strokeDasharray="2.5 2.5" opacity="0.75" />
            </svg>
            <div className="absolute bottom-3 inset-x-0 text-center">
              <span className="font-serif italic text-[10px] text-[#D4AF37] tracking-widest">&#10022; With Love &amp; Blessings &#10022;</span>
            </div>
          </div>

          {/* 3. CARD CLIPPING SLEEVE (Strictly clips the card at envelope bottom so it NEVER pokes out below!) */}
          <div 
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              clipPath: 'inset(-800px -60px 0px -60px round 0 0 16px 16px)',
            }}
          >
            {/* THE FORMAL INVITATION CARD (Sliding up gracefully when clicked or pulled) */}
            <div 
              onClick={togglePull}
              className={`absolute inset-x-3 sm:inset-x-4 top-2 rounded-2xl bg-[#FFFDF8] border-2 border-[#D4AF37] p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between text-left select-none pointer-events-auto cursor-pointer transition-all duration-700 ease-out hover:shadow-[0_25px_60px_rgba(212,175,55,0.35)] ${
                isPulledOut 
                  ? '-translate-y-[235px] sm:-translate-y-[260px]' 
                  : '-translate-y-6 sm:-translate-y-8 hover:-translate-y-12'
              }`}
              style={{
                height: '420px',
                transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                willChange: 'transform',
              }}
            >
              {/* Double Gold Ornate Filigree Border with Corner Flourishes */}
              <div className="absolute inset-2 border border-[#D4AF37]/60 rounded-xl pointer-events-none">
                <div className="absolute inset-1 border border-dashed border-[#AA7C11]/30 rounded-lg" />
                <span className="absolute top-1 left-1.5 text-[#D4AF37] text-xs font-serif leading-none">&#10087;</span>
                <span className="absolute top-1 right-1.5 text-[#D4AF37] text-xs font-serif leading-none">&#10087;</span>
                <span className="absolute bottom-1 left-1.5 text-[#D4AF37] text-xs font-serif leading-none">&#10087;</span>
                <span className="absolute bottom-1 right-1.5 text-[#D4AF37] text-xs font-serif leading-none">&#10087;</span>
              </div>

              {/* Card Header & Sacred Invocation */}
              <div className="flex flex-col items-center text-center pt-0.5">
                <span className="text-[#AA7C11] text-[10px] sm:text-xs font-serif italic tracking-widest">
                  &#10022; || Shree Ganeshay Namah || &#10022;
                </span>
                <h3 className="font-serif italic text-xl sm:text-2xl text-[#1B3847] mt-1 font-semibold">
                  {weddingData.letterTitle}
                </h3>
              </div>

              {/* Paragraph 1 */}
              <p className="font-serif text-xs sm:text-sm text-[#2C4957] leading-relaxed mt-2 text-justify">
                {weddingData.letterParagraph1}
              </p>

              {/* Diamond Fleuron Divider */}
              <div className="text-center text-[#AA7C11] text-xs my-1 flex items-center justify-center gap-2">
                <span className="w-8 h-[1px] bg-[#AA7C11]/30" />
                <span>&#10022; With Love &amp; Blessings &#10022;</span>
                <span className="w-8 h-[1px] bg-[#AA7C11]/30" />
              </div>

              {/* Paragraph 2 */}
              <p className="font-serif text-xs sm:text-sm text-[#2C4957] leading-relaxed text-justify">
                {weddingData.letterParagraph2}
              </p>

              {/* Family Sign-off */}
              <div className="mt-1 pt-2 border-t border-[#AA7C11]/30 text-xs font-serif text-[#1F3E4E]">
                <p className="italic font-bold text-[#183644] mb-0.5">Warm regards,</p>
                <div className="flex flex-col gap-0.5 text-[11px] sm:text-xs">
                  <p>
                    <span className="font-semibold text-[#1B3847]">{weddingData.parents.bride.mother}</span> &amp;{' '}
                    <span className="font-semibold text-[#1B3847]">{weddingData.parents.bride.father}</span>
                  </p>
                  <p className="text-[#7A5A12] italic text-[10px]">and</p>
                  <p>
                    <span className="font-semibold text-[#1B3847]">{weddingData.parents.groom.mother}</span> &amp;{' '}
                    <span className="font-semibold text-[#1B3847]">{weddingData.parents.groom.father}</span>
                  </p>
                </div>
              </div>

              {/* Tap to Tuck In / Pull Out Toggle Prompt */}
              <div className="text-center pt-1 flex items-center justify-center gap-1 text-[10px] text-[#AA7C11] font-serif italic">
                <span>{isPulledOut ? 'Tap to tuck back into envelope' : 'Tap to pull out full letter'}</span>
                {isPulledOut ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
              </div>
            </div>
          </div>

          {/* 4. GRAND FRONT POCKET WITH 3D BLOSSOMS, GOLD FOLIAGE & WAX SEAL (Never cut off!) */}
          <svg 
            viewBox="0 0 400 190" 
            className="absolute bottom-0 inset-x-0 w-full z-30 pointer-events-auto cursor-pointer drop-shadow-[0_15px_35px_rgba(0,0,0,0.65)]"
            style={{ overflow: 'visible' }}
            onClick={togglePull}
          >
            <defs>
              <linearGradient id="letterPocketGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2E637A" />
                <stop offset="30%" stopColor="#1C4556" />
                <stop offset="70%" stopColor="#143442" />
                <stop offset="100%" stopColor="#0B202A" />
              </linearGradient>
              <linearGradient id="letterGoldRim" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="25%" stopColor="#FFF2B2" />
                <stop offset="50%" stopColor="#E2BA4D" />
                <stop offset="75%" stopColor="#FFF2B2" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
              <linearGradient id="letterGoldLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF7D6" />
                <stop offset="35%" stopColor="#FFDE6A" />
                <stop offset="70%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#99700E" />
              </linearGradient>
              <radialGradient id="letterTealSeal" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#3A758E" />
                <stop offset="45%" stopColor="#1C4657" />
                <stop offset="85%" stopColor="#0F2A35" />
                <stop offset="100%" stopColor="#07171F" />
              </radialGradient>
            </defs>

            {/* Envelope Front Pocket Body: V-Cut from (0, 0) down to (200, 105) up to (400, 0) */}
            <path
              d="M 0 0 L 200 105 L 400 0 L 400 190 L 0 190 Z"
              fill="url(#letterPocketGrad)"
            />

            {/* Gold V-Rim Filigree Stroke */}
            <path
              d="M 0 0 L 200 105 L 400 0"
              fill="none"
              stroke="url(#letterGoldRim)"
              strokeWidth="3.2"
            />
            <path
              d="M 6 8 L 200 111 L 394 8"
              fill="none"
              stroke="#FFDF78"
              strokeWidth="0.9"
              strokeDasharray="2.5 2.5"
              opacity="0.7"
            />

            {/* LEFT GRAND BOTANICAL CLUSTER */}
            <g transform="translate(130, 95)">
              <ellipse cx="-45" cy="-25" rx="15" ry="7.5" transform="rotate(-25, -45, -25)" fill="#35667A" opacity="0.95" />
              <path d="M-55 -28 L-35 -22" stroke="#FFDF78" strokeWidth="0.6" strokeOpacity="0.7" />
              <ellipse cx="-68" cy="-35" rx="13" ry="6.5" transform="rotate(-40, -68, -35)" fill="#254F60" opacity="0.95" />
              <path d="M-76 -38 L-60 -32" stroke="#FFDF78" strokeWidth="0.6" strokeOpacity="0.7" />
              
              <path d="M-85 -42 Q-50 -26 -18 -5" stroke="url(#letterGoldLeaf)" strokeWidth="1.8" fill="none" />
              <circle cx="-80" cy="-40" r="3.5" fill="url(#letterGoldLeaf)" filter="drop-shadow(0 0 4px #FFD700)" />
              <circle cx="-60" cy="-30" r="3.8" fill="url(#letterGoldLeaf)" filter="drop-shadow(0 0 4px #FFD700)" />
              <circle cx="-38" cy="-18" r="3.5" fill="url(#letterGoldLeaf)" filter="drop-shadow(0 0 4px #FFD700)" />
              
              <path d="M-42 -16 Q-54 -32 -38 -38 Q-26 -26 -42 -16" fill="url(#letterGoldLeaf)" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.35))" />
              <path d="M-22 -6 Q-32 -22 -16 -28 Q-6 -16 -22 -6" fill="url(#letterGoldLeaf)" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.35))" />
              
              <g transform="translate(-48, -13)">
                <circle cx="-7" cy="-7" r="7" fill="#FBF9F4" stroke="#DED4C0" strokeWidth="0.7" />
                <circle cx="7" cy="-7" r="7" fill="#FBF9F4" stroke="#DED4C0" strokeWidth="0.7" />
                <circle cx="-7" cy="7" r="7" fill="#FBF9F4" stroke="#DED4C0" strokeWidth="0.7" />
                <circle cx="7" cy="7" r="7" fill="#FBF9F4" stroke="#DED4C0" strokeWidth="0.7" />
                <circle cx="0" cy="0" r="8" fill="#FFFFFF" stroke="#DED4C0" strokeWidth="0.7" filter="drop-shadow(0 1px 3px rgba(0,0,0,0.25))" />
                <circle cx="0" cy="0" r="3.5" fill="url(#letterGoldLeaf)" />
                <circle cx="0" cy="0" r="1.5" fill="#FFFBE6" />
              </g>
              
              <g transform="translate(-20, 2) scale(0.85)">
                <circle cx="-6" cy="-6" r="6" fill="#FBF9F4" stroke="#DED4C0" strokeWidth="0.7" />
                <circle cx="6" cy="-6" r="6" fill="#FBF9F4" stroke="#DED4C0" strokeWidth="0.7" />
                <circle cx="-6" cy="6" r="6" fill="#FBF9F4" stroke="#DED4C0" strokeWidth="0.7" />
                <circle cx="6" cy="6" r="6" fill="#FBF9F4" stroke="#DED4C0" strokeWidth="0.7" />
                <circle cx="0" cy="0" r="7" fill="#FFFFFF" stroke="#DED4C0" strokeWidth="0.7" />
                <circle cx="0" cy="0" r="3" fill="url(#letterGoldLeaf)" />
              </g>
            </g>

            {/* RIGHT GRAND BOTANICAL CLUSTER */}
            <g transform="translate(270, 95) scale(-1, 1)">
              <ellipse cx="-45" cy="-25" rx="15" ry="7.5" transform="rotate(-25, -45, -25)" fill="#35667A" opacity="0.95" />
              <path d="M-55 -28 L-35 -22" stroke="#FFDF78" strokeWidth="0.6" strokeOpacity="0.7" />
              <ellipse cx="-68" cy="-35" rx="13" ry="6.5" transform="rotate(-40, -68, -35)" fill="#254F60" opacity="0.95" />
              <path d="M-76 -38 L-60 -32" stroke="#FFDF78" strokeWidth="0.6" strokeOpacity="0.7" />
              
              <path d="M-85 -42 Q-50 -26 -18 -5" stroke="url(#letterGoldLeaf)" strokeWidth="1.8" fill="none" />
              <circle cx="-80" cy="-40" r="3.5" fill="url(#letterGoldLeaf)" filter="drop-shadow(0 0 4px #FFD700)" />
              <circle cx="-60" cy="-30" r="3.8" fill="url(#letterGoldLeaf)" filter="drop-shadow(0 0 4px #FFD700)" />
              <circle cx="-38" cy="-18" r="3.5" fill="url(#letterGoldLeaf)" filter="drop-shadow(0 0 4px #FFD700)" />
              
              <path d="M-42 -16 Q-54 -32 -38 -38 Q-26 -26 -42 -16" fill="url(#letterGoldLeaf)" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.35))" />
              <path d="M-22 -6 Q-32 -22 -16 -28 Q-6 -16 -22 -6" fill="url(#letterGoldLeaf)" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.35))" />
              
              <g transform="translate(-48, -13)">
                <circle cx="-7" cy="-7" r="7" fill="#FBF9F4" stroke="#DED4C0" strokeWidth="0.7" />
                <circle cx="7" cy="-7" r="7" fill="#FBF9F4" stroke="#DED4C0" strokeWidth="0.7" />
                <circle cx="-7" cy="7" r="7" fill="#FBF9F4" stroke="#DED4C0" strokeWidth="0.7" />
                <circle cx="7" cy="7" r="7" fill="#FBF9F4" stroke="#DED4C0" strokeWidth="0.7" />
                <circle cx="0" cy="0" r="8" fill="#FFFFFF" stroke="#DED4C0" strokeWidth="0.7" filter="drop-shadow(0 1px 3px rgba(0,0,0,0.25))" />
                <circle cx="0" cy="0" r="3.5" fill="url(#letterGoldLeaf)" />
                <circle cx="0" cy="0" r="1.5" fill="#FFFBE6" />
              </g>
              
              <g transform="translate(-20, 2) scale(0.85)">
                <circle cx="-6" cy="-6" r="6" fill="#FBF9F4" stroke="#DED4C0" strokeWidth="0.7" />
                <circle cx="6" cy="-6" r="6" fill="#FBF9F4" stroke="#DED4C0" strokeWidth="0.7" />
                <circle cx="-6" cy="6" r="6" fill="#FBF9F4" stroke="#DED4C0" strokeWidth="0.7" />
                <circle cx="6" cy="6" r="6" fill="#FBF9F4" stroke="#DED4C0" strokeWidth="0.7" />
                <circle cx="0" cy="0" r="7" fill="#FFFFFF" stroke="#DED4C0" strokeWidth="0.7" />
                <circle cx="0" cy="0" r="3" fill="url(#letterGoldLeaf)" />
              </g>
            </g>

            {/* GRAND 3D CIRCULAR WAX SEAL */}
            <g transform="translate(200, 105)">
              <circle cx="0" cy="0" r="28" fill="url(#letterTealSeal)" stroke="#4A849C" strokeWidth="1.5" filter="drop-shadow(0 6px 14px rgba(0,0,0,0.6))" />
              <circle cx="0" cy="0" r="23" fill="none" stroke="url(#letterGoldRim)" strokeWidth="1.4" strokeDasharray="2.5 2" opacity="0.9" />
              <circle cx="0" cy="0" r="19" fill="#112933" stroke="#08171E" strokeWidth="1.2" />
              <path d="M0 -12 C-8 -6, -8 6, 0 12 C8 6, 8 -6, 0 -12 Z" fill="url(#letterGoldLeaf)" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.5))" />
              <path d="M-6 -2 C-10 -7, -4 -9, 0 -5" stroke="#FFF7D6" strokeWidth="1" fill="none" />
              <path d="M6 -2 C10 -7, 4 -9, 0 -5" stroke="#FFF7D6" strokeWidth="1" fill="none" />
              <circle cx="0" cy="0" r="2" fill="#FFFDF0" />
            </g>
          </svg>

        </div>

      </div>

    </section>
  );
};

export default InteractiveLaceEnvelope;
