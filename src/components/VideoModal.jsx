import React, { useState, useEffect } from 'react';
import { videoIntro, personalInfo } from '../data/portfolioData';
import { X, Play, Video, Volume2, Sparkles, ExternalLink, Check } from 'lucide-react';

export default function VideoModal({ onClose }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [testUrl, setTestUrl] = useState('');
  const [activeEmbed, setActiveEmbed] = useState(videoIntro.embedUrl || '');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleApplyTestUrl = (e) => {
    e.preventDefault();
    if (!testUrl.trim()) return;

    let formatted = testUrl.trim();
    // Auto-convert standard youtube watch URLs to embed URLs if needed
    if (formatted.includes('youtube.com/watch?v=')) {
      const videoId = formatted.split('v=')[1]?.split('&')[0];
      if (videoId) formatted = `https://www.youtube.com/embed/${videoId}`;
    } else if (formatted.includes('youtu.be/')) {
      const videoId = formatted.split('youtu.be/')[1]?.split('?')[0];
      if (videoId) formatted = `https://www.youtube.com/embed/${videoId}`;
    }

    setActiveEmbed(formatted);
  };

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
                    Video Slot Ready for Husain
                  </h4>

                  <p className="text-xs sm:text-sm text-neutral-300 mb-6 leading-relaxed">
                    "{videoIntro.placeholderQuote}"
                  </p>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-left mb-4">
                    <p className="text-xs text-neutral-300 font-mono leading-relaxed">
                      <span className="text-brand font-bold">✨ How to add your video:</span><br />
                      1. Record your 60-second intro video.<br />
                      2. Upload to YouTube, Vimeo, or Loom (or save in <code className="text-white">public/assets/</code>).<br />
                      3. Paste the URL into <code className="text-brand">src/data/portfolioData.js</code> in <code className="text-white">embedUrl</code>.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Interactive Preview Link Tester */}
          <div className="mt-6 p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
            <form onSubmit={handleApplyTestUrl} className="flex flex-col sm:flex-row items-center gap-3">
              <span className="text-xs font-mono text-neutral-400 shrink-0">
                Preview any video link live:
              </span>
              <input
                type="text"
                placeholder="Paste YouTube or video embed URL here..."
                value={testUrl}
                onChange={(e) => setTestUrl(e.target.value)}
                className="flex-1 w-full px-3.5 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:border-brand outline-none"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-brand hover:bg-brand-600 text-white text-xs font-mono font-semibold transition-colors shrink-0"
              >
                Test Player
              </button>
            </form>
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
