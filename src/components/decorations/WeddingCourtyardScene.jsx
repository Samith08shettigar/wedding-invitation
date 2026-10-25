import React from 'react';

/**
 * PURE CODE-RENDERED WEDDING COURTYARD SCENE
 * Recreates the royal Indian wedding pavilion from reference video frame_04s & frame_08s
 * Architecture: Scalloped Mughal arch, rose garlands, mandap canopy, aisle lanterns, sunset sky
 */
export const WeddingCourtyardScene = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}>
      
      {/* 1. WARM SUNSET / GOLDEN-HOUR SKY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E59367] via-[#F4B27E] via-[#FAD6A5] to-[#FCE8CC]" />

      {/* Warm Ambient Sun Glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-radial from-[#FFF5DB]/90 via-[#FFA726]/35 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* 2. DISTANT PALACE SILHOUETTES & MOUNTAINS (Layer 1) */}
      <svg className="absolute bottom-[28%] inset-x-0 w-full h-44" viewBox="0 0 1000 180" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="distPalaceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#DF9371" stopOpacity="0.75" />
            <stop offset="60%" stopColor="#C97453" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#8A3D2D" />
          </linearGradient>
          <linearGradient id="palaceWinGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF2A3" />
            <stop offset="100%" stopColor="#FF9800" />
          </linearGradient>
        </defs>

        {/* Distant Rolling Hills */}
        <path d="M0 120 Q200 70 400 110 T800 80 Q900 100 1000 120 V180 H0 Z" fill="#E28965" opacity="0.6" />

        {/* Right Palace Wings and Chattris */}
        <rect x="740" y="80" width="220" height="100" fill="url(#distPalaceGrad)" />
        {/* Domes */}
        <path d="M780 80 C780 50 800 40 810 32 C820 40 840 50 840 80 Z" fill="url(#distPalaceGrad)" />
        <path d="M880 70 C880 35 905 25 915 15 C925 25 950 35 950 70 Z" fill="url(#distPalaceGrad)" />
        <line x1="915" y1="5" x2="915" y2="15" stroke="#FFD54F" strokeWidth="2" />
        <circle cx="915" cy="4" r="2.5" fill="#FFF8E1" />

        {/* Left Palace Wings */}
        <rect x="40" y="90" width="180" height="90" fill="url(#distPalaceGrad)" />
        <path d="M90 90 C90 60 110 50 120 42 C130 50 150 60 150 90 Z" fill="url(#distPalaceGrad)" />

        {/* Lit Palace Windows */}
        {[760, 780, 850, 870, 930].map((x, i) => (
          <rect key={`win-${i}`} x={x} y="110" width="8" height="14" rx="4" fill="url(#palaceWinGlow)" opacity="0.9" />
        ))}
      </svg>

      {/* 3. CENTRAL CEREMONIAL WEDDING MANDAP PAVILION (Middle Ground) */}
      <div className="absolute bottom-[16%] inset-x-0 flex items-end justify-center pointer-events-none">
        <svg width="260" height="160" viewBox="0 0 260 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mandapCanopy" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7E0D24" />
              <stop offset="60%" stopColor="#560717" />
              <stop offset="100%" stopColor="#30030C" />
            </linearGradient>
            <linearGradient id="mandapGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#FFF2B2" />
              <stop offset="100%" stopColor="#AA7C11" />
            </linearGradient>
          </defs>

          {/* Mandap Domed Roof Canopy */}
          <path d="M70 65 C70 30 100 12 130 5 C160 12 190 30 190 65 Z" fill="url(#mandapCanopy)" stroke="url(#mandapGold)" strokeWidth="2" />
          {/* Top Gold Kalash / Finial */}
          <line x1="130" y1="0" x2="130" y2="5" stroke="#FFD54F" strokeWidth="2.5" />
          <circle cx="130" cy="-1" r="3" fill="#FFF8E1" />

          {/* Floral Scallop Trim along canopy rim */}
          <path d="M68 65 Q98 75 130 65 Q162 75 192 65" stroke="#E53935" strokeWidth="6" strokeLinecap="round" />
          <path d="M68 65 Q98 75 130 65 Q162 75 192 65" stroke="#FFF2B2" strokeWidth="2" strokeDasharray="4 4" />

          {/* 4 Carved Gold Mandap Pillars */}
          <rect x="76" y="65" width="8" height="75" fill="url(#mandapGold)" rx="2" />
          <rect x="96" y="68" width="6" height="72" fill="url(#mandapGold)" rx="1.5" opacity="0.8" />
          <rect x="158" y="68" width="6" height="72" fill="url(#mandapGold)" rx="1.5" opacity="0.8" />
          <rect x="176" y="65" width="8" height="75" fill="url(#mandapGold)" rx="2" />

          {/* Mandap Dais Platform */}
          <rect x="50" y="140" width="160" height="15" fill="#F5EFE6" rx="3" stroke="#D4AF37" strokeWidth="1" />
          <rect x="40" y="148" width="180" height="12" fill="#E8DEC8" rx="2" />

          {/* Golden Royal Wedding Chairs inside mandap */}
          <rect x="110" y="112" width="16" height="28" fill="#D4AF37" rx="2" />
          <rect x="112" y="118" width="12" height="16" fill="#8C132B" rx="1" />
          <rect x="134" y="112" width="16" height="28" fill="#D4AF37" rx="2" />
          <rect x="136" y="118" width="12" height="16" fill="#8C132B" rx="1" />

          {/* Warm Mandap Fire / Glow */}
          <circle cx="130" cy="132" r="14" fill="#FFA726" opacity="0.45" className="animate-pulse" />
          <circle cx="130" cy="132" r="5" fill="#FFE082" />
        </svg>
      </div>

      {/* 4. CENTRAL AISLE RED CARPET (Foreground Perspective with Rose Petals) */}
      <div className="absolute bottom-0 inset-x-0 h-[24%] flex items-end justify-center pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 600 180" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="aisleCarpet" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4A0714" />
              <stop offset="50%" stopColor="#6E0F23" />
              <stop offset="100%" stopColor="#8C132B" />
            </linearGradient>
            <linearGradient id="carpetBorder" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#FFF2B2" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
            <radialGradient id="lanternGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF9D2" />
              <stop offset="40%" stopColor="#FFB300" />
              <stop offset="80%" stopColor="#FF6F00" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#D84315" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Courtyard Stone Flooring */}
          <rect width="600" height="180" fill="#EFE8DE" />
          {/* Subtle Stone Pavers */}
          <path d="M0 60 H600 M0 120 H600" stroke="#DFD4C4" strokeWidth="1" />

          {/* Red Carpet Perspective (narrow at top, wide at bottom) */}
          <polygon points="260,0 340,0 480,180 120,180" fill="url(#aisleCarpet)" />
          {/* Gold Trim along Carpet Edges */}
          <line x1="260" y1="0" x2="120" y2="180" stroke="url(#carpetBorder)" strokeWidth="3" />
          <line x1="340" y1="0" x2="480" y2="180" stroke="url(#carpetBorder)" strokeWidth="3" />

          {/* Scalloped Lotus Pattern along central carpet */}
          <circle cx="300" cy="50" r="10" stroke="#FFF2B2" strokeWidth="1" strokeDasharray="2 2" fill="none" opacity="0.4" />
          <circle cx="300" cy="110" r="16" stroke="#FFF2B2" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.4" />
          <circle cx="300" cy="165" r="22" stroke="#FFF2B2" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.4" />

          {/* Rose Petals Strewn along Carpet */}
          {[
            [280, 40], [315, 45], [290, 70], [310, 85], [275, 105], [325, 120],
            [260, 140], [340, 145], [295, 155], [320, 165], [250, 170], [350, 175]
          ].map(([x, y], i) => (
            <circle key={`petal-${i}`} cx={x} cy={y} r={i % 2 === 0 ? "3.5" : "2.5"} fill="#D81B60" opacity="0.85" />
          ))}

          {/* Glowing Brass Lanterns Lining Left Edge of Carpet */}
          {[
            [240, 30, 14], [200, 80, 20], [150, 140, 26]
          ].map(([x, y, sz], i) => (
            <g key={`l-lan-${i}`}>
              <circle cx={x} cy={y} r={sz} fill="url(#lanternGlow)" className="animate-flame" />
              <rect x={x - sz / 4} y={y - sz / 3} width={sz / 2} height={sz * 0.7} rx="2" fill="#5D4037" />
              <circle cx={x} cy={y} r={sz / 6} fill="#FFF9C4" />
            </g>
          ))}

          {/* Glowing Brass Lanterns Lining Right Edge of Carpet */}
          {[
            [360, 30, 14], [400, 80, 20], [450, 140, 26]
          ].map(([x, y, sz], i) => (
            <g key={`r-lan-${i}`}>
              <circle cx={x} cy={y} r={sz} fill="url(#lanternGlow)" className="animate-flame" />
              <rect x={x - sz / 4} y={y - sz / 3} width={sz / 2} height={sz * 0.7} rx="2" fill="#5D4037" />
              <circle cx={x} cy={y} r={sz / 6} fill="#FFF9C4" />
            </g>
          ))}
        </svg>
      </div>

      {/* 5. GRAND RAJASTHANI MULTI-CUSPED SCALLOPED ARCHWAY (Foreground Framing) */}
      <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between">
        <svg className="w-full h-full" viewBox="0 0 1000 1600" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="scallopArchGold" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E69138" />
              <stop offset="30%" stopColor="#C26B1E" />
              <stop offset="70%" stopColor="#9E4E10" />
              <stop offset="100%" stopColor="#783407" />
            </linearGradient>
            <linearGradient id="spandrelWall" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E59367" />
              <stop offset="40%" stopColor="#D97736" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <linearGradient id="innerArchGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFE8D6" />
              <stop offset="100%" stopColor="#FDBA74" />
            </linearGradient>
            <filter id="archShad" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#451A03" floodOpacity="0.6" />
            </filter>
          </defs>

          {/* Golden Sandstone Spandrel Walls Framing Upper Scene */}
          <path
            d="M0 0 H1000 V520
               Q900 480 840 400
               Q760 300 680 220
               Q590 140 500 120
               Q410 140 320 220
               Q240 300 160 400
               Q100 480 0 520 Z"
            fill="url(#spandrelWall)"
            filter="url(#archShad)"
          />

          {/* Carved Multi-Cusped Scalloped Arch Foliations (Rajasthan Jharokha Cusps) */}
          <g filter="url(#archShad)">
            {/* Outer Warm Amber Band */}
            <path
              d="M100 560
                 C130 510 170 470 210 425
                 C240 390 280 340 330 295
                 C370 255 420 215 470 175
                 C485 160 495 145 500 135
                 C505 145 515 160 530 175
                 C580 215 630 255 670 295
                 C720 340 760 390 790 425
                 C830 470 870 510 900 560"
              stroke="url(#scallopArchGold)"
              strokeWidth="28"
              strokeLinecap="round"
              fill="none"
            />

            {/* Inner Golden Cusp Scallops */}
            <path
              d="M110 550
                 Q140 520 180 500
                 Q220 460 260 420
                 Q300 370 340 330
                 Q380 280 430 240
                 Q465 200 500 155
                 Q535 200 570 240
                 Q620 280 660 330
                 Q700 370 740 420
                 Q780 460 820 500
                 Q860 520 890 550"
              stroke="#FFF3C4"
              strokeWidth="10"
              fill="none"
            />

            {/* Delicate Inner Highlight Line */}
            <path
              d="M120 540
                 Q150 510 190 490
                 Q230 450 270 410
                 Q310 360 350 320
                 Q390 270 440 230
                 Q470 190 500 150
                 Q530 190 560 230
                 Q610 270 650 320
                 Q690 360 730 410
                 Q770 450 810 490
                 Q850 510 880 540"
              stroke="#FFDF78"
              strokeWidth="3"
              strokeDasharray="6 4"
              fill="none"
            />
          </g>
        </svg>
      </div>

    </div>
  );
};
