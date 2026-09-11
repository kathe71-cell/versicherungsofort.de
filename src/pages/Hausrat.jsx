import React from 'react';
import InsuranceCategory from '../components/InsuranceCategory';
import SEOHead from '@/components/SEOHead';

const benefits = [
  {
    title: "Schutz für Ihr Eigentum",
    description: "Sichert Möbel, Elektronik & Wertsachen ab"
  },
  {
    title: "Günstiger Basisschutz",
    description: "Umfassende Absicherung für wenige Euro"
  },
  {
    title: "Elementarschäden",
    description: "Schutz bei Sturm, Feuer, Wasser & Einbruch"
  }
];

const features = [
  "Schutz bei Feuer, Leitungswasser, Sturm und Hagel",
  "Absicherung bei Einbruchdiebstahl, Raub und Vandalismus",
  "Fahrraddiebstahlschutz optional einschließbar",
  "Überspannungsschäden durch Blitzschlag",
  "Außenversicherungsschutz (z.B. im Urlaub)",
  "Wertsachen und Bargeld mitversichert",
  "Unterversicherungsverzicht möglich",
  "Elementarschadenversicherung optional",
  "Glasbruchversicherung als Zusatzbaustein",
  "Kosten für Aufräumarbeiten und Hotelunterbringung"
];

const keywords = [
  "Hausratversicherung",
  "Hausrat Vergleich",
  "Versicherung Wohnung",
  "Fahrraddiebstahl Versicherung",
  "Einbruchschutz"
];

export default function HausratPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Hausratversicherung",
    "description": "Hausratversicherung mit umfassendem Schutz für Ihr Hab und Gut - Feuer, Wasser, Einbruch und mehr.",
    "brand": { "@type": "Brand", "name": "versicherungsofort.de" }
  };

  return (
    <>
      <SEOHead
        title="Hausratversicherung Vergleich 2025 - Günstig Hausrat versichern | versicherungsofort.de"
        description="Hausratversicherung vergleichen: ✓ Schutz für Ihr Eigentum ✓ Elementarschäden ✓ Fahrraddiebstahl. Jetzt Hausrat günstig versichern!"
        keywords="Hausratversicherung, Hausrat Vergleich, Versicherung Wohnung, Fahrraddiebstahl Versicherung, Einbruchschutz"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InsuranceCategory
          title="Hausratversicherung - Ihr Zuhause rundum geschützt"
          description="Schützen Sie Ihr Hab und Gut vor den finanziellen Folgen von Feuer, Wasser, Sturm oder Einbruch. Die Hausratversicherung ist ein unverzichtbarer Basisschutz für jeden Haushalt."
          benefits={benefits}
          features={features}
          keywords={keywords}
          iframeId="tcpp-iframe-hr"
          scriptSrc="https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-hr/hr-iframe.js"
        />
        <div className="mt-16 max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Was ist in der Hausratversicherung versichert?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Die <strong>Hausratversicherung</strong> versichert den gesamten beweglichen Inhalt Ihrer Wohnung oder Ihres Hauses zum Neuwert. Dazu gehören Möbel, Kleidung, Elektrogeräte und Wertsachen. Sie ist die perfekte Ergänzung zur Privathaftpflicht.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}