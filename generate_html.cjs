const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, 'src', 'pages');
const OUT_DIR = path.join(__dirname, 'html_build');
const PUBLIC_DIR = path.join(__dirname, 'public');

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true });

// --- 1. CONFIG & SYSTEM FONT STACK (DSGVO-KONFORM, KEIN GOOGLE CDN) ---

const SYSTEM_FONT_CSS = `
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
`;

const HEADER_HTML = `
<header class="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16 sm:h-20 gap-2 sm:gap-6 overflow-hidden">
            <a href="index.html" class="flex items-center space-x-2 group flex-shrink">
                <div class="w-8 h-8 sm:w-10 sm:h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-xs group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                    <i data-lucide="shield" class="w-4 h-4 sm:w-5 sm:h-5 text-white"></i>
                </div>
                <div class="flex items-baseline tracking-tighter truncate">
                    <span class="text-base sm:text-xl font-black text-slate-900">versicherung</span>
                    <span class="text-base sm:text-xl font-extrabold text-blue-600">sofort</span>
                </div>
            </a>

            <!-- Volltextsuche Trigger-Button (Desktop & Tablet) -->
            <div class="flex-1 max-w-md hidden md:block">
                <button type="button" onclick="openSearchModal()" class="w-full flex items-center justify-between px-4 py-2.5 bg-slate-100/90 hover:bg-slate-200/70 text-slate-500 rounded-full border border-slate-200 hover:border-slate-300 text-xs font-medium transition-all shadow-inner group cursor-pointer">
                    <span class="flex items-center gap-2">
                        <i data-lucide="search" class="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors"></i>
                        <span class="truncate">Versicherung, Ratgeber oder Begriff suchen...</span>
                    </span>
                    <kbd class="hidden lg:inline-flex items-center gap-0.5 px-2 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-400 shadow-xs flex-shrink-0">⌘K</kbd>
                </button>
            </div>

            <nav class="flex items-center gap-2 sm:gap-6 flex-shrink-0">
                <!-- Mobile Search Icon Button -->
                <button type="button" onclick="openSearchModal()" aria-label="Suche öffnen" class="md:hidden w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-all border border-slate-200 cursor-pointer">
                    <i data-lucide="search" class="w-4 h-4 sm:w-5 sm:h-5"></i>
                </button>
                <div class="hidden lg:flex space-x-7 items-center">
                    <a href="ratgeber.html" class="text-xs font-black text-slate-600 hover:text-blue-600 uppercase tracking-widest transition-colors">Ratgeber</a>
                    <a href="faq.html" class="text-xs font-black text-slate-600 hover:text-blue-600 uppercase tracking-widest transition-colors">FAQ</a>
                </div>
                <a href="index.html#versicherungen" class="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-3.5 sm:px-7 py-2 sm:py-3 text-[11px] sm:text-sm font-black shadow-md shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap">
                    Tarife vergleichen*
                </a>
            </nav>
        </div>
    </div>
</header>
`;

const FOOTER_HTML = `
<footer class="bg-white border-t border-slate-200 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-16">
            <div class="md:col-span-2">
                <div class="flex items-center space-x-2 mb-6">
                    <div class="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                        <i data-lucide="shield" class="w-5 h-5 text-white"></i>
                    </div>
                    <span class="text-xl font-black tracking-tighter text-slate-900">versicherungsofort.de</span>
                </div>
                <p class="text-slate-600 mb-8 text-sm max-w-md leading-relaxed font-medium">
                    Unabhängiger, transparenter Versicherungsvergleich. Wir helfen Ihnen, den passenden Schutz für jede Lebensphase zu finden – rein faktenbasiert, verständlich und digital.
                </p>
                <div class="flex flex-wrap items-center gap-6">
                    <div class="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                        <i data-lucide="lock" class="w-4 h-4 text-slate-700"></i>
                        <span>Verschlüsselte Verbindung</span>
                    </div>
                    <div class="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                        <i data-lucide="shield" class="w-4 h-4 text-slate-700"></i>
                        <span>Datenschutz nach DSGVO</span>
                    </div>
                    <div class="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                        <i data-lucide="check" class="w-4 h-4 text-slate-700"></i>
                        <span>Keine Drittanbieter-Fonts</span>
                    </div>
                </div>
            </div>
            <div>
                <h3 class="text-xs font-black text-slate-900 mb-6 uppercase tracking-[0.25em]">Rechtliches</h3>
                <ul class="space-y-4 text-sm font-semibold text-slate-600">
                    <li><a href="impressum.html" class="hover:text-blue-600 transition-colors">Impressum</a></li>
                    <li><a href="datenschutz.html" class="hover:text-blue-600 transition-colors">Datenschutzerklärung</a></li>
                    <li><a href="haftungsausschluss.html" class="hover:text-blue-600 transition-colors">Haftungsausschluss</a></li>
                </ul>
            </div>
            <div>
                <h3 class="text-xs font-black text-slate-900 mb-6 uppercase tracking-[0.25em]">Wissen & Service</h3>
                <ul class="space-y-4 text-sm font-semibold text-slate-600">
                    <li><a href="ratgeber.html" class="hover:text-blue-600 transition-colors">Versicherungs-Ratgeber</a></li>
                    <li><a href="faq.html" class="hover:text-blue-600 transition-colors">Häufige Fragen (FAQ)</a></li>
                    <li><a href="blog-versicherung-glossar.html" class="hover:text-blue-600 transition-colors">Versicherungs-Glossar</a></li>
                    <li><a href="index.html#versicherungen" class="hover:text-blue-600 transition-colors">Alle Vergleichsrechner</a></li>
                </ul>
            </div>
        </div>

        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-[11px] text-slate-500 leading-relaxed font-medium mb-12">
            <strong>* Gesetzliche Transparenz- und Werbekennzeichnung:</strong> versicherungsofort.de ist ein unabhängiges Verbraucher- und Informationsportal. Die Website steht in keinem gesellschaftsrechtlichen Verhältnis zu den verglichenen Versicherungsanbietern. Mit einem Sternchen (*) gekennzeichnete Verlinkungen und Buttons sind Partnerlinks (Affiliate-Links). Wenn Sie über diese Links einen Vergleich durchführen oder einen Vertrag abschließen, erhalten wir gegebenenfalls eine Vergütung. Für Sie als Nutzer entstehen hierdurch keinerlei Mehrkosten oder Nachteile.
        </div>

        <div class="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-400">
            <div>© 2025 versicherungsofort.de – Alle Rechte vorbehalten.</div>
            <div>Unabhängiges Portal für smarte Absicherung</div>
        </div>
    </div>
</footer>
`;

