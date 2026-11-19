import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Atom,
  Scale,
  Ruler,
  Compass,
  Sparkles,
  Layers,
  BookOpen,
  Feather,
  History,
  MessageSquare,
} from 'lucide-react';

export type SubjectType = 'fq' | 'catala' | 'metalls';

interface NavbarProps {
  currentSubject: SubjectType;
  onSelectSubject: (subject: SubjectType) => void;
  onNavigate: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSubject,
  onSelectSubject,
  onNavigate,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fqNavItems = [
    { id: 'hero', label: 'Inici', icon: Atom },
    { id: 'cos-sistema', label: 'Cos & Sistema', icon: Layers },
    { id: 'densitat', label: 'Densitat', icon: Scale },
    { id: 'escala', label: 'Escala Mètrica', icon: Ruler },
    { id: 'bento', label: 'Bento Lab', icon: Compass },
  ];

  const catalaNavItems = [
    { id: 'catala-hero', label: 'Inici', icon: BookOpen },
    { id: 'comunicacio-section', label: 'Comunicació', icon: MessageSquare },
    { id: 'argumentacio-section', label: 'Argumentació', icon: Layers },
    { id: 'historia-section', label: 'Història', icon: History },
    { id: 'ortografia-section', label: 'Ortografia', icon: Feather },
  ];

  const currentNavItems = currentSubject === 'metalls' ? [] : currentSubject === 'fq' ? fqNavItems : catalaNavItems;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pointer-events-none transition-all duration-300">
      <nav
        className={`pointer-events-auto flex flex-wrap justify-center items-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full transition-all duration-300 max-w-[calc(100vw-2rem)] sm:max-w-5xl ${
          scrolled
            ? 'bg-[#101015]/85 border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.7)] backdrop-blur-2xl'
            : 'bg-white/[0.05] border border-white/[0.08] backdrop-blur-md'
        }`}
      >
        {/* Prominent Subject Switcher (FQ vs Català) */}
        <div className="flex w-full sm:w-auto justify-center items-center bg-black/60 p-1 rounded-full border border-white/10 mr-1 sm:mr-2">
          <button
            onClick={() => {
              onSelectSubject('fq');
              setActiveSection('hero');
            }}
            className={`px-2.5 sm:px-3 py-1 rounded-full text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              currentSubject === 'fq'
                ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-black shadow-md shadow-cyan-500/30'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Atom className="w-3.5 h-3.5" />
            <span>FQ</span>
          </button>

          <button
            onClick={() => {
              onSelectSubject('catala');
              setActiveSection('catala-hero');
            }}
            className={`px-2.5 sm:px-3 py-1 rounded-full text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              currentSubject === 'catala'
                ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-md shadow-amber-500/30'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Feather className="w-3.5 h-3.5" />
            <span>CATALÀ</span>
          </button>
          <button
            onClick={() => { onSelectSubject('metalls'); setActiveSection('tecno-metalls'); }}
            className={`min-h-[44px] px-3 py-1 rounded-full text-xs font-bold cursor-pointer ${currentSubject === 'metalls' ? 'bg-emerald-300 text-black' : 'text-neutral-300 hover:text-white'}`}
          >Tecno Metalls</button>
        </div>

        <div className="h-4 w-px bg-white/10 mx-1 hidden md:block" />

        {/* Section Links */}
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
          {currentNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  onNavigate(item.id);
                }}
                className={`relative px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
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

        {/* Quick Quiz Shortcut Button */}
        {currentSubject !== 'metalls' && <button
          onClick={() => onNavigate(currentSubject === 'fq' ? 'quiz-section' : 'catala-quiz')}
          className={`ml-1 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer ${
            currentSubject === 'fq'
              ? 'bg-blue-500/15 border border-blue-400/30 text-blue-300 hover:bg-blue-500/25'
              : 'bg-amber-500/15 border border-amber-400/30 text-amber-300 hover:bg-amber-500/25'
          }`}
        >
          <Sparkles className="w-3 h-3 animate-pulse" />
          <span className="hidden lg:inline">That Quiz</span>
        </button>}
      </nav>
    </header>
  );
};
