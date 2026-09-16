import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Phone, Mail, Globe, Info, ShieldCheck } from 'lucide-react';

export default function ImpressumPage() {
  useEffect(() => {
    document.title = "Impressum | versicherungsofort.de";
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Impressum</h1>
          <p className="text-slate-600 font-medium text-sm">Rechtliche Angaben nach § 5 DDG (Digitale-Dienste-Gesetz)</p>
        </div>

        <div className="space-y-6">
          <Card className="bg-white border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-900 font-bold">
                <User className="w-5 h-5 text-blue-600" />
                Anbieter & Betreiber
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1.5 text-sm text-slate-700">
              <p className="font-bold text-slate-900">Jens Kathe</p>
              <p>Hansastraße 6</p>
              <p>34119 Kassel</p>
              <p>Deutschland</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-900 font-bold">
                <Phone className="w-5 h-5 text-blue-600" />
                Kontaktmöglichkeiten
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-slate-700">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-500" />
                <span>Telefon: 0178 6652623</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-500" />
                <span>E-Mail: jens@kathe.org</span>
              </p>
              <p className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-slate-500" />
                <span>Web: www.versicherungsofort.de</span>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-900 font-bold">
                <Info className="w-5 h-5 text-blue-600" />
                Umsatzsteuer-Hinweis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-slate-700">
              <p>
                Gemäß § 19 UStG (Kleinunternehmerregelung) wird keine Umsatzsteuer berechnet und ausgewiesen.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-900 font-bold">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                Tätigkeit & Betreiberrolle
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-700 leading-relaxed">
              <p>
                <strong>versicherungsofort.de</strong> ist ein unabhängiges Verbraucher- und Informationsportal. Der Betreiber tritt nicht selbst als eigenständiger Versicherungsmakler oder Versicherungsvertreter nach § 34d GewO auf.
              </p>
              <p>
                Die auf der Website bereitgestellten Vergleichsrechner und Vermittlungsstrecken werden durch zugelassene technische Partner und Vergleichsnetzwerke (wie z.B. TARIFCHECK24 GmbH, Zolltorstraße 11, 21502 Geesthacht) zur Verfügung gestellt. Die Tarifberechnung, Antragsprüfung und Vermittlungsleistung erfolgt direkt über die jeweiligen Einbindungspartner.
              </p>
              <p className="text-xs text-slate-500">
                * Hinweis zu Vergütungen: Für vermittelte Verträge über Partnerlinks erhält der Betreiber gegebenenfalls eine Vermittlungsprovision vom jeweiligen Partnernetzwerk.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900 font-bold">Haftungsausschluss</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-4 leading-relaxed">
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Inhalte des Onlineangebots</h3>
                <p>
                  Alle Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Der Betreiber übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Informationen und Beitragsberechnungen der Partnerrechner.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-1">Verweise und Links</h3>
                <p>
                  Diese Website enthält Verknüpfungen zu Websites Dritter ("externe Links"). Diese Websites unterliegen der Haftung der jeweiligen Betreiber.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}