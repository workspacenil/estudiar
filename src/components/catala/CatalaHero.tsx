import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, BookOpen, Feather, Sparkles, MessageSquare, History, CheckCircle2 } from 'lucide-react';

interface CatalaHeroProps {
  onExploreClick: () => void;
  onNavigateSection: (id: string) => void;
}

export const CatalaHero: React.FC<CatalaHeroProps> = ({ onExploreClick, onNavigateSection }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt physics for spatial depth (Apple / Antigravity principle)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="catala-hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden perspective-[1200px]"
    >
      {/* Background Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-amber-600/15 via-red-500/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-2/3 left-1/3 -translate-x-1/2 w-[500px] h-[400px] bg-yellow-600/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Main Content with 3D Parallax Tilt */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center"
      >
        {/* Apple Style Top Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl mb-6 shadow-sm shadow-amber-500/10"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span className="text-xs font-mono tracking-wider text-amber-300">
            LLENGUA CATALANA I LITERATURA · 2N D'ESO
          </span>
        </motion.div>

        {/* Cinematographic Display Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="apple-display text-white tracking-tight max-w-4xl font-extrabold mb-6"
        >
          El Poder de la{' '}
          <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-200 bg-clip-text text-transparent">
            Paraula
          </span>
          , la Raó i la Memòria
        </motion.h1>

        {/* Core Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="apple-subhead max-w-2xl mb-10 text-neutral-400"
        >
          <strong className="text-white font-medium">«Aprendre a defensar opinions i convèncer amb raons i arguments.»</strong>{' '}
          Guia completa interactiva dels 4 blocs del teu temari: Comunicació, Text Argumentatiu, L'Origen i Evolució de la Llengua, i l'Ortografia d'Accentuació i Dièresi.
        </motion.p>

        {/* Floating 3D Book & Quill Geometric Centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-48 h-48 sm:w-60 sm:h-60 my-4 flex items-center justify-center"
          style={{ transform: 'translateZ(40px)' }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/20 via-orange-400/20 to-yellow-500/10 blur-2xl animate-pulse" />
          
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-amber-400/30 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(245,158,11,0.25)] flex flex-col items-center justify-center p-4 transform hover:rotate-6 transition-transform duration-500">
            <Feather className="w-10 h-10 text-amber-400 mb-2 animate-bounce-slow" />
            <div className="text-[11px] font-mono font-semibold text-white/90 tracking-wider">CATALÀ 2E</div>
            <div className="text-[9px] font-mono text-amber-300/80">S. XII &rarr; XXI</div>

            <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
            <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_8px_#fb923c]" />
          </div>

          {/* Floating Orbiting Data Chips */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-4 -right-4 px-3 py-1.5 rounded-xl bg-[#121218]/90 border border-white/10 backdrop-blur-xl text-xs font-mono text-amber-300 shadow-lg flex items-center gap-1.5"
          >
            <MessageSquare className="w-3 h-3 text-amber-400" />
            <span>Tesi &bull; Raons</span>
          </motion.div>

          <motion.div
            animate={{ y: [4, -4, 4] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-xl bg-[#121218]/90 border border-white/10 backdrop-blur-xl text-xs font-mono text-orange-300 shadow-lg flex items-center gap-1.5"
          >
            <History className="w-3 h-3 text-orange-400" />
            <span>Organyà 1100s</span>
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mt-6"
        >
          <button
            onClick={onExploreClick}
            className="apple-btn-primary flex items-center gap-2 group cursor-pointer shadow-lg shadow-white/10"
          >
            <span>Explora el Temari de Català</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={() => onNavigateSection('catala-quiz')}
            className="apple-btn-secondary flex items-center gap-2 cursor-pointer border-amber-500/30 text-amber-300 hover:bg-amber-500/10"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Posa't a Prova (Quiz)</span>
          </button>
        </motion.div>

        {/* Quick Topics Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl w-full"
        >
          {[
            { id: 'comunicacio-section', label: '1. Comunicació', desc: 'Els 6 elements & Oral vs Escrit' },
            { id: 'argumentacio-section', label: '2. Text Argumentatiu', desc: 'Tesi, fets, arguments & connectors' },
            { id: 'historia-section', label: '3. Història del Català', desc: 'Del llatí vulgar a la normalització' },
            { id: 'ortografia-section', label: '4. Accentuació & Dièresi', desc: 'Agudes, diacrítics & 5 estalvis' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigateSection(item.id)}
              className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-md text-left hover:bg-white/[0.06] hover:border-amber-400/30 transition-all cursor-pointer group"
            >
              <div className="text-xs font-mono font-semibold text-white/90 group-hover:text-amber-300 transition-colors">
                {item.label}
              </div>
              <div className="text-[11px] text-neutral-400 mt-0.5">{item.desc}</div>
            </button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
