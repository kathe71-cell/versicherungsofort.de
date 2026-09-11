import React from 'react';
import InsuranceCategory from '../components/InsuranceCategory';
import SEOHead from '@/components/SEOHead';

const benefits = [
  {
    title: "Beste medizinische Versorgung",
    description: "Deckt hohe Tierarztkosten ab"
  },
  {
    title: "Operationen & Behandlungen",
    description: "Umfassender Schutz bei Krankheit und Unfall"
  },
  {
    title: "Sorgenfrei zum Tierarzt",
    description: "Finanzielle Sicherheit für Ihren Vierbeiner"
  }
];

const features = [
  "Übernahme von Tierarztkosten für Operationen und Behandlungen",
  "Freie Tierarzt- und Klinikwahl",
  "Vorsorgeleistungen wie Impfungen und Wurmkuren",
  "Medikamente und Verbandsmaterial inklusive",
  "Diagnostik (Röntgen, CT, MRT) abgedeckt",
  "Stationäre und ambulante Behandlungen",
  "Physiotherapie und alternative Heilmethoden",
  "Weltweiter Schutz auf Reisen",
  "Kurze Wartezeiten",
  "Verschiedene Leistungspakete wählbar"
];

const keywords = [
  "Hundekrankenversicherung",
  "Tierkrankenversicherung",
  "Hunde-OP Versicherung",
  "Tierarztkosten Versicherung",
  "Versicherung für Hunde"
];

export default function HundekrankenversicherungPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Hundekrankenversicherung",
    "description": "Hundekrankenversicherung mit umfassendem Schutz für Ihren Vierbeiner - Tierarztkosten absichern.",
    "brand": { "@type": "Brand", "name": "versicherungsofort.de" }
  };

  return (
    <>
      <SEOHead
        title="Hundekrankenversicherung Vergleich 2025 - Tierarztkosten absichern | versicherungsofort.de"
        description="Hundekrankenversicherung vergleichen: ✓ Tierarztkosten ✓ OP-Schutz ✓ Beste Behandlung. Jetzt Hundekrankenversicherung vergleichen!"
        keywords="Hundekrankenversicherung, Tierkrankenversicherung, Hunde-OP Versicherung, Tierarztkosten Versicherung"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InsuranceCategory
          title="Hundekrankenversicherung - Der beste Schutz für Ihren Hund"
          description="Sichern Sie Ihrem besten Freund die bestmögliche medizinische Versorgung. Die Hundekrankenversicherung schützt Sie vor hohen und unerwarteten Tierarztkosten."
          benefits={benefits}
          features={features}
          keywords={keywords}
          iframeId="tcpp-iframe-tkv"
          scriptSrc="https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-tkv/tkv-iframe.js"
        />
        <div className="mt-16 max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Lohnt sich eine Hundekrankenversicherung?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Eine Operation oder eine chronische Krankheit kann schnell mehrere tausend Euro kosten. Eine <strong>Hundekrankenversicherung</strong> nimmt Ihnen die finanzielle Sorge, sodass Sie sich voll auf die Genesung Ihres Vierbeiners konzentrieren können.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}