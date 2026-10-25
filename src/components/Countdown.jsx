import React, { useState, useEffect } from 'react';
import { weddingData } from '../data/weddingData';
import { GoldDivider, FloralCornerBouquet, GoldCorner } from './decorations/GoldOrnaments';
import { RoyalMandala, ScallopedMughalArch } from './decorations/IndianOrnaments';
import { DownArrow } from './DownArrow';

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(weddingData.weddingDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="relative w-full min-h-[860px] sm:min-h-[920px] flex flex-col items-center justify-between p-6 sm:p-10 bg-radial from-[#4A0A16] via-[#2D020B] to-[#140004] text-[#FAF4E8] select-none overflow-hidden">
      
      {/* Background Indian Brocade & Rotating Mandala */}
      <div className="absolute inset-0 bg-royal-brocade opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <RoyalMandala size={440} opacity={0.15} className="animate-mandala-spin" />
      </div>

      {/* Outer & Inner Gold Arch Border */}
      <div className="absolute inset-4 sm:inset-6 border-2 border-[#D4AF37]/80 rounded-[32px] pointer-events-none z-10">
        <div className="absolute inset-2 border border-dashed border-[#FFDF78]/35 rounded-[26px]" />
      </div>

      {/* 4 Corner Floral Bouquets */}
      <FloralCornerBouquet position="top-left" className="absolute top-3 left-3 w-28 h-28 sm:w-36 sm:h-36 z-15" />
      <FloralCornerBouquet position="top-right" className="absolute top-3 right-3 w-28 h-28 sm:w-36 sm:h-36 z-15" />
      <FloralCornerBouquet position="bottom-left" className="absolute bottom-3 left-3 w-28 h-28 sm:w-36 sm:h-36 z-15" />
      <FloralCornerBouquet position="bottom-right" className="absolute bottom-3 right-3 w-28 h-28 sm:w-36 sm:h-36 z-15" />

      {/* Gold Corner Filigree */}
      <GoldCorner position="top-left" className="absolute top-6 left-6 z-15" />
      <GoldCorner position="top-right" className="absolute top-6 right-6 z-15" />
      <GoldCorner position="bottom-left" className="absolute bottom-6 left-6 z-15" />
      <GoldCorner position="bottom-right" className="absolute bottom-6 right-6 z-15" />

      {/* Header */}
      <div className="relative z-20 pt-12 sm:pt-16 text-center max-w-md">
        <ScallopedMughalArch width={180} height={26} className="mx-auto mb-1" />
        <span className="font-royal text-[10px] sm:text-xs tracking-[0.3em] text-[#FFDF78]/90 uppercase font-semibold block mb-1">
          Anticipating the Joy
        </span>
        <h2 className="font-serif italic text-4xl sm:text-5xl text-gold-shimmer tracking-wider drop-shadow-md font-normal">
          Countdown to<br />Our Big Day
        </h2>
        <GoldDivider className="my-2.5" width="140px" />
      </div>

      {/* 4 Circular Medallion Dials (Responsive: 2x2 on mobile, 4 in a row on sm/md) */}
      <div className="relative z-20 my-auto grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-xl px-4">
        {timeUnits.map((unit, index) => (
          <div key={index} className="relative flex flex-col items-center justify-center">
            
            {/* Ogee Scalloped SVG Medallion Dial */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.7)]">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id={`dialGrad-${index}`} cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#4A0A16" />
                    <stop offset="65%" stopColor="#2D020B" />
                    <stop offset="100%" stopColor="#140003" />
                  </radialGradient>
                  <linearGradient id={`dialGold-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFF2B2" />
                    <stop offset="50%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#8C610F" />
                  </linearGradient>
                </defs>

                {/* Scalloped Floral Circle with 4 Pointed Ogee Tips */}
                <path
                  d="M50 4 C58 12 62 14 70 8 C76 16 80 18 90 20 C88 28 90 34 96 42 C92 50 92 56 96 66 C88 68 86 74 88 82 C78 84 74 88 70 94 C62 88 56 88 50 96 C44 88 38 88 30 94 C26 88 22 84 12 82 C14 74 12 68 4 66 C8 56 8 50 4 42 C10 34 12 28 10 20 C20 18 24 16 30 8 C38 14 42 12 50 4 Z"
                  fill={`url(#dialGrad-${index})`}
                  stroke={`url(#dialGold-${index})`}
                  strokeWidth="1.8"
                />

                {/* Inner Decorative Rings */}
                <circle cx="50" cy="50" r="38" stroke={`url(#dialGold-${index})`} strokeWidth="0.8" strokeDasharray="3 2" />
                <circle cx="50" cy="50" r="34" stroke={`url(#dialGold-${index})`} strokeWidth="1" strokeOpacity="0.5" />
              </svg>

              {/* Number and Unit Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="font-royal text-2xl sm:text-3xl font-bold text-gold-shimmer leading-none drop-shadow">
                  {unit.value.toString().padStart(2, '0')}
                </span>
                <span className="font-serif italic text-xs sm:text-sm text-[#F3E5C8]/85 mt-1 font-medium">
                  {unit.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Down Arrow */}
      <div className="relative z-20 pb-6">
        <DownArrow targetId="message" />
      </div>
    </section>
  );
};
