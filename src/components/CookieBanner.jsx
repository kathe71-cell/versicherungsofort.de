import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cookie, Shield, Settings, Check } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookie-consent');
    if (!savedConsent) {
      setShowBanner(true);
    } else {
      const parsed = JSON.parse(savedConsent);
      setConsent(parsed);
      setShowBanner(false); 
    }

    // Set global function to open settings - WICHTIG: Diese Funktion muss IMMER verfügbar sein
    window.openCookieSettings = () => {
      console.log('Opening cookie settings...');
      setShowSettings(true);
    };

    // Cleanup nicht nötig, Funktion soll immer verfügbar bleiben
  }, []);

  const saveConsent = (consentData) => {
    localStorage.setItem('cookie-consent', JSON.stringify(consentData));
    setShowBanner(false);
    setShowSettings(false);
    
    window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { 
      detail: consentData 
    }));
  };

  const acceptAll = () => {
    const allConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    setConsent(allConsent);
    saveConsent(allConsent);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    };
    setConsent(necessaryOnly);
    saveConsent(necessaryOnly);
  };

  const saveCustomSettings = () => {
    saveConsent(consent);
  };

  const handleConsentChange = (type, value) => {
    setConsent(prev => ({
      ...prev,
      [type]: value
    }));
  };

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto">
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Cookie className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Cookie-Einstellungen & Datenschutz
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Wir verwenden Cookies und ähnliche Technologien, um Ihnen das bestmögliche 
                        Erlebnis zu bieten. Einige sind notwendig für die Funktionalität, andere helfen 
                        uns, unseren Service zu verbessern. Ihre Einwilligung können Sie jederzeit widerrufen.
                      </p>
                      <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Shield className="w-3 h-3" />
                          <span>DSGVO-konform</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Check className="w-3 h-3" />
                          <span>Datenschutz by Design</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                    <Button
                      variant="outline"
                      onClick={() => setShowSettings(true)}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Settings className="w-4 h-4" />
                      Einstellungen
                    </Button>
                    <Button
                      variant="outline"
                      onClick={acceptNecessary}
                      className="text-sm"
                    >
                      Nur notwendige
                    </Button>
                    <Button
                      onClick={acceptAll}
                      className="bg-blue-600 hover:bg-blue-700 text-sm font-semibold"
                    >
                      Alle akzeptieren
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Cookie-Einstellungen verwalten
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 mt-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800 leading-relaxed">
                Sie haben die vollständige Kontrolle über Ihre Daten. Wählen Sie aus, welche 
                Cookie-Kategorien Sie zulassen möchten. Änderungen können Sie jederzeit vornehmen.
              </p>
            </div>

            {/* Necessary Cookies */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Label className="font-semibold text-gray-900">
                    Notwendige Cookies
                  </Label>
                  <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Immer aktiv
                  </div>
                </div>
                <Switch checked={true} disabled />
              </div>
              <p className="text-sm text-gray-600">
                Diese Cookies sind für die grundlegende Funktionalität der Website erforderlich 
                und können nicht deaktiviert werden.
              </p>
            </div>

            {/* Analytics Cookies */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <Label className="font-semibold text-gray-900">
                  Analyse & Performance
                </Label>
                <Switch 
                  checked={consent.analytics}
                  onCheckedChange={(checked) => handleConsentChange('analytics', checked)}
                />
              </div>
              <p className="text-sm text-gray-600">
                Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.
              </p>
            </div>

            {/* Marketing Cookies */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <Label className="font-semibold text-gray-900">
                  Marketing & Affiliate-Partner
                </Label>
                <Switch 
                  checked={consent.marketing}
                  onCheckedChange={(checked) => handleConsentChange('marketing', checked)}
                />
              </div>
              <p className="text-sm text-gray-600">
                Diese Cookies werden für Affiliate-Tracking und Marketing-Optimierung verwendet.
              </p>
            </div>

            {/* Preferences Cookies */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <Label className="font-semibold text-gray-900">
                  Einstellungen & Personalisierung
                </Label>
                <Switch 
                  checked={consent.preferences}
                  onCheckedChange={(checked) => handleConsentChange('preferences', checked)}
                />
              </div>
              <p className="text-sm text-gray-600">
                Diese Cookies ermöglichen es uns, Ihre Einstellungen zu speichern.
              </p>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6 pt-4 border-t">
            <Button variant="outline" onClick={() => setShowSettings(false)}>
              Abbrechen
            </Button>
            <Button onClick={saveCustomSettings} className="bg-blue-600 hover:bg-blue-700">
              Einstellungen speichern
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}