import React from 'react';
import InsuranceCategory from '../components/InsuranceCategory';
import SEOHead from '@/components/SEOHead';

const benefits = [
  {
    title: "Schutz für Vermieter",
    description: "Absicherung bei Schäden auf Ihrem Grundstück"
  },
  {
    title: "Verkehrssicherungspflicht",
    description: "Deckt Haftungsrisiken (z.B. bei Glatteis)"
  },
  {
    title: "Umfassende Deckung",
    description: "Schützt vor hohen Schadensersatzansprüchen"
  }
];

const features = [
  "Schutz für Besitzer von vermieteten Immobilien und unbebauten Grundstücken",
  "Abdeckung der gesetzlichen Haftpflicht aus Haus- und Grundbesitz",
  "Verletzung der Verkehrssicherungspflicht (z.B. Streupflicht)",
  "Schäden durch herabfallende Teile (Dachziegel, Äste)",
  "Schutz bei Schäden auf dem Grundstück und den Gehwegen",
  "Absicherung von Öltanks",
  "Forderungsausfalldeckung",
  "Abwehr unberechtigter Ansprüche",
  "Hohe Deckungssummen für Personen- und Sachschäden",
  "Günstige Beiträge für umfassenden Schutz"
];

const keywords = [
  "Grundbesitzerhaftpflicht",
  "Haus- und Grundbesitzerhaftpflicht",
  "Haftpflicht für Vermieter",
  "Verkehrssicherungspflicht Versicherung",
  "Versicherung unbebautes Grundstück"
];

export default function GrundbesitzerhaftpflichtPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Haus- und Grundbesitzerhaftpflicht",
    "description": "Grundbesitzerhaftpflicht für Vermieter und Eigentümer - Schutz vor Haftungsrisiken.",
    "brand": { "@type": "Brand", "name": "versicherungsofort.de" }
  };

  return (
    <>
      <SEOHead
        title="Grundbesitzerhaftpflicht Vergleich 2025 - Vermieter absichern | versicherungsofort.de"
        description="Grundbesitzerhaftpflicht vergleichen: ✓ Für Vermieter ✓ Verkehrssicherungspflicht ✓ Umfassende Deckung. Jetzt Haus- und Grundbesitzerhaftpflicht vergleichen!"
        keywords="Grundbesitzerhaftpflicht, Haus- und Grundbesitzerhaftpflicht, Haftpflicht Vermieter, Verkehrssicherungspflicht"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InsuranceCategory
          title="Haus- und Grundbesitzerhaftpflicht - Schutz für Eigentümer"
          description="Als Besitzer von vermieteten Immobilien oder unbebauten Grundstücken haften Sie für Schäden, die auf Ihrem Eigentum entstehen. Sichern Sie dieses Risiko ab."
          benefits={benefits}
          features={features}
          keywords={keywords}
          iframeId="tcpp-iframe-hug"
          scriptSrc="https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-hug/hug-iframe.js"
        />
        <div className="mt-16 max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Wer braucht eine Grundbesitzerhaftpflicht?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Die <strong>Haus- und Grundbesitzerhaftpflicht</strong> ist für jeden Eigentümer einer Immobilie, die er nicht ausschließlich selbst bewohnt, unerlässlich. Dies betrifft Vermieter von Ein- oder Mehrfamilienhäusern, Eigentümergemeinschaften und Besitzer von unbebauten Grundstücken.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}