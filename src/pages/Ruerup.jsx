import React from 'react';
import InsuranceCategory from '../components/InsuranceCategory';
import SEOHead from '@/components/SEOHead';

const benefits = [
  {
    title: "Hohe Steuervorteile",
    description: "Beiträge als Sonderausgaben absetzen"
  },
  {
    title: "Flexible Beiträge",
    description: "Passen Sie die Beiträge an Ihr Einkommen an"
  },
  {
    title: "Lebenslange Rente",
    description: "Garantierte Rentenzahlung im Alter"
  }
];

const features = [
  "Hohe steuerliche Absetzbarkeit der Beiträge",
  "Besonders für Selbstständige und Besserverdiener geeignet",
  "Garantierte lebenslange Rentenzahlung",
  "Pfändungs- und Hartz-IV-sicher in der Ansparphase",
  "Flexible Beitragszahlungen und Zuzahlungen möglich",
  "Kombination mit Berufsunfähigkeitsschutz möglich",
  "Keine Kapitalisierung, reiner Rentenbezug",
  "Hinterbliebenenversorgung für Ehepartner und Kinder",
  "Klassische und fondsgebundene Varianten",
  "Anbieterwechsel während der Laufzeit möglich"
];

const keywords = [
  "Rürup-Rente",
  "Basisrente",
  "Altersvorsorge Selbstständige",
  "Rürup Steuervorteil",
  "Rürup Vergleich"
];

export default function RürupPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Rürup-Rente",
    "description": "Rürup-Rente (Basisrente) mit hohen Steuervorteilen - ideal für Selbstständige und Besserverdiener.",
    "brand": { "@type": "Brand", "name": "versicherungsofort.de" }
  };

  return (
    <>
      <SEOHead
        title="Rürup-Rente Vergleich 2025 - Basisrente mit Steuervorteil | versicherungsofort.de"
        description="Rürup-Rente vergleichen: ✓ Hohe Steuervorteile ✓ Flexible Beiträge ✓ Lebenslange Rente. Jetzt Basisrente vergleichen & Steuern sparen!"
        keywords="Rürup-Rente, Basisrente, Rürup Steuervorteil, Altersvorsorge Selbstständige, Rürup Vergleich"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InsuranceCategory
          title="Rürup-Rente (Basisrente) - Altersvorsorge mit Steuervorteil"
          description="Profitieren Sie als Selbstständiger oder Angestellter von hohen Steuervorteilen. Die Rürup-Rente ist die ideale Basis für Ihre private Altersvorsorge."
          benefits={benefits}
          features={features}
          keywords={keywords}
          iframeId="tcpp-iframe-r-rente"
          scriptSrc="https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-r-rente/r-rente-iframe.js"
        />
        <div className="mt-16 max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Für wen lohnt sich die Rürup-Rente?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Die <strong>Rürup-Rente</strong>, auch Basisrente genannt, richtet sich vor allem an Selbstständige, Freiberufler und Angestellte mit hoher Steuerlast. Durch die steuerliche Absetzbarkeit der Beiträge wird der Staat zu Ihrem Sparpartner.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}