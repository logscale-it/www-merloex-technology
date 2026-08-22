import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { b, l1, l2, l3 } from '../assets/images'

export function CtaButtons() {
  return (
    <div className="hero-buttons">
      <Link className="btn btn-primary" to="/kontakt">Jetzt Erstberatung vereinbaren</Link>
      <a className="btn btn-bordered" href="tel:+4960536209552">+49 (6053) 6209552</a>
    </div>
  )
}

export function Hero({ image, imageAlt = '', wide = false, children }: {
  image: string
  imageAlt?: string
  wide?: boolean
  children: ReactNode
}) {
  return (
    <section className="section hero">
      <div className={`container two-col${wide ? ' wide-left' : ''}`}>
        <div>{children}</div>
        <div className="rounded"><img src={image} alt={imageAlt} /></div>
      </div>
    </section>
  )
}

const serviceCards = [
  {
    to: '/technisches-facility-management',
    title: 'Technisches FM',
    image: l1,
    items: ['Betrieb und Kontrolle des Gebäudes', 'Anlagenwartung und -reparatur', 'Überwachung des Technik', 'Begehungen'],
  },
  {
    to: '/infrastrukturelles-facility-management',
    title: 'Infra­strukturelles FM',
    image: l2,
    items: ['Kleinreparaturmanagement', 'Hausmeisterdienste', 'Objektreinigung', 'Objektsanierung/ Sanierungssteuerung'],
  },
  {
    to: '/kaufmaennisches-facility-management',
    title: 'Kauf­männisches FM',
    image: l3,
    items: ['Kostenplanung', 'Kostenkontrolle', 'Betriebskostenoptimierung', 'Budgetbetreuung Sanierung'],
  },
]

export function ServicesSection() {
  return (
    <section className="section section-tinted" id="leistungen">
      <div className="container">
        <div className="section-intro">
          <h2>Unsere <span>Leistungen</span></h2>
          <h4>Bei uns erhalten Sie sämtliche professionelle Dienstleistungen, die Facility Management ausmachen, aus einer Hand.</h4>
          <p>Ganzheitliches Konzept für Nachhaltigkeit, Werterhaltung und Sicherheit.</p>
        </div>
        <div className="services-grid">
          {serviceCards.map(card => (
            <div className="service-card" key={card.to}>
              <img src={card.image} alt={card.title} />
              <div className="card-body">
                <h3>{card.title}</h3>
                <ul className="check-list">
                  {card.items.map(item => <li key={item}>{item}</li>)}
                </ul>
                <Link className="btn btn-bordered" to={card.to}>Mehr erfahren</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactCta() {
  return (
    <section className="section">
      <div className="container two-col wide-left">
        <div>
          <h2>Haben Sie <span>Fragen?</span></h2>
          <h4>Wir stehen Ihnen gerne zur Verfügung.</h4>
          <CtaButtons />
        </div>
        <div className="rounded"><img src={b} alt="" /></div>
      </div>
    </section>
  )
}
