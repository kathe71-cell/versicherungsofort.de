import React, { useState } from 'react';
import { Shield, ArrowUpRight, Award, Zap, CheckCircle2 } from 'lucide-react';

export default function RechnerEmbed() {
  const [kfzBeitrag, setKfzBeitrag] = useState(650);
  const [haftpflichtBeitrag, setHaftpflichtBeitrag] = useState(85);
  const [hausratBeitrag, setHausratBeitrag] = useState(140);
  const [rechtsschutzBeitrag, setRechtsschutzBeitrag] = useState(260);

  // Durchschnittliche Wechselersparnis laut Verbraucherstudien:
  // KFZ: ca. 32%
  // Haftpflicht: ca. 30%
  // Hausrat: ca. 28%
  // Rechtsschutz: ca. 25%
  const kfzSavings = kfzBeitrag * 0.32;
  const haftpflichtSavings = haftpflichtBeitrag * 0.30;
  const hausratSavings = hausratBeitrag * 0.28;
  const rechtsschutzSavings = rechtsschutzBeitrag * 0.25;

  const currentTotal = kfzBeitrag + haftpflichtBeitrag + hausratBeitrag + rechtsschutzBeitrag;
  const annualSavings = kfzSavings + haftpflichtSavings + hausratSavings + rechtsschutzSavings;
  const fiveYearSavings = annualSavings * 5;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-3 sm:p-6 flex flex-col items-center justify-center font-sans antialiased">
      <div className="w-full max-w-xl bg-white border border-slate-300 rounded-2xl shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-slate-950 text-white p-5 sm:p-6 border-b border-slate-800">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-amber-400 text-slate-955">
              <Zap className="w-3.5 h-3.5" /> Tarifwechsel-Widget
            </span>
            <span className="text-xs font-bold text-slate-400">Verbraucher-Orientierung</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Versicherungs-Sparpotenzial-Rechner
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
            Ermitteln Sie Ihre jährliche Ersparnis durch Optimierung der Standardtarife.
          </p>
        </div>

        {/* Inputs */}
        <div className="p-5 sm:p-6 space-y-4">
          
          {/* KFZ */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-slate-900">KFZ-Versicherung (Haftpflicht/Kasko):</label>
              <span className="text-xs font-black text-slate-900 bg-slate-100 px-2 py-0.5 rounded">{kfzBeitrag} € / Jahr</span>
            </div>
            <input
              type="range"
              min="200"
              max="1500"
              step="25"
              value={kfzBeitrag}
              onChange={(e) => setKfzBeitrag(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          {/* Haftpflicht */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-slate-900">Privathaftpflicht:</label>
              <span className="text-xs font-black text-slate-900 bg-slate-100 px-2 py-0.5 rounded">{haftpflichtBeitrag} € / Jahr</span>
            </div>
            <input
              type="range"
              min="35"
              max="200"
              step="5"
              value={haftpflichtBeitrag}
              onChange={(e) => setHaftpflichtBeitrag(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          {/* Hausrat */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-slate-900">Hausratversicherung:</label>
              <span className="text-xs font-black text-slate-900 bg-slate-100 px-2 py-0.5 rounded">{hausratBeitrag} € / Jahr</span>
            </div>
            <input
              type="range"
              min="50"
              max="400"
              step="10"
              value={hausratBeitrag}
              onChange={(e) => setHausratBeitrag(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          {/* Rechtsschutz */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-slate-900">Rechtsschutzversicherung:</label>
              <span className="text-xs font-black text-slate-900 bg-slate-100 px-2 py-0.5 rounded">{rechtsschutzBeitrag} € / Jahr</span>
            </div>
            <input
              type="range"
              min="100"
              max="600"
              step="10"
              value={rechtsschutzBeitrag}
              onChange={(e) => setRechtsschutzBeitrag(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          {/* Results Grid */}
          <div className="bg-gradient-to-br from-amber-50 to-slate-50 border-2 border-amber-400 rounded-2xl p-4 sm:p-5 mt-4 space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-amber-200">
              <span className="text-xs font-black uppercase text-amber-950">Berechnetes Sparpotenzial *</span>
              <span className="text-xs font-bold text-slate-600">Aktuelle Summe: {currentTotal} € / J.</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="text-[11px] font-bold text-slate-500 block">Mögliche Ersparnis / Jahr</span>
                <span className="text-2xl font-black text-emerald-700">{annualSavings.toFixed(0)} €</span>
                <span className="text-[10px] text-slate-500 block mt-0.5">durch Tarifwechsel</span>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="text-[11px] font-bold text-slate-500 block">5-Jahres-Vorteil</span>
                <span className="text-2xl font-black text-slate-950">{fiveYearSavings.toFixed(0)} €</span>
                <span className="text-[10px] text-slate-500 block mt-0.5">kumulierte Ersparnis</span>
              </div>
            </div>

            <p className="text-[10px] text-slate-500 font-medium leading-normal">
              * Unverbindliche Modellrechnung basierend auf durchschnittlichen Beitragsdifferenzen zwischen Bestands- und Neukundentarifen. Die tatsächliche Ersparnis hängt von Vorschäden und individuellen Deckungsbausteinen ab.
            </p>
          </div>

          {/* Attribution */}
          <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-700 font-medium">
              <Shield className="w-4 h-4 text-emerald-700" />
              <span>Unabhängig bereitgestellt</span>
            </div>
            <a
              href="https://www.versicherungsofort.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-black text-amber-800 hover:text-amber-950 underline hover:no-underline text-xs"
            >
              <span>Vollständiger Vergleich auf VersicherungSofort.de</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
