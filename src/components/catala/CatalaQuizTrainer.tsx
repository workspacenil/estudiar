import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, CheckCircle2, XCircle, RefreshCw, HelpCircle, Award } from 'lucide-react';

export const CatalaQuizTrainer: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const questions = [
    {
      theme: 'COMUNICACIÓ',
      question: '«En Marc envia un WhatsApp a la professora Maria per preguntar la data del pròxim examen.» Quin és el CANAL?',
      options: [
        'L’aplicació WhatsApp / Telèfon mòbil',
        'La llengua catalana',
        'En Marc (l’emissor)',
        'La data del pròxim examen',
      ],
      correct: 0,
      explanation: 'El canal és el mitjà tecnològic pel qual viatja la informació (WhatsApp/Mòbil). El català és el codi i el contingut és el missatge!',
    },
    {
      theme: 'TEXT ARGUMENTATIU',
      question: 'En el text dels plàstics: «El 80% dels residus marins són plàstics». Quin tipus de contingut és?',
      options: [
        'Un fet objectiu i comprovable amb dades',
        'Una opinió subjectiva de l’emissor',
        'Una contraargumentació negativa',
        'Un connector d’exemplificació',
      ],
      correct: 0,
      explanation: 'És un fet objectiu perquè aporta una dada estadística comprovable, a diferència d’un judici d’opinió personal!',
    },
    {
      theme: 'HISTÒRIA DEL CATALÀ',
      question: 'Quin és el primer text LITERARI en prosa conservat en català (segle XII)?',
      options: [
        'Les Homilies d’Organyà',
        'El Liber Iudiciorum',
        'Tirant lo Blanc',
        'L’Atlàntida de Verdaguer',
      ],
      correct: 0,
      explanation: 'Les Homilies d’Organyà són el primer text literari en prosa. El Liber Iudiciorum és jurídic (lleis)!',
    },
    {
      theme: 'HISTÒRIA DEL CATALÀ',
      question: 'Qui va publicar les «Normes ortogràfiques» l’any 1913 per fixar el català modern?',
      options: [
        'Pompeu Fabra',
        'Jacint Verdaguer',
        'Ausiàs March',
        'Joanot Martorell',
      ],
      correct: 0,
      explanation: 'L’enginyer i filòleg Pompeu Fabra va establir les regles ortogràfiques modernes que continuem utilitzant avui.',
    },
    {
      theme: 'ACCENT DIACRÍTIC',
      question: 'Completa: «Avui fa molt bon dia i el ____ brilla amb força al cel.»',
      options: [
        'sol (sense accent)',
        'sòl (amb accent obert)',
        'sól (amb accent tancat)',
        'söl (amb dièresi)',
      ],
      correct: 0,
      explanation: '«sol» sense accent és l’astre del cel. «sòl» amb accent significa terreny o terra!',
    },
    {
      theme: 'ORTOGRAFIA I DIÈRESI',
      question: 'Per què la paraula «egoisme» NO porta dièresi a la «i»?',
      options: [
        'Perquè acaba en el sufix -isme (cas d’estalvi de dièresi)',
        'Perquè és una paraula aguda acabada en vocal',
        'Perquè no prové del llatí vulgar',
        'Perquè porta accent gràfic a la «o»',
      ],
      correct: 0,
      explanation: 'Molt important: Els mots acabats en els sufixos -isme i -ista (egoisme, egoista) mai no porten dièresi!',
    },
    {
      theme: 'ORTOGRAFIA I DIÈRESI',
      question: 'Per què «suís» no porta dièresi, però «suïssa» sí que en porta?',
      options: [
        'Perquè «suís» ja porta accent gràfic (l’accent estalvia la dièresi)',
        'Perquè la forma masculina té una excepció històrica',
        'Perquè «suïssa» és un verb acabat en vocal + ir',
        'Perquè «suís» porta prefix re-',
      ],
      correct: 0,
      explanation: 'L’accent gràfic té prioritat absoluta sobre la dièresi: si la paraula s’accentua (suís), no cal dièresi. Com que suïssa és plana acabada en vocal, no s’accentua i cal posar dièresi!',
    },
  ];

  const q = questions[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === q.correct) {
      setScore((prev) => prev + 1);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
      });
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setCurrentIdx((prev) => (prev + 1) % questions.length);
  };

  return (
    <section id="catala-quiz" className="relative w-full bg-black py-24 px-6 sm:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto w-full relative z-10 space-y-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-xs font-mono text-amber-300 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENTRENADOR D'EXAMEN</span>
          </div>
          <h2 className="apple-display text-white mb-2">Posa't a Prova: Català 2n ESO</h2>
          <p className="apple-subhead text-neutral-400">
            Preguntes reals extretes directament dels teus 4 PDFs de classe.
          </p>
        </div>

        {/* Card */}
        <div className="glass-card p-8 sm:p-10 border-amber-500/20 bg-gradient-to-b from-[#121218]/90 to-black">
          <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-amber-300 font-bold">
              {q.theme}
            </span>
            <span className="text-xs font-mono text-neutral-400">
              Pregunta {currentIdx + 1} de {questions.length} &bull; Puntuació: {score}/{questions.length}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white mb-8 leading-snug">
            {q.question}
          </h3>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {q.options.map((opt, i) => {
              const isSelected = selectedOption === i;
              const isCorrect = i === q.correct;

              let style = 'bg-white/[0.04] border-white/10 text-neutral-200 hover:bg-white/[0.08] hover:border-white/20';
              if (isAnswered) {
                if (isCorrect) {
                  style = 'bg-emerald-500/20 border-emerald-400 text-emerald-200 font-bold';
                } else if (isSelected) {
                  style = 'bg-red-500/20 border-red-400 text-red-200';
                } else {
                  style = 'bg-white/[0.02] border-white/[0.05] text-neutral-500';
                }
              }

              return (
                <button
                  key={i}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(i)}
                  className={`w-full p-4 rounded-2xl border text-left text-sm font-mono transition-all flex items-center justify-between cursor-pointer ${style}`}
                >
                  <span>{opt}</span>
                  {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-400" />}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          <AnimatePresence>
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`p-4 rounded-2xl text-xs font-mono leading-relaxed mb-6 ${
                  selectedOption === q.correct
                    ? 'bg-emerald-500/15 border border-emerald-400/30 text-emerald-200'
                    : 'bg-amber-500/15 border border-amber-400/30 text-amber-200'
                }`}
              >
                <div className="font-bold mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>{selectedOption === q.correct ? 'Molt bé! Resposta encertada.' : 'Recorda la regla clau:'}</span>
                </div>
                <div>{q.explanation}</div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Next Button */}
          {isAnswered && (
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                className="apple-btn-primary flex items-center gap-2 cursor-pointer text-xs font-bold"
              >
                <span>Següent pregunta</span>
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
