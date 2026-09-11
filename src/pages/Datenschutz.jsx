
import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Cookie, Settings } from 'lucide-react';

export default function DatenschutzPage() {
  useEffect(() => {
    document.title = "Datenschutzerklärung | versicherungsofort.de";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Datenschutzerklärung</h1>
          <p className="text-gray-600">Transparenz über die Verarbeitung Ihrer personenbezogenen Daten</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Datenschutz auf einen Blick
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h3 className="font-semibold text-blue-900 mb-2">Ihre Rechte im Überblick</h3>
                <p className="text-sm text-blue-800">
                  Sie haben jederzeit das Recht auf Auskunft über Ihre bei uns gespeicherten Daten, 
                  deren Herkunft, Empfänger und den Zweck der Datenverarbeitung. Ebenso haben Sie 
                  das Recht auf Berichtigung oder Löschung Ihrer Daten.
                </p>
              </div>

              <h3 className="font-semibold mb-2">Allgemeine Hinweise</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. 
                Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
                werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie 
                unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Datenerfassung auf dieser Website
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Wer ist verantwortlich für die Datenerfassung?</h3>
                <p className="text-sm text-gray-700">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                  Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Wie erfassen wir Ihre Daten?</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen:
                </p>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                  <li>Daten aus Kontaktformularen und Vergleichsrechnern</li>
                  <li>Daten bei der Versicherungsberatung und -vermittlung</li>
                  <li>Cookie-Einstellungen und Präferenzen</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Wofür nutzen wir Ihre Daten?</h3>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                  <li>Zur Bereitstellung der Website und deren Funktionalitäten</li>
                  <li>Für die Versicherungsberatung und -vermittlung</li>
                  <li>Zur Kommunikation und Kundenbetreuung</li>
                  <li>Für statistische Auswertungen (anonymisiert)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cookie className="w-5 h-5" />
                Cookies und Tracking
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">Cookie-Einwilligung erforderlich</h3>
                <p className="text-sm text-yellow-700">
                  Wir verwenden Cookies nur nach Ihrer ausdrücklichen Einwilligung. 
                  Sie können Ihre Einwilligung jederzeit widerrufen oder anpassen.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Arten von Cookies</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium text-green-800">Notwendige Cookies</h4>
                    <p className="text-sm text-gray-700">
                      Technisch erforderlich für die Grundfunktionalität der Website
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium text-blue-800">Analyse-Cookies</h4>
                    <p className="text-sm text-gray-700">
                      Helfen uns, die Nutzung der Website zu verstehen und zu verbessern
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-medium text-purple-800">Marketing-Cookies</h4>
                    <p className="text-sm text-gray-700">
                      Ermöglichen Affiliate-Tracking und personalisierte Werbung
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Affiliate-Partner & gemeinsame Verantwortlichkeit
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2">Wichtiger Hinweis</h3>
                <p className="text-sm text-orange-700">
                  Bei der Nutzung unserer Vergleichsrechner werden Ihre Daten an unsere 
                  Affiliate-Partner übermittelt. Hierbei kann eine gemeinsame Verantwortlichkeit 
                  im Sinne der DSGVO entstehen.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Unsere Partner</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>
                    <strong>partner-versicherung.de:</strong> 
                    Technischer Partner für Vergleichsrechner und Vermittlung
                  </li>
                  <li>
                    <strong>Verschiedene Versicherer:</strong> 
                    Direkte Übermittlung für Angebotsstellung
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Rechtsgrundlagen</h3>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                  <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
                  <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)</li>
                  <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Ihre Rechte
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Auskunftsrecht</h4>
                  <p className="text-sm text-green-700">
                    Sie haben das Recht zu erfahren, welche Daten wir über Sie gespeichert haben.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Berichtigungsrecht</h4>
                  <p className="text-sm text-blue-700">
                    Unrichtige Daten können Sie jederzeit korrigieren lassen.
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Löschungsrecht</h4>
                  <p className="text-sm text-red-700">
                    Sie können die Löschung Ihrer Daten verlangen (Recht auf Vergessenwerden).
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Widerspruchsrecht</h4>
                  <p className="text-sm text-purple-700">
                    Sie können der Verarbeitung Ihrer Daten widersprechen.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <h3 className="font-semibold mb-2">Kontakt für Datenschutzanfragen</h3>
                <p className="text-sm text-gray-700">
                  E-Mail: datenschutz@versicherungsofort.de<br />
                  Telefon: +49 (0) 30 12345678<br />
                  Post: versicherungsofort.de, Datenschutz, Musterstraße 123, 12345 Berlin
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Speicherdauer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-4">
                Ihre personenbezogenen Daten werden nur so lange gespeichert, wie es für die 
                jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen dies vorsehen:
              </p>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                <li>Beratungsdaten: 10 Jahre (Vermittlerrecht)</li>
                <li>Vertragsdaten: Laufzeit + 3 Jahre</li>
                <li>Marketing-Daten: bis zum Widerruf der Einwilligung</li>
                <li>Cookies: je nach Typ 1 Tag bis 2 Jahre</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
