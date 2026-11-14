import React, { useState, useEffect } from 'react';
import { personalInfo, contactDetails } from '../data/portfolioData';
import { 
  Send, 
  Mail, 
  FileText, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Clock, 
  Sparkles,
  MessageSquare,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from './Icons';

export default function Contact({ onOpenResume }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Business Development & Collaboration',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const getFormspreeUrl = (endpoint) => {
    if (!endpoint || !endpoint.trim()) return '';
    const trimmed = endpoint.trim();
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      return trimmed;
    }
    return `https://formspree.io/f/${trimmed}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Prevent duplicate submission while already in progress
    if (isSubmitting) return;

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    // 1. Validate empty fields
    if (!name) {
      setErrorMessage('Please enter your name.');
      return;
    }

    if (!email) {
      setErrorMessage('Please enter your email address.');
      return;
    }

    // 2. Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address (e.g. name@domain.com).');
      return;
    }

    if (!message) {
      setErrorMessage('Please enter your message.');
      return;
    }

    // 3. Check Formspree configuration
    const endpoint = contactDetails.formspreeEndpoint || '';
    const targetUrl = getFormspreeUrl(endpoint);

    if (!targetUrl || endpoint === 'YOUR_FORMSPREE_ENDPOINT_HERE') {
      setErrorMessage('Formspree endpoint has not been configured yet. Please provide your Formspree endpoint to enable direct submissions.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(targetUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          topic: formData.interest,
          message,
          _subject: `New Portfolio Inquiry: ${formData.interest} from ${name}`
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setFormSubmitted(true);
      } else {
        const data = await response.json().catch(() => ({}));
        setIsSubmitting(false);
        if (data && data.errors && data.errors.length > 0) {
          setErrorMessage(data.errors.map(err => err.message).join(', '));
        } else {
          setErrorMessage('Submission failed. Please try again or reach out directly at ' + personalInfo.email);
        }
      }
    } catch (err) {
      setIsSubmitting(false);
      setErrorMessage('Network error: Unable to connect to submission service. Please check your connection or reach out via direct email.');
    }
  };

  const getDirectMailto = () => {
    const subject = encodeURIComponent(`[Inquiry via ${personalInfo.domain}] ${formData.interest} - from ${formData.name}`);
    const body = encodeURIComponent(`Hi Husain,\n\nName: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.interest}\n\nMessage:\n${formData.message}\n\nSent from ${personalInfo.domain}`);
    return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 mb-3">
              <MessageSquare className="w-3.5 h-3.5 text-brand" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-700">
                05 / DIRECT CHANNELS
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-ink-950 tracking-tight">
              {contactDetails.title}
              <span className="text-brand">.</span>
            </h2>
          </div>

          {/* Live IST Clock */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-neutral-50 border border-neutral-200">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <div className="text-xs font-mono">
              <span className="text-ink-400 block text-[10px]">CURRENT TIME IN INDIA (IST)</span>
              <span className="font-bold text-ink-900">{currentTime || '12:00:00 PM'}</span>
            </div>
          </div>
        </div>

        {/* Contact Layout: Channels & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Links & Resume (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-base text-ink-600 leading-relaxed font-normal">
              {contactDetails.subtitle}
            </p>

            {/* Direct Cards */}
            <div className="space-y-4 pt-2">
              {/* LinkedIn */}
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 hover:border-brand/50 transition-all flex items-center justify-between shadow-subtle"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-ink-900 group-hover:text-brand transition-colors">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-ink-400 uppercase tracking-wider block">
                      Professional Network
                    </span>
                    <span className="font-display font-bold text-ink-950 text-base group-hover:text-brand transition-colors">
                      Husain Shakruwala on LinkedIn
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-ink-400 group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Direct Email */}
              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-subtle flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-ink-900">
                      <Mail className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-ink-400 uppercase tracking-wider block">
                        Direct Email
                      </span>
                      <a 
                        href={`mailto:${personalInfo.email}`} 
                        className="font-display font-bold text-ink-950 text-base hover:text-brand transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2 border-t border-neutral-200">
                  <button
                    onClick={handleCopyEmail}
                    className="flex-1 py-1.5 px-3 rounded-lg bg-white hover:bg-neutral-100 border border-neutral-200 text-xs font-mono text-ink-700 transition-colors flex items-center justify-center gap-1.5"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-ink-500" />
                        <span>Copy Email Address</span>
                      </>
                    )}
                  </button>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="py-1.5 px-3 rounded-lg bg-brand hover:bg-brand-600 text-white text-xs font-mono font-semibold transition-colors flex items-center gap-1"
                  >
                    <span>Send Mail</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <a
                href={personalInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 hover:border-brand/50 transition-all flex items-center justify-between shadow-subtle"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-ink-900 group-hover:text-brand transition-colors">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-ink-400 uppercase tracking-wider block">
                      Social & Visuals
                    </span>
                    <span className="font-display font-bold text-ink-950 text-base group-hover:text-brand transition-colors">
                      @ht_shakruwala
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-ink-400 group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Resume Download Feature Card */}
              <div className="p-6 rounded-2xl bg-neutral-900 text-white border border-neutral-800 shadow-elevated">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand font-bold">
                    CURRICULUM VITAE
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    PDF FORMAT
                  </span>
                </div>
                <h4 className="font-display font-bold text-lg text-white mb-1">
                  Official Resume
                </h4>
                <p className="text-xs text-neutral-400 mb-4">
                  Detailed breakdown of Computer Science coursework, BD projects at Bluetick, and leadership initiatives.
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={onOpenResume}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-brand hover:bg-brand-600 text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm active:scale-95"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View & Download</span>
                  </button>
                  <a
                    href={personalInfo.resume.filePath}
                    download={personalInfo.resume.fileName}
                    className="py-2.5 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-mono transition-colors border border-neutral-700"
                    title="Direct PDF Download"
                  >
                    Direct PDF
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (Spans 7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 border border-neutral-200 shadow-sm relative">
              <h3 className="font-display font-bold text-2xl text-ink-950 mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-ink-500 mb-8 font-normal">
                Fill in the details below. I typically respond within 24 hours.
              </p>

              {formSubmitted ? (
                <div className="p-8 sm:p-10 rounded-2xl bg-white border border-brand/40 shadow-card text-center animate-fadeIn">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-ink-950 mb-2">
                    Message Sent Successfully, {formData.name}!
                  </h4>
                  <p className="text-sm text-ink-600 max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you for reaching out regarding <strong>"{formData.interest}"</strong>. Your message has been submitted directly to Husain's inbox through Formspree, and he will respond shortly.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          interest: 'Business Development & Collaboration',
                          message: ''
                        });
                        setErrorMessage('');
                      }}
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-ink-950 hover:bg-brand text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm active:scale-95"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-ink-600 mb-1.5 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        disabled={isSubmitting}
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none text-sm text-ink-900 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-ink-600 mb-1.5 font-medium">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        disabled={isSubmitting}
                        placeholder="e.g. alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none text-sm text-ink-900 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-ink-600 mb-1.5 font-medium">
                      Topic of Conversation
                    </label>
                    <select
                      disabled={isSubmitting}
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none text-sm text-ink-900 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <option value="Business Development & Collaboration">Business Development & Collaboration</option>
                      <option value="Tech Product / Venture Pitch">Tech Product / Venture Pitch</option>
                      <option value="Talentick.ai / Bluetick Inquiry">Talentick.ai / Bluetick Inquiry</option>
                      <option value="PocketVendr / Hardware Project">PocketVendr / Hardware Project</option>
                      <option value="General Networking / Coffee Chat">General Networking / Coffee Chat</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-ink-600 mb-1.5 font-medium">
                      Your Message *
                    </label>
                    <textarea
                      required
                      disabled={isSubmitting}
                      rows={4}
                      placeholder="Share what you're working on, how we might collaborate, or what brought you to my website..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none text-sm text-ink-900 transition-all resize-none disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-ink-950 hover:bg-brand text-white font-display font-semibold text-xs uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-glow-orange active:scale-98 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Sending Message Directly...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message Directly</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] font-mono text-ink-400 mt-2">
                    Privacy respected • Direct email transmission to {personalInfo.email}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
