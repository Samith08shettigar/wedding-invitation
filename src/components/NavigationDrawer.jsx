import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { GoldLotus, ScallopedMughalArch } from './decorations/IndianOrnaments';
import { GoldDivider } from './decorations/GoldOrnaments';

export const NavigationDrawer = ({ onOpenRsvp }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'Invitation', targetId: 'home' },
    { label: 'The Couple', targetId: 'couple' },
    { label: 'Save The Date', targetId: 'save-the-date' },
    { label: 'Countdown', targetId: 'countdown' },
    { label: 'Our Families', targetId: 'message' },
    { label: 'Schedule', targetId: 'events' },
    { label: 'Venue & Map', targetId: 'venue' },
    { label: 'RSVP Attendance', isRsvp: true },
  ];

  const handleNavClick = (link) => {
    setIsOpen(false);
    if (link.isRsvp) {
      if (onOpenRsvp) onOpenRsvp();
      return;
    }
    const el = document.getElementById(link.targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Top Left Floating Hamburger Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open Royal Navigation Menu"
        className="fixed top-5 left-5 z-40 px-3.5 py-2 rounded-full border border-[#D4AF37]/80 bg-[#280209]/90 text-[#FFDF78] shadow-2xl backdrop-blur-md flex items-center gap-2 hover:scale-105 active:scale-95 hover:border-[#FFF2B2] transition-all cursor-pointer"
      >
        <Menu className="w-4 h-4 text-[#FFDF78]" />
        <span className="font-royal text-[10px] tracking-widest uppercase font-semibold hidden sm:inline">
          Menu
        </span>
      </button>

      {/* Navigation Drawer Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-[320px] rounded-[36px] bg-[#2E020B] border-2 border-[#D4AF37] p-8 shadow-2xl text-center select-none overflow-hidden"
            style={{
              boxShadow: '0 25px 60px rgba(0,0,0,0.95), 0 0 35px rgba(212,175,55,0.45)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Brocade Texture */}
            <div className="absolute inset-0 bg-royal-brocade opacity-60 pointer-events-none" />

            {/* Inner Gold Dotted Trim */}
            <div className="absolute inset-2 border border-dashed border-[#FFDF78]/30 rounded-[30px] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-20 text-[#FFEAAA]/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Monogram */}
            <div className="relative z-10 pt-2 mb-2 flex flex-col items-center">
              <GoldLotus size={32} className="mb-1" />
              <h2 className="font-cursive text-3xl text-[#FFF4D0]">
                {weddingData.brideFirstName} &amp; {weddingData.groomFirstName}
              </h2>
              <GoldDivider className="my-2" width="120px" />
            </div>

            {/* Menu Links */}
            <div className="relative z-10 flex flex-col gap-3 my-2">
              {links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className={`font-serif tracking-wider text-base sm:text-lg transition-all py-1 cursor-pointer ${
                    link.isRsvp 
                      ? 'text-[#FFDF78] font-royal text-sm uppercase tracking-widest font-bold bg-[#4A0A16]/80 rounded-full py-1.5 border border-[#D4AF37]/50 mt-1 shadow-md hover:bg-[#680F20]'
                      : 'text-[#FAF4E8]/90 hover:text-[#FFDF78] hover:translate-x-1'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Bottom Decorative Gold Divider */}
            <div className="relative z-10 flex items-center justify-center gap-2 mt-4 pt-3 border-t border-[#D4AF37]/25 opacity-80">
              <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs">&#10018;</span>
              <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
