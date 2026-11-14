import React from 'react';
import { aboutData } from '../data/portfolioData';
import { 
  GraduationCap, 
  TrendingUp, 
  Rocket, 
  Megaphone, 
  Code, 
  Users, 
  Compass, 
  Sparkles, 
  CheckCircle2,
  Quote,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function About() {
  const getInterestIcon = (iconName) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-brand" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-brand" />;
      case 'Megaphone':
        return <Megaphone className="w-5 h-5 text-brand" />;
      case 'Code':
        return <Code className="w-5 h-5 text-brand" />;
      case 'Users':
        return <Users className="w-5 h-5 text-brand" />;
      default:
        return <Sparkles className="w-5 h-5 text-brand" />;
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Pill & Title */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 mb-3">
            <Compass className="w-3.5 h-3.5 text-brand" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-700">
              01 / ABOUT ME
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-ink-950 tracking-tight max-w-3xl">
            {aboutData.headline}
          </h2>
        </div>

        {/* Narrative & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-ink-600 leading-relaxed font-normal">
            {aboutData.narrative.map((p, idx) => (
              <p key={idx}>
                {p}
              </p>
            ))}

            {/* Personality Strengths */}
            <div className="pt-6">
              <h3 className="font-display font-bold text-lg text-ink-950 mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-brand" />
                <span>Operating DNA & Personality</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutData.personality.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/90 hover:border-brand/40 transition-colors">
                    <span className="block font-display font-bold text-sm text-ink-950 mb-1">
                      {item.label}
                    </span>
                    <p className="text-xs text-ink-500 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-sm relative overflow-hidden h-full flex flex-col justify-between">
              {/* Top Accent Pill */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-2xl"></div>

              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center mb-6 shadow-subtle">
                  <GraduationCap className="w-6 h-6 text-brand" />
                </div>
                <div className="inline-block px-2.5 py-1 rounded bg-brand-50 border border-brand-200 text-brand-700 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
                  {aboutData.education.status}
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-ink-950 mb-2">
                  {aboutData.education.degree}
                </h3>
                <p className="text-sm font-medium text-ink-600 mb-6">
                  {aboutData.education.institution}
                </p>

                <div className="space-y-3 pt-4 border-t border-neutral-200">
                  {aboutData.education.highlights.map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-ink-600 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-200/80 flex items-center justify-between text-xs font-mono text-ink-400">
                <span>Domain</span>
                <span className="text-ink-900 font-semibold">Computer Science & Business</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interests Section */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-neutral-200">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand font-semibold block mb-1">
                CORE FOCUS AREAS
              </span>
              <h3 className="font-display font-bold text-2xl text-ink-950">
                What I Care About & Practice
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-ink-500 font-normal mt-2 sm:mt-0">
              The intersecting disciplines powering every project I touch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {aboutData.interests.map((interest, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-neutral-200 hover:border-brand/70 hover:shadow-card transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 group-hover:bg-brand-50 border border-neutral-200 group-hover:border-brand-200 flex items-center justify-center mb-5 transition-colors">
                    {getInterestIcon(interest.icon)}
                  </div>
                  <h4 className="font-display font-bold text-base text-ink-950 mb-2 group-hover:text-brand transition-colors">
                    {interest.title}
                  </h4>
                  <p className="text-xs text-ink-500 leading-relaxed">
                    {interest.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-neutral-100 font-mono text-[11px] text-ink-400">
                  0{idx + 1} // FOCUS
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: Outside the LinkedIn Bubble (Requested requirement) */}
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-neutral-50 border border-neutral-200 overflow-hidden shadow-subtle">
          {/* Subtle Orange Accent Edge */}
          <div className="absolute top-0 left-0 bottom-0 w-2 bg-brand"></div>

          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 mb-4 shadow-sm">
              <Quote className="w-3.5 h-3.5 text-brand" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-700">
                AUTHENTIC PERSPECTIVES
              </span>
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-ink-950 tracking-tight mb-3">
              {aboutData.outsideTheLinkedInBubble.title}
            </h3>
            <p className="text-sm sm:text-base text-ink-600 leading-relaxed">
              {aboutData.outsideTheLinkedInBubble.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {aboutData.outsideTheLinkedInBubble.points.map((pt, index) => (
              <div 
                key={index} 
                className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/90 shadow-subtle hover:border-brand/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-brand">
                      PRINCIPLE 0{index + 1}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
                  </div>
                  <h4 className="font-display font-bold text-lg text-ink-950 mb-3">
                    {pt.heading}
                  </h4>
                  <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-normal">
                    {pt.text}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-2 text-[11px] font-mono text-ink-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand" />
                  <span>Real-World Tested</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
