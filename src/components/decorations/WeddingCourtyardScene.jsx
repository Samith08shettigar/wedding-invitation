import React from 'react';
import bgImage from '../../assets/background1.png';

/**
 * ROYAL WEDDING COURTYARD SCENE
 * Uses the exact reference palace pavilion image provided by user (background1.png)
 * Features grand scalloped Rajput archway, rose & jasmine garlands, sunset sky,
 * illuminated mandap pavilion, petal aisle, and glowing lanterns.
 */
export const WeddingCourtyardScene = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}>
      {/* 1. Grand Royal Wedding Pavilion Background Image */}
      <img
        src={bgImage}
        alt="Royal Wedding Pavilion Courtyard"
        className="w-full h-full object-cover object-top"
      />

      {/* 2. Soft Atmospheric Lighting & Depth Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30 pointer-events-none" />
    </div>
  );
};

