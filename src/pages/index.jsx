import Projektuebernahme from "./Projektuebernahme";
import React from 'react';
import Layout from "./Layout.jsx";
import Page404 from "./404";
import Berufsunfähigkeit from "./Berufsunfaehigkeit";
import Datenschutz from "./Datenschutz";
import FAQ from "./FAQ";
import Firmenversicherung from "./Firmenversicherung";
import Grundbesitzerhaftpflicht from "./Grundbesitzerhaftpflicht";
import Haftpflicht from "./Haftpflicht";
import Haftungsausschluss from "./Haftungsausschluss";
import Hausrat from "./Hausrat";
import Home from "./Home";
import Hundekrankenversicherung from "./Hundekrankenversicherung";
import Impressum from "./Impressum";
import Kfz from "./Kfz";
import Krankenzusatz from "./Krankenzusatz";
import Lebensversicherung from "./Lebensversicherung";
import Motorrad from "./Motorrad";
import PKV_55 from "./PKV-55";
import PKV_Beamte from "./PKV-Beamte";
import PKV_Studenten from "./PKV-Studenten";
import PKV from "./PKV";
import Pflege from "./Pflege";
import Ratgeber from "./Ratgeber";
import Rechtsschutz from "./Rechtsschutz";
import Rente from "./Rente";
import Riester from "./Riester";
import Risikolebensversicherung from "./Risikolebensversicherung";
import Rürup from "./Ruerup";
import Tierhalterhaftpflicht from "./Tierhalterhaftpflicht";
import Unfallversicherung from "./Unfallversicherung";
import Wohngebäudeversicherung from "./Wohngebaeudeversicherung";

// BLOG PAGES
import BlogBerufsunfaehigkeit from "./blog-berufsunfaehigkeit-ratgeber";
import BlogBerufsstarter from "./blog-fuenf-wichtigste-versicherungen-berufsstarter";
import BlogHausrat from "./blog-hausrat-versicherung-guide";
import BlogHundehaftpflicht from "./blog-hundehaftpflicht-und-tierhalter-guide";
import BlogKfzWechselsaison from "./blog-kfz-wechselsaison-fristen-spartipps-2025";
import BlogPkvVsGkv from "./blog-pkv-vs-gkv-der-ultimative-vergleich";
import BlogAltersvorsorge from "./blog-private-altersvorsorge-vergleich";
import BlogRechtsschutz from "./blog-rechtsschutzversicherung-ratgeber";
import BlogSonderkuendigung from "./blog-sonderkuendigung-kfz-versicherung";
import BlogGlossar from "./blog-versicherung-glossar";
import BlogFamilien from "./blog-versicherungen-fuer-familien";
import BlogZahnzusatz from "./blog-zahnzusatzversicherung-ratgeber";

import RechnerEmbed from "./RechnerEmbed";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    Projektuebernahme: Projektuebernahme,
    "404": Page404,
    Berufsunfähigkeit: Berufsunfähigkeit,
    Datenschutz: Datenschutz,
    FAQ: FAQ,
    Firmenversicherung: Firmenversicherung,
    Grundbesitzerhaftpflicht: Grundbesitzerhaftpflicht,
    Haftpflicht: Haftpflicht,
    Haftungsausschluss: Haftungsausschluss,
    Hausrat: Hausrat,
    Home: Home,
    Hundekrankenversicherung: Hundekrankenversicherung,
    Impressum: Impressum,
    Kfz: Kfz,
    Krankenzusatz: Krankenzusatz,
    Lebensversicherung: Lebensversicherung,
    Motorrad: Motorrad,
    "PKV-55": PKV_55,
    "PKV-Beamte": PKV_Beamte,
    "PKV-Studenten": PKV_Studenten,
    PKV: PKV,
    Pflege: Pflege,
    Ratgeber: Ratgeber,
    Rechtsschutz: Rechtsschutz,
    Rente: Rente,
    Riester: Riester,
    Risikolebensversicherung: Risikolebensversicherung,
    Rürup: Rürup,
    Tierhalterhaftpflicht: Tierhalterhaftpflicht,
    Unfallversicherung: Unfallversicherung,
    Wohngebäudeversicherung: Wohngebäudeversicherung,
    "blog-berufsunfaehigkeit-ratgeber": BlogBerufsunfaehigkeit,
    "blog-fuenf-wichtigste-versicherungen-berufsstarter": BlogBerufsstarter,
    "blog-hausrat-versicherung-guide": BlogHausrat,
    "blog-hundehaftpflicht-und-tierhalter-guide": BlogHundehaftpflicht,
    "blog-kfz-wechselsaison-fristen-spartipps-2025": BlogKfzWechselsaison,
    "blog-pkv-vs-gkv-der-ultimative-vergleich": BlogPkvVsGkv,
    "blog-private-altersvorsorge-vergleich": BlogAltersvorsorge,
    "blog-rechtsschutzversicherung-ratgeber": BlogRechtsschutz,
    "blog-sonderkuendigung-kfz-versicherung": BlogSonderkuendigung,
    "blog-versicherung-glossar": BlogGlossar,
    "blog-versicherungen-fuer-familien": BlogFamilien,
    "blog-zahnzusatzversicherung-ratgeber": BlogZahnzusatz,
};

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }
    if (urlLastPart.endsWith('.html')) {
        urlLastPart = urlLastPart.replace('.html', '');
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || "Home";
}

