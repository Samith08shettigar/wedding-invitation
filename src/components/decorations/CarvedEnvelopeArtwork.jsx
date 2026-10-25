import React from 'react';

/**
 * EXACT CARVED BAS-RELIEF FLAP PATTERN (Matching user screenshot)
 * Intricately sculpted lotus centerpiece, climbing bud vines, and corner florets
 * with 3D embossed velvet lighting (highlights on top-left, deep shadows on bottom-right).
 */
export const CarvedFlapArt = ({ className = "", flipY = false, rotate = 0, showGoldEdges = false }) => (
  <div 
    className={`w-full h-full pointer-events-none select-none ${className}`}
    style={{
      transform: `${flipY ? 'scaleY(-1)' : ''} rotate(${rotate}deg)`,
      transformOrigin: 'center center',
    }}
  >
    <svg 
      className="w-full h-full" 
      viewBox="0 0 500 400" 
      preserveAspectRatio="xMidYMid meet" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Embossed Relief Gradients */}
        <linearGradient id="petalReliefGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9C243C" />
          <stop offset="25%" stopColor="#75152B" />
          <stop offset="70%" stopColor="#4A0B19" />
          <stop offset="100%" stopColor="#25030A" />
        </linearGradient>

        <linearGradient id="vineReliefGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B33250" />
          <stop offset="50%" stopColor="#6E1225" />
          <stop offset="100%" stopColor="#30040D" />
        </linearGradient>

        <linearGradient id="goldEdgeGlow" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFF2B2" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#D4AF37" stopOpacity="0.85" />
          <stop offset="80%" stopColor="#8A5A00" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#4A2A00" stopOpacity="0.2" />
        </linearGradient>

        {/* 3D Chiaroscuro Bas-Relief Lighting Filter */}
        <filter id="basReliefDepth" x="-30%" y="-30%" width="160%" height="160%">
          {/* Deep Cast Shadow (bottom-right) */}
          <feDropShadow dx="3" dy="4" stdDeviation="3" floodColor="#080002" floodOpacity="0.92" />
          {/* Soft Velvet Highlight (top-left) */}
          <feDropShadow dx="-1.5" dy="-1.5" stdDeviation="1.8" floodColor="#E87C92" floodOpacity="0.65" />
        </filter>

        <filter id="lotusCenterGlow" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#080002" floodOpacity="0.9" />
          <feDropShadow dx="0" dy="-1.5" stdDeviation="2" floodColor="#FFAAB8" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* =========================================================================
          0. DIAGONAL GOLD EDGES (Fold Seams matching reference)
          ========================================================================= */}
      {showGoldEdges && (
        <g opacity="0.85">
          <line x1="0" y1="400" x2="250" y2="0" stroke="url(#goldEdgeGlow)" strokeWidth="2.5" />
          <line x1="500" y1="400" x2="250" y2="0" stroke="url(#goldEdgeGlow)" strokeWidth="2.5" />
        </g>
      )}

      {/* =========================================================================
          1. CENTRAL SCULPTED BAS-RELIEF LOTUS FLOWER
          ========================================================================= */}
      <g filter="url(#lotusCenterGlow)">
        
        {/* Calyx Base */}
        <path 
          d="M200 365 C225 380 275 380 300 365 C280 388 220 388 200 365 Z" 
          fill="url(#petalReliefGrad)" 
          stroke="#D45A74" 
          strokeWidth="1" 
        />
        <path 
          d="M175 345 C210 370 290 370 325 345 C290 378 210 378 175 345 Z" 
          fill="url(#petalReliefGrad)" 
          stroke="#D45A74" 
          strokeWidth="1.2" 
        />

        {/* Outer Wide Lateral Petals (Spreading across base) */}
        <path 
          d="M190 335 C130 330 100 295 130 265 C160 282 188 315 202 335 Z" 
          fill="url(#petalReliefGrad)" 
          stroke="#D45A74" 
          strokeWidth="1.3" 
        />
        <path 
          d="M310 335 C370 330 400 295 370 265 C340 282 312 315 298 335 Z" 
          fill="url(#petalReliefGrad)" 
          stroke="#D45A74" 
          strokeWidth="1.3" 
        />

        {/* Outer Mid Petals (~45 degrees) */}
        <path 
          d="M198 325 C150 290 145 235 182 205 C202 245 212 292 220 322 Z" 
          fill="url(#petalReliefGrad)" 
          stroke="#E06880" 
          strokeWidth="1.3" 
        />
        <path 
          d="M302 325 C350 290 355 235 318 205 C298 245 288 292 280 322 Z" 
          fill="url(#petalReliefGrad)" 
          stroke="#E06880" 
          strokeWidth="1.3" 
        />

        {/* Inner Flanking Cup Petals */}
        <path 
          d="M220 315 C198 270 205 210 230 170 C242 210 242 270 234 314 Z" 
          fill="url(#petalReliefGrad)" 
          stroke="#E87C92" 
          strokeWidth="1.4" 
        />
        <path 
          d="M280 315 C302 270 295 210 270 170 C258 210 258 270 266 314 Z" 
          fill="url(#petalReliefGrad)" 
          stroke="#E87C92" 
          strokeWidth="1.4" 
        />

        {/* Central Crown Petal (Pointing upward) */}
        <path 
          d="M236 310 C226 245 228 175 250 142 C272 175 274 245 264 310 Z" 
          fill="url(#petalReliefGrad)" 
          stroke="#F495A8" 
          strokeWidth="1.6" 
        />

        {/* Center Seed Pod & Golden Core Highlight */}
        <ellipse cx="250" cy="265" rx="10" ry="15" fill="#FFAAB8" opacity="0.75" />
        <ellipse cx="250" cy="270" rx="5" ry="9" fill="#FFDF78" opacity="0.9" />
      </g>

      {/* =========================================================================
          2. SYMMETRICAL CLIMBING FLOWER-BUD VINES (Matching user screenshot)
          ========================================================================= */}
      <g filter="url(#basReliefDepth)">
        
        {/* Left Arching Main Stem (Climbing from base of lotus to top apex) */}
        <path 
          d="M185 345 C115 300 95 200 145 140 C175 105 205 65 224 25" 
          stroke="url(#vineReliefGrad)" 
          strokeWidth="4.5" 
          strokeLinecap="round" 
          fill="none" 
        />
        <path 
          d="M185 345 C115 300 95 200 145 140 C175 105 205 65 224 25" 
          stroke="#F0899E" 
          strokeWidth="1.2" 
          strokeLinecap="round" 
          fill="none" 
          opacity="0.85" 
        />

        {/* Right Arching Main Stem (Mirrored) */}
        <path 
          d="M315 345 C385 300 405 200 355 140 C325 105 295 65 276 25" 
          stroke="url(#vineReliefGrad)" 
          strokeWidth="4.5" 
          strokeLinecap="round" 
          fill="none" 
        />
        <path 
          d="M315 345 C385 300 405 200 355 140 C325 105 295 65 276 25" 
          stroke="#F0899E" 
          strokeWidth="1.2" 
          strokeLinecap="round" 
          fill="none" 
          opacity="0.85" 
        />

        {/* Left Side Pointed Flower Buds (Arching with pedicels along vine) */}
        {[
          { cx: 105, cy: 275, rot: -50, sz: 1.2 },
          { cx: 102, cy: 195, rot: -34, sz: 1.1 },
          { cx: 138, cy: 130, rot: -16, sz: 1.0 },
          { cx: 178, cy: 75, rot: 12, sz: 0.9 },
          { cx: 216, cy: 28, rot: 28, sz: 0.8 },
        ].map((bud, i) => (
          <g key={`lbud-${i}`} transform={`translate(${bud.cx}, ${bud.cy}) rotate(${bud.rot}) scale(${bud.sz})`}>
            {/* Small curved pedicel connector */}
            <path d="M0 16 Q-3 10 0 4" stroke="#75152C" strokeWidth="2.5" fill="none" />
            {/* Calyx Leaves */}
            <path d="M-8 10 C-12 4 -8 -4 0 -12 C8 -4 12 4 8 10 Z" fill="#6A0D22" stroke="#D45A74" strokeWidth="0.8" />
            {/* Bud Petal Head */}
            <path d="M-6 2 C-10 -8 0 -22 0 -22 C0 -22 10 -8 6 2 Z" fill="url(#petalReliefGrad)" stroke="#FFAAB8" strokeWidth="1" />
            <line x1="0" y1="2" x2="0" y2="-18" stroke="#FFDF78" strokeWidth="0.8" opacity="0.7" />
          </g>
        ))}

        {/* Right Side Pointed Flower Buds (Mirrored) */}
        {[
          { cx: 395, cy: 275, rot: 50, sz: 1.2 },
          { cx: 398, cy: 195, rot: 34, sz: 1.1 },
          { cx: 362, cy: 130, rot: 16, sz: 1.0 },
          { cx: 322, cy: 75, rot: -12, sz: 0.9 },
          { cx: 284, cy: 28, rot: -28, sz: 0.8 },
        ].map((bud, i) => (
          <g key={`rbud-${i}`} transform={`translate(${bud.cx}, ${bud.cy}) rotate(${bud.rot}) scale(${bud.sz})`}>
            <path d="M0 16 Q3 10 0 4" stroke="#75152C" strokeWidth="2.5" fill="none" />
            <path d="M-8 10 C-12 4 -8 -4 0 -12 C8 -4 12 4 8 10 Z" fill="#6A0D22" stroke="#D45A74" strokeWidth="0.8" />
            <path d="M-6 2 C-10 -8 0 -22 0 -22 C0 -22 10 -8 6 2 Z" fill="url(#petalReliefGrad)" stroke="#FFAAB8" strokeWidth="1" />
            <line x1="0" y1="2" x2="0" y2="-18" stroke="#FFDF78" strokeWidth="0.8" opacity="0.7" />
          </g>
        ))}

        {/* Branching Leaflets on Left Stem */}
        {[
          { x1: 135, cy: 295, x2: 100, y2: 315 },
          { x1: 112, cy: 235, x2: 75, y2: 245 },
          { x1: 122, cy: 165, x2: 85, y2: 170 },
          { x1: 162, cy: 102, x2: 132, y2: 95 },
        ].map((leaf, i) => (
          <path 
            key={`lleaf-${i}`}
            d={`M${leaf.x1} ${leaf.cy} Q${(leaf.x1 + leaf.x2)/2 - 12} ${(leaf.cy + leaf.y2)/2 + 10} ${leaf.x2} ${leaf.y2} Q${(leaf.x1 + leaf.x2)/2 + 10} ${(leaf.cy + leaf.y2)/2 - 10} ${leaf.x1} ${leaf.cy}`}
            fill="url(#petalReliefGrad)"
            stroke="#D45A74"
            strokeWidth="0.9"
          />
        ))}

        {/* Branching Leaflets on Right Stem */}
        {[
          { x1: 365, cy: 295, x2: 400, y2: 315 },
          { x1: 388, cy: 235, x2: 425, y2: 245 },
          { x1: 378, cy: 165, x2: 415, y2: 170 },
          { x1: 338, cy: 102, x2: 368, y2: 95 },
        ].map((leaf, i) => (
          <path 
            key={`rleaf-${i}`}
            d={`M${leaf.x1} ${leaf.cy} Q${(leaf.x1 + leaf.x2)/2 + 12} ${(leaf.cy + leaf.y2)/2 + 10} ${leaf.x2} ${leaf.y2} Q${(leaf.x1 + leaf.x2)/2 - 10} ${(leaf.cy + leaf.y2)/2 - 10} ${leaf.x1} ${leaf.cy}`}
            fill="url(#petalReliefGrad)"
            stroke="#D45A74"
            strokeWidth="0.9"
          />
        ))}
      </g>

      {/* =========================================================================
          3. CORNER 5-PETAL JASMINE / FLORET CLUSTERS (Matching user screenshot)
          ========================================================================= */}
      <g filter="url(#basReliefDepth)">
        
        {/* Lower Left Corner Floret Cluster */}
        <g transform="translate(56, 345) scale(1)">
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <g key={`lfl-${i}`} transform={`rotate(${angle})`}>
              <ellipse cx="0" cy="-14" rx="7" ry="12" fill="url(#petalReliefGrad)" stroke="#FFAAB8" strokeWidth="0.9" />
            </g>
          ))}
          <circle cx="0" cy="0" r="5" fill="#FFDF78" />
        </g>
        <g transform="translate(28, 375) scale(0.7)">
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <g key={`lfl2-${i}`} transform={`rotate(${angle})`}>
              <ellipse cx="0" cy="-14" rx="7" ry="12" fill="url(#petalReliefGrad)" stroke="#FFAAB8" strokeWidth="0.9" />
            </g>
          ))}
          <circle cx="0" cy="0" r="5" fill="#FFDF78" />
        </g>

        {/* Lower Right Corner Floret Cluster */}
        <g transform="translate(444, 345) scale(1)">
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <g key={`rfl-${i}`} transform={`rotate(${angle})`}>
              <ellipse cx="0" cy="-14" rx="7" ry="12" fill="url(#petalReliefGrad)" stroke="#FFAAB8" strokeWidth="0.9" />
            </g>
          ))}
          <circle cx="0" cy="0" r="5" fill="#FFDF78" />
        </g>
        <g transform="translate(472, 375) scale(0.7)">
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <g key={`rfl2-${i}`} transform={`rotate(${angle})`}>
              <ellipse cx="0" cy="-14" rx="7" ry="12" fill="url(#petalReliefGrad)" stroke="#FFAAB8" strokeWidth="0.9" />
            </g>
          ))}
          <circle cx="0" cy="0" r="5" fill="#FFDF78" />
        </g>
      </g>
    </svg>
  </div>
);

