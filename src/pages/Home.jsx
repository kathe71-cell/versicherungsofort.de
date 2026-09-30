import React from 'react';
import { 
  Shield, 
  Zap, 
  TrendingDown, 
  Car, 
  Home as HomeIcon, 
  HeartPulse, 
  Briefcase, 
  FileText, 
  GraduationCap, 
  Dog, 
  Users, 
  BookOpen, 
  Smile,
  CheckCircle2,
  ArrowRight,
  Activity,
  Coins,
  Landmark,
  TrendingUp,
  LifeBuoy,
  Umbrella,
  Building2,
  Building,
  Gauge,
  UserCheck,
  ShieldAlert,
  HelpCircle
} from 'lucide-react';

export const insuranceCategories = [
  {
    title: "Fahrzeuge & Mobilität",
    items: [
      { title: "Kfz-Versicherung", url: "kfz", icon: "Car", description: "Pkw-Haftpflicht, Teilkasko & Vollkasko vergleichen.", type: "vergleich" },
      { title: "Motorradversicherung", url: "motorrad", icon: "Gauge", description: "Motorräder, Roller & Quads günstig absichern.", type: "vergleich" }
    ]
  },
  {
    title: "Haftpflicht & Sachwerte",
    items: [
      { title: "Privathaftpflicht", url: "haftpflicht", icon: "Shield", description: "Absicherung vor Schadensersatzansprüchen Dritter.", type: "vergleich" },
      { title: "Hausratversicherung", url: "hausrat", icon: "HomeIcon", description: "Schutz für Möbel & Wertsachen bei Feuer, Einbruch & Sturm.", type: "vergleich" },
      { title: "Wohngebäudeversicherung", url: "wohngebaeudeversicherung", icon: "HomeIcon", description: "Immobilienschutz bei Feuer, Leitungswasser & Elementarschäden.", type: "vergleich" },
      { title: "Hundehaftpflicht & Tierhalter", url: "tierhalterhaftpflicht", icon: "Dog", description: "Haftpflichtschutz für Hunde- & Pferdehalter.", type: "vergleich" },
      { title: "Hundekrankenversicherung", url: "hundekrankenversicherung", icon: "Activity", description: "Tierarztkosten & Operationsschutz für Hunde.", type: "vergleich" },
      { title: "Haus- & Grundbesitzerhaftpflicht", url: "grundbesitzerhaftpflicht", icon: "Building2", description: "Haftpflichtschutz für Vermieter & Grundstückseigentümer.", type: "vergleich" }
    ]
  },
  {
    title: "Recht & Gewerbe",
    items: [
      { title: "Rechtsschutzversicherung", url: "rechtsschutz", icon: "FileText", description: "Kostenübernahme für Anwälte & Gerichte je nach Baustein.", type: "vergleich" },
      { title: "Firmen- & Gewerbeversicherung", url: "firmenversicherung", icon: "Building", description: "Betriebshaftpflicht & Inhaltsversicherung für Gewerbe.", type: "anfrage" }
    ]
  },
  {
    title: "Gesundheit & Pflege",
    items: [
      { title: "Private Krankenversicherung (PKV)", url: "pkv", icon: "HeartPulse", description: "Krankenvollversicherung für Angestellte über JAEG, Beamte & Selbstständige.", type: "vergleich" },
      { title: "PKV für Beamte & Anwärter", url: "pkv-beamte", icon: "UserCheck", description: "Beihilfe-Ergänzungstarife für den öffentlichen Dienst.", type: "vergleich" },
      { title: "PKV für Studenten", url: "pkv-studenten", icon: "GraduationCap", description: "Studentische Krankenversicherungstarife.", type: "vergleich" },
      { title: "PKV Tarifwechsel ab 55", url: "pkv-55", icon: "Users", description: "Beitragsoptimierung & interner Tarifwechsel nach § 204 VVG.", type: "anfrage" },
      { title: "Zahnzusatz & Krankenzusatz", url: "krankenzusatz", icon: "Smile", description: "Tarifabhängige Kostenerstattung für Zahnersatz & Prophylaxe.", type: "vergleich" },
      { title: "Pflegezusatzversicherung", url: "pflege", icon: "Activity", description: "Pflegetagegeld & Erstattung für Pflegegrade 1-5.", type: "vergleich" }
    ]
  },
  {
    title: "Vorsorge & Arbeitskraft",
    items: [
      { title: "Berufsunfähigkeitsversicherung (BU)", url: "berufsunfaehigkeit", icon: "Briefcase", description: "Einkommensschutz bei dauerhafter Krankheit oder Unfall.", type: "vergleich" },
      { title: "Unfallversicherung", url: "unfallversicherung", icon: "ShieldAlert", description: "24-Stunden-Invaliditätsschutz für Freizeit & Beruf.", type: "vergleich" },
      { title: "Risikolebensversicherung", url: "risikolebensversicherung", icon: "LifeBuoy", description: "Hinterbliebenenschutz zur Immobilien- & Familienabsicherung.", type: "vergleich" },
      { title: "Kapitallebensversicherung", url: "lebensversicherung", icon: "Umbrella", description: "Kombination aus Todesfallschutz und Sparanteil.", type: "vergleich" },
      { title: "Private Rentenversicherung", url: "rente", icon: "Coins", description: "Private Altersvorsorgevereinbarung mit Rentenoption.", type: "vergleich" },
      { title: "Riester-Rente", url: "riester", icon: "Landmark", description: "Staatlich geförderte Altersvorsorge mit Zulagen.", type: "vergleich" },
      { title: "Rürup-Rente (Basisrente)", url: "ruerup", icon: "TrendingUp", description: "Steuerbegünstigte Basisversorgung für Selbstständige & Angestellte.", type: "vergleich" }
    ]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      
      {/* HERO SECTION */}
      <section className="relative bg-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden px-4 border-b border-slate-200">
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 text-xs font-black uppercase tracking-widest text-slate-600 mb-8 bg-slate-50 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Unabhängiges Informations- & Vergleichsportal</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
            Versicherungen vergleichen.<br /><span className="text-blue-600">Faktenbasiert & transparent.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Objektive Tarifübersichten für Ihre Vorsorge und Absicherung. Transparente Konditionen, direkte Rechneranbindung und redaktionelle Leitfäden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#versicherungen" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-base font-black rounded-full shadow-lg shadow-blue-500/20 transition-all hover:scale-105">
              Tarife vergleichen *
            </a>
            <a href="/ratgeber" className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 px-8 py-4 text-base font-bold rounded-full transition-all">
              Zum Ratgeber
            </a>
          </div>
        </div>
      </section>

      {/* TRANSPARENCY & FEATURES */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 mb-5 bg-slate-900 text-white rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black mb-2 tracking-tight">Direkte Rechner-Eingabe</h3>
              <p className="text-slate-600 font-medium text-sm leading-relaxed">
                Eingestellte Online-Vergleichsrechner unserer Partner ermöglichen die sofortige Eingabe Ihrer individuellen Objektdaten.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 mb-5 bg-slate-900 text-white rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black mb-2 tracking-tight">Verschlüsselt & DSGVO-konform</h3>
              <p className="text-slate-600 font-medium text-sm leading-relaxed">
                Gesicherte SSL/TLS-Verbindung. Nutzung des nativen System-Schriftarten-Stacks ohne externe Schriftarten-CDNs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 mb-5 bg-slate-900 text-white rounded-xl flex items-center justify-center">
                <TrendingDown className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black mb-2 tracking-tight">Transparente Preisübersicht</h3>
              <p className="text-slate-600 font-medium text-sm leading-relaxed">
                Vergleichen Sie Leistungen und Beiträge sachlich gegeneinander. Alle Tarifangaben beziehen sich auf die Konditionen der jeweiligen Anbieter.
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
              Alle verfügbaren Versicherungsvergleiche
            </h2>
            <p className="text-slate-600 font-medium text-base max-w-2xl mx-auto">
              Wählen Sie die gewünschte Sparte, um direkt zum entsprechenden Vergleichsrechner oder Anfragenformular zu gelangen.
            </p>
          </div>

          <div className="space-y-16">
            {insuranceCategories.map((group, gIdx) => (
              <div key={gIdx}>
                <div className="flex items-center space-x-4 mb-8">
                  <h3 className="text-xs font-black uppercase tracking-[0.25em] text-slate-500">{group.title}</h3>
                  <div className="flex-1 h-px bg-slate-200"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {group.items.map((cat, itemIdx) => (
                    <a 
                      key={itemIdx} 
                      href={`/${cat.url}`} 
                      className="bg-slate-50 p-6 rounded-3xl border border-slate-200 hover:bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                          <Shield className="w-5 h-5" />
                        </div>
                        <h4 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{cat.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed font-medium mb-6">{cat.description}</p>
                      </div>
                      <div className="text-xs font-black uppercase tracking-wider text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        {cat.type === 'anfrage' ? 'Angebot anfragen *' : 'Tarife vergleichen *'} <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER DISCLAIMER */}
      <footer className="bg-slate-900 text-white py-12 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 space-y-3">
          <div>© 2026 versicherungsofort.de – Alle Rechte vorbehalten.</div>
          <div className="max-w-4xl mx-auto text-[11px] leading-relaxed text-slate-400">
            * Gesetzliche Transparenz- & Werbekennzeichnung: versicherungsofort.de ist ein unabhängiges Verbraucher- und Informationsportal. Mit Sternchen (*) gekennzeichnete Verlinkungen sind Partnerlinks (Affiliate-Links). Bei der Nutzung der Vergleichsrechner werden Sie zu den Angeboten unserer technischen Partner (z.B. TARIFCHECK24 GmbH) weitergeleitet. Für Sie entstehen keine Mehrkosten.
          </div>
        </div>
      </footer>

    </div>
  );
}