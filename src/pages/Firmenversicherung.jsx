import React from 'react';
import InsuranceCategory from '../components/InsuranceCategory';
import SEOHead from '@/components/SEOHead';

const benefits = [
  {
    title: "Umfassender Schutz",
    description: "Sichern Sie Ihr Unternehmen gegen Risiken ab"
  },
  {
    title: "Individuelle Lösungen",
    description: "Maßgeschneiderte Pakete für Ihre Branche"
  },
  {
    title: "Existenzsicherung",
    description: "Schutz vor betriebsbedrohenden Schäden"
  }
];

const features = [
  "Betriebshaftpflicht für Schäden bei Dritten",
  "Inhaltsversicherung für Ihr Inventar und Waren",
  "Gewerbe-Rechtsschutz für rechtliche Streitigkeiten",
  "Betriebsunterbrechungsversicherung bei Stillstand",
  "Elektronik- und Maschinenversicherung",
  "Flottenversicherung für Firmenfahrzeuge",
  "D&O-Versicherung für Manager und Geschäftsführer",
  "Cyber-Versicherung gegen digitale Risiken",
  "Vermögensschadenhaftpflicht für beratende Berufe",
  "Transportversicherung für Ihre Waren"
];

const keywords = [
  "Firmenversicherung",
  "Gewerbeversicherung",
  "Betriebshaftpflicht",
  "Inhaltsversicherung",
  "Versicherung für Selbstständige"
];

export default function FirmenversicherungPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Firmenversicherung",
    "description": "Umfassender Versicherungsschutz für Unternehmen - Betriebshaftpflicht, Inhaltsversicherung und mehr.",
    "brand": { "@type": "Brand", "name": "versicherungsofort.de" }
  };

  return (
    <>
      <SEOHead
        title="Firmenversicherung Vergleich 2025 - Gewerbeversicherung online | versicherungsofort.de"
        description="Firmenversicherung vergleichen: ✓ Betriebshaftpflicht ✓ Inhaltsversicherung ✓ Cyber-Schutz. Jetzt Gewerbeversicherung vergleichen!"
        keywords="Firmenversicherung, Gewerbeversicherung, Betriebshaftpflicht, Inhaltsversicherung, Versicherung Selbstständige"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InsuranceCategory
          title="Firmenversicherung - Umfassender Schutz für Ihr Unternehmen"
          description="Sichern Sie Ihr Unternehmen, Ihre Mitarbeiter und Ihre Existenz gegen unvorhersehbare Risiken ab. Finden Sie die passende Gewerbeversicherung für Ihre Branche."
          benefits={benefits}
          features={features}
          keywords={keywords}
          iframeId="tcpp-iframe-fc"
          scriptSrc="https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-fc/fc-iframe.js"
        />
        <div className="mt-16 max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Welche Firmenversicherungen sind wichtig?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Der richtige Versicherungsschutz ist für jedes Unternehmen existenziell. Die wichtigste Versicherung ist die <strong>Betriebshaftpflicht</strong>, die bei Schäden einspringt, die Sie oder Ihre Mitarbeiter bei Dritten verursachen. Je nach Branche sind weitere Absicherungen wie eine Inhalts- oder Rechtsschutzversicherung sinnvoll.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}