/**
 * SIDE FLAP CARVED FOLIAGE VINE ARTWORK
 * Symmetrical climbing vine with pointed flower buds and leaflets
 * perfectly curving along the diagonal edges of the left/right envelope flaps.
 */
export const CarvedSideFlapArt = ({ className = "", isRight = false }) => (
  <div 
    className={`w-full h-full pointer-events-none select-none ${className}`}
    style={{
      transform: isRight ? 'scaleX(-1)' : 'none',
      transformOrigin: 'center center',
    }}
  >
    <svg 
      className="w-full h-full" 
      viewBox="0 0 300 600" 
      preserveAspectRatio="none" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sideVineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B33250" />
          <stop offset="50%" stopColor="#6E1225" />
          <stop offset="100%" stopColor="#30040D" />
        </linearGradient>
        <linearGradient id="sidePetalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9C243C" />
          <stop offset="40%" stopColor="#75152B" />
          <stop offset="100%" stopColor="#25030A" />
        </linearGradient>
        <filter id="sideDepth" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="2.5" dy="3.5" stdDeviation="2.5" floodColor="#080002" floodOpacity="0.9" />
          <feDropShadow dx="-1" dy="-1" stdDeviation="1.5" floodColor="#E87C92" floodOpacity="0.55" />
        </filter>
      </defs>

      <g filter="url(#sideDepth)">
        {/* Main Elegant Climbing Vine Stem following diagonal fold edge */}
        <path 
          d="M30 520 Q120 380 180 320 T275 300" 
          stroke="url(#sideVineGrad)" 
          strokeWidth="4" 
          strokeLinecap="round" 
          fill="none" 
        />
        <path 
          d="M30 520 Q120 380 180 320 T275 300" 
          stroke="#F0899E" 
          strokeWidth="1.2" 
          strokeLinecap="round" 
          fill="none" 
          opacity="0.8" 
        />

        {/* Flower Buds Arching along the Vine */}
        {[
          { cx: 70, cy: 460, rot: -30, sz: 1.1 },
          { cx: 125, cy: 395, rot: -15, sz: 1.0 },
          { cx: 175, cy: 345, rot: 5, sz: 0.95 },
          { cx: 225, cy: 315, rot: 25, sz: 0.85 },
          { cx: 270, cy: 300, rot: 45, sz: 0.75 },
        ].map((bud, i) => (
          <g key={`side-bud-${i}`} transform={`translate(${bud.cx}, ${bud.cy}) rotate(${bud.rot}) scale(${bud.sz})`}>
            <path d="M0 14 Q-2 8 0 2" stroke="#75152C" strokeWidth="2.5" fill="none" />
            <path d="M-8 8 C-12 3 -8 -4 0 -10 C8 -4 12 3 8 8 Z" fill="#6A0D22" stroke="#D45A74" strokeWidth="0.8" />
            <path d="M-6 2 C-9 -6 0 -18 0 -18 C0 -18 9 -6 6 2 Z" fill="url(#sidePetalGrad)" stroke="#FFAAB8" strokeWidth="1" />
            <line x1="0" y1="2" x2="0" y2="-15" stroke="#FFDF78" strokeWidth="0.8" opacity="0.7" />
          </g>
        ))}

        {/* Branching Leaflets */}
        {[
          { x1: 50, y1: 490, x2: 25, y2: 475 },
          { x1: 95, y1: 430, x2: 65, y2: 410 },
          { x1: 150, y1: 370, x2: 120, y2: 345 },
          { x1: 200, y1: 330, x2: 180, y2: 305 },
        ].map((leaf, i) => (
          <path 
            key={`side-leaf-${i}`}
            d={`M${leaf.x1} ${leaf.y1} Q${(leaf.x1 + leaf.x2)/2 - 10} ${(leaf.y1 + leaf.y2)/2 + 10} ${leaf.x2} ${leaf.y2} Q${(leaf.x1 + leaf.x2)/2 + 10} ${(leaf.y1 + leaf.y2)/2 - 10} ${leaf.x1} ${leaf.y1}`}
            fill="url(#sidePetalGrad)"
            stroke="#D45A74"
            strokeWidth="0.8"
          />
        ))}

        {/* Jasmine Florets in outer corner */}
        <g transform="translate(45, 530) scale(0.85)">
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <g key={`sfl-${i}`} transform={`rotate(${angle})`}>
              <ellipse cx="0" cy="-12" rx="6" ry="10" fill="url(#sidePetalGrad)" stroke="#FFAAB8" strokeWidth="0.8" />
            </g>
          ))}
          <circle cx="0" cy="0" r="4" fill="#FFDF78" />
        </g>
      </g>
    </svg>
  </div>
);

