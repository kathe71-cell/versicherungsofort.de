import React from 'react';
import InsuranceCategory from '../components/InsuranceCategory';
import SEOHead from '@/components/SEOHead';

const benefits = [
  {
    title: "Staatliche Förderung",
    description: "Bis zu 175€ Grundzulage jährlich"
  },
  {
    title: "Steuervorteile",
    description: "Bis zu 2.100€ jährlich absetzbar"
  },
  {
    title: "Garantierte Rente",
    description: "Lebenslange Rentenzahlung sicher"
  }
];

const features = [
  "Staatliche Grundzulage von 175€ pro Jahr",
  "Kinderzulage von 300€ pro Kind (ab 2008 geboren)",
  "Steuerliche Absetzbarkeit bis 2.100€ jährlich",
  "Garantierte lebenslange Rentenzahlung",
  "Hartz-IV-sicher und pfändungsgeschützt",
  "Flexible Beitragszahlung möglich",
  "Wohn-Riester für Eigenheimfinanzierung",
  "Übertragbar bei Jobwechsel",
  "Berufsunfähigkeitsschutz integrierbar",
  "Vererbbar an Ehepartner"
];

const keywords = [
  "Riester-Rente",
  "Riester Förderung",
  "Staatliche Rente",
  "Altersvorsorge gefördert",
  "Riester Vergleich"
];

export default function RiesterPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Riester-Rente",
    "description": "Staatlich geförderte Riester-Rente mit Zulagen und Steuervorteilen für Ihre Altersvorsorge.",
    "brand": { "@type": "Brand", "name": "versicherungsofort.de" }
  };

  return (
    <>
      <SEOHead
        title="Riester-Rente Vergleich 2025 - Staatlich geförderte Altersvorsorge | versicherungsofort.de"
        description="Riester-Rente vergleichen: ✓ Staatliche Förderung bis 175€ ✓ Steuervorteile bis 2.100€ ✓ Garantierte Rente. Jetzt Riester-Tarife vergleichen!"
        keywords="Riester-Rente, Riester Förderung, Riester Vergleich, staatliche Altersvorsorge, Riester Zulagen"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InsuranceCategory
          title="Riester-Rente - Staatlich geförderte Altersvorsorge"
          description="Nutzen Sie die staatliche Förderung für Ihre Altersvorsorge. Mit Zulagen und Steuervorteilen zu einer sicheren Zusatzrente im Alter."
          benefits={benefits}
          features={features}
          keywords={keywords}
          iframeId="tcpp-iframe-riester"
          scriptSrc="https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-riester/riester-iframe.js"
        />

        {/* SEO Content */}
        <div className="mt-16 max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Riester-Rente - Lohnt sich das noch?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Die <strong>Riester-Rente</strong> ist eine staatlich geförderte Form der privaten 
            Altersvorsorge. Trotz Kritik kann sie sich bei richtiger Nutzung der Förderung lohnen.
          </p>

          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              💰 Maximale Förderung
            </h3>
            <p className="text-green-700 text-sm">
              Eine Familie mit 2 Kindern (nach 2008 geboren) kann jährlich bis zu 775€ 
              staatliche Förderung erhalten (175€ + 2 × 300€).
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}