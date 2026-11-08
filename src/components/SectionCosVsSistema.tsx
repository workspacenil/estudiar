import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Droplets, Box, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const SectionCosVsSistema: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    const el = containerRef.current;
    const pin = pinRef.current;
    if (!el || !pin) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top top',
        end: '+=200%',
        pin: pin,
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress < 0.33) {
            setActiveStage(0);
          } else if (progress < 0.66) {
            setActiveStage(1);
          } else {
            setActiveStage(2);
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stages = [
    {
      badge: 'ETAPA 01 · LÍMITS DEFINITS',
      title: 'El Concepte de «Cos»',
      description:
        'Quan la porció de matèria està delimitada per una superfície concreta i té una forma determinada que podem mesurar directament.',
      example: 'Exemple clau: Una ampolla de vidre, un cristall de quars, un llibre.',
      attributes: [
        { name: 'Forma', value: 'Pròpia i definida', ok: true },
        { name: 'Volum', value: 'Definit i constant', ok: true },
        { name: 'Límits espacials', value: 'Geometria tancada', ok: true },
      ],
      mode: 'cos',
    },
    {
      badge: 'ETAPA 02 · LA DISOLUCIÓ DEL LÍMIT',
      title: 'Quan la Forma s’adapta',
      description:
        'Què passa quan obrim l’ampolla i l’aigua s’aboca? La matèria continua tenint la mateixa massa, però ja no posseeix una forma fixa pròpia.',
      example: 'Transició física: L’aigua adopta la forma del nou recipient o s’estén.',
      attributes: [
        { name: 'Massa conservada', value: 'Exactament idèntica', ok: true },
        { name: 'Forma geomètrica', value: 'Es perd / S’adapta', ok: false },
        { name: 'Superfície de contorn', value: 'Variable', ok: false },
      ],
      mode: 'transition',
    },
    {
      badge: 'ETAPA 03 · SISTEMA MATERIAL',
      title: 'El «Sistema Material»',
      description:
        'Quan la matèria no forma objectes amb límits estrictes o definits. La considerem com una porció de l’univers que aïllem per estudiar-la.',
      example: 'Exemple clau: L’aigua d’un riu, l’aire d’una habitació, un núvol de vapor.',
      attributes: [
        { name: 'Forma', value: 'Depèn del recipient o l’entorn', ok: false },
        { name: 'Composició', value: 'Homogènia o heterogènia', ok: true },
        { name: 'Estat de la matèria', value: 'Líquid, gas o barreja', ok: true },
      ],
      mode: 'sistema',
    },
  ];

  const current = stages[activeStage];

  return (
    <section
      id="cos-sistema"
      ref={containerRef}
      className="relative w-full bg-black min-h-[300vh]"
    >
      <div
        ref={pinRef}
        className="w-full h-screen flex flex-col justify-between py-12 px-6 sm:px-12 relative overflow-hidden"
      >
        {/* Subtle Ambient Background Spotlights */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />

        {/* Section Header */}
        <div className="max-w-6xl mx-auto w-full pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-cyan-400 mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>01 // ESTRUCTURA GEOMÈTRICA</span>
            </div>
            <h2 className="apple-headline text-white">Cos vs. Sistema Material</h2>
          </div>

          {/* Scrollytelling Step Indicators */}
          <div className="flex items-center gap-2 bg-white/[0.04] p-1.5 rounded-full border border-white/[0.08] backdrop-blur-md">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => setActiveStage(idx as 0 | 1 | 2)}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-300 ${
                  activeStage === idx
                    ? 'bg-blue-500 text-white shadow-sm shadow-blue-500/50'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Dual Stage Center Area */}
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto z-10">
          {/* Left Column: Dynamic Visual Representation */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md h-80 sm:h-96 rounded-3xl glass-card flex items-center justify-center p-8 overflow-hidden group">
              {/* Grid Background inside card */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:16px_16px]" />

              {/* Dynamic Graphic reacting to the activeStage */}
              <AnimatePresence mode="wait">
                {activeStage === 0 && (
                  <motion.div
                    key="cos-box"
                    initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.85, rotateY: 30 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 120 }}
                    className="relative flex flex-col items-center"
                  >
                    {/* 3D Bottle / Rigid Object Wireframe */}
                    <div className="relative w-36 h-56 rounded-2xl border-2 border-cyan-400/80 bg-gradient-to-b from-cyan-500/10 to-blue-600/20 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,0.25)] flex flex-col items-center justify-end p-4 overflow-hidden">
                      {/* Bottle Neck */}
                      <div className="absolute -top-4 w-12 h-6 border-2 border-cyan-400/80 bg-cyan-400/20 rounded-t-lg" />
                      {/* Water inside defined container */}
                      <motion.div
                        initial={{ height: '0%' }}
                        animate={{ height: '70%' }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className="w-full bg-gradient-to-t from-blue-500/60 to-cyan-400/40 rounded-xl relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-white/10 animate-pulse" />
                        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-mono text-white/90">
                          Ampolla
                        </span>
                      </motion.div>
                    </div>

                    <div className="mt-4 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-mono">
                      LÍMITS DEFINITS EN L'ESPAI
                    </div>
                  </motion.div>
                )}

                {activeStage === 1 && (
                  <motion.div
                    key="transition-state"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 120 }}
                    className="relative flex flex-col items-center w-full px-6"
                  >
                    {/* Liquid Flow / Dispersal simulation */}
                    <div className="w-full h-52 flex flex-col items-center justify-center relative">
                      <div className="w-20 h-28 border border-dashed border-neutral-500/60 rounded-xl relative overflow-hidden opacity-50 flex items-center justify-center">
                        <span className="text-[10px] font-mono text-neutral-400">Contenidor</span>
                      </div>
                      {/* Flow arrow */}
                      <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="my-2 text-cyan-400"
                      >
                        &darr;
                      </motion.div>
                      {/* Fluid spreading freely */}
                      <div className="w-full h-12 rounded-2xl bg-gradient-to-r from-blue-500/30 via-cyan-400/40 to-indigo-500/30 border border-cyan-400/30 backdrop-blur-md flex items-center justify-center">
                        <span className="text-xs font-mono text-cyan-200">
                          La matèria flueix lliurement
                        </span>
                      </div>
                    </div>

                    <div className="mt-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-mono">
                      LA MASSA PERMANEIX, LA FORMA CANVIA
                    </div>
                  </motion.div>
                )}

                {activeStage === 2 && (
                  <motion.div
                    key="sistema-water"
                    initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.85, rotateY: -30 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 120 }}
                    className="relative flex flex-col items-center w-full"
                  >
                    {/* Infinite Fluid Wave Container */}
                    <div className="relative w-56 h-56 rounded-full border border-blue-400/30 bg-gradient-to-tr from-blue-600/20 via-cyan-500/10 to-indigo-600/20 backdrop-blur-2xl flex items-center justify-center shadow-[0_0_60px_rgba(41,151,255,0.2)]">
                      <Droplets className="w-16 h-16 text-cyan-400 animate-pulse" />
                      
                      {/* Orbiting particles */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                        className="absolute inset-0 border border-white/10 rounded-full"
                      >
                        <div className="w-3 h-3 rounded-full bg-cyan-400 absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-[0_0_10px_#22d3ee]" />
                      </motion.div>
                    </div>

                    <div className="mt-4 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-mono">
                      SENSE LÍMITS RIGIDS · MEDI CONTINU
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Explanatory Content Card */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ type: 'spring', damping: 22, stiffness: 140 }}
                className="space-y-6"
              >
                <div className="inline-block px-3 py-1 rounded-md bg-white/[0.06] border border-white/10 text-xs font-mono text-neutral-300">
                  {current.badge}
                </div>

                <h3 className="apple-headline text-white font-bold">{current.title}</h3>

                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                  {current.description}
                </p>

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block mb-1">
                    Del teu quadern de classe:
                  </span>
                  <p className="text-sm text-neutral-200 italic font-serif">
                    «{current.example}»
                  </p>
                </div>

                {/* Attribute Checklist */}
                <div className="space-y-2 pt-2">
                  {current.attributes.map((attr, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                    >
                      <span className="text-sm text-neutral-400">{attr.name}</span>
                      <span
                        className={`text-xs font-mono font-medium px-2.5 py-1 rounded-full ${
                          attr.ok
                            ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/20'
                            : 'bg-amber-500/15 text-amber-300 border border-amber-500/20'
                        }`}
                      >
                        {attr.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Scroll Tip Hint */}
        <div className="max-w-6xl mx-auto w-full pb-6 text-center text-xs font-mono text-neutral-500 flex items-center justify-center gap-2">
          <span>Desplaça avall per veure com interactuen</span>
          <ArrowRight className="w-3.5 h-3.5 rotate-90" />
        </div>
      </div>
    </section>
  );
};
