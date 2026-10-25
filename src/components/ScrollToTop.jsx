import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top of wedding invitation"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full border-2 border-[#D4AF37] bg-[#2E020B]/90 text-[#FFDF78] shadow-2xl backdrop-blur-md flex items-center justify-center hover:scale-110 active:scale-95 hover:border-[#FFF2B2] transition-all cursor-pointer animate-fade-in"
      style={{
        boxShadow: '0 8px 24px rgba(0,0,0,0.85), 0 0 15px rgba(212,175,55,0.4)',
      }}
    >
      <ChevronUp className="w-5 h-5 text-[#FFDF78]" />
    </button>
  );
};
