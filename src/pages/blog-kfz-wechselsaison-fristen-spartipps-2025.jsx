
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, CheckCircle } from 'lucide-react';

export default function KfzWechselsaisonBlogPost() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to={createPageUrl("Ratgeber")}>
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zum Ratgeber
          </Button>
        </Link>

        <article className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Kfz-Wechselsaison: Fristen & Spartipps 2025
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Die Kfz-Wechselsaison Ende 2025 bietet die perfekte Gelegenheit, bei der Autoversicherung 
              richtig Geld zu sparen. Wir zeigen Ihnen, welche Fristen wichtig sind und wie Sie 
              hunderte Euro pro Jahr sparen können.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
              <h3 className="text-lg font-bold text-yellow-900 mb-2">
                ⏰ Wichtigster Termin: 30. November 2025
              </h3>
              <p className="text-yellow-800">
                Für einen Wechsel zum 1. Januar 2026 muss Ihre Kündigung spätestens am 30. November 2025 
                bei Ihrem aktuellen Versicherer eingehen. Planen Sie einige Tage Postlaufzeit ein!
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              Warum gerade jetzt wechseln?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Kfz-Wechselsaison zum Jahresende ist für die meisten Autofahrer der richtige Zeitpunkt 
              für einen Versicherungswechsel, denn:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Die meisten Kfz-Versicherungen laufen zum 31.12. und können nur zu diesem Zeitpunkt gewechselt werden</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Versicherer locken mit attraktiven Neukundenrabatten und Sonderaktionen</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Viele Anbieter passen ihre Tarife zum Jahreswechsel an - vergleichen lohnt sich</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Die Schadenfreiheitsklasse wird nahtlos übernommen</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              5 Spartipps für die Kfz-Wechselsaison
            </h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">1. Frühzeitig vergleichen</h3>
                <p className="text-blue-800 text-sm">
                  Starten Sie Ihren Vergleich bereits Mitte Oktober. So haben Sie genug Zeit für die 
                  Entscheidung und verpassen nicht den Stichtag am 30. November.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">2. Selbstbeteiligung erhöhen</h3>
                <p className="text-green-800 text-sm">
                  Eine höhere Selbstbeteiligung (z.B. 300€ statt 150€) kann den Beitrag deutlich senken. 
                  Überlegen Sie, ob sich das für Sie lohnt.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">3. Kilometerbegrenzung prüfen</h3>
                <p className="text-purple-800 text-sm">
                  Wenn Sie weniger fahren als angegeben, können Sie durch Anpassung der Jahreskilometer 
                  oft mehrere hundert Euro sparen.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-semibold text-orange-900 mb-2">4. Zahlweise optimieren</h3>
                <p className="text-orange-800 text-sm">
                  Jährliche Zahlung ist meist 5-10% günstiger als monatliche Ratenzahlung. 
                  Prüfen Sie, ob das für Sie machbar ist.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-2">5. Werkstattbindung akzeptieren</h3>
                <p className="text-red-800 text-sm">
                  Bei manchen Tarifen können Sie durch Werkstattbindung sparen. Das bedeutet, dass 
                  Reparaturen nur in Partnerwerkstätten durchgeführt werden.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Jetzt Kfz-Versicherung vergleichen!</h3>
              <p className="mb-6">
                Nutzen Sie die Wechselsaison und sichern Sie sich die besten Konditionen für 2026. 
                Unser Vergleichsrechner zeigt Ihnen sofort, wie viel Sie sparen können.
              </p>
              <Link to={createPageUrl("kfz-versicherung")}>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Zum Kfz-Vergleich
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
