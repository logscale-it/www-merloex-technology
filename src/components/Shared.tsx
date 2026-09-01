import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { PHONE_HREF, services } from '../services'
import { Icon } from './Icons'

export function CtaButtons() {
  return (
    <div className="hero-buttons">
      <Link className="btn btn-primary" to="/kontakt">Jetzt Erstberatung vereinbaren</Link>
      <a className="btn btn-bordered" href={PHONE_HREF}><Icon name="call" />+49 (6053) 6209552</a>
    </div>
  )
}

export function Hero({ image, imageAlt = '', wide = false, card, children }: {
  image: string
  imageAlt?: string
  wide?: boolean
  card?: { label: string; value: string }
  children: ReactNode
}) {
  return (
    <section className="hero">
      <div className={`container two-col${wide ? ' wide-left' : ''}`}>
        <div className="copy">{children}</div>
        <div className={`hero-media${card ? ' has-card' : ''}`}>
          <img src={image} alt={imageAlt} />
          {card && (
            <div className="hero-card">
              <div>
                <span className="eyebrow">{card.label}</span>
                <strong>{card.value}</strong>
              </div>
              <span className="ico"><Icon name="verified" /></span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export function ServicesSection() {
  return (
    <section className="section section-white" id="leistungen">
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">Leistungen</span>
          <h2>Unsere <span>Leistungen</span></h2>
          <p>
            Bei uns erhalten Sie sämtliche professionelle Dienstleistungen, die Facility Management ausmachen,
            aus einer Hand. Ganzheitliches Konzept für Nachhaltigkeit, Werterhaltung und Sicherheit.
          </p>
        </div>
        <div className="services-grid">
          {services.map(s => (
            <div className="service-card" key={s.to}>
              <div className="icon-box"><Icon name={s.icon} /></div>
              <h3>{s.label}</h3>
              <ul className="check-list">
                {s.items.map(item => <li key={item}>{item}</li>)}
              </ul>
              <Link className="btn btn-bordered" to={s.to}>Mehr erfahren</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactCta() {
  return (
    <section className="section band">
      <div className="container copy">
        <span className="eyebrow">Kontakt</span>
        <h2>Haben Sie <span>Fragen?</span></h2>
        <p>Wir stehen Ihnen gerne zur Verfügung – rufen Sie an oder vereinbaren Sie eine kostenlose Erstberatung.</p>
        <CtaButtons />
      </div>
    </section>
  )
}
