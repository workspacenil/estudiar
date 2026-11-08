import React from 'react';
import { ArrowUp, Sparkles, BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-black border-t border-white/[0.08] py-16 px-6 sm:px-12 text-neutral-400 font-mono text-xs">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-cyan-300 font-bold text-xs">
            2E
          </div>
          <div>
            <div className="text-white font-bold tracking-wide">MATÈRIA // PRO EXPERIENCE</div>
            <div className="text-[11px] text-neutral-500">
              Guia interactiva per a l'estudi de Física i Química (2n d'ESO)
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer active:scale-95"
          >
            <span>Tornar a l'inici</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-600">
        <div>
          Creat amb principis d'Apple Design, Antigravity 3D Depth i Frontend Studio Design.
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="w-3 h-3 text-cyan-500" />
          <span>Física &bull; Massa &bull; Volum &bull; Densitat</span>
        </div>
      </div>
    </footer>
  );
};
