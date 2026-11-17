import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  Users,
  Radio,
  FileText,
  Key,
  MapPin,
  Mic,
  Edit3,
  ThumbsUp,
  ThumbsDown,
  Scale,
  ArrowRight,
  Sparkles,
  Layers,
  Check,
} from 'lucide-react';

export const SectionComunicacioArgumentacio: React.FC = () => {
  // Tabs for Oral vs Escrit
  const [oralEscritTab, setOralEscritTab] = useState<'oral' | 'escrit'>('oral');

  // Argumentation structure mode: deductiu vs inductiu
  const [argStructure, setArgStructure] = useState<'deductiu' | 'inductiu'>('deductiu');

  // Selected connector category
  const [activeConnectorCat, setActiveConnectorCat] = useState<number>(0);

  // Active element in communication diagram
  const [selectedElement, setSelectedElement] = useState<number>(0);

  const elementsComunicacio = [
    {
      name: '1. Emissor',
      icon: Users,
      desc: 'Persona que té la intenció de transmetre una informació o missatge.',
      detail: "Pot tenir un paper actiu (iniciador) o alternar-se constantment en una conversa.",
      example: 'Exemple: En Marc redactant un WhatsApp o un orador en un debat.',
    },
    {
      name: '2. Receptor',
      icon: Users,
      desc: 'Qui rep i descodifica o entén el missatge.',
      detail: 'Receptor actiu (reacciona i respon) vs Receptor passiu (només rep sense intervenir).',
      example: 'Exemple: La professora Maria que llegeix el missatge i respon.',
    },
    {
      name: '3. Missatge',
      icon: MessageSquare,
      desc: 'El contingut de la informació transmesa entre emissor i receptor.',
      detail: 'Format per idees, sentiments, dades o peticions concretes.',
      example: 'Exemple: "Professora, quin dia és el pròxim examen de Català?"',
    },
    {
      name: '4. Canal',
      icon: Radio,
      desc: "El mitjà físic o tecnològic pel qual viatja la informació.",
      detail: "Pot ser l'aire (so en la veu), paper imprès, telèfon mòbil, televisió o xarxes.",
      example: 'Exemple: El telèfon mòbil i l’aplicació WhatsApp (senyals digitals).',
    },
    {
      name: '5. Codi',
      icon: Key,
      desc: 'Sistema compartit de signes i regles que tots dos han de conèixer per entendre’s.',
      detail: 'Si emissor i receptor no comparteixen el codi, la comunicació fracassa.',
      example: 'Exemple: La llengua catalana (gramàtica, vocabulari i ortografia).',
    },
    {
      name: '6. Context',
      icon: MapPin,
      desc: 'L’espai, el temps i les circumstàncies que envolten l’acte comunicatiu.',
      detail: 'Determina si cal fer servir un to formal o informal, el moment i la idoneïtat.',
      example: 'Exemple: Aula escolar, diumenge a la tarda, o àmbit acadèmic.',
    },
  ];

  const connectorCategories = [
    {
      title: 'Per marcar l’ordre',
      color: 'border-blue-400/40 text-blue-300',
      items: ['en primer lloc', 'en segon lloc', "d'entrada", 'per començar', 'tot seguit', 'per acabar', 'finalment'],
    },
    {
      title: 'Per fer aclariments',
      color: 'border-cyan-400/40 text-cyan-300',
      items: ['és a dir', 'en altres paraules', 'cal tenir en compte', 'convé destacar', 'el més important'],
    },
    {
      title: 'Per exemplificar',
      color: 'border-emerald-400/40 text-emerald-300',
      items: ['per exemple', 'en el cas de', 'com a mostra', 'a tall d’il·lustració'],
    },
    {
      title: 'Per reprendre o continuar',
      color: 'border-amber-400/40 text-amber-300',
      items: ['com hem dit abans', 'tornant a', 'respecte a', 'pel que fa a', 'amb relació a', "d'altra banda", 'a més'],
    },
    {
      title: 'Per concloure',
      color: 'border-purple-400/40 text-purple-300',
      items: ['en resum', 'recapitulant', 'breument', 'en definitiva', 'per acabar'],
    },
  ];

  return (
    <section id="comunicacio-section" className="relative w-full bg-[#050508] py-24 px-6 sm:px-12 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-24">
        {/* Module Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-amber-400 mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>01 &bull; COMUNICACIÓ & ARGUMENTACIÓ</span>
          </div>
          <h2 className="apple-display text-white mb-4">L'Art de Comunicar i Convèncer</h2>
          <p className="apple-subhead text-neutral-400">
            Com ens connectem els humans, compartim informació a través de diferents canals i
            defensem idees amb estructura lògica i fets irrefutables.
          </p>
        </div>

        {/* 1. Els 6 Elements de la Comunicació Simulator */}
        <div className="glass-panel p-8 rounded-3xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">
                Estructura Fonamental
              </span>
              <h3 className="text-2xl font-bold text-white">Els 6 Elements de la Comunicació</h3>
            </div>
            <div className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-neutral-300">
              Fes clic a qualsevol element per veure la seva funció
            </div>
          </div>

          {/* Interactive Elements Grid / Diagram */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {elementsComunicacio.map((elem, idx) => {
              const Icon = elem.icon;
              const isSelected = selectedElement === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedElement(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? 'bg-amber-500/20 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.25)] scale-[1.02]'
                      : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] hover:border-white/15'
                  }`}
                >
                  <Icon className={`w-5 h-5 mb-2 ${isSelected ? 'text-amber-300' : 'text-neutral-400'}`} />
                  <div className="text-xs font-mono font-bold text-white mb-1">{elem.name}</div>
                  <div className="text-[10px] text-neutral-400 line-clamp-2">{elem.desc}</div>
                </button>
              );
            })}
          </div>

          {/* Expanded Selected Detail Box */}
          <div className="p-6 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  Element Actiu
                </span>
                <h4 className="text-lg font-bold text-white">
                  {elementsComunicacio[selectedElement].name}
                </h4>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {elementsComunicacio[selectedElement].detail}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 max-w-md w-full">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                Exemple Pràctic a l'Aula:
              </span>
              <p className="text-xs text-neutral-200 italic font-serif">
                «{elementsComunicacio[selectedElement].example}»
              </p>
            </div>
          </div>
        </div>

        {/* 2. Format: Oral vs Escrit */}
        <div className="glass-card p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                Formats del Missatge
              </span>
              <h3 className="text-2xl font-bold text-white">Missatge Oral vs. Missatge Escrit</h3>
            </div>

            <div className="flex gap-1 bg-white/[0.05] p-1 rounded-full border border-white/10">
              <button
                onClick={() => setOralEscritTab('oral')}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
                  oralEscritTab === 'oral'
                    ? 'bg-blue-600 text-white font-bold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Mic className="w-3.5 h-3.5" />
                <span>Oral (Immediat)</span>
              </button>
              <button
                onClick={() => setOralEscritTab('escrit')}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
                  oralEscritTab === 'escrit'
                    ? 'bg-emerald-600 text-white font-bold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Escrit (Diferit)</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <span className="text-[11px] font-mono text-neutral-400 block mb-1">TEMPS I RECEPCIÓ</span>
              <div className="text-sm font-bold text-white">
                {oralEscritTab === 'oral' ? 'Immediat (en temps real)' : 'Diferit (temps posterior)'}
              </div>
              <p className="text-xs text-neutral-400 mt-2">
                {oralEscritTab === 'oral'
                  ? 'Emissió i recepció ocorren al mateix instant.'
                  : 'El lector rep el text hores, dies o segles després.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <span className="text-[11px] font-mono text-neutral-400 block mb-1">GRAU D'ELABORACIÓ</span>
              <div className="text-sm font-bold text-white">
                {oralEscritTab === 'oral' ? 'Espontani i improvisat' : 'Planificat i rigorós'}
              </div>
              <p className="text-xs text-neutral-400 mt-2">
                {oralEscritTab === 'oral'
                  ? 'Permet rectificar sobre la marxa amb frases simples.'
                  : 'Sintaxi complexa, revisió curosa i vocabulari ric.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <span className="text-[11px] font-mono text-neutral-400 block mb-1">ELEMENTS NO VERBALS</span>
              <div className="text-sm font-bold text-white">
                {oralEscritTab === 'oral' ? 'Gestos, to i mirada' : 'Puntuació i iconografia'}
              </div>
              <p className="text-xs text-neutral-400 mt-2">
                {oralEscritTab === 'oral'
                  ? 'El cos i l’entonació matisen el significat.'
                  : 'Comes, punts, signes d’interrogació i recursos gràfics.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <span className="text-[11px] font-mono text-neutral-400 block mb-1">EXEMPLES CLAUS</span>
              <div className="text-sm font-bold text-white">
                {oralEscritTab === 'oral' ? 'Converses, debats, ràdio' : 'Llibres, premsa, WhatsApp'}
              </div>
              <p className="text-xs text-neutral-400 mt-2">
                {oralEscritTab === 'oral'
                  ? 'Pel·lícules, podcasts, conferències presencials.'
                  : 'Correus electrònics, exàmens, assaigs i articles.'}
              </p>
            </div>
          </div>
        </div>

        {/* 3. El Text Argumentatiu: Anatomia i Estructura */}
        <div id="argumentacio-section" className="glass-panel p-8 rounded-3xl space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-orange-400 mb-2">
              <Scale className="w-3.5 h-3.5" />
              <span>ESTRUCTURA DE CONVICCIÓ</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Anatomia del Text Argumentatiu</h3>
            <p className="text-sm text-neutral-300 mt-1">
              Finalitat: convèncer el receptor perquè comparteixi el nostre punt de vista mitjançant raons objectives i exemples.
            </p>
          </div>

          {/* Les 3 Posicions Argumentatives */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
              <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2">
                <ThumbsUp className="w-5 h-5" />
                <span>Posició Positiva (A favor)</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Aporta arguments i raons que donen suport directament a l'opinió defensada per guanyar l'adhesió del lector.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-red-500/10 border border-red-500/30">
              <div className="flex items-center gap-2 text-red-400 font-bold mb-2">
                <ThumbsDown className="w-5 h-5" />
                <span>Posició Negativa (En contra)</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Aporta raons que rebutgen una opinió contrària (contraargumentació) o refuten una tesi prèvia.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
              <div className="flex items-center gap-2 text-amber-400 font-bold mb-2">
                <Scale className="w-5 h-5" />
                <span>Posició Mixta (Matisada)</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Reconeix arguments tant a favor com en contra per equilibrar el judici i defensar una postura matisada.
              </p>
            </div>
          </div>

          {/* Deductiva vs Inductiva Interactive Selector */}
          <div className="p-6 rounded-2xl bg-black/40 border border-white/10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Ordre de la Tesi: Deductiu vs. Inductiu</span>
              </h4>
              <div className="flex gap-2">
                <button
                  onClick={() => setArgStructure('deductiu')}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                    argStructure === 'deductiu'
                      ? 'bg-blue-600 text-white font-bold'
                      : 'bg-white/10 text-neutral-400 hover:text-white'
                  }`}
                >
                  Deductiva (Inici)
                </button>
                <button
                  onClick={() => setArgStructure('inductiu')}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                    argStructure === 'inductiu'
                      ? 'bg-emerald-600 text-white font-bold'
                      : 'bg-white/10 text-neutral-400 hover:text-white'
                  }`}
                >
                  Inductiva (Final)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              <div className={`p-4 rounded-xl border ${argStructure === 'deductiu' ? 'bg-blue-500/15 border-blue-400' : 'bg-white/[0.02] border-white/10 opacity-70'}`}>
                <div className="font-bold text-white mb-1">1. INTRODUCCIÓ</div>
                <div className="text-neutral-400">
                  {argStructure === 'deductiu' ? (
                    <span className="text-blue-300 font-bold">🎯 La TESI es planteja aquí de manera clara i breu!</span>
                  ) : (
                    'Presenta el tema i els casos particulars.'
                  )}
                </div>
              </div>

              <div className="p-4 rounded-xl border bg-white/[0.04] border-white/10">
                <div className="font-bold text-white mb-1">2. ARGUMENTACIÓ</div>
                <div className="text-neutral-400">
                  Desenvolupa els fets concrets, les dades comprovables i els raonaments lògics.
                </div>
              </div>

              <div className={`p-4 rounded-xl border ${argStructure === 'inductiu' ? 'bg-emerald-500/15 border-emerald-400' : 'bg-white/[0.02] border-white/10 opacity-70'}`}>
                <div className="font-bold text-white mb-1">3. CONCLUSIÓ</div>
                <div className="text-neutral-400">
                  {argStructure === 'inductiu' ? (
                    <span className="text-emerald-300 font-bold">🎯 La TESI es tanca aquí com a conclusió general!</span>
                  ) : (
                    'Síntesi final que recull el resultat del text.'
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Exemple Pràctic del Dossier: Plàstics als oceans */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/30 via-slate-900/30 to-cyan-950/30 border border-cyan-400/30 space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider font-bold">
                Exemple Analitzat al teu Dossier:
              </span>
            </div>

            <blockquote className="p-4 rounded-xl bg-black/60 border border-white/10 text-sm sm:text-base text-neutral-200 italic font-serif">
              «Cal reduir l'ús dels plàstics d'un sol ús perquè el 80% dels residus marins són plàstics i contaminen els oceans.»
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-white/[0.04] border border-blue-400/30">
                <span className="text-blue-400 font-bold block mb-1">TESI (Opinió que es defensa):</span>
                <span className="text-neutral-200">Reduir l'ús de plàstics d'un sol ús.</span>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.04] border border-cyan-400/30">
                <span className="text-cyan-400 font-bold block mb-1">FET OBJECTIU (Dada comprovable):</span>
                <span className="text-neutral-200">El 80% dels residus marins són plàstics.</span>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.04] border border-emerald-400/30">
                <span className="text-emerald-400 font-bold block mb-1">ARGUMENT (Raonament lògic):</span>
                <span className="text-neutral-200">Evitar la contaminació i protegir els ecosistemes.</span>
              </div>
            </div>
          </div>

          {/* Taula Interactiva de Connectors Textuals */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold text-white">Guia de Connectors per a una Redacció de 10</h4>
              <span className="text-xs font-mono text-neutral-400">Classificats per funció</span>
            </div>

            {/* Category selection chips */}
            <div className="flex flex-wrap gap-2">
              {connectorCategories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveConnectorCat(idx)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                    activeConnectorCat === idx
                      ? 'bg-white text-black font-bold shadow-md'
                      : 'bg-white/[0.05] text-neutral-400 hover:text-white'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Display active connector list */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-wrap gap-2">
              {connectorCategories[activeConnectorCat].items.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-mono text-neutral-200 hover:border-amber-400/40 hover:text-amber-300 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
