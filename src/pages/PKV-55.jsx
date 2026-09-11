import React from 'react';
import InsuranceCategory from '../components/InsuranceCategory';
import SEOHead from '@/components/SEOHead';

const benefits = [
  {
    title: "Altersgerechte Tarife",
    description: "Spezielle PKV-Tarife für 55+"
  },
  {
    title: "Bestehende Behandlungen",
    description: "Trotz Vorerkrankungen möglich"
  },
  {
    title: "Sofortschutz",
    description: "Schnelle Aufnahme möglich"
  }
];

const features = [
  "PKV-Tarife speziell für Menschen über 55",
  "Aufnahme auch mit Vorerkrankungen möglich",
  "Angepasste Beiträge für das Alter",
  "Vollwertige PKV-Leistungen",
  "Chefarztbehandlung und Einzelzimmer",
  "Keine Wartezeiten bei Fachärzten",
  "Weltweiter Versicherungsschutz",
  "Beitragsrückerstattung bei Schadenfreiheit",
  "Freie Krankenhaus- und Arztwahl",
  "Erstattung alternativer Heilmethoden"
];

const keywords = [
  "PKV über 55",
  "Private Krankenversicherung 55+",
  "PKV Senioren",
  "Krankenversicherung Alter",
  "PKV Aufnahme über 55"
];

export default function PKV55Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "PKV über 55 Jahre",
    "description": "Private Krankenversicherung für Menschen über 55 - auch mit Vorerkrankungen möglich.",
    "brand": { "@type": "Brand", "name": "versicherungsofort.de" }
  };

  return (
    <>
      <SEOHead
        title="PKV über 55 Jahre - Private Krankenversicherung 55+ Vergleich | versicherungsofort.de"
        description="PKV über 55 vergleichen: ✓ Altersgerechte Tarife ✓ Auch mit Vorerkrankungen ✓ Vollwertige Leistungen. Jetzt PKV 55+ vergleichen!"
        keywords="PKV über 55, Private Krankenversicherung 55+, PKV Senioren, Krankenversicherung Alter"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InsuranceCategory
          title="PKV für Menschen über 55 - Auch im Alter optimal versichert"
          description="Auch ab 55 Jahren ist der Wechsel in die private Krankenversicherung möglich. Spezielle Tarife für Ihre Lebenssituation mit umfassendem Schutz."
          benefits={benefits}
          features={features}
          keywords={keywords}
          iframeId="tcpp-iframe-pkv55"
          scriptSrc="https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-pkv55/pkv55-iframe.js"
        />

        {/* SEO Content */}
        <div className="mt-16 max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Private Krankenversicherung ab 55 - Was Sie beachten sollten
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Der Wechsel in die <strong>private Krankenversicherung</strong> ist auch ab 55 Jahren noch möglich, 
            erfordert aber besondere Überlegungen. Spezielle Tarife berücksichtigen die Bedürfnisse 
            älterer Versicherungsnehmer.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">
              💡 Wichtiger Hinweis
            </h3>
            <p className="text-yellow-700 text-sm">
              Ab 55 Jahren gelten besondere Bedingungen für den PKV-Wechsel. 
              Eine ausführliche Beratung ist empfehlenswert.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}