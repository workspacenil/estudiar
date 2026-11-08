import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, Zap, Info, Flame, ShieldAlert, Sparkles, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const SectionDensityLaboratory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  // Interactive controls
  const [material, setMaterial] = useState<'acer' | 'fusta' | 'alumini'>('acer');
  const [objectSize, setObjectSize] = useState<number>(2); // 1 = petit, 2 = mitjà, 3 = gegant
  const [immersed, setImmersed] = useState<boolean>(false);
  const [stepIndex, setStepIndex] = useState<0 | 1 | 2>(0);

  // Materials database
  const materials = {
    acer: {
      name: 'Acer (Del teu quadern)',
      density: 7.8, // g/cm3
      color: 'from-slate-400 to-zinc-600',
      textColor: 'text-zinc-200',
      borderColor: 'border-zinc-400/40',
      glow: 'rgba(212, 212, 216, 0.2)',
      sink: true,
      description: "Té la matèria molt concentrada. S'enfonsa en l'aigua.",
    },
    fusta: {
      name: 'Fusta de Pi',
      density: 0.6,
      color: 'from-amber-600 to-yellow-800',
      textColor: 'text-amber-200',
      borderColor: 'border-amber-500/40',
      glow: 'rgba(245, 158, 11, 0.2)',
      sink: false,
      description: "Menys densa que l'aigua. Sura de manera natural.",
    },
    alumini: {
      name: 'Alumini',
      density: 2.7,
      color: 'from-cyan-400 to-blue-500',
      textColor: 'text-cyan-200',
      borderColor: 'border-cyan-400/40',
      glow: 'rgba(34, 211, 238, 0.2)',
      sink: true,
      description: "Metall lleuger, però més dens que l'aigua (1.0 g/cm³).",
    },
  };

  const currentMat = materials[material];

  // Calculate dynamic mass and volume based on size
  const volume = objectSize * 50; // cm3
  const mass = Math.round(volume * currentMat.density); // g

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
          const p = self.progress;
          if (p < 0.33) setStepIndex(0);
          else if (p < 0.66) setStepIndex(1);
          else setStepIndex(2);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="densitat"
      ref={containerRef}
      className="relative w-full bg-[#050508] min-h-[300vh]"
    >
      <div
        ref={pinRef}
        className="w-full h-screen flex flex-col justify-between py-10 px-6 sm:px-12 relative overflow-hidden"
      >
        {/* Ambient Glows */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] bg-blue-500/10 blur-[140px] pointer-events-none rounded-full" />

        {/* Header */}
        <div className="max-w-6xl mx-auto w-full pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-purple-400 mb-2">
              <Scale className="w-3.5 h-3.5" />
              <span>02 // DINÀMICA DE LA MATÈRIA</span>
            </div>
            <h2 className="apple-headline text-white">Laboratori de Densitat</h2>
          </div>

          {/* Scrollytelling Step Pill */}
          <div className="flex items-center gap-2 bg-white/[0.04] p-1.5 rounded-full border border-white/[0.08] backdrop-blur-md">
            {[
              { id: 0, label: 'Extensiva' },
              { id: 1, label: 'Intensiva (ρ)' },
              { id: 2, label: 'Flotabilitat' },
            ].map((s) => (
              <button
                key={s.id}
                onClick={() => setStepIndex(s.id as 0 | 1 | 2)}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-300 ${
                  stepIndex === s.id
                    ? 'bg-purple-600 text-white shadow-sm shadow-purple-500/40'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Center Interactive Arena */}
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto z-10">
          {/* Left Column: Visual Simulation & Tank */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative w-full max-w-lg h-96 rounded-3xl glass-card p-6 flex flex-col justify-between overflow-hidden">
              {/* Material Selection Chips */}
              <div className="flex items-center justify-between gap-2 z-20">
                {(['acer', 'fusta', 'alumini'] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMaterial(m)}
                    className={`flex-1 py-1.5 px-3 rounded-full text-xs font-mono transition-all ${
                      material === m
                        ? 'bg-white text-black font-semibold shadow-md'
                        : 'bg-white/[0.05] text-neutral-400 hover:text-white hover:bg-white/[0.08]'
                    }`}
                  >
                    {m.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Water Tank or Free Space Simulation Area */}
              <div className="relative flex-1 my-4 rounded-2xl bg-gradient-to-b from-white/[0.02] to-white/[0.05] border border-white/[0.06] overflow-hidden flex items-center justify-center">
                {/* Water layer if in Step 2 (Flotabilitat) */}
                {stepIndex === 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-blue-700/40 via-cyan-500/30 to-blue-400/20 backdrop-blur-sm border-t border-cyan-400/50 flex flex-col justify-between p-3"
                  >
                    <div className="flex justify-between items-center text-[11px] font-mono text-cyan-200">
                      <span>SUPERFÍCIE DE L'AIGUA</span>
                      <span className="px-2 py-0.5 rounded bg-blue-900/50 border border-blue-400/30">
                        &rho; aigua = 1,0 g/cm³
                      </span>
                    </div>
                    <div className="text-[10px] font-mono text-blue-300/60 text-center">
                      FONS DEL TANC EXPERIMENTAL
                    </div>
                  </motion.div>
                )}

                {/* The Object Cube */}
                <motion.div
                  layout
                  animate={
                    stepIndex === 2
                      ? currentMat.sink
                        ? { y: 60, scale: 0.9 } // sinks to the bottom
                        : { y: -30, scale: 0.9 } // floats on top
                      : { y: 0, scale: 1 }
                  }
                  transition={{ type: 'spring', damping: 18, stiffness: 100 }}
                  className={`relative z-10 rounded-2xl bg-gradient-to-br ${currentMat.color} border ${currentMat.borderColor} shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-300 p-4`}
                  style={{
                    width: `${50 + objectSize * 30}px`,
                    height: `${50 + objectSize * 30}px`,
                  }}
                >
                  <span className="text-[11px] font-mono font-bold text-white drop-shadow">
                    {currentMat.name.split(' ')[0]}
                  </span>
                  <span className="text-[10px] font-mono text-white/80 mt-1">
                    {mass} g
                  </span>

                  {stepIndex === 2 && (
                    <span className="text-[9px] font-mono font-semibold px-2 py-0.5 mt-1 rounded bg-black/50 text-white">
                      {currentMat.sink ? "S'enfonsa!" : 'Sura!'}
                    </span>
                  )}
                </motion.div>
              </div>

              {/* Bottom Interactive Size Slider */}
              <div className="z-20 flex items-center justify-between gap-4 pt-2 border-t border-white/10">
                <span className="text-xs font-mono text-neutral-400">Canviar Mida:</span>
                <div className="flex items-center gap-2">
                  {[1, 2, 3].map((size) => (
                    <button
                      key={size}
                      onClick={() => setObjectSize(size)}
                      className={`w-7 h-7 rounded-lg text-xs font-mono transition-all flex items-center justify-center ${
                        objectSize === size
                          ? 'bg-purple-500 text-white shadow-sm shadow-purple-500/50'
                          : 'bg-white/[0.05] text-neutral-400 hover:text-white'
                      }`}
                    >
                      {size === 1 ? 'S' : size === 2 ? 'M' : 'L'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Formula & Insights */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-5">
            {/* Stage Tag */}
            <div className="inline-block px-3 py-1 rounded-md bg-white/[0.06] border border-white/10 text-xs font-mono text-purple-300">
              {stepIndex === 0
                ? 'PAS 1: PROPIETATS EXTENSIVES'
                : stepIndex === 1
                ? 'PAS 2: PROPIETATS INTENSIVES'
                : 'PAS 3: APLICACIÓ I FLOTACIÓ'}
            </div>

            {/* Title & Explanation */}
            <div>
              <h3 className="apple-headline text-white mb-2">
                {stepIndex === 0 && 'Massa i Volum depenen de la mida'}
                {stepIndex === 1 && 'La Densitat és una signatura atòmica invariant'}
                {stepIndex === 2 && 'Per què l’acer s’enfonsa i la fusta sura?'}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {stepIndex === 0 &&
                  'Si agafem una mida més gran (S &rarr; L), la quantitat de matèria (massa) i l’espai ocupat (volum) es multipliquen. Són propietats EXTENSIVES.'}
                {stepIndex === 1 &&
                  'Dividint la massa pel volum obtenim la densitat (ρ = m/V). Per molt que augmentis la mida, el resultat dona EXACTAMENT el mateix. És INTENSIVA.'}
                {stepIndex === 2 &&
                  'Com apuntes a la teva llibreta: «L’acer és més dens». La seva matèria està tan compactada (7.8 g/cm³) que la gravetat venç l’empenta de l’aigua (1.0 g/cm³).'}
              </p>
            </div>

            {/* Real-time Math Display Box */}
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md space-y-3">
              <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/[0.08]">
                <span className="text-neutral-400">Càlcul en Temps Real:</span>
                <span className="text-purple-400 font-bold">&rho; = Massa / Volum</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-xl bg-white/[0.03]">
                  <div className="text-[10px] text-neutral-400 font-mono">Massa (m)</div>
                  <div className="text-sm font-mono font-bold text-white">{mass} g</div>
                  <div className="text-[9px] text-cyan-400 font-mono mt-0.5">Extensiva</div>
                </div>

                <div className="p-2 rounded-xl bg-white/[0.03]">
                  <div className="text-[10px] text-neutral-400 font-mono">Volum (V)</div>
                  <div className="text-sm font-mono font-bold text-white">{volume} cm³</div>
                  <div className="text-[9px] text-cyan-400 font-mono mt-0.5">Extensiva</div>
                </div>

                <div className="p-2 rounded-xl bg-purple-500/20 border border-purple-400/30">
                  <div className="text-[10px] text-purple-200 font-mono">Densitat (&rho;)</div>
                  <div className="text-sm font-mono font-bold text-purple-300">
                    {currentMat.density} g/cm³
                  </div>
                  <div className="text-[9px] text-purple-300 font-mono mt-0.5 font-bold">
                    INTENSIVA!
                  </div>
                </div>
              </div>
            </div>

            {/* Notebook Insight Callout */}
            <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-400/20 text-xs text-neutral-300 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Clau d'examen:</strong> No confonguis la quantitat de matèria (massa) amb la
                concentració de matèria (densitat). 1 kg de palla pesa el mateix que 1 kg d'acer,
                però l'acer ocupa molt menys espai!
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Tip Hint */}
        <div className="max-w-6xl mx-auto w-full pb-4 text-center text-xs font-mono text-neutral-500">
          Continua baixant per explorar l'Escala Mètrica Decimal
        </div>
      </div>
    </section>
  );
};
