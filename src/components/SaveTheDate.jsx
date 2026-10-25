import React from 'react';
import { weddingData } from '../data/weddingData';
import { SunsetPalaceScene, GoldDivider, FloralCornerBouquet } from './decorations/GoldOrnaments';
import { ScallopedMughalArch, GoldLotus } from './decorations/IndianOrnaments';
import { DownArrow } from './DownArrow';

export const SaveTheDate = () => {
  return (
    <section id="save-the-date" className="relative w-full min-h-[860px] sm:min-h-[920px] flex flex-col items-center justify-between p-4 sm:p-8 overflow-hidden select-none">
      
      {/* Code-Generated Sunset Palace Scene in Background */}
      <SunsetPalaceScene className="z-0" showFlowers={false} />

      {/* SVG Royal Palace Marble Archway Framing the View */}
      <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between">
        {/* Scalloped Arch Header */}
        <svg className="w-full h-40 sm:h-48" viewBox="0 0 1000 160" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="marbleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4A0A16" />
              <stop offset="60%" stopColor="#2E040D" />
              <stop offset="100%" stopColor="#1E0207" />
            </linearGradient>
            <linearGradient id="archBorderGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#AA7C11" />
              <stop offset="50%" stopColor="#FFF2B2" />
              <stop offset="100%" stopColor="#AA7C11" />
            </linearGradient>
          </defs>
          {/* Spandrels */}
          <path
            d="M0 0 H1000 V80 C1000 80 880 80 780 60 C680 40 620 25 500 25 C380 25 320 40 220 60 C120 80 0 80 0 80 Z"
            fill="url(#marbleGrad)"
          />
          {/* Multi-Cusped Mughal Arch Profile Line */}
          <path
            d="M0 80 C120 80 220 60 320 40 C380 25 500 25 500 25 C500 25 620 25 680 40 C780 60 880 80 1000 80"
            stroke="url(#archBorderGold)"
            strokeWidth="3.5"
            fill="none"
          />
          <path
            d="M0 87 C120 87 220 67 320 47 C380 32 500 32 500 32 C500 32 620 32 680 47 C780 67 880 87 1000 87"
            stroke="url(#archBorderGold)"
            strokeWidth="1.2"
            strokeDasharray="4 3"
            fill="none"
          />
        </svg>

        {/* Flanking Side Pillars */}
        <div className="flex justify-between w-full h-full -mt-4 -mb-4">
          <div className="w-6 sm:w-12 h-full bg-gradient-to-r from-[#3B030D] to-[#1F0106] border-r-2 border-[#D4AF37]/70 shadow-2xl" />
          <div className="w-6 sm:w-12 h-full bg-gradient-to-l from-[#3B030D] to-[#1F0106] border-l-2 border-[#D4AF37]/70 shadow-2xl" />
        </div>

        {/* Arch Base Balustrade with Garden Flowers */}
        <div className="relative w-full h-24 bg-gradient-to-t from-[#1A0105] via-[#2A020B]/95 to-transparent flex items-end justify-between px-4">
          <FloralCornerBouquet position="bottom-left" className="w-28 h-28 -mb-3 -ml-3" />
          <FloralCornerBouquet position="bottom-right" className="w-28 h-28 -mb-3 -mr-3" />
        </div>
      </div>

      {/* Title: Save the Date */}
      <div className="relative z-20 pt-12 sm:pt-16 text-center">
        <span className="font-royal text-[10px] sm:text-xs tracking-[0.35em] text-[#FFDF78]/90 uppercase font-semibold block mb-1">
          Auspicious Day
        </span>
        <h2 className="font-serif italic text-4xl sm:text-5xl text-[#FFF3D1] tracking-wider drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)] font-normal">
          Save the Date
        </h2>
      </div>

      {/* Centered Arched Calendar Card */}
      <div 
        className="relative z-20 w-56 sm:w-64 bg-[#FAF5EB] rounded-t-[44px] rounded-b-[24px] border-2 border-[#D4AF37] p-6 sm:p-7 my-auto flex flex-col items-center text-center shadow-2xl animate-fade-in-scale"
        style={{
          boxShadow: '0 25px 50px -10px rgba(0,0,0,0.85), 0 0 35px rgba(212,175,55,0.45)',
        }}
      >
        {/* Scalloped Arch Top Crown */}
        <ScallopedMughalArch width={140} height={22} className="-mt-2 mb-2" />

        {/* Inner Dotted Frame */}
        <div className="absolute inset-2.5 border border-dashed border-[#D4AF37]/50 rounded-t-[38px] rounded-b-[18px] pointer-events-none" />

        <GoldLotus size={28} className="mb-1" />

        {/* Big Day Number */}
        <span className="font-royal text-6xl sm:text-7xl font-bold text-[#781124] tracking-tight mt-1 leading-none drop-shadow-sm">
          {weddingData.saveTheDateDay}
        </span>

        {/* Month */}
        <span className="font-serif text-3xl sm:text-4xl text-[#781124] font-medium tracking-wider mt-2">
          {weddingData.saveTheDateMonth}
        </span>

        {/* Year */}
        <span className="font-royal text-xl sm:text-2xl text-[#3B030D] font-semibold tracking-widest mt-1">
          {weddingData.saveTheDateYear}
        </span>

        {/* Gold Fleuron Divider */}
        <GoldDivider className="my-2.5" width="120px" />
      </div>

      {/* Bottom Subtitle: Our Wedding Day */}
      <div className="relative z-20 pb-6 flex flex-col items-center text-center">
        <p className="font-serif text-lg sm:text-2xl text-[#FFF3D1] tracking-widest drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] mb-2 font-medium">
          Our Wedding Day
        </p>
        <DownArrow targetId="countdown" />
      </div>
    </section>
  );
};
