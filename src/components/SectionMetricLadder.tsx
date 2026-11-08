import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Ruler, ArrowRight, ArrowLeft, CheckCircle2, XCircle, Sparkles, HelpCircle, RefreshCw } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const SectionMetricLadder: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  // Magnitude selector: longitud, massa, capacitat
  const [magnitude, setMagnitude] = useState<'massa' | 'longitud' | 'capacitat'>('massa');
  const [fromUnitIndex, setFromUnitIndex] = useState<number>(0); // e.g. kg
  const [toUnitIndex, setToUnitIndex] = useState<number>(3); // e.g. g
  const [inputValue, setInputValue] = useState<number>(76.16);

  // That Quiz interactive mini-test state
  const [currentQuizIndex, setCurrentQuizIndex] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [quizFeedback, setQuizFeedback] = useState<'idle' | 'correct' | 'wrong'>('idle');

  const prefixes = [
    { prefix: 'k', name: 'Kilo', factor: 1000, power: '10³' },
    { prefix: 'h', name: 'Hecto', factor: 100, power: '10²' },
    { prefix: 'da', name: 'Deca', factor: 10, power: '10¹' },
    { prefix: '', name: 'UNITAT', factor: 1, power: '10⁰' },
    { prefix: 'd', name: 'Deci', factor: 0.1, power: '10⁻¹' },
    { prefix: 'c', name: 'Centi', factor: 0.01, power: '10⁻²' },
    { prefix: 'm', name: 'Milli', factor: 0.001, power: '10⁻³' },
  ];

  const getUnitSymbol = (index: number) => {
    const p = prefixes[index].prefix;
    if (magnitude === 'longitud') return p ? `${p}m` : 'm';
    if (magnitude === 'massa') return p ? `${p}g` : 'g';
    return p ? `${p}l` : 'l';
  };

  // Steps difference: positive = right (multiply), negative = left (divide)
  const stepsDiff = toUnitIndex - fromUnitIndex;
  const factor = Math.pow(10, Math.abs(stepsDiff));
  const convertedValue = stepsDiff >= 0 ? inputValue * factor : inputValue / factor;

  // Real notebook quiz questions
  const quizQuestions = [
    {
      question: '76,16 kg → dag',
      correctNum: 7616,
      unit: 'dag',
      explanation: 'De kg a dag hi ha 2 salts a la dreta (x100). 76,16 x 100 = 7.616 dag.',
      commonMistake: 'Compte! Al quadern es va posar 7.660 dag per error de càlcul.',
    },
    {
      question: '32 hm → dam',
      correctNum: 320,
      unit: 'dam',
      explanation: 'De hm a dam només hi ha 1 salt a la dreta (x10). 32 x 10 = 320 dam.',
      commonMistake: 'Al quadern es va posar 3.200 dam (això serien metres, 2 salts).',
    },
    {
      question: '54 dag → dg',
      correctNum: 5400,
      unit: 'dg',
      explanation: 'De dag a dg hi ha 2 salts cap a la dreta: dag → g → dg (x100). 54 x 100 = 5.400 dg.',
      commonMistake: 'Compte a no confondre decagrams (dag) amb decigrams (dg)!',
    },
    {
      question: '238,7 cm³ → ml',
      correctNum: 238.7,
      unit: 'ml',
      explanation: 'L’equivalència d’or: 1 cm³ equival exactament a 1 ml! El valor és 238,7 ml.',
      commonMistake: 'Molt ben resolt al teu quadern!',
    },
    {
      question: '402.900 g → kg',
      correctNum: 402.9,
      unit: 'kg',
      explanation: 'De g a kg pugem 3 esglaons a l’esquerra (:1000). 402.900 : 1000 = 402,9 kg.',
      commonMistake: 'Al quadern es va desplaçar un zero de més marcant 4,029 kg.',
    },
  ];

  const handleCheckQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    const currentQ = quizQuestions[currentQuizIndex];
    const normalizedInput = parseFloat(userAnswer.replace(',', '.'));

    if (Math.abs(normalizedInput - currentQ.correctNum) < 0.001) {
      setQuizFeedback('correct');
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
      });
    } else {
      setQuizFeedback('wrong');
    }
  };

  const nextQuestion = () => {
    setQuizFeedback('idle');
    setUserAnswer('');
    setCurrentQuizIndex((prev) => (prev + 1) % quizQuestions.length);
  };

  return (
    <section
      id="escala"
      ref={containerRef}
      className="relative w-full bg-black min-h-screen py-24 px-6 sm:px-12 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-cyan-600/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto w-full z-10 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-cyan-400 mb-4">
            <Ruler className="w-3.5 h-3.5" />
            <span>03 // SISTEMA MÈTRIC DECIMAL</span>
          </div>
          <h2 className="apple-display text-white mb-4">L'Escala Mètrica de Conversió</h2>
          <p className="apple-subhead text-neutral-400">
            Cada esglaó representa una potència de 10. Desplaçar-te cap a la dreta multiplica per 10;
            desplaçar-te cap a l’esquerra divideix entre 10.
          </p>

          {/* Magnitude Selector Pills */}
          <div className="inline-flex items-center gap-2 p-1.5 mt-8 rounded-full bg-white/[0.05] border border-white/[0.08] backdrop-blur-xl">
            {(['massa', 'longitud', 'capacitat'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMagnitude(m)}
                className={`px-5 py-2 rounded-full text-xs font-mono transition-all duration-300 capitalize ${
                  magnitude === m
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-bold shadow-md shadow-cyan-500/30'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* The 7-Step Metric Ladder Visualizer */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 mb-16 relative overflow-hidden">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                Visualització Interactiva dels 7 Esglaons:
              </span>
              <h3 className="text-lg font-bold text-white">Escala de {magnitude}</h3>
            </div>

            {/* Rule Indicator Badge */}
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5" /> Baixar &rarr; x10 / pas
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-300 flex items-center gap-1.5">
                <ArrowLeft className="w-3.5 h-3.5" /> Pujar &rarr; :10 / pas
              </span>
            </div>
          </div>

          {/* The Ladder Units Bar */}
          <div className="grid grid-cols-7 gap-2 sm:gap-3 my-8">
            {prefixes.map((item, idx) => {
              const symbol = getUnitSymbol(idx);
              const isFrom = fromUnitIndex === idx;
              const isTo = toUnitIndex === idx;
              const inRange =
                (idx >= fromUnitIndex && idx <= toUnitIndex) ||
                (idx >= toUnitIndex && idx <= fromUnitIndex);

              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center p-3 sm:p-4 rounded-2xl border transition-all duration-300 relative ${
                    isFrom
                      ? 'bg-blue-500/20 border-blue-400 shadow-[0_0_20px_rgba(41,151,255,0.3)]'
                      : isTo
                      ? 'bg-cyan-500/20 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                      : inRange
                      ? 'bg-white/[0.04] border-white/20'
                      : 'bg-white/[0.02] border-white/[0.05] opacity-60'
                  }`}
                >
                  <span className="text-[10px] font-mono text-neutral-400 hidden sm:inline">
                    {item.name}
                  </span>
                  <span className="text-base sm:text-2xl font-mono font-bold text-white my-1">
                    {symbol}
                  </span>
                  <span className="text-[10px] font-mono text-cyan-300/80">{item.power}</span>

                  {/* Badges for Origin and Destination */}
                  <div className="flex gap-1 mt-2">
                    <button
                      onClick={() => setFromUnitIndex(idx)}
                      className={`text-[9px] font-mono px-1.5 py-0.5 rounded transition-all ${
                        isFrom
                          ? 'bg-blue-500 text-white font-bold'
                          : 'bg-white/10 text-neutral-400 hover:text-white'
                      }`}
                      title="Fixar com unitat d'origen"
                    >
                      De
                    </button>
                    <button
                      onClick={() => setToUnitIndex(idx)}
                      className={`text-[9px] font-mono px-1.5 py-0.5 rounded transition-all ${
                        isTo
                          ? 'bg-cyan-400 text-black font-bold'
                          : 'bg-white/10 text-neutral-400 hover:text-white'
                      }`}
                      title="Fixar com unitat de destí"
                    >
                      A
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dynamic Transformation Card */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex flex-col">
                <label className="text-xs font-mono text-neutral-400 mb-1">Quantitat d'origen:</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(parseFloat(e.target.value) || 0)}
                    className="w-28 sm:w-36 px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white font-mono text-base focus:outline-none focus:border-cyan-400"
                  />
                  <span className="font-mono text-lg font-bold text-blue-400">
                    {getUnitSymbol(fromUnitIndex)}
                  </span>
                </div>
              </div>

              <div className="text-neutral-500 text-xl font-mono">&rarr;</div>

              <div className="flex flex-col">
                <span className="text-xs font-mono text-neutral-400 mb-1">Resultat convertit:</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-cyan-300">
                    {convertedValue.toLocaleString('ca-ES', { maximumFractionDigits: 6 })}
                  </span>
                  <span className="font-mono text-lg font-bold text-cyan-400">
                    {getUnitSymbol(toUnitIndex)}
                  </span>
                </div>
              </div>
            </div>

            {/* Step formula explanation */}
            <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-300 max-w-sm">
              <span className="text-cyan-400 font-semibold block mb-0.5">Operació exacta:</span>
              {stepsDiff === 0 && 'Mateixa unitat (x1).'}
              {stepsDiff > 0 && (
                <span>
                  Has baixat <strong>{stepsDiff} esglaons</strong> a la dreta: cal{' '}
                  <strong className="text-emerald-300">multiplicar per 10^{stepsDiff} (x{factor})</strong>.
                </span>
              )}
              {stepsDiff < 0 && (
                <span>
                  Has pujat <strong>{Math.abs(stepsDiff)} esglaons</strong> a l'esquerra: cal{' '}
                  <strong className="text-blue-300">dividir entre 10^{Math.abs(stepsDiff)} (:{factor})</strong>.
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Section That Quiz Mini-Trainer */}
        <div id="quiz-section" className="glass-card p-8 rounded-3xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Entrenador «That Quiz»</h3>
                <p className="text-xs text-neutral-400 font-mono">
                  Basat directament en els exercicis del teu quadern de classe
                </p>
              </div>
            </div>

            <div className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-neutral-300">
              Pregunta {currentQuizIndex + 1} de {quizQuestions.length}
            </div>
          </div>

          {/* Quiz Card */}
          <div className="max-w-xl mx-auto my-6 p-6 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md">
            <div className="text-sm font-mono text-neutral-400 mb-2">Converteix la següent mesura:</div>
            <div className="text-3xl font-mono font-extrabold text-white mb-6">
              {quizQuestions[currentQuizIndex].question}
            </div>

            <form onSubmit={handleCheckQuiz} className="flex items-center gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Escriu el resultat..."
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/15 text-white font-mono text-lg focus:outline-none focus:border-cyan-400"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-sm font-mono text-neutral-400">
                  {quizQuestions[currentQuizIndex].unit}
                </span>
              </div>

              <button
                type="submit"
                className="apple-btn-primary px-6 py-3 text-sm font-bold cursor-pointer"
              >
                Comprova
              </button>
            </form>

            {/* Feedback Message */}
            <AnimatePresence>
              {quizFeedback === 'correct' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 p-4 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-200 text-sm space-y-1"
                >
                  <div className="flex items-center gap-2 font-bold text-emerald-300">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Molt bé! Resposta correcta.</span>
                  </div>
                  <p className="text-xs font-mono text-emerald-200/90">
                    {quizQuestions[currentQuizIndex].explanation}
                  </p>
                </motion.div>
              )}

              {quizFeedback === 'wrong' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 p-4 rounded-xl bg-coral/15 border border-red-500/30 text-red-200 text-sm space-y-1.5"
                >
                  <div className="flex items-center gap-2 font-bold text-red-300">
                    <XCircle className="w-5 h-5" />
                    <span>No és correcte. Revisa els salts a l'escala!</span>
                  </div>
                  <p className="text-xs font-mono text-neutral-300">
                    {quizQuestions[currentQuizIndex].explanation}
                  </p>
                  <div className="p-2 rounded bg-black/40 text-[11px] font-mono text-amber-300/90">
                    💡 {quizQuestions[currentQuizIndex].commonMistake}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Next question button */}
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={nextQuestion}
                className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1.5 py-1 px-3 rounded-lg hover:bg-white/[0.05] transition-colors"
              >
                <span>Següent pregunta</span>
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
