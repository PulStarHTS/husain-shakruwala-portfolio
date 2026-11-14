import React from 'react';
import { experiences } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle, Sparkles, Building2, ArrowUpRight } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-neutral-50/70 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 mb-3 shadow-subtle">
              <Briefcase className="w-3.5 h-3.5 text-brand" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-700">
                02 / WORK HISTORY & TIMELINE
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-ink-950 tracking-tight">
              Professional Journey<span className="text-brand">.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-ink-600 max-w-md font-normal leading-relaxed">
            Progression from Content Writing and SEO to B2B Business Development—driving organic discovery, stakeholder outreach, and commercial growth.
          </p>
        </div>

        {/* Career Progression Flow Ribbon */}
        <div className="mb-14 p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-brand"></span>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-500">
              Career Trajectory & Growth Exposure
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="px-3 py-1.5 rounded-lg bg-neutral-100 text-ink-800 font-medium">
              1. Content Writing
            </span>
            <span className="text-brand font-bold">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-neutral-100 text-ink-800 font-medium">
              2. SEO & Organic Growth
            </span>
            <span className="text-brand font-bold">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-brand-50 border border-brand-200 text-brand-700 font-bold">
              3. Business Development
            </span>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-neutral-200 ml-4 md:ml-8 pl-6 md:pl-12 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] md:-left-[55px] top-1.5 flex items-center justify-center">
                {idx === 0 ? (
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-30"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-white border-4 border-brand"></span>
                  </span>
                ) : (
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-white border-4 border-neutral-400 group-hover:border-brand transition-colors"></span>
                )}
              </div>

              {/* Experience Card */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-neutral-200 shadow-sm hover:shadow-card hover:border-brand/40 transition-all duration-300">
                {/* Header Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-neutral-100">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-100 text-xs font-mono font-semibold text-ink-800">
                      <Building2 className="w-3.5 h-3.5 text-brand" />
                      {exp.company}
                    </span>
                    {(exp.product || exp.project) && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-50 text-xs font-mono font-bold text-brand-700 border border-brand-200">
                        <Sparkles className="w-3 h-3 text-brand" />
                        Product: {exp.product || exp.project}
                      </span>
                    )}
                    <span className="text-xs font-mono text-ink-500 uppercase tracking-wide">
                      {exp.type}
                    </span>
                  </div>

                  {exp.period && (
                    <div className="flex items-center gap-1.5 text-xs font-mono text-ink-500 bg-neutral-50 px-3 py-1 rounded-full border border-neutral-200">
                      <Calendar className="w-3 h-3 text-brand" />
                      <span>{exp.period}</span>
                    </div>
                  )}
                </div>

                {/* Role Title */}
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink-950 mb-3 group-hover:text-brand transition-colors">
                  {exp.role}
                </h3>

                {/* Overview Description */}
                <p className="text-sm sm:text-base text-ink-600 leading-relaxed mb-6 font-normal">
                  {exp.description}
                </p>

                {/* Responsibilities List */}
                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-ink-400 font-semibold">
                    Key Responsibilities
                  </h4>
                  {(exp.responsibilities || exp.achievements || []).map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-ink-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Badges */}
                <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-ink-400 mr-2">Skills:</span>
                  {exp.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-neutral-50 hover:bg-neutral-100 text-xs font-medium text-ink-700 border border-neutral-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Prospective Chapter Slot */}
          <div className="relative group">
            <div className="absolute -left-[31px] md:-left-[55px] top-1.5 flex items-center justify-center">
              <span className="inline-flex rounded-full h-4 w-4 bg-neutral-300 border-4 border-neutral-100"></span>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-neutral-50 to-white border border-dashed border-neutral-300 hover:border-brand/60 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs text-brand font-semibold uppercase tracking-wider block mb-1">
                    WHAT'S NEXT
                  </span>
                  <h4 className="font-display font-bold text-xl text-ink-950">
                    The Next High-Impact Chapter
                  </h4>
                  <p className="text-xs sm:text-sm text-ink-500 mt-1 max-w-xl">
                    Actively seeking ambitious BD, growth strategy, and product development opportunities where I can compound real commercial momentum.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-ink-950 text-white hover:bg-brand text-xs font-semibold uppercase tracking-wider transition-all shrink-0 active:scale-95"
                >
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
