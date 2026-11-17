import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { History, BookOpen, Crown, ShieldAlert, Sparkles, Award, Flag, ChevronRight, ChevronLeft } from 'lucide-react';

export const SectionHistoriaCatala: React.FC = () => {
  const [selectedEraIndex, setSelectedEraIndex] = useState<number>(0);

  const timelineEras = [
    {
      period: 'Segles IX – X',
      title: 'Del Llatí al Català: El Naixement',
      badge: 'ORÍGENS',
      icon: BookOpen,
      color: 'from-amber-500 to-yellow-600',
      description:
        'El català és una llengua romànica filla del llatí vulgar parlat pels soldats i colons romans a la Península Ibèrica. Durant els segles IX i X s’independitza progressivament com a idioma diferenciat.',
      milestones: [
        { label: 'Família lingüística', value: 'Romànica (deriva del llatí vulgar)' },
        { label: 'Evolució oral', value: 'Segles de transformació fonètica i lèxica' },
      ],
      quote: 'El pas del llatí a les llengües romàniques va ser un procés gradual i viu.',
    },
    {
      period: 'Segle XII',
      title: 'Els Primers Escrits Conservats',
      badge: 'PRIMERS TEXTOS',
      icon: Award,
      color: 'from-orange-500 to-amber-600',
      description:
        'Apareixen els primers testimonis escrits completament en llengua catalana, superant el llatí com a única eina documental escrita.',
      milestones: [
        { label: 'Liber Iudiciorum', value: 'Primer text jurídic en català (lleis civils)' },
        { label: "Homilies d'Organyà", value: 'Primer text literari en prosa conservat (sermons religiosos)' },
      ],
      quote: 'Les Homilies d’Organyà són considerades la partida de naixement de la literatura catalana.',
    },
    {
      period: 'Segles XIII – XIV',
      title: 'L’Expansió per la Mediterrània',
      badge: 'EXPANSIÓ',
      icon: Crown,
      color: 'from-blue-500 to-cyan-600',
      description:
        'Sota la Corona d’Aragó, la llengua s’expandeix des de la Catalunya Vella cap al País Valencià, les Illes Balears i diversos punts de la Mediterrània.',
      milestones: [
        { label: 'Territoris', value: 'València, Mallorca, Sicília, Sardenya (l’Alguer)' },
        { label: 'Prestigi', value: 'Llengua de poder reial, comerç marítim i cultura europea' },
      ],
      quote: 'El català esdevé una de les grans llengües de comunicació diplomàtica del Mare Nostrum.',
    },
    {
      period: 'Segle XV',
      title: 'El Segle d’Or de la Literatura',
      badge: 'APOGEU CLÀSSIC',
      icon: Crown,
      color: 'from-yellow-400 to-amber-500',
      description:
        'El moment de màxima esplendor de les lletres catalanes medievals, amb la Cancelleria Reial com a garant d’un model de llengua unificat, elegant i culte.',
      milestones: [
        { label: 'Joanot Martorell', value: 'Tirant lo Blanc (gran novel·la cavalleresca)' },
        { label: 'Ausiàs March', value: 'La poesia més influent i introspectiva del moment' },
        { label: 'Bernat Metge', value: 'Lo Somni (prosa humanista de primer ordre)' },
        { label: 'Joan Roís de Corella', value: 'Poesia i prosa d’alt refinament renaixentista' },
      ],
      quote: 'Cervantes va salvar el Tirant lo Blanc del foc al Quixot qualificant-lo com el millor llibre del món.',
    },
    {
      period: 'Segles XVI – XVIII',
      title: 'La Davallada i el 1716',
      badge: 'DECADÈNCIA',
      icon: ShieldAlert,
      color: 'from-red-500 to-rose-700',
      description:
        'Marginació progressiva de la vida pública davant la imposició de la monarquia hispànica. El 1716, la derrota a la Guerra de Successió culmina amb la pèrdua dels drets públics.',
      milestones: [
        { label: 'Decrets de Nova Planta (1716)', value: 'Abolició d’institucions i drets lingüístics oficials' },
        { label: 'Àmbit familiar', value: 'La llengua queda reduïda a l’ús oral i domèstic' },
      ],
      quote: 'Malgrat la prohibició institucional, el poble manté viu el català en la tradició oral.',
    },
    {
      period: 'Segle XIX',
      title: 'La Renaixença: El Gran Ressorgiment',
      badge: 'RESURRECCIÓ',
      icon: Sparkles,
      color: 'from-emerald-500 to-teal-600',
      description:
        'Moviment cultural i romàntic que es proposa retornar a la llengua catalana la dignitat i prestigi que havia tingut al Segle d’Or.',
      milestones: [
        { label: 'Jacint Verdaguer', value: 'La gran poesia èpica (L’Atlàntida, Canigó)' },
        { label: 'Àngel Guimerà', value: 'El teatre modern més universal (Terra Baixa, Mar i Cel)' },
        { label: 'Narcís Oller', value: 'El creador de la novel·la realista moderna catalana' },
      ],
      quote: 'Els Jocs Florals i els grans autors van demostrar que el català era una llengua d’alta literatura.',
    },
    {
      period: '1900 – 1939',
      title: 'Modernisme i la Normalització Fabriana',
      badge: 'NORMES FABRA',
      icon: Flag,
      color: 'from-cyan-400 to-blue-500',
      description:
        'L’època clau on el català es dota de regles ortogràfiques modernes unificades i aconsegueix l’oficialitat institucional.',
      milestones: [
        { label: 'Pompeu Fabra (1913)', value: 'Normes ortogràfiques i gramàtica unificada' },
        { label: 'Mancomunitat (1914)', value: 'Consolidació a l’educació i administració' },
        { label: 'Estatut de 1932', value: 'Reconeixement com a llengua oficial a Catalunya' },
      ],
      quote: 'Gràcies a l’obra de Pompeu Fabra tenim l’ortografia moderna que aprenem avui a l’escola.',
    },
    {
      period: '1939 – Actualitat',
      title: 'De la Dictadura a la Societat Digital',
      badge: 'DEMOCRÀCIA & REPTES',
      icon: History,
      color: 'from-purple-500 to-indigo-600',
      description:
        'Després de 40 anys de repressió franquista i clandestinitat (1939-1975), la democràcia i l’Estatut de 1979 permeten recuperar la llengua a l’escola i mitjans públics.',
      milestones: [
        { label: 'Dictadura (1939-75)', value: 'Prohibició pública i persecució sistemàtica' },
        { label: 'Normalització (1979)', value: 'Recuperació d’escoles, TV3, ràdio i administració' },
        { label: 'Reptes del S. XXI', value: 'Presència a plataformes digitals, xarxes i streaming' },
      ],
      quote: 'La llengua viu en els seus parlants i en la seva capacitat d’adaptar-se al món contemporani.',
    },
  ];

  const currentEra = timelineEras[selectedEraIndex];

  return (
    <section id="historia-section" className="relative w-full bg-black py-24 px-6 sm:px-12 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[500px] bg-gradient-to-tr from-amber-600/10 via-orange-500/10 to-transparent blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-orange-400 mb-4">
            <History className="w-3.5 h-3.5" />
            <span>02 &bull; LÍNIA DEL TEMPS MIL·LENÀRIA</span>
          </div>
          <h2 className="apple-display text-white mb-4">L'Origen i Evolució del Català</h2>
          <p className="apple-subhead text-neutral-400">
            Dels primers manuscrits medievals fins als reptes del segle XXI: un viatge històric
            pels moments clau que van forjar la llengua.
          </p>
        </div>

        {/* Timeline Horizontal Navigator */}
        <div className="glass-panel p-4 rounded-full flex items-center justify-between gap-1 overflow-x-auto scrollbar-none max-w-5xl mx-auto">
          {timelineEras.map((era, idx) => {
            const isSelected = selectedEraIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedEraIndex(idx)}
                className={`px-3 sm:px-4 py-2 rounded-full text-xs font-mono whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/30'
                    : 'text-neutral-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {era.period}
              </button>
            );
          })}
        </div>

        {/* Big Interactive Card for the Selected Era */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedEraIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="glass-card p-8 sm:p-12 relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${currentEra.color} absolute top-0 left-0`} />

              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
                <div>
                  <div className="inline-block px-3 py-1 rounded-md bg-white/[0.06] border border-white/10 text-xs font-mono text-amber-300 mb-2">
                    {currentEra.badge} &bull; {currentEra.period}
                  </div>
                  <h3 className="apple-headline text-white font-bold">{currentEra.title}</h3>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    disabled={selectedEraIndex === 0}
                    onClick={() => setSelectedEraIndex((prev) => Math.max(0, prev - 1))}
                    className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    disabled={selectedEraIndex === timelineEras.length - 1}
                    onClick={() => setSelectedEraIndex((prev) => Math.min(timelineEras.length - 1, prev + 1))}
                    className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8">
                {currentEra.description}
              </p>

              {/* Milestones grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {currentEra.milestones.map((m, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-amber-400/30 transition-colors"
                  >
                    <span className="text-xs font-mono font-bold text-amber-300 block mb-1">
                      {m.label}
                    </span>
                    <span className="text-sm text-neutral-200">{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Historical Quote Callout */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-400/20 text-xs sm:text-sm text-amber-200/90 italic font-serif flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>«{currentEra.quote}»</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
