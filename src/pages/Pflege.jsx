import React from 'react';
import InsuranceCategory from '../components/InsuranceCategory';
import SEOHead from '@/components/SEOHead';

const benefits = [
  {
    title: "Finanzielle Lücke schließen",
    description: "Schutz vor hohen Pflegekosten im Alter"
  },
  {
    title: "Vermögen schützen",
    description: "Verhindern Sie, dass Ihr Erspartes aufgebraucht wird"
  },
  {
    title: "Selbstbestimmt leben",
    description: "Sichern Sie sich die Pflege, die Sie sich wünschen"
  }
];

const features = [
  "Zuzahlungen zur gesetzlichen Pflegeversicherung",
  "Schutz des eigenen Vermögens und des Vermögens der Kinder",
  "Freie Wahl des Pflegeheims oder Pflegedienstes",
  "Pflegetagegeld zur freien Verfügung",
  "Leistungen bereits ab Pflegegrad 1",
  "Weltweiter Versicherungsschutz",
  "Beitragsbefreiung im Leistungsfall",
  "Dynamische Anpassung zum Inflationsausgleich",
  "Einmalige Kapitalleistung bei Eintritt der Pflegebedürftigkeit",
  "Staatliche Förderung möglich (Pflege-Bahr)"
];

const keywords = [
  "Pflegezusatzversicherung",
  "Pflegeversicherung",
  "Pflegekosten absichern",
  "Pflegetagegeld",
  "Pflege-Bahr"
];

export default function PflegePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Pflegezusatzversicherung",
    "description": "Pflegezusatzversicherung zum Schutz vor hohen Pflegekosten - Vermögen schützen und selbstbestimmt leben.",
    "brand": { "@type": "Brand", "name": "versicherungsofort.de" }
  };

  return (
    <>
      <SEOHead
        title="Pflegezusatzversicherung Vergleich 2025 - Pflegekosten absichern | versicherungsofort.de"
        description="Pflegezusatzversicherung vergleichen: ✓ Pflegekosten absichern ✓ Vermögen schützen ✓ Pflege-Bahr. Jetzt Pflegezusatzversicherung vergleichen!"
        keywords="Pflegezusatzversicherung, Pflegeversicherung, Pflegekosten absichern, Pflegetagegeld, Pflege-Bahr"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InsuranceCategory
          title="Pflegezusatzversicherung - Finanzielle Sicherheit im Pflegefall"
          description="Schützen Sie Ihr Vermögen und sichern Sie sich eine selbstbestimmte Pflege. Die Pflegezusatzversicherung schließt die Lücke der gesetzlichen Leistungen."
          benefits={benefits}
          features={features}
          keywords={keywords}
          iframeId="tcpp-iframe-prv"
          scriptSrc="https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-prv/prv-iframe.js"
        />
        <div className="mt-16 max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Warum eine Pflegezusatzversicherung wichtig ist</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Die gesetzliche Pflegeversicherung deckt nur einen Teil der tatsächlichen Kosten. Ohne private Vorsorge kann ein Pflegefall schnell zu einer enormen finanziellen Belastung für Sie und Ihre Angehörigen werden. Die <strong>Pflegezusatzversicherung</strong> schützt davor.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}