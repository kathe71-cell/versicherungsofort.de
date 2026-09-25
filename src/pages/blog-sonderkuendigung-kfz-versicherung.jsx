
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, AlertTriangle } from 'lucide-react'; // Removed Calendar and Clock imports

export default function SonderkuendigungBlogPost() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to={createPageUrl("Ratgeber")}> {/* Changed link destination */}
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zum Ratgeber {/* Changed button text */}
          </Button>
        </Link>

        <article className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          {/* Removed the date/read time stamp div */}
          {/*
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              12. November 2025
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              4 min Lesezeit
            </span>
          </div>
          */}

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Sonderkündigung richtig nutzen
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Sie müssen nicht bis zum Jahresende warten! Bei Beitragserhöhung oder nach einem Schaden 
              haben Sie ein Sonderkündigungsrecht. Wir zeigen Ihnen, wie Sie es richtig nutzen.
            </p>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-red-900 mb-2">
                    Wichtig: Frist beachten!
                  </h3>
                  <p className="text-red-800">
                    Das Sonderkündigungsrecht muss innerhalb eines Monats nach Zugang der Mitteilung 
                    (bei Beitragserhöhung) oder des Schadensfalls ausgeübt werden.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              Gründe für eine Sonderkündigung
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              1. Beitragserhöhung
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der häufigste Grund für eine Sonderkündigung ist eine Beitragserhöhung. Wichtig: 
              Auch wenn nur die Versicherungssteuer erhöht wird, haben Sie ein Sonderkündigungsrecht!
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-sm text-blue-800">
                <strong>Tipp:</strong> Prüfen Sie Ihr Beitragsschreiben genau. Oft werden Erhöhungen 
                versteckt oder nur im Kleingedruckten erwähnt.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              2. Nach einem Schadensfall
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nach jedem regulierten Schadensfall haben sowohl Sie als auch Ihr Versicherer das Recht 
              zur Sonderkündigung. Dies gilt auch für Teilkaskoschäden.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg mb-6">
              <p className="text-sm text-yellow-800">
                <strong>Achtung:</strong> Nutzen Sie dieses Recht nur, wenn Sie einen besseren Tarif 
                gefunden haben. Ihre SF-Klasse wird bei jedem Versicherer gleich berücksichtigt.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              3. Fahrzeugwechsel
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Beim Kauf eines neuen Fahrzeugs können Sie Ihre Versicherung außerordentlich kündigen. 
              Dies lohnt sich besonders, wenn sich durch das neue Fahrzeug Ihre Typklasse ändert.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              So gehen Sie vor
            </h2>
            
            <ol className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Kündigungsgrund prüfen</h4>
                  <p className="text-sm text-gray-600">Stellen Sie sicher, dass ein gültiger Kündigungsgrund vorliegt. Ob die Voraussetzungen erfüllt sind und wann Ihre einmonatige Frist endet, können Sie mit dem <a href="https://kfzwechselsaison.de/sonderkuendigungsrecht-kfz-versicherung/" target="_blank" rel="noopener" className="text-blue-600 font-semibold underline hover:text-blue-800">Sonderkündigungs-Checker für Kfz-Versicherungen</a> prüfen.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Neuen Tarif finden</h4>
                  <p className="text-sm text-gray-600">Vergleichen Sie Angebote, bevor Sie kündigen - so vermeiden Sie Versicherungslücken.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Schriftlich kündigen</h4>
                  <p className="text-sm text-gray-600">Kündigen Sie immer schriftlich per E-Mail oder Brief mit Kündigungsgrund und Datum.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Bestätigung abwarten</h4>
                  <p className="text-sm text-gray-600">Warten Sie die Kündigungsbestätigung ab, bevor Sie den alten Vertrag als beendet betrachten.</p>
                </div>
              </li>
            </ol>

            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Jetzt besseren Tarif finden!</h3>
              <p className="mb-6">
                Nutzen Sie Ihr Sonderkündigungsrecht und vergleichen Sie jetzt kostenlos über 300 Kfz-Tarife. 
                Oft können Sie mehrere hundert Euro pro Jahr sparen.
              </p>
              <Link to={createPageUrl("kfz-versicherung")}>
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
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
