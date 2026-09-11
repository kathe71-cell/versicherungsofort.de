import React from 'react';
import InsuranceCategory from '../components/InsuranceCategory';
import SEOHead from '@/components/SEOHead';

const benefits = [
  {
    title: "Hohe Absicherung",
    description: "Finanzieller Schutz für Ihre Liebsten"
  },
  {
    title: "Günstige Beiträge",
    description: "Viel Schutz für wenig Geld"
  },
  {
    title: "Sofortiger Schutz",
    description: "Absicherung ab dem ersten Tag"
  }
];

const features = [
  "Absicherung der Familie im Todesfall",
  "Kreditabsicherung für Immobilien",
  "Günstige Beiträge, besonders für junge Menschen",
  "Hohe Versicherungssummen möglich",
  "Flexible Laufzeiten und Beitragsanpassungen",
  "Beitragsbefreiung bei Berufsunfähigkeit möglich",
  "Nachversicherungsgarantie ohne erneute Gesundheitsprüfung",
  "Weltweiter Versicherungsschutz",
  "Schnelle und unbürokratische Auszahlung im Leistungsfall",
  "Partnerabsicherung möglich (verbundene Leben)"
];

const keywords = [
  "Risikolebensversicherung",
  "RLV Vergleich",
  "Todesfallabsicherung",
  "Kreditabsicherung",
  "Familie absichern"
];

export default function RisikolebensversicherungPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Risikolebensversicherung",
    "description": "Risikolebensversicherung zum Schutz Ihrer Familie - hohe Absicherung zu günstigen Beiträgen.",
    "brand": { "@type": "Brand", "name": "versicherungsofort.de" }
  };

  return (
    <>
      <SEOHead
        title="Risikolebensversicherung Vergleich 2025 - Familie günstig absichern | versicherungsofort.de"
        description="Risikolebensversicherung vergleichen: ✓ Hohe Absicherung ✓ Günstige Beiträge ✓ Familie schützen. Jetzt RLV-Tarife vergleichen!"
        keywords="Risikolebensversicherung, RLV, Todesfallabsicherung, Familie absichern, Kreditabsicherung"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InsuranceCategory
          title="Risikolebensversicherung - Günstiger Schutz für Ihre Familie"
          description="Sichern Sie Ihre Liebsten für den Fall der Fälle ab. Die Risikolebensversicherung bietet hohen finanziellen Schutz zu günstigen Beiträgen."
          benefits={benefits}
          features={features}
          keywords={keywords}
          iframeId="tcpp-iframe-rlv"
          scriptSrc="https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-rlv/rlv-iframe.js"
        />
        <div className="mt-16 max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Die Risikolebensversicherung erklärt</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Die <strong>Risikolebensversicherung (RLV)</strong> ist eine reine Risikoversicherung. Sie zahlt eine vereinbarte Summe an die Hinterbliebenen, falls die versicherte Person während der Vertragslaufzeit stirbt. Sie ist ideal zur Absicherung von Familien und Immobilienkrediten.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}