import React, { useState, useEffect } from 'react';
import { videoIntro, personalInfo } from '../data/portfolioData';
import { X, Play, Video, Volume2, Sparkles, ExternalLink, Check } from 'lucide-react';

export default function VideoModal({ onClose }) {
  const activeEmbed = videoIntro.embedUrl || '';

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-ink-950 rounded-3xl shadow-2xl border border-neutral-800 overflow-hidden z-10 flex flex-col text-white">
        {/* Top Header */}
        <div className="p-5 sm:p-6 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-white">
              <Video className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-white">
                {videoIntro.title} — Husain Shakruwala
              </h3>
              <p className="text-xs font-mono text-neutral-400">
                Personal Introduction • {videoIntro.duration}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display */}
        <div className="p-6 sm:p-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-neutral-800 shadow-elevated flex items-center justify-center">
            {activeEmbed ? (
              <iframe
                src={activeEmbed}
                title="Husain Shakruwala Introduction Video"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="relative w-full h-full p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-neutral-900 via-neutral-950 to-black">
                {/* Background Grid Pattern */}
                <div 
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(#FB7319 1px, transparent 1px), linear-gradient(90deg, #FB7319 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                  }}
                />

                <div className="relative z-10 max-w-lg">
                  <div className="w-16 h-16 rounded-full bg-brand/20 border border-brand/40 flex items-center justify-center text-brand mx-auto mb-4">
                    <Video className="w-8 h-8" />
                  </div>

                  <h4 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
                    {videoIntro.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    "{videoIntro.placeholderQuote}"
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-4 bg-neutral-900/80 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
          <span>Speaker: {videoIntro.speakerName}</span>
          <span className="text-brand">{personalInfo.domain}</span>
        </div>
      </div>
    </div>
  );
}
