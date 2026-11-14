import React, { useState, useEffect } from 'react';
import { leadershipData } from '../data/interactiveExperiencesData';
import { 
  ArrowLeft, 
  Award, 
  ShieldCheck, 
  GraduationCap, 
  Calendar, 
  CheckCircle2, 
  Maximize2, 
  X, 
  FileCheck, 
  Sparkles, 
  ArrowUpRight,
  Image as ImageIcon,
  Check
} from 'lucide-react';

function DynamicMediaFrame({ slot, type, onSelect }) {
  const candidates = [
    slot.filePath,
    slot.filePath?.replace('.jpg', '.jpeg'),
    slot.filePath?.replace('.jpg', '.png'),
    slot.filePath + '.jpeg'
  ].filter(Boolean);

  const [idx, setIdx] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [failedAll, setFailedAll] = useState(false);

  const handleError = () => {
    if (idx < candidates.length - 1) {
      setIdx(prev => prev + 1);
    } else {
      setFailedAll(true);
    }
  };

  const currentSrc = candidates[idx];

  return (
    <div 
      onClick={() => onSelect({ type, ...slot, resolvedSrc: loaded ? currentSrc : null })}
      className="group p-5 rounded-2xl bg-white border border-neutral-200 shadow-subtle hover:border-brand/60 cursor-pointer transition-all"
      role="button"
      tabIndex={0}
    >
      <div className="flex items-center justify-between mb-2">
        <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded font-semibold ${
          type === 'Certificate' 
            ? 'bg-brand-50 text-brand-700 border border-brand-200' 
            : 'bg-neutral-100 text-ink-600'
        }`}>
          {type === 'Certificate' ? 'COMMENDATION / CERTIFICATE' : 'DUTY PHOTOGRAPH'}
        </span>
        <div className="flex items-center gap-1.5">
          {loaded && (
            <span className="flex items-center gap-1 text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
              <Check className="w-2.5 h-2.5" />
              <span>LOADED</span>
            </span>
          )}
          <Maximize2 className="w-3.5 h-3.5 text-ink-400 group-hover:text-brand transition-colors" />
        </div>
      </div>

      <div className="relative aspect-[16/9] rounded-xl bg-neutral-900 border border-neutral-700/80 mb-3 overflow-hidden group-hover:scale-[1.01] transition-transform flex items-center justify-center text-center">
        {!failedAll && (
          <img
            src={currentSrc}
            alt={slot.title}
            onLoad={() => setLoaded(true)}
            onError={handleError}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Fallback Graphic if no image is uploaded yet */}
        {!loaded && (
          <div className="p-4 flex flex-col items-center justify-center">
            {type === 'Certificate' ? (
              <Award className="w-8 h-8 text-brand mb-2" />
            ) : (
              <ImageIcon className="w-8 h-8 text-neutral-400 group-hover:text-brand transition-colors mb-2" />
            )}
            <span className="font-display font-bold text-xs text-white">
              {slot.title}
            </span>
            <span className="text-[10px] font-mono text-neutral-400 mt-1">
              Click to view details
            </span>
          </div>
        )}
      </div>

      <p className="text-xs text-ink-500 leading-tight">
        {slot.caption}
      </p>
    </div>
  );
}

export default function LeadershipPage({ onBack }) {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white text-ink-950 font-sans selection:bg-brand selection:text-white">
      {/* Sticky Top Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-neutral-200/80 shadow-subtle py-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-xs font-semibold uppercase tracking-wider text-ink-900 border border-neutral-200 transition-all active:scale-95 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform text-brand" />
            <span>Back to Portfolio</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-ink-500">
            <span>Husain Shakruwala</span>
            <span>/</span>
            <span>Beyond Work</span>
            <span>/</span>
            <span className="text-brand font-semibold">Leadership Journey</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-brand-50 text-brand-700 font-bold border border-brand-200">
              CLASS 5 → CLASS 12
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-16 pb-16 bg-gradient-to-b from-neutral-50 to-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 mb-6">
            <Award className="w-3.5 h-3.5 text-brand" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-700">
              {leadershipData.badge}
            </span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-ink-950 tracking-tight leading-[1.05] mb-6 max-w-4xl">
            {leadershipData.title}
          </h1>

          <p className="font-display text-xl sm:text-2xl text-ink-700 font-medium max-w-3xl leading-relaxed mb-8">
            "{leadershipData.subtitle}"
          </p>

          <p className="text-sm sm:text-base text-ink-600 max-w-2xl leading-relaxed mb-10 font-normal">
            {leadershipData.overview}
          </p>

          {/* Quick Timeline Stepper */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-200">
            <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-subtle flex items-center gap-4">
              <span className="font-display font-extrabold text-2xl text-brand">12</span>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-ink-400 block">Class 12</span>
                <span className="font-display font-bold text-sm text-ink-950">Deputy Head Boy</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-subtle flex items-center gap-4">
              <span className="font-display font-extrabold text-2xl text-brand">11</span>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-ink-400 block">Class 11</span>
                <span className="font-display font-bold text-sm text-ink-950">House Captain</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-subtle flex items-center gap-4">
              <span className="font-display font-extrabold text-2xl text-brand">05</span>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-ink-400 block">Class 5</span>
                <span className="font-display font-bold text-sm text-ink-950">School Prefect</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 py-20 space-y-24">
        {/* Chronological Milestone Cards */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 pb-4 border-b border-neutral-200">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand font-bold block mb-1">
                CHRONOLOGICAL RECORD
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-950">
                School Leadership Timeline
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-ink-500 font-normal">
              Each milestone includes role scope, duty photographs, and official commendations
            </p>
          </div>

          <div className="space-y-16">
            {leadershipData.milestones.map((m) => (
              <div 
                key={m.id}
                className="p-8 sm:p-12 rounded-3xl bg-neutral-50 border border-neutral-200/90 shadow-sm hover:shadow-card transition-all duration-300 relative overflow-hidden"
              >
                {/* Top Badge strip */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-200/80">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-extrabold px-3 py-1 rounded bg-ink-950 text-white">
                      {m.classGrade}
                    </span>
                    <span className="font-mono text-xs font-bold text-brand bg-white px-3 py-1 rounded border border-neutral-200">
                      {m.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-ink-500">
                    <Calendar className="w-3.5 h-3.5 text-brand" />
                    <span>{m.period}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  {/* Left Column: Role Details */}
                  <div className="lg:col-span-7">
                    <h3 className="font-display font-bold text-3xl sm:text-4xl text-ink-950 mb-2">
                      {m.title}
                    </h3>
                    <p className="text-xs font-mono text-ink-400 uppercase tracking-wider mb-4">
                      {m.tier}
                    </p>

                    <p className="text-sm sm:text-base text-ink-600 leading-relaxed mb-6 font-normal">
                      {m.description}
                    </p>

                    <div className="space-y-3 pt-4 border-t border-neutral-200">
                      <span className="text-xs font-mono uppercase tracking-wider text-ink-400 font-bold block mb-1">
                        Core Responsibilities & Stewardship
                      </span>
                      {m.responsibilities.map((r, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-700 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Photo & Certificate Dedicated Slots */}
                  <div className="lg:col-span-5 space-y-4">
                    {/* Photograph Frame */}
                    <DynamicMediaFrame
                      slot={m.photoSlot}
                      type="Photo"
                      onSelect={(item) => setSelectedItem(item)}
                    />

                    {/* Certificate / Appointment Frame */}
                    <DynamicMediaFrame
                      slot={m.certificateSlot}
                      type="Certificate"
                      onSelect={(item) => setSelectedItem(item)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Simple instructions banner */}
          <div className="mt-8 p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-ink-600 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>📜 <strong>Certificate Drop-in:</strong> Place your scans or photos in <code className="text-brand font-mono">public/assets/leadership/</code> and they will appear automatically.</span>
            <span className="text-brand font-mono text-[11px] font-semibold">Instant Detection</span>
          </div>
        </section>

        {/* Foundational Principles Gained */}
        <section className="p-8 sm:p-12 rounded-3xl bg-neutral-900 text-white border border-neutral-800 shadow-elevated">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-brand font-bold block mb-2">
              THE ENDURING DIVIDENDS
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              What School Leadership Taught Me
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2">
              The principles I rely on every single day in business development, technical problem-solving, and team collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {leadershipData.principlesGained.map((p, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-extrabold text-brand bg-white/10 px-2.5 py-1 rounded inline-block mb-4">
                    RULE {p.number}
                  </span>
                  <h4 className="font-display font-bold text-base text-white mb-2">
                    {p.title}
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Back Button & Action */}
        <section className="pt-12 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={onBack}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-xs font-semibold uppercase tracking-wider text-ink-900 border border-neutral-200 transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-brand" />
            <span>Return to Portfolio Homepage</span>
          </button>

          <a
            href="#contact"
            onClick={onBack}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand hover:bg-brand-600 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
          >
            <span>Connect with Husain</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </section>
      </main>

      {/* Lightbox Modal for Photo / Certificate */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-w-3xl w-full bg-neutral-950 p-6 rounded-3xl border border-neutral-800 text-white" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-brand font-bold uppercase tracking-wider">
                {selectedItem.type}: {selectedItem.title}
              </span>
              <button 
                onClick={() => setSelectedItem(null)}
                className="p-1.5 rounded-full bg-neutral-900 text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/10] rounded-2xl bg-black border border-neutral-800 flex items-center justify-center mb-4 p-4 overflow-hidden">
              {selectedItem.resolvedSrc ? (
                <img
                  src={selectedItem.resolvedSrc}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-center p-8">
                  <Award className="w-14 h-14 text-brand mx-auto mb-3 opacity-80" />
                  <h4 className="font-display font-bold text-lg text-white mb-1">
                    {selectedItem.title}
                  </h4>
                  <p className="text-xs text-neutral-400 max-w-md mx-auto">
                    {selectedItem.caption}
                  </p>
                </div>
              )}
            </div>

            <p className="text-xs font-mono text-neutral-400 text-center">
              {selectedItem.title} • {selectedItem.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
