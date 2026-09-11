import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import SEOHead from "@/components/SEOHead";
import { 
  BookOpen, Clock, TrendingUp, Shield, Car, Heart, 
  House, Briefcase, Calculator, CheckCircle, ArrowRight 
} from 'lucide-react';

const ratgeberArticles = [
  {
    category: "Kfz-Versicherung",
    icon: Car,
    color: "blue",
    articles: [
      {
        title: "Kfz-Wechselsaison: Fristen & Spartipps 2025",
        description: "Ende November ist Stichtag! Alles über die Wechselsaison 2025 und wie Sie hunderte Euro sparen",
        readTime: "5 min",
        url: createPageUrl("blog-kfz-wechselsaison-fristen-spartipps-2025")
      },
      {
        title: "Sonderkündigung richtig nutzen",
        description: "Bei Beitragserhöhung oder nach Schaden: So nutzen Sie Ihr Sonderkündigungsrecht optimal",
        readTime: "4 min",
        url: createPageUrl("blog-sonderkuendigung-kfz-versicherung")
      },
      {
        title: "Kfz-Versicherung wechseln: Der ultimative Guide",
        description: "Alles was Sie über den Wechsel der Autoversicherung wissen müssen",
        readTime: "5 min",
        url: createPageUrl("kfz-versicherung")
      },
      {
        title: "Schadenfreiheitsklasse verstehen und nutzen",
        description: "Wie Sie Ihre SF-Klasse optimal für günstige Beiträge einsetzen",
        readTime: "4 min",
        url: createPageUrl("kfz-versicherung")
      },
      {
        title: "Vollkasko vs. Teilkasko: Was lohnt sich?",
        description: "Der detaillierte Vergleich der Kaskoversicherungen",
        readTime: "6 min",
        url: createPageUrl("kfz-versicherung")
      },
      {
        title: "Motorradversicherung: Saisonkennzeichen optimal nutzen",
        description: "So sparen Sie bei der Motorradversicherung richtig",
        readTime: "4 min",
        url: createPageUrl("motorrad-versicherung")
      }
    ]
  },
  {
    category: "Krankenversicherung",
    icon: Heart,
    color: "red",
    articles: [
      {
        title: "Private Krankenversicherung: Vor- und Nachteile",
        description: "Wann sich der Wechsel in die PKV lohnt",
        readTime: "7 min",
        url: createPageUrl("PKV")
      },
      {
        title: "PKV für Beamte: Beihilfe optimal ergänzen",
        description: "So finden Sie die beste Beamten-PKV",
        readTime: "5 min",
        url: createPageUrl("PKV-Beamte")
      },
      {
        title: "Krankenzusatzversicherung: Sinnvolle Ergänzung",
        description: "Welche Zusatzversicherungen lohnen sich wirklich?",
        readTime: "6 min",
        url: createPageUrl("Krankenzusatz")
      },
      {
        title: "PKV für Studenten: Lohnt sich der Wechsel?",
        description: "Vor- und Nachteile der privaten Krankenversicherung im Studium",
        readTime: "4 min",
        url: createPageUrl("PKV-Studenten")
      },
      {
        title: "PKV ab 55: Auch im Alter noch möglich",
        description: "Worauf Sie beim späten PKV-Wechsel achten sollten",
        readTime: "5 min",
        url: createPageUrl("PKV-55")
      }
    ]
  },
  {
    category: "Berufsunfähigkeit & Vorsorge",
    icon: Briefcase,
    color: "purple",
    articles: [
      {
        title: "Berufsunfähigkeitsversicherung: Der wichtigste Schutz",
        description: "Warum jeder eine BU-Versicherung braucht",
        readTime: "8 min",
        url: createPageUrl("Berufsunfähigkeit")
      },
      {
        title: "Private Rentenversicherung: Altersvorsorge planen",
        description: "So sichern Sie sich eine lebenslange Zusatzrente",
        readTime: "6 min",
        url: createPageUrl("Rente")
      },
      {
        title: "Lebensversicherung: Familie optimal absichern",
        description: "Kapital aufbauen und Hinterbliebene schützen",
        readTime: "7 min",
        url: createPageUrl("Lebensversicherung")
      },
      {
        title: "Risikolebensversicherung: Günstiger Familienschutz",
        description: "Hohe Absicherung für wenig Geld",
        readTime: "5 min",
        url: createPageUrl("Risikolebensversicherung")
      },
      {
        title: "Unfallversicherung: 24/7 Schutz vor Unfallfolgen",
        description: "Was die private Unfallversicherung leistet",
        readTime: "4 min",
        url: createPageUrl("Unfallversicherung")
      },
      {
        title: "Riester-Rente: Staatliche Förderung optimal nutzen",
        description: "Lohnt sich Riestern noch?",
        readTime: "6 min",
        url: createPageUrl("Riester")
      },
      {
        title: "Rürup-Rente: Steuern sparen mit der Basisrente",
        description: "Altersvorsorge für Selbstständige und Besserverdiener",
        readTime: "5 min",
        url: createPageUrl("Rürup")
      },
      {
        title: "Pflegezusatzversicherung: Schutz vor Pflegekosten",
        description: "Warum eine Pflegezusatzversicherung sinnvoll ist",
        readTime: "5 min",
        url: createPageUrl("Pflege")
      }
    ]
  },
  {
    category: "Haftpflicht & Sachversicherungen",
    icon: House,
    color: "green",
    articles: [
      {
        title: "Privathaftpflicht: Millionenschutz für wenige Euro",
        description: "Warum die Haftpflicht die wichtigste Versicherung ist",
        readTime: "4 min",
        url: createPageUrl("Haftpflicht")
      },
      {
        title: "Hausratversicherung: Was ist wirklich versichert?",
        description: "Alle Leistungen und Ausschlüsse im Überblick",
        readTime: "5 min",
        url: createPageUrl("Hausrat")
      },
      {
        title: "Wohngebäudeversicherung: Immobilie optimal schützen",
        description: "Der richtige Schutz für Hausbesitzer",
        readTime: "6 min",
        url: createPageUrl("Wohngebäude")
      },
      {
        title: "Tierhalterhaftpflicht: Schutz für Tierhalter",
        description: "Wann Sie eine spezielle Tierhalterhaftpflicht brauchen",
        readTime: "4 min",
        url: createPageUrl("Tierhalterhaftpflicht")
      },
      {
        title: "Hundekrankenversicherung: Tierarztkosten absichern",
        description: "Lohnt sich eine Krankenversicherung für den Hund?",
        readTime: "4 min",
        url: createPageUrl("Hundekrankenversicherung")
      },
      {
        title: "Grundbesitzerhaftpflicht: Schutz für Immobilienbesitzer",
        description: "Verkehrssicherungspflicht richtig absichern",
        readTime: "5 min",
        url: createPageUrl("Grundbesitzerhaftpflicht")
      },
      {
        title: "Rechtsschutzversicherung: Anwaltskosten absichern",
        description: "In welchen Bereichen Rechtsschutz sinnvoll ist",
        readTime: "5 min",
        url: createPageUrl("Rechtsschutz")
      },
      {
        title: "Firmenversicherung: Gewerbliche Risiken absichern",
        description: "Die wichtigsten Versicherungen für Unternehmen",
        readTime: "7 min",
        url: createPageUrl("Firmenversicherung")
      }
    ]
  }
];

