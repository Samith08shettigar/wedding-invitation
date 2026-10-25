import React from 'react';
import bgWebp from '../../assets/background1.webp';
import bgPng from '../../assets/background1.png';

/**
 * ROYAL WEDDING COURTYARD SCENE
 * Uses the exact reference palace pavilion image provided by user (background1.png/webp)
 * Features grand scalloped Rajput archway, rose & jasmine garlands, sunset sky,
 * illuminated mandap pavilion, petal aisle, and glowing lanterns.
 */
export const WeddingCourtyardScene = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}>
      {/* 1. Grand Royal Wedding Pavilion Background Image */}
      <picture>
        <source srcSet={bgWebp} type="image/webp" />
        <img
          src={bgPng}
          alt="Royal Wedding Pavilion Courtyard"
          className="w-full h-full object-cover object-top"
          loading="eager"
          decoding="sync"
        />
      </picture>

      {/* 2. Soft Atmospheric Sunset Glow & Depth Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/35 pointer-events-none" />

      {/* 3. Golden Dust Shimmer Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
        {[
          { top: '25%', left: '30%', size: 3, delay: '0s' },
          { top: '35%', left: '70%', size: 2.5, delay: '1.2s' },
          { top: '55%', left: '45%', size: 4, delay: '2.5s' },
          { top: '65%', left: '20%', size: 3, delay: '0.8s' },
          { top: '75%', left: '80%', size: 3.5, delay: '1.8s' },
          { top: '40%', left: '50%', size: 2, delay: '3.1s' },
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
              boxShadow: '0 0 8px #FFD700',
            }}
          />
        ))}
      </div>
    </div>
  );
};


