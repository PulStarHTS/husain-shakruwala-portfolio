import React, { useEffect } from 'react';
import { personalInfo, aboutData, experiences, projects } from '../data/portfolioData';
import { X, Download, Printer, ExternalLink, GraduationCap, Briefcase, Code, Sparkles, Mail, Globe, Phone } from 'lucide-react';
import { LinkedinIcon } from './Icons';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/75 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden z-10 flex flex-col">
        {/* Top Control Bar */}
        <div className="bg-neutral-900 text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-7 h-7 rounded bg-brand text-white font-bold text-xs">
              HS
            </span>
            <div>
              <h3 className="font-display font-bold text-sm text-white">
                Husain Shakruwala — Curriculum Vitae
              </h3>
              <p className="text-[11px] font-mono text-neutral-400">
                Official Portfolio Document • {personalInfo.domain}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resume.filePath}
              download={personalInfo.resume.fileName}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand hover:bg-brand-600 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-mono transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable/Scrollable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-neutral-50 flex-1">
          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl border border-neutral-200/90 shadow-card text-ink-900 print:shadow-none print:border-none print:p-0">
            {/* Resume Header */}
            <div className="border-b border-neutral-200 pb-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                <h1 className="font-display font-black text-3xl sm:text-4xl text-ink-950 tracking-tight">
                  HUSAIN SHAKRUWALA
                </h1>
                <span className="font-mono text-xs text-brand font-semibold">
                  {personalInfo.domain}
                </span>
              </div>
              <p className="text-sm font-medium text-ink-700 mb-4">
                Computer Science Undergraduate & Business Development Operator
              </p>

              {/* Contact Bar */}
              <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-mono text-ink-500">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 hover:text-brand transition-colors">
                  <Mail className="w-3 h-3 text-brand" />
                  {personalInfo.email}
                </a>
                <span>•</span>
                <a href={personalInfo.phoneTel} className="flex items-center gap-1 hover:text-brand transition-colors">
                  <Phone className="w-3 h-3 text-brand" />
                  {personalInfo.phone}
                </a>
                <span>•</span>
                <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-brand transition-colors">
                  <LinkedinIcon className="w-3 h-3 text-brand" />
                  linkedin.com/in/husain-shakruwala-187996336
                </a>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Globe className="w-3 h-3 text-brand" />
                  India (IST)
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-6">
              <h2 className="text-xs font-mono uppercase tracking-wider text-brand font-bold mb-2">
                EXECUTIVE SUMMARY
              </h2>
              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
                Computer Science undergraduate combining technical depth in software engineering with commercial focus in business development, market discovery, and venture execution. Experienced in enterprise AI recruitment outreach (Talentick.ai) and editorial communications.
              </p>
            </div>

            {/* Education */}
            <div className="mb-6">
              <h2 className="text-xs font-mono uppercase tracking-wider text-brand font-bold mb-3 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                EDUCATION
              </h2>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="font-display font-bold text-sm text-ink-950">
                    {aboutData.education.degree}
                  </h3>
                  <span className="text-xs font-mono text-ink-500">
                    {aboutData.education.status}
                  </span>
                </div>
                <p className="text-xs text-ink-600 mb-2 font-medium">
                  {aboutData.education.institution}
                </p>
                <ul className="list-disc list-inside text-xs text-ink-500 space-y-1">
                  {aboutData.education.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="mb-6">
              <h2 className="text-xs font-mono uppercase tracking-wider text-brand font-bold mb-3 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" />
                WORK EXPERIENCE
              </h2>
              <div className="space-y-4">
                {experiences.map((exp, i) => (
                  <div key={i} className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h3 className="font-display font-bold text-sm text-ink-950">
                        {exp.role} — <span className="text-brand font-semibold">{exp.company}</span>
                      </h3>
                      <span className="text-xs font-mono text-ink-500">
                        {exp.period}
                      </span>
                    </div>
                    {(exp.product || exp.project) && (
                      <p className="text-xs font-mono text-brand-700 font-semibold mb-2">
                        Product Focus: {exp.product || exp.project}
                      </p>
                    )}
                    <p className="text-xs text-ink-600 mb-2">
                      {exp.description}
                    </p>
                    <ul className="list-disc list-inside text-xs text-ink-600 space-y-1 mb-3">
                      {(exp.responsibilities || exp.achievements || []).map((item, aIdx) => (
                        <li key={aIdx}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1">
                      {exp.skills.map((s, sIdx) => (
                        <span key={sIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-neutral-200 text-ink-600">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="mb-6">
              <h2 className="text-xs font-mono uppercase tracking-wider text-brand font-bold mb-3 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5" />
                SELECTED PROJECTS & VENTURES
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projects.map((proj, pIdx) => (
                  <div key={pIdx} className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                    <h3 className="font-display font-bold text-xs text-ink-950 mb-0.5">
                      {proj.title}
                    </h3>
                    <p className="text-[11px] font-mono text-brand mb-1.5">
                      {proj.category}
                    </p>
                    <p className="text-[11px] text-ink-600 line-clamp-2 mb-2">
                      {proj.overview}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {proj.tags.slice(0, 3).map((t, tIdx) => (
                        <span key={tIdx} className="text-[9px] font-mono px-1.5 py-0.5 bg-white border border-neutral-200 text-ink-500 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Competencies */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-brand font-bold mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                CORE COMPETENCIES
              </h2>
              <div className="text-xs text-ink-600 space-y-1 font-mono">
                <p><strong>Technical:</strong> Computer Science Fundamentals, Software Systems, Data Structures, Modern Web Architectures, Rapid Prototyping.</p>
                <p><strong>Commercial:</strong> B2B Business Development, Lead Pipeline Management, ICP Discovery, Content Strategy, Strategic Networking, Pitching.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info for Husain */}
        <div className="p-4 bg-white border-t border-neutral-200 px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-ink-500 gap-2">
          <span>💡 Note for Husain: Replace <code className="text-brand font-mono">public/assets/Husain_Shakruwala_Resume.pdf</code> with your real PDF anytime.</span>
          <span className="font-mono text-brand font-semibold">{personalInfo.domain}</span>
        </div>
      </div>
    </div>
  );
}
