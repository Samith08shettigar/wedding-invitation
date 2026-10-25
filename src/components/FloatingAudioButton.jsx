import React, { useState, useEffect, useRef } from 'react';
import { weddingData } from '../data/weddingData';

/**
 * FLOATING SOUNDWAVE AUDIO BUTTON (frame_08s - frame_48s bottom right)
 * Displays 4 animated vertical soundwave bars in a dark maroon pill/circle.
 */
export const FloatingAudioButton = ({ autoPlayTrigger = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const startPlayback = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setIsPlaying(false);
        });
    }
  };

  const pausePlayback = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlayback = (e) => {
    e.stopPropagation();
    if (isPlaying) {
      pausePlayback();
    } else {
      startPlayback();
    }
  };

  useEffect(() => {
    if (autoPlayTrigger) {
      startPlayback();
    }
  }, [autoPlayTrigger]);

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src={weddingData.audio.musicUrl} type="audio/mpeg" />
        <source src="/music/audio.mp3" type="audio/mp3" />
      </audio>

      <button
        onClick={togglePlayback}
        aria-label="Toggle Background Music"
        className="fixed top-5 right-5 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#3B0712]/90 border border-[#D4AF37]/80 text-[#FFDF78] shadow-2xl flex items-center justify-center gap-[3px] p-2 hover:scale-110 active:scale-95 transition-all cursor-pointer backdrop-blur-md"
        style={{
          boxShadow: '0 8px 24px rgba(0,0,0,0.7), 0 0 15px rgba(212,175,55,0.4)',
        }}
      >
        {isPlaying ? (
          <>
            <span className="w-[3px] bg-[#FFDF78] rounded-full sound-bar-1" />
            <span className="w-[3px] bg-[#FFDF78] rounded-full sound-bar-2" />
            <span className="w-[3px] bg-[#FFDF78] rounded-full sound-bar-3" />
            <span className="w-[3px] bg-[#FFDF78] rounded-full sound-bar-4" />
          </>
        ) : (
          <div className="flex items-center gap-[2.5px] opacity-60">
            <span className="w-[2.5px] h-2 bg-[#D4AF37] rounded-full" />
            <span className="w-[2.5px] h-3 bg-[#D4AF37] rounded-full" />
            <span className="w-[2.5px] h-1.5 bg-[#D4AF37] rounded-full" />
            <span className="w-[2.5px] h-2.5 bg-[#D4AF37] rounded-full" />
          </div>
        )}
      </button>
    </>
  );
};
