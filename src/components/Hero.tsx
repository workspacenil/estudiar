import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, Box, Sparkles, Orbit, Compass, Zap } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt physics for spatial depth (Antigravity principle)
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
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden perspective-[1200px]"
    >
      {/* Background Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-blue-600/15 via-cyan-500/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-2/3 left-1/3 -translate-x-1/2 w-[500px] h-[400px] bg-purple-600/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Subtle Spatial Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Main Content Container with 3D Parallax Tilt */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center"
      >
        {/* Apple Style Top Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl mb-6 shadow-sm shadow-blue-500/10"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs font-mono tracking-wider text-neutral-300">
            FÍSICA I QUÍMICA · 2n D'ESO
          </span>
        </motion.div>

        {/* Cinematographic Display Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="apple-display text-white tracking-tight max-w-4xl font-extrabold mb-6"
        >
          L'Arquitectura de la{' '}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
            Matèria
          </span>{' '}
          i la Ciència de Mesurar
        </motion.h1>

        {/* Core Definition Subhead from Notebook */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="apple-subhead max-w-2xl mb-10 text-neutral-400"
        >
          <strong className="text-white font-medium">«És tot allò que té massa i ocupa un espai.»</strong>{' '}
          Una exploració interactiva d'alta precisió: des de la frontera entre cossos i sistemes materials,
          fins a l'escalat matemàtic decimal i el misteri de la densitat.
        </motion.p>

        {/* Floating 3D Geometric Material Cube / Sphere Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-48 h-48 sm:w-60 sm:h-60 my-6 flex items-center justify-center"
          style={{ transform: 'translateZ(40px)' }}
        >
          {/* Glowing Ambient Core */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 via-cyan-400/20 to-purple-500/10 blur-2xl animate-pulse" />
          
          {/* Isometric Floating Glass Box */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/20 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,180,255,0.3)] flex flex-col items-center justify-center p-4 transform hover:rotate-6 transition-transform duration-500">
            <Orbit className="w-10 h-10 text-cyan-400 mb-2 animate-spin-slow" />
            <div className="text-[11px] font-mono font-semibold text-white/90 tracking-wider">MATÈRIA</div>
            <div className="text-[9px] font-mono text-cyan-300/80">m &bull; V &bull; &rho;</div>

            {/* Glowing corner dots */}
            <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_#38bdf8]" />
            <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
          </div>

          {/* Floating Orbiting Data Chips */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-4 -right-4 px-3 py-1.5 rounded-xl bg-[#121218]/90 border border-white/10 backdrop-blur-xl text-xs font-mono text-cyan-300 shadow-lg flex items-center gap-1.5"
          >
            <Zap className="w-3 h-3 text-cyan-400" />
            <span>Massa [m]</span>
          </motion.div>

          <motion.div
            animate={{ y: [4, -4, 4] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-xl bg-[#121218]/90 border border-white/10 backdrop-blur-xl text-xs font-mono text-blue-300 shadow-lg flex items-center gap-1.5"
          >
            <Box className="w-3 h-3 text-blue-400" />
            <span>Volum [V]</span>
          </motion.div>
        </motion.div>

        {/* Action Buttons with Apple Spring Feel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mt-4"
        >
          <button
            onClick={onExploreClick}
            className="apple-btn-primary flex items-center gap-2 group cursor-pointer shadow-lg shadow-white/10"
          >
            <span>Explora el Scrollytelling</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <a
            href="#bento"
            className="apple-btn-secondary flex items-center gap-2 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-cyan-400" />
            <span>Bento Lab & Conversor</span>
          </a>
        </motion.div>

        {/* Floating Quick Reference Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl w-full"
        >
          {[
            { label: 'Cos', desc: 'Límits definits (Ampolla)' },
            { label: 'Sistema Material', desc: 'Sense forma fixa (Aigua)' },
            { label: 'Extensives', desc: 'Depenen de la quantitat' },
            { label: 'Intensives', desc: 'Invariants (Densitat)' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-md text-left hover:bg-white/[0.06] hover:border-white/[0.12] transition-colors"
            >
              <div className="text-xs font-mono font-semibold text-white/90">{item.label}</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">{item.desc}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
