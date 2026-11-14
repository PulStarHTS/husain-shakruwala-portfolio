import React, { useState, useEffect, useRef } from 'react';
import { beyondWork, certificates } from '../data/portfolioData';
import { 
  BookOpen, 
  Lightbulb, 
  Compass, 
  Quote, 
  Headphones, 
  Sparkles, 
  ArrowRight,
  Mic,
  Award,
  ArrowUpRight,
  Users,
  Flame,
  ShieldCheck,
  Building2,
  CheckCircle2,
  Maximize2,
  ZoomIn,
  ZoomOut,
  X,
  FileText
} from 'lucide-react';

function CertificateCard({ cert, onOpenViewer }) {
  const [pathIndex, setPathIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFailedAll, setImageFailedAll] = useState(false);

  const handleImageError = () => {
    if (pathIndex < cert.filePaths.length - 1) {
      setPathIndex(prev => prev + 1);
    } else {
      setImageFailedAll(true);
    }
  };

  const currentPath = cert.filePaths[pathIndex];

  return (
    <div className="group rounded-3xl bg-white border border-neutral-200 shadow-sm hover:shadow-card hover:border-brand/60 transition-all duration-300 flex flex-col justify-between overflow-hidden p-6 sm:p-7">
      <div>
        {/* Document Frame / Thumbnail Preview */}
        <div 
          onClick={() => onOpenViewer(cert, currentPath, !imageFailedAll)}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/90 mb-6 flex items-center justify-center group-hover:border-brand/40 transition-colors cursor-pointer"
          role="button"
          tabIndex={0}
          title="Click to view full certificate"
        >
          {!imageFailedAll ? (
            <img
              src={currentPath}
              alt={cert.title}
              onLoad={() => setImageLoaded(true)}
              onError={handleImageError}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            /* Professional Architectural Placeholder */
            <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-b from-neutral-50 to-neutral-100/90 border border-dashed border-neutral-300 rounded-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-ink-500 font-semibold uppercase">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand" />
                  <span>Verified Record</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-50 text-brand-700 font-bold border border-brand-200">
                  MSB INDORE
                </span>
              </div>

              <div className="text-center py-2">
                <div className="w-10 h-10 mx-auto rounded-full bg-white border border-neutral-200 flex items-center justify-center text-brand mb-2 shadow-xs group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5 text-brand" />
                </div>
                <span className="font-display font-bold text-xs text-ink-900 block leading-tight px-2">
                  {cert.title}
                </span>
              </div>

              <div className="text-center">
                <span className="text-[10px] font-mono text-ink-400 bg-white/90 px-2 py-0.5 rounded border border-neutral-200 inline-block">
                  Awaiting: {cert.fileName}
                </span>
              </div>
            </div>
          )}

          {/* Hover Eye Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span className="px-4 py-2 rounded-full bg-white text-ink-950 font-display font-semibold text-xs flex items-center gap-1.5 shadow-lg">
              <Maximize2 className="w-3.5 h-3.5 text-brand" />
              <span>View Document</span>
            </span>
          </div>
        </div>

        {/* Institution & Eyebrow */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5 text-xs font-mono text-ink-600">
            <Building2 className="w-3.5 h-3.5 text-brand shrink-0" />
            <span className="font-semibold text-ink-900">{cert.institution}</span>
          </div>
          <span className="text-[10px] font-mono text-brand font-semibold px-2 py-0.5 rounded bg-brand-50 border border-brand-200 shrink-0">
            {cert.badge}
          </span>
        </div>

        {/* Document Title */}
        <h4 className="font-display font-bold text-xl text-ink-950 mb-3 group-hover:text-brand transition-colors">
          {cert.title}
        </h4>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-ink-600 leading-relaxed mb-5 font-normal">
          {cert.description}
        </p>

        {/* Key Points / Recognition Scope */}
        <div className="space-y-2 mb-6 pt-3 border-t border-neutral-100">
          <span className="text-[11px] font-mono uppercase tracking-wider text-ink-400 font-bold block mb-1">
            Official Recognition Scope
          </span>
          {cert.highlights.map((item, hIdx) => (
            <div key={hIdx} className="flex items-start gap-2 text-xs text-ink-700 leading-relaxed">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Actions */}
      <div className="pt-4 border-t border-neutral-100 flex items-center gap-2">
        <button
          onClick={() => onOpenViewer(cert, currentPath, !imageFailedAll)}
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-ink-950 hover:bg-brand text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm active:scale-95"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>View Certificate</span>
        </button>
        <a
          href={currentPath}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center p-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-ink-700 hover:text-ink-950 border border-neutral-200 transition-colors"
          title="Open file in new tab"
        >
          <ArrowUpRight className="w-4 h-4 text-ink-600" />
        </a>
      </div>
    </div>
  );
}

export default function BeyondWork({ onOpenHosting, onOpenLeadership }) {
  const [activeModalCert, setActiveModalCert] = useState(null);
  const [modalDocPath, setModalDocPath] = useState('');
  const [hasActiveImage, setHasActiveImage] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showCertificates, setShowCertificates] = useState(false);
  const certificatesRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalCert(null);
        setZoomLevel(1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenViewer = (cert, path, hasImage) => {
    setActiveModalCert(cert);
    setModalDocPath(path);
    setHasActiveImage(hasImage);
    setZoomLevel(1);
  };
  return (
    <section id="beyond-work" className="py-24 md:py-32 bg-neutral-50/80 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 mb-3 shadow-subtle">
              <Compass className="w-3.5 h-3.5 text-brand" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-700">
                04 / BEYOND WORK & PERSPECTIVES
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-ink-950 tracking-tight">
              Life Beyond The Resume<span className="text-brand">.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-ink-600 max-w-md font-normal leading-relaxed">
            {beyondWork.subtitle}
          </p>
        </div>

        {/* NEW INTERACTIVE FEATURE CARDS: Hosting & Stage + School Leadership */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-neutral-200">
            <span className="text-xs font-mono uppercase tracking-widest text-brand font-bold">
              FEATURED INTERACTIVE CHRONICLES
            </span>
            <span className="text-xs font-mono text-ink-400">
              Click either card to open full experience
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Experience Card 1: Hosting & Stage */}
            <div 
              onClick={onOpenHosting}
              className="group relative rounded-3xl bg-white p-8 sm:p-10 border border-neutral-200 shadow-sm hover:shadow-card hover:border-brand/70 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
              role="button"
              tabIndex={0}
            >
              {/* Subtle Ambient Glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-brand/5 rounded-full blur-2xl group-hover:bg-brand/10 transition-colors"></div>

              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200">
                    <Mic className="w-3.5 h-3.5 text-brand" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-700">
                      HOSTING & STAGE
                    </span>
                  </div>
                  <span className="font-mono text-xs text-ink-700 font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 border border-neutral-200 flex items-center gap-1">
                    <Users className="w-3 h-3 text-brand" />
                    12,000+ AUDIENCE
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink-950 mb-3 group-hover:text-brand transition-colors">
                  "The Stage Is Another Office."
                </h3>

                <p className="text-sm sm:text-base text-ink-600 leading-relaxed mb-6 font-normal">
                  "From intimate gatherings to audiences of 12,000+. I enjoy being where the energy is."
                </p>

                {/* Quick Highlights Strip */}
                <div className="grid grid-cols-3 gap-2 py-4 border-y border-neutral-100 text-center mb-6">
                  <div className="p-2 rounded-xl bg-neutral-50">
                    <span className="font-display font-bold text-sm text-ink-950 block">12,000+</span>
                    <span className="text-[10px] font-mono text-ink-400">Peak Crowd</span>
                  </div>
                  <div className="p-2 rounded-xl bg-neutral-50">
                    <span className="font-display font-bold text-sm text-ink-950 block">Game Shows</span>
                    <span className="text-[10px] font-mono text-ink-400">Live Emcee</span>
                  </div>
                  <div className="p-2 rounded-xl bg-neutral-50">
                    <span className="font-display font-bold text-sm text-ink-950 block">Public Speaking</span>
                    <span className="text-[10px] font-mono text-ink-400">Audience Flow</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-ink-500 group-hover:text-ink-950 transition-colors">
                  Open Gallery & Clips Archive
                </span>
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink-950 group-hover:bg-brand text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm">
                  <span>Explore Stage</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Experience Card 2: Certificates & Recognition */}
            <div 
              onClick={() => {
                if (!showCertificates) {
                  setShowCertificates(true);
                  setTimeout(() => {
                    certificatesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 120);
                } else {
                  setShowCertificates(false);
                }
              }}
              className="group relative rounded-3xl bg-white p-8 sm:p-10 border border-neutral-200 shadow-sm hover:shadow-card hover:border-brand/70 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
              role="button"
              tabIndex={0}
            >
              {/* Subtle Ambient Glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-brand/5 rounded-full blur-2xl group-hover:bg-brand/10 transition-colors"></div>

              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-700">
                      OFFICIAL CREDENTIALS
                    </span>
                  </div>
                  <span className="font-mono text-xs text-brand font-bold px-2.5 py-0.5 rounded-full bg-brand-50 border border-brand-200">
                    MSB INDORE
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink-950 mb-3 group-hover:text-brand transition-colors">
                  Certificates & Recognition<span className="text-brand">.</span>
                </h3>

                <p className="text-sm sm:text-base text-ink-600 leading-relaxed mb-6 font-normal">
                  Official credentials, appointments, and principal endorsement issued by MSB Educational Institute, Indore.
                </p>

                {/* Quick Highlights Strip */}
                <div className="grid grid-cols-3 gap-2 py-4 border-y border-neutral-100 text-center mb-6">
                  <div className="p-2 rounded-xl bg-neutral-50">
                    <span className="font-display font-bold text-sm text-ink-950 block">Leadership</span>
                    <span className="text-[10px] font-mono text-ink-400">Class 12, 11, 5</span>
                  </div>
                  <div className="p-2 rounded-xl bg-neutral-50">
                    <span className="font-display font-bold text-sm text-ink-950 block">Model UN</span>
                    <span className="text-[10px] font-mono text-ink-400">Asst. Director</span>
                  </div>
                  <div className="p-2 rounded-xl bg-neutral-50">
                    <span className="font-display font-bold text-sm text-ink-950 block">Principal Rec</span>
                    <span className="text-[10px] font-mono text-ink-400">Official Letter</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-ink-500 group-hover:text-ink-950 transition-colors">
                  {showCertificates ? 'Hide Document Grid' : 'Verified School Records'}
                </span>
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink-950 group-hover:bg-brand text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm">
                  <span>{showCertificates ? 'CLOSE' : 'EXPLORE CERTIFICATES'}</span>
                  {showCertificates ? (
                    <X className="w-3.5 h-3.5" />
                  ) : (
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CONDITIONAL SECTION: Certificates & Recognition (Revealed only when user clicks EXPLORE CERTIFICATES) */}
        {showCertificates && (
          <div ref={certificatesRef} className="mb-20 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 pb-4 border-b border-neutral-200">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 mb-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-700">
                    OFFICIAL CREDENTIALS
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-ink-950 tracking-tight">
                  Certificates & Recognition<span className="text-brand">.</span>
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-xs sm:text-sm text-ink-500 max-w-md font-normal leading-relaxed hidden md:block">
                  Official credentials, appointments, and principal endorsement issued by MSB Educational Institute, Indore. Click any document to view in the high-resolution reader.
                </p>
                <button
                  onClick={() => setShowCertificates(false)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-xs font-mono font-semibold text-ink-800 border border-neutral-200 transition-colors ml-auto active:scale-95"
                  title="Close Certificates Section"
                >
                  <X className="w-3.5 h-3.5 text-brand" />
                  <span>Close Section</span>
                </button>
              </div>
            </div>

            {/* Responsive 3-Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert) => (
                <CertificateCard
                  key={cert.id}
                  cert={cert}
                  onOpenViewer={handleOpenViewer}
                />
              ))}
            </div>

            {/* Bottom Close Bar */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => {
                  setShowCertificates(false);
                  const el = document.getElementById('beyond-work');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-xs font-mono font-semibold text-ink-700 border border-neutral-200 transition-colors"
              >
                <X className="w-3.5 h-3.5 text-brand" />
                <span>Hide Certificates & Return to Perspectives</span>
              </button>
            </div>
          </div>
        )}

        {/* Bento Grid: Intellectual Perspectives & Operating Convictions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Bento Item 1: Core Operating Principles (Spans 6 cols on lg) */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-neutral-100">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-brand">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-ink-950">
                    Operating Principles & Convictions
                  </h3>
                  <p className="text-xs text-ink-400">
                    Rules I return to when making critical decisions
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {beyondWork.principles.map((p, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-200/80">
                    <span className="font-mono text-sm font-extrabold text-brand bg-white px-2.5 py-1 rounded border border-neutral-200 shrink-0">
                      {p.rule}
                    </span>
                    <div>
                      <h4 className="font-display font-bold text-sm text-ink-950 mb-1">
                        {p.title}
                      </h4>
                      <p className="text-xs text-ink-600 leading-relaxed font-normal">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-ink-500">
              <span>Execution over theory</span>
              <span className="text-brand font-medium">Standards that compound</span>
            </div>
          </div>

          {/* Bento Item 2: The Bookshelf / Currently Reading (Spans 6 cols on lg) */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-brand">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-ink-950">
                      The Bookshelf
                    </h3>
                    <p className="text-xs text-ink-400">
                      Books that continually re-frame my thinking
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-ink-400 font-medium">
                  SHELF
                </span>
              </div>

              <div className="space-y-3.5">
                {beyondWork.readings.map((book, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-neutral-50 hover:bg-brand-50/50 border border-neutral-200/80 hover:border-brand/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-display font-bold text-sm text-ink-950">
                        {book.title}
                      </span>
                      <span className="text-xs font-mono text-brand font-medium">
                        {book.author}
                      </span>
                    </div>
                    <p className="text-xs text-ink-500 leading-normal">
                      {book.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-ink-500">
              <span>Always reading</span>
              <span className="text-brand font-medium">Have a recommendation? Send it over</span>
            </div>
          </div>

          {/* Bento Item 3: Personal Quote & Flow (Spans full width 12 cols on lg) */}
          <div className="lg:col-span-12 bg-gradient-to-br from-ink-950 via-neutral-900 to-black p-6 sm:p-8 rounded-3xl text-white shadow-elevated border border-neutral-800">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <Quote className="w-6 h-6 text-brand" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    CORE INSPIRATION
                  </span>
                </div>
                <p className="font-display text-base sm:text-lg md:text-xl font-medium leading-relaxed text-neutral-200 italic mb-3">
                  {beyondWork.quote}
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-sm text-white">
                    {beyondWork.quoteAuthor}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">
                    — Words to build by
                  </span>
                </div>
              </div>

              {/* Soundtrack / Focus mode badge */}
              <div className="w-full md:w-auto shrink-0 p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-brand/20 border border-brand/40 flex items-center justify-center text-brand">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-white text-xs font-display font-bold block">Focus & Momentum</span>
                    <span className="text-neutral-400 font-mono text-[11px]">Deep Focus Beats & Tech Podcasts</span>
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse ml-auto sm:ml-4"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Zoomable Document Modal */}
      {activeModalCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md animate-fadeIn"
          onClick={() => { setActiveModalCert(null); setZoomLevel(1); }}
        >
          <div 
            className="relative max-w-5xl w-full bg-neutral-950 rounded-3xl border border-neutral-800 text-white flex flex-col max-h-[94vh] overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5 border-b border-neutral-800 bg-neutral-950/90">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand/10 border border-brand/30 flex items-center justify-center text-brand">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-brand font-semibold uppercase tracking-wider block">
                    {activeModalCert.institution}
                  </span>
                  <h3 className="font-display font-bold text-base sm:text-lg text-white">
                    {activeModalCert.title}
                  </h3>
                </div>
              </div>

              {/* Zoom & Action Controls */}
              <div className="flex items-center gap-2">
                {/* Zoom Out */}
                <button
                  onClick={() => setZoomLevel(prev => Math.max(0.75, Math.round((prev - 0.25) * 100) / 100))}
                  disabled={zoomLevel <= 0.75}
                  className="p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 disabled:opacity-40 transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>

                {/* Current Zoom % & Reset */}
                <button
                  onClick={() => setZoomLevel(1)}
                  className="px-3 py-1.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-xs font-mono text-neutral-300 hover:text-white border border-neutral-800 transition-colors"
                  title="Reset Zoom to 100%"
                >
                  {Math.round(zoomLevel * 100)}%
                </button>

                {/* Zoom In */}
                <button
                  onClick={() => setZoomLevel(prev => Math.min(2.5, Math.round((prev + 0.25) * 100) / 100))}
                  disabled={zoomLevel >= 2.5}
                  className="p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 disabled:opacity-40 transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>

                {/* Open in New Tab */}
                <a
                  href={modalDocPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors ml-1"
                  title="Open original file in new browser tab"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                {/* Close Modal */}
                <button
                  onClick={() => { setActiveModalCert(null); setZoomLevel(1); }}
                  className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white ml-2 transition-colors"
                  title="Close Viewer (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Main Document Canvas (Scrollable & Zoomable) */}
            <div className="relative flex-1 overflow-auto p-4 sm:p-8 flex items-center justify-center bg-neutral-900/60 min-h-[50vh]">
              {hasActiveImage ? (
                <div 
                  className="transition-transform duration-200 origin-center max-w-full"
                  style={{ transform: `scale(${zoomLevel})` }}
                >
                  <img 
                    src={modalDocPath} 
                    alt={activeModalCert.title}
                    className="max-h-[72vh] w-auto object-contain rounded-xl shadow-2xl border border-neutral-800 bg-white"
                  />
                </div>
              ) : (
                /* High-End Architectural Placeholder when file scan is awaiting upload */
                <div className="max-w-xl w-full p-8 rounded-2xl bg-neutral-950 border border-neutral-800 text-center animate-fadeIn">
                  <div className="w-16 h-16 mx-auto rounded-full bg-brand/10 border border-brand/30 flex items-center justify-center text-brand mb-4">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-mono text-brand font-semibold uppercase tracking-widest block mb-1">
                    MSB EDUCATIONAL INSTITUTE, INDORE
                  </span>
                  <h4 className="font-display font-bold text-2xl text-white mb-2">
                    {activeModalCert.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-400 mb-6 max-w-md mx-auto leading-relaxed">
                    {activeModalCert.description}
                  </p>

                  <div className="text-left bg-neutral-900/90 p-5 rounded-2xl border border-neutral-800 mb-6 space-y-2.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-brand font-bold block mb-1">
                      Official Document Scope & Highlights
                    </span>
                    {activeModalCert.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-900/70 border border-dashed border-neutral-700 text-xs font-mono text-neutral-400">
                    <span className="text-white font-semibold block mb-1">Awaiting Original Certificate Scan</span>
                    <span>To display your actual certificate scan, place the file in:</span>
                    <code className="text-brand block mt-1 font-bold">public/assets/certificates/{activeModalCert.fileName}</code>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer Info */}
            <div className="p-3.5 sm:p-4 border-t border-neutral-800 bg-neutral-950 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Issuing Authority: MSB Educational Institute, Indore</span>
              </div>
              <span className="text-brand font-semibold">Document: {activeModalCert.fileName}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
