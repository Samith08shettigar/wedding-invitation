import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const NavigationDrawer = ({ onOpenRsvp }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'Home', targetId: 'home' },
    { label: 'Our Story', targetId: 'couple' },
    { label: 'Save The Date', targetId: 'save-the-date' },
    { label: 'Countdown', targetId: 'countdown' },
    { label: 'Schedule', targetId: 'events' },
    { label: 'Venue', targetId: 'venue' },
    { label: 'RSVP', isRsvp: true },
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
        aria-label="Open Navigation Menu"
        className="fixed top-4 left-4 z-40 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D4AF37]/70 bg-[#250108]/90 text-[#FFDF78] shadow-lg backdrop-blur-md flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer"
      >
        <Menu className="w-4 h-4 text-[#FFDF78]" />
      </button>

      {/* Navigation Drawer Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-[280px] rounded-3xl bg-[#35030E] border-2 border-[#D4AF37] p-8 shadow-2xl text-center select-none overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Corner Gold Filigree Accents */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#D4AF37]" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#D4AF37]" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#D4AF37]" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#D4AF37]" />

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-[#FFEAAA]/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Menu Links */}
            <div className="flex flex-col gap-4 my-3">
              {links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="font-serif text-lg sm:text-xl text-[#FAF4E8] hover:text-[#FFDF78] transition-colors cursor-pointer tracking-wider"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Bottom Decorative Gold Divider */}
            <div className="flex items-center justify-center gap-2 mt-4 pt-3 border-t border-[#D4AF37]/25 opacity-80">
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
