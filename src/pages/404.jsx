import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft } from 'lucide-react';
import { createPageUrl } from "@/utils";
import SEOHead from '@/components/SEOHead';

export default function NotFound() {

  return (
    <>
      <SEOHead
        title="Seite nicht gefunden (404) | versicherungsofort.de"
        description="Die gesuchte Seite wurde nicht gefunden. Vergleichen Sie stattdessen über 300 Versicherungen und finden Sie die beste Absicherung."
        keywords="404, Seite nicht gefunden"
      />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <Card className="max-w-2xl w-full">
        <CardContent className="p-12 text-center">
          <div className="text-8xl font-bold text-blue-600 mb-4">404</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Seite nicht gefunden
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Die von Ihnen gesuchte Seite existiert leider nicht oder wurde verschoben.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Home")}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Home className="w-5 h-5 mr-2" />
                Zur Startseite
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Zurück
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Beliebte Versicherungen vergleichen:
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to={createPageUrl("Kfz")}>
                <Button variant="outline" size="sm">🚗 Kfz-Versicherung</Button>
              </Link>
              <Link to={createPageUrl("PKV")}>
                <Button variant="outline" size="sm">🏥 PKV</Button>
              </Link>
              <Link to={createPageUrl("Haftpflicht")}>
                <Button variant="outline" size="sm">🛡️ Haftpflicht</Button>
              </Link>
              <Link to={createPageUrl("Berufsunfähigkeit")}>
                <Button variant="outline" size="sm">💼 Berufsunfähigkeit</Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    </>
  );
}