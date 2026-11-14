import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { FolderGit2, ArrowUpRight, Sparkles, Layers, Cpu, Compass } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-brand" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-700">
                03 / VENTURES & PROJECTS
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-ink-950 tracking-tight">
              Selected Works<span className="text-brand">.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-ink-600 max-w-md font-normal leading-relaxed">
            From autonomous micro-retail hardware concepts to brand ecosystems and AI workflow laboratories.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              className="group flex flex-col justify-between rounded-3xl bg-neutral-50 border border-neutral-200/90 hover:border-brand/60 hover:shadow-card transition-all duration-300 overflow-hidden"
            >
              <div>
                {/* Visual Header / Cover Canvas */}
                <div className="relative aspect-[16/10] bg-gradient-to-br from-neutral-900 via-ink-950 to-neutral-800 p-6 flex flex-col justify-between overflow-hidden">
                  {/* Subtle Grid texture */}
                  <div 
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage: `linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)`,
                      backgroundSize: '24px 24px'
                    }}
                  />

                  {/* Top metadata inside banner */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/15">
                      {proj.category}
                    </span>
                    <span className="text-[11px] font-mono text-brand font-bold">
                      {proj.status}
                    </span>
                  </div>

                  {/* Center Visual Monogram / Logo Representation */}
                  <div className="relative z-10 my-auto text-center">
                    <span className="font-display font-black text-3xl sm:text-4xl text-white tracking-tighter group-hover:text-brand transition-colors">
                      {proj.title}
                    </span>
                  </div>

                  {/* Bottom bar inside banner */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                    <span>{proj.year}</span>
                    <span className="flex items-center gap-1 text-white group-hover:text-brand transition-colors">
                      <span>Interactive Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8">
                  <h3 className="font-display font-bold text-2xl text-ink-950 mb-2 group-hover:text-brand transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-mono text-brand font-semibold mb-4 uppercase tracking-wide">
                    {proj.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-ink-600 leading-relaxed mb-6 line-clamp-3">
                    {proj.overview}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-2.5 py-1 rounded-md bg-white border border-neutral-200 text-[11px] font-medium text-ink-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 sm:p-8 pt-0">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="w-full py-3 px-4 rounded-xl bg-white hover:bg-brand text-ink-900 hover:text-white border border-neutral-200 hover:border-brand font-display font-semibold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-subtle group-hover:bg-ink-950 group-hover:text-white group-hover:hover:bg-brand"
                >
                  <span>Explore Dedicated Deep Dive</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Space for additional initiatives banner */}
        <div className="mt-12 p-8 rounded-2xl bg-neutral-50 border border-dashed border-neutral-300 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <span className="text-xs font-mono text-brand uppercase tracking-widest font-semibold block mb-1">
              EXPANDING THE PORTFOLIO
            </span>
            <h4 className="font-display font-bold text-lg text-ink-950">
              Have an idea or looking for a collaborative partner?
            </h4>
            <p className="text-xs sm:text-sm text-ink-500 mt-0.5">
              I am constantly evaluating new venture concepts, tech architectures, and distribution experiments.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink-950 hover:bg-brand text-white text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 shadow-sm"
          >
            <span>Pitch a Collaboration</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
