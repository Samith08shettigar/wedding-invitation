import React, { useState } from 'react';
import { X, CheckCircle2, Send, User, Phone, Users } from 'lucide-react';
import confetti from 'canvas-confetti';
import { weddingData } from '../data/weddingData';
import { GoldDivider } from './decorations/GoldOrnaments';
import { GoldLotus, ScallopedMughalArch } from './decorations/IndianOrnaments';

export const RsvpModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('1');
  const [dietary, setDietary] = useState('Vegetarian');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#FFDF78', '#991B1B', '#F59E0B', '#FAF4E8'],
      });
    } catch {
      // Confetti fallback
    }

    setIsSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[380px] rounded-[36px] bg-[#2C020A] border-2 border-[#D4AF37] p-7 shadow-2xl text-center select-none overflow-hidden"
        style={{
          boxShadow: '0 25px 60px rgba(0,0,0,0.9), 0 0 35px rgba(212,175,55,0.4)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Brocade pattern */}
        <div className="absolute inset-0 bg-royal-brocade opacity-60 pointer-events-none" />

        {/* Inner Gold Dotted Trim */}
        <div className="absolute inset-2 border border-dashed border-[#FFDF78]/30 rounded-[30px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-[#FFEAAA]/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close RSVP"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="relative z-10 py-6 flex flex-col items-center">
            <CheckCircle2 className="w-16 h-16 text-[#10B981] mb-3 animate-bounce" />
            <h3 className="font-serif text-3xl text-[#FFDF78] font-bold mb-1">
              Thank You, {name}!
            </h3>
            <p className="font-serif italic text-sm text-[#FAF4E8]/90 max-w-[260px] mb-6 leading-relaxed">
              Your RSVP has been joyfully recorded. We look forward to welcoming you to our Royal Wedding!
            </p>
            <button
              onClick={onClose}
              className="px-8 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFDF78] to-[#D4AF37] text-[#2C020A] font-royal font-bold text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-transform cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative z-10 space-y-4 pt-1">
            <div>
              <GoldLotus size={28} className="mx-auto mb-1" />
              <span className="font-royal text-[10px] text-[#FFDF78] tracking-[0.25em] uppercase font-semibold">
                Celebrate With Us
              </span>
              <h3 className="font-serif italic text-3xl text-[#FFF4D0] font-normal mt-0.5">
                Royal Wedding RSVP
              </h3>
              <p className="font-serif italic text-xs text-[#FAF4E8]/75 mt-0.5">
                Kindly respond by {weddingData.rsvp.deadline}
              </p>
              <GoldDivider className="my-2" width="120px" />
            </div>

            {/* Name */}
            <div className="relative text-left">
              <User className="w-4 h-4 text-[#D4AF37] absolute left-3.5 top-3" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Full Name"
                className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#1A0105] border border-[#D4AF37]/50 text-[#FAF4E8] placeholder:text-white/40 text-xs sm:text-sm focus:outline-none focus:border-[#FFDF78] transition-colors"
              />
            </div>

            {/* Phone */}
            <div className="relative text-left">
              <Phone className="w-4 h-4 text-[#D4AF37] absolute left-3.5 top-3" />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Contact Phone Number"
                className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#1A0105] border border-[#D4AF37]/50 text-[#FAF4E8] placeholder:text-white/40 text-xs sm:text-sm focus:outline-none focus:border-[#FFDF78] transition-colors"
              />
            </div>

            {/* Guests */}
            <div className="relative text-left">
              <Users className="w-4 h-4 text-[#D4AF37] absolute left-3.5 top-3" />
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#1A0105] border border-[#D4AF37]/50 text-[#FAF4E8] text-xs sm:text-sm focus:outline-none focus:border-[#FFDF78] transition-colors"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n} className="bg-[#200108]">
                    {n} {n === 1 ? 'Guest' : 'Guests'} Attending
                  </option>
                ))}
              </select>
            </div>

            {/* Dietary Preference */}
            <div>
              <span className="font-serif text-[11px] text-[#FFDF78]/80 block text-left mb-1.5 font-medium">
                Dietary Preferences:
              </span>
              <div className="flex gap-2">
                {weddingData.rsvp.dietaryOptions.map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => setDietary(opt)}
                    className={`flex-1 py-1.5 rounded-lg border text-center text-[11px] font-serif transition-all cursor-pointer ${
                      dietary === opt
                        ? 'bg-[#D4AF37] text-[#2C020A] font-bold border-[#D4AF37] shadow'
                        : 'bg-[#1A0105] border-[#D4AF37]/35 text-[#FAF4E8]/75 hover:border-[#D4AF37]/70'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFF2B2] to-[#D4AF37] text-[#2C020A] font-royal font-bold text-xs uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer mt-3"
            >
              <Send className="w-4 h-4" />
              <span>Confirm Royal Attendance</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
