import React from 'react';

export default function PkvVsGkvGuide() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1>PKV vs. GKV: Der Systemvergleich – Wann lohnt sich die Private Krankenversicherung?</h1>
      <p>Die Wahl zwischen der privaten Krankenversicherung (PKV) und der gesetzlichen Krankenversicherung (GKV) ist eine der wichtigsten finanziellen Weichenstellungen im Berufsleben. Beide Systeme unterscheiden sich grundlegend in Finanzierung, Leistungsangebot und Beitragsberechnung im Alter.</p>

      <h2>Das duale Krankenversicherungssystem im Überblick</h2>
      <p>In Deutschland existiert ein duales Krankenversicherungssystem aus GKV und PKV. Rund 73 Millionen Menschen sind in der gesetzlichen Krankenversicherung abgesichert, während rund 9 Millionen Personen eine private Krankenvollversicherung nutzen. Während die GKV nach dem Solidaritätsprinzip organisiert ist, basiert die PKV auf dem Äquivalenzprinzip und der individuellen Risiko- und Tarifkalkulation.</p>

      <h2>Wer kann in die PKV wechseln?</h2>
      <p>Der Zugang zur privaten Krankenversicherung ist gesetzlich geregelt. Eine Vollversicherung in der PKV steht folgenden Personengruppen offen:</p>
      <ul>
        <li><strong>Angestellte:</strong> Wenn das regelmäßige Jahresarbeitsentgelt die allgemeine Versicherungspflichtgrenze (JAEG 2026: <strong>77.400 €</strong> brutto/Jahr bzw. 6.450 € brutto/Monat) übersteigt.</li>
        <li><strong>Selbstständige &amp; Freiberufler:</strong> Unabhängig von der Höhe des Einkommens ab Beginn der selbstständigen Tätigkeit.</li>
        <li><strong>Beamte &amp; Beihilfeberechtigte:</strong> Erhalten Beihilfe vom Dienstherrn (je nach Bundesland 50 % bis 80 %) und sichern nur die verbleibende Restkostenquote über eine PKV ab.</li>
        <li><strong>Studierende:</strong> Können sich zu Studienbeginn von der Versicherungspflicht befreien lassen.</li>
      </ul>

      <h2>Vorteile &amp; Besonderheiten der privaten Krankenversicherung</h2>
      <h3>Tariflich vereinbarte Leistungen</h3>
      <p>Im Gegensatz zur GKV, deren Leistungskatalog gesetzlich definiert ist (§ 12 SGB V), bestimmt in der PKV der gewählte Vertrag den genauen Leistungsumfang. Typische Bausteine:</p>
      <ul>
        <li>Behandlung als Privatpatient im Krankenhaus (z.B. Ein- oder Zweibettzimmer, Chefarztbehandlung je nach Vereinbarung)</li>
        <li>Hochwertige Zahnersatz-Erstattung (z.B. 80 % bis 100 % für Inlays, Implantate und Prophylaxe)</li>
        <li>Erstattung von Heilpraktikerleistungen oder sehhilfen je nach Tarifbaustein</li>
        <li>Garantierter Leistungsumfang ohne gesetzliche Kürzungen während der Vertragslaufzeit</li>
      </ul>
      <h3>Risiko- und altersbasierte Beitragskalkulation</h3>
      <p>Der Beitrag in der PKV richtet sich nach dem Eintrittsalter, dem Gesundheitszustand bei Antragstellung und dem gewählten Leistungsumfang. Für junge, gesunde Angestellte mit hohem Einkommen liegt der Beitrag oft unter dem Höchstsatz der GKV.</p>

      <h2>Herausforderungen &amp; Aspekte bei der Entscheidung</h2>
      <h3>Beitragsentwicklung &amp; Beitragsberechnung im Alter</h3>
      <p>Die Beitragsentwicklung in der PKV verläuft unabhängig vom Einkommen im Alter. Um Beitragsanpassungen abzufedern, bildet die PKV gesetzliche und tarifliche Alterungsrückstellungen. Zusätzlich entfällt ab dem 60. Lebensjahr der 10-%-Zuschlag, und Rentner können einen Beitragszuschuss der Rentenversicherung beantragen.</p>
      <p>In der GKV zahlen pflichtversicherte Rentner (KVdR) Beiträge auf ihre gesetzliche Rente sowie auf Betriebsrenten, Versorgungsbezüge (unter Berücksichtigung gesetzlicher Freibeträge) und Arbeitseinkommen. Freiwillig in der GKV versicherte Rentner zahlen Beiträge auf sämtliche Einnahmen (inklusive Mieteinnahmen und Kapitalerträge bis zur Beitragsbemessungsgrenze).</p>

      <h3>Familienversicherung</h3>
      <p>In der GKV sind Ehepartner ohne eigenes Einkommen sowie Kinder unter bestimmten Voraussetzungen beitragsfrei familienversichert. In der PKV muss für jedes Familienmitglied ein eigener Vertrag abgeschlossen werden.</p>

      <h3>Rückkehrgrenzen in die GKV</h3>
      <p>Ein Wechsel von der PKV zurück in die GKV ist ab dem 55. Lebensjahr gesetzlich stark eingeschränkt (§ 6 Abs. 3a SGB V). Bei jüngeren Angestellten ist eine Rückkehr nur möglich, wenn das Einkommen dauerhaft unter die JAEG fällt.</p>

      <h2>Redaktionelle Quellen &amp; Datenstand</h2>
      <p className="text-xs text-slate-500 leading-relaxed font-medium pt-4 border-t border-slate-200">
        Datenstand: 2026. Quellen: Bundesministerium für Arbeit und Soziales (Rechengrößen der Sozialversicherung 2026), GKV-Spitzenverband, Verband der Privaten Krankenversicherung e.V. (PKV-Verband).
      </p>
    </article>
  );
}
