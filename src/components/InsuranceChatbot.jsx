
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X, Send, Bot, User, ExternalLink } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { createPageUrl } from "@/utils";
import { Link, useNavigate } from "react-router-dom";

const insurancePages = {
  kfz: { url: createPageUrl("Kfz"), name: "Kfz-Versicherung" },
  motorrad: { url: createPageUrl("Motorrad"), name: "Motorradversicherung" },
  pkv: { url: createPageUrl("PKV"), name: "Private Krankenversicherung" },
  "pkv-beamte": { url: createPageUrl("PKV-Beamte"), name: "PKV für Beamte" },
  "pkv-studenten": { url: createPageUrl("PKV-Studenten"), name: "PKV für Studenten" },
  "pkv-55": { url: createPageUrl("PKV-55"), name: "PKV für über 55" },
  krankenzusatz: { url: createPageUrl("Krankenzusatz"), name: "Krankenzusatzversicherung" },
  bu: { url: createPageUrl("Berufsunfähigkeit"), name: "Berufsunfähigkeitsversicherung" },
  rente: { url: createPageUrl("Rente"), name: "Private Rentenversicherung" },
  riester: { url: createPageUrl("Riester"), name: "Riester-Rente" },
  ruerup: { url: createPageUrl("Rürup"), name: "Rürup-Rente" },
  lebensversicherung: { url: createPageUrl("Lebensversicherung"), name: "Lebensversicherung" },
  risikoleben: { url: createPageUrl("Risikolebensversicherung"), name: "Risikolebensversicherung" },
  unfall: { url: createPageUrl("Unfallversicherung"), name: "Unfallversicherung" },
  pflege: { url: createPageUrl("Pflege"), name: "Pflegezusatzversicherung" },
  haftpflicht: { url: createPageUrl("Haftpflicht"), name: "Privathaftpflichtversicherung" },
  hausrat: { url: createPageUrl("Hausrat"), name: "Hausratversicherung" },
  wohngebaeude: { url: createPageUrl("wohngebaeudeversicherung"), name: "Wohngebäudeversicherung" },
  tierhalterhaftpflicht: { url: createPageUrl("Tierhalterhaftpflicht"), name: "Tierhalterhaftpflicht" },
  hundekranken: { url: createPageUrl("Hundekrankenversicherung"), name: "Hundekrankenversicherung" },
  grundbesitzer: { url: createPageUrl("Grundbesitzerhaftpflicht"), name: "Haus- und Grundbesitzerhaftpflicht" },
  rechtsschutz: { url: createPageUrl("Rechtsschutz"), name: "Rechtsschutzversicherung" },
  firma: { url: createPageUrl("Firmenversicherung"), name: "Firmenversicherung" }
};

