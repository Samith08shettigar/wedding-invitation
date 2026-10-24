import React from 'react';
import { weddingData } from '../data/weddingData';
import { SunsetPalaceScene, GoldDivider, FloralCornerBouquet } from './decorations/GoldOrnaments';
import { DownArrow } from './DownArrow';

export const SaveTheDate = () => {
  return (
    <section id="save-the-date" className="relative w-full min-h-[820px] sm:min-h-[880px] flex flex-col items-center justify-between p-4 sm:p-6 overflow-hidden select-none">
      
      {/* Code-Generated Sunset Palace Scene in Background */}
      <SunsetPalaceScene className="z-0" showFlowers={false} />

      {/* SVG Royal Palace Marble Archway Framing the View */}
      <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between">
        {/* Scalloped Arch Header */}
        <svg className="w-full h-36" viewBox="0 0 420 140" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          {/* Outer Spandrels */}
          <path
            d="M0 0 H420 V70 C420 70 380 70 340 50 C300 30 270 20 210 20 C150 20 120 30 80 50 C40 70 0 70 0 70 Z"
            fill="url(#marbleGrad)"
          />
          {/* Multi-Cusped Mughal Arch Profile Line */}
          <path
            d="M0 70 C40 70 80 50 120 30 C150 20 210 20 210 20 C210 20 270 20 300 30 C340 50 380 70 420 70"
            stroke="url(#archBorderGold)"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M0 76 C40 76 80 56 120 36 C150 26 210 26 210 26 C210 26 270 26 300 36 C340 56 380 76 420 76"
            stroke="url(#archBorderGold)"
            strokeWidth="1"
            strokeDasharray="4 3"
            fill="none"
          />
        </svg>

        {/* Flanking Side Pillars */}
        <div className="flex justify-between w-full h-full -mt-2 -mb-2">
          <div className="w-5 sm:w-8 h-full bg-gradient-to-r from-[#3B030D] to-[#1F0106] border-r border-[#D4AF37]/60 shadow-xl" />
          <div className="w-5 sm:w-8 h-full bg-gradient-to-l from-[#3B030D] to-[#1F0106] border-l border-[#D4AF37]/60 shadow-xl" />
        </div>

        {/* Arch Base Balustrade with Garden Flowers */}
        <div className="relative w-full h-20 bg-gradient-to-t from-[#1A0105] via-[#2A020B]/90 to-transparent flex items-end justify-between px-3">
          <FloralCornerBouquet position="bottom-left" className="w-24 h-24 -mb-2 -ml-2" />
          <FloralCornerBouquet position="bottom-right" className="w-24 h-24 -mb-2 -mr-2" />
        </div>
      </div>

      {/* Title: Save the Date */}
      <div className="relative z-20 pt-10 text-center">
        <h2 className="font-serif italic text-3xl sm:text-4xl text-[#FFF3D1] tracking-wider drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Save the Date
        </h2>
      </div>

      {/* Centered Arched Calendar Card */}
      <div 
        className="relative z-20 w-48 sm:w-52 bg-[#FAF5EB] rounded-t-[36px] rounded-b-[20px] border-2 border-[#D4AF37] p-5 my-auto flex flex-col items-center text-center shadow-2xl animate-fade-in-scale"
        style={{
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.8), 0 0 25px rgba(212,175,55,0.4)',
        }}
      >
        {/* Scalloped Arch Top Line */}
        <div className="w-full flex justify-center -mt-1 mb-2">
          <svg width="100" height="18" viewBox="0 0 100 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 16 C20 16 35 6 50 0 C65 6 80 16 100 16" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
            <circle cx="50" cy="2" r="2" fill="#D4AF37" />
          </svg>
        </div>

        {/* Inner Dotted Frame */}
        <div className="absolute inset-2 border border-dashed border-[#D4AF37]/50 rounded-t-[30px] rounded-b-[14px] pointer-events-none" />

        {/* Big Day Number */}
        <span className="font-royal text-6xl sm:text-7xl font-semibold text-[#781124] tracking-tight mt-1 leading-none drop-shadow-sm">
          {weddingData.saveTheDateDay}
        </span>

        {/* Month */}
        <span className="font-serif text-3xl sm:text-4xl text-[#781124] font-medium tracking-wide mt-2">
          {weddingData.saveTheDateMonth}
        </span>

        {/* Year */}
        <span className="font-royal text-xl sm:text-2xl text-[#3B030D] font-medium tracking-widest mt-1">
          {weddingData.saveTheDateYear}
        </span>

        {/* Gold Fleuron Divider */}
        <GoldDivider className="my-2" width="100px" />
      </div>

      {/* Bottom Subtitle: Our Wedding Day */}
      <div className="relative z-20 pb-4 flex flex-col items-center text-center">
        <p className="font-serif text-lg sm:text-xl text-[#FFF3D1] tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-2">
          Our Wedding Day
        </p>
        <DownArrow targetId="countdown" />
      </div>
    </section>
  );
};
