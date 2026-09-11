import React, { useEffect } from 'react';
import InsuranceCategory from '../components/InsuranceCategory';
import SEOHead from '@/components/SEOHead';

const benefits = [
  {
    title: "Premium-Leistungen",
    description: "Chefarztbehandlung & Einzelzimmer"
  },
  {
    title: "Schnelle Termine",
    description: "Keine Wartezeiten beim Facharzt"
  },
  {
    title: "Beitragsrückgewähr",
    description: "Geld zurück bei Schadenfreiheit"
  }
];

const features = [
  "Über 40 private Krankenversicherer im Vergleich",
  "Individuelle Tarifgestaltung nach Ihren Wünschen",
  "Chefarztbehandlung und freie Krankenhauswahl",
  "Erstattung für alternative Heilmethoden",
  "Zahnersatz bis zu 100% erstattet",
  "Auslandsschutz weltweit inklusive",
  "Beitragsrückerstattung bei Schadenfreiheit",
  "Schnelle Facharzttermine ohne Wartezeit",
  "Übernahme von Vorsorgeuntersuchungen",
  "Lebenslange Versicherungsgarantie"
];

const keywords = [
  "PKV Vergleich online",
  "Private Krankenversicherung sofort",
  "PKV Angebot heute",
  "Gesetzlich zu privat wechseln",
  "PKV Testsieger"
];

export default function PKVPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Private Krankenversicherung",
    "description": "Vergleichen Sie über 40 Private Krankenversicherungen. Chefarztbehandlung, Einzelzimmer und beste medizinische Versorgung.",
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
        title="Private Krankenversicherung Vergleich 2025 - Top PKV Tarife | versicherungsofort.de"
        description="Private Krankenversicherung vergleichen: ✓ 40+ Anbieter ✓ Chefarztbehandlung ✓ Einzelzimmer ✓ Beste medizinische Versorgung. Jetzt PKV-Tarife vergleichen!"
        keywords="Private Krankenversicherung, PKV Vergleich, PKV wechseln, Private Krankenversicherung Kosten, GKV zu PKV wechseln"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InsuranceCategory
            title="Private Krankenversicherung (PKV) Vergleich"
            description="Sichern Sie sich Topmedizin mit der privaten Krankenversicherung. Chefarztbehandlung, freie Krankenhauswahl und erstklassige Leistungen - jetzt kostenlos vergleichen."
            benefits={benefits}
            features={features}
            keywords={keywords}
            iframeId="tcpp-iframe-pkv"
            scriptSrc="https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-pkv/pkv-iframe.js"
          />

          {/* SEO Content */}
          <div className="mt-16 max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Private Krankenversicherung - Mehr Leistung für Ihre Gesundheit
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Die <strong>private Krankenversicherung (PKV)</strong> bietet Ihnen medizinische Versorgung 
              auf höchstem Niveau. Als Privatpatient genießen Sie bevorzugte Behandlung, kürzere Wartezeiten 
              und Zugang zu modernsten Therapiemethoden.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Vorteile der privaten Krankenversicherung
            </h3>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg mb-8">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-red-600">100%</div>
                  <div className="text-sm text-red-800">Zahnersatz möglich</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">0 Tage</div>
                  <div className="text-sm text-red-800">Wartezeit Facharzt</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">Weltweit</div>
                  <div className="text-sm text-red-800">Versicherungsschutz</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}