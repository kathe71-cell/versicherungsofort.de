import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import SEOHead from "@/components/SEOHead";
import { 
  Search, ChevronDown, ChevronUp, HelpCircle, Shield, Car, 
  Heart, Briefcase, House 
} from 'lucide-react';

const faqCategories = [
  {
    title: "Allgemeine Fragen",
    icon: HelpCircle,
    color: "blue",
    faqs: [
      {
        question: "Wie funktioniert der Versicherungsvergleich?",
        answer: "Unser Versicherungsvergleich ist komplett kostenlos und unverbindlich. Geben Sie einfach Ihre Daten in den Rechner ein und erhalten Sie sofort eine Übersicht der günstigsten Tarife von über 300 Versicherern. Sie können dann direkt online abschließen oder sich beraten lassen."
      },
      {
        question: "Ist der Service wirklich kostenlos?",
        answer: "Ja, unser Vergleichsservice ist für Sie vollständig kostenlos. Wir finanzieren uns über Provisionen der Versicherungsgesellschaften, die wir bei erfolgreichem Abschluss erhalten. Für Sie entstehen dadurch keine zusätzlichen Kosten."
      },
      {
        question: "Sind meine Daten sicher?",
        answer: "Absolut. Wir verwenden moderne SSL-Verschlüsselung und sind DSGVO-konform. Ihre Daten werden nur für den Versicherungsvergleich verwendet und nicht an Dritte weitergegeben, außer an die von Ihnen ausgewählten Versicherer."
      },
      {
        question: "Wie schnell erhalte ich ein Angebot?",
        answer: "Die Vergleichsergebnisse erhalten Sie sofort nach Eingabe Ihrer Daten. Bei Online-Abschluss bekommen Sie die Versicherungsunterlagen meist innerhalb weniger Minuten per E-Mail zugeschickt."
      }
    ]
  },
  {
    title: "Kfz-Versicherung",
    icon: Car,
    color: "blue",
    faqs: [
      {
        question: "Wann kann ich meine Kfz-Versicherung wechseln?",
        answer: "Grundsätzlich können Sie Ihre Kfz-Versicherung zum Ende des Versicherungsjahres kündigen. Die Kündigungsfrist beträgt einen Monat. Bei Beitragserhöhungen oder nach einem Schaden haben Sie ein Sonderkündigungsrecht."
      },
      {
        question: "Was ist eine eVB-Nummer?",
        answer: "Die eVB-Nummer (elektronische Versicherungsbestätigung) benötigen Sie für die Fahrzeugzulassung. Diese erhalten Sie sofort nach Online-Abschluss per E-Mail und können Ihr Fahrzeug damit umgehend anmelden."
      },
      {
        question: "Bleibt meine Schadenfreiheitsklasse erhalten?",
        answer: "Ja, beim Wechsel der Kfz-Versicherung wird Ihre Schadenfreiheitsklasse vollständig übernommen. Sie müssen dafür nur eine Schadenfreiheitsbestätigung Ihres alten Versicherers vorlegen."
      }
    ]
  },
  {
    title: "Private Krankenversicherung",
    icon: Heart,
    color: "red",
    faqs: [
      {
        question: "Wer kann sich privat krankenversichern?",
        answer: "Selbständige, Freiberufler, Beamte und Angestellte mit einem Einkommen über der Versicherungspflichtgrenze (2025: 69.300 € brutto/Jahr) können in die private Krankenversicherung wechseln."
      },
      {
        question: "Kann ich von der PKV zurück in die GKV?",
        answer: "Ein Wechsel zurück in die gesetzliche Krankenversicherung ist nur unter bestimmten Bedingungen möglich, z.B. wenn Ihr Einkommen unter die Versicherungspflichtgrenze fällt oder Sie angestellt werden."
      },
      {
        question: "Sind Familienmitglieder in der PKV mitversichert?",
        answer: "Nein, in der PKV gibt es keine kostenlose Familienversicherung. Jedes Familienmitglied benötigt einen eigenen Vertrag, was die Kosten erhöhen kann."
      }
    ]
  },
  {
    title: "Berufsunfähigkeitsversicherung",
    icon: Briefcase,
    color: "purple",
    faqs: [
      {
        question: "Wie hoch sollte die BU-Rente sein?",
        answer: "Die BU-Rente sollte etwa 70-80% Ihres aktuellen Nettoeinkommens betragen, um Ihren Lebensstandard zu erhalten. Mindestens aber 1.000-1.500 Euro monatlich."
      },
      {
        question: "Bis zu welchem Alter brauche ich BU-Schutz?",
        answer: "Der BU-Schutz sollte mindestens bis zum 60. Lebensjahr, besser bis zum 67. Lebensjahr (Renteneintritt) bestehen, da Berufsunfähigkeit in jedem Alter auftreten kann."
      },
      {
        question: "Was bedeutet 'Verzicht auf abstrakte Verweisung'?",
        answer: "Diese Klausel bedeutet, dass Sie nicht auf einen anderen Beruf verwiesen werden können, den Sie theoretisch ausüben könnten. Sie erhalten die volle BU-Rente, wenn Sie Ihren aktuellen Beruf nicht mehr ausüben können."
      }
    ]
  },
  {
    title: "Haftpflicht & Hausrat",
    icon: House,
    color: "green",
    faqs: [
      {
        question: "Warum ist die Privathaftpflicht so wichtig?",
        answer: "Die Privathaftpflicht schützt Sie vor Schadenersatzansprüchen Dritter, die schnell in die Millionen gehen können. Ohne diese Versicherung müssten Sie mit Ihrem gesamten Vermögen haften - ein existenzielles Risiko."
      },
      {
        question: "Was ist in der Hausratversicherung versichert?",
        answer: "Die Hausratversicherung deckt Ihr Hab und Gut in der Wohnung ab: Möbel, Kleidung, Elektronik etc. Versichert sind Schäden durch Feuer, Leitungswasser, Sturm, Hagel, Einbruchdiebstahl und Vandalismus."
      },
      {
        question: "Brauche ich als Mieter eine Hausratversicherung?",
        answer: "Ja, auch als Mieter sollten Sie eine Hausratversicherung haben. Die Gebäudeversicherung des Vermieters deckt nur das Gebäude selbst ab, nicht aber Ihr persönliches Eigentum."
      }
    ]
  }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedItems, setExpandedItems] = useState(new Set());

  // Generate FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(category => 
      category.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
  };

  const toggleExpanded = (categoryIndex, faqIndex) => {
    const key = `${categoryIndex}-${faqIndex}`;
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedItems(newExpanded);
  };

  const getCategoryColor = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-800",
      red: "bg-red-100 text-red-800", 
      purple: "bg-purple-100 text-purple-800",
      green: "bg-green-100 text-green-800"
    };
    return colors[color] || colors.blue;
  };

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <SEOHead
        title="Häufige Fragen (FAQ) - Versicherungen vergleichen | versicherungsofort.de"
        description="Antworten auf häufige Fragen zu Versicherungen: Kfz-Versicherung wechseln, PKV, Berufsunfähigkeit, Haftpflicht und mehr. Alle wichtigen Infos kompakt erklärt."
        keywords="Versicherung FAQ, Kfz-Versicherung Fragen, Versicherung wechseln, Versicherungsvergleich Hilfe"
        structuredData={faqStructuredData}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Häufig gestellte Fragen (FAQ)
          </h1>
          <p className="text-xl text-gray-600">
            Hier finden Sie Antworten auf die wichtigsten Fragen rund um Versicherungen
          </p>
        </div>

        {/* Search */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Suchen Sie nach einer bestimmten Frage..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* FAQ Categories */}
        {filteredFAQs.map((category, categoryIndex) => {
          const Icon = category.icon;
          return (
            <Card key={categoryIndex} className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${getCategoryColor(category.color)}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {category.title}
                  <Badge variant="secondary">{category.faqs.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const key = `${categoryIndex}-${faqIndex}`;
                    const isExpanded = expandedItems.has(key);
                    
                    return (
                      <div key={faqIndex} className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() => toggleExpanded(categoryIndex, faqIndex)}
                          className="w-full p-4 text-left hover:bg-gray-50 flex items-center justify-between"
                        >
                          <h3 className="font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        {isExpanded && (
                          <div className="px-4 pb-4 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}

        {/* No Results */}
        {searchTerm && filteredFAQs.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Keine Ergebnisse gefunden
              </h3>
              <p className="text-gray-600 mb-6">
                Wir konnten keine FAQ zu Ihrer Suche finden. Bitte versuchen Sie es mit einem anderen Begriff.
              </p>
              <Button onClick={() => setSearchTerm("")}>
                Alle FAQs anzeigen
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}