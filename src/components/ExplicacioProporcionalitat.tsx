import React, { useState } from 'react';

function Pas({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex gap-3 items-start">
      <span className="shrink-0 w-7 h-7 rounded-full bg-emerald-300 text-black font-bold text-sm flex items-center justify-center mt-0.5">{n}</span>
      <span className="text-neutral-200 leading-relaxed">{children}</span>
    </li>
  );
}

function Caixa({ titol, children }: { titol: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-emerald-950/40 border border-emerald-300/20 p-5 mt-5">
      <p className="text-emerald-300 font-semibold mb-2">{titol}</p>
      <div className="text-neutral-200 leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

function Frac({ a, b }: { a: React.ReactNode; b: React.ReactNode }) {
  return (
    <span className="inline-flex flex-col items-center align-middle mx-1 leading-tight text-center">
      <span className="px-1 border-b border-neutral-300">{a}</span>
      <span className="px-1">{b}</span>
    </span>
  );
}

function Solucio({ children }: { children: React.ReactNode }) {
  const [obert, setObert] = useState(false);
  return (
    <div className="mt-4">
      <button
        onClick={() => setObert(!obert)}
        aria-expanded={obert}
        className="min-h-[44px] px-5 rounded-full bg-emerald-300 text-black font-semibold"
      >
        {obert ? 'Amaga la solució' : 'Mostra la solució'}
      </button>
      {obert && <div className="mt-4 rounded-2xl bg-black/40 border border-white/10 p-5 text-neutral-200 leading-relaxed space-y-2">{children}</div>}
    </div>
  );
}

export function ExplicacioProporcionalitat() {
  return (
    <section id="explicacio" aria-labelledby="explicacio-title" className="mt-14">
      <p className="text-emerald-300 font-semibold uppercase tracking-widest text-xs mb-3">Si no ho entens, comença aquí</p>
      <h2 id="explicacio-title" className="text-3xl font-bold tracking-tight">Explicat a poc a poc</h2>
      <p className="text-neutral-300 mt-3 leading-relaxed">
        Primer la raó, després la proporció, després directa i inversa, i al final la proporcionalitat composta. Llegeix-ho en ordre, cada cosa fa servir l'anterior.
      </p>

      {/* 1. RAÓ */}
      <article className="mt-8 rounded-3xl bg-[#111416] border border-white/10 p-5 sm:p-7">
        <h3 className="text-xl font-semibold flex gap-3 items-start"><span className="text-emerald-300 font-mono text-sm pt-1">1</span>Què és una raó?</h3>
        <p className="text-neutral-200 leading-relaxed mt-4">
          Una raó és <b>comparar dos números fent una divisió</b>. Ja està. Només és una fracció que et diu «quantes vegades hi cap l'un dins de l'altre».
        </p>
        <Caixa titol="Exemple 1: la classe">
          <p>A la classe hi ha 10 nois i 15 noies.</p>
          <p>La raó nois : noies és <Frac a="10" b="15" /> = <Frac a="2" b="3" /> (ho simplifiques com una fracció).</p>
          <p>Això vol dir: <b>per cada 2 nois hi ha 3 noies</b>.</p>
        </Caixa>
        <Caixa titol="Exemple 2: la velocitat">
          <p>Un cotxe fa 180 km en 3 hores.</p>
          <p>La raó km : hores és <Frac a="180" b="3" /> = 60.</p>
          <p>Això vol dir: <b>60 km per cada hora</b>. Les dues coses poden tenir unitats diferents, no passa res.</p>
        </Caixa>
        <p className="text-neutral-200 leading-relaxed mt-5"><b>Compte amb l'ordre.</b> La raó 10 : 15 no és la mateixa que 15 : 10. El primer número és el de dalt i el segon el de baix. Si et diuen «raó entre nois i noies», nois a dalt.</p>
        <Caixa titol="Truc per no liar-te">
          <p>Digues-ho amb paraules: «per cada ... hi ha ...». Si la frase té sentit, la raó està ben posada.</p>
        </Caixa>
      </article>

      {/* 2. PROPORCIÓ */}
      <article className="mt-5 rounded-3xl bg-[#111416] border border-white/10 p-5 sm:p-7">
        <h3 className="text-xl font-semibold flex gap-3 items-start"><span className="text-emerald-300 font-mono text-sm pt-1">2</span>Què és una proporció?</h3>
        <p className="text-neutral-200 leading-relaxed mt-4">
          Una proporció és quan <b>dues raons són iguals</b>. Per exemple <Frac a="2" b="3" /> = <Frac a="4" b="6" />, perquè 4/6 simplificat és 2/3.
        </p>
        <Caixa titol="Com trobar un número que falta (la x)">
          <p>Es multiplica en creu: <b>el de dalt d'un per el de baix de l'altre</b>.</p>
          <p><Frac a="2" b="3" /> = <Frac a="x" b="12" /> → 3 · x = 2 · 12 → 3x = 24 → x = 24 : 3 = <b>8</b>.</p>
          <p>Comprovació: 8/12 = 2/3 ✔</p>
        </Caixa>
        <p className="text-neutral-400 text-sm mt-4">Una cosa útil: si multipliques (o dividieixes) dalt i baix pel mateix número, la raó no canvia.</p>
      </article>

      {/* 3. DIRECTA / INVERSA */}
      <article className="mt-5 rounded-3xl bg-[#111416] border border-white/10 p-5 sm:p-7">
        <h3 className="text-xl font-semibold flex gap-3 items-start"><span className="text-emerald-300 font-mono text-sm pt-1">3</span>Directa o inversa?</h3>
        <p className="text-neutral-200 leading-relaxed mt-4">Hi ha dues quantitats (magnituds) que van lligades. Fes-te sempre aquesta pregunta:</p>
        <p className="mt-3 text-lg font-semibold text-emerald-200">«Si una puja, l'altra puja o baixa?»</p>
        <div className="grid sm:grid-cols-2 gap-4 mt-5">
          <div className="rounded-2xl border border-emerald-300/30 p-5">
            <p className="text-emerald-300 font-semibold">Directa: + → +</p>
            <p className="text-neutral-200 mt-2 leading-relaxed">Si una es fa el doble, l'altra també. Si una puja, l'altra puja.</p>
            <p className="text-neutral-400 mt-2 text-sm">Exemple: més croissants, més diners.</p>
          </div>
          <div className="rounded-2xl border border-amber-300/30 p-5">
            <p className="text-amber-300 font-semibold">Inversa: + → −</p>
            <p className="text-neutral-200 mt-2 leading-relaxed">Si una es fa el doble, l'altra es fa la meitat. Si una puja, l'altra baixa.</p>
            <p className="text-neutral-400 mt-2 text-sm">Exemple: més obrers, menys dies.</p>
          </div>
        </div>
        <Caixa titol="Com es calcula una de simple">
          <p><b>Directa:</b> 3 croissants costen 6 €. Quant costen 5? <Frac a="3" b="5" /> = <Frac a="6" b="x" /> → x = 5 · 6 : 3 = <b>10 €</b>.</p>
          <p><b>Inversa:</b> 4 obrers triguen 6 dies. Quant trigaran 8 obrers? El producte es manté: 4 · 6 = 8 · x → x = 24 : 8 = <b>3 dies</b>.</p>
        </Caixa>
      </article>

      {/* 4. COMPOSTA */}
      <article className="mt-5 rounded-3xl bg-[#111416] border border-white/10 p-5 sm:p-7">
        <h3 className="text-xl font-semibold flex gap-3 items-start"><span className="text-emerald-300 font-mono text-sm pt-1">4</span>Proporcionalitat composta</h3>
        <p className="text-neutral-200 leading-relaxed mt-4">
          És el mateix, però amb <b>tres o més magnituds</b> a la vegada (per exemple obrers, dies i metres). No és més difícil, només tens més files a la taula.
        </p>

        <Caixa titol="El mètode, sempre igual">
          <ol className="space-y-3">
            <Pas n={1}>Fes una taula amb el que et donen a dalt i el que et demanen a baix. La x és la que busques.</Pas>
            <Pas n={2}>Agafa <b>la magnitud on hi ha la x</b> i compara-la amb cada una de les altres, <b>d'una en una</b>.</Pas>
            <Pas n={3}>Per a cada una pregunta: «Si aquesta puja, la x puja o baixa?». Posa «directa» o «inversa».</Pas>
            <Pas n={4}>Escriu: <b>x / (dada de la x)</b> = el producte de les raons. Si és <b>directa</b>, la fracció es posa «nou / vell». Si és <b>inversa</b>, es posa girada: «vell / nou».</Pas>
            <Pas n={5}>Multiplica les fraccions, aïlla la x i comprova que té sentit.</Pas>
          </ol>
        </Caixa>

        <h4 className="text-lg font-semibold mt-8 text-emerald-300">Exemple 1 (les dues directes)</h4>
        <p className="text-neutral-200 leading-relaxed mt-2">
          6 obrers fan 120 m de tanca en 5 dies. <b>Quants metres faran 9 obrers en 10 dies?</b>
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-center border-collapse text-neutral-200">
            <thead>
              <tr className="text-neutral-400 text-sm">
                <th className="p-2 border border-white/10">Obrers</th>
                <th className="p-2 border border-white/10">Dies</th>
                <th className="p-2 border border-white/10">Metres</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-white/10">6</td><td className="p-2 border border-white/10">5</td><td className="p-2 border border-white/10">120</td></tr>
              <tr><td className="p-2 border border-white/10">9</td><td className="p-2 border border-white/10">10</td><td className="p-2 border border-white/10 text-emerald-300 font-bold">x</td></tr>
            </tbody>
          </table>
        </div>
        <ol className="space-y-3 mt-5">
          <Pas n={1}>La x és a «metres». Comparem metres amb obrers: més obrers, més metres → <b>directa</b>.</Pas>
          <Pas n={2}>Metres amb dies: més dies, més metres → <b>directa</b>.</Pas>
          <Pas n={3}>Com són totes dues directes, posem «nou / vell»:<br /><Frac a="x" b="120" /> = <Frac a="9" b="6" /> · <Frac a="10" b="5" /></Pas>
          <Pas n={4}>Multipliquem: <Frac a="9" b="6" /> · <Frac a="10" b="5" /> = <Frac a="90" b="30" /> = 3</Pas>
          <Pas n={5}>Llavors x / 120 = 3 → x = 3 · 120 = <b>360 m</b>.</Pas>
        </ol>
        <p className="text-neutral-400 text-sm mt-4">Comprovació: 9 obrers durant 10 dies són més del triple de feina que 6 obrers durant 5 dies, i 360 és 3 vegades 120. ✔</p>

        <h4 className="text-lg font-semibold mt-10 text-emerald-300">Exemple 2 (una directa i una inversa)</h4>
        <p className="text-neutral-200 leading-relaxed mt-2">
          3 aixetes omplen 2 dipòsits en 12 hores. <b>Quant trigaran 6 aixetes a omplir 3 dipòsits?</b>
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-center border-collapse text-neutral-200">
            <thead>
              <tr className="text-neutral-400 text-sm">
                <th className="p-2 border border-white/10">Aixetes</th>
                <th className="p-2 border border-white/10">Dipòsits</th>
                <th className="p-2 border border-white/10">Hores</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-white/10">3</td><td className="p-2 border border-white/10">2</td><td className="p-2 border border-white/10">12</td></tr>
              <tr><td className="p-2 border border-white/10">6</td><td className="p-2 border border-white/10">3</td><td className="p-2 border border-white/10 text-emerald-300 font-bold">x</td></tr>
            </tbody>
          </table>
        </div>
        <ol className="space-y-3 mt-5">
          <Pas n={1}>La x és a «hores». Hores amb aixetes: més aixetes, <b>menys</b> hores → <b>inversa</b>.</Pas>
          <Pas n={2}>Hores amb dipòsits: més dipòsits, més hores → <b>directa</b>.</Pas>
          <Pas n={3}>Directa: «nou / vell» = 3/2. Inversa: la girem, «vell / nou» = 3/6.<br /><Frac a="x" b="12" /> = <Frac a="3" b="6" /> · <Frac a="3" b="2" /></Pas>
          <Pas n={4}>Multipliquem: <Frac a="3" b="6" /> · <Frac a="3" b="2" /> = <Frac a="9" b="12" /> = <Frac a="3" b="4" /></Pas>
          <Pas n={5}>x / 12 = 3/4 → x = 12 · 3 : 4 = <b>9 hores</b>.</Pas>
        </ol>
        <p className="text-neutral-400 text-sm mt-4">Comprovació: el doble d'aixetes ho faria en menys temps, però hi ha més dipòsits, així que 9 h (menys de 12) té sentit. ✔</p>

        <Caixa titol="Errors que es fan molt">
          <ul className="list-disc pl-5 space-y-1">
            <li>Girar la fracció quan no toca, o no girar-la quan és inversa. Mira sempre «si puja, la x puja o baixa?».</li>
            <li>Comparar dues magnituds que no són la x entre elles. Sempre es compara cada una <b>amb la x</b>.</li>
            <li>No comprovar el resultat. Si en una inversa et dona més quan hauria de donar menys, hi ha un error.</li>
          </ul>
        </Caixa>
      </article>

      {/* 5. PRACTICA */}
      <article className="mt-5 rounded-3xl bg-[#111416] border border-white/10 p-5 sm:p-7">
        <h3 className="text-xl font-semibold flex gap-3 items-start"><span className="text-emerald-300 font-mono text-sm pt-1">5</span>Prova-ho tu</h3>
        <p className="text-neutral-300 mt-3">Intenta-ho al paper abans de mirar la solució.</p>

        <div className="mt-5 rounded-2xl border border-white/10 p-5">
          <p className="font-semibold text-emerald-300">Problema A</p>
          <p className="text-neutral-200 mt-2 leading-relaxed">5 màquines fan 300 peces en 6 hores. Quantes peces faran 8 màquines en 9 hores?</p>
          <Solucio>
            <p>Màquines amb peces: directa. Hores amb peces: directa.</p>
            <p><Frac a="x" b="300" /> = <Frac a="8" b="5" /> · <Frac a="9" b="6" /> = <Frac a="72" b="30" /></p>
            <p>x = 300 · 72 : 30 = <b>720 peces</b></p>
          </Solucio>
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 p-5">
          <p className="font-semibold text-emerald-300">Problema B</p>
          <p className="text-neutral-200 mt-2 leading-relaxed">4 treballadors fan una feina en 15 dies treballant 6 hores cada dia. Quants dies trigaran 5 treballadors treballant 8 hores cada dia?</p>
          <Solucio>
            <p>Treballadors amb dies: inversa. Hores al dia amb dies: inversa.</p>
            <p><Frac a="x" b="15" /> = <Frac a="4" b="5" /> · <Frac a="6" b="8" /> = <Frac a="24" b="40" /> = <Frac a="3" b="5" /></p>
            <p>x = 15 · 3 : 5 = <b>9 dies</b></p>
          </Solucio>
        </div>
      </article>
    </section>
  );
}

export default ExplicacioProporcionalitat;
