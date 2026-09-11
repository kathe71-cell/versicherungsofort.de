import React from 'react';
import InsuranceCategory from '../components/InsuranceCategory';
import SEOHead from '@/components/SEOHead';

const benefits = [
  {
    title: "Spezielle Motorradtarife",
    description: "Tarife speziell für Motorräder entwickelt"
  },
  {
    title: "Saisonkennzeichen",
    description: "Günstige Saisonversicherung verfügbar"
  },
  {
    title: "Sofortschutz",
    description: "eVB-Nummer sofort per E-Mail"
  }
];

const features = [
  "Spezielle Motorradversicherungstarife",
  "Saisonkennzeichen-Tarife verfügbar",
  "Vollkasko auch für ältere Motorräder",
  "Schutzkleidung mitversichert",
  "Motorrad-Schutzbrief inklusive",
  "eVB-Nummer sofort per E-Mail",
  "Kostenloser Wechselservice",
  "24/7 Schadenhotline",
  "Rabatte für Fahrsicherheitstraining",
  "Werkstattservice deutschlandweit"
];

const keywords = [
  "Motorradversicherung günstig",
  "Motorrad versichern online",
  "Saisonkennzeichen Versicherung",
  "Motorradversicherung Vergleich",
  "Bike Versicherung"
];

export default function MotorradPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Motorradversicherung",
    "description": "Motorradversicherung vergleichen mit Saisonkennzeichen-Optionen und sofortigem Schutz.",
    "brand": { "@type": "Brand", "name": "versicherungsofort.de" }
  };

  return (
    <>
      <SEOHead
        title="Motorradversicherung Vergleich 2025 - Günstig Motorrad versichern | versicherungsofort.de"
        description="Motorradversicherung vergleichen: ✓ Spezielle Motorradtarife ✓ Saisonkennzeichen ✓ Sofort-Schutz ✓ eVB-Nummer direkt. Jetzt günstig Motorrad versichern!"
        keywords="Motorradversicherung, Motorrad versichern, Saisonkennzeichen Versicherung, Motorradversicherung Vergleich"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InsuranceCategory
          title="Motorradversicherung - Günstig und umfassend"
          description="Finden Sie die beste Motorradversicherung für Ihr Bike. Spezielle Tarife, Saisonkennzeichen-Optionen und sofortiger Schutz - alles aus einer Hand."
          benefits={benefits}
          features={features}
          keywords={keywords}
          iframeId="tcpp-iframe-mot"
          scriptSrc="https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-mot/mot-iframe.js"
        />

        {/* SEO Content */}
        <div className="mt-16 max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Motorradversicherung - Was Sie wissen sollten
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Die <strong>Motorradversicherung</strong> unterscheidet sich in wichtigen Punkten von der 
            Kfz-Versicherung für Autos. Spezielle Tarife berücksichtigen die besonderen Risiken 
            und Bedürfnisse von Motorradfahrern.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Besonderheiten der Motorradversicherung
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">✓ Saisonale Tarife</h4>
              <p className="text-sm text-orange-800">
                Viele Motorräder sind nur saisonal zugelassen - spezielle Tarife berücksichtigen dies.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">✓ Schutzausrüstung</h4>
              <p className="text-sm text-blue-800">
                Hochwertige Motorradschutzkleidung kann in der Kaskoversicherung mitversichert werden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}