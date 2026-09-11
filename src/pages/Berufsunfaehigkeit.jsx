import React from 'react';
import InsuranceCategory from '../components/InsuranceCategory';
import SEOHead from '@/components/SEOHead';

const benefits = [
  {
    title: "Existenz absichern",
    description: "Bis zu 80% des Bruttoeinkommens"
  },
  {
    title: "Sofortschutz",
    description: "Versicherung ab dem ersten Tag"
  },
  {
    title: "Testsieger-Tarife",
    description: "Beste Bedingungen & Leistungen"
  }
];

const features = [
  "Monatliche Rente bis zu 3.000€ steuer-/sozialabgabenfrei",
  "Schutz vor finanzieller Not bei Berufsunfähigkeit", 
  "Verzicht auf abstrakte Verweisung möglich",
  "Rückwirkende Leistung ab Eintritt der BU",
  "Weltweiter Versicherungsschutz inklusive",
  "Beitragsbefreiung bei Berufsunfähigkeit",
  "Nachversicherungsgarantie ohne Gesundheitsprüfung",
  "Sofortige Kapitalabfindung wählbar",
  "Individuelle Berufsgruppen-Einstufung", 
  "24/7 telefonische Beratungshotline"
];

const keywords = [
  "Berufsunfähigkeitsversicherung sofort",
  "BU Versicherung online abschließen",
  "BU Vergleich Testsieger",
  "Berufsunfähigkeit absichern",
  "BU Rente beantragen"
];

export default function BerufsunfähigkeitPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Berufsunfähigkeitsversicherung",
    "description": "BU-Versicherung mit bis zu 3.000€ monatlicher Rente zum Schutz vor Berufsunfähigkeit.",
    "brand": { "@type": "Brand", "name": "versicherungsofort.de" }
  };

  return (
    <>
      <SEOHead
        title="Berufsunfähigkeitsversicherung Vergleich 2025 - BU online abschließen | versicherungsofort.de"
        description="BU-Versicherung vergleichen: ✓ Bis 3.000€ Rente ✓ Existenz absichern ✓ Testsieger-Tarife. Jetzt Berufsunfähigkeitsversicherung vergleichen!"
        keywords="Berufsunfähigkeitsversicherung, BU Versicherung, BU Vergleich, Berufsunfähigkeit absichern, BU online"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InsuranceCategory
          title="Berufsunfähigkeitsversicherung - Ihre Existenz absichern"
          description="Schützen Sie sich vor den finanziellen Folgen einer Berufsunfähigkeit. Mit bis zu 3.000€ monatlicher BU-Rente bleiben Sie auch bei Krankheit oder Unfall finanziell abgesichert."
          benefits={benefits}
          features={features}
          keywords={keywords}
          iframeId="tcpp-iframe-buv"
          scriptSrc="https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-buv/buv-iframe.js"
        />

        {/* SEO Content */}
        <div className="mt-16 max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Warum ist eine Berufsunfähigkeitsversicherung so wichtig?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Statistisch wird jeder 4. Arbeitnehmer vor dem Rentenalter berufsunfähig. 
            Die gesetzliche Absicherung reicht oft nicht aus - die <strong>Berufsunfähigkeitsversicherung</strong> 
            schützt Ihre Existenz und den gewohnten Lebensstandard Ihrer Familie.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">
              ⚠️ Wichtiger Hinweis
            </h3>
            <p className="text-yellow-700 text-sm">
              Je jünger und gesünder Sie sind, desto günstiger ist der Beitrag. 
              Eine frühzeitige Absicherung spart oft mehrere hundert Euro pro Jahr.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}