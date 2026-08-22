import { fs2, fs3, fs4, i3, i4, i5 } from '../assets/images'
import type { FmPageData } from './FmPage'

export const technisch: FmPageData = {
  title: 'Technisches FM',
  intro: 'Das technische Facility Management konzentriert sich auf den eigentlichen Betrieb von Objekten und deren Anlagen.',
  heroImage: fs2,
  scopeTitle: <>Das technische FM <span>umfasst:</span></>,
  scopeItems: [
    'Betrieb und Kontrolle des Gebäudes',
    'Optimierung & Modernisierung',
    'Überwachung des Technik',
    'Grünanlagen Pflege',
    'Anlagenwartung und -reparatur',
    'Reparatur & Renovierung',
    'Medienver- und -entsorgung',
    'Notfallmanagement bei Stillstand',
    'Sachverständigenprüfungen',
    'Begehungen',
    'Kontrolle von Gewährleistungen, Auflagen und Vorschriften',
  ],
  detailImage: i3,
  detailTitle: <><span>Sichern</span> und Schützen</>,
  detailBody: (
    <>
      Dieser Bereich gehört zu unserer Kernkompetenz, denn er gewährleistet die Effizienz und Sicherheit aller technischen Transaktionen.<br />
      Im technischen FM sind wir sowohl für einfache Gebäudeautomationen als auch für hochkomplexe Systeme verantwortlich.<br />
      Wir sind in der Lage, verschiedene technische Mechanismen und Hilfsmittel zu bewerten, zu testen, zu optimieren und zu warten. Unsere Mitarbeiter werden laufend geschult und zusammen mit unserer langjährigen Erfahrung macht uns das zu einem verlässlichen Ansprechpartner für unsere Kunden.
    </>
  ),
  banner: {
    title: <>Bewerten und <span>Verbessern</span></>,
    body: 'Alle technischen Parameter eines Objekts werden von uns überwacht, Schwachstellen beständig analysiert und so sorgen wir für eine optimal funktionierende Ausstattung auf allen Ebenen. Ob im laufenden Betrieb, bei der Wartung oder im Notfall beim Stillstand: Wir sind stets mit dem benötigten Knowhow und qualifizierten Mitarbeitenden vor Ort, um technisches FM auf höchstem Niveau sicherzustellen.',
  },
}

export const infrastrukturell: FmPageData = {
  title: 'Infrastrukturelles FM',
  intro: 'Das infrastrukturelle Facility Management umfasst die Koordination sämtlicher Serviceleistungen rund um eine Immobilie.',
  heroImage: fs3,
  scopeTitle: <>Das infrastrukturelle FM <span>umfasst:</span></>,
  scopeItems: [
    'Waren- und Logistikdienste',
    'Hausmeisterdienste',
    'Reinigung',
    'Telefon- und Postdienste',
    'Sicherheitsdienste',
    'Gärtnerdienste',
    'Entsorgung',
    'Parkhausdienste',
  ],
  detailImage: i4,
  detailTitle: <><span>Zuverlässig</span> und flexibel</>,
  detailBody: (
    <>
      Derart kann auf Veränderungen umgehend reagiert werden, sodass bestehende Strukturen ergiebig genutzt und, falls nötig, bedarfsgerecht angepasst werden können.<br />
      Dadurch lassen sich Ausgaben verringern und Einnahmen vergrößern. Flexibilität und Zuverlässigkeit sind dabei zwei der wichtigsten Kriterien, an denen wir uns orientieren.
    </>
  ),
}

export const kaufmaennisch: FmPageData = {
  title: 'Kaufmännisches FM',
  intro: 'Das kaufmännische Facility Management umfasst alle Vorgänge rund um das Gebäude zwischen Asset-Management und technischem FM.',
  heroImage: fs4,
  scopeTitle: <>Das kaufmännische FM <span>umfasst:</span></>,
  scopeItems: [
    'Kostenplanung',
    'Kostenkontrolle',
    'Business Process Outsourcing',
    'Vertragsmanagement',
    'Beschaffungsmanagement',
    'Projektmanagement',
    'Kundendienst',
  ],
  detailImage: i5,
  detailTitle: <>Wirtschaftlichkeit durch <span>Übersicht</span></>,
  detailBody: (
    <>
      Insbesondere die beidseitige Perspektive auf die Ziele des Eigentümers einer Immobilie, als auch die Bedürfnisse der Mieter und Nutzer ist hier von entscheidender Bedeutung.<br />
      Wir haben hierfür einen internen Prozessplan definiert, der verschiedenste Kompetenzen und übergreifende Analysen zusammenführt und folglich präzise Schlussfolgerungen zulässt.
    </>
  ),
}
