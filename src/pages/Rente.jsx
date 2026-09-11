import React from 'react';
import InsuranceCategory from '../components/InsuranceCategory';
import SEOHead from '@/components/SEOHead';

const benefits = [
  {
    title: "Lebenslange Rente",
    description: "Garantierte Zahlungen bis zum Lebensende"
  },
  {
    title: "Steuervorteile",
    description: "Beiträge steuerlich absetzbar"
  },
  {
    title: "Flexible Auszahlung",
    description: "Rente oder Einmalzahlung wählbar"
  }
];

const features = [
  "Garantierte lebenslange Rentenzahlung",
  "Beiträge als Sonderausgaben steuerlich absetzbar",
  "Flexible Ein- und Auszahlungsmöglichkeiten",
  "Überschussbeteiligung möglich",
  "Hinterbliebenenabsicherung integrierbar",
  "Berufsunfähigkeitsschutz kombinierbar",
  "Sofortrente oder aufgeschobene Rente",
  "Beitragsgarantie und Kapitalschutz",
  "Individuelle Rentenhöhe planbar",
  "Rentengarantiezeit wählbar"
];

const keywords = [
  "Private Rentenversicherung",
  "Altersvorsorge Vergleich",
  "Rente Steuervorteile",
  "Rentenversicherung günstig",
  "Altersrente privat"
];

export default function RentePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Private Rentenversicherung",
    "description": "Private Rentenversicherung mit lebenslanger Rente und Steuervorteilen für eine sichere Altersvorsorge.",
    "brand": { "@type": "Brand", "name": "versicherungsofort.de" }
  };

  return (
    <>
      <SEOHead
        title="Private Rentenversicherung Vergleich 2025 - Altersvorsorge sichern | versicherungsofort.de"
        description="Private Rentenversicherung vergleichen: ✓ Lebenslange Rente ✓ Steuervorteile ✓ Flexible Auszahlung. Jetzt Altersvorsorge sichern & vergleichen!"
        keywords="Private Rentenversicherung, Altersvorsorge, Rentenversicherung Vergleich, Rente Steuervorteile"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InsuranceCategory
          title="Private Rentenversicherung - Altersvorsorge sichern"
          description="Sichern Sie sich eine lebenslange Zusatzrente. Mit steuerlichen Vorteilen und garantierter Auszahlung - für einen sorgenfreien Ruhestand."
          benefits={benefits}
          features={features}
          keywords={keywords}
          iframeId="tcpp-iframe-rente"
          scriptSrc="https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-rente/rente-iframe.js"
        />

        {/* SEO Content */}
        <div className="mt-16 max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Private Rentenversicherung - Die dritte Säule der Altersvorsorge
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Die <strong>private Rentenversicherung</strong> bildet neben der gesetzlichen Rente 
            und der betrieblichen Altersvorsorge die dritte wichtige Säule der Altersvorsorge. 
            Sie bietet planbare, lebenslange Rentenzahlungen.
          </p>

          <div className="bg-indigo-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-indigo-800 mb-2">
              💡 Warum private Altersvorsorge wichtig ist
            </h3>
            <p className="text-indigo-700 text-sm">
              Die gesetzliche Rente allein reicht meist nicht aus, um den gewohnten Lebensstandard 
              im Alter zu halten. Eine private Rentenversicherung schließt diese Lücke.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}