const SEARCH_INDEX = [
    // 22 Vergleichsrechner
    { title: "Kfz-Versicherung Rechner", url: "kfz.html", category: "Rechner", badgeColor: "bg-blue-100 text-blue-800 border-blue-200", icon: "car", desc: "Pkw-Haftpflicht, Teilkasko & Vollkasko. Rabatte bei Fahrzeugwechsel & Neuzulassung vergleichen.", keywords: "auto autoversicherung pkw kfz kasko teilkasko vollkasko schadenfreiheitsklasse sf rabattschutz evb zulassung wechseln" },
    { title: "Motorradversicherung Rechner", url: "motorrad.html", category: "Rechner", badgeColor: "bg-blue-100 text-blue-800 border-blue-200", icon: "gauge", desc: "Motorräder, Roller & Quads günstig versichern. Saisonkennzeichen & Kasko-Optionen.", keywords: "motorrad moped roller quad kraftrad krad teilkasko saisonkennzeichen" },
    { title: "Privathaftpflicht Rechner", url: "haftpflicht.html", category: "Rechner", badgeColor: "bg-blue-100 text-blue-800 border-blue-200", icon: "shield", desc: "Existenzschutz ab ca. 2 € im Monat. Bis zu 50 Mio. € Deckung für Singles, Paare & Familien.", keywords: "haftpflicht privathaftpflicht phv missgeschick schluesselverlust mietsachschaden single familie deliktsunfaehig" },
    { title: "Hausratversicherung Rechner", url: "hausrat.html", category: "Rechner", badgeColor: "bg-blue-100 text-blue-800 border-blue-200", icon: "home", desc: "Schutz für Möbel, Elektronik & Wertsachen bei Einbruch, Feuer, Wasser & Elementarschäden.", keywords: "hausrat wohnung haus einbruch diebstahl feuer leitungswasser sturm fahrrad fahrraddiebstahl elementarschutz" },
    { title: "Private Krankenversicherung (PKV)", url: "pkv.html", category: "Rechner", badgeColor: "bg-blue-100 text-blue-800 border-blue-200", icon: "heart-pulse", desc: "Erstklassige medizinische Versorgung, Chefarzt & Einbettzimmer für Angestellte, Selbstständige & Beamte.", keywords: "pkv private krankenversicherung krankenvollversicherung chefarzt selbststaendige freiberufler beitragsentlastung" },
    { title: "PKV für Beamte & Anwärter", url: "pkv-beamte.html", category: "Rechner", badgeColor: "bg-blue-100 text-blue-800 border-blue-200", icon: "user-check", desc: "Beihilfe-Ergänzungstarife mit bis zu 50-70% Beihilfebemessungssatz für Bund und Länder.", keywords: "beamte anwaerter referendare beihilfe lehrer lehramt polizei justiz restkosten" },
    { title: "PKV für Studenten", url: "pkv-studenten.html", category: "Rechner", badgeColor: "bg-blue-100 text-blue-800 border-blue-200", icon: "graduation-cap", desc: "Günstige Krankenversicherung für Studierende bis zum 30. Lebensjahr mit Top-Leistungen.", keywords: "studenten studium universitaet hochschule semester studentische krankenversicherung praktikum" },
    { title: "PKV Tarifwechsel & Optimierung ab 55", url: "pkv-55.html", category: "Rechner", badgeColor: "bg-blue-100 text-blue-800 border-blue-200", icon: "users", desc: "Beitragssenkung im Alter, Standardtarif, Basistarif & interner Tarifwechsel nach § 204 VVG.", keywords: "pkv55 pkv ab 55 tarifwechsel vvg 204 beitragssenkung basistarif standardtarif altersrueckstellung" },
    { title: "Pflegezusatzversicherung Rechner", url: "pflege.html", category: "Rechner", badgeColor: "bg-blue-100 text-blue-800 border-blue-200", icon: "activity", desc: "Pflegetagegeld & Kostenschutz für Pflegegrade 1-5. Schützt das private Vermögen der Familie.", keywords: "pflege pflegegrade pflegegrad pflegetagegeld demenz pflegekosten pflegeheim ambulant stationaer" },
    { title: "Zahnzusatz & Krankenzusatz Rechner", url: "krankenzusatz.html", category: "Rechner", badgeColor: "bg-blue-100 text-blue-800 border-blue-200", icon: "smile", desc: "Bis zu 100% Erstattung für Zahnersatz, Implantate, professionelle Zahnreinigung (PZR) & Inlays.", keywords: "zahn zahnzusatz zaehne implantat pzr zahnreinigung kieferorthopaedie inlays zahnersatz krankenhaus brille" },
    { title: "Berufsunfähigkeitsversicherung (BU)", url: "berufsunfaehigkeit.html", category: "Rechner", badgeColor: "bg-blue-100 text-blue-800 border-blue-200", icon: "briefcase", desc: "Arbeitskraft- und Einkommensschutz bei schwerer Krankheit oder Unfall. Ohne abstrakte Verweisung.", keywords: "bu berufsunfaehigkeit arbeitskraft einkommen rente bu-rente krankheit unfall bu-schutz" },
    { title: "Rechtsschutzversicherung Rechner", url: "rechtsschutz.html", category: "Rechner", badgeColor: "bg-blue-100 text-blue-800 border-blue-200", icon: "scale", desc: "Kostenübernahme für Anwälte, Gutachter & Gerichte. Privat-, Berufs-, Verkehrs- & Mietrechtsschutz.", keywords: "rechtsschutz anwalt gericht verkehrsrechtsschutz arbeitsrecht mietrecht kuendigung klage streit" },
    { title: "Hundehaftpflicht & Tierhalter Rechner", url: "tierhalterhaftpflicht.html", category: "Rechner", badgeColor: "bg-blue-100 text-blue-800 border-blue-200", icon: "dog", desc: "Gesetzliche Haftpflicht für Hunde & Pferde ab ca. 3,50 €/Monat. Inklusive Mietsachschäden & Leinenzwang.", keywords: "hund hunde hundehaftpflicht pferd pferde tierhalter leine biss mietschaeden tierschaeden" },
    { title: "Hundekrankenversicherung & OP-Schutz", url: "hundekrankenversicherung.html", category: "Rechner", badgeColor: "bg-blue-100 text-blue-800 border-blue-200", icon: "heart", desc: "Übernahme hoher Tierarzt- und Operationskosten nach GOT. Freie Wahl des Tierarztes oder Tierklinik.", keywords: "hundekranken hundekrankenversicherung op tierarzt tierklinik got welpe hund medizin behandlung" },
    { title: "Unfallversicherung Rechner", url: "unfallversicherung.html", category: "Rechner", badgeColor: "bg-blue-100 text-blue-800 border-blue-200", icon: "shield-alert", desc: "24-Stunden-Rundumschutz weltweit für Freizeit & Beruf mit Progression und lebenslanger Unfallrente.", keywords: "unfall unfallversicherung invaliditaet progression unfallrente bergung freizeit freizeitunfall" },
    { title: "Private Rentenversicherung Rechner", url: "rente.html", category: "Rechner", badgeColor: "bg-blue-100 text-blue-800 border-blue-200", icon: "coins", desc: "Flexible Altersvorsorge mit lebenslanger Rentengarantie, ETF-Optionen & Steuervorteilen im Alter.", keywords: "rente rentenversicherung altersvorsorge ruhestand etf rendite sparplan lebenslang" },
    { title: "Riester-Rente Rechner", url: "riester.html", category: "Rechner", badgeColor: "bg-blue-100 text-blue-800 border-blue-200", icon: "landmark", desc: "Staatliche Zulagen (Grundzulage + Kinderzulagen) & Steuervorteile durch Sonderausgabenabzug sichern.", keywords: "riester riesterrente zulagen kinderzulage staatlich sonderausgaben wohnriester foerderung" },
    { title: "Rürup-Rente (Basisrente) Rechner", url: "ruerup.html", category: "Rechner", badgeColor: "bg-blue-100 text-blue-800 border-blue-200", icon: "trending-up", desc: "Maximale Steuerersparnis für Selbstständige, Freiberufler & Gutverdiener. Insolvenz- und pfändungssicher.", keywords: "ruerup rueruprente basisrente selbststaendige steuern sparen freiberufler steuerabzug" },
    { title: "Risikolebensversicherung (RLV) Rechner", url: "risikolebensversicherung.html", category: "Rechner", badgeColor: "bg-blue-100 text-blue-800 border-blue-200", icon: "life-buoy", desc: "Günstiger Todesfallschutz zur Absicherung von Familie, Kindern und Immobilien-Darlehen.", keywords: "risikoleben rlv todesfall kredit baufinanzierung hinterbliebene absicherung darlehen konstante summe" },
    { title: "Kapitallebensversicherung Rechner", url: "lebensversicherung.html", category: "Rechner", badgeColor: "bg-blue-100 text-blue-800 border-blue-200", icon: "umbrella", desc: "Kombination aus sicherem Hinterbliebenenschutz und garantierten Ersparnissen für das Alter.", keywords: "lebensversicherung kapitalleben sparbeitrag todesfall kapital kapitalauszahlung vermoegensaufbau" },
    { title: "Haus- & Grundbesitzerhaftpflicht Rechner", url: "grundbesitzerhaftpflicht.html", category: "Rechner", badgeColor: "bg-blue-100 text-blue-800 border-blue-200", icon: "building-2", desc: "Schutz für Vermieter, Eigentümergemeinschaften und Eigentümer unbebauter Grundstücke.", keywords: "grundbesitzer vermieter eigentum mietshaus streupflicht gehweg verkehrssicherung dachziegel" },
    { title: "Firmen- & Gewerbeversicherung Rechner", url: "firmenversicherung.html", category: "Rechner", badgeColor: "bg-blue-100 text-blue-800 border-blue-200", icon: "building", desc: "Betriebshaftpflicht, Inhaltsversicherung & Gewerberechtsschutz für Unternehmer und Betriebe.", keywords: "gewerbe firma betrieb betriebshaftpflicht inhaltsversicherung firmenversicherung unternehmen selbstaendig" },
    { title: "Wohngebäudeversicherung Rechner", url: "wohngebaeudeversicherung.html", category: "Rechner", badgeColor: "bg-blue-100 text-blue-800 border-blue-200", icon: "home", desc: "Optimaler Schutz für Haus- & Immobilieneigentümer bei Feuer, Leitungswasser, Sturm & Elementarschäden.", keywords: "wohngebaeude wohngebaeudeversicherung haus gebaeudeversicherung immobilie eigenheim unfall elementar starkregen rohrbruch photovoltaik" },

    // 12 Ratgeber & Guide-Artikel
    { title: "Ratgeber: 5 wichtigste Versicherungen für Berufsstarter", url: "blog-fuenf-wichtigste-versicherungen-berufsstarter.html", category: "Ratgeber", badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200", icon: "book-open", desc: "Welche Policen zum Berufseinstieg Pflicht sind und worauf junge Erwachsene verzichten können.", keywords: "berufsstarter ausbildung erster job karriere junge leute absicherung wichtig haftpflicht bu" },
    { title: "Ratgeber: PKV vs. GKV Systemvergleich 2025", url: "blog-pkv-vs-gkv-der-ultimative-vergleich.html", category: "Ratgeber", badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200", icon: "book-open", desc: "Kosten, Leistungen, Familienversicherung & Wechselgrenzen im direkten Gegenüberstellungs-Check.", keywords: "pkv gkv gesetzlich privat krankenversicherung vorteile nachteile unterschiede jaei grenze vergleich" },
    { title: "Ratgeber: Zahnzusatzversicherung – Worauf achten?", url: "blog-zahnzusatzversicherung-ratgeber.html", category: "Ratgeber", badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200", icon: "book-open", desc: "Wartezeiten, Zahnstaffel, Implantat-Kosten & professionelle Zahnreinigung verständlich erklärt.", keywords: "zahnzusatz ratgeber zahnstaffel wartezeit zahnreinigung eigenanteil zahnarzt implantat" },
    { title: "Ratgeber: Hundehaftpflicht & Tierhalter Guide", url: "blog-hundehaftpflicht-und-tierhalter-guide.html", category: "Ratgeber", badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200", icon: "book-open", desc: "Gesetzliche Pflicht nach Bundesländern, Gefährdungshaftung & sinnvoller OP-Kostenschutz.", keywords: "hundehaftpflicht ratgeber pflicht bundesland leinenzwang tierschutz tierschaeden hund" },
    { title: "Ratgeber: Kfz-Wechselsaison – Stichtag 30. November", url: "blog-kfz-wechselsaison-fristen-spartipps-2025.html", category: "Ratgeber", badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200", icon: "book-open", desc: "Wie Sie bis zu mehrere hundert Euro sparen, Kündigungsfristen einhalten und Rabatte sichern.", keywords: "kfz wechsel stichtag 30 november kuendigung frist autoversicherung kfz-wechsel spartipps" },
    { title: "Ratgeber: Sonderkündigungsrecht Kfz-Versicherung", url: "blog-sonderkuendigung-kfz-versicherung.html", category: "Ratgeber", badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200", icon: "book-open", desc: "Beitragserhöhung erhalten? So kündigen Sie Ihre Autoversicherung auch außerhalb der regulären Frist.", keywords: "sonderkuendigung kfz preiserhoehung beitragserhoehung kuendigen 4 wochen frist musterkuendigung" },
    { title: "Ratgeber: Hausratversicherung & Elementarschäden", url: "blog-hausrat-versicherung-guide.html", category: "Ratgeber", badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200", icon: "book-open", desc: "Überschwemmung, Starkregen, Unterversicherungsverzicht und Quadratmeter-Faustformel.", keywords: "hausrat ratgeber starkregen hochwasser ueberschwemmung quadratmeter fahrrad" },
    { title: "Ratgeber: Berufsunfähigkeit – Gesundheitsfragen", url: "blog-berufsunfaehigkeit-ratgeber.html", category: "Ratgeber", badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200", icon: "book-open", desc: "Warum wahrheitsgemäße Angaben bei Vorerkrankungen über die spätere Rentenauszahlung entscheiden.", keywords: "bu ratgeber gesundheitsfragen vorerkrankungen arztakte vorvertragliche anzeigepflicht" },
    { title: "Ratgeber: Private Altersvorsorge im Vergleich", url: "blog-private-altersvorsorge-vergleich.html", category: "Ratgeber", badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200", icon: "book-open", desc: "Klassische Rente, ETF-Rentenversicherung, Riester oder Rürup? Welches Modell für wen passt.", keywords: "altersvorsorge ratgeber rendite steuervergleich schichten etf-sparplan ruhestand" },
    { title: "Ratgeber: Versicherungen für Familien", url: "blog-versicherungen-fuer-familien.html", category: "Ratgeber", badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200", icon: "book-open", desc: "Vollständiger Absicherungs-Check für Eltern und Kinder: Haftpflicht, RLV, Unfall & Sparpläne.", keywords: "familie kinder eltern baby familienschutz absicherung sparplan schutz" },
    { title: "Ratgeber: Rechtsschutzversicherung ohne Wartezeit?", url: "blog-rechtsschutzversicherung-ratgeber.html", category: "Ratgeber", badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200", icon: "book-open", desc: "In welchen Bereichen wie Verkehrsrechtsschutz der Versicherungsschutz sofort ab Tag 1 greift.", keywords: "rechtsschutz ratgeber wartezeit verkehrsrecht anwaltskosten streitfall soforthilfe" },
    { title: "Versicherungs-Glossar: Fachbegriffe erklärt", url: "blog-versicherung-glossar.html", category: "Ratgeber", badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200", icon: "book-open", desc: "Selbstbeteiligung, Obliegenheit, Deckungssumme, Unterversicherung & Regress einfach erklärt.", keywords: "glossar fachbegriffe erklaerung lexikon definition obliegenheit selbstbeteiligung grobe fahrlaessigkeit" },

    // FAQ & Ratgeber-Übersicht
    { title: "Häufig gestellte Fragen (FAQ)", url: "faq.html", category: "FAQ", badgeColor: "bg-amber-100 text-amber-900 border-amber-200", icon: "help-circle", desc: "Antworten zu Rechnernutzung, Unverbindlichkeit, Datenschutz, Kündigungsfristen & Datensicherheit.", keywords: "faq fragen antworten hilfe kostenlos unverbindlich datenschutz sicherheit kuendigung wechsel" },
    { title: "Versicherungs-Ratgeber Gesamtübersicht", url: "ratgeber.html", category: "Ratgeber", badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200", icon: "book-open", desc: "Alle Fachartikel, Leitfäden und Spartipps für private und gewerbliche Absicherung im Überblick.", keywords: "ratgeber artikel blog uebersicht spartipps guides informationen" }
];

const SEARCH_MODAL_HTML = `
<!-- Volltextsuche Modal -->
<div id="site-search-modal" class="fixed inset-0 z-[100] hidden items-start justify-center pt-12 sm:pt-20 px-4 bg-slate-950/70 backdrop-blur-md transition-all duration-200" onclick="if(event.target === this) closeSearchModal()">
    <div class="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-150" onclick="event.stopPropagation()">
        <!-- Header / Search input -->
        <div class="p-4 sm:p-5 border-b border-slate-100 flex items-center gap-3 bg-slate-50/70">
            <i data-lucide="search" class="w-5 h-5 text-blue-600 flex-shrink-0"></i>
            <input id="site-search-input" type="search" autocomplete="off" spellcheck="false" placeholder="Versicherung, Ratgeber oder Begriff suchen..." class="w-full bg-transparent text-slate-900 placeholder-slate-400 font-bold text-base sm:text-lg focus:outline-none" oninput="performSiteSearch(this.value)" onkeydown="handleSearchKey(event)">
            <button type="button" onclick="closeSearchModal()" class="w-8 h-8 rounded-full bg-slate-200/70 hover:bg-slate-300/70 text-slate-600 flex items-center justify-center transition-colors flex-shrink-0 cursor-pointer" aria-label="Schließen">
                <i data-lucide="x" class="w-4 h-4"></i>
            </button>
        </div>

        <!-- Quick Tags -->
        <div class="px-4 py-2.5 bg-white border-b border-slate-100 flex flex-wrap items-center gap-1.5 text-xs">
            <span class="text-slate-400 font-bold mr-1 text-[11px] uppercase tracking-wider">Beliebt:</span>
            <button type="button" onclick="quickFillSearch('Kfz')" class="px-2.5 py-1 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 rounded-full font-bold transition-all cursor-pointer">Kfz</button>
            <button type="button" onclick="quickFillSearch('Haftpflicht')" class="px-2.5 py-1 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 rounded-full font-bold transition-all cursor-pointer">Haftpflicht</button>
            <button type="button" onclick="quickFillSearch('Zahnzusatz')" class="px-2.5 py-1 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 rounded-full font-bold transition-all cursor-pointer">Zahnzusatz</button>
            <button type="button" onclick="quickFillSearch('PKV')" class="px-2.5 py-1 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 rounded-full font-bold transition-all cursor-pointer">PKV</button>
            <button type="button" onclick="quickFillSearch('Pflege')" class="px-2.5 py-1 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 rounded-full font-bold transition-all cursor-pointer">Pflege</button>
            <button type="button" onclick="quickFillSearch('Berufsunfähigkeit')" class="px-2.5 py-1 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 rounded-full font-bold transition-all cursor-pointer">BU</button>
            <button type="button" onclick="quickFillSearch('Hund')" class="px-2.5 py-1 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 rounded-full font-bold transition-all cursor-pointer">Hunde</button>
            <button type="button" onclick="quickFillSearch('Kündigung')" class="px-2.5 py-1 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 rounded-full font-bold transition-all cursor-pointer">Kündigung</button>
        </div>

        <!-- Result list -->
        <div id="site-search-results" class="overflow-y-auto p-3 sm:p-4 space-y-1.5 flex-1 divide-y divide-slate-100">
            <!-- Dynamically populated via JS -->
        </div>

        <!-- Footer -->
        <div class="px-4 py-3 bg-slate-50 border-t border-slate-100 text-[11px] font-semibold text-slate-400 flex items-center justify-between">
            <span class="flex items-center gap-1.5"><i data-lucide="zap" class="w-3.5 h-3.5 text-blue-600"></i> Sofort-Treffer für alle 22 Sparten & Ratgeber</span>
            <span class="hidden sm:inline-flex items-center gap-1">Navigation: <kbd class="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px]">↑</kbd> <kbd class="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px]">↓</kbd> <kbd class="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px]">Enter</kbd> | <kbd class="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px]">ESC</kbd></span>
        </div>
    </div>
</div>
`;

const SEARCH_SCRIPT_HTML = `
<script>
(function() {
    var searchData = ` + JSON.stringify(SEARCH_INDEX) + `;
    var modal = document.getElementById('site-search-modal');
    var input = document.getElementById('site-search-input');
    var resultsBox = document.getElementById('site-search-results');
    var selectedIndex = -1;

    window.openSearchModal = function() {
        if (!modal) return;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
        setTimeout(function() {
            if (input) {
                input.focus();
                input.select();
            }
            if (window.lucide) lucide.createIcons();
        }, 50);
        performSiteSearch(input ? input.value : '');
    };

    window.closeSearchModal = function() {
        if (!modal) return;
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
    };

    window.quickFillSearch = function(val) {
        if (input) {
            input.value = val;
            performSiteSearch(val);
            input.focus();
        }
    };

    function normalizeText(str) {
        return (str || '').toLowerCase()
            .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
            .replace(/[^a-z0-9]/g, ' ');
    }

    window.performSiteSearch = function(query) {
        if (!resultsBox) return;
        var qNorm = normalizeText(query).trim();
        var terms = qNorm.split(/\\s+/).filter(Boolean);

        var matches = [];
        if (terms.length === 0) {
            matches = searchData.slice(0, 8);
        } else {
            matches = searchData.map(function(item) {
                var titleNorm = normalizeText(item.title);
                var descNorm = normalizeText(item.desc);
                var kwNorm = normalizeText(item.keywords);
                var score = 0;

                for (var i = 0; i < terms.length; i++) {
                    var t = terms[i];
                    if (titleNorm.indexOf(t) !== -1) score += 10;
                    if (kwNorm.indexOf(t) !== -1) score += 5;
                    if (descNorm.indexOf(t) !== -1) score += 2;
                }
                return { item: item, score: score };
            }).filter(function(r) { return r.score > 0; })
              .sort(function(a, b) { return b.score - a.score; })
              .map(function(r) { return r.item; });
        }

        selectedIndex = -1;

        if (matches.length === 0) {
            resultsBox.innerHTML = '<div class="py-12 text-center text-slate-500">' +
                '<i data-lucide="search-x" class="w-8 h-8 mx-auto text-slate-300 mb-3"></i>' +
                '<p class="font-bold text-slate-700 mb-1">Keine passenden Treffer gefunden</p>' +
                '<p class="text-xs text-slate-400 max-w-sm mx-auto">Versuchen Sie Begriffe wie „Kfz“, „Haftpflicht“, „Zahnzusatz“, „Pflege“ oder „Kündigung“.</p>' +
            '</div>';
            if (window.lucide) lucide.createIcons();
            return;
        }

        var html = matches.map(function(m, idx) {
            return '<a href="' + m.url + '" class="search-result-row group flex items-start justify-between p-3 rounded-2xl hover:bg-blue-50/80 transition-all border border-transparent hover:border-blue-100" data-index="' + idx + '">' +
                '<div class="flex items-start gap-3.5">' +
                    '<div class="w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-blue-600 text-slate-700 group-hover:text-white flex items-center justify-center transition-all flex-shrink-0 mt-0.5 shadow-xs">' +
                        '<i data-lucide="' + m.icon + '" class="w-4 h-4"></i>' +
                    '</div>' +
                    '<div>' +
                        '<div class="flex items-center gap-2 mb-1 flex-wrap">' +
                            '<span class="text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors">' + m.title + '</span>' +
                            '<span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ' + m.badgeColor + '">' + m.category + '</span>' +
                        '</div>' +
                        '<p class="text-xs text-slate-500 line-clamp-2 leading-relaxed font-medium">' + m.desc + '</p>' +
                    '</div>' +
                '</div>' +
                '<i data-lucide="chevron-right" class="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-2.5 ml-2"></i>' +
            '</a>';
        }).join('');

        resultsBox.innerHTML = html;
        if (window.lucide) lucide.createIcons();
    };

    window.handleSearchKey = function(e) {
        var rows = resultsBox.querySelectorAll('.search-result-row');
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIndex = Math.min(selectedIndex + 1, rows.length - 1);
            updateSelection(rows);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIndex = Math.max(selectedIndex - 1, 0);
            updateSelection(rows);
        } else if (e.key === 'Enter') {
            if (selectedIndex >= 0 && rows[selectedIndex]) {
                e.preventDefault();
                rows[selectedIndex].click();
            } else if (rows.length > 0) {
                e.preventDefault();
                rows[0].click();
            }
        } else if (e.key === 'Escape') {
            closeSearchModal();
        }
    };

    function updateSelection(rows) {
        rows.forEach(function(r, idx) {
            if (idx === selectedIndex) {
                r.classList.add('bg-blue-50', 'border-blue-200');
                r.scrollIntoView({ block: 'nearest' });
            } else {
                r.classList.remove('bg-blue-50', 'border-blue-200');
            }
        });
    }

    window.addEventListener('keydown', function(e) {
        if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
            e.preventDefault();
            openSearchModal();
        } else if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
            e.preventDefault();
            openSearchModal();
        } else if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
            closeSearchModal();
        }
    });
})();
</script>
`;

function wrapHtml(title, description, content, slug = 'index', schemaJson = null) {
    const canonicalUrl = slug === 'index' ? 'https://www.versicherungsofort.de/' : `https://www.versicherungsofort.de/${slug}`;
    const fullTitle = title.includes('versicherungsofort.de') ? title : `${title} | versicherungsofort.de`;

    const defaultSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.versicherungsofort.de/#organization",
                "name": "versicherungsofort.de",
                "url": "https://www.versicherungsofort.de",
                "logo": "https://www.versicherungsofort.de/logo.svg",
                "description": "Unabhängiger Versicherungsvergleich und Verbraucherratgeber für Deutschland."
            },
            {
                "@type": "WebSite",
                "@id": "https://www.versicherungsofort.de/#website",
                "url": "https://www.versicherungsofort.de",
                "name": "versicherungsofort.de",
                "publisher": { "@id": "https://www.versicherungsofort.de/#organization" },
                "inLanguage": "de"
            }
        ]
    };

    if (schemaJson) {
        defaultSchema["@graph"].push(schemaJson);
    }

    return `<!DOCTYPE html>
<html lang="de" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${fullTitle}</title>
    <meta name="description" content="${description || 'Unabhängiger Versicherungsvergleich für Deutschland.'}">
    <meta name="google-site-verification" content="oHbQ-TtmjyZyGEiLZ4xK8zwyxUBTHVE1tiADPULycb0">
    <link rel="canonical" href="${canonicalUrl}">
    <link rel="icon" type="image/svg+xml" href="favicon.svg">
    
    <!-- OpenGraph / Social Meta -->
    <meta property="og:type" content="website">
    <meta property="og:locale" content="de_DE">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:title" content="${fullTitle}">
    <meta property="og:description" content="${description || 'Unabhängiger Versicherungsvergleich für Deutschland.'}">
    <meta property="og:image" content="https://www.versicherungsofort.de/og-image.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:site_name" content="versicherungsofort.de">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${fullTitle}">
    <meta name="twitter:description" content="${description || 'Unabhängiger Versicherungsvergleich für Deutschland.'}">
    <meta name="twitter:image" content="https://www.versicherungsofort.de/og-image.png">
    
    <!-- Tailwind CSS CDN & Lucide Icons -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    
    <!-- Schema.org JSON-LD -->
    <script type="application/ld+json">
    ${JSON.stringify(defaultSchema, null, 2)}
    </script>

    <!-- Vercel Web Analytics (DSGVO-konform) -->
    <script>
      window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
    </script>
    <script defer type="text/javascript" src="/_vercel/insights/script.js"></script>

    <style>
        body {
            ${SYSTEM_FONT_CSS}
        }
        .tracking-tighter { letter-spacing: -0.04em; }
        .tracking-tightest { letter-spacing: -0.06em; }
        .glass { 
            background: rgba(255, 255, 255, 0.85); 
            backdrop-filter: blur(16px); 
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(226, 232, 240, 0.8);
            box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.04);
        }
        .bg-grid {
            background-size: 32px 32px;
            background-image: radial-gradient(circle, #94a3b8 0.6px, transparent 0.6px);
            opacity: 0.15;
        }
        .window-frame {
            border: 1px solid rgba(15, 23, 42, 0.08);
            box-shadow: 
                0 0 0 1px rgba(15, 23, 42, 0.02),
                0 20px 40px -12px rgba(15, 23, 42, 0.08);
        }
        .icon-pill {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(241, 245, 249, 0.8));
            backdrop-filter: blur(8px);
            border: 1px solid rgba(203, 213, 225, 0.8);
            border-radius: 16px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
            transition: all 0.3s ease;
        }
        .icon-pill i { width: 22px; height: 22px; stroke-width: 2.2px; }
        .prose h2 { font-size: 1.6rem; font-weight: 800; color: #0f172a; margin-top: 2.5rem; margin-bottom: 1.25rem; border-left: 4px solid #2563eb; padding-left: 1rem; line-height: 1.3; }
        .prose h3 { font-size: 1.25rem; font-weight: 700; color: #0f172a; margin-top: 2rem; margin-bottom: 0.75rem; }
        .prose p { margin-bottom: 1.25rem; color: #334155; line-height: 1.75; font-size: 1.05rem; }
        .prose strong, .prose b { color: #0f172a; font-weight: 700; }
        .prose ul { list-style-type: none; padding-left: 0; margin-bottom: 1.75rem; }
        .prose li { position: relative; padding-left: 1.75rem; margin-bottom: 0.75rem; color: #334155; font-weight: 500; line-height: 1.6; }
        .prose li::before { content: '✓'; position: absolute; left: 0; color: #2563eb; font-weight: 900; }
        details summary::-webkit-details-marker { display: none; }
    </style>
</head>
<body class="min-h-screen bg-slate-50/50 text-slate-900 flex flex-col antialiased relative">
    <div class="fixed inset-0 bg-grid pointer-events-none"></div>
    ${HEADER_HTML}
    <main class="flex-1 relative overflow-hidden">
        <div class="relative z-10">
            ${content}
        </div>
    </main>
    ${FOOTER_HTML}
    ${SEARCH_MODAL_HTML}
    <script>
        lucide.createIcons();
        (function enforceIframeTitles() {
            function getTitleText() {
                var rawTitle = document.title ? document.title.split('-')[0].trim() : 'Tarifvergleich';
                var cleanTitle = rawTitle.replace(/Vergleich\s*\d*/gi, '').trim();
                if (!cleanTitle) cleanTitle = 'Tarifvergleich';
                return cleanTitle + '-Angebotsanfrage des Vergleichspartners';
            }

            try {
                var origSetAttr = HTMLIFrameElement.prototype.setAttribute;
                HTMLIFrameElement.prototype.setAttribute = function(name, val) {
                    if (name && String(name).toLowerCase() === 'title') {
                        if (!val || String(val).trim() === '' || String(val).trim() === '""') {
                            val = getTitleText();
                        }
                    }
                    return origSetAttr.call(this, name, val);
                };
            } catch(e) {}

            try {
                var titleDesc = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, 'title');
                if (titleDesc && titleDesc.set) {
                    var origSet = titleDesc.set;
                    Object.defineProperty(HTMLIFrameElement.prototype, 'title', {
                        get: function() {
                            var cur = titleDesc.get ? titleDesc.get.call(this) : this.getAttribute('title');
                            return (cur && cur.trim()) ? cur : getTitleText();
                        },
                        set: function(val) {
                            if (!val || String(val).trim() === '' || String(val).trim() === '""') {
                                val = getTitleText();
                            }
                            origSet.call(this, val);
                        },
                        configurable: true,
                        enumerable: true
                    });
                }
            } catch(e) {}

            function updateTitles() {
                var iframes = document.getElementsByTagName('iframe');
                var titleText = getTitleText();
                for (var i = 0; i < iframes.length; i++) {
                    var currentTitle = iframes[i].getAttribute('title');
                    if (!currentTitle || currentTitle.trim() === '' || currentTitle.trim() === '""' || currentTitle !== titleText) {
                        iframes[i].setAttribute('title', titleText);
                        try { iframes[i].title = titleText; } catch(e) {}
                    }
                }
            }

            updateTitles();
            setInterval(updateTitles, 150);

            if (typeof MutationObserver !== 'undefined') {
                var obs = new MutationObserver(function() {
                    updateTitles();
                });
                if (document.documentElement) {
                    obs.observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['title'] });
                }
            }
        })();
    </script>
    ${SEARCH_SCRIPT_HTML}
</body>
</html>`;
}

// --- 2. DATA EXTRACTION & NORMALIZATION ---

function getSafeName(name) {
    return name.normalize('NFC').toLowerCase()
        .replace(/[ä]/g, 'ae')
        .replace(/[ö]/g, 'oe')
        .replace(/[ü]/g, 'ue')
        .replace(/[ß]/g, 'ss')
        .replace(/[^a-z0-9]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
}

function extractPageData(filePath) {
    const code = fs.readFileSync(filePath, 'utf8');
    const baseName = path.basename(filePath);

    if (['Layout.jsx', 'Home.jsx', 'index.jsx', '404.jsx'].includes(baseName)) return null;

    const seoTitleMatch = code.match(/title="([^"]+)"/) || code.match(/document\.title = "([^"]+)"/);
    const seoDescMatch = code.match(/description="([^"]+)"/);
    let h1Title = seoTitleMatch ? seoTitleMatch[1] : 'Versicherung';
    let subtitle = seoDescMatch ? seoDescMatch[1] : '';

    // Blog article fallback: extract h1 from <h1> tags
    if (h1Title === 'Versicherung') {
        const h1Match = code.match(/<h1[^>]*>([^<]+)<\/h1>/);
        if (h1Match) h1Title = h1Match[1].trim();
    }
    // Extract first paragraph as subtitle if missing
    if (!subtitle) {
        const firstP = code.match(/<article>[\s\S]*?<h1[^>]*>[^<]*<\/h1>[\s]*<p[^>]*>([^<]+)<\/p>/);
        if (firstP) subtitle = firstP[1].trim().substring(0, 220);
    }

    // Strip branding and unprovable superlatives
    h1Title = h1Title.replace(/\s20\d{2}/g, '')
                     .replace(/\s[|-]\sversicherungsofort\.de.*/i, '')
                     .replace(/modernster|beste|groesste|guenstigste/gi, '')
                     .replace(/\s+/g, ' ')
                     .trim();
    subtitle = subtitle.replace(/\s20\d{2}/g, '').trim();

    // Extract Benefits
    let benefits = [];
    const benefitsMatch = code.match(/const benefits = (\[[\s\S]*?\]);/);
    if (benefitsMatch) { try { eval(`benefits = ${benefitsMatch[1]}`); } catch(e) {} }

    // Extract Features
    let features = [];
    const featuresMatch = code.match(/const features = (\[[\s\S]*?\]);/);
    if (featuresMatch) { try { eval(`features = ${featuresMatch[1]}`); } catch(e) {} }

    // Extract SEO Content
    let seoContent = '';
    const seoBlockMatch = code.match(/\{[\s]*\/\*[\s]*SEO Content[\s]*\*\/[\s]*\}([\s\S]*?)<\/div>[\s]*<\/div>[\s]*<\/div>[\s]*<\/div>/i);
    if (seoBlockMatch) {
       seoContent = seoBlockMatch[1]
          .replace(/className="[^"]*"/g, '')
          .replace(/\{([^}]+)\}/g, '$1')
          .trim()
          .replace(/<h2[^>]*>(.*?)<\/h2>/g, '<h2>$1</h2>')
          .replace(/<h3[^>]*>(.*?)<\/h3>/g, '<h3>$1</h3>')
          .replace(/<h4[^>]*>(.*?)<\/h4>/g, '<h4><b>$1</b></h4>')
          .replace(/<p[^>]*>(.*?)<\/p>/g, '<p>$1</p>')
          .replace(/<li[^>]*>(.*?)<\/li>/g, '<li>$1</li>');
    }

    // Fallback for Legal Pages
    if (!seoContent) {
        const cardMatch = code.match(/<CardHeader>[\s\S]*?<CardTitle[^>]*>([\s\S]*?)<\/CardTitle>[\s\S]*?<\/CardHeader>[\s\S]*?<CardContent[^>]*>([\s\S]*?)<\/CardContent>/gi);
        if (cardMatch) {
            seoContent = cardMatch.map(m => {
                const subTitle = m.match(/<CardTitle[^>]*>([\s\S]*?)<\/CardTitle>/i)?.[1].replace(/\{[^}]+\}/g, '').replace(/<[^>]+>/g, '').trim() || '';
                const body = m.match(/<CardContent[^>]*>([\s\S]*?)<\/CardContent>/i)?.[1].replace(/className="[^"]*"/g, '').replace(/\{([^}]+)\}/g, '$1').trim() || '';
                return `<div class="mb-10"><h2 class="text-2xl font-black mb-4">${subTitle}</h2><div class="prose font-medium">${body}</div></div>`;
            }).join('');
        }
    }

    // Fallback for Blog Articles (article > h1/h2/h3/p/ul/li)
    if (!seoContent) {
        const articleMatch = code.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
        if (articleMatch) {
            seoContent = articleMatch[1]
                .replace(/className="[^"]*"/g, '')
                .replace(/<h1[^>]*>[\s\S]*?<\/h1>/i, '')
                .trim();
        }
    }

    const iframes = [];
    const iframeIdRegex = /iframeId=["']([^"']+)["']/g;
    const scriptSrcRegex = /scriptSrc=["']([^"']+)["']/g;
    let idMatch, srcMatch;
    const ids = [], srcs = [];
    while ((idMatch = iframeIdRegex.exec(code)) !== null) ids.push(idMatch[1]);
    while ((srcMatch = scriptSrcRegex.exec(code)) !== null) srcs.push(srcMatch[1]);
    for (let i = 0; i < ids.length; i++) iframes.push({ id: ids[i], src: srcs[i] });

    return { seoTitle: h1Title, seoDesc: subtitle, h1Title, subtitle, iframes, benefits, features, seoContent };
}

// --- 3. DEDICATED TEMPLATE BUILDERS (FAQ, RATGEBER) ---

function buildFAQPage() {
    const faqData = [
        {
            category: "Allgemeine Fragen zum Vergleich",
            faqs: [
                {
                    q: "Wie funktioniert der Versicherungsvergleich auf versicherungsofort.de?",
                    a: "Unser Vergleichsportal ist für Sie zu 100% kostenlos und unverbindlich. Sie wählen die gewünschte Versicherungssparte, tragen Ihre individuellen Anforderungen in den geprüften Tarifrechner ein und erhalten innerhalb weniger Sekunden eine transparente Auflistung passender Tarife namhafter deutscher Versicherungsgesellschaften."
                },
                {
                    q: "Ist der Service wirklich kostenlos und entstehen versteckte Kosten?",
                    a: "Ja, der Service ist für Sie als Verbraucher absolut gebührenfrei. Wir finanzieren unseren redaktionellen und technischen Betrieb über gesetzlich geregelte Vermittlungsprovisionen der jeweiligen Versicherungsunternehmen. Ihr monatlicher Beitrag ist exakt derselbe wie bei einem Direktabschluss beim Versicherer."
                },
                {
                    q: "Wie sicher sind meine persönlichen Daten bei der Eingabe?",
                    a: "Datensicherheit steht an erster Stelle. Die Verbindung zu unserer Website ist per HTTPS verschlüsselt. Wenn Sie einen Tarifrechner nutzen, werden Ihre Eingaben direkt und gesichert an den jeweiligen Anbieter übertragen. Die Verarbeitung erfolgt nach den Vorgaben der europäischen DSGVO. Detaillierte Angaben finden Sie in unserer Datenschutzerklärung."
                }
            ]
        },
        {
            category: "Kfz- & Mobilitätsversicherung",
            faqs: [
                {
                    q: "Wann kann ich meine Kfz-Versicherung regulär wechseln?",
                    a: "Die reguläre Kündigungsfrist für Kfz-Versicherungen in Deutschland beträgt einen Monat zum Ende des Versicherungsjahres. Bei den allermeisten Verträgen ist der Stichtag daher der 30. November für einen Wechsel zum 1. Januar des Folgejahres."
                },
                {
                    q: "Wann habe ich ein Sonderkündigungsrecht bei der Kfz-Versicherung?",
                    a: "Ein Sonderkündigungsrecht steht Ihnen zu, wenn Ihr Versicherer den Beitrag erhöht (auch bei veränderter Typ- oder Regionalklasse ohne Leistungsverbesserung), nach der Regulierung oder Ablehnung eines Schadensfalls sowie bei einem Fahrzeugwechsel oder Neuzulassung."
                },
                {
                    q: "Was ist die eVB-Nummer und wie schnell erhalte ich sie?",
                    a: "Die elektronische Versicherungsbestätigung (eVB-Nummer) ist ein siebenstelliger alphanumerischer Code, den Sie für die Fahrzeugzulassung bei der Kfz-Zulassungsbehörde benötigen. Nach einem erfolgreichen Online-Abschluss erhalten Sie diese meist innerhalb weniger Minuten per SMS oder E-Mail."
                }
            ]
        },
        {
            category: "Private Krankenversicherung (PKV)",
            faqs: [
                {
                    q: "Wer hat das Recht, in die Private Krankenversicherung zu wechseln?",
                    a: "Angestellte können in die PKV wechseln, sobald ihr regelmäßiges Jahresbruttoeinkommen die Jahresarbeitsentgeltgrenze (JAEG) überschreitet. Selbstständige, Freiberufler und Beamte (über die staatliche Beihilfe) können sich unabhängig von einer Einkommensgrenze privat krankenversichern."
                },
                {
                    q: "Können Familienmitglieder in der PKV kostenlos mitversichert werden?",
                    a: "Nein. Anders als in der gesetzlichen Familienversicherung zahlt in der PKV jede versicherte Person (auch Kinder) einen eigenen, alters- und risikogerechten Monatsbeitrag. Beamtenkinder erhalten hierbei jedoch hohe Beihilfezuschüsse von 80%."
                }
            ]
        },
        {
            category: "Berufsunfähigkeit & Existenzschutz",
            faqs: [
                {
                    q: "Wie hoch sollte eine private Berufsunfähigkeitsrente vereinbart werden?",
                    a: "Als Faustregel gilt: Sichern Sie mindestens 70 bis 80 Prozent Ihres aktuellen Nettoeinkommens ab, um Ihre laufenden Fixkosten und den gewohnten Lebensstandard bei dauerhafter Krankheit verlässlich zu decken."
                },
                {
                    q: "Was bedeutet die Klausel 'Verzicht auf abstrakte Verweisung'?",
                    a: "Dies ist die wichtigste Klausel überhaupt: Der Versicherer verzichtet darauf, Sie bei Berufsunfähigkeit auf eine theoretisch mögliche andere berufliche Tätigkeit zu verweisen, die Sie noch ausüben könnten. Sie erhalten die Rente, sobald Sie Ihren tatsächlich ausgeübten Beruf zu mindestens 50% nicht mehr ausüben können."
                }
            ]
        },
        {
            category: "Haftpflicht & Sachwerte",
            faqs: [
                {
                    q: "Warum ist die Privathaftpflichtversicherung für jeden Bürger unverzichtbar?",
                    a: "Nach § 823 des Bürgerlichen Gesetzbuches (BGB) haften Sie für fahrlässig oder vorsätzlich verursachte Personen-, Sach- und Vermögensschäden in unbegrenzter Höhe mit Ihrem gesamten gegenwärtigen und zukünftigen Vermögen. Die Privathaftpflicht schützt Sie vor existenzbedrohenden Forderungen."
                },
                {
                    q: "Welche Deckungssumme sollte eine gute Privathaftpflicht mindestens aufweisen?",
                    a: "Verbraucherschützer empfehlen eine Mindestdeckung von 10 Millionen Euro, moderne Spitzentarife bieten heutzutage 20 bis 50 Millionen Euro pauschal für Personen- und Sachschäden bei minimalem Beitragsunterschied."
                }
            ]
        }
    ];

    let faqHtml = `
    <section class="py-16 md:py-24">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 text-xs font-black uppercase tracking-widest text-blue-700 mb-6 bg-blue-50/50">
                    <i data-lucide="help-circle" class="w-4 h-4"></i> Hilfe & Antworten
                </div>
                <h1 class="text-4xl md:text-5xl font-black text-slate-900 tracking-tightest mb-6">Häufig gestellte Fragen (FAQ)</h1>
                <p class="text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
                    Hier finden Sie klare, verständliche Antworten auf die wichtigsten Fragen rund um Tarife, Fristen, Wechsel und Absicherung.
                </p>
            </div>
    `;

    const schemaFaqs = [];

    faqData.forEach((group, idx) => {
        faqHtml += `
        <div class="mb-14">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-sm">${idx + 1}</div>
                <h2 class="text-2xl font-black text-slate-900 tracking-tight">${group.category}</h2>
            </div>
            <div class="space-y-4">
        `;
        group.faqs.forEach((item) => {
            schemaFaqs.push({
                "@type": "Question",
                "name": item.q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.a
                }
            });
            faqHtml += `
                <details class="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all">
                    <summary class="flex justify-between items-center font-bold text-slate-900 text-lg cursor-pointer select-none">
                        <span>${item.q}</span>
                        <span class="ml-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-open:rotate-180 transition-transform">
                            <i data-lucide="chevron-down" class="w-4 h-4"></i>
                        </span>
                    </summary>
                    <div class="mt-4 pt-4 border-t border-slate-100 text-slate-600 leading-relaxed font-medium text-base">
                        ${item.a}
                    </div>
                </details>
            `;
        });
        faqHtml += `</div></div>`;
    });

    faqHtml += `
            <div class="mt-16 p-10 bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-3xl border border-blue-100 text-center">
                <h3 class="text-2xl font-black text-slate-900 mb-3">Keine passende Antwort gefunden?</h3>
                <p class="text-slate-600 font-medium mb-8 max-w-lg mx-auto">
                    Entdecken Sie unsere ausführlichen Ratgeber-Artikel mit tiefgehendem Fachwissen oder vergleichen Sie direkt die Tarife.
                </p>
                <div class="flex flex-wrap justify-center gap-4">
                    <a href="ratgeber.html" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-blue-500/25 transition-all">
                        Zum Ratgeber
                    </a>
                    <a href="index.html#versicherungen" class="bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 px-8 py-3.5 rounded-full font-bold transition-all">
                        Tarife vergleichen*
                    </a>
                </div>
            </div>
        </div>
    </section>
    `;

    const schema = {
        "@type": "FAQPage",
        "mainEntity": schemaFaqs
    };

    return wrapHtml("Häufige Fragen (FAQ) & Antworten | versicherungsofort.de", "Antworten auf häufige Fragen zu Versicherungen: Kfz-Versicherung wechseln, PKV, Berufsunfähigkeit, Haftpflicht und Kündigungsfristen.", faqHtml, "faq", schema);
}

function buildRatgeberPage() {
    const guides = [
        {
            title: "Die 5 wichtigsten Versicherungen für Berufseinsteiger",
            desc: "Welche Policen zum Berufsstart unverzichtbar sind und auf was junge Erwerbstätige verzichten können.",
            tag: "Berufseinstieg",
            url: "blog-fuenf-wichtigste-versicherungen-berufsstarter.html",
            icon: "graduation-cap",
            readTime: "7 Min. Lesezeit"
        },
        {
            title: "PKV vs. GKV: Der ultimative System-Vergleich",
            desc: "Vor- und Nachteile der Privaten und Gesetzlichen Krankenversicherung. Für wen sich der Wechsel rechnet.",
            tag: "Krankenversicherung",
            url: "blog-pkv-vs-gkv-der-ultimative-vergleich.html",
            icon: "heart-pulse",
            readTime: "8 Min. Lesezeit"
        },
        {
            title: "Hausratversicherung: Was ist wirklich versichert?",
            desc: "Vollständige Übersicht zu Leistungsumfang, Unterversicherungsverzicht, Elementarschäden und Fahrraddiebstahl.",
            tag: "Sachwerte",
            url: "blog-hausrat-versicherung-guide.html",
            icon: "home",
            readTime: "6 Min. Lesezeit"
        },
        {
            title: "Berufsunfähigkeitsversicherung: Warum unverzichtbar?",
            desc: "Statistiken, Pflichtklauseln wie abstrakte Verweisung und Tipps zur richtigen Rentenhöhe.",
            tag: "Existenzschutz",
            url: "blog-berufsunfaehigkeit-ratgeber.html",
            icon: "briefcase",
            readTime: "9 Min. Lesezeit"
        },
        {
            title: "Zahnzusatzversicherung: Wann lohnt sie sich wirklich?",
            desc: "Festzuschüsse der Kasse, Implantate, Zahnstaffeln und Wartezeiten detailliert aufgeschlüsselt.",
            tag: "Zahngesundheit",
            url: "blog-zahnzusatzversicherung-ratgeber.html",
            icon: "smile",
            readTime: "6 Min. Lesezeit"
        },
        {
            title: "Hundehaftpflicht & Tierhalterhaftpflicht Guide",
            desc: "Gesetzliche Pflicht in den Bundesländern, unbegrenzte Gefährdungshaftung und Deckungssummen.",
            tag: "Tierhalter",
            url: "blog-hundehaftpflicht-und-tierhalter-guide.html",
            icon: "dog",
            readTime: "6 Min. Lesezeit"
        },
        {
            title: "Versicherungen für Familien: Der komplette Absicherungsplan",
            desc: "Vom Familiengunst-Tarif bei Haftpflicht über Risikoleben bis hin zum Kinderschutz.",
            tag: "Familie",
            url: "blog-versicherungen-fuer-familien.html",
            icon: "users",
            readTime: "8 Min. Lesezeit"
        },
        {
            title: "Private Altersvorsorge im Vergleich: Riester, Rürup & Co.",
            desc: "Rentenlücke schließen: Staatliche Förderungen, steuerliche Absetzbarkeit und flexible Vorsorgewege.",
            tag: "Altersvorsorge",
            url: "blog-private-altersvorsorge-vergleich.html",
            icon: "piggy-bank",
            readTime: "8 Min. Lesezeit"
        },
        {
            title: "Rechtsschutzversicherung: Wann sie sich lohnt",
            desc: "Kostenrisiken bei Zivil-, Arbeits- und Mietrecht. Bausteine, Selbstbeteiligung und Ausschlussklauseln.",
            tag: "Rechtsschutz",
            url: "blog-rechtsschutzversicherung-ratgeber.html",
            icon: "scale",
            readTime: "7 Min. Lesezeit"
        },
        {
            title: "Versicherungs-Glossar von A bis Z",
            desc: "Alle wichtigen Versicherungsbegriffe und Klauseln einfach und verständlich auf den Punkt erklärt.",
            tag: "Lexikon",
            url: "blog-versicherung-glossar.html",
            icon: "book-open",
            readTime: "12 Min. Nachschlagewerk"
        },
        {
            title: "Kfz-Wechselsaison: Fristen, Kündigung & Spartipps",
            desc: "Stichtag 30. November: Wie Sie durch Fahrleistung, Werkstattbindung und SF-Klassen sparen.",
            tag: "Mobilität",
            url: "blog-kfz-wechselsaison-fristen-spartipps-2025.html",
            icon: "car",
            readTime: "5 Min. Lesezeit"
        },
        {
            title: "Sonderkündigung bei Kfz-Versicherungen richtig nutzen",
            desc: "Preiserhöhung oder Schadensfall: So kündigen Sie auch außerhalb des regulären Stichtags.",
            tag: "Kfz-Recht",
            url: "blog-sonderkuendigung-kfz-versicherung.html",
            icon: "alert-circle",
            readTime: "5 Min. Lesezeit"
        }
    ];

    let content = `
    <section class="py-16 md:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-20">
                <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 text-xs font-black uppercase tracking-widest text-blue-700 mb-6 bg-blue-50/50">
                    <i data-lucide="book-open" class="w-4 h-4"></i> Verbraucherwissen & Praxis-Tipps
                </div>
                <h1 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tightest mb-6">Versicherungs-Ratgeber</h1>
                <p class="text-lg md:text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
                    Unabhängige Leitfäden, Modellrechnungen und Spartipps zu allen zentralen Vorsorge- und Versicherungsbereichen in Deutschland.
                </p>
            </div>

            <!-- Top Kriterien Box -->
            <div class="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm mb-20">
                <h2 class="text-2xl font-black text-slate-900 mb-6">Die 4 goldenen Grundregeln für jeden Versicherungscheck</h2>
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <div class="text-blue-600 font-black text-xl mb-2">01. Existenz zuerst</div>
                        <p class="text-sm text-slate-600 leading-relaxed font-medium">Sichern Sie stets existenzbedrohende Risiken vor Sachwerten ab: Haftpflicht und Berufsunfähigkeit haben immer Vorrang.</p>
                    </div>
                    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <div class="text-blue-600 font-black text-xl mb-2">02. Dynamik prüfen</div>
                        <p class="text-sm text-slate-600 leading-relaxed font-medium">Schützen Sie Verträge vor Kaufkraftverlust durch vereinbarte Beitrags- und Leistungsdynamiken.</p>
                    </div>
                    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <div class="text-blue-600 font-black text-xl mb-2">03. Jährlicher Check</div>
                        <p class="text-sm text-slate-600 leading-relaxed font-medium">Lebensumstände ändern sich: Heirat, Umzug, Nachwuchs oder Karriereschritte erfordern Vertragsanpassungen.</p>
                    </div>
                    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <div class="text-blue-600 font-black text-xl mb-2">04. Fristen wahren</div>
                        <p class="text-sm text-slate-600 leading-relaxed font-medium">Nutzen Sie Kündigungsfristen und Sonderkündigungsrechte bei Beitragserhöhungen konsequent aus.</p>
                    </div>
                </div>
            </div>

            <!-- Guides Grid -->
            <h2 class="text-3xl font-black text-slate-900 tracking-tightest mb-10">Alle Experten-Ratgeber</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
    `;

    guides.forEach(g => {
        content += `
            <a href="${g.url}" class="group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between mb-6">
                        <div class="icon-pill text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <i data-lucide="${g.icon}"></i>
                        </div>
                        <span class="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider">${g.tag}</span>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors leading-snug">
                        ${g.title}
                    </h3>
                    <p class="text-slate-600 text-sm font-medium leading-relaxed mb-6">
                        ${g.desc}
                    </p>
                </div>
                <div class="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
                    <span>${g.readTime}</span>
                    <span class="text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Artikel lesen <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                    </span>
                </div>
            </a>
        `;
    });

    content += `
            </div>

            <!-- CTA -->
            <div class="bg-slate-900 text-white rounded-3xl p-10 md:p-16 text-center">
                <h2 class="text-3xl md:text-4xl font-black mb-4 tracking-tight">Bereit für Ihren persönlichen Tarifvergleich?</h2>
                <p class="text-slate-300 max-w-xl mx-auto mb-8 font-medium">Vergleichen Sie hunderte Tarife von über 300 Versicherern in wenigen Minuten kostenlos und unverbindlich.</p>
                <a href="index.html#versicherungen" class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-black shadow-xl shadow-blue-500/25 transition-all hover:scale-105">
                    Zu allen Vergleichsrechnern*
                </a>
            </div>
        </div>
    </section>
    `;

    return wrapHtml("Versicherungs-Ratgeber: Leitfäden & Spartipps | versicherungsofort.de", "Expertenratgeber zu allen Versicherungen: Kfz, Krankenversicherung, Berufsunfähigkeit, Haftpflicht und Altersvorsorge. Unabhängig und praxisnah.", content, "ratgeber");
}

// --- 3b. DEFINITION SNIPPETS FOR POSITION-0 FEATURED SNIPPETS (GOOGLE OVERVIEWS) ---

const DEFINITION_SNIPPETS = {
    'kfz': {
        term: 'Kfz-Versicherung',
        law: '§ 1 PflVG (Pflichtversicherungsgesetz)',
        text: 'Die Kfz-Haftpflichtversicherung ist in Deutschland eine gesetzlich vorgeschriebene Pflichtversicherung (§ 1 PflVG) für Fahrzeughalter. Sie schützt vor Schadensersatzansprüchen Dritter bei Personen-, Sach- und Vermögensschäden. Teil- und Vollkaskoversicherungen decken ergänzend Schäden am eigenen Fahrzeug durch Unwetter, Wildunfälle, Diebstahl oder selbstverschuldete Unfälle ab.'
    },
    'kfz-versicherung': {
        term: 'Kfz-Versicherung',
        law: '§ 1 PflVG (Pflichtversicherungsgesetz)',
        text: 'Die Kfz-Haftpflichtversicherung ist in Deutschland eine gesetzlich vorgeschriebene Pflichtversicherung (§ 1 PflVG) für Fahrzeughalter. Sie schützt vor Schadensersatzansprüchen Dritter bei Personen-, Sach- und Vermögensschäden. Teil- und Vollkaskoversicherungen decken ergänzend Schäden am eigenen Fahrzeug durch Unwetter, Wildunfälle, Diebstahl oder selbstverschuldete Unfälle ab.'
    },
    'haftpflicht': {
        term: 'Privathaftpflichtversicherung',
        law: '§ 823 BGB (Schadensersatzpflicht)',
        text: 'Die Privathaftpflichtversicherung schützt Versicherte nach § 823 BGB vor existenzbedrohenden Schadensersatzansprüchen bei fahrlässig verursachten Personen-, Sach- und Vermögensschäden an Dritten. Zusätzlich fungiert sie als passiver Rechtsschutz, indem sie unberechtigte oder überhöhte Schadenersatzforderungen abwehrt.'
    },
    'haftpflichtversicherung': {
        term: 'Privathaftpflichtversicherung',
        law: '§ 823 BGB (Schadensersatzpflicht)',
        text: 'Die Privathaftpflichtversicherung schützt Versicherte nach § 823 BGB vor existenzbedrohenden Schadensersatzansprüchen bei fahrlässig verursachten Personen-, Sach- und Vermögensschäden an Dritten. Zusätzlich fungiert sie als passiver Rechtsschutz, indem sie unberechtigte oder überhöhte Schadenersatzforderungen abwehrt.'
    },
    'wohngebaeude': {
        term: 'Wohngebäudeversicherung',
        law: '§ 88 VVG (Gebäudeversicherung)',
        text: 'Die Wohngebäudeversicherung schützt Eigentümer vor den finanziellen Folgen von Schäden an der Bausubstanz sowie fest installierten Bauteilen durch Brand, Blitzschlag, Leitungswasser, Sturm (ab Windstärke 8) und Hagel. Mit dem Elementarschadenschutz werden zudem Naturgefahren wie Überschwemmung, Starkregen und Erdrutsch abgesichert.'
    },
    'wohngebaeudeversicherung': {
        term: 'Wohngebäudeversicherung',
        law: '§ 88 VVG (Gebäudeversicherung)',
        text: 'Die Wohngebäudeversicherung schützt Eigentümer vor den finanziellen Folgen von Schäden an der Bausubstanz sowie fest installierten Bauteilen durch Brand, Blitzschlag, Leitungswasser, Sturm (ab Windstärke 8) und Hagel. Mit dem Elementarschadenschutz werden zudem Naturgefahren wie Überschwemmung, Starkregen und Erdrutsch abgesichert.'
    },
    'berufsunfaehigkeit': {
        term: 'Berufsunfähigkeitsversicherung (BU)',
        law: '§ 172 VVG (Berufsunfähigkeitsversicherung)',
        text: 'Die Berufsunfähigkeitsversicherung leistet eine vertraglich festgelegte monatliche Rente, sobald der Versicherte seinen zuletzt ausgeübten Beruf durch Krankheit, Unfall oder Kräfteverfall voraussichtlich für mindestens sechs Monate zu mindestens 50 % nicht mehr ausüben kann. Ein Verzicht auf abstrakte Verweisung garantiert den Schutz ohne Zwangsumschulung.'
    },
    'berufsunfaehigkeitsversicherung': {
        term: 'Berufsunfähigkeitsversicherung (BU)',
        law: '§ 172 VVG (Berufsunfähigkeitsversicherung)',
        text: 'Die Berufsunfähigkeitsversicherung leistet eine vertraglich festgelegte monatliche Rente, sobald der Versicherte seinen zuletzt ausgeübten Beruf durch Krankheit, Unfall oder Kräfteverfall voraussichtlich für mindestens sechs Monate zu mindestens 50 % nicht mehr ausüben kann. Ein Verzicht auf abstrakte Verweisung garantiert den Schutz ohne Zwangsumschulung.'
    },
    'lebensversicherung': {
        term: 'Risikolebensversicherung',
        law: '§ 150 VVG (Lebensversicherung)',
        text: 'Die Risikolebensversicherung dient der finanziellen Absicherung von Angehörigen, Partnern oder Immobiliendarlehen im Todesfall der versicherten Person. Tritt der Todesfall während der Vertragslaufzeit ein, wird die vereinbarte Versicherungssumme einkommensteuerfrei an die begünstigten Hinterbliebenen ausgezahlt.'
    },
    'risikolebensversicherung': {
        term: 'Risikolebensversicherung',
        law: '§ 150 VVG (Lebensversicherung)',
        text: 'Die Risikolebensversicherung dient der finanziellen Absicherung von Angehörigen, Partnern oder Immobiliendarlehen im Todesfall der versicherten Person. Tritt der Todesfall während der Vertragslaufzeit ein, wird die vereinbarte Versicherungssumme einkommensteuerfrei an die begünstigten Hinterbliebenen ausgezahlt.'
    },
    'rechtsschutz': {
        term: 'Rechtsschutzversicherung',
        law: '§ 125 VVG (Rechtsschutzversicherung)',
        text: 'Die Rechtsschutzversicherung übernimmt die finanziellen Risiken von Rechtsstreitigkeiten, darunter Anwaltskosten, Gerichtskosten, Gutachterhonorare und gegnerische Kosten bei Prozessverlust. Typische Leistungsbausteine umfassen Privat-, Berufs-, Verkehrs- und Wohnungs-/Mietrechtsschutz.'
    },
    'hausrat': {
        term: 'Hausratversicherung',
        law: 'VHB 2016 / VVG-Standards',
        text: 'Die Hausratversicherung deckt Schäden am gesamten beweglichen Eigentum in einer Wohnung oder einem Haus ab. Schutz besteht bei Schäden durch Feuer, Leitungswasser, Sturm, Hagel, Einbruchdiebstahl, Vandalismus sowie Raub zum Neuwert des Inventars.'
    },
    'hausratversicherung': {
        term: 'Hausratversicherung',
        law: 'VHB 2016 / VVG-Standards',
        text: 'Die Hausratversicherung deckt Schäden am gesamten beweglichen Eigentum in einer Wohnung oder einem Haus ab. Schutz besteht bei Schäden durch Feuer, Leitungswasser, Sturm, Hagel, Einbruchdiebstahl, Vandalismus sowie Raub zum Neuwert des Inventars.'
    },
    'pflege': {
        term: 'Pflegezusatzversicherung',
        law: '§ 20 SGB XI / VVG',
        text: 'Die Pflegezusatzversicherung schließt die Versorgungslücke zwischen den gesetzlichen Pflegekassenleistungen nach SGB XI und den realen Kosten für ambulante oder stationäre Pflege. Sie schützt das eigene Vermögen und entlastet Angehörige durch monatliches Pflegetagegeld.'
    },
    'pkv': {
        term: 'Private Krankenversicherung (PKV)',
        law: '§ 192 VVG / § 6 SGB V',
        text: 'Die Private Krankenversicherung bietet vollumfänglichen Gesundheitsschutz für Selbstständige, Beamte und Angestellte oberhalb der Jahresarbeitsentgeltgrenze (JAEG). Leistungen wie Chefarztbehandlung, Einbettzimmer und garantierte Erstattung für Zahnersatz sind vertraglich festgeschrieben.'
    },
    'pkv-beamte': {
        term: 'Private Krankenversicherung für Beamte (Beihilfe)',
        law: '§ 192 VVG / Bundesbeihilfeverordnung (BBhV)',
        text: 'Die Beihilfe-Ergänzungsversicherung schließt für Beamte und Beamtenanwärter die Differenz zwischen dem Beihilfeanspruch des Dienstherrn (meist 50 % bis 70 %) und den Gesamtkosten für ärztliche und stationäre Heilbehandlungen.'
    },
    'pkv-studenten': {
        term: 'Private Krankenversicherung für Studenten',
        law: '§ 6 Abs. 1 Nr. 3 SGB V',
        text: 'Studenten können sich zu Beginn des Studiums von der gesetzlichen Versicherungspflicht befreien lassen und in günstige studentische Tarife der privaten Krankenversicherung mit bevorzugtem Facharzt- und Auslandsreiseschutz wechseln.'
    },
    'pkv-55': {
        term: 'PKV-Wechsel über 55 Jahre',
        law: '§ 6 Abs. 3a SGB V (Gesetzliche Wechselgrenze)',
        text: 'Nach Vollendung des 55. Lebensjahres ist die Rückkehr von der privaten in die gesetzliche Krankenversicherung gesetzlich weitgehend ausgeschlossen. Beitragsstabilisierung erfolgt in diesem Fall über Tarifwechsel nach § 204 VVG oder Not-/Standardtarife.'
    },
    'krankenzusatz': {
        term: 'Zahnzusatz- & Krankenzusatzversicherung',
        law: '§ 192 VVG',
        text: 'Die Krankenzusatzversicherung stockt die Grundleistungen der gesetzlichen Krankenversicherung gezielt auf. Besonders Zahnzusatztarife übernehmen bis zu 100 % der Eigenanteile für hochwertige Implantate, Kronen, Inlays sowie professionelle Zahnreinigungen (PZR).'
    },
    'krankenzusatzversicherung': {
        term: 'Zahnzusatz- & Krankenzusatzversicherung',
        law: '§ 192 VVG',
        text: 'Die Krankenzusatzversicherung stockt die Grundleistungen der gesetzlichen Krankenversicherung gezielt auf. Besonders Zahnzusatztarife übernehmen bis zu 100 % der Eigenanteile für hochwertige Implantate, Kronen, Inlays sowie professionelle Zahnreinigungen (PZR).'
    },
    'tierhalterhaftpflicht': {
        term: 'Tierhalterhaftpflichtversicherung',
        law: '§ 833 BGB (Tierhalterhaftung)',
        text: 'Nach § 833 BGB haftet der Tierhalter verschuldensunabhängig und in unbegrenzter Höhe für Personen- und Sachschäden, die sein Tier (insbesondere Hunde und Pferde) verursacht. Die Tierhalterhaftpflichtversicherung fängt existenzielle Schadensersatzansprüche zuverlässig auf.'
    },
    'hundehaftpflicht': {
        term: 'Hundehaftpflichtversicherung',
        law: '§ 833 BGB / Landeshundegesetze',
        text: 'Die Hundehaftpflichtversicherung schützt Hundehalter vor den finanziellen Folgen von Personen-, Sach- und Vermögensschäden, die durch den Hund verursacht werden. In den meisten deutschen Bundesländern ist sie gesetzlich vorgeschrieben.'
    },
    'hundekrankenversicherung': {
        term: 'Hundekranken- & OP-Versicherung',
        law: 'GOT (Gebührenordnung für Tierärzte)',
        text: 'Die Hundekrankenversicherung erstattet Tierarzt- und Operationskosten für Diagnostik, Medikamente, Notdienste und chirurgische Eingriffe bis zum mehrfachen Satz der GOT (Gebührenordnung für Tierärzte).'
    },
    'unfallversicherung': {
        term: 'Private Unfallversicherung',
        law: '§ 178 VVG (Unfallversicherung)',
        text: 'Die private Unfallversicherung schützt rund um die Uhr und weltweit vor den finanziellen Dauerfolgen eines Unfalls (Invalidität). Sie leistet eine vertragliche Einmalkapitalauszahlung oder Unfallrente, unabhängig davon, ob der Unfall im Beruf oder in der Freizeit geschieht.'
    },
    'unfall': {
        term: 'Private Unfallversicherung',
        law: '§ 178 VVG (Unfallversicherung)',
        text: 'Die private Unfallversicherung schützt rund um die Uhr und weltweit vor den finanziellen Dauerfolgen eines Unfalls (Invalidität). Sie leistet eine vertragliche Einmalkapitalauszahlung oder Unfallrente, unabhängig davon, ob der Unfall im Beruf oder in der Freizeit geschieht.'
    },
    'motorrad': {
        term: 'Motorradversicherung',
        law: '§ 1 PflVG (Pflichtversicherungsgesetz)',
        text: 'Die Motorrad-Haftpflichtversicherung ist in Deutschland für die Zulassung von Motorrädern und Rollern gesetzlich vorgeschrieben. Kaskoversicherungen (Teilkasko oder Vollkasko) sichern Diebstahl, Sturzschäden und Kollisionen mit Tieren zusätzlich ab.'
    },
    'motorradversicherung': {
        term: 'Motorradversicherung',
        law: '§ 1 PflVG (Pflichtversicherungsgesetz)',
        text: 'Die Motorrad-Haftpflichtversicherung ist in Deutschland für die Zulassung von Motorrädern und Rollern gesetzlich vorgeschrieben. Kaskoversicherungen (Teilkasko oder Vollkasko) sichern Diebstahl, Sturzschäden und Kollisionen mit Tieren zusätzlich ab.'
    },
    'rente': {
        term: 'Private Rentenversicherung',
        law: '§ 22 EStG (Ertragsanteilbesteuerung)',
        text: 'Die private Rentenversicherung garantiert eine lebenslange monatliche Zusatzrente zur Absicherung des Ruhestands. In der Auszahlungsphase profitiert sie von der günstigen Besteuerung nach dem Ertragsanteil gemäß § 22 EStG.'
    },
    'riester': {
        term: 'Riester-Rente',
        law: '§§ 10a, 79 ff. EStG (Altersvorsorgezulagen)',
        text: 'Die Riester-Rente ist eine staatlich geförderte private Altersvorsorge für rentenversicherungspflichtige Arbeitnehmer und Beamte. Sparer erhalten jährliche Grund- und Kinderzulagen sowie erhebliche Steuervorteile im Rahmen des Sonderausgabenabzugs.'
    },
    'ruerup': {
        term: 'Rürup-Rente (Basisrente)',
        law: '§ 10 Abs. 1 Nr. 2 Buchst. b EStG',
        text: 'Die Basisrente (Rürup-Rente) richtet sich primär an Selbstständige, Freiberufler und Besserverdiener. Die Beiträge können bis zu den gesetzlichen Höchstgrenzen zu 100 % als Sonderausgaben steuermindernd geltend gemacht werden.'
    },
    'grundbesitzerhaftpflicht': {
        term: 'Haus- und Grundbesitzerhaftpflicht',
        law: '§ 836 BGB (Haftung des Grundstücksbesitzers)',
        text: 'Die Haus- und Grundbesitzerhaftpflichtversicherung sichert Vermieter und Eigentümer von Mehrfamilienhäusern oder unbebauten Grundstücken gegen Schadenersatzansprüche ab, die aus der Verletzung der Verkehrssicherungspflicht resultieren.'
    },
    'firmenversicherung': {
        term: 'Gewerbliche Firmenversicherung',
        law: 'Betriebshaftpflicht & Inhaltsversicherung',
        text: 'Gewerbliche Versicherungen bündeln Betriebshaftpflicht-, Inventar- und Betriebsunterbrechungsschutz, um Unternehmen vor existenziellen Risiken durch Personen-, Sach- und Betriebsausfallschäden im laufenden Geschäftsbetrieb abzusichern.'
    }
};

// --- 4. RUN FULL PAGE GENERATION ---

console.log("Starting full static compilation...");

const files = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.jsx'));
const generatedSlugs = new Set();

// Generate FAQ
const faqHtml = buildFAQPage();
fs.writeFileSync(path.join(OUT_DIR, 'faq.html'), faqHtml);
generatedSlugs.add('faq');
console.log("✓ Generated Elite FAQ Page: faq.html");

// Generate Ratgeber
const ratgeberHtml = buildRatgeberPage();
fs.writeFileSync(path.join(OUT_DIR, 'ratgeber.html'), ratgeberHtml);
generatedSlugs.add('ratgeber');
console.log("✓ Generated Elite Ratgeber Page: ratgeber.html");

// Generate Subpages
files.forEach(file => {
    const baseName = path.basename(file, '.jsx');
    const safeName = getSafeName(baseName);
    
    // Handled separately
    if (['layout', 'home', 'index', '404', 'faq', 'ratgeber'].includes(safeName)) return;

    const data = extractPageData(path.join(PAGES_DIR, file));
    if (!data) return;

    const isBlogPage = safeName.startsWith('blog-');
    const isLegalPage = ['impressum', 'datenschutz', 'haftungsausschluss', 'agb'].includes(safeName) || isBlogPage;
    const defSnippet = DEFINITION_SNIPPETS[safeName];

    let benefitsHtml = '';
    if (!isLegalPage && data.benefits.length > 0) {
        data.benefits.forEach((b, idx) => {
            const icons = ['sparkles', 'shield-check', 'zap', 'target', 'award'];
            const icon = icons[idx % icons.length];
            benefitsHtml += `
                <div class="glass p-8 rounded-[2rem] hover:-translate-y-1 transition-all duration-300 group">
                    <div class="icon-pill mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                        <i data-lucide="${icon}"></i>
                    </div>
                    <h3 class="font-black text-slate-900 text-base mb-2 tracking-tight">${b.title}</h3>
                    <p class="text-slate-600 text-sm font-semibold leading-relaxed">${b.description}</p>
                </div>
            `;
        });
    }

    let featuresHtml = '';
    if (!isLegalPage && data.features.length > 0) {
        data.features.forEach(f => {
            featuresHtml += `<li class="flex items-center gap-3 font-semibold text-slate-700"><i data-lucide="check-circle-2" class="w-4 h-4 text-blue-600 flex-shrink-0"></i> <span>${f}</span></li>`;
        });
    }

    let content = `
    <section class="py-16 md:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mb-12">
                <a href="${isBlogPage ? 'ratgeber.html' : 'index.html'}" class="inline-flex items-center text-xs font-black uppercase tracking-[0.2em] text-slate-500 hover:text-blue-600 mb-8 group transition-colors">
                    <i data-lucide="chevron-left" class="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform"></i> 
                    ${isBlogPage ? 'Zurück zum Ratgeber' : 'Zurück zur Übersicht'}
                </a>
                <div class="flex items-center gap-4 mb-6">
                    <div class="icon-pill text-blue-600">
                        <i data-lucide="${isBlogPage ? 'book-open' : 'shield'}"></i>
                    </div>
                    <h1 class="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tightest leading-tight">${data.h1Title}</h1>
                </div>
                ${data.subtitle ? `<p class="text-lg md:text-xl text-slate-600 leading-relaxed font-semibold tracking-tight max-w-3xl">${data.subtitle}</p>` : ''}
            </div>

            ${defSnippet ? `
            <!-- Position-0 Featured Snippet Definition Box (Google AI Overviews) -->
            <div class="mb-12 bg-white border border-blue-200/90 rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 left-0 bottom-0 w-2.5 bg-blue-600"></div>
                <div class="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-700 mb-3">
                    <i data-lucide="bookmark-check" class="w-4 h-4"></i>
                    <span>Auf den Punkt gebracht: Definition &amp; Gesetzliche Grundlage</span>
                </div>
                <p class="text-slate-900 font-bold text-base md:text-lg leading-relaxed mb-4">
                    ${defSnippet.text}
                </p>
                <div class="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 pt-3 border-t border-slate-100">
                    <span class="flex items-center gap-1.5"><i data-lucide="shield-check" class="w-4 h-4 text-blue-600"></i> Rechtsnorm: <strong class="text-slate-700">${defSnippet.law}</strong></span>
                    <span class="flex items-center gap-1.5"><i data-lucide="calendar" class="w-4 h-4 text-emerald-600"></i> Geprüfter Stand: <strong class="text-slate-700">September 2026</strong></span>
                    <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-slate-700"></i> Kostenfrei &amp; unabhängig</span>
                </div>
            </div>` : ''}

            ${!isLegalPage && benefitsHtml ? `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                ${benefitsHtml}
            </div>` : ''}

            ${!isLegalPage ? `
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
                <div class="lg:col-span-4 order-2 lg:order-1">
                    ${featuresHtml ? `
                    <div class="glass p-8 rounded-3xl sticky top-28">
                        <h2 class="text-lg font-black text-slate-900 mb-6 uppercase tracking-wider">Leistungsvorteile</h2>
                        <ul class="space-y-4">
                            ${featuresHtml}
                        </ul>
                        <div class="mt-8 pt-6 border-t border-slate-200">
                            <p class="text-xs text-slate-500 font-medium">Unverbindlicher Tarifvergleich. Schnelle Beitragsberechnung ohne Maklergebühren.</p>
                        </div>
                    </div>` : ''}
                </div>
                <div class="lg:col-span-8 order-1 lg:order-2">
                    ${data.iframes.length > 0 ? (() => {
                        const quickPillsMap = {
                            'pflege': ['Alle Pflegegrade (1-5)', 'Ambulant & Stationär', 'Tarifabhängige Leistungen', 'Beitragsbefreiung'],
                            'kfz': ['Pkw Privatnutzung', 'Fahrzeugwechsel', 'Neuzulassung', 'Inkl. Rabattschutz'],
                            'motorrad': ['Motorrad über 125 ccm', 'Saisonkennzeichen', 'Teilkasko', 'Vollkasko'],
                            'haftpflicht': ['Single-Tarif', 'Paar ohne Kind', 'Familie mit Kindern', '50 Mio. € Deckung'],
                            'hausrat': ['Mietwohnung', 'Eigentumswohnung', 'Einfamilienhaus', 'Inkl. Elementarschutz'],
                            'pkv': ['Angestellte (ab 77.400 € JAEG 2026)', 'Selbstständige / Freiberufler', 'Beamte & Anwärter', 'Studenten'],
                            'pkv-beamte': ['Bundesbeamte (50% Beihilfe)', 'Landesbeamte', 'Beamtenanwärter', 'Referendare'],
                            'pkv-studenten': ['Studenten unter 30', 'Günstiger Einstiegstarif', 'Freie Arztwahl', 'Auslandsschutz'],
                            'pkv-55': ['Wechsel über 55 Jahre', 'Standardtarif / Basistarif', 'Beitragsentlastung im Alter'],
                            'krankenzusatz': ['Zahnersatz bis 100%', 'Inkl. Zahnreinigung (PZR)', 'Kieferorthopädie', 'Leistungen laut Tarif'],
                            'berufsunfaehigkeit': ['Angestellte', 'Akademiker / Büro', 'Selbstständige', 'Verzicht auf Verweisung'],
                            'rechtsschutz': ['Privat + Beruf + Verkehr', 'Inkl. Mietrecht', 'Ohne Selbstbeteiligung', 'Kostenlose Erstberatung'],
                            'tierhalterhaftpflicht': ['Hundehaftpflicht', 'Pferdehaftpflicht', 'Ohne Leinenzwang', 'Inkl. Mietsachschäden'],
                            'hundekrankenversicherung': ['OP-Kostenschutz', 'Vollkrankenschutz', 'Freie Tierarztwahl', 'Zahnbehandlung'],
                            'unfallversicherung': ['24h Rundumschutz', 'Progression 350%', 'Mit Unfallrente', 'Weltweite Deckung'],
                            'rente': ['Monatlicher Sparbetrag', 'Garantierte Rente', 'Kapitalwahlrecht', 'Steuervorteile'],
                            'riester': ['Staatliche Zulagen', 'Kinderzulage bis 300 €', 'Sonderausgabenabzug', 'Wohn-Riester'],
                            'ruerup': ['Basisrente für Selbstständige', 'Maximaler Steuerabzug', 'Insolvenzsicher', 'Hinterbliebenenschutz'],
                            'risikolebensversicherung': ['Familienschutz', 'Darlehensabsicherung', 'Konstante Summe', 'Fallende Summe'],
                            'lebensversicherung': ['Hinterbliebenenschutz', 'Kapitalaufbau', 'Flexible Auszahlung'],
                            'grundbesitzerhaftpflicht': ['Vermietete Immobilie', 'Unbebautes Grundstück', 'Verkehrssicherungspflicht'],
                            'firmenversicherung': ['Betriebshaftpflicht', 'Inhaltsversicherung', 'Gewerblicher Rechtsschutz'],
                            'wohngebaeudeversicherung': ['Einfamilienhaus', 'Mehrfamilienhaus', 'Inkl. Elementarschutz', 'Photovoltaik mitversichert'],
                            'wohngebaeude': ['Einfamilienhaus', 'Mehrfamilienhaus', 'Inkl. Elementarschutz', 'Photovoltaik mitversichert']
                        };
                        const pills = quickPillsMap[safeName] || ['Optimaler Grundschutz', 'Top Preis-Leistung', 'Transparente Tarife'];
                        const defaultInitialHeights = {
                            'kfz': 385,
                            'motorrad': 385,
                            'haftpflicht': 365,
                            'hausrat': 365,
                            'tierhalterhaftpflicht': 365,
                            'rechtsschutz': 365,
                            'unfallversicherung': 365,
                            'grundbesitzerhaftpflicht': 365,
                            'hundekrankenversicherung': 365,
                            'wohngebaeudeversicherung': 365,
                            'wohngebaeude': 365,
                            'pflege': 355
                        };
                        const initH = defaultInitialHeights[safeName] || 355;

                        return `
                        <!-- Tarifmerkmale & Schwerpunkte -->
                        <div class="mb-4 bg-slate-50/90 p-3.5 rounded-2xl border border-slate-200">
                            <div class="text-[11px] font-black uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                                <i data-lucide="check-square" class="w-3.5 h-3.5 text-blue-600"></i> Wichtige Tarifmerkmale im Vergleich
                            </div>
                            <div class="flex flex-wrap gap-2">
                                ${pills.map(p => `
                                    <span class="px-3 py-1 bg-white text-slate-700 rounded-full text-xs font-semibold border border-slate-200 flex items-center gap-1.5 shadow-xs">
                                        <i data-lucide="check" class="w-3.5 h-3.5 text-blue-600"></i> ${p}
                                    </span>
                                `).join('')}
                            </div>
                        </div>
                        <div class="flex items-center justify-between px-4 py-2 bg-white/70 rounded-2xl mb-3 border border-slate-200 text-xs font-bold text-slate-600">
                            <span class="flex items-center gap-2"><i data-lucide="shield-check" class="w-4 h-4 text-blue-600"></i> Transparenter Vergleichsrechner*</span>
                            <span class="text-[11px] font-semibold text-slate-400">* Werbelink / Partnerlink</span>
                        </div>
                        <div class="calculator-card bg-white rounded-3xl window-frame p-2 md:p-3 transition-all duration-300 relative" style="overflow: hidden; min-height: 0px;">
                            ${data.iframes.map(iframe => `
                                <div id="${iframe.id}" style="width: 100%; height: ${initH}px; min-height: 0px;" class="transition-all duration-300"></div>
                                <script src="${iframe.src}" async></script>
                                <script>
                                (function() {
                                    var target = document.getElementById('${iframe.id}');
                                    if (!target) return;
                                    var card = target.closest('.calculator-card') || target.parentElement;
                                    var isInitial = true;
                                    var currentFormHeight = ${initH};

                                    var applyHeight = function(h) {
                                        var ifr = target.querySelector('iframe');
                                        if (ifr) {
                                            ifr.style.setProperty('height', h + 'px', 'important');
                                            ifr.style.setProperty('min-height', '0px', 'important');
                                        }
                                        target.style.setProperty('height', h + 'px', 'important');
                                        target.style.minHeight = '0px';
                                        if (card) {
                                            card.style.minHeight = '0px';
                                            card.style.height = 'auto';
                                        }
                                    };

                                    var clampHeight = function() {
                                        applyHeight(currentFormHeight);
                                    };

                                    var obs = new MutationObserver(function() {
                                        var ifr = target.querySelector('iframe');
                                        if (!ifr) return;
                                        var inlineH = parseInt(ifr.style.height, 10);
                                        if (isInitial && (inlineH === 500 || inlineH > currentFormHeight + 30)) {
                                            applyHeight(currentFormHeight);
                                        }
                                    });
                                    obs.observe(target, { childList: true, subtree: true, attributes: true, attributeFilter: ['style'] });

                                    var parseMsgHeight = function(data) {
                                        if (!data) return 0;
                                        if (typeof data === 'number') return data;
                                        if (typeof data === 'string') {
                                            var trimmed = data.trim();
                                            if (/^\\d+$/.test(trimmed)) return parseInt(trimmed, 10);
                                            try {
                                                var obj = JSON.parse(trimmed);
                                                if (typeof obj === 'number') return obj;
                                                if (obj && typeof obj === 'object') {
                                                    if (obj.bodyHeight) return parseInt(obj.bodyHeight, 10);
                                                    if (obj.height) return parseInt(obj.height, 10);
                                                }
                                            } catch(e) {}
                                        } else if (typeof data === 'object') {
                                            if (data.bodyHeight) return parseInt(data.bodyHeight, 10);
                                            if (data.height) return parseInt(data.height, 10);
                                        }
                                        return 0;
                                    };

                                    window.addEventListener('message', function(e) {
                                        try {
                                            var h = parseMsgHeight(e.data);
                                            if (h > 0) {
                                                if (h <= 550) {
                                                    currentFormHeight = h + 15;
                                                    applyHeight(currentFormHeight);
                                                } else {
                                                    isInitial = false;
                                                    currentFormHeight = h + 25;
                                                    applyHeight(currentFormHeight);
                                                }
                                            }
                                        } catch(err) {}
                                    });

                                    setTimeout(clampHeight, 50);
                                    setTimeout(clampHeight, 150);
                                    setTimeout(clampHeight, 400);
                                    setTimeout(clampHeight, 1000);
                                    setTimeout(clampHeight, 2500);
                                })();
                                </script>
                            `).join('')}
                        </div>`;
                    })() : ''}
                    ${data.iframes.length > 0 ? `
                    <div class="mt-4 p-4 bg-blue-50/60 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                        <div class="text-xs text-slate-600 font-medium">
                            Rechner lädt nicht? (z.B. durch Adblocker oder Browsersperren)
                        </div>
                        <a href="https://a.partner-versicherung.de/click.php?partner_id=72057" target="_blank" rel="noopener sponsored" class="inline-flex items-center gap-1.5 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-bold transition-all shadow-sm whitespace-nowrap">
                            Rechner direkt im neuen Fenster öffnen* <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                        </a>
                    </div>` : ''}
                    <p class="text-[11px] text-slate-500 mt-3 text-center">* Modellrechnung. Die tatsächliche Beitragshöhe und Ersparnis hängt vom individuellen Nutzungsverhalten, Vorschäden und den Konditionen des Anbieters ab.</p>
                </div>
            </div>` : ''}

            <div class="${isLegalPage ? 'max-w-4xl' : 'max-w-4xl mx-auto'} prose pt-16 ${!isLegalPage ? 'border-t border-slate-200' : ''}">
                ${data.seoContent}
                
                ${isBlogPage ? (() => {
                    const blogCtaMap = {
                        'blog-fuenf-wichtigste-versicherungen-berufsstarter': [
                            { title: 'Berufsunfähigkeitsversicherung vergleichen*', url: 'berufsunfaehigkeit.html', icon: 'briefcase', text: 'Einkommen absichern ab Berufsstart' },
                            { title: 'Privathaftpflicht berechnen*', url: 'haftpflicht.html', icon: 'shield', text: 'Grundabsicherung ab unter 3 € / Monat' },
                            { title: 'Hausratversicherung berechnen*', url: 'hausrat.html', icon: 'home', text: 'Erste eigene Wohnung günstig schützen' }
                        ],
                        'blog-pkv-vs-gkv-der-ultimative-vergleich': [
                            { title: 'Private Krankenversicherung vergleichen*', url: 'pkv.html', icon: 'heart-pulse', text: 'Tarife für Angestellte, Selbstständige & Beamte' },
                            { title: 'PKV für Beamte vergleichen*', url: 'pkv-beamte.html', icon: 'user-check', text: 'Beihilfe-Ergänzungstarife berechnen' }
                        ],
                        'blog-zahnzusatzversicherung-ratgeber': [
                            { title: 'Zahnzusatzversicherung vergleichen*', url: 'krankenzusatz.html', icon: 'smile', text: 'Bis zu 100% für Zahnersatz, Implantate & PZR' }
                        ],
                        'blog-hundehaftpflicht-und-tierhalter-guide': [
                            { title: 'Hundehaftpflicht vergleichen*', url: 'tierhalterhaftpflicht.html', icon: 'dog', text: 'Gesetzliche Pflicht erfüllen ab ca. 3,50 € / Monat' },
                            { title: 'Hundekrankenversicherung vergleichen*', url: 'hundekrankenversicherung.html', icon: 'activity', text: 'Tierarztkosten & OP-Schutz absichern' }
                        ],
                        'blog-hausrat-versicherung-guide': [
                            { title: 'Hausratversicherung online vergleichen*', url: 'hausrat.html', icon: 'home', text: 'Einbruch, Feuer, Leitungswasser & Elementarschutz' }
                        ],
                        'blog-berufsunfaehigkeit-ratgeber': [
                            { title: 'Berufsunfähigkeits-Rechner starten*', url: 'berufsunfaehigkeit.html', icon: 'briefcase', text: 'Existenzschutz mit Verzicht auf abstrakte Verweisung' }
                        ],
                        'blog-versicherungen-fuer-familien': [
                            { title: 'Familien-Haftpflicht vergleichen*', url: 'haftpflicht.html', icon: 'users', text: 'Schutz für Eltern und Kinder' },
                            { title: 'Risikolebensversicherung vergleichen*', url: 'risikolebensversicherung.html', icon: 'heart', text: 'Günstiger Hinterbliebenenschutz' },
                            { title: 'Hausratversicherung vergleichen*', url: 'hausrat.html', icon: 'home', text: 'Familienheim komplett absichern' }
                        ],
                        'blog-private-altersvorsorge-vergleich': [
                            { title: 'Private Rentenversicherung vergleichen*', url: 'rente.html', icon: 'piggy-bank', text: 'Lebenslange garantierte Zusatzrente' },
                            { title: 'Riester-Rente vergleichen*', url: 'riester.html', icon: 'landmark', text: 'Staatliche Zulagen & Steuerförderung nutzen' },
                            { title: 'Rürup-Rente vergleichen*', url: 'ruerup.html', icon: 'wallet', text: 'Maximale Steuerersparnis für Selbstständige' }
                        ],
                        'blog-rechtsschutzversicherung-ratgeber': [
                            { title: 'Rechtsschutzversicherung vergleichen*', url: 'rechtsschutz.html', icon: 'scale', text: 'Privat-, Berufs-, Verkehrs- & Mietrechtsschutz' }
                        ],
                        'blog-kfz-wechselsaison-fristen-spartipps-2025': [
                            { title: 'Kfz-Versicherungsvergleich starten*', url: 'kfz.html', icon: 'car', text: 'Bis zu 850 € sparen mit eVB-Sofortübermittlung' }
                        ],
                        'blog-sonderkuendigung-kfz-versicherung': [
                            { title: 'Jetzt Kfz-Tarife vergleichen & wechseln*', url: 'kfz.html', icon: 'car', text: 'Sonderkündigungsrecht nutzen und sparen' }
                        ],
                        'blog-versicherung-glossar': [
                            { title: 'Kfz-Vergleich*', url: 'kfz.html', icon: 'car', text: 'Autoversicherung online berechnen' },
                            { title: 'Haftpflicht-Vergleich*', url: 'haftpflicht.html', icon: 'shield', text: 'Privathaftpflicht berechnen' },
                            { title: 'BU-Vergleich*', url: 'berufsunfaehigkeit.html', icon: 'briefcase', text: 'Berufsunfähigkeit berechnen' },
                            { title: 'PKV-Vergleich*', url: 'pkv.html', icon: 'heart-pulse', text: 'Private Krankenversicherung berechnen' }
                        ]
                    };

                    const ctaItems = blogCtaMap[safeName] || [
                        { title: 'Tarife im Vergleichsrechner berechnen*', url: 'index.html#versicherungen', icon: 'calculator', text: 'Über 300 Anbieter unabhängig vergleichen' }
                    ];

                    return `
                    <div class="mt-16 p-8 md:p-10 bg-gradient-to-br from-blue-50 to-indigo-50/60 rounded-3xl border border-blue-200 not-prose shadow-sm">
                        <div class="mb-6">
                            <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-black uppercase tracking-wider mb-2">
                                <i data-lucide="calculator" class="w-3.5 h-3.5"></i> Jetzt vergleichen
                            </span>
                            <h3 class="text-2xl font-black text-slate-900 tracking-tight">Passende Tarifrechner zu diesem Thema</h3>
                            <p class="text-slate-600 text-sm font-medium">Vergleichen Sie kostenfrei und unabhängig die aktuellen Konditionen der führenden Anbieter:</p>
                        </div>
                        <div class="grid grid-cols-1 ${ctaItems.length > 1 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-1'} gap-4">
                            ${ctaItems.map(cta => `
                                <a href="${cta.url}" class="group bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all flex flex-col justify-between">
                                    <div>
                                        <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center mb-3 transition-colors">
                                            <i data-lucide="${cta.icon}" class="w-5 h-5"></i>
                                        </div>
                                        <h4 class="font-bold text-slate-900 text-base mb-1 group-hover:text-blue-600 transition-colors">${cta.title}</h4>
                                        <p class="text-slate-500 text-xs font-medium mb-4">${cta.text}</p>
                                    </div>
                                    <div class="text-xs font-black uppercase tracking-wider text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                        Rechner öffnen* <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                                    </div>
                                </a>
                            `).join('')}
                        </div>
                        <p class="text-[11px] text-slate-400 mt-4">* Partnerlink: Kostenloser und unverbindlicher Tarifvergleich über unseren Einbindungspartner TARIFCHECK24 GmbH.</p>
                    </div>
                    `;
                })() : ''}

                ${!isLegalPage && data.iframes.length > 0 ? `
                <div class="mt-16 bg-slate-50 p-10 rounded-3xl border border-slate-200">
                    <h2 class="!border-none !p-0 !mt-0 text-2xl font-black text-slate-900 mb-4">Hinweise zum Tarifvergleich</h2>
                    <p class="mb-0 text-slate-600 font-medium leading-relaxed">Achten Sie beim Vergleich von Versicherungen nicht nur auf den Monatsbeitrag. Besonders bei langfristigen Verträgen sind der konkrete Leistungsumfang im Schadensfall und die Flexibilität der Tarifbedingungen von entscheidender Bedeutung.</p>
                </div>` : ''}

                ${!isLegalPage ? `
                <!-- Redaktioneller Hinweis -->
                <div class="mt-14 not-prose bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-lg shadow-md flex-shrink-0">
                                VO
                            </div>
                            <div>
                                <div class="flex items-center gap-2 flex-wrap">
                                    <span class="font-black text-slate-900 text-base">Redaktion versicherungsofort.de</span>
                                    <span class="px-2.5 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-bold rounded-full uppercase tracking-wider border border-slate-200">Verbraucherinformation</span>
                                </div>
                                <p class="text-xs text-slate-500 font-medium mt-0.5">Unabhängige Informationen &amp; Tarifvergleiche über geprüfte Partner-Schnittstellen</p>
                            </div>
                        </div>
                    </div>
                    <div class="pt-5 text-xs text-slate-600 leading-relaxed font-medium">
                        Die Redaktion von versicherungsofort.de stellt verständliche Leitfäden und Tarifvergleiche bereit. Alle Beitrags- und Konditionsberechnungen werden in den Vergleichsrechnern unserer Partner (z.B. TARIFCHECK24 GmbH) auf Basis der Angaben der jeweiligen Versicherungsgesellschaften durchgeführt.
                    </div>
                </div>` : ''}
            </div>
        </div>
    </section>
    `;

    let schema = null;
    if (isBlogPage) {
        schema = {
            "@type": "Article",
            "headline": data.h1Title,
            "description": data.subtitle,
            "author": {
                "@type": "Organization",
                "name": "Redaktion versicherungsofort.de"
            },
            "publisher": {
                "@type": "Organization",
                "name": "versicherungsofort.de"
            },
            "datePublished": "2025-01-15",
            "inLanguage": "de"
        };
    } else {
        schema = {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Startseite",
                    "item": "https://www.versicherungsofort.de/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": data.h1Title,
                    "item": `https://www.versicherungsofort.de/${safeName}`
                }
            ]
        };
    }

    const html = wrapHtml(data.seoTitle, data.seoDesc, content, safeName, schema);
    fs.writeFileSync(path.join(OUT_DIR, safeName + '.html'), html);
    generatedSlugs.add(safeName);
    console.log("✓ Generated Page:", safeName + '.html');
});

// Also generate reciprocal aliases for common alternate URL paths
const ALIAS_PAIRS = [
    ['wohngebaeudeversicherung', 'wohngebaeude'],
    ['kfz', 'kfz-versicherung'],
    ['haftpflicht', 'haftpflichtversicherung'],
    ['berufsunfaehigkeit', 'berufsunfaehigkeitsversicherung'],
    ['hausrat', 'hausratversicherung'],
    ['krankenzusatz', 'krankenzusatzversicherung'],
    ['motorrad', 'motorradversicherung'],
    ['unfallversicherung', 'unfall']
];

ALIAS_PAIRS.forEach(([src, dest]) => {
    const srcFile = path.join(OUT_DIR, src + '.html');
    const destFile = path.join(OUT_DIR, dest + '.html');
    if (fs.existsSync(srcFile)) {
        fs.copyFileSync(srcFile, destFile);
        generatedSlugs.add(dest);
        console.log(`✓ Synchronized Alias Page: ${dest}.html -> ${src}.html`);
    } else if (fs.existsSync(destFile)) {
        fs.copyFileSync(destFile, srcFile);
        generatedSlugs.add(src);
        console.log(`✓ Synchronized Alias Page: ${src}.html -> ${dest}.html`);
    }
});

// --- 5. INDEX.HTML REGENERATION ---

const categories = [
  {
    title: "Fahrzeuge & Mobilität",
    items: [
      { title: "Kfz-Versicherung", url: "kfz", icon: "car", description: "Pkw-Haftpflicht, Teilkasko & Vollkasko vergleichen.", type: "vergleich" },
      { title: "Motorradversicherung", url: "motorrad", icon: "gauge", description: "Motorräder, Roller & Quads günstig absichern.", type: "vergleich" }
    ]
  },
  {
    title: "Haftpflicht & Sachwerte",
    items: [
      { title: "Privathaftpflicht", url: "haftpflicht", icon: "shield", description: "Absicherung vor Schadensersatzansprüchen Dritter.", type: "vergleich" },
      { title: "Hausratversicherung", url: "hausrat", icon: "home", description: "Schutz für Möbel & Wertsachen bei Feuer, Einbruch & Sturm.", type: "vergleich" },
      { title: "Wohngebäudeversicherung", url: "wohngebaeudeversicherung", icon: "home", description: "Immobilienschutz bei Feuer, Leitungswasser & Elementarschäden.", type: "vergleich" },
      { title: "Hundehaftpflicht & Tierhalter", url: "tierhalterhaftpflicht", icon: "dog", description: "Haftpflichtschutz für Hunde- & Pferdehalter.", type: "vergleich" },
      { title: "Hundekrankenversicherung", url: "hundekrankenversicherung", icon: "activity", description: "Tierarztkosten & Operationsschutz für Hunde.", type: "vergleich" },
      { title: "Haus- & Grundbesitzerhaftpflicht", url: "grundbesitzerhaftpflicht", icon: "building-2", description: "Haftpflichtschutz für Vermieter & Grundstückseigentümer.", type: "vergleich" }
    ]
  },
  {
    title: "Recht & Gewerbe",
    items: [
      { title: "Rechtsschutzversicherung", url: "rechtsschutz", icon: "scale", description: "Kostenübernahme für Anwälte & Gerichte je nach Baustein.", type: "vergleich" },
      { title: "Firmen- & Gewerbeversicherung", url: "firmenversicherung", icon: "building", description: "Betriebshaftpflicht & Inhaltsversicherung für Gewerbe.", type: "anfrage" }
    ]
  },
  {
    title: "Gesundheit & Pflege",
    items: [
      { title: "Private Krankenversicherung (PKV)", url: "pkv", icon: "heart-pulse", description: "Krankenvollversicherung für Angestellte über JAEG, Beamte & Selbstständige.", type: "vergleich" },
      { title: "PKV für Beamte & Anwärter", url: "pkv-beamte", icon: "user-check", description: "Beihilfe-Ergänzungstarife für den öffentlichen Dienst.", type: "vergleich" },
      { title: "PKV für Studenten", url: "pkv-studenten", icon: "graduation-cap", description: "Studentische Krankenversicherungstarife.", type: "vergleich" },
      { title: "PKV Tarifwechsel ab 55", url: "pkv-55", icon: "users", description: "Beitragsoptimierung & interner Tarifwechsel nach § 204 VVG.", type: "anfrage" },
      { title: "Zahnzusatz & Krankenzusatz", url: "krankenzusatz", icon: "smile", description: "Tarifabhängige Kostenerstattung für Zahnersatz & Prophylaxe.", type: "vergleich" },
      { title: "Pflegezusatzversicherung", url: "pflege", icon: "activity", description: "Pflegetagegeld & Erstattung für Pflegegrade 1-5.", type: "vergleich" }
    ]
  },
  {
    title: "Vorsorge & Arbeitskraft",
    items: [
      { title: "Berufsunfähigkeitsversicherung (BU)", url: "berufsunfaehigkeit", icon: "briefcase", description: "Einkommensschutz bei dauerhafter Krankheit oder Unfall.", type: "vergleich" },
      { title: "Unfallversicherung", url: "unfallversicherung", icon: "shield-alert", description: "24-Stunden-Invaliditätsschutz für Freizeit & Beruf.", type: "vergleich" },
      { title: "Risikolebensversicherung", url: "risikolebensversicherung", icon: "life-buoy", description: "Hinterbliebenenschutz zur Immobilien- & Familienabsicherung.", type: "vergleich" },
      { title: "Kapitallebensversicherung", url: "lebensversicherung", icon: "umbrella", description: "Kombination aus Todesfallschutz und Sparanteil.", type: "vergleich" },
      { title: "Private Rentenversicherung", url: "rente", icon: "coins", description: "Private Altersvorsorgevereinbarung mit Rentenoption.", type: "vergleich" },
      { title: "Riester-Rente", url: "riester", icon: "landmark", description: "Staatlich geförderte Altersvorsorge mit Zulagen.", type: "vergleich" },
      { title: "Rürup-Rente (Basisrente)", url: "ruerup", icon: "trending-up", description: "Steuerbegünstigte Basisversorgung für Selbstständige & Angestellte.", type: "vergleich" }
    ]
  }
];

let catsHtml = '';
categories.forEach(cat => {
    catsHtml += `
    <div class="mb-16">
        <div class="flex items-center space-x-6 mb-8">
            <h3 class="text-xs font-black uppercase tracking-[0.25em] text-slate-500">${cat.title}</h3>
            <div class="flex-1 h-px bg-slate-200"></div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    `;
    cat.items.forEach(item => {
        const ctaText = item.type === 'anfrage' ? 'Angebot anfragen*' : 'Tarife vergleichen*';
        catsHtml += `
            <a href="${item.url}.html" class="glass group rounded-3xl p-7 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full border border-slate-200">
                <div>
                    <div class="icon-pill mb-5 text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <i data-lucide="${item.icon}"></i>
                    </div>
                    <h4 class="text-lg font-bold text-slate-900 mb-2 tracking-tight leading-snug">${item.title}</h4>
                    <p class="text-slate-600 text-xs font-medium leading-relaxed mb-6">${item.description}</p>
                </div>
                <div class="flex items-center text-xs font-black uppercase tracking-wider text-blue-600 group-hover:translate-x-1 transition-transform">
                    ${ctaText} <i data-lucide="chevron-right" class="w-4 h-4 ml-1"></i>
                </div>
            </a>
        `;
    });
    catsHtml += `</div></div>`;
});

const indexContent = `
<section class="relative bg-white pt-20 pb-28 lg:pt-32 lg:pb-40 overflow-hidden px-4 border-b border-slate-100">
    <div class="relative max-w-7xl mx-auto text-center">
        <div class="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-slate-200 text-xs font-black uppercase tracking-widest text-slate-600 mb-10 bg-slate-50 shadow-xs">
            <span class="w-2 h-2 rounded-full bg-blue-600"></span>
            Unabhängiges Informations- & Vergleichsportal
        </div>
        <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tightest leading-[1.1]">
            Versicherungen vergleichen. <br/><span class="text-blue-600">Faktenbasiert & transparent.</span>
        </h1>
        <p class="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-semibold tracking-tight">
            Transparente Tarifübersichten von über 300 Versicherungsgesellschaften. Ohne Verkaufsdruck, ohne versteckte Gebühren.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#versicherungen" class="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-base font-black rounded-full shadow-xl shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                Tarife vergleichen*
            </a>
            <a href="ratgeber.html" class="bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 px-10 py-4 text-base font-bold rounded-full transition-all">
                Zum Ratgeber
            </a>
        </div>
    </div>
</section>

<section class="py-24 bg-slate-50/80 border-b border-slate-200 relative">
    <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="grid md:grid-cols-3 gap-8">
            <div class="glass p-8 rounded-3xl border border-slate-200">
                <div class="icon-pill mb-6 bg-slate-900 text-white"><i data-lucide="zap" class="w-5 h-5"></i></div>
                <h3 class="text-xl font-black mb-2 tracking-tight">Direkte Rechner-Eingabe</h3>
                <p class="text-slate-600 font-medium text-sm leading-relaxed">Eingestellte Online-Vergleichsrechner unserer Partner ermöglichen die sofortige Eingabe Ihrer Objektdaten.</p>
            </div>
            <div class="glass p-8 rounded-3xl border border-slate-200">
                <div class="icon-pill mb-6 bg-slate-900 text-white"><i data-lucide="shield" class="w-5 h-5"></i></div>
                <h3 class="text-xl font-black mb-2 tracking-tight">Verschlüsselt & DSGVO-konform</h3>
                <p class="text-slate-600 font-medium text-sm leading-relaxed">Verschlüsselte Datenübertragung (HTTPS). Lokaler System-Schriftarten-Stack ohne externe Google-Fonts-CDNs.</p>
            </div>
            <div class="glass p-8 rounded-3xl border border-slate-200">
                <div class="icon-pill mb-6 bg-slate-900 text-white"><i data-lucide="trending-down" class="w-5 h-5"></i></div>
                <h3 class="text-xl font-black mb-2 tracking-tight">Transparente Preisübersicht</h3>
                <p class="text-slate-600 font-medium text-sm leading-relaxed">Vergleichen Sie Leistungen und Beiträge sachlich gegeneinander auf Basis der Anbieterkonditionen.</p>
            </div>
        </div>
    </div>
</section>

<section id="versicherungen" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4">
        <div class="mb-20 text-center">
            <h2 class="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tightest leading-tight">Alle verfügbaren Versicherungsvergleiche</h2>
            <p class="text-slate-600 font-medium text-base max-w-2xl mx-auto">Wählen Sie Ihre gewünschte Sparte für detaillierte Tarifrechner und transparente Konditionen.</p>
        </div>
        <div class="space-y-12">
            ${catsHtml}
        </div>
    </div>
</section>

<!-- WISSENSDATENBANK SECTION -->
<section class="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="mb-16 text-center">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 text-xs font-black uppercase tracking-widest text-blue-700 mb-4 bg-blue-50/50">
                <i data-lucide="book-open" class="w-4 h-4"></i> Leitfäden & Ratgeber
            </div>
            <h2 class="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tightest">Wissensdatenbank</h2>
            <p class="text-base text-slate-600 font-medium max-w-2xl mx-auto">Fundiertes Expertenwissen für Ihre Versicherungsentscheidungen – kostenlos, unabhängig und nachprüfbar.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <a href="blog-fuenf-wichtigste-versicherungen-berufsstarter.html" class="glass group rounded-3xl p-7 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 flex flex-col justify-between">
                <div>
                    <div class="icon-pill mb-5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors"><i data-lucide="graduation-cap"></i></div>
                    <div class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-2">Ratgeber</div>
                    <h3 class="text-lg font-bold text-slate-900 mb-2 tracking-tight leading-snug">5 wichtige Versicherungen für Berufseinsteiger</h3>
                    <p class="text-slate-600 text-xs font-medium leading-relaxed mb-4">Welche Policen zum Berufsstart Priorität haben.</p>
                </div>
                <div class="text-xs font-bold text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">Lesen <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i></div>
            </a>
            <a href="blog-pkv-vs-gkv-der-ultimative-vergleich.html" class="glass group rounded-3xl p-7 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 flex flex-col justify-between">
                <div>
                    <div class="icon-pill mb-5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors"><i data-lucide="heart-pulse"></i></div>
                    <div class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-2">Systemvergleich</div>
                    <h3 class="text-lg font-bold text-slate-900 mb-2 tracking-tight leading-snug">PKV vs. GKV: Der ultimative Vergleich</h3>
                    <p class="text-slate-600 text-xs font-medium leading-relaxed mb-4">Wann sich der Wechsel in die private Krankenversicherung rechnet.</p>
                </div>
                <div class="text-xs font-bold text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">Lesen <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i></div>
            </a>
            <a href="blog-zahnzusatzversicherung-ratgeber.html" class="glass group rounded-3xl p-7 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 flex flex-col justify-between">
                <div>
                    <div class="icon-pill mb-5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors"><i data-lucide="smile"></i></div>
                    <div class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-2">Gesundheit</div>
                    <h3 class="text-lg font-bold text-slate-900 mb-2 tracking-tight leading-snug">Zahnzusatzversicherung Ratgeber</h3>
                    <p class="text-slate-600 text-xs font-medium leading-relaxed mb-4">Festzuschüsse, Implantate, Zahnstaffeln und Wartezeiten.</p>
                </div>
                <div class="text-xs font-bold text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">Lesen <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i></div>
            </a>
            <a href="blog-hundehaftpflicht-und-tierhalter-guide.html" class="glass group rounded-3xl p-7 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 flex flex-col justify-between">
                <div>
                    <div class="icon-pill mb-5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors"><i data-lucide="dog"></i></div>
                    <div class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-2">Tierhalter</div>
                    <h3 class="text-lg font-bold text-slate-900 mb-2 tracking-tight leading-snug">Hundehaftpflicht & Pflichten</h3>
                    <p class="text-slate-600 text-xs font-medium leading-relaxed mb-4">Gefährdungshaftung nach § 833 BGB und Schutz vor Schadensersatz.</p>
                </div>
                <div class="text-xs font-bold text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">Lesen <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i></div>
            </a>
            <a href="blog-hausrat-versicherung-guide.html" class="glass group rounded-3xl p-7 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 flex flex-col justify-between">
                <div>
                    <div class="icon-pill mb-5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors"><i data-lucide="home"></i></div>
                    <div class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-2">Sachwerte</div>
                    <h3 class="text-lg font-bold text-slate-900 mb-2 tracking-tight leading-snug">Hausratversicherung Guide</h3>
                    <p class="text-slate-600 text-xs font-medium leading-relaxed mb-4">Leistungen, Ausschlüsse und die richtige Versicherungssumme.</p>
                </div>
                <div class="text-xs font-bold text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">Lesen <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i></div>
            </a>
            <a href="blog-berufsunfaehigkeit-ratgeber.html" class="glass group rounded-3xl p-7 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 flex flex-col justify-between">
                <div>
                    <div class="icon-pill mb-5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors"><i data-lucide="briefcase"></i></div>
                    <div class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-2">Existenzschutz</div>
                    <h3 class="text-lg font-bold text-slate-900 mb-2 tracking-tight leading-snug">Berufsunfähigkeit: Warum unverzichtbar</h3>
                    <p class="text-slate-600 text-xs font-medium leading-relaxed mb-4">Klauseln, Rentenhöhe und der richtige Abschlusszeitpunkt.</p>
                </div>
                <div class="text-xs font-bold text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">Lesen <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i></div>
            </a>
            <a href="blog-versicherungen-fuer-familien.html" class="glass group rounded-3xl p-7 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 flex flex-col justify-between">
                <div>
                    <div class="icon-pill mb-5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors"><i data-lucide="users"></i></div>
                    <div class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-2">Familienplan</div>
                    <h3 class="text-lg font-bold text-slate-900 mb-2 tracking-tight leading-snug">Versicherungen für Familien</h3>
                    <p class="text-slate-600 text-xs font-medium leading-relaxed mb-4">Umfassender Absicherungsplan für Eltern und Kinder.</p>
                </div>
                <div class="text-xs font-bold text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">Lesen <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i></div>
            </a>
            <a href="blog-versicherung-glossar.html" class="glass group rounded-3xl p-7 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 flex flex-col justify-between">
                <div>
                    <div class="icon-pill mb-5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors"><i data-lucide="book-open"></i></div>
                    <div class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-2">Lexikon A-Z</div>
                    <h3 class="text-lg font-bold text-slate-900 mb-2 tracking-tight leading-snug">Versicherungs-Glossar</h3>
                    <p class="text-slate-600 text-xs font-medium leading-relaxed mb-4">Fachbegriffe wie AVB, Deckungssumme & SF-Klasse einfach erklärt.</p>
                </div>
                <div class="text-xs font-bold text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">Lesen <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i></div>
            </a>
        </div>
        <div class="mt-12 text-center">
            <a href="ratgeber.html" class="inline-flex items-center text-sm font-black text-blue-600 hover:text-blue-700 uppercase tracking-widest transition-colors">
                Alle Ratgeber und Spartipps ansehen <i data-lucide="arrow-right" class="w-4 h-4 ml-2"></i>
            </a>
        </div>
    </div>
</section>

<!-- RATGEBER / PROSE SECTION -->
<section class="py-24 bg-white relative overflow-hidden">
    <div class="max-w-5xl mx-auto px-4 relative z-10">
        <div class="prose prose-xl max-w-none">
            <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-10 tracking-tightest">Ihr Verbraucherratgeber für Versicherungen</h2>
            <div class="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3">Warum sich ein regelmäßiger Marktvergleich lohnt</h3>
                    <p class="text-slate-600 leading-relaxed font-medium">Der deutsche Versicherungsmarkt zeichnet sich durch einen intensiven Wettbewerb und ständige Tarifinnovationen aus. Wer bestehende Policen alle ein bis zwei Jahre überprüft, profitiert nicht nur von oft deutlich günstigeren Beiträgen, sondern insbesondere von besseren Versicherungsbedingungen – beispielsweise höheren Deckungssummen, Verzicht auf grobe Fahrlässigkeit oder modernen Cyber- und Elementarschutzklauseln.</p>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3">Die richtige Vorsorge für jeden Lebensabschnitt</h3>
                    <p class="text-slate-600 leading-relaxed font-medium">Jede Lebensphase bringt veränderte Risiken mit sich: Beim Einstieg in Ausbildung oder Beruf stehen Privathaftpflicht und die Absicherung der eigenen Arbeitskraft an erster Stelle. Mit der Familiengründung gewinnen Risikolebens- und Wohngebäudeversicherungen an Relevanz, während im fortgeschrittenen Alter die Pflegeabsicherung und die private Altersvorsorge in den Mittelpunkt rücken.</p>
                </div>
            </div>
            <div class="p-10 bg-slate-50 rounded-3xl border border-slate-200">
                <h3 class="text-xl font-black text-slate-900 mb-4">Wichtige Prüfkriterien für den Online-Vergleich</h3>
                <p class="text-slate-600 mb-6 font-medium">Beachten Sie bei der Auswahl Ihres Tarifs folgende grundlegende Qualitätsmerkmale:</p>
                <ul class="grid md:grid-cols-2 gap-3">
                    <li class="flex items-center gap-3 font-semibold text-slate-700"><i data-lucide="check" class="w-5 h-5 text-blue-600"></i> Ausreichend hohe Deckungssummen</li>
                    <li class="flex items-center gap-3 font-semibold text-slate-700"><i data-lucide="check" class="w-5 h-5 text-blue-600"></i> Verzicht auf Einwand grober Fahrlässigkeit</li>
                    <li class="flex items-center gap-3 font-semibold text-slate-700"><i data-lucide="check" class="w-5 h-5 text-blue-600"></i> Keine versteckten Selbstbeteiligungen</li>
                    <li class="flex items-center gap-3 font-semibold text-slate-700"><i data-lucide="check" class="w-5 h-5 text-blue-600"></i> Transparente Kündigungs- und Wechselmodalitäten</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- CALL TO ACTION -->
<section class="py-24 bg-slate-900 text-white relative overflow-hidden text-center px-4 rounded-3xl mx-4 mb-16 shadow-xl">
    <div class="relative z-10 max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-5xl font-black mb-6 tracking-tightest leading-tight">Unabhängig & sicher vergleichen. <br/>Jetzt passenden Tarif finden.</h2>
        <p class="text-slate-300 text-base md:text-lg mb-8 max-w-xl mx-auto font-medium">Starten Sie Ihren kostenlosen Beitragsvergleich mit wenigen Klicks.</p>
        <a href="#versicherungen" class="inline-block bg-blue-600 hover:bg-blue-500 text-white px-12 py-4 text-lg font-black rounded-full shadow-xl transition-all duration-300 hover:scale-105">
            Kostenlos vergleichen*
        </a>
    </div>
</section>
`;

const finalIndexHtml = wrapHtml("Unabhängiger Versicherungsvergleich | versicherungsofort.de", "Expertengeführter, unabhängiger Versicherungsvergleich für alle Lebensbereiche. Tarife in Echtzeit vergleichen – transparent, digital und sicher.", indexContent, "index");
fs.writeFileSync(path.join(OUT_DIR, 'index.html'), finalIndexHtml);
generatedSlugs.add('index');
console.log("✓ Generated Elite Home Page: index.html");

// --- 6. GENERATE SITEMAP.XML & ROBOTS.TXT ---

const sitemapUrls = Array.from(generatedSlugs).map(slug => {
    const loc = slug === 'index' ? 'https://www.versicherungsofort.de/' : `https://www.versicherungsofort.de/${slug}`;
    const priority = slug === 'index' ? '1.0' : (slug.startsWith('blog-') ? '0.8' : '0.9');
    const changefreq = slug === 'index' ? 'daily' : (slug.startsWith('blog-') ? 'monthly' : 'weekly');
    const today = new Date().toISOString().split('T')[0];
    return `    <url>
        <loc>${loc}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
    </url>`;
}).join('\n');

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>`;

fs.writeFileSync(path.join(OUT_DIR, 'sitemap.xml'), sitemapXml);
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapXml);
console.log(`✓ Generated sitemap.xml with ${generatedSlugs.size} verified URLs`);

const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://www.versicherungsofort.de/sitemap.xml
`;

fs.writeFileSync(path.join(OUT_DIR, 'robots.txt'), robotsTxt);
fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robotsTxt);
console.log("✓ Generated robots.txt");

// --- 7. VERIFY VERCEL EXPORT CONFIG & PROJECT LINKING ---
const vercelJson = {
    "version": 2,
    "framework": null,
    "routes": [
        { "handle": "filesystem" },
        { "src": "/", "dest": "/index.html" },
        { "src": "/([^/]+)/?", "dest": "/$1.html" }
    ],
    "headers": [
        {
            "source": "/(.*)",
            "headers": [
                { "key": "Cache-Control", "value": "public, max-age=0, s-maxage=0, must-revalidate" },
                { "key": "X-Content-Type-Options", "value": "nosniff" },
                { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
                { "key": "X-XSS-Protection", "value": "1; mode=block" },
                { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
            ]
        }
    ]
};

fs.writeFileSync(path.join(__dirname, 'vercel.json'), JSON.stringify(vercelJson, null, 2));
fs.writeFileSync(path.join(OUT_DIR, 'vercel.json'), JSON.stringify(vercelJson, null, 2));
console.log("✓ Generated vercel.json configuration in root and html_build");

// Link Vercel project versicherungsofort.de (prj_o0842WwrVlsmekJCRdeYiHHaXIXn)
const vercelProjectDir = path.join(OUT_DIR, '.vercel');
if (!fs.existsSync(vercelProjectDir)) fs.mkdirSync(vercelProjectDir, { recursive: true });
fs.writeFileSync(path.join(vercelProjectDir, 'project.json'), JSON.stringify({
    "projectId": "prj_o0842WwrVlsmekJCRdeYiHHaXIXn",
    "orgId": "team_LeS342OoSSK3GbJuTTKRc6LF",
    "projectName": "versicherungsofort.de"
}, null, 2));
console.log("✓ Linked to Vercel production project: versicherungsofort.de");

console.log("\n==========================================");
console.log(`✓ COMPILATION FINISHED SUCCESSFULLY!`);
console.log(`Total Pages: ${generatedSlugs.size}`);
console.log("==========================================\n");
