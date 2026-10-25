import React, { useState, useEffect } from 'react';
import { weddingData } from '../data/weddingData';
import mainWebp from '../assets/main.webp';
import mainPng from '../../IMG/main.png';

/**
 * ROYAL INDIAN WEDDING INVITATION FULL-SCREEN OPENING OVERLAY
 * 
 * Satisfies all specifications:
 * 1. Uses actual Main.png (with optimized WebP fallback) preserving crisp 941x1672 aspect ratio.
 * 2. Positions circular P & V wax seal precisely at the 50%/50% meeting point of envelope flaps.
 * 3. Clean symmetrical triangular envelope geometry with hairline gold fold accents.
 * 4. Preserves rich maroon velvet, crimson floral vines, lotus motifs, and gold detailing.
 * 5. Slow, graceful, luxurious 5-stage opening animation (glow, 3D flap unseal, card emergence).
 * 6. Dedicated full-screen overlay (position: fixed; inset: 0; z-index: 9999; height: 100dvh).
 * 7. Locks body scroll completely while active; reveals website only after opening/skip.
 * 8. Prevents touch scrolling, swiping, or background jumps.
 * 9. Responsive mobile-first layout, constrained gracefully on tablet and desktop.
 */

export const RoyalOpeningOverlay = ({ onComplete, onStartMusic }) => {
  // Opening Phases:
  // 'sealed'        -> Invitation closed, P & V seal pulsing with warm glow
  // 'glowing'       -> Seal shimmers with intense golden radiance (0.8s - 1.2s)
  // 'flap-opening'  -> Upper triangular flap rotates 180° backward in 3D (1.8s)
  // 'card-rising'   -> Ivory wedding card glides upward out of envelope pocket (1.5s)
  // 'settled'       -> Card settled, displaying couple details & "Enter Celebration"
  // 'fading'        -> Overlay smoothly dissolves, unlocking document scroll
  const [phase, setPhase] = useState('sealed');

  // Lock document scroll completely while overlay is active
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalPosition = document.body.style.position;
    const originalWidth = document.body.style.width;
    const originalHeight = document.body.style.height;
    const originalTouchAction = document.body.style.touchAction;

    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    document.body.style.touchAction = 'none';
    document.documentElement.style.overflow = 'hidden';

    // Prevent touchmove default on mobile overlay
    const preventScroll = (e) => {
      e.preventDefault();
    };
    window.addEventListener('touchmove', preventScroll, { passive: false });

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.position = originalPosition;
      document.body.style.width = originalWidth;
      document.body.style.height = originalHeight;
      document.body.style.touchAction = originalTouchAction;
      document.documentElement.style.overflow = '';
      window.removeEventListener('touchmove', preventScroll);
    };
  }, []);

  // Trigger opening sequence
  const handleOpen = () => {
    if (phase !== 'sealed') return;
    if (onStartMusic) onStartMusic();

    // Stage 1: Golden glow on seal (0.8s)
    setPhase('glowing');

    // Stage 2: Flap rotates backward (1.8s)
    setTimeout(() => {
      setPhase('flap-opening');
    }, 900);

    // Stage 3: Card glides up (1.5s)
    setTimeout(() => {
      setPhase('card-rising');
    }, 2400);

    // Stage 4: Card settled (invites enter)
    setTimeout(() => {
      setPhase('settled');
    }, 3900);
  };

  // Immediate skip button or enter button
  const handleEnterCelebration = () => {
    if (onStartMusic) onStartMusic();
    setPhase('fading');
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 700);
  };

  const isFlapOpen = phase === 'flap-opening' || phase === 'card-rising' || phase === 'settled';
  const isCardUp = phase === 'card-rising' || phase === 'settled';

  return (
    <div 
      className={`fixed inset-0 z-[9999] w-full h-[100dvh] min-h-screen bg-[#140004] flex items-center justify-center overflow-hidden select-none transition-opacity duration-700 ease-out ${
        phase === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
      style={{
        touchAction: 'none',
      }}
    >
      {/* Deep Royal Atmospheric Background with Floating Gold Dust */}
      <div className="absolute inset-0 bg-radial from-[#2E050D] via-[#1A0105] to-[#0A0002] pointer-events-none" />

      {/* Floating Gold Sparkle Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        {[
          { top: '15%', left: '20%', size: 3, delay: '0s' },
          { top: '25%', left: '80%', size: 2.5, delay: '1s' },
          { top: '75%', left: '15%', size: 3.5, delay: '2s' },
          { top: '85%', left: '75%', size: 2, delay: '1.5s' },
        ].map((pt, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#FFE699] animate-pulse"
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

      {/* Skip Opening Pill (Fixed in lower right corner) */}
      <button
        onClick={handleEnterCelebration}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 px-4 py-2 rounded-full bg-[#3B0510]/90 border border-[#E06B85]/70 text-[#FFF0F4] font-serif italic text-xs tracking-wider backdrop-blur-md shadow-2xl hover:bg-[#5C0B1C] hover:border-[#FFAAB8] transition-all flex items-center gap-2 cursor-pointer active:scale-95"
        aria-label="Skip opening to explore invitation"
      >
        <span>Skip opening</span>
        <span className="text-[13px] font-sans leading-none">&#8599;</span>
      </button>

      {/* MAIN ENVELOPE STAGE (Preserves exact 941:1672 aspect ratio of Main.png) */}
      <div className="relative w-full max-w-[400px] sm:max-w-[430px] aspect-[941/1672] max-h-[92dvh] flex items-center justify-center p-2 sm:p-4">
        
        {/* Outer 3D Envelope Container */}
        <div 
          className="relative w-full h-full rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] perspective-1600"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {/* 1. ENVELOPE INTERIOR BACK (Warm Ivory with Gold Jaali Lattice) */}
          <div className="absolute inset-0 rounded-2xl bg-[#FFFDF7] border-2 border-[#D4AF37]/60 overflow-hidden shadow-inner z-10">
            {/* Soft Interior Depth Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/40 pointer-events-none" />
            
            {/* Gold Jaali Lattice Pattern */}
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#AA7C11_1.5px,transparent_1.5px)] [background-size:16px_16px]" />

            {/* Sacred Shloka watermark inside envelope */}
            <div className="absolute top-12 inset-x-0 flex flex-col items-center text-center opacity-30 pointer-events-none">
              <span className="font-serif italic text-sm text-[#8C132B]">|| Shree Ganeshay Namah ||</span>
            </div>
          </div>

          {/* 2. ROYAL INVITATION CARD (Glides upward from inside pocket) */}
          <div 
            onClick={isCardUp ? handleEnterCelebration : undefined}
            className={`absolute inset-x-3.5 sm:inset-x-5 top-[8%] h-[64%] rounded-2xl bg-[#FFFDF9] border-2 border-[#D4AF37] p-4 sm:p-5 shadow-2xl flex flex-col items-center justify-between text-center select-none z-20 ${
              isCardUp ? 'cursor-pointer hover:shadow-[0_20px_50px_rgba(212,175,55,0.4)]' : ''
            }`}
            style={{
              transformOrigin: 'bottom center',
              transform: isCardUp 
                ? 'translateY(-10%) scale(1.0)' 
                : 'translateY(36%) scale(0.92)',
              transition: 'transform 1600ms cubic-bezier(0.25, 1, 0.4, 1), box-shadow 1600ms ease',
              boxShadow: isCardUp 
                ? '0 25px 60px rgba(0,0,0,0.85), 0 0 30px rgba(212,175,55,0.4)' 
                : '0 4px 15px rgba(0,0,0,0.4)',
            }}
          >
            {/* Inner Dotted Gold Lining */}
            <div className="absolute inset-2 border border-dashed border-[#AA7C11]/45 rounded-xl pointer-events-none" />

            {/* Top Scalloped Arch & Lotus */}
            <div className="flex flex-col items-center">
              <span className="text-[#AA7C11] text-xs font-serif italic mb-1 tracking-widest">
                &#10022; || Om Gan Ganapataye Namah || &#10022;
              </span>
              <span className="font-royal text-[9px] sm:text-[10px] tracking-[0.3em] text-[#8C132B] uppercase font-bold mt-1">
                Royal Wedding Invitation
              </span>
            </div>

            {/* Couple Names */}
            <div className="my-2 flex flex-col items-center">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#3B0612] tracking-wide font-medium">
                {weddingData.brideFirstName}
              </h2>
              <span className="font-serif italic text-lg text-[#AA7C11] my-0.5">&amp;</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#3B0612] tracking-wide font-medium">
                {weddingData.groomFirstName}
              </h2>
            </div>

            {/* Sacred Blessing Verse */}
            <p className="font-serif italic text-xs text-[#5C0E1E] leading-relaxed max-w-xs px-2">
              Together with their families, invite you to celebrate their wedding and beginning of eternal togetherness.
            </p>

            {/* Date & Venue Box */}
            <div className="w-full py-2 border-y border-[#AA7C11]/30 my-1 flex flex-col items-center">
              <p className="font-royal text-xs sm:text-sm text-[#2E020A] font-bold tracking-widest">
                {weddingData.displayDate}
              </p>
              <p className="font-serif text-[11px] text-[#781124] tracking-wide mt-0.5">
                {weddingData.venueName} &bull; Bengaluru
              </p>
            </div>

            {/* Enter Celebration Button on Card */}
            {isCardUp ? (
              <button
                onClick={handleEnterCelebration}
                className="mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#5C0E1E] via-[#8C132B] to-[#42050F] text-[#FFF6D6] border border-[#D4AF37] font-royal text-[11px] tracking-widest uppercase font-semibold shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer animate-fade-in"
              >
                Enter Celebration &#8599;
              </button>
            ) : (
              <div className="h-8" />
            )}
          </div>

          {/* 3. FRONT ENVELOPE POCKET (Left, Right, Bottom triangular flaps from Main.png) */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-25">
            {/* Base Image Layer for Left, Right, Bottom */}
            <picture>
              <source srcSet={mainWebp} type="image/webp" />
              <img 
                src={mainPng} 
                alt="Envelope Pocket" 
                className="w-full h-full object-cover select-none"
                style={{
                  clipPath: 'polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%)',
                }}
              />
            </picture>

            {/* Symmetrical Gold Hairline Seam Accents (Meeting precisely at 50% 50%) */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              <line x1="0" y1="0" x2="50" y2="50" stroke="#FFDF78" strokeWidth="0.4" strokeOpacity="0.4" />
              <line x1="100" y1="0" x2="50" y2="50" stroke="#FFDF78" strokeWidth="0.4" strokeOpacity="0.4" />
              <line x1="0" y1="100" x2="50" y2="50" stroke="#FFDF78" strokeWidth="0.5" strokeOpacity="0.5" />
              <line x1="100" y1="100" x2="50" y2="50" stroke="#FFDF78" strokeWidth="0.5" strokeOpacity="0.5" />
            </svg>
          </div>

          {/* 4. UPPER TRIANGULAR MOVING FLAP (3D Hinge at Top) */}
          <div 
            className={`absolute top-0 inset-x-0 h-1/2 overflow-hidden cursor-pointer transition-transform duration-[1800ms] ease-in-out ${
              isFlapOpen ? 'z-15 pointer-events-none' : 'z-30 pointer-events-auto'
            }`}
            style={{
              transformOrigin: 'top center',
              transformStyle: 'preserve-3d',
              transform: isFlapOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
              transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.4, 1)',
            }}
            onClick={handleOpen}
          >
            {/* FRONT FACE: Top Triangular Flap from Main.png (Points DOWN to 50% 50%) */}
            <div 
              className="absolute inset-0 w-full h-full backface-hidden"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              <picture>
                <source srcSet={mainWebp} type="image/webp" />
                <img 
                  src={mainPng} 
                  alt="Envelope Flap Front" 
                  className="w-full h-[200%] object-cover object-top select-none pointer-events-none" 
                />
              </picture>

              {/* Gold V-seam on flap edge */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none"
              >
                <line x1="0" y1="0" x2="50" y2="100" stroke="#FFDF78" strokeWidth="0.6" strokeOpacity="0.6" />
                <line x1="100" y1="0" x2="50" y2="100" stroke="#FFDF78" strokeWidth="0.6" strokeOpacity="0.6" />
              </svg>
            </div>

            {/* BACK FACE: Underside of Flap (Warm Ivory Lining with Gold Jaali) */}
            <div 
              className="absolute inset-0 w-full h-full bg-[#FFFDF7] border-b-2 border-[#D4AF37] shadow-lg flex items-center justify-center backface-hidden"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                transform: 'rotateX(180deg)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#AA7C11_1.5px,transparent_1.5px)] [background-size:14px_14px]" />
              <div className="font-serif italic text-xs text-[#8C132B]/60 tracking-wider">
                &#10022; With Joy &amp; Blessings &#10022;
              </div>
            </div>
          </div>

          {/* 5. CENTRAL CIRCULAR P & V WAX SEAL (Positioned precisely at visual center 50% 50%) */}
          <div 
            onClick={handleOpen}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 transition-all duration-700 ease-out cursor-pointer ${
              phase === 'glowing' 
                ? 'scale-110 drop-shadow-[0_0_35px_#FFD700]' 
                : isFlapOpen 
                  ? 'scale-0 opacity-0 pointer-events-none' 
                  : 'scale-100 opacity-100 hover:scale-105 active:scale-95'
            }`}
            style={{
              width: '92px',
              height: '92px',
            }}
          >
            {/* SVG Circular Stamped Royal Wax Seal */}
            <svg 
              className="w-full h-full aspect-square filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.85)]" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* 3D Wax Rim Radial Gradient */}
                <radialGradient id="pvWaxRim" cx="35%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#8C132B" />
                  <stop offset="35%" stopColor="#630B1C" />
                  <stop offset="75%" stopColor="#3B0510" />
                  <stop offset="100%" stopColor="#1C0106" />
                </radialGradient>

                {/* Stamped Center Inset Gradient */}
                <radialGradient id="pvCenterCore" cx="45%" cy="40%" r="55%">
                  <stop offset="0%" stopColor="#30030C" />
                  <stop offset="70%" stopColor="#4A0714" />
                  <stop offset="100%" stopColor="#6E0E22" />
                </radialGradient>

                {/* Golden Lettering Gradient */}
                <linearGradient id="pvGoldText" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF8E0" />
                  <stop offset="35%" stopColor="#FFDF78" />
                  <stop offset="70%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#9E7310" />
                </linearGradient>
              </defs>

              {/* Circular Wax Outer Rim */}
              <circle cx="50" cy="50" r="47" fill="url(#pvWaxRim)" stroke="#A31835" strokeWidth="0.8" />
              
              {/* Concentric Gold Beaded Outer Ring */}
              <circle cx="50" cy="50" r="42" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="2 2.5" opacity="0.8" />
              
              {/* Stamped Inner Core Bed */}
              <circle cx="50" cy="50" r="36" fill="url(#pvCenterCore)" stroke="#1F0106" strokeWidth="1.5" />
              
              {/* Fine Dotted Gold Inner Border */}
              <circle cx="50" cy="50" r="33" fill="none" stroke="#FFDF78" strokeWidth="0.9" strokeDasharray="1.8 2" opacity="0.9" />

              {/* Monogram: P & V */}
              <text 
                x="33" 
                y="56" 
                textAnchor="middle" 
                fill="url(#pvGoldText)" 
                fontSize="17" 
                fontFamily="Georgia, serif" 
                fontWeight="bold"
                filter="drop-shadow(0 1px 2px rgba(0,0,0,0.9))"
              >
                P
              </text>
              <text 
                x="50" 
                y="55" 
                textAnchor="middle" 
                fill="#FFDF78" 
                fontSize="13" 
                fontFamily="Georgia, serif" 
                fontStyle="italic"
                opacity="0.9"
              >
                &amp;
              </text>
              <text 
                x="67" 
                y="56" 
                textAnchor="middle" 
                fill="url(#pvGoldText)" 
                fontSize="17" 
                fontFamily="Georgia, serif" 
                fontWeight="bold"
                filter="drop-shadow(0 1px 2px rgba(0,0,0,0.9))"
              >
                V
              </text>
            </svg>

            {/* Subtle Pulsing Warm Glow */}
            <div className={`absolute inset-0 rounded-full pointer-events-none ${phase === 'sealed' ? 'animate-seal-glow' : ''}`} />
          </div>

          {/* Invitation Sealed Prompt Text */}
          <div 
            className={`absolute top-8 sm:top-10 inset-x-0 flex flex-col items-center text-center px-4 pointer-events-none transition-all duration-700 ease-out z-35 ${
              isFlapOpen ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <p className="font-serif italic text-2xl sm:text-3xl text-[#FFF0F4] tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              You are invited
            </p>
            <span className="font-royal text-[9px] sm:text-[10px] tracking-[0.35em] text-[#FFDF78] uppercase font-bold mt-1 drop-shadow">
              Tap the seal to open
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};
