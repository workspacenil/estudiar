import React from 'react';

const block: React.CSSProperties = {background:'#111318', border:'1px solid #30343b', borderRadius:16, padding:'clamp(18px,4vw,28px)'};
const heading: React.CSSProperties = {fontSize:22, fontWeight:700, marginBottom:16, color:'#ffd18c', lineHeight:1.3};
const p: React.CSSProperties = {marginBottom:14};
export function TecnoMetalls() {
 return <main id="tecno-metalls" style={{maxWidth:900,margin:'0 auto',padding:'145px 20px 60px',fontSize:17,lineHeight:1.65,color:'#f3f3f5'}}>
  <h1 style={{fontSize:'clamp(32px,7vw,50px)',fontWeight:750,lineHeight:1.1,marginBottom:16}}>Tecno Metalls</h1>
  <p style={{color:'#b9bdc7',marginBottom:30}}>De la mina al taller. Resum per estudiar.</p>
  <div style={{display:'grid',gap:22}}>
   <section style={block}>
    <h2 style={heading}>1. De la mina al taller</h2>
    <p style={p}>Els metalls són materials <strong>d'origen mineral</strong>. Passen per tres fases:</p>
    <p style={{...p,color:'#aee1d0',fontWeight:650}}>Extracció → Obtenció → Transformació</p>
    <h3 style={{fontSize:19,fontWeight:700}}>Extracció · Mineria</h3>
    <p style={p}>Traiem minerals de l'escorça terrestre, en <strong>mines a cel obert</strong> o <strong>mines subterrànies</strong>.</p>
    <ul style={{paddingLeft:22,marginBottom:22}}><li><strong>Mena:</strong> part del mineral que conté metall i s'aprofita.</li><li><strong>Ganga:</strong> part sense metall, no aprofitable.</li></ul>
    <h3 style={{fontSize:19,fontWeight:700}}>Obtenció · Metal·lúrgia</h3>
    <p style={p}>Aconseguim el metall a partir del mineral:</p>
    <ol style={{paddingLeft:24,marginBottom:22}}>
     <li style={p}><strong>Concentració del mineral:</strong> triturem i rentem per separar la ganga de la mena.</li>
     <li style={p}><strong>Reducció en un forn:</strong> amb molta calor separem el metall dels elements amb què està combinat. La ganga restant forma un residu: l'<strong>escòria</strong>.</li>
     <li style={p}><strong>Afinament:</strong> traiem les impureses perquè el metall sigui més pur.</li>
    </ol>
    <h3 style={{fontSize:19,fontWeight:700}}>Transformació</h3>
    <p style={p}>Les indústries del metall fabriquen objectes útils. Exemple: acer → carrosseria d'un cotxe.</p>
    <p><strong>Impacte ambiental:</strong> les mines canvien el paisatge, sobretot les de cel obert. Els forns gasten molta energia i generen fums i residus.</p>
   </section>
   <section style={block}>
    <h2 style={heading}>2. Metalls purs i aliatges</h2>
    <p style={p}><strong>Metall pur:</strong> un sol element químic. Exemples: ferro, coure, alumini, or i plata.</p>
    <p style={p}><strong>Aliatge:</strong> barreja d'un metall base amb altres metalls o elements químics, per millorar-ne les propietats. Per barrejar-los han d'estar en <strong>estat líquid</strong>.</p>
    <dl style={{display:'grid',gap:12}}>
     {[['Bronze','Coure + estany.'],['Llautó','Coure + zinc.'],['Acer','Ferro + carboni. Amb crom, acer inoxidable.'],['Duralumini','Alumini i coure, amb magnesi, manganès i silici.'],['Magnali','Alumini + magnesi.'],['Amalgama','Metall amb mercuri.']].map(([term,def])=><div key={term}><dt style={{fontWeight:700,color:'#aee1d0'}}>{term}</dt><dd style={{margin:0}}>{def}</dd></div>)}
    </dl>
   </section>
   <section style={block}>
    <h2 style={heading}>3. Classificació</h2>
    <p style={p}><strong>Fèrrics:</strong> ferro i els seus aliatges, com l'acer i el ferro colat.</p>
    <p style={p}><strong>No fèrrics:</strong> la resta, com coure, alumini, zinc, crom i titani.</p>
    <p><strong>Siderúrgia:</strong> part de la metal·lúrgia dedicada al ferro i als seus aliatges.</p>
   </section>
   <section style={block}>
    <h2 style={heading}>4. Propietats</h2>
    <p style={p}><strong>Resistència:</strong> aguantar forces sense trencar-se ni deformar-se fàcilment. Exemple: acer.</p>
    <p style={p}><strong>Duresa:</strong> costa ratllar-lo o foradar-lo. Contrari: <strong>tou</strong>, com el plom.</p>
    <p style={p}><strong>Tenacitat:</strong> aguantar cops sense trencar-se, com l'acer. Contrari: <strong>fràgil</strong>, com el ferro colat.</p>
    <p style={p}><strong>Plasticitat:</strong> deformar-se de manera permanent sense trencar-se.</p>
    <ul style={{paddingLeft:22}}><li><strong>Dúctil:</strong> es pot estirar per fer fils. Exemple: coure.</li><li><strong>Mal·leable:</strong> es pot aixafar per fer làmines. Exemple: alumini.</li></ul>
   </section>
   <aside style={{...block,borderColor:'#647b72'}}><h2 style={heading}>Per recordar-ho</h2><p>Resistència = forces.<br/>Duresa = ratllades.<br/>Tenacitat = cops.<br/>Plasticitat = canviar de forma.</p></aside>
  </div>
  <p style={{marginTop:26,color:'#a0a5af',fontSize:14}}>Font: APUNTS METALL, pàgines 1–26.</p>
 </main>;
}
