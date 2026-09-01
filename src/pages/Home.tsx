import { Link } from 'react-router-dom'
import { hero, i1, i2 } from '../assets/images'
import { ContactCta, CtaButtons, Hero, ServicesSection } from '../components/Shared'

const quotes = [
  { text: '“Kann mich über nichts beschweren. Erledigen alles wie abgesprochen und ohne Zeitverzögerung”', author: 'Dominik D.' },
  { text: '“Super Leistungsangebot, toller Service und klasse Preisgestaltung. Bin sehr zufrieden!”', author: 'Philipp B.' },
  { text: '“Hier wird sehr saubere Arbeit geleistet. Alles Bestenst”', author: 'Christine L.' },
]

export default function Home() {
  return (
    <>
      <Hero
        image={hero}
        imageAlt="Modernes Bürogebäude"
        card={{ label: 'Erreichbarkeit', value: 'Mo – Fr 08:00 – 17:00 Uhr' }}
      >
        <h1>Facility <span>Management</span><br />aus einer Hand</h1>
        <p>
          Wir sind Spezialisten für Facility Management und Liegenschaftseffizienz. Verlassen Sie sich auf
          professionelle Dienstleistungen für den reibungslosen Betrieb Ihrer Immobilien.
        </p>
        <CtaButtons />
      </Hero>

      <ServicesSection />

      <section className="section">
        <div className="container two-col">
          <div className="copy">
            <span className="eyebrow">Über uns</span>
            <h2>Wir sorgen dafür, dass in Ihrem Gebäude alles <span>reibungslos</span> funktioniert.</h2>
            <p>Das Kernanliegen unseres Geschäftes ist „Vertrauen“, denn ein Hausmeisterservice ist Vertrauenssache, immerhin stellt Ihre Immobilie einen erheblichen Wert dar.</p>
            <p>Wir stellen Hausmeister für private und gewerbliche Immobilien und kümmern uns um Ihre Mieter sowie das gesamte Facility Management.</p>
            <div className="hero-buttons">
              <Link className="btn btn-bordered" to="/ueber-uns">Mehr über uns erfahren</Link>
            </div>
          </div>
          <div className="rounded"><img src={i1} alt="" /></div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container two-col">
          <div className="rounded"><img src={i2} alt="" /></div>
          <div className="copy">
            <span className="eyebrow">Lebenszyklus</span>
            <h2><span>Das Facility Management</span> im Lebenszyklus einer Immobilie</h2>
            <p className="lead">Wir erstellen das ganzheitliche Konzept für Nachhaltigkeit, Werterhaltung und Sicherheit.</p>
            <ul className="check-list">
              <li>Sichern und schützen</li>
              <li>Bewerten und verbessern</li>
              <li>Beschaffen und entwickeln</li>
            </ul>
            <div className="hero-buttons">
              <Link className="btn btn-bordered" to="/technisches-facility-management">Mehr erfahren</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tinted" id="referenzen">
        <div className="container">
          <div className="section-intro" style={{ marginBottom: 0 }}>
            <span className="eyebrow">Referenzen</span>
            <h2><span>Unsere Kunden</span> sind zufrieden mit uns</h2>
          </div>
          <div className="quotes">
            {quotes.map(q => (
              <blockquote key={q.author}>
                <p>{q.text}</p>
                <cite>— {q.author}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  )
}
