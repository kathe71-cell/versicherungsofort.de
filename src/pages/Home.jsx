import React from 'react';
import { 
  Shield, 
  Zap, 
  TrendingDown, 
  Check, 
  Lock, 
  Search, 
  ArrowRight, 
  Car, 
  Home as HomeIcon, 
  HeartPulse, 
  Briefcase, 
  FileText, 
  GraduationCap, 
  Dog, 
  Users, 
  BookOpen, 
  Smile 
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      
      {/* HERO SECTION */}
      <section className="relative bg-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden px-4 border-b border-slate-100">
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 text-xs font-black uppercase tracking-widest text-slate-600 mb-8 bg-slate-50 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Unabhängig & Sicherer Versicherungsvergleich</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
            Versicherungen vergleichen.<br /><span className="text-blue-600">Faktenbasiert & digital.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-semibold">
            Transparente Tarifübersichten von über 300 Versicherungsgesellschaften. Ohne Verkaufsdruck, ohne versteckte Gebühren.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#versicherungen" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-base font-black rounded-full shadow-xl shadow-blue-500/20 transition-all hover:scale-105">
              Tarife vergleichen *
            </a>
            <a href="/ratgeber" className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 px-8 py-4 text-base font-bold rounded-full transition-all">
              Zum Ratgeber
            </a>
          </div>
        </div>
      </section>

      {/* TRUST FEATURES */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 mb-5 bg-slate-900 text-white rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black mb-2 tracking-tight">Echtzeit-Berechnung</h3>
              <p className="text-slate-600 font-medium text-sm leading-relaxed">
                Modernste Vergleichs-Algorithmen berechnen Ihren persönlichen Beitrag in unter 60 Sekunden.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 mb-5 bg-slate-900 text-white rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black mb-2 tracking-tight">Verschlüsselt & Datenschutz</h3>
              <p className="text-slate-600 font-medium text-sm leading-relaxed">
                Verschlüsselte Datenübertragung (HTTPS). Lokaler System-Schriftarten-Stack ohne externe Google-Fonts-CDNs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 mb-5 bg-slate-900 text-white rounded-xl flex items-center justify-center">
                <TrendingDown className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black mb-2 tracking-tight">Nachweisbare Ersparnis</h3>
              <p className="text-slate-600 font-medium text-sm leading-relaxed">
                Durch den objektiven Marktüberblick sichern Sie sich exakt das passende Preis-Leistungs-Verhältnis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section id="versicherungen" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Alle Versicherungsvergleiche auf einen Blick
            </h2>
            <p className="text-slate-600 font-medium text-base max-w-2xl mx-auto">
              Wählen Sie Ihre gewünschte Sparte für detaillierte Tarifrechner und transparente Konditionen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <a href="/kfz" className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:bg-blue-50/50 hover:border-blue-300 transition group">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4 shadow">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-1 group-hover:text-blue-600">KFZ-Versicherung</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">Haftpflicht, Teil- & Vollkasko mit Beitragsersparnis im Wechselmodell.</p>
              <span className="text-xs font-bold text-blue-600 flex items-center gap-1">Jetzt vergleichen <ArrowRight className="w-3.5 h-3.5" /></span>
            </a>

            <a href="/haftpflicht" className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:bg-blue-50/50 hover:border-blue-300 transition group">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4 shadow">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-1 group-hover:text-blue-600">Privathaftpflicht</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">Unverzichtbarer Grundschutz vor Personenschäden & Sachschäden.</p>
              <span className="text-xs font-bold text-blue-600 flex items-center gap-1">Jetzt vergleichen <ArrowRight className="w-3.5 h-3.5" /></span>
            </a>

            <a href="/hausrat" className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:bg-blue-50/50 hover:border-blue-300 transition group">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4 shadow">
                <HomeIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-1 group-hover:text-blue-600">Hausratversicherung</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">Absicherung bei Feuer, Leitungswasser, Einbruchdiebstahl & Sturm.</p>
              <span className="text-xs font-bold text-blue-600 flex items-center gap-1">Jetzt vergleichen <ArrowRight className="w-3.5 h-3.5" /></span>
            </a>

            <a href="/pkv" className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:bg-blue-50/50 hover:border-blue-300 transition group">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4 shadow">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-1 group-hover:text-blue-600">Private Krankenversicherung</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">Erstklassige medizinische Versorgung für Angestellte, Beamte & Selbstständige.</p>
              <span className="text-xs font-bold text-blue-600 flex items-center gap-1">Jetzt vergleichen <ArrowRight className="w-3.5 h-3.5" /></span>
            </a>

            <a href="/berufsunfähigkeit" className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:bg-blue-50/50 hover:border-blue-300 transition group">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4 shadow">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-1 group-hover:text-blue-600">Berufsunfähigkeit</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">Finanzielle Absicherung der eigenen Arbeitskraft vor Einkommensausfall.</p>
              <span className="text-xs font-bold text-blue-600 flex items-center gap-1">Jetzt vergleichen <ArrowRight className="w-3.5 h-3.5" /></span>
            </a>

            <a href="/rechtsschutz" className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:bg-blue-50/50 hover:border-blue-300 transition group">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4 shadow">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-1 group-hover:text-blue-600">Rechtsschutzversicherung</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">Übernahme von Anwalts- & Gerichtskosten im Streitfall.</p>
              <span className="text-xs font-bold text-blue-600 flex items-center gap-1">Jetzt vergleichen <ArrowRight className="w-3.5 h-3.5" /></span>
            </a>

          </div>
        </div>
      </section>

      {/* FOOTER DISCLAIMER */}
      <footer className="bg-slate-900 text-white py-12 text-xs">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 space-y-3">
          <div>© 2026 versicherungsofort.de – Alle Rechte vorbehalten.</div>
          <div>* Gesetzliche Transparenz- & Werbekennzeichnung: versicherungsofort.de ist ein unabhängiges Verbraucher- und Informationsportal. Mit Sternchen (*) gekennzeichnete Links sind Partnerlinks (Affiliate-Links).</div>
        </div>
      </footer>

    </div>
  );
}