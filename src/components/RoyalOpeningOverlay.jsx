import React, { useState, useEffect } from 'react';
import { weddingData } from '../data/weddingData';
import { ChevronDown } from 'lucide-react';
import mainWebp from '../assets/main.webp';
import bgCourtyardWebp from '../assets/background1.webp';

/**
 * ROYAL INDIAN WEDDING INVITATION FULL-SCREEN OPENING OVERLAY
 * Optimized for silky-smooth 60/120 FPS performance with zero lag or freezing:
 * - Direct GPU-accelerated WebP rendering with translateZ(0) & will-change
 * - Native CSS touch-action handling (no aggressive preventDefault cancelling taps)
 * - Clean document scroll locking that restores instantly without layout freeze
 * - 0ms instant touch response (onTouchEnd + onClick support)
 */
export const RoyalOpeningOverlay = ({ onComplete, onStartMusic }) => {
  // Phases:
  // 'sealed'   -> 4 petals closed, filling screen, P & V seal pulsing at center
  // 'opening'  -> Seal shimmers; all 4 petals unfold simultaneously in 3D (2.0s)
  // 'card-up'  -> Arched card pops up from letterbox into prominent view
  // 'entering' -> Overlay smoothly dissolves, document scroll unlocks, music plays
  const [phase, setPhase] = useState('sealed');

  // Lock document scroll completely while overlay is active; clean restoration on unmount
  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, []);

  // Trigger 4-petal simultaneous unfolding & card pop-up
  const handleOpen = (e) => {
    if (e && e.type === 'touchend') {
      e.preventDefault();
    }
    if (phase !== 'sealed') return;
    if (onStartMusic) onStartMusic();

    // Stage 1: All 4 petals start opening at the same time slowly
    setPhase('opening');

    // Stage 2: Card pops up smoothly from inside the letterbox as petals clear
    setTimeout(() => {
      setPhase('card-up');
    }, 1100);
  };

  // User taps card or button to enter celebration and view full website
  const handleEnterWebsite = (e) => {
    if (e && e.type === 'touchend') {
      e.preventDefault();
    }
    if (onStartMusic) onStartMusic();
    setPhase('entering');
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 600);
  };

  const isOpening = phase === 'opening' || phase === 'card-up' || phase === 'entering';
  const isCardUp = phase === 'card-up' || phase === 'entering';

  return (
    <div 
      className={`fixed inset-0 z-[9999] w-full h-[100dvh] min-h-screen bg-[#140004] flex items-center justify-center overflow-hidden select-none transition-opacity duration-600 ease-out ${
        phase === 'entering' ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
      style={{ 
        touchAction: 'none',
        overscrollBehavior: 'none',
      }}
    >
      
      {/* =========================================================================
          BACKGROUND LAYER: ROYAL PALACE COURTYARD SCENE (background1.webp)
          ========================================================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <img 
          src={bgCourtyardWebp} 
          alt="Royal Palace Courtyard" 
          className="w-full h-full object-cover object-center" 
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/60" />
      </div>

      {/* Floating Golden Dust Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
        {[
          { top: '20%', left: '25%', size: 3, delay: '0s' },
          { top: '30%', left: '75%', size: 2.5, delay: '1.2s' },
          { top: '65%', left: '18%', size: 3.5, delay: '2.1s' },
          { top: '80%', left: '82%', size: 2, delay: '0.8s' },
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

      {/* Skip Opening Button (Fixed in corner) */}
      <button
        onClick={handleEnterWebsite}
        onTouchEnd={handleEnterWebsite}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 px-4 py-2 rounded-full bg-[#3B0510]/90 border border-[#E06B85]/70 text-[#FFF0F4] font-serif italic text-xs tracking-wider backdrop-blur-md shadow-2xl hover:bg-[#5C0B1C] hover:border-[#FFAAB8] transition-all flex items-center gap-2 cursor-pointer active:scale-95"
        aria-label="Skip opening to explore invitation"
      >
        <span>Skip opening</span>
        <span className="text-[13px] font-sans leading-none">&#8599;</span>
      </button>

      {/* =========================================================================
          STAGE 2: THE LETTERBOX & ARCHED INVITATION CARD (Revealed behind petals)
          ========================================================================= */}
      <div className="relative w-full max-w-[430px] h-full max-h-[100dvh] flex flex-col items-center justify-center px-4">
        
        {/* THE LETTERBOX ENVELOPE CONTAINER */}
        <div className="relative w-full aspect-[941/1400] max-h-[82dvh] flex items-end justify-center perspective-1600">
          
          {/* ARCHED ROYAL INVITATION CARD (Pops up from letterbox) */}
          <div 
            onClick={isCardUp ? handleEnterWebsite : undefined}
            onTouchEnd={isCardUp ? handleEnterWebsite : undefined}
            className={`absolute inset-x-3 sm:inset-x-4 top-1 h-[82%] rounded-t-[50px] rounded-b-2xl bg-[#FFFDF8] border-2 border-[#D4AF37] p-5 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.85)] flex flex-col items-center justify-between text-center select-none z-20 transition-all duration-[1400ms] ease-out ${
              isCardUp 
                ? '-translate-y-36 sm:-translate-y-44 scale-100 opacity-100 cursor-pointer hover:shadow-[0_25px_70px_rgba(212,175,55,0.45)]' 
                : 'translate-y-24 scale-95 opacity-0 pointer-events-none'
            }`}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.4, 1)',
              willChange: 'transform, opacity',
            }}
          >
            {/* Scalloped Gold Inner Arch Border */}
            <div className="absolute inset-2 border border-dashed border-[#AA7C11]/40 rounded-t-[44px] rounded-b-xl pointer-events-none" />

            {/* Sacred Heading */}
            <div className="flex flex-col items-center">
              <span className="text-[#AA7C11] text-xs font-serif italic tracking-widest">
                &#10022; || Shree Ganeshay Namah || &#10022;
              </span>
              <p className="font-serif italic text-xs sm:text-sm text-[#781124] leading-relaxed max-w-xs mt-3">
                Together with our families, we cordially invite you to the Wedding of
              </p>
            </div>

            {/* Couple Names */}
            <div className="my-2 flex flex-col items-center">
              <h2 className="font-cursive text-4xl sm:text-5xl text-[#3B0612] tracking-wide my-0.5 drop-shadow-sm font-normal">
                {weddingData.brideFirstName}
              </h2>
              <span className="font-serif italic text-xl text-[#AA7C11] my-0.5">&amp;</span>
              <h2 className="font-cursive text-4xl sm:text-5xl text-[#3B0612] tracking-wide my-0.5 drop-shadow-sm font-normal">
                {weddingData.groomFirstName}
              </h2>
            </div>

            {/* Date & Venue Box */}
            <div className="w-full py-2.5 border-y border-[#AA7C11]/30 my-1 flex flex-col items-center">
              <p className="font-royal text-sm sm:text-base text-[#2E020A] font-bold tracking-widest">
                {weddingData.displayDate}
              </p>
              <p className="font-serif text-xs text-[#781124] tracking-wide mt-0.5">
                {weddingData.venueName} &bull; {weddingData.venueCity}
              </p>
            </div>

            {/* Tap To Enter Button */}
            <div className="flex flex-col items-center mt-2">
              <button
                onClick={handleEnterWebsite}
                onTouchEnd={handleEnterWebsite}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#5C0E1E] via-[#8C132B] to-[#42050F] text-[#FFF6D6] border border-[#D4AF37] font-royal text-[11px] sm:text-xs tracking-[0.2em] uppercase font-bold shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer animate-pulse"
              >
                <span>Tap to Enter Celebration</span>
                <span className="text-[13px]">&#8599;</span>
              </button>
              <span className="font-serif italic text-[11px] text-[#781124]/80 mt-1.5 flex items-center gap-1">
                View ceremony timings, schedule &amp; venue details
                <ChevronDown className="w-3.5 h-3.5 inline animate-bounce" />
              </span>
            </div>
          </div>

          {/* LETTERBOX ENVELOPE FRONT POCKET (Holds the card inside) */}
          <div className="relative w-full h-[44%] rounded-b-2xl bg-gradient-to-t from-[#1F0106] via-[#3B0510] to-[#580D1D] border-2 border-[#D4AF37]/90 shadow-2xl overflow-hidden z-25 pointer-events-none">
            {/* Gold Damask Pattern on Pocket */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#FFDF78_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
            
            {/* Front Triangular Flap Fold Texture */}
            <div 
              className="absolute inset-0 bg-gradient-to-b from-[#7A1328]/80 to-[#2E050D] border-t border-[#D4AF37]/60"
              style={{
                clipPath: 'polygon(0 0, 50% 65%, 100% 0, 100% 100%, 0 100%)',
              }}
            />

            {/* Gold Filigree Line along V-pocket */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M 0 0 L 50 65 L 100 0" fill="none" stroke="#FFDF78" strokeWidth="1.2" strokeOpacity="0.8" />
            </svg>

            {/* Gold Wax Medallion on pocket */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border border-[#FFDF78] bg-[#4A0A16] flex items-center justify-center shadow-lg">
              <span className="font-serif font-bold text-xs text-[#FFDF78]">P &amp; V</span>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          STAGE 1: 4 CARVED PETALS & CENTERED P & V SEAL (Full-Screen Cover)
          Unfolds simultaneously outward in 3D when tapped!
          ========================================================================= */}
      <div 
        className={`absolute inset-0 w-full h-full z-30 perspective-1600 transition-all duration-1000 ${
          phase === 'card-up' || phase === 'entering' 
            ? 'pointer-events-none opacity-0' 
            : 'pointer-events-auto opacity-100'
        }`}
      >
        {/* Full-bleed responsive container for 4 petals */}
        <div className="relative w-full h-full overflow-hidden">

          {/* 1. TOP PETAL: Folds upward in 3D */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden cursor-pointer"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 50%)',
              transformOrigin: 'top center',
              transform: isOpening ? 'rotateX(115deg) translateY(-25%) translateZ(0) scale(0.85)' : 'rotateX(0deg) translateY(0) translateZ(0) scale(1)',
              opacity: isOpening ? 0 : 1,
              transition: 'transform 2000ms cubic-bezier(0.25, 1, 0.4, 1), opacity 1800ms ease-out 300ms',
              willChange: 'transform, opacity',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
            }}
            onClick={handleOpen}
            onTouchEnd={handleOpen}
          >
            <img 
              src={mainWebp} 
              alt="Envelope Top Petal" 
              className="w-full h-full object-cover object-center select-none pointer-events-none" 
              loading="eager"
              decoding="async"
            />
          </div>

          {/* 2. BOTTOM PETAL: Folds downward in 3D */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden cursor-pointer"
            style={{
              clipPath: 'polygon(0 100%, 50% 50%, 100% 100%)',
              transformOrigin: 'bottom center',
              transform: isOpening ? 'rotateX(-115deg) translateY(25%) translateZ(0) scale(0.85)' : 'rotateX(0deg) translateY(0) translateZ(0) scale(1)',
              opacity: isOpening ? 0 : 1,
              transition: 'transform 2000ms cubic-bezier(0.25, 1, 0.4, 1), opacity 1800ms ease-out 300ms',
              willChange: 'transform, opacity',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
            }}
            onClick={handleOpen}
            onTouchEnd={handleOpen}
          >
            <img 
              src={mainWebp} 
              alt="Envelope Bottom Petal" 
              className="w-full h-full object-cover object-center select-none pointer-events-none" 
              loading="eager"
              decoding="async"
            />
          </div>

          {/* 3. LEFT PETAL: Folds leftward in 3D */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden cursor-pointer"
            style={{
              clipPath: 'polygon(0 0, 50% 50%, 0 100%)',
              transformOrigin: 'left center',
              transform: isOpening ? 'rotateY(-115deg) translateX(-25%) translateZ(0) scale(0.85)' : 'rotateY(0deg) translateX(0) translateZ(0) scale(1)',
              opacity: isOpening ? 0 : 1,
              transition: 'transform 2000ms cubic-bezier(0.25, 1, 0.4, 1), opacity 1800ms ease-out 300ms',
              willChange: 'transform, opacity',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
            }}
            onClick={handleOpen}
            onTouchEnd={handleOpen}
          >
            <img 
              src={mainWebp} 
              alt="Envelope Left Petal" 
              className="w-full h-full object-cover object-center select-none pointer-events-none" 
              loading="eager"
              decoding="async"
            />
          </div>

          {/* 4. RIGHT PETAL: Folds rightward in 3D */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden cursor-pointer"
            style={{
              clipPath: 'polygon(100% 0, 100% 100%, 50% 50%)',
              transformOrigin: 'right center',
              transform: isOpening ? 'rotateY(115deg) translateX(25%) translateZ(0) scale(0.85)' : 'rotateY(0deg) translateX(0) translateZ(0) scale(1)',
              opacity: isOpening ? 0 : 1,
              transition: 'transform 2000ms cubic-bezier(0.25, 1, 0.4, 1), opacity 1800ms ease-out 300ms',
              willChange: 'transform, opacity',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
            }}
            onClick={handleOpen}
            onTouchEnd={handleOpen}
          >
            <img 
              src={mainWebp} 
              alt="Envelope Right Petal" 
              className="w-full h-full object-cover object-center select-none pointer-events-none" 
              loading="eager"
              decoding="async"
            />
          </div>

          {/* SYMMETRICAL GOLD HAIRLINE SEAMS (Meeting at 50% 50%) */}
          <svg 
            className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500 ${
              isOpening ? 'opacity-0' : 'opacity-100'
            }`} 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
          >
            <line x1="0" y1="0" x2="50" y2="50" stroke="#FFDF78" strokeWidth="0.4" strokeOpacity="0.4" />
            <line x1="100" y1="0" x2="50" y2="50" stroke="#FFDF78" strokeWidth="0.4" strokeOpacity="0.4" />
            <line x1="0" y1="100" x2="50" y2="50" stroke="#FFDF78" strokeWidth="0.4" strokeOpacity="0.4" />
            <line x1="100" y1="100" x2="50" y2="50" stroke="#FFDF78" strokeWidth="0.4" strokeOpacity="0.4" />
          </svg>

          {/* Invitation Sealed Prompt Text */}
          <div 
            className={`absolute top-10 sm:top-14 inset-x-0 flex flex-col items-center text-center px-4 pointer-events-none transition-all duration-600 ease-out z-45 ${
              isOpening ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <p className="font-serif italic text-2xl sm:text-3xl text-[#FFF0F4] tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              You are invited
            </p>
            <span className="font-royal text-[9px] sm:text-[10px] tracking-[0.35em] text-[#FFDF78] uppercase font-bold mt-1.5 drop-shadow">
              Tap the seal to open
            </span>
          </div>

          {/* CENTRAL CIRCULAR P & V WAX SEAL (Positioned precisely at visual center 50% 50%) */}
          <div 
            onClick={handleOpen}
            onTouchEnd={handleOpen}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-700 ease-out cursor-pointer ${
              isOpening 
                ? 'scale-110 opacity-0 pointer-events-none filter drop-shadow-[0_0_35px_#FFD700]' 
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
                <radialGradient id="pvWaxRim" cx="35%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#8C132B" />
                  <stop offset="35%" stopColor="#630B1C" />
                  <stop offset="75%" stopColor="#3B0510" />
                  <stop offset="100%" stopColor="#1C0106" />
                </radialGradient>

                <radialGradient id="pvCenterCore" cx="45%" cy="40%" r="55%">
                  <stop offset="0%" stopColor="#30030C" />
                  <stop offset="70%" stopColor="#4A0714" />
                  <stop offset="100%" stopColor="#6E0E22" />
                </radialGradient>

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
            <div className={`absolute inset-0 rounded-full pointer-events-none ${!isOpening ? 'animate-seal-glow' : ''}`} />
          </div>

        </div>
      </div>

    </div>
  );
};

export default RoyalOpeningOverlay;
