import React from 'react';
import InsuranceCategory from '../components/InsuranceCategory';
import IframeLoader from '../components/IframeLoader';
import { Shield } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from '@/components/SEOHead';

const benefits = [
  {
    title: "Ab 2€ monatlich",
    description: "Günstige Haftpflicht für jeden"
  },
  {
    title: "Millionenschutz",
    description: "Bis zu 50 Mio. € Deckung"
  },
  {
    title: "Sofortschutz",
    description: "Schutz ab dem ersten Tag"
  }
];

const features = [
  "Privathaftpflicht ab 2€ monatlich",
  "Hausratversicherung mit Unterversicherungsverzicht",
  "Millionenschwere Deckungssummen verfügbar",
  "Schlüsselverlust und Mietsachschäden inkl.",
  "Weltweiter Versicherungsschutz",
  "Internetkäufe und Ehrenamt mitversichert",
  "24/7 Schadenhotline und Rechtsschutz",
  "Sofortiger Online-Abschluss möglich",
  "Tarifabhängige Schutz- & Leistungspakete",
  "Familienversicherung für Partner & Kinder"
];

const keywords = [
  "Haftpflichtversicherung günstig",
  "Hausratversicherung Vergleich",
  "Privathaftpflicht ab 2 Euro",
  "Haftpflicht online abschließen",
  "Hausrat sofort versichern"
];

export default function HaftpflichtPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Privathaftpflichtversicherung",
    "description": "Privathaftpflicht ab 2€ monatlich - Millionenschutz für Sie und Ihre Familie.",
    "brand": { "@type": "Brand", "name": "versicherungsofort.de" }
  };

  return (
    <>
      <SEOHead
        title="Haftpflichtversicherung ab 2€ - Privathaftpflicht Vergleich 2025 | versicherungsofort.de"
        description="Haftpflichtversicherung ab 2€: ✓ Millionenschutz ✓ Sofortschutz ✓ Für die ganze Familie. Jetzt Privathaftpflicht vergleichen & sparen!"
        keywords="Haftpflichtversicherung, Privathaftpflicht, Haftpflicht ab 2 Euro, Hausratversicherung, Haftpflicht Vergleich"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InsuranceCategory
          title="Haftpflichtversicherung - Der wichtigste Schutz"
          description="Schützen Sie sich vor millionenschweren Schadenersatzforderungen mit einer Privathaftpflicht ab nur 2€ monatlich. Der unverzichtbare Schutz für Sie und Ihre Familie."
          benefits={benefits}
          features={features}
          keywords={keywords}
          iframeId="tcpp-iframe-phv"
          scriptSrc="https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-phv/phv-iframe.js"
        />

        {/* Additional Hausrat Section */}
        <Card className="mt-12 bg-blue-50 p-8 rounded-xl border-none shadow-sm">
          <CardContent className="p-0">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
              Zusätzlich: Hausratversicherung - Ihr Zuhause optimal geschützt
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">Was ist versichert?</h3>
                <ul className="text-blue-700 space-y-2">
                  <li className="flex items-start gap-2"><Shield className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" /><span>Möbel, Elektronik & Kleidung</span></li>
                  <li className="flex items-start gap-2"><Shield className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" /><span>Schäden durch Feuer, Wasser, Sturm</span></li>
                  <li className="flex items-start gap-2"><Shield className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" /><span>Einbruchdiebstahl & Vandalismus</span></li>
                  <li className="flex items-start gap-2"><Shield className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" /><span>Fahrraddiebstahl auch außer Haus</span></li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-2xl border border-blue-200 text-center flex flex-col items-center justify-center">
                <p className="text-sm text-slate-600 mb-4 font-medium">Schützen Sie Ihr Hab und Gut bei Einbruch, Feuer und Wasserschäden.</p>
                <a href="/hausrat.html" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all shadow-md">
                  Hausrat-Tarife vergleichen*
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SEO Content */}
        <div className="mt-16 max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Warum Haftpflicht- und Hausratversicherung unverzichtbar sind
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Die <strong>Privathaftpflichtversicherung</strong> ist nach Expertenmeinung die wichtigste 
            Versicherung überhaupt. Sie schützt Sie vor Schadenersatzansprüchen Dritter, die schnell 
            existenzbedrohende Höhen erreichen können. Die <strong>Hausratversicherung</strong> ergänzt 
            diesen Schutz um die Absicherung Ihres Eigentums.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}