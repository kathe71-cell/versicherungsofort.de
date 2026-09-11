import React, { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ChevronLeft } from 'lucide-react';
import IframeLoader from './IframeLoader';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function InsuranceCategory({ title, description, benefits, features, keywords, iframeId, scriptSrc }) {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="mb-8">
        <Button 
            variant="outline" 
            onClick={() => navigate(-1)} 
            className="mb-4"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Zurück
        </Button>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-xl text-gray-600">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {benefits.map((benefit, index) => (
          <Card key={index} className="bg-white/80 backdrop-blur-sm border-gray-200">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-blue-700 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="order-2 lg:order-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ihre Vorteile im Überblick</h2>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 lg:order-2">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <IframeLoader iframeId={iframeId} scriptSrc={scriptSrc} />
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-12">
        <h3 className="text-lg font-semibold text-gray-500 mb-3">Relevante Suchbegriffe</h3>
        <div className="flex flex-wrap gap-2">
          {keywords.map((keyword, index) => (
            <Badge key={index} variant="secondary">{keyword}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}