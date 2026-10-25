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
            <linearGradient id="scallopArchGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5D77F" />
              <stop offset="30%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#AA7C11" />
              <stop offset="100%" stopColor="#7E560B" />
            </linearGradient>
            <linearGradient id="spandrelWall" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EAD8BE" />
              <stop offset="50%" stopColor="#D8C09E" />
              <stop offset="100%" stopColor="#C4A880" />
            </linearGradient>
            <radialGradient id="roseGarlandRed" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E53935" />
              <stop offset="50%" stopColor="#C2185B" />
              <stop offset="100%" stopColor="#5C001E" />
            </radialGradient>
          </defs>

          {/* Arch Header Profile with Scallops */}
          {/* Spandrels: Left & Right Top Walls */}
          <path
            d="M0 0 H1000 V750 
               C920 700 880 620 840 500
               C800 380 760 280 700 200
               C640 120 580 80 500 70
               C420 80 360 120 300 200
               C240 280 200 380 160 500
               C120 620 80 700 0 750 Z"
            fill="url(#spandrelWall)"
            opacity="0.95"
          />

          {/* Main Scalloped Arch Foliations (11 Cusps) */}
          <path
            d="M0 750
               C30 720 50 670 70 630
               C90 590 110 540 130 500
               C150 460 180 420 210 370
               C240 320 270 270 310 230
               C350 190 390 160 440 130
               C470 115 485 100 500 90
               C515 100 530 115 560 130
               C610 160 650 190 690 230
               C730 270 760 320 790 370
               C820 420 850 460 870 500
               C890 540 910 590 930 630
               C950 670 970 720 1000 750"
            stroke="url(#scallopArchGold)"
            strokeWidth="12"
            fill="none"
          />
          <path
            d="M0 770
               C30 740 50 690 70 650
               C90 610 110 560 130 520
               C150 480 180 440 210 390
               C240 340 270 290 310 250
               C350 210 390 180 440 150
               C470 135 485 120 500 110
               C515 120 530 135 560 150
               C610 180 650 210 690 250
               C730 290 760 340 790 390
               C820 440 850 480 870 520
               C890 560 910 610 930 650
               C950 690 970 740 1000 770"
            stroke="#FFF2B2"
            strokeWidth="3"
            strokeDasharray="6 4"
            fill="none"
          />

          {/* Heavy Climbing Crimson Rose Garlands Flanking the Arch Curve */}
          {[
            [60, 680], [100, 580], [140, 480], [190, 390], [250, 310], [330, 240], [420, 180],
            [500, 140],
            [580, 180], [670, 240], [750, 310], [810, 390], [860, 480], [900, 580], [940, 680]
          ].map(([x, y], i) => (
            <g key={`rose-${i}`}>
              {/* Green Leaves */}
              <circle cx={x - 8} cy={y + 6} r="12" fill="#2E7D32" />
              <circle cx={x + 8} cy={y - 6} r="12" fill="#1B5E20" />
              {/* Full Rose Bloom */}
              <circle cx={x} cy={y} r="16" fill="url(#roseGarlandRed)" />
              <circle cx={x} cy={y} r="10" fill="#880E4F" />
              <circle cx={x} cy={y} r="4" fill="#F48FB1" />
            </g>
          ))}

          {/* Left Vertical Pillar Garland */}
          {[820, 920, 1020, 1120, 1220, 1320, 1420].map((y, i) => (
            <g key={`lpil-${i}`}>
              <circle cx="50" cy={y} r="18" fill="url(#roseGarlandRed)" />
              <circle cx="50" cy={y} r="10" fill="#4A0014" />
              <circle cx="35" cy={y - 10} r="10" fill="#2E7D32" />
            </g>
          ))}

          {/* Right Vertical Pillar Garland */}
          {[820, 920, 1020, 1120, 1220, 1320, 1420].map((y, i) => (
            <g key={`rpil-${i}`}>
              <circle cx="950" cy={y} r="18" fill="url(#roseGarlandRed)" />
              <circle cx="950" cy={y} r="10" fill="#4A0014" />
              <circle cx="965" cy={y - 10} r="10" fill="#2E7D32" />
            </g>
          ))}
        </svg>
      </div>

    </div>
  );
};
