import React, { useState, useEffect } from 'react';
import { weddingData } from '../data/weddingData';
import { ChevronDown } from 'lucide-react';
import mainWebp from '../assets/main.webp';
import mailWebp from '../assets/mail.webp';

/**
 * ROYAL INDIAN WEDDING INVITATION FULL-SCREEN OPENING OVERLAY
 * 
 * Visitor Experience Sequence:
 * 1. Royal Entrance Animation: Full-screen Main.png crimson velvet 4-petal envelope with centered P & V seal.
 * 2. Visitor taps seal -> All 4 petals unfold simultaneously in 3D over 1.8s.
 * 3. Smooth transition to the luxurious Teal-Blue & Ivory Floral Mailbox (matching mail.png).
 * 4. Closed mailbox appears centered with deep teal wax seal and gold botanical emblem.
 * 5. Flap rotates open in 3D, revealing dark teal botanical lining.
 * 6. Large ivory invitation card with double gold filigree borders rises smoothly from inside the envelope.
 * 7. Card displays Priya & Varun wedding details and "Tap to Enter Celebration ↗".
 * 8. User taps card/button or skips -> Overlay dissolves, scroll unlocks, website becomes active.
 */
export const RoyalOpeningOverlay = ({ onComplete, onStartMusic }) => {
  // Master Scene: 'entrance' -> 'mailbox' -> 'entering' (fade out)
  const [scene, setScene] = useState('entrance');

  // Entrance 4-petal animation state: 'sealed' | 'petals-opening'
  const [entrancePhase, setEntrancePhase] = useState('sealed');

  // Mailbox animation state: 'closed' | 'opening' | 'card-up'
  const [mailboxPhase, setMailboxPhase] = useState('closed');

  // Lock document scroll completely while overlay is active
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

  // Step 1: Trigger 4-petal entrance opening
  const handleOpenEntrance = (e) => {
    if (e && e.type === 'touchend') e.preventDefault();
    if (entrancePhase !== 'sealed') return;
    if (onStartMusic) onStartMusic();

    setEntrancePhase('petals-opening');

    // After 4 petals complete outward sweep (1.8s), transition to Mailbox
    setTimeout(() => {
      setScene('mailbox');

      // Mailbox sequence begins after transition
      setTimeout(() => {
        setMailboxPhase('opening');
      }, 700);

      setTimeout(() => {
        setMailboxPhase('card-up');
      }, 1800);
    }, 1800);
  };

  // Step 2: Trigger mailbox flap opening manually if tapped
  const handleOpenMailbox = (e) => {
    if (e && e.type === 'touchend') e.preventDefault();
    if (mailboxPhase === 'closed') {
      setMailboxPhase('opening');
      setTimeout(() => {
        setMailboxPhase('card-up');
      }, 1100);
    }
  };

  // Final Step: Enter celebration and unlock full website
  const handleEnterWebsite = (e) => {
    if (e && e.type === 'touchend') e.preventDefault();
    if (onStartMusic) onStartMusic();
    setScene('entering');
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 600);
  };

  const isPetalsOpening = entrancePhase === 'petals-opening';
  const isMailboxFlapOpen = mailboxPhase === 'opening' || mailboxPhase === 'card-up';
  const isCardUp = mailboxPhase === 'card-up';

  return (
    <div 
      className={`fixed inset-0 z-[9999] w-full h-[100dvh] min-h-screen bg-[#140004] flex items-center justify-center overflow-hidden select-none transition-opacity duration-600 ease-out ${
        scene === 'entering' ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
      style={{ 
        touchAction: 'none',
        overscrollBehavior: 'none',
      }}
    >
      
      {/* Skip Opening Button (Always accessible in corner) */}
      <button
        onClick={handleEnterWebsite}
        onTouchEnd={handleEnterWebsite}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[10000] px-4 py-2 rounded-full bg-[#183B4A]/90 border border-[#D4AF37]/80 text-[#FFF9E6] font-serif italic text-xs tracking-wider backdrop-blur-md shadow-2xl hover:bg-[#255266] hover:border-[#FFF2B2] transition-all flex items-center gap-2 cursor-pointer active:scale-95"
        aria-label="Skip opening to explore invitation"
      >
        <span>Skip opening</span>
        <span className="text-[13px] font-sans leading-none">&#8599;</span>
      </button>

      {/* =========================================================================
          STAGE 2: TEAL-BLUE & IVORY LUXURY FLORAL MAILBOX (Matching mail.png)
          Appears immediately after entrance animation completes
          ========================================================================= */}
      <div 
        className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-1000 ease-out ${
          scene === 'mailbox' || scene === 'entering' 
            ? 'opacity-100 scale-100 pointer-events-auto' 
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {/* Full-bleed Ivory & Pale Teal Background with Floral Sprigs from mail.png */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          <img 
            src={mailWebp} 
            alt="Mailbox Background" 
            className="w-full h-full object-cover object-center" 
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F0]/20 via-transparent to-[#10242E]/50 pointer-events-none" />
        </div>

        {/* Floating Subtle Gold Shimmer Dust */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
          {[
            { top: '18%', left: '22%', size: 3, delay: '0s' },
            { top: '28%', left: '78%', size: 2.5, delay: '1s' },
            { top: '68%', left: '16%', size: 3.5, delay: '2s' },
            { top: '82%', left: '84%', size: 2, delay: '1.4s' },
          ].map((pt, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#FFF2B2] animate-pulse"
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

        {/* MAILBOX STAGE CONTAINER (Constrained to max-w-[430px] preserving proportions) */}
        <div className="relative w-full max-w-[430px] h-full max-h-[100dvh] flex flex-col items-center justify-center px-4">
          
          {/* THE ENVELOPE BOX CONTAINER */}
          <div className="relative w-full aspect-[941/1400] max-h-[84dvh] flex items-end justify-center perspective-1600">
            
            {/* 1. ENVELOPE INTERIOR BACK (Dark Teal with Gold Botanical Jaali) */}
            <div className="absolute inset-x-3 bottom-0 h-[65%] rounded-2xl bg-gradient-to-b from-[#0F222C] to-[#183442] border-2 border-[#D4AF37]/50 shadow-inner overflow-hidden z-10 pointer-events-none">
              <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#D4AF37_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
              <div className="absolute top-8 inset-x-0 flex flex-col items-center text-center opacity-40">
                <span className="font-serif italic text-xs text-[#E5C158] tracking-widest">&#10022; With Love &amp; Blessings &#10022;</span>
              </div>
            </div>

            {/* 2. LARGE IVORY INVITATION CARD (Glides upward from inside the envelope pocket) */}
            <div 
              onClick={isCardUp ? handleEnterWebsite : undefined}
              onTouchEnd={isCardUp ? handleEnterWebsite : undefined}
              className={`absolute inset-x-4 top-2 h-[82%] rounded-2xl bg-[#FFFDF8] border-2 border-[#D4AF37] p-5 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.85)] flex flex-col items-center justify-between text-center select-none z-20 transition-all duration-[1500ms] ease-out ${
                isCardUp 
                  ? '-translate-y-36 sm:-translate-y-44 scale-100 opacity-100 cursor-pointer hover:shadow-[0_25px_70px_rgba(212,175,55,0.45)]' 
                  : 'translate-y-20 scale-95 opacity-0 pointer-events-none'
              }`}
              style={{
                transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.4, 1)',
                willChange: 'transform, opacity',
              }}
            >
              {/* Double Gold Ornate Filigree Border with Corner Flourishes (matching mail.png) */}
              <div className="absolute inset-2 border border-[#D4AF37]/60 rounded-xl pointer-events-none">
                <div className="absolute inset-1 border border-dashed border-[#AA7C11]/35 rounded-lg" />
                {/* 4 Corner Gold Flourishes */}
                <span className="absolute top-1 left-1.5 text-[#D4AF37] text-xs font-serif leading-none">&#10087;</span>
                <span className="absolute top-1 right-1.5 text-[#D4AF37] text-xs font-serif leading-none">&#10087;</span>
                <span className="absolute bottom-1 left-1.5 text-[#D4AF37] text-xs font-serif leading-none">&#10087;</span>
                <span className="absolute bottom-1 right-1.5 text-[#D4AF37] text-xs font-serif leading-none">&#10087;</span>
              </div>

              {/* Sacred Heading */}
              <div className="flex flex-col items-center pt-1">
                <span className="text-[#AA7C11] text-xs font-serif italic tracking-widest">
                  &#10022; || Shree Ganeshay Namah || &#10022;
                </span>
                <p className="font-serif italic text-xs sm:text-sm text-[#244654] leading-relaxed max-w-xs mt-3 font-medium">
                  Together with our families, we cordially invite you to celebrate the Wedding of
                </p>
              </div>

              {/* Couple Names in Grand Royal Calligraphy */}
              <div className="my-2 flex flex-col items-center">
                <h2 className="font-cursive text-4xl sm:text-5xl text-[#1B3D4D] tracking-wide my-0.5 drop-shadow-sm font-normal">
                  {weddingData.brideFirstName}
                </h2>
                <span className="font-serif italic text-xl text-[#AA7C11] my-0.5">&amp;</span>
                <h2 className="font-cursive text-4xl sm:text-5xl text-[#1B3D4D] tracking-wide my-0.5 drop-shadow-sm font-normal">
                  {weddingData.groomFirstName}
                </h2>
              </div>

              {/* Date & Venue Box */}
              <div className="w-full py-2.5 border-y border-[#AA7C11]/30 my-1 flex flex-col items-center bg-[#FAF7F0]/60 rounded-md">
                <p className="font-royal text-sm sm:text-base text-[#183644] font-bold tracking-widest">
                  {weddingData.displayDate}
                </p>
                <p className="font-serif text-xs text-[#2A5265] tracking-wide mt-0.5 font-medium">
                  {weddingData.venueName} &bull; {weddingData.venueCity}
                </p>
              </div>

              {/* Tap To Enter Button */}
              <div className="flex flex-col items-center mt-2 pb-1">
                <button
                  onClick={handleEnterWebsite}
                  onTouchEnd={handleEnterWebsite}
                  className="px-7 py-2.5 rounded-full bg-gradient-to-r from-[#183D4C] via-[#24596F] to-[#12303D] text-[#FFFDF8] border-2 border-[#D4AF37] font-royal text-[11px] sm:text-xs tracking-[0.2em] uppercase font-bold shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer animate-pulse"
                >
                  <span>Tap to Enter Celebration</span>
                  <span className="text-[13px]">&#8599;</span>
                </button>
                <span className="font-serif italic text-[11px] text-[#244654]/85 mt-1.5 flex items-center gap-1 font-medium">
                  View ceremony timings, schedule &amp; venue details
                  <ChevronDown className="w-3.5 h-3.5 inline animate-bounce text-[#D4AF37]" />
                </span>
              </div>
            </div>

            {/* 3. TEAL-BLUE ENVELOPE FRONT POCKET (Covers the card with V-rim and floral bouquets) */}
            <div className="relative w-full h-[46%] rounded-b-2xl bg-gradient-to-t from-[#142C38] via-[#254C5E] to-[#36687F] border-2 border-[#D4AF37] shadow-2xl overflow-hidden z-25 pointer-events-none">
              {/* Fine Embossed Texture */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:12px_12px]" />

              {/* V-Cut Front Flap Shading with Gold Filigree Line */}
              <div 
                className="absolute inset-0 bg-gradient-to-b from-[#41768E]/90 to-[#183544] border-t-2 border-[#D4AF37]"
                style={{
                  clipPath: 'polygon(0 0, 50% 68%, 100% 0, 100% 100%, 0 100%)',
                }}
              />

              {/* Gold Filigree Line along V-rim */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 0 0 L 50 68 L 100 0" fill="none" stroke="#FFDF78" strokeWidth="1.2" strokeOpacity="0.9" />
              </svg>

              {/* White Blossoms and Gold Botanical Sprigs Flanking the Seal (matching mail.png) */}
              <div className="absolute top-2 inset-x-6 flex items-center justify-between pointer-events-none">
                {/* Left Floral Cluster */}
                <div className="flex items-center gap-1 -rotate-12 opacity-95">
                  <span className="text-[#FFFDF8] text-base drop-shadow">&#10047;</span>
                  <span className="text-[#FFDF78] text-xs drop-shadow">&#10048;</span>
                  <span className="text-[#FFFDF8] text-xs drop-shadow">&#9679;</span>
                </div>
                {/* Right Floral Cluster */}
                <div className="flex items-center gap-1 rotate-12 opacity-95">
                  <span className="text-[#FFFDF8] text-xs drop-shadow">&#9679;</span>
                  <span className="text-[#FFDF78] text-xs drop-shadow">&#10048;</span>
                  <span className="text-[#FFFDF8] text-base drop-shadow">&#10047;</span>
                </div>
              </div>

              {/* Dark Teal Wax Seal with Gold Botanical Leaf Emblem on Pocket */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border-2 border-[#D4AF37] bg-gradient-to-br from-[#2D5A6E] via-[#1A3D4D] to-[#0E2530] flex items-center justify-center shadow-xl">
                <span className="text-[#FFDF78] text-lg font-serif">&#9830;</span>
              </div>
            </div>

            {/* 4. UPPER TEAL FLAP (Rotates backward in 3D around top hinge when opening) */}
            <div 
              className={`absolute top-[35%] inset-x-0 h-[30%] overflow-hidden cursor-pointer transition-transform duration-[1600ms] ease-in-out ${
                isMailboxFlapOpen ? 'z-15 pointer-events-none' : 'z-30 pointer-events-auto'
              }`}
              style={{
                transformOrigin: 'top center',
                transformStyle: 'preserve-3d',
                transform: isMailboxFlapOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
                transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.4, 1)',
                willChange: 'transform',
              }}
              onClick={handleOpenMailbox}
              onTouchEnd={handleOpenMailbox}
            >
              {/* FRONT FACE: Closed Teal Flap (Points DOWN to center) */}
              <div 
                className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#2B5467] via-[#204454] to-[#142E3B] border-b-2 border-[#D4AF37] shadow-xl flex items-center justify-center backface-hidden"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:12px_12px]" />
                
                {/* Central Teal Wax Seal holding flap */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-2 border-[#D4AF37] bg-gradient-to-br from-[#2D5A6E] via-[#1A3D4D] to-[#0E2530] flex items-center justify-center shadow-2xl animate-pulse">
                  <span className="text-[#FFDF78] text-sm font-serif font-bold">P &amp; V</span>
                </div>
              </div>

              {/* BACK FACE: Underside of Flap (Dark Teal Botanical Lining) */}
              <div 
                className="absolute inset-0 w-full h-full bg-[#10232B] border-b-2 border-[#D4AF37] shadow-lg flex items-center justify-center backface-hidden"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  transform: 'rotateX(180deg)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#D4AF37_1.5px,transparent_1.5px)] [background-size:14px_14px]" />
                <span className="text-[#D4AF37] text-xs font-serif italic tracking-widest">&#10022; Priya &amp; Varun &#10022;</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* =========================================================================
          STAGE 1: ROYAL ENTRANCE ANIMATION (Main.png with 4 Petals & P & V Seal)
          Fills screen completely, then 4 petals unfold simultaneously in 3D!
          ========================================================================= */}
      <div 
        className={`absolute inset-0 w-full h-full z-40 perspective-1600 transition-all duration-700 ${
          scene !== 'entrance' 
            ? 'pointer-events-none opacity-0' 
            : 'pointer-events-auto opacity-100'
        }`}
      >
        <div className="relative w-full h-full overflow-hidden">

          {/* 1. TOP PETAL: Folds upward in 3D */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden cursor-pointer"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 50%)',
              transformOrigin: 'top center',
              transform: isPetalsOpening ? 'rotateX(115deg) translateY(-25%) translateZ(0) scale(0.85)' : 'rotateX(0deg) translateY(0) translateZ(0) scale(1)',
              opacity: isPetalsOpening ? 0 : 1,
              transition: 'transform 1800ms cubic-bezier(0.25, 1, 0.4, 1), opacity 1600ms ease-out 200ms',
              willChange: 'transform, opacity',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
            }}
            onClick={handleOpenEntrance}
            onTouchEnd={handleOpenEntrance}
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
              transform: isPetalsOpening ? 'rotateX(-115deg) translateY(25%) translateZ(0) scale(0.85)' : 'rotateX(0deg) translateY(0) translateZ(0) scale(1)',
              opacity: isPetalsOpening ? 0 : 1,
              transition: 'transform 1800ms cubic-bezier(0.25, 1, 0.4, 1), opacity 1600ms ease-out 200ms',
              willChange: 'transform, opacity',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
            }}
            onClick={handleOpenEntrance}
            onTouchEnd={handleOpenEntrance}
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
              transform: isPetalsOpening ? 'rotateY(-115deg) translateX(-25%) translateZ(0) scale(0.85)' : 'rotateY(0deg) translateX(0) translateZ(0) scale(1)',
              opacity: isPetalsOpening ? 0 : 1,
              transition: 'transform 1800ms cubic-bezier(0.25, 1, 0.4, 1), opacity 1600ms ease-out 200ms',
              willChange: 'transform, opacity',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
            }}
            onClick={handleOpenEntrance}
            onTouchEnd={handleOpenEntrance}
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
              transform: isPetalsOpening ? 'rotateY(115deg) translateX(25%) translateZ(0) scale(0.85)' : 'rotateY(0deg) translateX(0) translateZ(0) scale(1)',
              opacity: isPetalsOpening ? 0 : 1,
              transition: 'transform 1800ms cubic-bezier(0.25, 1, 0.4, 1), opacity 1600ms ease-out 200ms',
              willChange: 'transform, opacity',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
            }}
            onClick={handleOpenEntrance}
            onTouchEnd={handleOpenEntrance}
          >
            <img 
              src={mainWebp} 
              alt="Envelope Right Petal" 
              className="w-full h-full object-cover object-center select-none pointer-events-none" 
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Symmetrical Gold Hairline Seams */}
          <svg 
            className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500 ${
              isPetalsOpening ? 'opacity-0' : 'opacity-100'
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
              isPetalsOpening ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <p className="font-serif italic text-2xl sm:text-3xl text-[#FFF0F4] tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              You are invited
            </p>
            <span className="font-royal text-[9px] sm:text-[10px] tracking-[0.35em] text-[#FFDF78] uppercase font-bold mt-1.5 drop-shadow">
              Tap the seal to open
            </span>
          </div>

          {/* Central Circular P & V Wax Seal */}
          <div 
            onClick={handleOpenEntrance}
            onTouchEnd={handleOpenEntrance}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-700 ease-out cursor-pointer ${
              isPetalsOpening 
                ? 'scale-110 opacity-0 pointer-events-none filter drop-shadow-[0_0_35px_#FFD700]' 
                : 'scale-100 opacity-100 hover:scale-105 active:scale-95'
            }`}
            style={{
              width: '92px',
              height: '92px',
            }}
          >
            <svg 
              className="w-full h-full aspect-square filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.85)]" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="pvWaxRimEnt" cx="35%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#8C132B" />
                  <stop offset="35%" stopColor="#630B1C" />
                  <stop offset="75%" stopColor="#3B0510" />
                  <stop offset="100%" stopColor="#1C0106" />
                </radialGradient>
                <radialGradient id="pvCenterCoreEnt" cx="45%" cy="40%" r="55%">
                  <stop offset="0%" stopColor="#30030C" />
                  <stop offset="70%" stopColor="#4A0714" />
                  <stop offset="100%" stopColor="#6E0E22" />
                </radialGradient>
                <linearGradient id="pvGoldTextEnt" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF8E0" />
                  <stop offset="35%" stopColor="#FFDF78" />
                  <stop offset="70%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#9E7310" />
                </linearGradient>
              </defs>

              <circle cx="50" cy="50" r="47" fill="url(#pvWaxRimEnt)" stroke="#A31835" strokeWidth="0.8" />
              <circle cx="50" cy="50" r="42" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="2 2.5" opacity="0.8" />
              <circle cx="50" cy="50" r="36" fill="url(#pvCenterCoreEnt)" stroke="#1F0106" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="33" fill="none" stroke="#FFDF78" strokeWidth="0.9" strokeDasharray="1.8 2" opacity="0.9" />

              <text x="33" y="56" textAnchor="middle" fill="url(#pvGoldTextEnt)" fontSize="17" fontFamily="Georgia, serif" fontWeight="bold">P</text>
              <text x="50" y="55" textAnchor="middle" fill="#FFDF78" fontSize="13" fontFamily="Georgia, serif" fontStyle="italic">&amp;</text>
              <text x="67" y="56" textAnchor="middle" fill="url(#pvGoldTextEnt)" fontSize="17" fontFamily="Georgia, serif" fontWeight="bold">V</text>
            </svg>

            <div className={`absolute inset-0 rounded-full pointer-events-none ${!isPetalsOpening ? 'animate-seal-glow' : ''}`} />
          </div>

        </div>
      </div>

    </div>
  );
};

export default RoyalOpeningOverlay;
