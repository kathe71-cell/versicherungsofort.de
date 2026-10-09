
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Shield, Menu, X, Settings, FileText, Lock, Eye, Cookie, ArrowUp, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import CookieBanner from "@/components/CookieBanner";
import InsuranceChatbot from "@/components/InsuranceChatbot";

const navigationItems = [
  { title: "Ratgeber", url: createPageUrl("Ratgeber") },
  { title: "FAQ", url: createPageUrl("FAQ") },
];

const footerLinks = [
  { title: "Impressum", url: createPageUrl("Impressum") },
  { title: "Datenschutz", url: createPageUrl("Datenschutz") },
  { title: "Haftungsausschluss", url: createPageUrl("Haftungsausschluss") },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToCategories = () => {
    // Scroll to categories section on homepage
    const element = document.getElementById('versicherungen');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on homepage, navigate to homepage first
      window.location.href = '/#versicherungen';
    }
  };

  // The canonical URL is still generated but won't be used by react-helmet.
  // It should be handled by another mechanism if needed (e.g., server-side, or a dedicated SEO component).
  const canonicalUrl = `https://versicherungsofort.de${location.pathname}`;

  return (
    <div className="min-h-screen bg-white">
      {/* react-helmet and its content for canonical URL and robots meta tag are removed here */}
      {/* If SEO meta tags are still needed, they should be managed via a different component or server-side rendering. */}

      <style>
        {`
          :root {
            --primary: 220 90% 56%;
            --primary-foreground: 220 100% 98%;
            --secondary: 145 63% 49%;
            --secondary-foreground: 145 100% 96%;
            --accent: 200 100% 97%;
            --accent-foreground: 220 90% 56%;
            --muted: 220 13% 95%;
            --muted-foreground: 220 8% 35%;
            --card: 0 0% 100%;
            --card-foreground: 220 13% 13%;
            --popover: 0 0% 100%;
            --popover-foreground: 220 13% 13%;
            --border: 220 13% 91%;
            --input: 220 13% 91%;
            --ring: 220 90% 56%;
            --radius: 0.75rem;
          }
        `}
      </style>

      {/* Header - Glassmorphism Edition */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="flex items-baseline">
                  <span className="text-2xl font-black text-slate-900 tracking-tight">versicherung</span>
                  <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">sofort.de</span>
                </div>
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-slate-500 -mt-1 block">Smarter Vergleichen</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-2 items-center">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    location.pathname === item.url
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <button onClick={scrollToCategories}>
                <Button 
                  className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Jetzt vergleichen
                </Button>
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 border-l border-slate-200">
                <SheetHeader>
                  <SheetTitle className="text-left flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-black text-slate-900">versicherungsofort.de</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-8 space-y-4">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.url}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-base font-bold transition-all ${
                        location.pathname === item.url
                          ? "bg-blue-50 text-blue-700"
                          : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                      }`}
                    >
                      {item.title}
                    </Link>
                  ))}
                  <div className="pt-6 border-t border-slate-100">
                    <button onClick={() => { scrollToCategories(); setMobileMenuOpen(false); }} className="w-full">
                      <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-xl py-6 text-lg font-bold shadow-lg">
                        Jetzt vergleichen
                      </Button>
                    </button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      


      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 rounded-full w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
          size="icon"
          aria-label="Nach oben scrollen"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">versicherungsofort.de</span>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Ihr vertrauensvoller Partner für den schnellen und sicheren Versicherungsvergleich. 
                Wir helfen Ihnen dabei, die beste Versicherung zum optimalen Preis zu finden.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <Lock className="w-4 h-4" />
                  <span>SSL-verschlüsselt</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="w-4 h-4" />
                  <span>DSGVO-konform</span>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Rechtliches</h3>
              <ul className="space-y-2 text-sm">
                {footerLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      to={link.url}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Signals */}
            <div>
              <h3 className="font-semibold text-white mb-4">Service</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Eye className="w-4 h-4" />
                  <span>100% Transparenz</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <FileText className="w-4 h-4" />
                  <span>Kostenloser Service</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Lock className="w-4 h-4" />
                  <span>Sichere Datenübertragung</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <a 
                    href="https://kontosofort.de" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    → kontosofort.de
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div>
                © 2025 versicherungsofort.de - Alle Rechte vorbehalten
              </div>
              <div className="text-xs">
                <p>
                  Hinweis: Für vermittelte Verträge erhalten wir Provisionen von Produktpartnern.
                </p>
              </div>
            </div>
          </div>
        </div>
      
            <div className="mt-8 p-4 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-300">
              <span className="font-bold text-white block mb-1">Projektübernahme</span>
              <p className="mb-2">Interesse an der Übernahme von versicherungsofort.de inklusive Projekt?</p>
              <a href="/projektuebernahme" className="text-blue-400 hover:text-blue-300 font-medium">
                Mehr erfahren &rarr;
              </a>
            </div>

</footer>

      {/* Cookie Banner */}
      <CookieBanner />

      {/* Insurance Chatbot */}
      <InsuranceChatbot />
    </div>
  );
}
