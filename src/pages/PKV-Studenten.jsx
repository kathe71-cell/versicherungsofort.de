import React from 'react';
import InsuranceCategory from '../components/InsuranceCategory';
import SEOHead from '@/components/SEOHead';

const benefits = [
  {
    title: "Günstige Studententarife",
    description: "Spezielle Konditionen für Studenten"
  },
  {
    title: "Vollwertige Leistungen",
    description: "Trotz günstiger Beiträge"
  },
  {
    title: "Sofortschutz",
    description: "Schnelle Aufnahme möglich"
  }
];

const features = [
  "Spezielle PKV-Tarife für Studenten",
  "Günstige Beiträge während des Studiums",
  "Vollwertige PKV-Leistungen",
  "Befreiung von der gesetzlichen Krankenversicherung",
  "Chefarztbehandlung auch als Student",
  "Keine Wartezeiten bei Fachärzten",
  "Zahnersatz oft besser erstattet",
  "Auslandsschutz für Auslandssemester",
  "Übergang in normale PKV nach Studium",
  "Familienversicherung möglich"
];

const keywords = [
  "PKV Studenten",
  "Private Krankenversicherung Student",
  "Studentenversicherung privat",
  "PKV Studium günstig",
  "Krankenversicherung Uni"
];

export default function PKVStudentenPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "PKV für Studenten",
    "description": "Private Krankenversicherung für Studenten - günstige Studententarife mit vollwertigen Leistungen.",
    "brand": { "@type": "Brand", "name": "versicherungsofort.de" }
  };

  return (
    <>
      <SEOHead
        title="PKV für Studenten - Private Krankenversicherung Studium Vergleich | versicherungsofort.de"
        description="PKV für Studenten vergleichen: ✓ Günstige Studententarife ✓ Vollwertige Leistungen ✓ Sofortschutz. Jetzt Studenten-PKV vergleichen!"
        keywords="PKV Studenten, Private Krankenversicherung Student, Studentenversicherung privat, PKV Studium"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InsuranceCategory
          title="PKV für Studenten - Premium-Schutz zu Studententarifen"
          description="Als Student können Sie sich von der gesetzlichen Krankenversicherungspflicht befreien lassen und günstig privat versichern."
          benefits={benefits}
          features={features}
          keywords={keywords}
          iframeId="tcpp-iframe-pkv-s"
          scriptSrc="https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-pkv-s/pkv-s-iframe.js"
        />

        {/* SEO Content */}
        <div className="mt-16 max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            PKV für Studenten - Lohnt sich der Wechsel?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Als Student haben Sie die Wahl: Sie können sich von der 
            <strong> gesetzlichen Krankenversicherungspflicht</strong> befreien lassen 
            und in die private Krankenversicherung wechseln. Dies bietet viele Vorteile.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              📚 Wichtig zu wissen
            </h3>
            <p className="text-blue-700 text-sm">
              Die Entscheidung für die PKV als Student ist bindend für das gesamte Studium. 
              Überlegen Sie daher gut und lassen Sie sich beraten.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}