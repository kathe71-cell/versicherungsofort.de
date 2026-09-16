import React, { useEffect } from 'react';
import InsuranceCategory from '../components/InsuranceCategory';
import SEOHead from '@/components/SEOHead';

const benefits = [
  {
    title: "Premium-Leistungen",
    description: "Chefarztbehandlung & Einzelzimmer je nach Tarif"
  },
  {
    title: "Freie Arztwahl",
    description: "Freie Wahl von Spezialisten & Kliniken"
  },
  {
    title: "Beitragsrückgewähr",
    description: "Mögliche Rückerstattung bei Schadenfreiheit"
  }
];

const features = [
  "Private Krankenversicherer im Tarifvergleich",
  "Individuelle Tarifgestaltung nach Ihren Wünschen",
  "Chefarztbehandlung und freie Krankenhauswahl je nach Tarif",
  "Erstattung für alternative Heilmethoden laut Tarifbaustein",
  "Zahnersatz bis zu 100% erstattungsfähig",
  "Auslandsschutz weltweit inklusive",
  "Beitragsrückerstattung bei Schadenfreiheit vereinbar",
  "Privatärztliche Versorgung und freie Arztwahl",
  "Übernahme von Vorsorgeuntersuchungen",
  "Garantierte Vertragskonditionen während der Laufzeit"
];

const keywords = [
  "PKV Vergleich online",
  "Private Krankenversicherung sofort",
  "PKV Angebot heute",
  "Gesetzlich zu privat wechseln",
  "PKV Tarife vergleichen"
];

export default function PKVPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Private Krankenversicherung",
    "description": "Vergleichen Sie Private Krankenversicherungen. Chefarztbehandlung, Einzelzimmer und beste medizinische Versorgung.",
    "brand": {
      "@type": "Brand",
      "name": "versicherungsofort.de"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "lowPrice": "150",
      "highPrice": "800"
    }
  };

  return (
    <>
      <SEOHead
        title="Private Krankenversicherung Vergleich 2025 - PKV Tarife | versicherungsofort.de"
        description="Private Krankenversicherung vergleichen: ✓ Anbietervergleich ✓ Chefarztbehandlung ✓ Einzelzimmer ✓ Medizinische Versorgung. Jetzt PKV-Tarife vergleichen!"
        keywords="Private Krankenversicherung, PKV Vergleich, PKV wechseln, Private Krankenversicherung Kosten, GKV zu PKV wechseln"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InsuranceCategory
            title="Private Krankenversicherung (PKV) Vergleich"
            description="Sichern Sie sich individuelle medizinische Leistungen mit der privaten Krankenversicherung. Chefarztbehandlung, freie Krankenhauswahl und erstklassige Versorgung - jetzt kostenlos vergleichen."
            benefits={benefits}
            features={features}
            keywords={keywords}
            iframeId="tcpp-iframe-pkv"
            scriptSrc="https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-pkv/pkv-iframe.js"
          />

          {/* SEO Content */}
          <div className="mt-16 max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Private Krankenversicherung - Individuelle medizinische Versorgung
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Die <strong>private Krankenversicherung (PKV)</strong> bietet Ihnen medizinische Versorgung 
              gemäß den gewählten Tarifbausteinen. Als Privatpatient profitieren Sie von vertraglich garantierten 
              Leistungen und freier Arztwahl.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Vorteile der privaten Krankenversicherung
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-lg mb-8 border border-slate-200">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">Bis 100%</div>
                  <div className="text-sm text-slate-700">Zahnersatz erstattungsfähig</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">Freie Wahl</div>
                  <div className="text-sm text-slate-700">Arzt- &amp; Spezialistenwahl</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">Weltweit</div>
                  <div className="text-sm text-slate-700">Versicherungsschutz im Urlaub</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}