export default function InsuranceChatbot() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hallo! 👋 Ich bin Ihr Versicherungs-Assistent. Wie kann ich Ihnen heute helfen?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const analyzeAndRespond = async (userMessage) => {
    setIsLoading(true);
    
    try {
      const prompt = `Du bist ein hilfreicher Versicherungsberater für versicherungsofort.de.
      
Nutzeranfrage: "${userMessage}"

Analysiere die Anfrage und gib eine hilfreiche Antwort. Wenn die Anfrage sich auf eine spezifische Versicherungsart bezieht, empfehle die passende Versicherung aus dieser Liste:

Verfügbare Versicherungen:
- kfz: Kfz-Versicherung (Auto)
- motorrad: Motorradversicherung
- pkv: Private Krankenversicherung
- pkv-beamte: PKV für Beamte
- pkv-studenten: PKV für Studenten
- pkv-55: PKV für über 55-Jährige
- krankenzusatz: Krankenzusatzversicherung
- bu: Berufsunfähigkeitsversicherung
- rente: Private Rentenversicherung
- riester: Riester-Rente
- ruerup: Rürup-Rente
- lebensversicherung: Lebensversicherung
- risikoleben: Risikolebensversicherung
- unfall: Unfallversicherung
- pflege: Pflegezusatzversicherung
- haftpflicht: Privathaftpflichtversicherung
- hausrat: Hausratversicherung
- wohngebaeude: Wohngebäudeversicherung
- tierhalterhaftpflicht: Tierhalterhaftpflicht
- hundekranken: Hundekrankenversicherung
- grundbesitzer: Haus- und Grundbesitzerhaftpflicht
- rechtsschutz: Rechtsschutzversicherung
- firma: Firmenversicherung

Antworte im folgenden JSON-Format:
{
  "answer": "Deine hilfreiche Antwort (2-3 Sätze, freundlich und informativ)",
  "recommendations": ["versicherungstyp1", "versicherungstyp2"] oder [] wenn keine spezifische Empfehlung
}

Beispiel:
Nutzer: "Ich brauche eine Versicherung für mein Auto"
{
  "answer": "Für Ihr Auto benötigen Sie eine Kfz-Versicherung. Diese ist gesetzlich vorgeschrieben und schützt Sie vor Schäden an fremden Fahrzeugen sowie optional an Ihrem eigenen Auto.",
  "recommendations": ["kfz"]
}`;

      const response = await base44.integrations.Core.InvokeLLM({
        prompt: prompt,
        response_json_schema: {
          type: "object",
          properties: {
            answer: { type: "string" },
            recommendations: { type: "array", items: { type: "string" } }
          },
          required: ["answer", "recommendations"]
        }
      });

      return response;
    } catch (error) {
      console.error('Error calling LLM:', error);
      return {
        answer: "Entschuldigung, ich hatte ein technisches Problem. Können Sie Ihre Frage bitte noch einmal stellen?",
        recommendations: []
      };
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');

    // Add user message
    setMessages(prev => [...prev, {
      type: 'user',
      text: userMessage,
      timestamp: new Date()
    }]);

    // Get AI response
    const aiResponse = await analyzeAndRespond(userMessage);

    // Add bot response
    setMessages(prev => [...prev, {
      type: 'bot',
      text: aiResponse.answer,
      recommendations: aiResponse.recommendations,
      timestamp: new Date()
    }]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickQuestion = async (question) => {
    if (isLoading) return; // Prevent sending if already loading a response

    setInputValue(''); // Clear the input field

    // Add user message
    setMessages(prev => [...prev, {
      type: 'user',
      text: question,
      timestamp: new Date()
    }]);

    // Get AI response
    const aiResponse = await analyzeAndRespond(question);

    // Add bot response
    setMessages(prev => [...prev, {
      type: 'bot',
      text: aiResponse.answer,
      recommendations: aiResponse.recommendations,
      timestamp: new Date()
    }]);
  };

  const quickQuestions = [
    "Welche Versicherungen sind wichtig?",
    "Kfz-Versicherung wechseln",
    "Private Krankenversicherung Vorteile",
    "Berufsunfähigkeit absichern"
  ];

  return (
    <>
      {/* Chat Button - Optisch ansprechend mit Text */}
      {!isOpen && (
        <div className="fixed bottom-24 right-6 z-40 group">
          {/* Puls-Animation für Aufmerksamkeit */}
          <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20"></div>
          
          <Button
            onClick={() => setIsOpen(true)}
            className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-2xl transition-all duration-300 hover:scale-105 px-6 py-6 rounded-full flex items-center gap-3 group"
            aria-label="Versicherungs-Assistent öffnen"
          >
            <Bot className="w-6 h-6" />
            <div className="flex flex-col items-start">
              <span className="text-sm font-bold">Versicherungs-Assistent</span>
              <span className="text-xs opacity-90">Wie kann ich helfen?</span>
            </div>
          </Button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-3rem)] h-[500px] shadow-2xl flex flex-col border-2 border-blue-200">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg p-4">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-3 text-lg">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold">Versicherungs-Assistent</div>
                  <div className="text-xs opacity-90 font-normal">Intelligente Beratung</div>
                </div>
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 h-8 w-8 rounded-full"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user' ? 'bg-blue-600' : 'bg-gradient-to-br from-blue-600 to-blue-700'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div>
                    <div className={`rounded-2xl p-3 shadow-sm ${
                      message.type === 'user' 
                        ? 'bg-blue-600 text-white rounded-tr-none' 
                        : 'bg-white text-gray-900 rounded-tl-none border border-gray-200'
                    }`}>
                      <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                    </div>
                    {message.recommendations && message.recommendations.length > 0 && (
                      <div className="mt-2 space-y-1">
                        {message.recommendations.map((rec, idx) => {
                          const insurance = insurancePages[rec];
                          if (!insurance) return null;
                          return (
                              <Button
                                key={idx}
                                variant="outline"
                                size="sm"
                                className="w-full justify-between text-xs bg-white hover:bg-blue-50 border-blue-200 hover:border-blue-400 transition-all"
                                onClick={() => {
                                  setIsOpen(false);
                                  navigate(insurance.url);
                                }}
                              >
                                <span className="font-medium">{insurance.name}</span>
                                <ExternalLink className="w-3 h-3 ml-1" />
                              </Button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none p-3 border border-gray-200">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {messages.length === 1 && (
              <div className="space-y-2">
                <p className="text-xs text-gray-600 font-semibold mb-3 flex items-center gap-2">
                  <span className="w-1 h-4 bg-blue-600 rounded"></span>
                  Häufige Fragen:
                </p>
                {quickQuestions.map((question, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    size="sm"
                    className="w-full justify-start text-left text-xs bg-white hover:bg-blue-50 border-gray-200 hover:border-blue-400 transition-all hover:shadow-md"
                    onClick={() => handleQuickQuestion(question)}
                  >
                    <span className="text-blue-600 mr-2">→</span>
                    {question}
                  </Button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </CardContent>

          <div className="p-4 border-t bg-white rounded-b-lg">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ihre Frage..."
                disabled={isLoading}
                className="flex-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
              <Button
                onClick={handleSend}
                disabled={!inputValue.trim() || isLoading}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                size="icon"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              🤖 Intelligenter Versicherungsberater
            </p>
          </div>
        </Card>
      )}
    </>
  );
}
