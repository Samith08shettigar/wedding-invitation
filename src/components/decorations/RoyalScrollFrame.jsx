import React from 'react';

/**
 * ROYAL SCROLL FRAME
 * 
 * Provides a continuous, UNBROKEN royal gold frame for the entire ivory invitation body:
 * - Authentic watercolor floral corner bouquets in all 4 corners (feathered & seamless)
 * - Authentic 4-petal golden center fleurons (top & bottom)
 * - Continuous, unbroken 1.5px gold vertical border lines on left and right edges
 * - Symmetrically distributed gold diamond fleuron nodes along both vertical borders
 * - Warm luxury handmade ivory parchment background (parchment_seamless.webp)
 * 
 * Solves the broken border, severed flowers, and awkward page cuts completely.
 */
export const RoyalScrollFrame = ({ children }) => {
  return (
    <div className="relative w-full bg-luxury-parchment flex flex-col overflow-hidden">
      
      {/* 1. TOP ROYAL FRAME WITH FLORAL CORNERS & CENTER FLEURON */}
      <div className="absolute top-0 inset-x-0 h-32 pointer-events-none select-none z-20">
        {/* Top Horizontal Gold Line connecting left to right */}
        <div 
          className="absolute top-[18px] sm:top-[20px] left-[11px] sm:left-[12px] right-[11px] sm:right-[12px] h-[1.5px] bg-gradient-to-r from-[#D4AF37] via-[#AA7C11] to-[#D4AF37] shadow-[0_0_2px_rgba(212,175,55,0.4)]" 
        />
        
        {/* Top Center 4-Petal Gold Fleuron */}
        <div className="absolute top-[18px] sm:top-[20px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
          <img 
            src="/images/fleuron_top_trans.webp" 
            alt="" 
            className="h-4 sm:h-5 w-auto object-contain filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]" 
          />
        </div>

        {/* Top-Left Floral Corner Bouquet */}
        <img 
          src="/images/corner_tl_feathered.webp" 
          alt="" 
          className="absolute top-0 left-0 w-24 h-24 sm:w-28 sm:h-28 object-contain"
        />

        {/* Top-Right Floral Corner Bouquet */}
        <img 
          src="/images/corner_tr_feathered.webp" 
          alt="" 
          className="absolute top-0 right-0 w-24 h-24 sm:w-28 sm:h-28 object-contain"
        />
      </div>

      {/* 2. CONTINUOUS UNBROKEN LEFT VERTICAL GOLD BORDER */}
      <div 
        className="absolute top-[18px] sm:top-[20px] bottom-[20px] sm:bottom-[22px] left-[11px] sm:left-[12px] w-[1.5px] bg-gradient-to-b from-[#D4AF37] via-[#AA7C11] to-[#D4AF37] pointer-events-none select-none z-20 shadow-[0_0_2px_rgba(212,175,55,0.4)]"
      >
        {/* Diamond Fleurons distributed gracefully along left border */}
        <div className="absolute top-[12%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-2.5 h-2.5 rotate-45 bg-gradient-to-br from-[#FFF6D6] via-[#D4AF37] to-[#8C6008] border-[0.8px] border-[#FFFDF8] shadow-[0_1px_3px_rgba(0,0,0,0.2)]" />
        </div>
        <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-2.5 h-2.5 rotate-45 bg-gradient-to-br from-[#FFF6D6] via-[#D4AF37] to-[#8C6008] border-[0.8px] border-[#FFFDF8] shadow-[0_1px_3px_rgba(0,0,0,0.2)]" />
        </div>
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-2.5 h-2.5 rotate-45 bg-gradient-to-br from-[#FFF6D6] via-[#D4AF37] to-[#8C6008] border-[0.8px] border-[#FFFDF8] shadow-[0_1px_3px_rgba(0,0,0,0.2)]" />
        </div>
        <div className="absolute top-[62%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-2.5 h-2.5 rotate-45 bg-gradient-to-br from-[#FFF6D6] via-[#D4AF37] to-[#8C6008] border-[0.8px] border-[#FFFDF8] shadow-[0_1px_3px_rgba(0,0,0,0.2)]" />
        </div>
        <div className="absolute top-[78%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-2.5 h-2.5 rotate-45 bg-gradient-to-br from-[#FFF6D6] via-[#D4AF37] to-[#8C6008] border-[0.8px] border-[#FFFDF8] shadow-[0_1px_3px_rgba(0,0,0,0.2)]" />
        </div>
        <div className="absolute top-[92%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-2.5 h-2.5 rotate-45 bg-gradient-to-br from-[#FFF6D6] via-[#D4AF37] to-[#8C6008] border-[0.8px] border-[#FFFDF8] shadow-[0_1px_3px_rgba(0,0,0,0.2)]" />
        </div>
      </div>

      {/* 3. CONTINUOUS UNBROKEN RIGHT VERTICAL GOLD BORDER */}
      <div 
        className="absolute top-[18px] sm:top-[20px] bottom-[20px] sm:bottom-[22px] right-[11px] sm:right-[12px] w-[1.5px] bg-gradient-to-b from-[#D4AF37] via-[#AA7C11] to-[#D4AF37] pointer-events-none select-none z-20 shadow-[0_0_2px_rgba(212,175,55,0.4)]"
      >
        {/* Diamond Fleurons distributed gracefully along right border */}
        <div className="absolute top-[12%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-2.5 h-2.5 rotate-45 bg-gradient-to-br from-[#FFF6D6] via-[#D4AF37] to-[#8C6008] border-[0.8px] border-[#FFFDF8] shadow-[0_1px_3px_rgba(0,0,0,0.2)]" />
        </div>
        <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-2.5 h-2.5 rotate-45 bg-gradient-to-br from-[#FFF6D6] via-[#D4AF37] to-[#8C6008] border-[0.8px] border-[#FFFDF8] shadow-[0_1px_3px_rgba(0,0,0,0.2)]" />
        </div>
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-2.5 h-2.5 rotate-45 bg-gradient-to-br from-[#FFF6D6] via-[#D4AF37] to-[#8C6008] border-[0.8px] border-[#FFFDF8] shadow-[0_1px_3px_rgba(0,0,0,0.2)]" />
        </div>
        <div className="absolute top-[62%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-2.5 h-2.5 rotate-45 bg-gradient-to-br from-[#FFF6D6] via-[#D4AF37] to-[#8C6008] border-[0.8px] border-[#FFFDF8] shadow-[0_1px_3px_rgba(0,0,0,0.2)]" />
        </div>
        <div className="absolute top-[78%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-2.5 h-2.5 rotate-45 bg-gradient-to-br from-[#FFF6D6] via-[#D4AF37] to-[#8C6008] border-[0.8px] border-[#FFFDF8] shadow-[0_1px_3px_rgba(0,0,0,0.2)]" />
        </div>
        <div className="absolute top-[92%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-2.5 h-2.5 rotate-45 bg-gradient-to-br from-[#FFF6D6] via-[#D4AF37] to-[#8C6008] border-[0.8px] border-[#FFFDF8] shadow-[0_1px_3px_rgba(0,0,0,0.2)]" />
        </div>
      </div>

      {/* 4. MAIN INVITATION CONTENT (Children without separate backgrounds) */}
      <div className="relative z-10 w-full flex flex-col">
        {children}
      </div>

      {/* 5. BOTTOM ROYAL FRAME WITH FLORAL CORNERS & CENTER FLEURON */}
      <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none select-none z-20">
        {/* Bottom Horizontal Gold Line */}
        <div 
          className="absolute bottom-[20px] sm:bottom-[22px] left-[11px] sm:left-[12px] right-[11px] sm:right-[12px] h-[1.5px] bg-gradient-to-r from-[#D4AF37] via-[#AA7C11] to-[#D4AF37] shadow-[0_0_2px_rgba(212,175,55,0.4)]" 
        />
        
        {/* Bottom Center 4-Petal Gold Fleuron */}
        <div className="absolute bottom-[20px] sm:bottom-[22px] left-1/2 -translate-x-1/2 translate-y-1/2 z-10 flex items-center justify-center">
          <img 
            src="/images/fleuron_bot_trans.webp" 
            alt="" 
            className="h-4 sm:h-5 w-auto object-contain filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]" 
          />
        </div>

        {/* Bottom-Left Floral Corner Bouquet */}
        <img 
          src="/images/corner_bl_feathered.webp" 
          alt="" 
          className="absolute bottom-0 left-0 w-24 h-24 sm:w-28 sm:h-28 object-contain"
        />

        {/* Bottom-Right Floral Corner Bouquet */}
        <img 
          src="/images/corner_br_feathered.webp" 
          alt="" 
          className="absolute bottom-0 right-0 w-24 h-24 sm:w-28 sm:h-28 object-contain"
        />
      </div>

    </div>
  );
};

export default RoyalScrollFrame;
