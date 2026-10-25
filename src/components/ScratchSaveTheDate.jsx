import React, { useState, useEffect, useRef } from 'react';
import { weddingData } from '../data/weddingData';
import confetti from 'canvas-confetti';

/**
 * INTERACTIVE SCRATCH-TO-REVEAL SAVE THE DATE (frame_16s & frame_22s)
 * 3 scratch cards (Day, Month, Year) + Live countdown timer + Save the Date button
 */

const ScratchCardTile = ({ label, value, sublabel, isRevealed, onReveal }) => {
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Draw Crimson Velvet Foil Coating
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#6E0D21');
    grad.addColorStop(0.5, '#4A0614');
    grad.addColorStop(1, '#2E020A');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Gold diamond sparkle symbol in center of foil
    ctx.strokeStyle = '#D4AF37';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(10, 10, width - 20, height - 20);

    // Sparkle diamond
    ctx.beginPath();
    const cx = width / 2;
    const cy = height / 2 - 8;
    ctx.moveTo(cx, cy - 12);
    ctx.lineTo(cx + 10, cy);
    ctx.lineTo(cx, cy + 12);
    ctx.lineTo(cx - 10, cy);
    ctx.closePath();
    ctx.fillStyle = '#FFDF78';
    ctx.fill();

    // Foil text label (e.g. "A DAY")
    ctx.fillStyle = '#FFE6EE';
    ctx.font = '600 10px sans-serif';
    ctx.textAlign = 'center';
    ctx.letterSpacing = '2px';
    ctx.fillText(label, width / 2, height - 16);
  }, [label]);

  const strokeCount = useRef(0);

  // Scratch handling
  const scratch = (clientX, clientY) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 24, 0, Math.PI * 2);
    ctx.fill();

    strokeCount.current += 1;
    // Fast sampled transparency check every 4th scratch stroke for silky-smooth 60fps
    if (strokeCount.current % 4 === 0) {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let transparentPixels = 0;
      let totalSampled = 0;
      // Fast stride sampling
      for (let i = 3; i < imgData.data.length; i += 32) {
        totalSampled++;
        if (imgData.data[i] === 0) transparentPixels++;
      }
      if (transparentPixels / totalSampled > 0.38) {
        onReveal();
      }
    }
  };

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    scratch(e.clientX, e.clientY);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) return;
    scratch(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      scratch(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  return (
    <div 
      onClick={onReveal}
      className="relative w-24 sm:w-28 h-28 sm:h-32 rounded-2xl shadow-lg border-2 border-[#D4AF37]/50 overflow-hidden select-none cursor-pointer group bg-[#FAF5EB]"
    >
      {/* UNDERNEATH: Revealed Value */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2 bg-[#FFFDF8]">
        <span className="font-serif text-2xl sm:text-3xl font-bold text-[#3B0612] leading-none">
          {value}
        </span>
        <span className="font-royal text-[9px] tracking-widest text-[#AA7C11] uppercase font-semibold mt-2">
          {sublabel}
        </span>
      </div>

      {/* SCRATCH CANVAS (Fades away once scratched) */}
      <canvas
        ref={canvasRef}
        width={120}
        height={140}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchMove={handleTouchMove}
        className={`absolute inset-0 w-full h-full cursor-pointer transition-opacity duration-500 ${
          isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />
    </div>
  );
};

export const ScratchSaveTheDate = () => {
  const [revealed, setRevealed] = useState({ day: false, month: false, year: false });
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const allRevealed = revealed.day && revealed.month && revealed.year;

  // Countdown timer to wedding date
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
      }
    };
    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleRevealAll = () => {
    setRevealed({ day: true, month: true, year: true });
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#8C132B', '#FFDF78', '#FAF5EB'],
      });
    } catch {
      // safe fallback
    }
  };

  const handleSaveToCalendar = () => {
    const title = encodeURIComponent(`Wedding of ${weddingData.brideFirstName} & ${weddingData.groomFirstName}`);
    const details = encodeURIComponent(`Wedding Celebration at ${weddingData.venueName}, ${weddingData.venueCity}`);
    const location = encodeURIComponent(weddingData.venueAddress);
    // Dynamic date based on weddingData.weddingDate (4 hour duration)
    const start = new Date(weddingData.weddingDate);
    const end = new Date(start.getTime() + 4 * 60 * 60 * 1000);
    const formatCalDate = (d) => d.toISOString().replace(/-|:|\.\d\d\d/g, '');
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${formatCalDate(start)}/${formatCalDate(end)}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section id="scratch-date" className="relative w-full pt-20 sm:pt-28 pb-14 sm:pb-20 px-4 sm:px-8 bg-transparent text-[#3B0612] flex flex-col items-center text-center select-none">
      
      {/* Section Header */}
      <div className="max-w-md mx-auto mb-8">
        <span className="font-royal text-[10px] sm:text-xs tracking-[0.35em] text-[#8C132B] uppercase font-semibold block mb-2">
          A Little Secret, Just For You
        </span>
        <h2 className="font-serif italic text-3xl sm:text-5xl text-[#2E020A] tracking-wide mb-3 font-normal">
          A date to remember...
        </h2>
        <p className="font-serif text-sm sm:text-base text-[#520917] tracking-wide font-medium">
          Scratch to reveal the day our forever begins.
        </p>
        <span className="font-serif italic text-xs text-[#8C132B]/80 mt-1 block">
          &#10022; Scratch with your finger, or tap to reveal
        </span>
      </div>

      {/* 3 Interactive Scratch Cards */}
      <div className="flex items-center justify-center gap-3 sm:gap-6 my-4">
        <ScratchCardTile 
          label="A DAY" 
          value={weddingData.saveTheDateDay} 
          sublabel="DAY"
          isRevealed={revealed.day}
          onReveal={() => setRevealed(prev => ({ ...prev, day: true }))}
        />
        <ScratchCardTile 
          label="A MONTH" 
          value={weddingData.saveTheDateMonth} 
          sublabel="MONTH"
          isRevealed={revealed.month}
          onReveal={() => setRevealed(prev => ({ ...prev, month: true }))}
        />
        <ScratchCardTile 
          label="A YEAR" 
          value={weddingData.saveTheDateYear} 
          sublabel="YEAR"
          isRevealed={revealed.year}
          onReveal={() => setRevealed(prev => ({ ...prev, year: true }))}
        />
      </div>

      {/* Tap to Reveal All Shortcut */}
      {!allRevealed && (
        <button
          onClick={handleRevealAll}
          className="text-xs font-serif italic text-[#8C132B] hover:text-[#3B0612] underline mt-3 cursor-pointer"
        >
          Tap to reveal full date
        </button>
      )}

      {/* Revealed Love Note & Save The Date Button */}
      {allRevealed && (
        <div className="mt-6 flex flex-col items-center animate-fade-in-scale">
          <p className="font-serif italic text-base sm:text-lg text-[#6E0F23] tracking-wider mb-4 font-medium">
            A day for love, laughter &amp; blessings &#9825;
          </p>
          <button
            onClick={handleSaveToCalendar}
            className="px-8 py-3 rounded-md border border-[#3B0612] bg-[#FAF5EB] text-[#3B0612] font-royal text-xs tracking-[0.25em] uppercase font-semibold shadow-md hover:bg-[#3B0612] hover:text-[#FFF8EE] transition-all cursor-pointer"
          >
            + Save The Date
          </button>
        </div>
      )}

      {/* Countdown Timer Section */}
      <div className="mt-14 sm:mt-20 pt-8 border-t border-[#AA7C11]/25 w-full max-w-lg flex flex-col items-center">
        <p className="font-serif italic text-lg sm:text-xl text-[#520917] tracking-wider mb-6 font-normal">
          Every moment brings us closer
        </p>

        {/* Live Timer Numbers */}
        <div className="flex items-center justify-center gap-4 sm:gap-8">
          <div className="flex flex-col items-center">
            <span className="font-serif text-3xl sm:text-4xl text-[#2E020A] font-semibold">
              {timeLeft.days.toString().padStart(2, '0')}
            </span>
            <span className="font-royal text-[9px] sm:text-[10px] tracking-widest text-[#8C132B] uppercase mt-1">
              Days
            </span>
          </div>

          <span className="font-serif text-2xl text-[#AA7C11]/60 -mt-4">:</span>

          <div className="flex flex-col items-center">
            <span className="font-serif text-3xl sm:text-4xl text-[#2E020A] font-semibold">
              {timeLeft.hours.toString().padStart(2, '0')}
            </span>
            <span className="font-royal text-[9px] sm:text-[10px] tracking-widest text-[#8C132B] uppercase mt-1">
              Hours
            </span>
          </div>

          <span className="font-serif text-2xl text-[#AA7C11]/60 -mt-4">:</span>

          <div className="flex flex-col items-center">
            <span className="font-serif text-3xl sm:text-4xl text-[#2E020A] font-semibold">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </span>
            <span className="font-royal text-[9px] sm:text-[10px] tracking-widest text-[#8C132B] uppercase mt-1">
              Minutes
            </span>
          </div>

          <span className="font-serif text-2xl text-[#AA7C11]/60 -mt-4">:</span>

          <div className="flex flex-col items-center">
            <span className="font-serif text-3xl sm:text-4xl text-[#2E020A] font-semibold">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </span>
            <span className="font-royal text-[9px] sm:text-[10px] tracking-widest text-[#8C132B] uppercase mt-1">
              Seconds
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
