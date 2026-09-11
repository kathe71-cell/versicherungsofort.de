import React, { useEffect } from 'react';
import InsuranceCategory from '@/components/InsuranceCategory';
import SEOHead from '@/components/SEOHead';

const benefits = [
  {
    title: "Hunderte Euro sparen",
    description: "Vergleich von über 300 Kfz-Tarifen"
  },
  {
    title: "Sofortschutz",
    description: "Versicherungsschutz ab sofort möglich"
  },
  {
    title: "Günstige Vollkasko",
    description: "Premium-Schutz zum Bestpreis"
  }
];

const features = [
  "Über 300 Versicherer im direkten Vergleich",
  "Kostenloser Wechselservice - wir kündigen für Sie",
  "Sofortiger Online-Abschluss möglich",
  "Keine versteckten Kosten oder Zusatzgebühren",
  "eVB-Nummer sofort per E-Mail erhalten", 
  "Schadenfreiheitsklasse wird übernommen",
  "24/7 Schadenhotline inklusive",
  "Werkstattservice und Abschleppdienst",
  "Rabattschutz bei Schadensmeldung möglich",
  "Junge Fahrer-Tarife verfügbar"
];

const keywords = [
  "Kfz-Versicherung sofort online",
  "Autoversicherung Vergleich",
  "eVB-Nummer heute",
  "Kfz wechseln sparen",
  "Vollkasko günstig"
];

export default function KfzPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Kfz-Versicherung Vergleich",
    "description": "Vergleichen Sie über 300 Kfz-Versicherungen und sparen Sie bis zu 850€ im Jahr. Sofortiger Online-Abschluss mit eVB-Nummer.",
    "brand": {
      "@type": "Brand",
      "name": "versicherungsofort.de"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "lowPrice": "49",
      "highPrice": "2000",
      "offerCount": "300"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "1850"
    }
  };

  return (
    <>
      <SEOHead
        title="Kfz-Versicherung Vergleich 2025 | versicherungsofort.de"
        description="Kfz-Versicherung wechseln & bis zu 850€ sparen! ✓ 300+ Tarife im Vergleich ✓ Sofort-Wechsel ✓ eVB-Nummer direkt ✓ Kostenloser Service. Jetzt vergleichen!"
        keywords="Kfz-Versicherung Vergleich, Autoversicherung wechseln, günstige Kfz-Versicherung, eVB-Nummer, Autoversicherung online, Kfz-Versicherung Rechner"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InsuranceCategory
            title="Kfz-Versicherung sofort online abschließen"
            description="Finden Sie die passende Autoversicherung mit unserem kostenlosen Online-Vergleich. Über 300 Anbieter, sofortiger Online-Abschluss und eVB-Nummer direkt per E-Mail."
            benefits={benefits}
            features={features}
            keywords={keywords}
            iframeId="tcpp-iframe-kfz"
            scriptSrc="https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-kfz/kfz-iframe.js"
          />

          {/* SEO Content */}
          <div className="mt-16 max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Kfz-Versicherung wechseln und sofort sparen - so einfach geht's
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Die <strong>Kfz-Versicherung</strong> ist für jeden Fahrzeughalter in Deutschland Pflicht. 
              Doch viele zahlen zu viel für ihren Versicherungsschutz. Mit unserem kostenlosen Online-Vergleich 
              finden Sie in wenigen Minuten die günstigste Kfz-Versicherung, die perfekt zu Ihren Bedürfnissen passt.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Besonders zum Jahresende lohnt sich der <strong>Versicherungswechsel</strong>. Die meisten Verträge laufen zum 31.12. und haben eine Kündigungsfrist von einem Monat. Nutzen Sie die Wechselsaison und sichern Sie sich die besten Konditionen für das kommende Jahr. Unser Rechner zeigt Ihnen Ihr persönliches Sparpotenzial.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Warum bei versicherungsofort.de vergleichen?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">✓ Maximale Ersparnis</h4>
                <p className="text-sm text-blue-800">
                  Durch den Vergleich von über 300 Tarifen können Sie erheblich sparen.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">✓ Sofortiger Schutz</h4>
                <p className="text-sm text-green-800">
                  Nach Online-Abschluss erhalten Sie sofort Ihre eVB-Nummer per E-Mail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}