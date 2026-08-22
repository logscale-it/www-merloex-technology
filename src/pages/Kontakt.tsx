import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'

// ponytail: the original Gravity Forms backend is gone with the WordPress install —
// forms submit via mailto until a real endpoint (e.g. Formspree/own API) exists.
export function mailtoSubmit(e: FormEvent<HTMLFormElement>, subject: string) {
  e.preventDefault()
  const data = new FormData(e.currentTarget)
  const body = [...data.entries()]
    .filter(([k]) => k !== 'consent')
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')
  window.location.href = `mailto:info@merloex.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
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

const MAILTO_HREF = `mailto:info@merloex.de?subject=${encodeURIComponent('Anfrage über merloex.de')}&body=${encodeURIComponent(
  'Name: \nTelefon: \n\nWie können wir Ihnen behilflich sein?\n'
)}`

export default function Kontakt() {
  return (
    <section className="section section-tinted">
      <div className="container two-col wide-left" style={{ alignItems: 'start' }}>
        <div>
          <h1>Kontakt</h1>
          <ul className="check-list" style={{ marginTop: '1.5rem' }}>
            <li><a href="tel:+4960536209552">+49 (0) 6053 6209552</a></li>
            <li><a href="mailto:info@merloex.de">info@merloex.de</a></li>
            <li>Merloex building technologies GmbH<br />Friedrich Wilhelm Straße 3<br />63607 Wächtersbach</li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/place/Merloex+building+technologies+GmbH/@50.2581226,9.2901668,15z/data=!4m2!3m1!1s0x0:0xbc9a1ee9d0a28a9f"
              >
                Anfahrt ➝
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Angebot anfordern</h2>
          <p style={{ margin: '1.5rem 0' }}>
            Schreiben Sie uns eine E-Mail — der Button öffnet Ihr E-Mail-Programm mit einer
            vorbereiteten Nachricht an uns.
          </p>
          <a className="btn btn-primary" href={MAILTO_HREF}>E-Mail schreiben</a>
        </div>
      </div>
    </section>
  )
}
