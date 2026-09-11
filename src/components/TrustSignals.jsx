import React from 'react';
import { Shield, Lock, Star } from 'lucide-react';

const trustElements = [
  {
    icon: Lock,
    title: "SSL-verschlüsselt",
    description: "Ihre Daten sind sicher"
  },
  {
    icon: Shield,
    title: "DSGVO-konform",
    description: "Datenschutz nach EU-Standard"
  },
  {
    icon: Star,
    title: "Kostenloser Service",
    description: "100% unverbindlich"
  }
];

export default function TrustSignals() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustElements.map((element, index) => {
            const Icon = element.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{element.title}</h3>
                <p className="text-sm text-gray-600">{element.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}