/**
 * STANDALONE CARVED LOTUS MOTIF
 * Used in the pull-out envelope pocket and decorative emblems
 */
export const CarvedLotusMotif = ({ size = 80, className = "" }) => (
  <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size * 0.75 }}>
    <svg width={size} height={size * 0.75} viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lotusMotifGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D45A74" />
          <stop offset="40%" stopColor="#8A1830" />
          <stop offset="100%" stopColor="#4A0614" />
        </linearGradient>
        <filter id="motifDrop" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#1A0207" floodOpacity="0.85" />
          <feDropShadow dx="-1" dy="-1" stdDeviation="1" floodColor="#FFAAB8" floodOpacity="0.5" />
        </filter>
      </defs>
      <g filter="url(#motifDrop)">
        {/* Base petals */}
        <path d="M50 95 C20 85 10 65 30 50 C45 60 55 80 62 92 Z" fill="url(#lotusMotifGrad)" stroke="#FFAAB8" strokeWidth="1" />
        <path d="M110 95 C140 85 150 65 130 50 C115 60 105 80 98 92 Z" fill="url(#lotusMotifGrad)" stroke="#FFAAB8" strokeWidth="1" />
        {/* Mid petals */}
        <path d="M55 90 C35 70 35 40 60 25 C70 50 75 75 78 88 Z" fill="url(#lotusMotifGrad)" stroke="#FFAAB8" strokeWidth="1" />
        <path d="M105 90 C125 70 125 40 100 25 C90 50 85 75 82 88 Z" fill="url(#lotusMotifGrad)" stroke="#FFAAB8" strokeWidth="1" />
        {/* Center petal */}
        <path d="M72 88 C68 50 70 18 80 6 C90 18 92 50 88 88 Z" fill="url(#lotusMotifGrad)" stroke="#FFAAB8" strokeWidth="1.2" />
        {/* Center golden seed core */}
        <ellipse cx="80" cy="55" rx="5" ry="9" fill="#FFDF78" opacity="0.85" />
      </g>
    </svg>
  </div>
);

