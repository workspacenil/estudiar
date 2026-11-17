import React from 'react';
import { Sparkles, CheckCircle, BookOpen, Feather, MessageSquare, History } from 'lucide-react';

export const CatalaBentoSummary: React.FC = () => {
  return (
    <section className="relative w-full bg-[#030305] py-24 px-6 sm:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-amber-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SÍNTESI VISUAL</span>
          </div>
          <h2 className="apple-display text-white mb-2">Bento Resum de Català</h2>
          <p className="apple-subhead text-neutral-400">
            Totes les idees força agrupades en un format àgil i memoritzable.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Comunicació */}
          <div className="md:col-span-6 glass-card p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Bloc 1</span>
                <MessageSquare className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Els 6 Elements Sense Fallada</h3>
              <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                Emissor (intenció), Receptor (actiu o passiu), Missatge (contingut), Canal (mitjà físic),
                Codi (la llengua) i Context (situació espacial i temporal).
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-[11px] font-mono text-neutral-400">
              💡 Oral (espontani, immediat, gestos) vs Escrit (diferit, elaborat, puntuació).
            </div>
          </div>

          {/* Card 2: Argumentació */}
          <div className="md:col-span-6 glass-card p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase">Bloc 2</span>
                <BookOpen className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Com Convèncer amb Èxit</h3>
              <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                La <strong>tesi</strong> és l'opinió defensada. Els <strong>fets</strong> són proves objectives
                comprovables, mentre que les <strong>opinions</strong> són judicis subjectius.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-[11px] font-mono text-neutral-400">
              💡 Deductiu: Tesi a l'inici. Inductiu: Tesi al final com a conclusió.
            </div>
          </div>

          {/* Card 3: Història */}
          <div className="md:col-span-7 glass-card p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase">Bloc 3</span>
                <History className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">La Línia del Temps Més Important</h3>
              <div className="space-y-2 text-xs font-mono text-neutral-300">
                <div className="flex justify-between border-b border-white/[0.06] pb-1">
                  <span className="text-amber-300 font-bold">Segle XII:</span>
                  <span>Homilies d'Organyà (literari) & Liber Iudiciorum (jurídic)</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.06] pb-1">
                  <span className="text-amber-300 font-bold">Segle XV:</span>
                  <span>Segle d'Or (Ausiàs March, Martorell, Metge, Corella)</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.06] pb-1">
                  <span className="text-amber-300 font-bold">1716:</span>
                  <span>Decrets de Nova Planta (prohibició institucional)</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.06] pb-1">
                  <span className="text-amber-300 font-bold">Segle XIX:</span>
                  <span>La Renaixença (Verdaguer, Guimerà, Oller)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-300 font-bold">1913:</span>
                  <span>Pompeu Fabra publica les Normes Ortogràfiques</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Ortografia & Dièresi */}
          <div className="md:col-span-5 glass-card p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-purple-400 font-bold uppercase">Bloc 4</span>
                <Feather className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Ortografia Impecable</h3>
              <div className="space-y-2 text-xs font-mono text-neutral-300">
                <div>• Agudes: vocal, vocal+s, -en, -in.</div>
                <div>• Planes: contrari d'agudes + diftong.</div>
                <div>• Esdrúixoles: SEMPRE porten accent!</div>
                <div>• Dièresi: estalvi en -isme, -ista, -us, -um, prefixos re/co/contra, verbs vocal+ir.</div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-400/20 text-[11px] font-mono text-purple-200 mt-4">
              ✨ L'accent té prioritat absoluta sobre la dièresi (ex: suís vs suïssa).
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
