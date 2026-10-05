import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Cookie, Settings } from 'lucide-react';

export default function DatenschutzPage() {
  useEffect(() => {
    document.title = "Datenschutzerklärung | versicherungsofort.de";
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Datenschutzerklärung</h1>
          <p className="text-slate-600 font-medium text-sm">Informationen über die Verarbeitung personenbezogener Daten nach DSGVO</p>
        </div>

        <div className="space-y-6">
          <Card className="bg-white border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-900 font-bold">
                <Shield className="w-5 h-5 text-blue-600" />
                Datenschutz auf einen Blick
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50/70 p-4 rounded-xl border border-blue-100 mb-4">
                <h3 className="font-bold text-blue-900 mb-2 text-sm">Ihre Rechte nach DSGVO</h3>
                <p className="text-xs text-blue-800 leading-relaxed font-medium">
                  Sie haben jederzeit das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung. Ebenso haben Sie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
                </p>
              </div>

              <h3 className="font-bold text-slate-900 mb-2 text-sm">Allgemeine Hinweise</h3>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten innerhalb unseres Onlineangebotes auf.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-900 font-bold">
                <Eye className="w-5 h-5 text-blue-600" />
                Verantwortliche Stelle
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-700">
              <p className="font-medium">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs font-semibold space-y-1">
                <p className="font-bold text-slate-900 text-sm">Jens Kathe</p>
                <p>Hansastraße 6</p>
                <p>34119 Kassel</p>
                <p>Deutschland</p>
                <p>E-Mail: jens@kathe.org</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-900 font-bold">
                <Cookie className="w-5 h-5 text-blue-600" />
                Cookies & Web-Analyse
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-slate-700 leading-relaxed font-medium">
              <p>
                Unsere Website nutzt lokale Speicherung (`localStorage`) zur Speicherung Ihrer Cookie-Einwilligung. 
              </p>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">Vercel Web Analytics</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Zur bedarfsgerechten Gestaltung und statistischen Auswertung unserer Website nutzen wir Vercel Web Analytics (Vercel Inc.). Vercel Web Analytics verarbeitet Daten in anonymisierter Form und verwendet keine Tracking-Cookies von Drittanbietern.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-900 font-bold">
                <Lock className="w-5 h-5 text-blue-600" />
                Einbindung von Partner-Vergleichsrechnern
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-slate-700 leading-relaxed font-medium">
              <p>
                Auf unseren Unterseiten binden wir Vergleichsrechner von Partnernetzwerken (z.B. TARIFCHECK24 GmbH, Zolltorstraße 11, 21502 Geesthacht) per iFrame bzw. JavaScript-Formular ein.
              </p>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
                <h4 className="font-bold text-slate-900 mb-1">Datenverarbeitung im Vergleichsrechner</h4>
                <p className="text-slate-600">
                  Wenn Sie Eingaben im Vergleichsrechner vornehmen, werden diese Daten direkt an den jeweiligen Schnittstellen-Betreiber (TARIFCHECK24 GmbH) übermittelt, um Beitragsberechnungen durchzuführen. Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) und Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-900 font-bold">
                <Settings className="w-5 h-5 text-blue-600" />
                Ihre Betroffenenrechte
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-slate-700 font-medium">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1 text-xs">Auskunft & Berichtigung</h4>
                  <p className="text-xs text-slate-600">Sie haben das Recht auf kostenlose Auskunft über Ihre verarbeiteten Daten.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1 text-xs">Löschung & Einschränkung</h4>
                  <p className="text-xs text-slate-600">Sie können die Löschung oder Einschränkung der Verarbeitung verlangen.</p>
                </div>
              </div>

              <div className="p-4 bg-blue-50/70 rounded-xl border border-blue-100 text-xs">
                <h4 className="font-bold text-blue-900 mb-1">Kontakt für Datenschutzfragen</h4>
                <p className="text-blue-800">
                  Bei Fragen zum Datenschutz richten Sie Ihre Anfrage bitte per E-Mail an: <strong>jens@kathe.org</strong> oder per Post an Jens Kathe, Hansastraße 6, 34119 Kassel.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
