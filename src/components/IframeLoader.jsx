import React, { useState, useEffect } from 'react';
import { Loader2, Shield, AlertCircle, Cookie } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function IframeLoader({ iframeId, scriptSrc }) {
  const [consentGiven, setConsentGiven] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showCookieWarning, setShowCookieWarning] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const savedConsent = localStorage.getItem('cookie-consent');
      if (savedConsent) {
        const consent = JSON.parse(savedConsent);
        setConsentGiven(consent.marketing || consent.analytics);
      }
    };

    checkConsent();

    const handleConsentUpdate = (event) => {
      const consent = event.detail;
      setConsentGiven(consent.marketing || consent.analytics);
      if (consent.marketing || consent.analytics) {
        window.location.reload();
      }
    };

    window.addEventListener('cookieConsentUpdated', handleConsentUpdate);
    return () => window.removeEventListener('cookieConsentUpdated', handleConsentUpdate);
  }, []);

  useEffect(() => {
    let script;
    let timeoutId;
    
    if (consentGiven && scriptSrc && iframeId) {
      // Find and remove any existing script for this widget to force re-execution on SPA navigation
      const existingScript = document.querySelector(`script[src^="${scriptSrc}"]`);
      if (existingScript) existingScript.remove();
      
      setIsLoading(true);
      setHasError(false);
      script = document.createElement('script');
      // Use cache-busting timestamp to strictly force re-evaluation
      script.src = `${scriptSrc}?t=${Date.now()}`;
      script.async = true;
      
      script.onload = () => {
        console.log('Script loaded successfully:', scriptSrc);
        setScriptLoaded(true);
        setIsLoading(false);
        setHasError(false);
        
        // Check for cookie warning in iframe content after load
        setTimeout(() => {
          const iframeElement = document.getElementById(iframeId);
          if (iframeElement) {
            const textContent = iframeElement.textContent || '';
            if (textContent.includes('Bitte aktivieren Sie die Cookies') || 
                textContent.includes('Websiteübergreifendes Tracking verhindern')) {
              setShowCookieWarning(true);
            }
          }
        }, 3000);
      };
      
      script.onerror = () => {
        console.error('Failed to load script:', scriptSrc);
        setIsLoading(false);
        setHasError(true);
      };
      
      document.body.appendChild(script);
      
      // Erhöhter Timeout auf 30 Sekunden für langsamere Verbindungen
      timeoutId = setTimeout(() => {
        if (isLoading) {
          console.warn('Script loading timeout after 30s:', scriptSrc);
          setIsLoading(false);
          setHasError(true);
        }
      }, 30000);
      
      return () => {
        if (timeoutId) clearTimeout(timeoutId);
      };
    }
  }, [consentGiven, scriptSrc, iframeId, isLoading]);

  // Monitor iframe content for cookie warnings
  useEffect(() => {
    if (!scriptLoaded || !iframeId) return;

    const observer = new MutationObserver(() => {
      const iframeElement = document.getElementById(iframeId);
      if (iframeElement) {
        const textContent = iframeElement.textContent || '';
        if (textContent.includes('Bitte aktivieren Sie die Cookies') || 
            textContent.includes('Websiteübergreifendes Tracking verhindern')) {
          setShowCookieWarning(true);
        }
      }
    });

    const iframeElement = document.getElementById(iframeId);
    if (iframeElement) {
      observer.observe(iframeElement, { childList: true, subtree: true, characterData: true });
    }

    return () => observer.disconnect();
  }, [scriptLoaded, iframeId]);
  
  const openCookieSettings = () => {
    if (window.openCookieSettings) {
      window.openCookieSettings();
    }
  }

  if (!consentGiven) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-dashed border-gray-300 text-center min-h-[300px] flex flex-col justify-center">
        <Shield className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-base font-semibold text-gray-900 mb-2">
          Cookie-Einwilligung erforderlich
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Für den Vergleichsrechner ist Ihre Zustimmung zu Marketing-Cookies notwendig.
        </p>
        <Button 
          onClick={openCookieSettings}
          className="bg-blue-600 hover:bg-blue-700 w-full"
        >
          Cookie-Einstellungen öffnen
        </Button>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-red-200 text-center min-h-[300px] flex flex-col justify-center">
        <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
        <h3 className="text-base font-semibold text-gray-900 mb-2">
          Vergleichsrechner konnte nicht geladen werden
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Der Vergleichsrechner ist momentan nicht verfügbar. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.
        </p>
        <div className="flex flex-col gap-2">
          <Button 
            onClick={() => window.location.reload()}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Seite neu laden
          </Button>
          <Button 
            onClick={openCookieSettings}
            variant="outline"
            className="w-full"
          >
            Cookie-Einstellungen prüfen
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {showCookieWarning && (
        <div className="absolute top-0 left-0 right-0 bg-orange-50 border-2 border-orange-300 rounded-lg p-4 mb-4 z-10 shadow-lg">
          <div className="flex items-start gap-3">
            <Cookie className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold text-orange-900 mb-2">
                Cookies müssen aktiviert sein
              </h3>
              <p className="text-sm text-orange-800 mb-3">
                Der Vergleichsrechner benötigt aktivierte Cookies. Bitte überprüfen Sie Ihre Cookie-Einstellungen.
              </p>
              <Button 
                onClick={openCookieSettings}
                className="bg-orange-600 hover:bg-orange-700 text-white"
                size="sm"
              >
                Cookie-Einstellungen öffnen
              </Button>
            </div>
          </div>
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-sm border transition-all duration-300" style={{ width: '100%', minHeight: '500px', marginTop: showCookieWarning ? '120px' : '0' }}>
        {isLoading && (
          <div className="flex flex-col items-center justify-center h-full min-h-[500px] text-gray-500">
            <Loader2 className="w-8 h-8 animate-spin mb-4" />
            <span>Lade Vergleichsrechner...</span>
            <span className="text-xs text-gray-400 mt-2">Dies kann bis zu 30 Sekunden dauern</span>
          </div>
        )}
        <div 
          id={iframeId}
          data-scrollto="iframe"
          style={{ width: '100%', minHeight: isLoading ? '0' : '500px', display: isLoading ? 'none' : 'block' }}
        />
      </div>
    </div>
  );
}