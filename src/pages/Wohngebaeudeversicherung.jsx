import React from 'react';
import InsuranceCategory from '../components/InsuranceCategory';
import SEOHead from '@/components/SEOHead';

const benefits = [
  {
    title: "Schutz vor Elementarschäden",
    description: "Absicherung bei Starkregen, Überschwemmung & Schneedruck"
  },
  {
    title: "Gleitender Neuwert",
    description: "Voller Wiederaufbau zum aktuellen Bauwert ohne Abzug"
  },
  {
    title: "Rundum-Gebäudeschutz",
    description: "Feuer, Leitungswasser, Sturm & Hagel inklusive"
  }
];

const features = [
  "Schutz bei Brand, Blitzschlag, Explosion und Implosion",
  "Absicherung von Leitungswasserschäden und Frostschäden an Rohren",
  "Sturmschäden ab Windstärke 8 sowie Hagelschlag",
  "Optionaler Elementarschadenschutz (Starkregen, Überschwemmung, Rückstau)",
  "Mitversicherung von Nebengebäuden (Garagen, Gartenhäuser, Carports)",
  "Photovoltaik- und Wärmepumpenanlagen mitversicherbar",
  "Aufräumungs-, Abbruch- und Dekontaminationskosten abgedeckt",
  "Gleitende Neuwertversicherung verhindert Unterversicherung",
  "Hotelkosten bei Unbewohnbarkeit des Gebäudes inklusive",
  "Schneller Tarifvergleich und sofortige Beitragsberechnung"
];

const keywords = [
  "Wohngebäudeversicherung",
  "Wohngebäudeversicherung Vergleich",
  "Gebäudeversicherung günstig",
  "Elementarschutz Gebäude",
  "Hausversicherung Eigentümer"
];

export default function WohngebaeudeversicherungPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Wohngebäudeversicherung",
    "description": "Wohngebäudeversicherung im unabhängigen Vergleich - Optimaler Schutz für Ihre Immobilie bei Feuer, Sturm, Leitungswasser und Elementarschäden.",
    "brand": { "@type": "Brand", "name": "versicherungsofort.de" }
  };

  return (
    <>
      <SEOHead
        title="Wohngebäudeversicherung Vergleich 2025 - Haus optimal schützen | versicherungsofort.de"
        description="Wohngebäudeversicherung vergleichen: ✓ Schutz bei Feuer, Sturm, Hagel & Leitungswasser ✓ Elementarschutz ✓ Gleitender Neuwert. Jetzt vergleichen & sparen!"
        keywords="Wohngebäudeversicherung, Wohngebäudeversicherung Vergleich, Gebäudeversicherung, Elementarschaden, Hausversicherung"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InsuranceCategory
            title="Wohngebäudeversicherung - Ihre Immobilie optimal schützen"
            description="Das eigene Zuhause ist oft die größte Investition des Lebens. Eine Wohngebäudeversicherung schützt Eigentümer vor existenzbedrohenden Kosten durch Feuer, Unwetter, Rohrbruch und Naturgefahren."
            benefits={benefits}
            features={features}
            keywords={keywords}
            iframeId="tcpp-iframe-wg"
            scriptSrc="https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-wg/wg-iframe.js"
          />

          <div className="mt-16 max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Warum die Wohngebäudeversicherung für jeden Hauseigentümer unverzichtbar ist
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ob Einfamilienhaus, Doppelhaushälfte oder Mehrfamilienhaus: Schäden an der Bausubstanz durch Brände, Leitungswasseraustritt oder schwere Unwetter können Reparaturkosten im sechsstelligen Bereich verursachen. Ohne eine verlässliche <strong>Wohngebäudeversicherung</strong> kann ein solcher Totalschaden die finanzielle Existenz bedrohen.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Der unverzichtbare Baustein: Erweiterter Elementarschadenschutz
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Durch den Klimawandel nehmen extreme Wetterereignisse wie Starkregen, Überschwemmungen und Schneedruck drastisch zu. Ein herkömmlicher Grundschutz deckt diese Schäden oft nicht ab. Wir empfehlen daher dringend den Einschluss der <strong>Elementarschadendeckung</strong>, um auch bei vollgelaufenen Kellern und Rückstau optimal geschützt zu sein.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Gleitende Neuwertversicherung: Nie wieder unterversichert
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Moderne Wohngebäudetarife werden auf Basis des gleitenden Neuwerts berechnet (Wert 1914 oder Quadratmetermodell). Dies stellt sicher, dass Ihnen im Schadenfall stets die tatsächlichen Wiederaufbaukosten nach heutigen Baupreisen erstattet werden – ohne Abzüge wegen gestiegener Material- oder Lohnkosten.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
