import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-ink-950 text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-12 border-b border-neutral-800 gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="flex items-center justify-center w-7 h-7 rounded-md bg-brand text-white font-black text-xs">
                HS
              </span>
              <span className="font-display font-extrabold text-lg text-white tracking-tight">
                HUSAIN SHAKRUWALA
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-mono">
              {personalInfo.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-neutral-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#video-intro" className="hover:text-white transition-colors">Video</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#beyond-work" className="hover:text-white transition-colors">Beyond Work</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-neutral-900 hover:bg-brand text-neutral-300 hover:text-white border border-neutral-800 transition-colors flex items-center gap-2 text-xs font-mono"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Tier */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Husain Shakruwala.</span>
            <span>•</span>
            <span className="text-neutral-400">{personalInfo.domain}</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-brand transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-brand transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-neutral-400 hover:text-brand transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="text-[11px] text-neutral-500">
            Architected for Vercel • Modern Editorial Design
          </div>
        </div>
      </div>
    </footer>
  );
}
