import React from 'react';
import InsuranceCategory from '../components/InsuranceCategory';
import SEOHead from '@/components/SEOHead';

const benefits = [
  {
    title: "Beihilfeergänzung",
    description: "Perfekte Ergänzung zur Beihilfe"
  },
  {
    title: "Günstige Beiträge",
    description: "Spezielle Beamtentarife"
  },
  {
    title: "100% Kostendeckung",
    description: "Zusammen mit Beihilfe"
  }
];

const features = [
  "Spezielle PKV-Tarife für Beamte und Beamtenanwärter",
  "Perfekte Ergänzung zur staatlichen Beihilfe",
  "Günstige Beiträge durch Beihilfeanteil",
  "100% Kostendeckung in Kombination mit Beihilfe",
  "Chefarztbehandlung und Einzelzimmer",
  "Freie Krankenhaus- und Arztwahl",
  "Keine Wartezeiten bei Fachärzten",
  "Weltweiter Versicherungsschutz",
  "Zahnersatz bis zu 100% erstattet",
  "Familie mitversicherbar"
];

const keywords = [
  "PKV Beamte",
  "Beihilfeergänzung",
  "Private Krankenversicherung Beamte",
  "Beamten PKV Vergleich",
  "PKV Beamtenanwärter"
];

export default function PKVBeamtePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "PKV für Beamte",
    "description": "Private Krankenversicherung für Beamte - perfekte Ergänzung zur Beihilfe mit günstigen Beiträgen.",
    "brand": { "@type": "Brand", "name": "versicherungsofort.de" }
  };

  return (
    <>
      <SEOHead
        title="PKV für Beamte - Beihilfeergänzung Vergleich 2025 | versicherungsofort.de"
        description="PKV für Beamte vergleichen: ✓ Beihilfeergänzung ✓ Günstige Beiträge ✓ 100% Kostendeckung. Jetzt Beamten-PKV vergleichen!"
        keywords="PKV Beamte, Beihilfeergänzung, Private Krankenversicherung Beamte, Beamten PKV Vergleich"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InsuranceCategory
          title="PKV für Beamte - Optimale Ergänzung zur Beihilfe"
          description="Als Beamter profitieren Sie von günstigen PKV-Tarifen, die perfekt auf die Beihilfe abgestimmt sind. 100% Kostendeckung bei optimalen Leistungen."
          benefits={benefits}
          features={features}
          keywords={keywords}
          iframeId="tcpp-iframe-pkv-beamte"
          scriptSrc="https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-pkv-beamte/pkv-beamte-iframe.js"
        />

        {/* SEO Content */}
        <div className="mt-16 max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            PKV für Beamte - Warum sie sich lohnt
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Als Beamter erhalten Sie staatliche <strong>Beihilfe</strong>, die einen Großteil Ihrer 
            Krankheitskosten übernimmt. Die private Krankenversicherung ergänzt diese Beihilfe 
            optimal und sorgt für 100%ige Kostendeckung.
          </p>

          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              ✓ Vorteile für Beamte
            </h3>
            <p className="text-green-700 text-sm">
              Durch die staatliche Beihilfe zahlen Sie deutlich weniger für Ihre PKV 
              als andere Personengruppen - bei vollem Leistungsumfang.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}