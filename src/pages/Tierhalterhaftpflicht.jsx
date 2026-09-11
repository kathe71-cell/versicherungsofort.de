import React from 'react';
import InsuranceCategory from '../components/InsuranceCategory';
import SEOHead from '@/components/SEOHead';

const benefits = [
  {
    title: "Gesetzlich vorgeschrieben",
    description: "In vielen Bundesländern Pflicht für Hundehalter"
  },
  {
    title: "Millionenschutz",
    description: "Schützt vor hohen Schadensersatzforderungen"
  },
  {
    title: "Günstiger Schutz",
    description: "Umfassender Schutz für wenige Euro im Monat"
  }
];

const features = [
  "Absicherung bei Personen-, Sach- und Vermögensschäden",
  "Hohe Deckungssummen bis 50 Mio. Euro",
  "Mietsachschäden an Gebäuden und Wohnräumen",
  "Schutz bei Auslandsaufenthalten",
  "Fremdhüterrisiko mitversichert (z.B. Hundesitter)",
  "Deckschäden und ungewollter Deckakt",
  "Teilnahme an Hundeschule und Turnieren",
  "Verzicht auf Leinen- und Maulkorbzwang",
  "Welpen sind in den ersten Monaten mitversichert",
  "Forderungsausfalldeckung"
];

const keywords = [
  "Tierhalterhaftpflicht",
  "Hundehaftpflicht",
  "Pferdehaftpflicht",
  "Tierhalterhaftpflicht Vergleich",
  "Haftpflicht für Tiere"
];

export default function TierhalterhaftpflichtPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Tierhalterhaftpflicht",
    "description": "Tierhalterhaftpflichtversicherung für Hunde und Pferde - unverzichtbarer Schutz für Tierbesitzer.",
    "brand": { "@type": "Brand", "name": "versicherungsofort.de" }
  };

  return (
    <>
      <SEOHead
        title="Tierhalterhaftpflicht Vergleich 2025 - Hunde & Pferde versichern | versicherungsofort.de"
        description="Tierhalterhaftpflicht vergleichen: ✓ Millionenschutz ✓ Für Hunde & Pferde ✓ Günstiger Schutz. Jetzt Tierhalterhaftpflicht vergleichen!"
        keywords="Tierhalterhaftpflicht, Hundehaftpflicht, Pferdehaftpflicht, Tierhalterhaftpflicht Vergleich"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InsuranceCategory
          title="Tierhalterhaftpflicht - Unverzichtbarer Schutz für Tierbesitzer"
          description="Als Halter von Hunden oder Pferden haften Sie für alle Schäden, die Ihr Tier verursacht. Die Tierhalterhaftpflicht schützt Sie vor finanziellen Risiken."
          benefits={benefits}
          features={features}
          keywords={keywords}
          iframeId="tcpp-iframe-tie"
          scriptSrc="https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-tie/tie-iframe.js"
        />
        <div className="mt-16 max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Warum ist die Tierhalterhaftpflicht so wichtig?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ein Hund reißt sich los und verursacht einen Verkehrsunfall. Ein Pferd tritt aus und verletzt eine Person. Solche Schäden können schnell existenzbedrohende Höhen erreichen. Die <strong>Tierhalterhaftpflicht</strong> ist daher für Hunde- und Pferdebesitzer essenziell.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}