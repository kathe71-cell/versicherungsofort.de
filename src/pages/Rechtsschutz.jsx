import React from 'react';
import InsuranceCategory from '../components/InsuranceCategory';
import SEOHead from '@/components/SEOHead';

const benefits = [
  {
    title: "Recht bekommen",
    description: "Setzen Sie Ihr Recht durch, ohne Kostenrisiko"
  },
  {
    title: "Umfassender Schutz",
    description: "Privat, Beruf, Verkehr und Wohnen"
  },
  {
    title: "Kostenübernahme",
    description: "Deckt Anwalts-, Gerichts- und Gutachterkosten"
  }
];

const features = [
  "Übernahme von Anwalts-, Gerichts- und Sachverständigenkosten",
  "Verschiedene Bausteine: Privat, Beruf, Verkehr, Wohnen/Immobilien",
  "Freie Anwaltswahl",
  "Mediation und außergerichtliche Konfliktlösung",
  "Telefonische Rechtsberatung inklusive",
  "Strafkautionen im Ausland",
  "Schutz bei Vertrags- und Sachenrecht",
  "Arbeitsrechtsschutz (z.B. bei Kündigung)",
  "Verkehrsrechtsschutz bei Unfällen und Bußgeldern",
  "Mietrechtsschutz bei Streitigkeiten mit dem Vermieter"
];

const keywords = [
  "Rechtsschutzversicherung",
  "Rechtsschutz Vergleich",
  "Anwaltskosten Versicherung",
  "Privatrechtsschutz",
  "Verkehrsrechtsschutz"
];

export default function RechtsschutzPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Rechtsschutzversicherung",
    "description": "Rechtsschutzversicherung mit Kostenübernahme für Anwalt und Gericht - umfassender Schutz in allen Lebenslagen.",
    "brand": { "@type": "Brand", "name": "versicherungsofort.de" }
  };

  return (
    <>
      <SEOHead
        title="Rechtsschutzversicherung Vergleich 2025 - Anwaltskosten absichern | versicherungsofort.de"
        description="Rechtsschutzversicherung vergleichen: ✓ Anwaltskosten ✓ Gerichtskosten ✓ Freie Anwaltswahl. Jetzt Rechtsschutz vergleichen!"
        keywords="Rechtsschutzversicherung, Rechtsschutz Vergleich, Anwaltskosten Versicherung, Privatrechtsschutz, Verkehrsrechtsschutz"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InsuranceCategory
          title="Rechtsschutzversicherung - Ihr gutes Recht ist teuer"
          description="Sichern Sie sich finanzielle Waffengleichheit bei Rechtsstreitigkeiten. Die Rechtsschutzversicherung übernimmt die Kosten für Anwalt und Gericht."
          benefits={benefits}
          features={features}
          keywords={keywords}
          iframeId="tcpp-iframe-rs"
          scriptSrc="https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-rs/rs-iframe.js"
        />
        <div className="mt-16 max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Wann ist eine Rechtsschutzversicherung sinnvoll?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ein Rechtsstreit kann schnell sehr teuer werden. Viele verzichten aus Angst vor den Kosten darauf, ihr Recht durchzusetzen. Eine <strong>Rechtsschutzversicherung</strong> schützt Sie vor diesem finanziellen Risiko und ermöglicht es Ihnen, für Ihr Recht zu kämpfen.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}