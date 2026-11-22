import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

import { Navbar, SubjectType } from './components/Navbar';
import { Hero } from './components/Hero';
import { SectionCosVsSistema } from './components/SectionCosVsSistema';
import { SectionDensityLaboratory } from './components/SectionDensityLaboratory';
import { SectionMetricLadder } from './components/SectionMetricLadder';
import { BentoGridSummary } from './components/BentoGridSummary';
import { Footer } from './components/Footer';
import { TecnoMetalls } from './components/TecnoMetalls';

// Català Components
import { CatalaHero } from './components/catala/CatalaHero';
import { SectionComunicacioArgumentacio } from './components/catala/SectionComunicacioArgumentacio';
import { SectionHistoriaCatala } from './components/catala/SectionHistoriaCatala';
import { SectionOrtografiaDieresi } from './components/catala/SectionOrtografiaDieresi';
import { CatalaQuizTrainer } from './components/catala/CatalaQuizTrainer';
import { CatalaBentoSummary } from './components/catala/CatalaBentoSummary';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [currentSubject, setCurrentSubject] = useState<SubjectType>(() => window.location.hash === '#proporcionalitat' ? 'mates' : window.location.hash === '#tecno-metalls' ? 'metalls' : 'catala');
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    document.title = currentSubject === 'mates' ? 'Unitat 2: Proporcionalitat · Estudiar' : 'Estudiar · 2n ESO';
  }, [currentSubject]);

  useEffect(() => {
    // Initialize Lenis for buttery-smooth inertial scroll (Apple Pro feel)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple exponential decay
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const tickerCb = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(tickerCb);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // When changing subjects, reset scroll smoothly and refresh ScrollTrigger
  const handleSelectSubject = (subject: SubjectType) => {
    setCurrentSubject(subject);
    window.history.replaceState(null, '', subject === 'mates' ? '#proporcionalitat' : subject === 'metalls' ? '#tecno-metalls' : window.location.pathname);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  };

  const handleNavigate = (id: string) => {
    if (lenisRef.current) {
      if (id === 'hero' || id === 'catala-hero') {
        lenisRef.current.scrollTo(0);
      } else {
        const target = document.getElementById(id);
        if (target) {
          lenisRef.current.scrollTo(target, { offset: -40, duration: 1.4 });
        }
      }
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-[#f5f5f7] selection:bg-amber-500/30 selection:text-white">
      {/* Top Floating Glass Navbar with Subject Switcher */}
      <Navbar
        currentSubject={currentSubject}
        onSelectSubject={handleSelectSubject}
        onNavigate={handleNavigate}
      />

      {/* Main Content Animated Switcher */}
      <AnimatePresence mode="wait">
        {currentSubject === 'mates' ? (<motion.div key="subject-mates" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Proporcionalitat /></motion.div>) : currentSubject === 'metalls' ? (
          <motion.div key="subject-metalls" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><TecnoMetalls /></motion.div>
        ) : currentSubject === 'fq' ? (
          <motion.div
            key="subject-fq"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {/* Hero Section */}
            <Hero onExploreClick={() => handleNavigate('cos-sistema')} />

            {/* Scrollytelling Stage 1: Cos vs. Sistema Material */}
            <SectionCosVsSistema />

            {/* Scrollytelling Stage 2: Densitat & Propietats Intensives vs Extensives */}
            <SectionDensityLaboratory />

            {/* Scrollytelling Stage 3: Escala Mètrica Decimal & That Quiz Trainer */}
            <SectionMetricLadder />

            {/* Bento Grid Summary & Deep Dives */}
            <BentoGridSummary />
          </motion.div>
        ) : (
          <motion.div
            key="subject-catala"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {/* Hero Section Català */}
            <CatalaHero
              onExploreClick={() => handleNavigate('comunicacio-section')}
              onNavigateSection={handleNavigate}
            />

            {/* Bloc 1: Comunicació & Text Argumentatiu */}
            <SectionComunicacioArgumentacio />

            {/* Bloc 2: Història del Català (Del Llatí a l'Actualitat) */}
            <SectionHistoriaCatala />

            {/* Bloc 3: Ortografia: Accentuació & Dièresi */}
            <SectionOrtografiaDieresi />

            {/* Bloc 4: Entrenador de Català (That Quiz) */}
            <CatalaQuizTrainer />

            {/* Bloc 5: Bento Resum Català */}
            <CatalaBentoSummary />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Footer */}
      {currentSubject !== 'metalls' && currentSubject !== 'mates' && <Footer />}
    </div>
  );
}

export default App;

function Proporcionalitat() {
  const topics = [
    ['Raons i proporcions', [
      'Què és una raó? Càlcul de la raó entre dues magnituds.',
      'Què és una proporció? Càlcul del terme desconegut d’una proporció.'
    ]],
    ['Proporcionalitat directa i inversa', [
      'Reconèixer la relació entre dues magnituds i justificar si és directa o inversa.',
      'Fer càlculs amb taules de valors i proporcions.',
      'Resoldre problemes de proporcionalitat directa i inversa.'
    ]],
    ['Percentatges', [
      'Entendre el significat d’un percentatge i expressar-lo en decimal, fracció i %. ',
      'Calcular un percentatge sobre una quantitat.',
      'Calcular el percentatge quan es coneixen el total i la part.',
      'Calcular el total quan es coneixen el tant per cent i la part.',
      'Calcular descomptes i augments percentuals.',
      'Resoldre problemes de percentatges.'
    ]]
  ] as const;
  const [done, setDone] = useState<string[]>([]);
  const total = topics.reduce((n, item) => n + item[1].length, 0);
  return <main id="proporcionalitat" className="max-w-4xl mx-auto px-5 sm:px-8 pt-40 sm:pt-36 pb-16">
    <p className="text-emerald-300 font-semibold uppercase tracking-widest text-xs mb-4">Matemàtiques · 2n ESO</p>
    <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight">Unitat 2<br/><span className="text-emerald-300">Proporcionalitat</span></h1>
    <p className="text-neutral-300 mt-5 text-lg leading-relaxed max-w-2xl">La guia per preparar l’examen. Repassa el temari i marca què ja domines.</p>
    <section aria-labelledby="examens-title" className="mt-8 rounded-3xl p-6 sm:p-8 bg-emerald-950/40 border border-emerald-300/20">
      <h2 id="examens-title" className="text-xl font-semibold mb-5">Dates de l’examen</h2>
      <div className="grid sm:grid-cols-2 gap-5">
        <div><p className="text-emerald-300 font-semibold">2n ESO A i 2n ESO B</p><p className="text-2xl font-semibold mt-1">Dilluns 23 de novembre</p><p className="text-neutral-400 mt-1">2026</p></div>
        <div className="sm:border-l sm:border-white/10 sm:pl-6"><p className="text-neutral-300 font-semibold">2n ESO C</p><p className="text-xl font-semibold mt-1">Dimarts 17 de novembre</p><p className="text-neutral-400 mt-1">2026 · Data indicada a l’avís</p></div>
      </div>
      <p className="mt-6 pt-5 border-t border-white/10 text-emerald-200 font-semibold">No t’oblidis la calculadora el dia de l’examen.</p>
    </section>
    <section aria-labelledby="temari-title" className="mt-12">
      <div className="flex flex-wrap justify-between items-end gap-3 mb-4"><h2 id="temari-title" className="text-2xl font-semibold">Què cal saber?</h2><p className="text-neutral-400 text-sm" aria-live="polite">{done.length} de {total} punts repassats</p></div>
      <div role="progressbar" aria-label="Temari repassat" aria-valuenow={done.length} aria-valuemin={0} aria-valuemax={total} className="h-1.5 bg-white/10 rounded-full mb-7 overflow-hidden"><div className="h-full bg-emerald-300 transition-all" style={{width: `${done.length / total * 100}%`}} /></div>
      <div className="space-y-5">{topics.map(([title, items], group) => <article key={title} className="rounded-3xl bg-[#111416] border border-white/10 p-5 sm:p-7">
        <h3 className="text-xl font-semibold mb-4 flex gap-3 items-start"><span className="text-emerald-300 font-mono text-sm pt-1">0{group + 1}</span>{title}</h3>
        <div className="divide-y divide-white/10">{items.map((text, i) => {const key = `${group}-${i}`; return <label key={key} className="flex gap-3 items-start py-4 cursor-pointer min-h-[44px]"><input type="checkbox" checked={done.includes(key)} onChange={e => setDone(prev => e.target.checked ? [...prev, key] : prev.filter(k => k !== key))} className="w-5 h-5 mt-0.5 shrink-0 accent-emerald-300"/><span className={done.includes(key) ? 'text-neutral-400' : 'text-neutral-200'}>{text}</span></label>})}</div>
      </article>)}</div>
      <p className="text-neutral-500 text-xs mt-3">Les marques són només per a aquesta sessió; no es desen.</p>
    </section>
    <section aria-labelledby="recorda-title" className="mt-12"><h2 id="recorda-title" className="text-2xl font-semibold mb-5">Recorda</h2><div className="grid sm:grid-cols-2 gap-4">
      <article className="p-6 rounded-3xl border border-white/10"><p className="text-emerald-300 text-3xl font-mono mb-4">%</p><h3 className="text-lg font-semibold">També amb proporcionalitat directa</h3><p className="text-neutral-300 leading-relaxed mt-3">Pots resoldre tots els problemes de percentatges utilitzant la proporcionalitat directa, si així et resulten més fàcils.</p></article>
      <article className="p-6 rounded-3xl border border-white/10"><p className="text-emerald-300 text-3xl mb-4" aria-hidden="true">▷</p><h3 className="text-lg font-semibold">Repassa amb els vídeos</h3><p className="text-neutral-300 leading-relaxed mt-3">Al Classroom tens vídeos per recordar el que heu treballat a classe i preparar millor l’examen.</p></article>
    </div></section>
    <footer className="mt-12 pt-6 border-t border-white/10 text-neutral-500 text-sm">Guia basada en el temari de l’examen facilitat. Comprova la data que correspon al teu grup.</footer>
  </main>;
}
