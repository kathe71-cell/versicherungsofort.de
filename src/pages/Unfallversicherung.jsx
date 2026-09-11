import React from 'react';
import InsuranceCategory from '../components/InsuranceCategory';
import SEOHead from '@/components/SEOHead';

const benefits = [
  {
    title: "24/7 Schutz",
    description: "Weltweiter Unfallschutz rund um die Uhr"
  },
  {
    title: "Hohe Leistungen",
    description: "Bis zu 1 Million € Invaliditätsleistung"
  },
  {
    title: "Günstige Beiträge",
    description: "Umfassender Schutz ab wenigen Euro"
  }
];

const features = [
  "24-Stunden-Unfallschutz weltweit",
  "Invaliditätsleistung bis 1 Million Euro",
  "Unfallrente bei dauerhafter Beeinträchtigung",
  "Bergungskosten und Rücktransport",
  "Krankenhaustagegeld bei Unfallverletzungen",
  "Kosmetische Operationen nach Unfällen",
  "Rooming-in für Kinder im Krankenhaus",
  "Unfallbedingte Mehrkosten",
  "Schmerzensgeld bei schweren Unfällen",
  "Besondere Leistungen für Sport und Freizeit"
];

const keywords = [
  "Unfallversicherung",
  "Unfallschutz",
  "Invaliditätsversicherung",
  "Unfallversicherung Familie",
  "Unfallschutz 24 Stunden"
];

export default function UnfallversicherungPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Unfallversicherung",
    "description": "Private Unfallversicherung mit 24/7 Schutz vor Unfallfolgen - weltweit und rund um die Uhr.",
    "brand": { "@type": "Brand", "name": "versicherungsofort.de" }
  };

  return (
    <>
      <SEOHead
        title="Unfallversicherung Vergleich 2025 - 24/7 Schutz online | versicherungsofort.de"
        description="Unfallversicherung vergleichen: ✓ 24/7 Schutz ✓ Hohe Leistungen ✓ Günstige Beiträge. Jetzt Unfallschutz vergleichen & Familie absichern!"
        keywords="Unfallversicherung, Unfallschutz, Invaliditätsversicherung, private Unfallversicherung, 24 Stunden Unfallschutz"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InsuranceCategory
          title="Unfallversicherung - 24/7 Schutz vor Unfallfolgen"
          description="Schützen Sie sich und Ihre Familie vor den finanziellen Folgen von Unfällen. Weltweiter Schutz rund um die Uhr - in Beruf, Freizeit und Haushalt."
          benefits={benefits}
          features={features}
          keywords={keywords}
          iframeId="tcpp-iframe-unf"
          scriptSrc="https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-unf/unf-iframe.js"
        />

        {/* SEO Content */}
        <div className="mt-16 max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Unfallversicherung - Warum sie wichtig ist
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Die <strong>gesetzliche Unfallversicherung</strong> greift nur bei Arbeits- und Wegeunfällen. 
            Die meisten Unfälle passieren jedoch in der Freizeit. Eine private Unfallversicherung 
            schließt diese Lücke.
          </p>

          <div className="bg-orange-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-orange-800 mb-2">
              📊 Unfallstatistik
            </h3>
            <p className="text-orange-700 text-sm">
              Über 70% aller Unfälle ereignen sich in der Freizeit oder zu Hause - 
              dort wo die gesetzliche Unfallversicherung nicht greift.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}