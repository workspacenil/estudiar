import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Scale,
  Ruler,
  Box,
  Droplets,
  AlertTriangle,
  Sparkles,
  Ship,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';

export const BentoGridSummary: React.FC = () => {
  const [activePropertyTab, setActivePropertyTab] = useState<'extensiva' | 'intensiva'>('intensiva');
  const [boatHollow, setBoatHollow] = useState<boolean>(true);

  return (
    <section id="bento" className="relative w-full bg-[#030305] py-28 px-6 sm:px-12 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-purple-600/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 // SÍNTESI PRO BENTO</span>
          </div>
          <h2 className="apple-display text-white mb-4">El Resum Interactiu</h2>
          <p className="apple-subhead text-neutral-400">
            Tots els conceptes clau estructurats en targetes reactives amb disseny d'alta fidelitat.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Definició de Matèria (8 cols) */}
          <div className="md:col-span-8 glass-card p-8 flex flex-col justify-between group">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                  Pilar Fonamental
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">Què és la Matèria?</h3>
                <p className="text-sm text-neutral-300 max-w-lg leading-relaxed">
                  Tot allò que existeix a l'univers físic compleix simultàniament dues condicions
                  inseparables: posseeix <strong className="text-white">massa</strong> (quantitat d'inèrcia i partícules) i ocupa un <strong className="text-white">volum</strong> a l'espai tridimensional.
                </p>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 border border-white/10 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform">
                <Box className="w-6 h-6" />
              </div>
            </div>

            {/* Interactive Mass + Space Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-400/30 transition-colors">
                <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-bold mb-1">
                  <Scale className="w-4 h-4" />
                  <span>MASSA (m)</span>
                </div>
                <div className="text-xs text-neutral-400">
                  Mesura la quantitat de matèria d'un cos. Unitat SI: <strong className="text-neutral-200">quilogram (kg)</strong>.
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-cyan-400/30 transition-colors">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold mb-1">
                  <Ruler className="w-4 h-4" />
                  <span>VOLUM (V)</span>
                </div>
                <div className="text-xs text-neutral-400">
                  L'espai tridimensional que ocupa un cos. Unitat SI: <strong className="text-neutral-200">metre cúbic (m³)</strong>.
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: L'Equivalència d'Or Volum ↔ Capacitat (4 cols) */}
          <div className="md:col-span-4 glass-card p-8 flex flex-col justify-between group">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">
                La Regla Màgica
              </span>
              <h3 className="text-xl font-bold text-white mb-2">Equivalència d'Or</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                Com connectem el volum geomètric (m³) amb la capacitat dels líquids (litres)?
              </p>

              {/* Equivalence Visual Pills */}
              <div className="space-y-3 font-mono">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-400/25 flex items-center justify-between">
                  <span className="text-sm font-bold text-amber-300">1 dm³</span>
                  <span className="text-xs text-neutral-400">&harr;</span>
                  <span className="text-sm font-bold text-white">1 Litre (L)</span>
                </div>

                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-400/25 flex items-center justify-between">
                  <span className="text-sm font-bold text-cyan-300">1 cm³</span>
                  <span className="text-xs text-neutral-400">&harr;</span>
                  <span className="text-sm font-bold text-white">1 mil·lilitre (mL)</span>
                </div>

                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-400/25 flex items-center justify-between">
                  <span className="text-sm font-bold text-purple-300">1 m³</span>
                  <span className="text-xs text-neutral-400">&harr;</span>
                  <span className="text-sm font-bold text-white">1.000 L (1 kL)</span>
                </div>
              </div>
            </div>

            <div className="text-[11px] font-mono text-neutral-400 mt-4 text-center">
              💡 Vista al test That Quiz: 238,7 cm³ = 238,7 mL
            </div>
          </div>

          {/* Card 3: Matriu Interactiva de Propietats (6 cols) */}
          <div className="md:col-span-6 glass-card p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
                  Classificació Científica
                </span>

                {/* Tabs */}
                <div className="flex gap-1 bg-white/[0.05] p-1 rounded-full border border-white/10">
                  <button
                    onClick={() => setActivePropertyTab('intensiva')}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                      activePropertyTab === 'intensiva'
                        ? 'bg-purple-600 text-white font-semibold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Intensives
                  </button>
                  <button
                    onClick={() => setActivePropertyTab('extensiva')}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                      activePropertyTab === 'extensiva'
                        ? 'bg-purple-600 text-white font-semibold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Extensives
                  </button>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {activePropertyTab === 'intensiva'
                  ? 'Propietats Intensives (Invariants)'
                  : 'Propietats Extensives (Depenen de la mida)'}
              </h3>

              <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                {activePropertyTab === 'intensiva'
                  ? "No depenen de la mida ni de la quantitat de matèria de l'objecte. Permeten identificar de quina substància es tracta!"
                  : "Depenen directament de la mida o la quantitat de matèria que conté l'objecte. Si talles l'objecte per la meitat, es divideixen!"}
              </p>

              {/* Dynamic list of properties */}
              <div className="grid grid-cols-2 gap-3">
                {activePropertyTab === 'intensiva' ? (
                  <>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-purple-500/20">
                      <div className="text-xs font-bold text-purple-300 font-mono">Densitat (ρ)</div>
                      <div className="text-[11px] text-neutral-400 mt-0.5">m/V és constant</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-purple-500/20">
                      <div className="text-xs font-bold text-purple-300 font-mono">Punt de fusió</div>
                      <div className="text-[11px] text-neutral-400 mt-0.5">El gel sempre fon a 0°C</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-purple-500/20">
                      <div className="text-xs font-bold text-purple-300 font-mono">Color / Brillantor</div>
                      <div className="text-[11px] text-neutral-400 mt-0.5">Propietat qualitativa</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-purple-500/20">
                      <div className="text-xs font-bold text-purple-300 font-mono">Conductivitat</div>
                      <div className="text-[11px] text-neutral-400 mt-0.5">Transport d'electrons</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-blue-500/20">
                      <div className="text-xs font-bold text-blue-300 font-mono">Massa (m)</div>
                      <div className="text-[11px] text-neutral-400 mt-0.5">Varia amb la quantitat</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-blue-500/20">
                      <div className="text-xs font-bold text-blue-300 font-mono">Volum (V)</div>
                      <div className="text-[11px] text-neutral-400 mt-0.5">L'espai total ocupat</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-blue-500/20">
                      <div className="text-xs font-bold text-blue-300 font-mono">Longitud (L)</div>
                      <div className="text-[11px] text-neutral-400 mt-0.5">Mida geomètrica</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-blue-500/20">
                      <div className="text-xs font-bold text-blue-300 font-mono">Pes (P)</div>
                      <div className="text-[11px] text-neutral-400 mt-0.5">Força gravitatòria</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Card 4: Per què suren els vaixells d'acer? (6 cols) */}
          <div className="md:col-span-6 glass-card p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  Paradoxa Resolta
                </span>
                <Ship className="w-5 h-5 text-cyan-400" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Si l'acer és més dens que l'aigua... per què els vaixells suren?
              </h3>

              <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                L'acer sòlid (7,8 g/cm³) s'enfonsa. Però un vaixell no és un bloc massís d'acer:
                la seva estructura està buida per dins i plena d'aire!
              </p>

              {/* Interactive Boat Hull Demo */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex flex-col items-center justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <button
                    onClick={() => setBoatHollow(true)}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                      boatHollow
                        ? 'bg-cyan-500 text-black font-bold'
                        : 'bg-white/10 text-neutral-400'
                    }`}
                  >
                    Buit d'acer (Vaixell)
                  </button>
                  <button
                    onClick={() => setBoatHollow(false)}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                      !boatHollow
                        ? 'bg-red-500 text-white font-bold'
                        : 'bg-white/10 text-neutral-400'
                    }`}
                  >
                    Bloc massís d'acer
                  </button>
                </div>

                <div className="text-center font-mono text-xs">
                  {boatHollow ? (
                    <span className="text-emerald-300">
                      Densitat mitjana (acer + aire) = <strong>0,8 g/cm³</strong> &lt; 1,0 g/cm³ &rarr;{' '}
                      <strong>SURA PERFECTAMENT! 🚢</strong>
                    </span>
                  ) : (
                    <span className="text-red-300">
                      Densitat d'acer massís = <strong>7,8 g/cm³</strong> &gt; 1,0 g/cm³ &rarr;{' '}
                      <strong>S'ENFONSA AL FONS! ⚓</strong>
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="text-[11px] font-mono text-neutral-500 mt-4">
              Aplicació directa del principi d'Arquimedes i la relació Massa / Volum.
            </div>
          </div>

          {/* Card 5: Els 4 Consells d'Or per no fallar al Test (12 cols) */}
          <div className="md:col-span-12 glass-card p-8 border-cyan-500/20 bg-gradient-to-r from-blue-950/20 via-black to-cyan-950/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Consells d'Or per als Canvis d'Unitats a l'Examen</h4>
                <p className="text-xs text-neutral-400 font-mono">
                  Guarda aquests 4 trucs al cap per treure un 10 absolut:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs font-mono text-cyan-300 font-bold mb-1">1. DRETA = MULTIPLICAR</div>
                <div className="text-xs text-neutral-400">
                  En baixar a unitats més petites (ex: kg &rarr; g), multiplica per 10 per cada esglaó.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs font-mono text-blue-300 font-bold mb-1">2. ESQUERRA = DIVIDIR</div>
                <div className="text-xs text-neutral-400">
                  En pujar a unitats més grans (ex: ml &rarr; l), divideix entre 10 per cada esglaó.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs font-mono text-purple-300 font-bold mb-1">3. COMPTE AMB «da» i «d»</div>
                <div className="text-xs text-neutral-400">
                  <strong>dag</strong> és decagram (gran, x10). <strong>dg</strong> és decigram (petit, :10). Entre ells hi ha 2 salts!
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs font-mono text-emerald-300 font-bold mb-1">4. MOURE LA COMA</div>
                <div className="text-xs text-neutral-400">
                  No cal fer càlculs llargs: cada salt mou la coma decimal exactament una posició.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