function PagesContent() {
    const location = useLocation();
    if (location.pathname.toLowerCase() === '/rechner-embed') {
        return <RechnerEmbed />;
    }
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/index.html" element={<Home />} />

                <Route path="/berufsunfähigkeit" element={<Berufsunfähigkeit />} />
                <Route path="/berufsunfaehigkeit" element={<Berufsunfähigkeit />} />
                <Route path="/berufsunfaehigkeit.html" element={<Berufsunfähigkeit />} />
                <Route path="/berufsunfaehigkeitsversicherung.html" element={<Berufsunfähigkeit />} />

                <Route path="/datenschutz" element={<Datenschutz />} />
                <Route path="/datenschutz.html" element={<Datenschutz />} />

                <Route path="/faq" element={<FAQ />} />
                <Route path="/faq.html" element={<FAQ />} />

                <Route path="/firmenversicherung" element={<Firmenversicherung />} />
                <Route path="/firmenversicherung.html" element={<Firmenversicherung />} />

                <Route path="/grundbesitzerhaftpflicht" element={<Grundbesitzerhaftpflicht />} />
                <Route path="/grundbesitzerhaftpflicht.html" element={<Grundbesitzerhaftpflicht />} />

                <Route path="/haftpflicht" element={<Haftpflicht />} />
                <Route path="/haftpflicht.html" element={<Haftpflicht />} />
                <Route path="/haftpflichtversicherung.html" element={<Haftpflicht />} />

                <Route path="/haftungsausschluss" element={<Haftungsausschluss />} />
                <Route path="/haftungsausschluss.html" element={<Haftungsausschluss />} />

                <Route path="/hausrat" element={<Hausrat />} />
                <Route path="/hausrat.html" element={<Hausrat />} />
                <Route path="/hausratversicherung.html" element={<Hausrat />} />

                <Route path="/hundekrankenversicherung" element={<Hundekrankenversicherung />} />
                <Route path="/hundekrankenversicherung.html" element={<Hundekrankenversicherung />} />

                <Route path="/impressum" element={<Impressum />} />
                <Route path="/impressum.html" element={<Impressum />} />

                <Route path="/kfz" element={<Kfz />} />
                <Route path="/kfz.html" element={<Kfz />} />
                <Route path="/kfz-versicherung.html" element={<Kfz />} />

                <Route path="/krankenzusatz" element={<Krankenzusatz />} />
                <Route path="/krankenzusatz.html" element={<Krankenzusatz />} />
                <Route path="/krankenzusatzversicherung.html" element={<Krankenzusatz />} />

                <Route path="/lebensversicherung" element={<Lebensversicherung />} />
                <Route path="/lebensversicherung.html" element={<Lebensversicherung />} />

                <Route path="/motorrad" element={<Motorrad />} />
                <Route path="/motorrad.html" element={<Motorrad />} />
                <Route path="/motorradversicherung.html" element={<Motorrad />} />

                <Route path="/pkv-55" element={<PKV_55 />} />
                <Route path="/pkv-55.html" element={<PKV_55 />} />

                <Route path="/pkv-beamte" element={<PKV_Beamte />} />
                <Route path="/pkv-beamte.html" element={<PKV_Beamte />} />

                <Route path="/pkv-studenten" element={<PKV_Studenten />} />
                <Route path="/pkv-studenten.html" element={<PKV_Studenten />} />

                <Route path="/pkv" element={<PKV />} />
                <Route path="/pkv.html" element={<PKV />} />

                <Route path="/pflege" element={<Pflege />} />
                <Route path="/pflege.html" element={<Pflege />} />

                <Route path="/ratgeber" element={<Ratgeber />} />
                <Route path="/ratgeber.html" element={<Ratgeber />} />

                <Route path="/rechtsschutz" element={<Rechtsschutz />} />
                <Route path="/rechtsschutz.html" element={<Rechtsschutz />} />

                <Route path="/rente" element={<Rente />} />
                <Route path="/rente.html" element={<Rente />} />

                <Route path="/riester" element={<Riester />} />
                <Route path="/riester.html" element={<Riester />} />

                <Route path="/risikolebensversicherung" element={<Risikolebensversicherung />} />
                <Route path="/risikolebensversicherung.html" element={<Risikolebensversicherung />} />

                <Route path="/rürup" element={<Rürup />} />
                <Route path="/ruerup" element={<Rürup />} />
                <Route path="/ruerup.html" element={<Rürup />} />

                <Route path="/tierhalterhaftpflicht" element={<Tierhalterhaftpflicht />} />
                <Route path="/tierhalterhaftpflicht.html" element={<Tierhalterhaftpflicht />} />

                <Route path="/unfallversicherung" element={<Unfallversicherung />} />
                <Route path="/unfallversicherung.html" element={<Unfallversicherung />} />
                <Route path="/unfall.html" element={<Unfallversicherung />} />

                <Route path="/wohngebäudeversicherung" element={<Wohngebäudeversicherung />} />
                <Route path="/wohngebaeudeversicherung" element={<Wohngebäudeversicherung />} />
                <Route path="/wohngebaeudeversicherung.html" element={<Wohngebäudeversicherung />} />
                <Route path="/wohngebaeude.html" element={<Wohngebäudeversicherung />} />

                {/* BLOG ROUTES */}
                <Route path="/blog-berufsunfaehigkeit-ratgeber" element={<BlogBerufsunfaehigkeit />} />
                <Route path="/blog-berufsunfaehigkeit-ratgeber.html" element={<BlogBerufsunfaehigkeit />} />

                <Route path="/blog-fuenf-wichtigste-versicherungen-berufsstarter" element={<BlogBerufsstarter />} />
                <Route path="/blog-fuenf-wichtigste-versicherungen-berufsstarter.html" element={<BlogBerufsstarter />} />

                <Route path="/blog-hausrat-versicherung-guide" element={<BlogHausrat />} />
                <Route path="/blog-hausrat-versicherung-guide.html" element={<BlogHausrat />} />

                <Route path="/blog-hundehaftpflicht-und-tierhalter-guide" element={<BlogHundehaftpflicht />} />
                <Route path="/blog-hundehaftpflicht-und-tierhalter-guide.html" element={<BlogHundehaftpflicht />} />

                <Route path="/blog-kfz-wechselsaison-fristen-spartipps-2025" element={<BlogKfzWechselsaison />} />
                <Route path="/blog-kfz-wechselsaison-fristen-spartipps-2025.html" element={<BlogKfzWechselsaison />} />

                <Route path="/blog-pkv-vs-gkv-der-ultimative-vergleich" element={<BlogPkvVsGkv />} />
                <Route path="/blog-pkv-vs-gkv-der-ultimative-vergleich.html" element={<BlogPkvVsGkv />} />

                <Route path="/blog-private-altersvorsorge-vergleich" element={<BlogAltersvorsorge />} />
                <Route path="/blog-private-altersvorsorge-vergleich.html" element={<BlogAltersvorsorge />} />

                <Route path="/blog-rechtsschutzversicherung-ratgeber" element={<BlogRechtsschutz />} />
                <Route path="/blog-rechtsschutzversicherung-ratgeber.html" element={<BlogRechtsschutz />} />

                <Route path="/blog-sonderkuendigung-kfz-versicherung" element={<BlogSonderkuendigung />} />
                <Route path="/blog-sonderkuendigung-kfz-versicherung.html" element={<BlogSonderkuendigung />} />

                <Route path="/blog-versicherung-glossar" element={<BlogGlossar />} />
                <Route path="/blog-versicherung-glossar.html" element={<BlogGlossar />} />

                <Route path="/blog-versicherungen-fuer-familien" element={<BlogFamilien />} />
                <Route path="/blog-versicherungen-fuer-familien.html" element={<BlogFamilien />} />

                <Route path="/blog-zahnzusatzversicherung-ratgeber" element={<BlogZahnzusatz />} />
                <Route path="/blog-zahnzusatzversicherung-ratgeber.html" element={<BlogZahnzusatz />} />

                <Route path="*" element={<Page404 />} />
            </Routes>
        </Layout>
    );
}

import VercelAnalytics from "@/components/VercelAnalytics";

export default function Pages() {
    return (
        <Router>
            <VercelAnalytics />
            <PagesContent />
        </Router>
    );
}