import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icons'
import { EMAIL, PHONE, PHONE_HREF } from '../services'

// ponytail: the original Gravity Forms backend is gone with the WordPress install —
// forms submit via mailto until a real endpoint (e.g. Formspree/own API) exists.
export function mailtoSubmit(e: FormEvent<HTMLFormElement>, subject: string) {
  e.preventDefault()
  const data = new FormData(e.currentTarget)
  const body = [...data.entries()]
    .filter(([k]) => k !== 'consent')
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export const CONSENT_TEXT = (
  <>
    Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner
    Anfrage erhoben und verarbeitet werden. Die Daten werden nach abgeschlossener
    Bearbeitung Ihrer Anfrage gelöscht. Detaillierte Informationen zum Umgang mit
    Nutzerdaten finden Sie in unserer{' '}
    <Link to="/datenschutzerklaerung" target="_blank">Datenschutzerklärung</Link>.
  </>
)

const MAILTO_HREF = `mailto:${EMAIL}?subject=${encodeURIComponent('Anfrage über merloex.de')}&body=${encodeURIComponent(
  'Name: \nTelefon: \n\nWie können wir Ihnen behilflich sein?\n'
)}`

const MAPS_HREF = 'https://www.google.com/maps/place/Merloex+building+technologies+GmbH/@50.2581226,9.2901668,15z/data=!4m2!3m1!1s0x0:0xbc9a1ee9d0a28a9f'

export default function Kontakt() {
  return (
    <section className="section section-tinted">
      <div className="container two-col wide-left" style={{ alignItems: 'start' }}>
        <div className="copy">
          <span className="eyebrow">Kontakt</span>
          <h1>Sprechen Sie <span>mit uns</span></h1>
          <p className="lead">Wir beraten Sie gerne persönlich – telefonisch, per E-Mail oder vor Ort in Wächtersbach.</p>
          <ul className="contact-list" style={{ marginTop: '2rem' }}>
            <li>
              <span className="ico"><Icon name="call" /></span>
              <div><small>Telefon</small><a href={PHONE_HREF}>{PHONE}</a></div>
            </li>
            <li>
              <span className="ico"><Icon name="mail" /></span>
              <div><small>E-Mail</small><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
            </li>
            <li>
              <span className="ico"><Icon name="place" /></span>
              <div>
                <small>Adresse</small>
                Merloex building technologies GmbH<br />Friedrich Wilhelm Straße 3<br />63607 Wächtersbach<br />
                <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer">Anfahrt planen →</a>
              </div>
            </li>
            <li>
              <span className="ico"><Icon name="schedule" /></span>
              <div><small>Öffnungszeiten</small>Montag – Freitag: 08:00 – 17:00 Uhr</div>
            </li>
          </ul>
        </div>
        <div className="card copy">
          <span className="eyebrow">Anfrage</span>
          <h2>Angebot anfordern</h2>
          <p>
            Schreiben Sie uns eine E-Mail — der Button öffnet Ihr E-Mail-Programm mit einer
            vorbereiteten Nachricht an uns.
          </p>
          <div className="hero-buttons">
            <a className="btn btn-primary" href={MAILTO_HREF}><Icon name="mail" />E-Mail schreiben</a>
          </div>
        </div>
      </div>
    </section>
  )
}
