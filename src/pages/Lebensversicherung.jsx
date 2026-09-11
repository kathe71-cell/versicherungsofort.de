import React from 'react';
import InsuranceCategory from '../components/InsuranceCategory';
import SEOHead from '@/components/SEOHead';

const benefits = [
  {
    title: "Familie absichern",
    description: "Finanzielle Sicherheit für Hinterbliebene"
  },
  {
    title: "Kapitalaufbau",
    description: "Sparen und Versichern kombiniert"
  },
  {
    title: "Steuervorteile",
    description: "Beiträge teilweise absetzbar"
  }
];

const features = [
  "Kapitalbildende Lebensversicherung mit Überschussbeteiligung",
  "Hinterbliebenenabsicherung und Altersvorsorge kombiniert",
  "Flexible Beitragszahlung und Laufzeiten",
  "Steuerliche Vorteile bei langer Laufzeit",
  "Beleihung und vorzeitige Auszahlung möglich",
  "Zusatzversicherungen integrierbar (BU, Unfall)",
  "Garantierte Mindestleistung plus Überschüsse",
  "Weltweiter Versicherungsschutz",
  "Fondsgebundene Varianten verfügbar",
  "Individuelle Gestaltungsmöglichkeiten"
];

const keywords = [
  "Lebensversicherung",
  "Kapitallebensversicherung",
  "Familie absichern",
  "Lebensversicherung Vergleich",
  "Hinterbliebenenabsicherung"
];

export default function LebensversicherungPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Lebensversicherung",
    "description": "Lebensversicherung zur Absicherung der Familie und zum Vermögensaufbau.",
    "brand": { "@type": "Brand", "name": "versicherungsofort.de" }
  };

  return (
    <>
      <SEOHead
        title="Lebensversicherung Vergleich 2025 - Familie absichern | versicherungsofort.de"
        description="Lebensversicherung vergleichen: ✓ Familie absichern ✓ Vermögensaufbau ✓ Steuervorteile. Jetzt Lebensversicherung vergleichen!"
        keywords="Lebensversicherung, Kapitallebensversicherung, Familie absichern, Hinterbliebenenabsicherung"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InsuranceCategory
          title="Lebensversicherung - Familie absichern und Vermögen aufbauen"
          description="Kombinieren Sie Hinterbliebenenabsicherung mit Vermögensaufbau. Die Lebensversicherung bietet finanzielle Sicherheit für Ihre Familie und steuerliche Vorteile für Sie."
          benefits={benefits}
          features={features}
          keywords={keywords}
          iframeId="tcpp-iframe-leben"
          scriptSrc="https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-leben/leben-iframe.js"
        />

        {/* SEO Content */}
        <div className="mt-16 max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Lebensversicherung - Warum sie sinnvoll ist
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Die <strong>Lebensversicherung</strong> ist ein bewährtes Instrument zur 
            Hinterbliebenenabsicherung und zum langfristigen Vermögensaufbau. Sie kombiniert 
            Versicherungsschutz mit Sparmöglichkeiten.
          </p>

          <div className="bg-purple-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-purple-800 mb-2">
              💡 Steuerliche Vorteile
            </h3>
            <p className="text-purple-700 text-sm">
              Bei einer Laufzeit von mindestens 12 Jahren und Auszahlung nach dem 62. Lebensjahr 
              ist nur die Hälfte der Erträge steuerpflichtig.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}