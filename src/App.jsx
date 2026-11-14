import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoIntro from './components/VideoIntro';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import BeyondWork from './components/BeyondWork';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import VideoModal from './components/VideoModal';
import HostingPage from './components/HostingPage';
import LeadershipPage from './components/LeadershipPage';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'hosting' | 'leadership'
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Sync state with URL hash for browser back/forward and direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#hosting' || hash === '#/hosting') {
        setCurrentView('hosting');
      } else if (hash === '#leadership' || hash === '#/leadership') {
        setCurrentView('leadership');
      } else {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToHosting = () => {
    window.location.hash = '#hosting';
    setCurrentView('hosting');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToLeadership = () => {
    window.location.hash = '#leadership';
    setCurrentView('leadership');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const returnToHomepage = () => {
    window.location.hash = '#beyond-work';
    setCurrentView('home');
    setTimeout(() => {
      const el = document.getElementById('beyond-work');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-white text-ink-950 font-sans selection:bg-brand selection:text-white">
      {currentView === 'hosting' && (
        <HostingPage onBack={returnToHomepage} />
      )}

      {currentView === 'leadership' && (
        <LeadershipPage onBack={returnToHomepage} />
      )}

      {currentView === 'home' && (
        <>
          {/* Navigation Header */}
          <Navbar onOpenResume={() => setResumeModalOpen(true)} />

          {/* Main Content Sections */}
          <main>
            {/* 1. Hero Section */}
            <Hero onOpenResume={() => setResumeModalOpen(true)} />

            {/* 2. Video Introduction Section */}
            <VideoIntro onOpenVideo={() => setVideoModalOpen(true)} />

            {/* 3. About Me & Outside the LinkedIn Bubble */}
            <About />

            {/* 4. Experience Timeline */}
            <Experience />

            {/* 5. Projects Showcase */}
            <Projects />

            {/* 6. Beyond Work & Bento Perspectives + Interactive Chronicles */}
            <BeyondWork 
              onOpenHosting={navigateToHosting}
              onOpenLeadership={navigateToLeadership}
            />

            {/* 7. Contact Section */}
            <Contact onOpenResume={() => setResumeModalOpen(true)} />
          </main>

          {/* Footer */}
          <Footer />
        </>
      )}

      {/* Modals available across views */}
      {resumeModalOpen && (
        <ResumeModal onClose={() => setResumeModalOpen(false)} />
      )}

      {videoModalOpen && (
        <VideoModal onClose={() => setVideoModalOpen(false)} />
      )}
    </div>
  );
}
