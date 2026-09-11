import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Phone, Mail, Globe, User } from 'lucide-react';

export default function ImpressumPage() {
  useEffect(() => {
    document.title = "Impressum | versicherungsofort.de";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Impressum</h1>
          <p className="text-gray-600">Rechtliche Angaben nach § 5 DDG (Digitale-Dienste-Gesetz)</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Anbieter & Verantwortlich
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Jens Kathe</strong></p>
              <p>Hansastraße 6</p>
              <p>34119 Kassel</p>
              <p>Deutschland</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Kontakt
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Telefon: 0178 6652623</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>E-Mail: jens@kathe.org</span>
              </p>
              <p className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>Web: www.versicherungsofort.de</span>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Gewerberechtliche Angaben</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Kleinunternehmer</h3>
                <p className="text-sm text-blue-800">
                  Nach § 19 UStG wird keine Umsatzsteuer ausgewiesen.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vermittlertätigkeit & Haftung</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Vermittlerstatus</h3>
                <p className="text-sm text-blue-800">
                  Wir sind als Versicherungsmakler nach § 34d GewO tätig und vertreten die Interessen 
                  unserer Kunden. Wir erhalten von unseren Versicherungspartnern eine Provision für 
                  erfolgreich vermittelte Verträge.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Berufshaftpflichtversicherung</h3>
                <p className="text-sm text-gray-700">
                  Vermittlertätigkeit erfolgt über lizenzierte Partner<br />
                  Deckungssumme: 1.000.000 € je Versicherungsfall<br />
                  Räumlicher Geltungsbereich: Europa
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Haftungsausschluss</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-3">
              <div>
                <h3 className="font-semibold">Inhalt des Onlineangebotes</h3>
                <p>
                  Der Betreiber übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, 
                  Vollständigkeit oder Qualität der bereitgestellten Informationen. 
                  Haftungsansprüche gegen den Betreiber, welche sich auf Schäden materieller 
                  oder ideeller Art beziehen, sind grundsätzlich ausgeschlossen.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Verweise und Links</h3>
                <p>
                  Bei direkten oder indirekten Verweisen auf fremde Internetseiten 
                  ("Links"), die außerhalb des Verantwortungsbereiches des Betreibers liegen, 
                  würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, 
                  in dem der Betreiber von den Inhalten Kenntnis hat.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}