import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Atom, Scale, Ruler, Compass, Sparkles, Layers } from 'lucide-react';

interface NavbarProps {
  onNavigate: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Inici', icon: Atom },
    { id: 'cos-sistema', label: 'Cos & Sistema', icon: Layers },
    { id: 'densitat', label: 'Densitat & Propietats', icon: Scale },
    { id: 'escala', label: 'Escala Mètrica', icon: Ruler },
    { id: 'bento', label: 'Bento Lab', icon: Compass },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-5 pointer-events-none transition-all duration-300">
      <nav
        className={`pointer-events-auto flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#101015]/80 border border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl'
            : 'bg-white/[0.04] border border-white/[0.06] backdrop-blur-md'
        }`}
      >
        <button
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-2 pl-2 pr-3 py-1 mr-1 text-xs font-semibold tracking-wider text-white hover:text-white/80 transition-colors group"
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center text-black font-mono text-[10px] font-bold shadow-sm shadow-blue-500/40 group-hover:scale-105 transition-transform">
            2E
          </div>
          <span className="hidden md:inline font-mono text-white/90">MATÈRIA // PRO</span>
        </button>

        <div className="h-4 w-px bg-white/10 mx-1 hidden sm:block" />

        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  onNavigate(item.id);
                }}
                className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-white'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.05]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/15 shadow-sm"
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                  />
                )}
                <Icon className="w-3.5 h-3.5 relative z-10" />
                <span className="relative z-10 hidden sm:inline">{item.label}</span>
              </button>
            );
          })}
        </div>

        <div className="h-4 w-px bg-white/10 mx-1 hidden sm:block" />

        <button
          onClick={() => onNavigate('quiz-section')}
          className="ml-1 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-400 hover:bg-blue-500/25 text-xs font-medium flex items-center gap-1.5 transition-all active:scale-95"
        >
          <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
          <span className="hidden lg:inline">That Quiz</span>
        </button>
      </nav>
    </header>
  );
};
