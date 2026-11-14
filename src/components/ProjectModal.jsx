import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowUpRight, Cpu, Layers, Target, ShieldCheck } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/70 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      {/* Background click to close */}
      <div 
        className="absolute inset-0" 
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-y-auto z-10 flex flex-col">
        {/* Sticky Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md p-6 border-b border-neutral-200 flex items-center justify-between z-20">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-brand-50 text-brand-700 font-bold border border-brand-200">
                {project.category}
              </span>
              <span className="text-xs font-mono text-ink-400">
                • {project.status}
              </span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-ink-950">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-ink-700 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Subtitle / Tagline */}
          <p className="font-display text-lg text-brand font-medium">
            {project.tagline}
          </p>

          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-ink-400 font-semibold mb-2">
              Executive Overview
            </h4>
            <p className="text-sm sm:text-base text-ink-700 leading-relaxed font-normal">
              {project.overview}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
              <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" />
                The Core Friction
              </span>
              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-brand-50/50 border border-brand-200">
              <span className="text-xs font-mono font-bold text-brand uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                The Strategic Solution
              </span>
              <p className="text-xs sm:text-sm text-ink-800 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Role & Strategic Ownership */}
          <div className="p-5 rounded-2xl bg-neutral-900 text-white border border-neutral-800">
            <span className="text-xs font-mono uppercase tracking-widest text-brand font-bold block mb-1">
              MY ROLE & OWNERSHIP
            </span>
            <p className="font-display font-bold text-base text-white">
              {project.role}
            </p>
          </div>

          {/* Key Milestones & Highlights */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-ink-400 font-semibold mb-3">
              Key Deliverables & Architectural Insights
            </h4>
            <div className="space-y-2.5">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech & Domain Badges */}
          <div className="pt-4 border-t border-neutral-200">
            <h4 className="text-xs font-mono uppercase tracking-wider text-ink-400 font-semibold mb-3">
              Disciplines & Keywords
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 rounded-full bg-neutral-100 text-xs font-mono text-ink-700 border border-neutral-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-neutral-50 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-500 font-mono">
            Want to learn more about the roadmap or discuss this project?
          </p>
          <a
            href="#contact"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-brand hover:bg-brand-600 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
          >
            <span>Inquire About {project.title}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
