import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, FileText, Send } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Video Intro', href: '#video-intro' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Beyond Work', href: '#beyond-work' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-white/85 backdrop-blur-md border-b border-neutral-200/80 shadow-subtle'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="group flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-ink-950 transition-colors"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-ink-950 text-white font-extrabold text-sm group-hover:bg-brand transition-colors">
              HS
            </span>
            <span className="hidden sm:inline-block font-semibold text-ink-900 group-hover:text-brand transition-colors">
              HUSAIN SHAKRUWALA
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-ink-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 hover:text-ink-950 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink-700 bg-neutral-100 hover:bg-neutral-200 rounded-full border border-neutral-200 transition-all active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-ink-950" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-ink-950 hover:bg-brand rounded-full transition-all shadow-sm active:scale-95"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 text-xs font-medium text-ink-800 bg-neutral-100 rounded-lg border border-neutral-200"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4 text-ink-900" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ink-900 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors border border-neutral-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-8 animate-fadeIn">
          <div className="flex flex-col space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-ink-400 mb-2">
              Navigation
            </p>
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-2xl font-display font-semibold text-ink-900 hover:text-brand transition-colors flex items-center justify-between border-b border-neutral-100 pb-3"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-ink-400">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-neutral-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3.5 flex items-center justify-center gap-2 text-sm font-semibold rounded-xl bg-neutral-100 text-ink-900 border border-neutral-200"
            >
              <FileText className="w-4 h-4 text-brand" />
              <span>Preview & Download Resume</span>
            </button>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="w-full py-3.5 flex items-center justify-center gap-2 text-sm font-semibold rounded-xl bg-brand text-white shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>Let's Connect Directly</span>
            </a>
            <p className="text-center text-xs text-ink-400 mt-2">
              {personalInfo.domain}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