/**
 * STANDALONE CARVED FOLIAGE VINE
 * Used for pocket textures and border repeats
 */
export const CarvedFoliageVine = ({ className = "" }) => (
  <div className={`w-full h-full ${className}`}>
    <svg className="w-full h-full" viewBox="0 0 300 200" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 180 Q80 130 150 160 T290 80" stroke="#AA2240" strokeWidth="3" fill="none" opacity="0.4" />
      <path d="M10 180 Q80 130 150 160 T290 80" stroke="#FFDF78" strokeWidth="0.8" fill="none" opacity="0.25" />
      {/* Buds along line */}
      <circle cx="80" cy="135" r="4" fill="#AA2240" stroke="#FFDF78" strokeWidth="0.6" opacity="0.5" />
      <circle cx="150" cy="160" r="4" fill="#AA2240" stroke="#FFDF78" strokeWidth="0.6" opacity="0.5" />
      <circle cx="220" cy="120" r="4" fill="#AA2240" stroke="#FFDF78" strokeWidth="0.6" opacity="0.5" />
    </svg>
  </div>
);

export const CarvedWaxSeal = ({ monogram = "P & V", size = 80, isPulsing = true, onClick }) => (
  <div 
    onClick={onClick}
    className={`relative flex items-center justify-center cursor-pointer select-none transition-transform hover:scale-110 active:scale-95 ${
      isPulsing ? 'animate-seal-glow' : ''
    }`}
    style={{ width: size, height: size }}
  >
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="sealRedGrad" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#C42845" />
          <stop offset="25%" stopColor="#9C1A32" />
          <stop offset="60%" stopColor="#6E0D21" />
          <stop offset="100%" stopColor="#38040E" />
        </radialGradient>
        <radialGradient id="sealCenterIndent" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#5E0A1B" />
          <stop offset="70%" stopColor="#7E1126" />
          <stop offset="100%" stopColor="#AA1D38" />
        </radialGradient>
        <filter id="sealDrop" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#000000" floodOpacity="0.85" />
          <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#FFB300" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Irregular Organic Wax Rim */}
      <path
        d="M50 4 C66 3 80 10 88 20 C96 30 98 44 96 58 C93 72 85 84 74 91 C62 98 46 99 34 94 C20 89 10 78 5 65 C0 52 2 37 9 25 C17 13 32 5 50 4 Z"
        fill="url(#sealRedGrad)"
        filter="url(#sealDrop)"
      />

      {/* Stamped Center Rim */}
      <circle cx="50" cy="50" r="36" fill="url(#sealCenterIndent)" />
      <circle cx="50" cy="50" r="35" stroke="#C44D68" strokeWidth="1.2" opacity="0.8" />
      <circle cx="50" cy="50" r="32" stroke="#4A0614" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="30" stroke="#FFDF78" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.6" />
    </svg>

    {/* Gold Stamped Monogram in center */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <span className="font-serif font-bold text-base sm:text-lg text-gold-shimmer tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
        {monogram}
      </span>
    </div>
  </div>
);
