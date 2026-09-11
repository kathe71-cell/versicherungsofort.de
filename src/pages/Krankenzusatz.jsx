import React from 'react';
import InsuranceCategory from '../components/InsuranceCategory';
import SEOHead from '@/components/SEOHead';

const benefits = [
  {
    title: "Bessere Leistungen",
    description: "Ergänzung zur Gesetzlichen"
  },
  {
    title: "Günstige Beiträge",
    description: "Schon ab wenigen Euro"
  },
  {
    title: "Sofortschutz",
    description: "Oft ohne Wartezeiten"
  }
];

const features = [
  "Zahnzusatzversicherung für besseren Zahnersatz",
  "Krankenhauszusatzversicherung für Chefarzt und Einzelzimmer",
  "Heilpraktiker und alternative Behandlungen",
  "Auslandskrankenversicherung für Reisen",
  "Sehhilfen und Brillenversicherung",
  "Vorsorgeuntersuchungen über gesetzlichen Standard",
  "Kieferorthopädie für Kinder und Erwachsene",
  "Stationäre Zusatzversicherung",
  "Ambulante Zusatzversicherung",
  "Krankenhaustagegeld"
];

const keywords = [
  "Krankenzusatzversicherung",
  "Zahnzusatzversicherung",
  "Krankenhauszusatzversicherung",
  "Private Zusatzversicherung",
  "Gesetzlich versichert ergänzen"
];

export default function KrankenzusatzPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Krankenzusatzversicherung",
    "description": "Krankenzusatzversicherung zur Ergänzung der GKV - Zahnzusatz, Krankenhauszusatz und mehr.",
    "brand": { "@type": "Brand", "name": "versicherungsofort.de" }
  };

  return (
    <>
      <SEOHead
        title="Krankenzusatzversicherung Vergleich 2025 - Zahnzusatz & mehr | versicherungsofort.de"
        description="Krankenzusatzversicherung vergleichen: ✓ Zahnzusatz ✓ Krankenhauszusatz ✓ Bessere Leistungen. Jetzt GKV ergänzen!"
        keywords="Krankenzusatzversicherung, Zahnzusatzversicherung, Krankenhauszusatzversicherung, Private Zusatzversicherung"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InsuranceCategory
          title="Krankenzusatzversicherung - Gesetzlichen Schutz sinnvoll ergänzen"
          description="Schließen Sie die Lücken der gesetzlichen Krankenversicherung. Von Zahnersatz bis Chefarztbehandlung - für optimale Gesundheitsvorsorge."
          benefits={benefits}
          features={features}
          keywords={keywords}
          iframeId="tcpp-iframe-pkv-z"
          scriptSrc="https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-pkv-z/pkv-z-iframe.js"
        />

        {/* SEO Content */}
        <div className="mt-16 max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Krankenzusatzversicherung - Warum sie sinnvoll ist
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Die <strong>gesetzliche Krankenversicherung</strong> bietet nur eine Grundversorgung. 
            Mit einer Krankenzusatzversicherung können Sie diese sinnvoll ergänzen und 
            von besseren Leistungen profitieren.
          </p>

          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              💰 Kosteneinsparung
            </h3>
            <p className="text-green-700 text-sm">
              Eine Zahnzusatzversicherung kann Ihnen bei größeren Behandlungen 
              mehrere tausend Euro sparen.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}