const tipps = [
  {
    title: "Jährlich Beiträge prüfen",
    description: "Überprüfen Sie einmal jährlich Ihre Versicherungsbeiträge und vergleichen Sie Angebote."
  },
  {
    title: "Kündigungsfristen beachten",
    description: "Die meisten Versicherungen haben eine Kündigungsfrist von einem Monat zum Jahresende."
  },
  {
    title: "Sonderkündigungsrecht nutzen",
    description: "Nach einem Schaden oder bei Beitragserhöhung haben Sie oft ein Sonderkündigungsrecht."
  },
  {
    title: "Deckungssummen anpassen",
    description: "Prüfen Sie regelmäßig, ob Ihre Deckungssummen noch ausreichen."
  }
];

export default function RatgeberPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Versicherungs-Ratgeber",
    "description": "Expertenwissen rund um Versicherungen",
    "itemListElement": ratgeberArticles.flatMap((category, catIndex) =>
      category.articles.map((article, artIndex) => ({
        "@type": "ListItem",
        "position": catIndex * 10 + artIndex + 1,
        "item": {
          "@type": "Article",
          "name": article.title,
          "description": article.description,
          "url": `https://versicherungsofort.de${article.url}`
        }
      }))
    )
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

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <SEOHead
        title="Versicherungs-Ratgeber 2025 - Expertentipps & Vergleiche | versicherungsofort.de"
        description="Umfassender Ratgeber zu allen Versicherungen: Kfz, PKV, Berufsunfähigkeit, Haftpflicht & mehr. Expertenwissen, Spartipps und detaillierte Vergleiche."
        keywords="Versicherung Ratgeber, Versicherungstipps, Kfz-Versicherung Tipps, PKV Ratgeber, Versicherung Vergleich Ratgeber"
        structuredData={structuredData}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Versicherungs-Ratgeber
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expertenwissen rund um Versicherungen: Tipps, Vergleiche und Ratschläge 
            für die optimale Absicherung zu den besten Konditionen.
          </p>
        </div>

        {/* Quick Tips */}
        <Card className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              Die 4 wichtigsten Versicherungstipps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {tipps.map((tipp, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{tipp.title}</h3>
                    <p className="text-sm text-gray-600">{tipp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Categories */}
        {ratgeberArticles.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.category} className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${getCategoryColor(category.color)}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.articles.map((article, index) => (
                    <Link key={index} to={article.url}>
                      <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow group">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary" className="text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            {article.readTime}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">{article.description}</p>
                        <div className="flex items-center text-blue-600 text-sm font-medium">
                          <span>Weiterlesen</span>
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white border-none">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Bereit für den Versicherungsvergleich?
            </h2>
            <p className="text-blue-100 mb-6">
              Nutzen Sie unser Expertenwissen und finden Sie die beste Versicherung für Ihre Bedürfnisse.
            </p>
            <Link to={createPageUrl("Home")}>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Calculator className="w-5 h-5 mr-2" />
                Jetzt kostenlos vergleichen
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* SEO Content */}
        <div className="mt-16 max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Versicherungen verstehen und optimieren
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Versicherungen sind ein komplexes Thema, doch mit dem richtigen Wissen können Sie 
            viel Geld sparen und gleichzeitig optimal abgesichert sein. Unser Ratgeber hilft 
            Ihnen dabei, die richtigen Entscheidungen zu treffen.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Warum ein Versicherungsvergleich wichtig ist
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Versicherungslandschaft in Deutschland ist vielfältig und komplex. Hunderte von 
            Anbietern konkurrieren um Kunden, was zu großen Preisunterschieden führt. Ein 
            regelmäßiger Vergleich kann Ihnen helfen, jährlich mehrere hundert Euro zu sparen.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">💡 Expertentipp</h4>
            <p className="text-yellow-700 text-sm">
              Überprüfen Sie Ihre Versicherungen mindestens einmal jährlich. Viele Anbieter 
              locken Neukunden mit besonderen Konditionen, die auch für Sie interessant sein könnten.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}