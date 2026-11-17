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

// Català Components
import { CatalaHero } from './components/catala/CatalaHero';
import { SectionComunicacioArgumentacio } from './components/catala/SectionComunicacioArgumentacio';
import { SectionHistoriaCatala } from './components/catala/SectionHistoriaCatala';
import { SectionOrtografiaDieresi } from './components/catala/SectionOrtografiaDieresi';
import { CatalaQuizTrainer } from './components/catala/CatalaQuizTrainer';
import { CatalaBentoSummary } from './components/catala/CatalaBentoSummary';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [currentSubject, setCurrentSubject] = useState<SubjectType>('catala');
  const lenisRef = useRef<Lenis | null>(null);

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
        {currentSubject === 'fq' ? (
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
      <Footer />
    </div>
  );
}

export default App;
