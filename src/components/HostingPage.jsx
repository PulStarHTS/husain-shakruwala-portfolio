import React, { useState, useEffect } from 'react';
import { hostingData } from '../data/interactiveExperiencesData';
import { 
  ArrowLeft, 
  Mic, 
  Users, 
  Sparkles, 
  Maximize2, 
  X, 
  Calendar, 
  CheckCircle2, 
  Tv, 
  Image as ImageIcon,
  Flame,
  ArrowUpRight,
  Check,
  AlertCircle
} from 'lucide-react';

function DynamicEventImage({ event, onSelect }) {
  const { media, audienceSize, title } = event;
  const defaultSrc = media.coverImage;
  const fileName = defaultSrc?.split('/').pop() || '';
  const rawWithoutExt = fileName.replace('.jpg', '');
  const rawWithoutNumber = rawWithoutExt.replace(/^\d+-/, '');

  // Only check candidates specific to this event's image — NEVER duplicate other photos
  const candidates = [
    defaultSrc,
    `/assets/hosting/${rawWithoutExt}.jpeg`,
    `/assets/hosting/${rawWithoutExt}.jpg.jpeg`,
    `/assets/hosting/${rawWithoutNumber}.jpg`,
    `/assets/hosting/${rawWithoutNumber}.jpeg`,
    `/assets/hosting/${rawWithoutNumber}.jpg.jpeg`,
    ...(media.fallbacks || [])
  ];

  const uniqueCandidates = Array.from(new Set(candidates));

  const [idx, setIdx] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [failedAll, setFailedAll] = useState(false);

  const handleError = () => {
    if (idx < uniqueCandidates.length - 1) {
      setIdx(prev => prev + 1);
    } else {
      setFailedAll(true);
    }
  };

  const currentSrc = uniqueCandidates[idx];

  return (
    <div 
      onClick={() => {
        if (!failedAll) {
          onSelect({
            number: event.number,
            title: media.photoTitle || title,
            caption: media.caption || title,
            resolvedSrc: currentSrc,
            filePath: defaultSrc,
            category: event.category
          });
        }
      }}
      className={`relative aspect-[4/3] rounded-2xl bg-neutral-900 border border-neutral-800 text-white overflow-hidden shadow-elevated group cursor-pointer transition-all duration-300 hover:border-brand/70 hover:scale-[1.01]`}
      role="button"
      tabIndex={0}
      title="Click to view full photo in lightbox"
    >
      {!failedAll && currentSrc ? (
        <>
          <img
            src={currentSrc}
            alt={media.photoTitle || title}
            onLoad={() => setLoaded(true)}
            onError={handleError}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {/* Subtle gradient overlay to keep badges and text readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/25 pointer-events-none"></div>
        </>
      ) : null}

      {/* Fallback Missing File Graphic */}
      {failedAll && (
        <div className="absolute inset-0 p-5 flex flex-col items-center justify-center text-center bg-neutral-950/95 border border-red-500/30">
          <AlertCircle className="w-8 h-8 text-red-400 mb-2" />
          <span className="font-display font-bold text-xs text-white">Missing Image File</span>
          <span className="font-mono text-[10px] text-red-300 mt-1 break-all px-2 py-1 bg-red-950/40 rounded border border-red-900/50">
            {fileName}
          </span>
          <span className="font-mono text-[9px] text-neutral-400 mt-2">
            Place in public/assets/hosting/
          </span>
        </div>
      )}

      {/* Top Overlay Badge */}
      <div className="relative z-10 p-4 flex items-center justify-between">
        <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-white font-semibold border border-white/15">
          {media.badge}
        </span>
        <div className="flex items-center gap-1.5">
          {loaded && (
            <span className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-brand/90 backdrop-blur-md text-white font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              <span>VERIFIED PHOTO</span>
            </span>
          )}
          <Maximize2 className="w-3.5 h-3.5 text-white/70 group-hover:text-white transition-colors" />
        </div>
      </div>

      {/* Bottom Overlay Info */}
      <div className="absolute bottom-0 inset-x-0 p-4 z-10 flex items-center justify-between text-xs font-mono text-white/90">
        <span>{audienceSize}</span>
        <span className="text-brand font-semibold flex items-center gap-1">
          <span>Enlarge Photo</span>
          <ArrowUpRight className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
}

function DynamicGalleryItem({ photo, onSelect }) {
  // Only check candidates specific to this photo — NEVER silently duplicates other photos
  const fileName = photo.filePath.split('/').pop();
  const rawWithoutExt = fileName.replace('.jpg', '');
  const rawWithoutNumber = rawWithoutExt.replace(/^\d+-/, '');

  const candidates = [
    photo.filePath,
    `/assets/hosting/${rawWithoutExt}.jpeg`,
    `/assets/hosting/${rawWithoutExt}.jpg.jpeg`,
    `/assets/hosting/${rawWithoutNumber}.jpg`,
    `/assets/hosting/${rawWithoutNumber}.jpeg`,
    `/assets/hosting/${rawWithoutNumber}.jpg.jpeg`,
    ...(photo.fallbacks || [])
  ];

  const uniqueCandidates = Array.from(new Set(candidates));

  const [idx, setIdx] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [failedAll, setFailedAll] = useState(false);

  const handleError = () => {
    if (idx < uniqueCandidates.length - 1) {
      setIdx(prev => prev + 1);
    } else {
      setFailedAll(true);
    }
  };

  const currentSrc = uniqueCandidates[idx];

  return (
    <div 
      onClick={() => {
        if (!failedAll) {
          onSelect({ ...photo, resolvedSrc: currentSrc });
        }
      }}
      className={`group relative rounded-2xl bg-neutral-900 p-5 flex flex-col justify-between aspect-[3/4] border text-white transition-all duration-300 shadow-subtle overflow-hidden ${
        failedAll 
          ? 'border-red-500/40 cursor-default' 
          : 'border-neutral-800 cursor-pointer hover:border-brand/70 hover:scale-[1.02]'
      }`}
      role="button"
      tabIndex={0}
      title="Click to view full photo in lightbox"
    >
      {!failedAll ? (
        <>
          <img
            src={currentSrc}
            alt={photo.title}
            onLoad={() => setLoaded(true)}
            onError={handleError}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 pointer-events-none"></div>
        </>
      ) : (
        /* Missing file notice per instruction #13 */
        <div className="absolute inset-0 p-5 flex flex-col items-center justify-center text-center bg-neutral-950/95 border border-red-500/30">
          <AlertCircle className="w-8 h-8 text-red-400 mb-2" />
          <span className="font-display font-bold text-xs text-white">Missing Image File</span>
          <span className="font-mono text-[10px] text-red-300 mt-1 break-all px-2 py-1 bg-red-950/40 rounded border border-red-900/50">
            {fileName}
          </span>
          <span className="font-mono text-[9px] text-neutral-400 mt-3 leading-tight">
            Place this exact file in<br /><code className="text-brand">public/assets/hosting/</code>
          </span>
        </div>
      )}

      {/* Top tag */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/75 backdrop-blur-md text-brand font-bold border border-brand/30">
          IMAGE {photo.number} // {photo.category}
        </span>
        {!failedAll && (
          <Maximize2 className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
        )}
      </div>

      {/* Bottom caption */}
      <div className="relative z-10 bg-black/80 backdrop-blur-md p-3.5 rounded-xl border border-white/10 mt-auto">
        <div className="flex items-center justify-between mb-0.5">
          <h5 className="font-display font-bold text-xs text-white group-hover:text-brand transition-colors">
            {photo.title}
          </h5>
          <span className="font-mono text-[9px] text-brand font-semibold">
            {photo.number}
          </span>
        </div>
        <p className="text-[11px] text-neutral-300 font-normal leading-tight">
          {photo.caption}
        </p>
      </div>
    </div>
  );
}

export default function HostingPage({ onBack }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

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
            <span className="text-brand font-semibold">Hosting & Stage</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-brand-50 text-brand-700 font-bold border border-brand-200">
              7 PHOTOGRAPHS (3 + 4)
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-16 pb-16 bg-gradient-to-b from-neutral-50 to-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 mb-6">
            <Mic className="w-3.5 h-3.5 text-brand" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-700">
              {hostingData.badge}
            </span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-ink-950 tracking-tight leading-[1.05] mb-6 max-w-4xl">
            {hostingData.title}
          </h1>

          <p className="font-display text-xl sm:text-2xl text-ink-700 font-medium max-w-3xl leading-relaxed mb-10">
            "{hostingData.subtitle}"
          </p>

          <p className="text-sm sm:text-base text-ink-600 max-w-2xl leading-relaxed mb-12 font-normal">
            {hostingData.overview}
          </p>

          {/* Key Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-neutral-200">
            {hostingData.keyStats.map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-subtle">
                <span className="text-xs font-mono text-ink-400 uppercase tracking-wider block mb-1">
                  {stat.label}
                </span>
                <span className="font-display font-black text-3xl sm:text-4xl text-ink-950 block mb-1">
                  {stat.value}
                </span>
                <span className="text-xs text-brand font-medium">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 py-20 space-y-24">
        {/* SECTION 1 — Upper section (3 existing boxes -> Images 01, 02, 03) */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 pb-4 border-b border-neutral-200">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand font-bold block mb-1">
                STAGE PORTFOLIO (IMAGES 01, 02, 03)
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-950">
                Event Formats & Highlights
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-ink-500 font-normal">
              3 featured stage engagements in chronological sequence • Click any photo to enlarge
            </p>
          </div>

          <div className="space-y-8">
            {hostingData.events.map((ev) => (
              <div 
                key={ev.id}
                className="p-8 sm:p-10 rounded-3xl bg-neutral-50 border border-neutral-200/90 shadow-sm hover:shadow-card hover:border-brand/40 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8">
                    <div className="flex flex-wrap items-center gap-2.5 mb-4">
                      <span className="font-mono text-xs font-bold text-brand bg-white px-2.5 py-1 rounded border border-neutral-200">
                        {ev.media.badge}
                      </span>
                      <span className="font-mono text-xs text-ink-500 px-2.5 py-1 rounded bg-neutral-200/60">
                        {ev.category}
                      </span>
                      <span className="font-mono text-xs text-ink-800 font-semibold px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {ev.audienceSize}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink-950 mb-2">
                      {ev.title}
                    </h3>
                    <p className="text-sm font-mono text-brand font-semibold mb-4">
                      Role: {ev.role}
                    </p>

                    <p className="text-sm sm:text-base text-ink-600 leading-relaxed mb-6 font-normal">
                      {ev.summary}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-neutral-200">
                      <span className="text-xs font-mono uppercase tracking-wider text-ink-400 font-bold block mb-2">
                        Key Dynamics & Execution
                      </span>
                      {ev.takeaways.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-700">
                          <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Real Visual Photo Frame (Box 1, 2, or 3) */}
                  <div className="lg:col-span-4">
                    <DynamicEventImage
                      event={ev}
                      onSelect={(selected) => setSelectedPhoto(selected)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2 — Photo Archive: Moments on the Stage (Exactly 4 existing boxes -> Images 04, 05, 06, 07) */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 pb-4 border-b border-neutral-200">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand font-bold block mb-1">
                PHOTO ARCHIVE (IMAGES 04, 05, 06, 07)
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-950">
                Moments on the Stage
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-ink-500 font-normal">
              4 dedicated archive cards in chronological sequence • Click any frame to view in high resolution
            </p>
          </div>

          {/* 4-card responsive gallery grid: 1 col mobile, 2 tablet, 4 desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hostingData.gallery.map((photo) => (
              <DynamicGalleryItem
                key={photo.id}
                photo={photo}
                onSelect={(selected) => setSelectedPhoto(selected)}
              />
            ))}
          </div>

          {/* Distribution breakdown banner */}
          <div className="mt-8 p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-ink-700 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
              <span className="font-semibold text-ink-900">7 Total Images (3 Upper Section + 4 Photo Archive)</span>
              <span className="text-ink-500 font-mono hidden sm:inline">• Images 01, 02, 03 above • Images 04, 05, 06, 07 below</span>
            </div>
            <span className="font-mono text-[11px] text-ink-500">
              public/assets/hosting/
            </span>
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
            <span>Discuss a Stage or Event Collaboration</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </section>
      </main>

      {/* Lightbox Photo Preview Modal (Displays full uncropped photograph) */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/95 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-neutral-950 p-6 sm:p-8 rounded-3xl border border-neutral-800 text-white flex flex-col max-h-[92vh] overflow-hidden" 
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-brand text-white font-extrabold">
                  {selectedPhoto.number}
                </span>
                <div>
                  <h4 className="font-display font-bold text-base sm:text-lg text-white">
                    {selectedPhoto.title}
                  </h4>
                  <span className="text-[11px] font-mono text-brand">
                    {selectedPhoto.category}
                  </span>
                </div>
              </div>

              <button 
                onClick={() => setSelectedPhoto(null)}
                className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Full-Size Image Container (uncropped, aspect-preserve) */}
            <div className="relative flex-1 min-h-[300px] flex items-center justify-center bg-black/70 rounded-2xl overflow-hidden border border-neutral-800/80 mb-4 p-2">
              {selectedPhoto.resolvedSrc ? (
                <img
                  src={selectedPhoto.resolvedSrc}
                  alt={selectedPhoto.title}
                  className="max-h-[68vh] max-w-full w-auto h-auto object-contain mx-auto rounded-lg shadow-2xl"
                />
              ) : (
                <div className="text-center p-6">
                  <ImageIcon className="w-12 h-12 text-brand mx-auto mb-2 opacity-80" />
                  <p className="text-xs text-neutral-400">
                    {selectedPhoto.caption}
                  </p>
                </div>
              )}
            </div>

            {/* Caption & Metadata Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 pt-2 border-t border-neutral-800/80 gap-2">
              <p className="text-neutral-300 font-normal">
                {selectedPhoto.caption}
              </p>
              <span className="font-mono text-[11px] text-neutral-500">
                {selectedPhoto.filePath.split('/').pop()}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
