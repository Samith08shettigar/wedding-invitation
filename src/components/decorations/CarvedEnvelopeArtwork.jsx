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
      viewBox="0 0 500 360" 
      preserveAspectRatio="xMidYMid meet" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Embossed Relief Gradients */}
        <linearGradient id="petalReliefGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A82844" />
          <stop offset="35%" stopColor="#801830" />
          <stop offset="80%" stopColor="#500A1A" />
          <stop offset="100%" stopColor="#2E040E" />
        </linearGradient>

        <linearGradient id="vineReliefGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B33250" />
          <stop offset="60%" stopColor="#75152C" />
          <stop offset="100%" stopColor="#380512" />
        </linearGradient>

        <linearGradient id="goldEdgeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFDF78" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#8A5A00" stopOpacity="0.4" />
        </linearGradient>

        {/* 3D Chiaroscuro Bas-Relief Lighting Filter */}
        <filter id="basReliefDepth" x="-25%" y="-25%" width="150%" height="150%">
          {/* Deep Cast Shadow (bottom-right) */}
          <feDropShadow dx="2.5" dy="3.5" stdDeviation="2.8" floodColor="#0E0004" floodOpacity="0.9" />
          {/* Soft Velvet Highlight (top-left) */}
          <feDropShadow dx="-1.2" dy="-1.2" stdDeviation="1.5" floodColor="#E87C92" floodOpacity="0.55" />
        </filter>

        <filter id="lotusCenterGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.8" />
          <feDropShadow dx="0" dy="-1" stdDeviation="1.5" floodColor="#FFAAB8" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* =========================================================================
          0. DIAGONAL GOLD EDGES (Optional fold highlights)
          ========================================================================= */}
      {showGoldEdges && (
        <g opacity="0.75">
          <line x1="0" y1="360" x2="250" y2="0" stroke="url(#goldEdgeGlow)" strokeWidth="2" />
          <line x1="500" y1="360" x2="250" y2="0" stroke="url(#goldEdgeGlow)" strokeWidth="2" />
        </g>
      )}

      {/* =========================================================================
          1. CENTRAL SCULPTED LOTUS FLOWER (Resting at lower center)
          ========================================================================= */}
      <g filter="url(#lotusCenterGlow)">
        
        {/* Base Calyx & Stem Base */}
        <path 
          d="M210 325 C230 338 270 338 290 325 C275 342 225 342 210 325 Z" 
          fill="url(#petalReliefGrad)" 
          stroke="#D45A74" 
          strokeWidth="1" 
        />
        <path 
          d="M185 305 C215 328 285 328 315 305 C285 332 215 332 185 305 Z" 
          fill="url(#petalReliefGrad)" 
          stroke="#D45A74" 
          strokeWidth="1" 
        />

        {/* Outer Low Lateral Petals (Spreading wide horizontally) */}
        <path 
          d="M198 295 C148 290 125 258 152 232 C178 248 198 276 210 295 Z" 
          fill="url(#petalReliefGrad)" 
          stroke="#D45A74" 
          strokeWidth="1.2" 
        />
        <path 
          d="M302 295 C352 290 375 258 348 232 C322 248 302 276 290 295 Z" 
          fill="url(#petalReliefGrad)" 
          stroke="#D45A74" 
          strokeWidth="1.2" 
        />

        {/* Outer Mid-Petals (Angling upwards at ~45deg) */}
        <path 
          d="M205 288 C165 258 160 210 192 180 C210 215 218 258 225 285 Z" 
          fill="url(#petalReliefGrad)" 
          stroke="#E06880" 
          strokeWidth="1.2" 
        />
        <path 
          d="M295 288 C335 258 340 210 308 180 C290 215 282 258 275 285 Z" 
          fill="url(#petalReliefGrad)" 
          stroke="#E06880" 
          strokeWidth="1.2" 
        />

        {/* Inner Flanking Cup Petals */}
        <path 
          d="M224 280 C206 240 212 188 234 150 C244 186 244 238 236 278 Z" 
          fill="url(#petalReliefGrad)" 
          stroke="#E87C92" 
          strokeWidth="1.3" 
        />
        <path 
          d="M276 280 C294 240 288 188 266 150 C256 186 256 238 264 278 Z" 
          fill="url(#petalReliefGrad)" 
          stroke="#E87C92" 
          strokeWidth="1.3" 
        />

        {/* Central Crown Tall Petal */}
        <path 
          d="M238 276 C230 216 232 158 250 128 C268 158 270 216 262 276 Z" 
          fill="url(#petalReliefGrad)" 
          stroke="#F495A8" 
          strokeWidth="1.5" 
        />

        {/* Heart / Seed Pod Glow & Golden Pistil */}
        <ellipse cx="250" cy="235" rx="8" ry="12" fill="#FFAAB8" opacity="0.75" />
        <ellipse cx="250" cy="240" rx="4" ry="7" fill="#FFDF78" opacity="0.9" />
      </g>

      {/* =========================================================================
          2. SYMMETRICAL CLIMBING FLOWER-BUD VINES (Matching user screenshot)
          ========================================================================= */}
      <g filter="url(#basReliefDepth)">
        
        {/* Left Arching Main Stem (Sweeping from lotus to upper left diagonal) */}
        <path 
          d="M195 305 C130 265 110 180 155 130 C182 100 205 65 220 30" 
          stroke="url(#vineReliefGrad)" 
          strokeWidth="4.5" 
          strokeLinecap="round" 
          fill="none" 
        />
        <path 
          d="M195 305 C130 265 110 180 155 130 C182 100 205 65 220 30" 
          stroke="#F0899E" 
          strokeWidth="1.2" 
          strokeLinecap="round" 
          fill="none" 
          opacity="0.8" 
        />

        {/* Right Arching Main Stem (Mirrored symmetrically) */}
        <path 
          d="M305 305 C370 265 390 180 345 130 C318 100 295 65 280 30" 
          stroke="url(#vineReliefGrad)" 
          strokeWidth="4.5" 
          strokeLinecap="round" 
          fill="none" 
        />
        <path 
          d="M305 305 C370 265 390 180 345 130 C318 100 295 65 280 30" 
          stroke="#F0899E" 
          strokeWidth="1.2" 
          strokeLinecap="round" 
          fill="none" 
          opacity="0.8" 
        />

        {/* Left Side Pointed Flower Buds (Arching with pedicels) */}
        {[
          { cx: 120, cy: 240, rot: -48, sz: 1.15 },
          { cx: 118, cy: 175, rot: -32, sz: 1.05 },
          { cx: 150, cy: 118, rot: -15, sz: 0.95 },
          { cx: 182, cy: 70, rot: 12, sz: 0.85 },
          { cx: 215, cy: 30, rot: 28, sz: 0.75 },
        ].map((bud, i) => (
          <g key={`lbud-${i}`} transform={`translate(${bud.cx}, ${bud.cy}) rotate(${bud.rot}) scale(${bud.sz})`}>
            {/* Small curved pedicel connector */}
            <path d="M0 16 Q-3 10 0 4" stroke="#75152C" strokeWidth="2.5" fill="none" />
            {/* Calyx Leaves */}
            <path d="M-8 10 C-12 4 -8 -4 0 -12 C8 -4 12 4 8 10 Z" fill="#6A0D22" stroke="#D45A74" strokeWidth="0.8" />
            {/* Bud Petal Head */}
            <path d="M-6 2 C-10 -8 0 -22 0 -22 C0 -22 10 -8 6 2 Z" fill="url(#petalReliefGrad)" stroke="#FFAAB8" strokeWidth="1" />
            <line x1="0" y1="2" x2="0" y2="-18" stroke="#FFDF78" strokeWidth="0.8" opacity="0.6" />
          </g>
        ))}

        {/* Right Side Pointed Flower Buds (Mirrored) */}
        {[
          { cx: 380, cy: 240, rot: 48, sz: 1.15 },
          { cx: 382, cy: 175, rot: 32, sz: 1.05 },
          { cx: 350, cy: 118, rot: 15, sz: 0.95 },
          { cx: 318, cy: 70, rot: -12, sz: 0.85 },
          { cx: 285, cy: 30, rot: -28, sz: 0.75 },
        ].map((bud, i) => (
          <g key={`rbud-${i}`} transform={`translate(${bud.cx}, ${bud.cy}) rotate(${bud.rot}) scale(${bud.sz})`}>
            <path d="M0 16 Q3 10 0 4" stroke="#75152C" strokeWidth="2.5" fill="none" />
            <path d="M-8 10 C-12 4 -8 -4 0 -12 C8 -4 12 4 8 10 Z" fill="#6A0D22" stroke="#D45A74" strokeWidth="0.8" />
            <path d="M-6 2 C-10 -8 0 -22 0 -22 C0 -22 10 -8 6 2 Z" fill="url(#petalReliefGrad)" stroke="#FFAAB8" strokeWidth="1" />
            <line x1="0" y1="2" x2="0" y2="-18" stroke="#FFDF78" strokeWidth="0.8" opacity="0.6" />
          </g>
        ))}

        {/* Branching Leaflets on Left Stem */}
        {[
          { x1: 145, y1: 260, x2: 115, y2: 280 },
          { x1: 125, y1: 205, x2: 90, y2: 215 },
          { x1: 135, y1: 148, x2: 100, y2: 152 },
          { x1: 170, y1: 92, x2: 142, y2: 86 },
        ].map((leaf, i) => (
          <path 
            key={`lleaf-${i}`}
            d={`M${leaf.x1} ${leaf.y1} Q${(leaf.x1 + leaf.x2)/2 - 12} ${(leaf.y1 + leaf.y2)/2 + 10} ${leaf.x2} ${leaf.y2} Q${(leaf.x1 + leaf.x2)/2 + 10} ${(leaf.y1 + leaf.y2)/2 - 10} ${leaf.x1} ${leaf.y1}`}
            fill="url(#petalReliefGrad)"
            stroke="#D45A74"
            strokeWidth="0.9"
          />
        ))}

        {/* Branching Leaflets on Right Stem */}
        {[
          { x1: 355, y1: 260, x2: 385, y2: 280 },
          { x1: 375, y1: 205, x2: 410, y2: 215 },
          { x1: 365, y1: 148, x2: 400, y2: 152 },
          { x1: 330, y1: 92, x2: 358, y2: 86 },
        ].map((leaf, i) => (
          <path 
            key={`rleaf-${i}`}
            d={`M${leaf.x1} ${leaf.y1} Q${(leaf.x1 + leaf.x2)/2 + 12} ${(leaf.y1 + leaf.y2)/2 + 10} ${leaf.x2} ${leaf.y2} Q${(leaf.x1 + leaf.x2)/2 - 10} ${(leaf.y1 + leaf.y2)/2 - 10} ${leaf.x1} ${leaf.y1}`}
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
        <g transform="translate(62, 305) scale(0.95)">
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <g key={`lfl-${i}`} transform={`rotate(${angle})`}>
              <ellipse cx="0" cy="-14" rx="6.5" ry="11" fill="url(#petalReliefGrad)" stroke="#FFAAB8" strokeWidth="0.9" />
            </g>
          ))}
          <circle cx="0" cy="0" r="5" fill="#FFDF78" />
        </g>
        <g transform="translate(36, 332) scale(0.68)">
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <g key={`lfl2-${i}`} transform={`rotate(${angle})`}>
              <ellipse cx="0" cy="-14" rx="6.5" ry="11" fill="url(#petalReliefGrad)" stroke="#FFAAB8" strokeWidth="0.9" />
            </g>
          ))}
          <circle cx="0" cy="0" r="5" fill="#FFDF78" />
        </g>

        {/* Lower Right Corner Floret Cluster */}
        <g transform="translate(438, 305) scale(0.95)">
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <g key={`rfl-${i}`} transform={`rotate(${angle})`}>
              <ellipse cx="0" cy="-14" rx="6.5" ry="11" fill="url(#petalReliefGrad)" stroke="#FFAAB8" strokeWidth="0.9" />
            </g>
          ))}
          <circle cx="0" cy="0" r="5" fill="#FFDF78" />
        </g>
        <g transform="translate(464, 332) scale(0.68)">
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <g key={`rfl2-${i}`} transform={`rotate(${angle})`}>
              <ellipse cx="0" cy="-14" rx="6.5" ry="11" fill="url(#petalReliefGrad)" stroke="#FFAAB8" strokeWidth="0.9" />
            </g>
          ))}
          <circle cx="0" cy="0" r="5" fill="#FFDF78" />
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
