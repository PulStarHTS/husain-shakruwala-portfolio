import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowDownRight, Send, FileText, Sparkles, MapPin, Briefcase, GraduationCap, CheckCircle } from 'lucide-react';

export default function Hero({ onOpenResume }) {
  const possiblePaths = [
    '/assets/profile-portrait.jpg',
    '/assets/profile-portrait.jpeg',
    '/assets/profile-portrait.jpg.jpeg',
    '/assets/profile-portrait.png'
  ];

  const [pathIndex, setPathIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFailedAll, setImageFailedAll] = useState(false);

  const handleImageError = () => {
    if (pathIndex < possiblePaths.length - 1) {
      setPathIndex(prev => prev + 1);
    } else {
      setImageFailedAll(true);
    }
  };

  const currentImageSrc = possiblePaths[pathIndex];

  return (
    <section className="relative pt-32 sm:pt-40 pb-20 md:pb-28 overflow-hidden bg-white">
      {/* Editorial background grid accent */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#0A0A0A 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 mb-8 animate-fadeIn">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand"></span>
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-700">
            {personalInfo.status}
          </span>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Monumental Typography & Introduction */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center">
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-ink-950 tracking-tighter leading-[0.95] mb-6">
              HUSAIN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink-950 via-ink-800 to-brand">
                SHAKRUWALA
              </span>
              <span className="text-brand">.</span>
            </h1>

            {/* Tagline */}
            <p className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-ink-800 tracking-tight mb-6">
              Building things<span className="text-brand">.</span> Connecting people<span className="text-brand">.</span> Exploring possibilities<span className="text-brand">.</span>
            </p>

            {/* Short Personal Introduction */}
            <p className="text-base sm:text-lg text-ink-600 leading-relaxed max-w-2xl mb-8 font-normal">
              {personalInfo.heroIntro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold tracking-wide text-white bg-ink-950 hover:bg-brand rounded-full transition-all duration-200 shadow-md hover:shadow-glow-orange active:scale-95 group"
              >
                <span>Explore My Work</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold tracking-wide text-ink-900 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300/80 rounded-full transition-all duration-200 active:scale-95"
              >
                <Send className="w-4 h-4 text-brand" />
                <span>Let's Connect</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold tracking-wide text-ink-700 hover:text-ink-950 hover:bg-neutral-100 border border-transparent hover:border-neutral-200 rounded-full transition-all duration-200 active:scale-95"
              >
                <FileText className="w-4 h-4 text-ink-500" />
                <span>Resume</span>
              </button>
            </div>

            {/* Metadata Pills / Quick Credentials */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-neutral-200/90 text-xs font-mono text-ink-600">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-50 border border-neutral-200">
                <GraduationCap className="w-3.5 h-3.5 text-brand" />
                <span>CS Undergrad</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-50 border border-neutral-200">
                <Briefcase className="w-3.5 h-3.5 text-brand" />
                <span>Talentick.ai BD Intern</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-50 border border-neutral-200">
                <Sparkles className="w-3.5 h-3.5 text-brand" />
                <span>0-to-1 Product Builder</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-50 border border-neutral-200">
                <MapPin className="w-3.5 h-3.5 text-brand" />
                <span>India (IST)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Portrait Frame / Showcase */}
          <div className="lg:col-span-5 xl:col-span-4 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md group">
              {/* Outer Decorative Glow Border */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand/20 via-neutral-200 to-brand/30 rounded-3xl blur-md opacity-60 group-hover:opacity-100 transition duration-500"></div>

              {/* Card Container */}
              <div className="relative bg-white rounded-2xl border border-neutral-200 shadow-elevated overflow-hidden p-3">
                {/* Visual Frame */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-neutral-900 flex flex-col justify-between p-6 border border-neutral-200/60">
                  
                  {/* Real Image Render with Fallback */}
                  {!imageFailedAll ? (
                    <img
                      src={currentImageSrc}
                      alt="Husain Shakruwala"
                      onLoad={() => setImageLoaded(true)}
                      onError={handleImageError}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    /* Stylized Silhouette Fallback if no file exists */
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-neutral-100 to-neutral-200">
                      <div className="relative w-44 h-44 rounded-full bg-white flex items-center justify-center border border-neutral-300 shadow-inner">
                        <span className="font-display font-black text-6xl text-ink-900 tracking-tighter select-none">
                          HS<span className="text-brand">.</span>
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Subtle vignette gradient so text and badges are readable without dimming facial features */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none"></div>

                  {/* Top Bar inside image */}
                  <div className="relative flex items-center justify-between z-10">
                    <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-white font-medium border border-white/20 shadow-sm">
                      Portrait
                    </span>
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand/90 backdrop-blur-sm text-white text-[10px] font-mono font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                      <span>ACTIVE</span>
                    </span>
                  </div>

                  {/* Bottom Portrait Caption */}
                  <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-white/40 shadow-lg">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-display font-bold text-ink-950 text-base">
                        Husain Shakruwala
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-50 text-brand-700 font-semibold border border-brand-200">
                        {personalInfo.monogram}
                      </span>
                    </div>
                    <p className="text-xs text-ink-600 font-medium">
                      Computer Science • Business Development • Builder
                    </p>
                    <div className="mt-2.5 pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] text-ink-500 font-mono">
                      <span>{personalInfo.domain}</span>
                      <span className="text-brand font-semibold">Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
