import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, X } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export const MusicControl = ({ autoPlayTrigger = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [progress, setProgress] = useState(30);
  const audioRef = useRef(null);
  const synthIntervalRef = useRef(null);

  // Web Audio API Synthesizer fallback if external sound fails
  const playChimeFallback = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const scale = [261.63, 293.66, 329.63, 369.99, 392.0, 440.0, 493.88, 523.25];
      let step = 0;

      synthIntervalRef.current = window.setInterval(() => {
        if (!isPlaying) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        const note = scale[step % scale.length];
        step = (step + 1) % scale.length;
        osc.frequency.setValueAtTime(note, ctx.currentTime);
        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 1.3);
      }, 750);
    } catch {
      // Audio context handled
    }
  };

  const startPlayback = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setIsPlaying(true);
          playChimeFallback();
        });
    }
  };

  const stopPlayback = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopPlayback();
    } else {
      startPlayback();
    }
  };

  useEffect(() => {
    if (autoPlayTrigger) {
      startPlayback();
    }
  }, [autoPlayTrigger]);

  useEffect(() => {
    return () => {
      if (synthIntervalRef.current) {
        clearInterval(synthIntervalRef.current);
      }
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src={weddingData.audio.musicUrl} type="audio/mpeg" />
        <source src="/music/audio.mp3" type="audio/mp3" />
      </audio>

      {/* Floating Speaker Button at Top Right */}
      <button
        onClick={() => setIsModalOpen(true)}
        aria-label="Background Music Settings"
        className="fixed top-4 right-4 z-40 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D4AF37]/70 bg-[#250108]/90 text-[#FFDF78] shadow-lg backdrop-blur-md flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer"
      >
        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-[#FFDF78] animate-pulse" />
        ) : (
          <VolumeX className="w-4 h-4 text-[#D4AF37]/70" />
        )}
      </button>

      {/* Background Music Modal Dialog (Screen 13) */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-[280px] rounded-2xl bg-[#28040C]/95 border border-[#D4AF37]/60 p-5 shadow-2xl text-center select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#D4AF37]/25 pb-2 mb-4">
              <span className="font-serif text-xs sm:text-sm text-[#FFEAAA] font-semibold tracking-wide">
                Background Music
              </span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-[#FFEAAA]/70 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Music Dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Play/Pause Button */}
            <div className="my-4 flex justify-center">
              <button
                onClick={togglePlay}
                className="w-14 h-14 rounded-full bg-[#FAF5EB] text-[#2C020A] shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 fill-[#2C020A]" />
                ) : (
                  <Play className="w-6 h-6 fill-[#2C020A] ml-0.5" />
                )}
              </button>
            </div>

            {/* Progress Slider */}
            <div className="flex items-center gap-2 px-2 mt-4">
              <VolumeX className="w-3.5 h-3.5 text-[#D4AF37]/60" />
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => setProgress(Number(e.target.value))}
                className="w-full h-1 bg-[#4A0A16] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
              />
              <Volume2 className="w-3.5 h-3.5 text-[#D4AF37]" />
            </div>

            <p className="font-serif italic text-[11px] text-[#FFDF78]/70 mt-3 truncate">
              {weddingData.audio.songTitle}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
