import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Feather, Check, AlertCircle, Sparkles, BookOpen, Search, HelpCircle } from 'lucide-react';

export const SectionOrtografiaDieresi: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'normes' | 'diacritics' | 'dieresi'>('normes');
  const [diacriticSearch, setDiacriticSearch] = useState<string>('');

  const diacriticsList = [
    { withAcc: 'bé / béns', meaningWith: 'Adverbi de manera / Riqueses o possessions', withoutAcc: 'be / bens', meaningWithout: 'Nom de la lletra b / Anyell, corder' },
    { withAcc: 'déu / déus', meaningWith: 'Ésser suprem diví', withoutAcc: 'deu / deus', meaningWithout: 'Xifra 10 / Forma del verb deure' },
    { withAcc: 'és', meaningWith: 'Forma del verb ser (ell és)', withoutAcc: 'es', meaningWithout: 'Pronom reflexiu (es pentina)' },
    { withAcc: 'mà', meaningWith: 'Part anatòmica del cos humà', withoutAcc: 'ma', meaningWithout: 'Pronom possessiu àton (ma mare)' },
    { withAcc: 'més', meaningWith: 'Quantitatiu o comparatiu (vull més)', withoutAcc: 'mes', meaningWithout: 'Període de l’any / Conjunció adversativa' },
    { withAcc: 'món', meaningWith: 'El planeta Terra o l’univers', withoutAcc: 'mon', meaningWithout: 'Pronom possessiu àton (mon pare)' },
    { withAcc: 'pèl / pèls', meaningWith: 'Filament capil·lar de la pell', withoutAcc: 'pel', meaningWithout: 'Contracció per + el (camina pel bosc)' },
    { withAcc: 'què', meaningWith: 'Pronom interrogatiu tònic (què fas?)', withoutAcc: 'que', meaningWithout: 'Conjunció o relatiu àton (el noi que ve)' },
    { withAcc: 'sé', meaningWith: 'Forma del verb saber (jo sé la veritat)', withoutAcc: 'se', meaningWithout: 'Pronom reflexiu (se’n va)' },
    { withAcc: 'sí', meaningWith: 'Adverbi d’afirmació (ha dit que sí)', withoutAcc: 'si', meaningWithout: 'Conjunció condicional (si véns) / Nota musical' },
    { withAcc: 'sòl', meaningWith: 'Superfície de la terra o terreny', withoutAcc: 'sol', meaningWithout: 'Astre rei / Sense companyia / Nota musical' },
    { withAcc: 'són', meaningWith: 'Forma del verb ser (ells són)', withoutAcc: 'son', meaningWithout: 'Ganes de dormir / Possessiu (son pare)' },
    { withAcc: 'té', meaningWith: 'Forma del verb tenir (ell té un llibre)', withoutAcc: 'te', meaningWithout: 'Infusió d’herbes / Lletra t / Pronom feble' },
    { withAcc: 'ús', meaningWith: 'Acció d’usar, utilitat d’un objecte', withoutAcc: 'us', meaningWithout: 'Pronom feble de 2a persona (us convido)' },
    { withAcc: 'vós', meaningWith: 'Tractament formal de respecte', withoutAcc: 'vos', meaningWithout: 'Pronom feble (acosteu-vos)' },
  ];

  const filteredDiacritics = diacriticsList.filter(
    (d) =>
      d.withAcc.toLowerCase().includes(diacriticSearch.toLowerCase()) ||
      d.withoutAcc.toLowerCase().includes(diacriticSearch.toLowerCase()) ||
      d.meaningWith.toLowerCase().includes(diacriticSearch.toLowerCase())
  );

  return (
    <section id="ortografia-section" className="relative w-full bg-[#050508] py-24 px-6 sm:px-12 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-amber-600/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] bg-red-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-amber-400 mb-4">
            <Feather className="w-3.5 h-3.5" />
            <span>03 &bull; LABORATORI D'ORTOGRAFIA</span>
          </div>
          <h2 className="apple-display text-white mb-4">L'Accentuació i la Dièresi</h2>
          <p className="apple-subhead text-neutral-400">
            Les regles d'or per marcar la vocal tònica, diferenciar paraules amb l'accent diacrític
            i dominar quan cal posar o estalviar la dièresi.
          </p>

          {/* Navigation Pill Tabs */}
          <div className="inline-flex items-center gap-1.5 p-1.5 mt-8 rounded-full bg-white/[0.05] border border-white/[0.08] backdrop-blur-xl">
            <button
              onClick={() => setActiveTab('normes')}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                activeTab === 'normes'
                  ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Normes Generals & Tipus d'Accent
            </button>
            <button
              onClick={() => setActiveTab('diacritics')}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                activeTab === 'diacritics'
                  ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Els 15 Accents Diacrítics
            </button>
            <button
              onClick={() => setActiveTab('dieresi')}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                activeTab === 'dieresi'
                  ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              La Dièresi (¨) & Estalvis
            </button>
          </div>
        </div>

        {/* Tab 1: Normes Generals */}
        {activeTab === 'normes' && (
          <div className="space-y-8">
            {/* Obert vs Tancat visual cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6 border-amber-500/30">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-amber-400 font-bold">ACCENT OBERT ( ` )</span>
                  <span className="text-2xl font-serif text-amber-300">à, è, ò</span>
                </div>
                <p className="text-xs text-neutral-300 mb-4">
                  S'escriu inclinat cap a l'esquerra per a vocals amb so obert o neutre:
                </p>
                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex justify-between">
                    <span className="text-amber-300 font-bold">a: català, àlbum</span>
                    <span className="text-neutral-400">Sempre obert!</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex justify-between">
                    <span className="text-amber-300 font-bold">e: pèsol, cafè, ciència</span>
                    <span className="text-neutral-400">So obert [ɛ]</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex justify-between">
                    <span className="text-amber-300 font-bold">o: això, pròxim, cançó</span>
                    <span className="text-neutral-400">So obert [ɔ]</span>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 border-blue-500/30">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-blue-400 font-bold">ACCENT TANCAT ( ´ )</span>
                  <span className="text-2xl font-serif text-blue-300">é, í, ó, ú</span>
                </div>
                <p className="text-xs text-neutral-300 mb-4">
                  S'escriu inclinat cap a la dreta per a vocals amb so tancat:
                </p>
                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex justify-between">
                    <span className="text-blue-300 font-bold">i, u: pastís, ídol, núvol, cautxú</span>
                    <span className="text-neutral-400">Sempre tancats!</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex justify-between">
                    <span className="text-blue-300 font-bold">e: préssec, permès, també</span>
                    <span className="text-neutral-400">So tancat [e]</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex justify-between">
                    <span className="text-blue-300 font-bold">o: presó, cantó, perdó</span>
                    <span className="text-neutral-400">So tancat [o]</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Agudes, Planes, Esdrúixoles Table */}
            <div className="glass-panel p-8 rounded-3xl space-y-6">
              <h3 className="text-xl font-bold text-white">Les 3 Regles d'Accentuació Sil·làbica</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Agudes */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-3">
                  <div className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-mono font-bold inline-block">
                    AGUDES (Última síl·laba)
                  </div>
                  <div className="text-sm text-neutral-300 font-medium">
                    S'accentuen si acaben en:
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/40 text-xs font-mono text-cyan-300 font-bold">
                    Vocal, Vocal + s, -en, -in
                  </div>
                  <div className="text-xs text-neutral-400 font-serif italic pt-1">
                    Exemples: demà, perquè, camí, camió, cautxú, cabàs, mengés, avís, blavós, autobús, amén, Dublín.
                  </div>
                </div>

                {/* Planes */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-3">
                  <div className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold inline-block">
                    PLANES (Penúltima síl·laba)
                  </div>
                  <div className="text-sm text-neutral-300 font-medium">
                    S'accentuen quan NO acaben en les terminacions d'agudes (I quan acaben en diftong):
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/40 text-xs font-mono text-amber-300 font-bold">
                    NO (Vocal, Vocal+s, -en, -in) + Diftong
                  </div>
                  <div className="text-xs text-neutral-400 font-serif italic pt-1">
                    Exemples: fàcil, fenòmens, miràveu, dèieu, exàmens, cànem.
                  </div>
                </div>

                {/* Esdrúixoles */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-3">
                  <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold inline-block">
                    ESDRÚIXOLES (Antepenúltima)
                  </div>
                  <div className="text-sm text-neutral-300 font-medium">
                    La regla més senzilla de totes:
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 font-bold">
                    SEMPRE PORTEN ACCENT!
                  </div>
                  <div className="text-xs text-neutral-400 font-serif italic pt-1">
                    Exemples: fàbrica, justícia, matemàtiques, música, física, química, història.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Accents Diacrítics */}
        {activeTab === 'diacritics' && (
          <div className="glass-panel p-8 rounded-3xl space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">Llista Oficial dels 15 Accents Diacrítics</h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Fixats per l'Institut d'Estudis Catalans per evitar confusions semàntiques.
                </p>
              </div>

              {/* Quick Search Input */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cerca una paraula..."
                  value={diacriticSearch}
                  onChange={(e) => setDiacriticSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Diacritics Table */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredDiacritics.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-amber-400/40 transition-colors space-y-2"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-sm font-mono font-bold text-amber-300">{item.withAcc}</span>
                    <span className="text-xs font-mono text-neutral-500">vs</span>
                    <span className="text-sm font-mono font-bold text-neutral-300">{item.withoutAcc}</span>
                  </div>
                  <div className="text-[11px] text-amber-200/90 font-mono">
                    <strong>Amb accent:</strong> {item.meaningWith}
                  </div>
                  <div className="text-[11px] text-neutral-400 font-mono">
                    <strong>Sense accent:</strong> {item.meaningWithout}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: La Dièresi & Estalvis */}
        {activeTab === 'dieresi' && (
          <div className="space-y-8">
            {/* Quan es posa la dièresi */}
            <div className="glass-panel p-8 rounded-3xl space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 font-bold">
                  QUAN S'HA DE POSAR LA DIÈRESI ( ¨ )
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">Els 3 Casos On Cal Dièresi</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-2">
                  <div className="text-xs font-mono text-cyan-300 font-bold">1. Pronunciar la 'u'</div>
                  <div className="text-xs text-neutral-300">
                    En els grups <strong>qüe, qüi, güe, güi</strong> per indicar que la 'u' es pronuncia:
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/40 text-xs font-mono text-cyan-200 font-bold">
                    següent, pingüí, aigües, freqüent
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-2">
                  <div className="text-xs font-mono text-cyan-300 font-bold">2. Evitar el diftong</div>
                  <div className="text-xs text-neutral-300">
                    Per indicar que la <strong>i</strong> o la <strong>u</strong> no formen diftong amb la vocal anterior (hiat):
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/40 text-xs font-mono text-cyan-200 font-bold">
                    Suïssa, peüc, copiï, raïm, veí / veïna
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-2">
                  <div className="text-xs font-mono text-cyan-300 font-bold">3. 'i' no consonant</div>
                  <div className="text-xs text-neutral-300">
                    Per indicar que la <strong>i</strong> entre dues vocals no fa de consonant:
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/40 text-xs font-mono text-cyan-200 font-bold">
                    produïa, reduïen, agraïen, obeïa
                  </div>
                </div>
              </div>
            </div>

            {/* Els 5 Casos d'Estalvi de Dièresi */}
            <div className="glass-card p-8 border-red-500/20 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 font-bold">
                  ESTALVI DE DIÈRESI: ELS 5 CASOS CLAU DE L'EXAMEN
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">Quan NO escrivim dièresi encara que no faci diftong:</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-1.5">
                  <span className="text-xs font-mono font-bold text-amber-300">1. Té accent gràfic</span>
                  <p className="text-xs text-neutral-400">
                    L'accent té preferència total sobre la dièresi:
                  </p>
                  <div className="text-xs font-mono text-white font-bold">
                    suís, país, agraíem
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-1.5">
                  <span className="text-xs font-mono font-bold text-amber-300">2. Sufixos -isme, -ista</span>
                  <p className="text-xs text-neutral-400">
                    Mots acabats amb aquests sufixos no en porten mai:
                  </p>
                  <div className="text-xs font-mono text-white font-bold">
                    egoisme, egoista, heroisme, altruista
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-1.5">
                  <span className="text-xs font-mono font-bold text-amber-300">3. Terminacions -us, -um</span>
                  <p className="text-xs text-neutral-400">
                    Terminacions llatines cultes:
                  </p>
                  <div className="text-xs font-mono text-white font-bold">
                    Màrius, aquàrium, pòdium, harmònium
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-1.5">
                  <span className="text-xs font-mono font-bold text-amber-300">4. Prefixos re-, co-, contra-</span>
                  <p className="text-xs text-neutral-400">
                    Quan van seguits de vocal i, u:
                  </p>
                  <div className="text-xs font-mono text-white font-bold">
                    reimpressió, coincidir, contraindicar
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-1.5 sm:col-span-2">
                  <span className="text-xs font-mono font-bold text-amber-300">
                    5. Verbs acabats en vocal + ir
                  </span>
                  <p className="text-xs text-neutral-400">
                    En l'<strong>infinitiu</strong>, <strong>gerundi</strong>, <strong>futur</strong> i <strong>condicional</strong>:
                  </p>
                  <div className="text-xs font-mono text-emerald-300 font-bold">
                    reduir, reduint, reduiré, reduiria (sense dièresi!)
                  </div>
                  <div className="text-[11px] text-neutral-500 font-mono">
                    (En canvi, al present o imperfet sí que en porten: reduïm, reduïa).
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
