import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SectionCosVsSistema } from './components/SectionCosVsSistema';
import { SectionDensityLaboratory } from './components/SectionDensityLaboratory';
import { SectionMetricLadder } from './components/SectionMetricLadder';
import { BentoGridSummary } from './components/BentoGridSummary';
import { Footer } from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export function App() {
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

  const handleNavigate = (id: string) => {
    if (lenisRef.current) {
      if (id === 'hero') {
        lenisRef.current.scrollTo(0);
      } else {
        const target = document.getElementById(id);
        if (target) {
          lenisRef.current.scrollTo(target, { offset: 0, duration: 1.4 });
        }
      }
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-[#f5f5f7] selection:bg-cyan-500/30 selection:text-white">
      {/* Top Floating Glass Navbar */}
      <Navbar onNavigate={handleNavigate} />

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

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
