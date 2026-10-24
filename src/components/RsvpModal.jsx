import React, { useState } from 'react';
import { X, CheckCircle2, Send, User, Phone, Users } from 'lucide-react';
import confetti from 'canvas-confetti';
import { weddingData } from '../data/weddingData';

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
        particleCount: 80,
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[340px] rounded-3xl bg-[#2C020A] border-2 border-[#D4AF37] p-6 shadow-2xl text-center select-none overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#FFEAAA]/70 hover:text-white transition-colors cursor-pointer"
          aria-label="Close RSVP"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-6 flex flex-col items-center">
            <CheckCircle2 className="w-14 h-14 text-[#10B981] mb-3 animate-bounce" />
            <h3 className="font-serif text-2xl text-[#FFDF78] font-bold mb-1">
              Thank You, {name}!
            </h3>
            <p className="font-serif italic text-xs text-[#FAF4E8]/90 max-w-[220px] mb-6">
              Your RSVP has been joyfully recorded. We look forward to celebrating with you!
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#2C020A] font-serif font-bold text-xs uppercase tracking-wider shadow-lg"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div>
              <span className="font-serif text-[11px] text-[#D4AF37] tracking-widest uppercase font-semibold">
                Celebrate With Us
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#FFEAAA] font-bold mt-0.5">
                RSVP
              </h3>
              <p className="font-serif italic text-[11px] text-[#FAF4E8]/70">
                Kindly respond by {weddingData.rsvp.deadline}
              </p>
            </div>

            {/* Name */}
            <div className="relative text-left">
              <User className="w-3.5 h-3.5 text-[#D4AF37] absolute left-3 top-3" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Full Name"
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#1D0106] border border-[#D4AF37]/40 text-[#FAF4E8] placeholder:text-white/40 text-xs focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            {/* Phone */}
            <div className="relative text-left">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37] absolute left-3 top-3" />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#1D0106] border border-[#D4AF37]/40 text-[#FAF4E8] placeholder:text-white/40 text-xs focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            {/* Guests */}
            <div className="relative text-left">
              <Users className="w-3.5 h-3.5 text-[#D4AF37] absolute left-3 top-3" />
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#1D0106] border border-[#D4AF37]/40 text-[#FAF4E8] text-xs focus:outline-none focus:border-[#D4AF37]"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n} className="bg-[#200108]">
                    {n} {n === 1 ? 'Guest' : 'Guests'} Attending
                  </option>
                ))}
              </select>
            </div>

            {/* Dietary Preference */}
            <div className="flex gap-2">
              {weddingData.rsvp.dietaryOptions.map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setDietary(opt)}
                  className={`flex-1 py-1.5 rounded-lg border text-center text-[10px] font-serif transition-all cursor-pointer ${
                    dietary === opt
                      ? 'bg-[#D4AF37] text-[#2C020A] font-bold border-[#D4AF37]'
                      : 'bg-[#1D0106] border-[#D4AF37]/30 text-[#FAF4E8]/70'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFDF78] to-[#D4AF37] text-[#2C020A] font-serif font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Confirm Attendance</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
