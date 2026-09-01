import { fs6, p1, p2, p3 } from '../assets/images'
import { Hero } from '../components/Shared'
import { CONSENT_TEXT, mailtoSubmit } from './Kontakt'

const jobs = [
  {
    title: 'Bauleiter',
    image: p1,
    text: 'Zur Verstärkung unseres Teams sind wir immer auf der Suche nach engagierten Menschen, denen wir die Projektsteuerung und die örtliche Bauleitung im Rhein Main Gebiet von anspruchsvollen Wohnungssanierungen anvertrauen können!',
  },
  {
    title: 'Hausmeister',
    image: p2,
    text: 'Als Allrounder mit handwerklichen Fähigkeiten für Kleinreparaturen sowie Auge fürs Detail sind Sie bei uns willkommen. Zur Verstärkung unseres Teams sind wir immer auf der Suche nach Mitarbeitern mit technischem Verständnis.',
  },
  {
    title: 'Reinigungskraft',
    image: p3,
    text: 'Zum nächstmöglichen Zeitpunkt suchen wir Sie unbefristet als Reinigungskraft im Rhein-Main-Gebiet Getreu des Mottos „Ordnung ist das halbe Leben“ sorgst du in unseren Objekten für Sauberkeit und stellst sicher, dass Eigentümer und Mieter sich wohlfühlen.',
  },
]

export default function Jobs() {
  return (
    <>
      <Hero image={fs6} wide>
        <span className="eyebrow">Karriere</span>
        <h1>Jobs bei <span>Merloex</span></h1>
        <p>Wir sind stets auf der Suche nach qualifizierten und zuverlässigen Mitarbeitern.</p>
      </Hero>

      <section className="section section-white">
        <div className="container">
          <div className="section-intro">
            <span className="eyebrow">Offene Stellen</span>
            <h2>Werden Sie Teil <span>unseres Teams</span></h2>
          </div>
          <div className="job-cards">
            {jobs.map(job => (
              <div className="job-card" key={job.title}>
                <img src={job.image} alt={job.title} />
                <div className="card-body">
                  <h4>{job.title}</h4>
                  <p>{job.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container copy">
          <span className="eyebrow">Bewerbung</span>
          <h2>Bewerbungsformular</h2>
          <p>
            Nutzen Sie unser Bewerbungsformular, um sich einfach und schnell zu bewerben.
            Lebenslauf und Zeugnisse können Sie der E-Mail als Anhang beifügen.
          </p>
          <form className="form" style={{ marginTop: '2rem' }} onSubmit={e => mailtoSubmit(e, 'Bewerbung über merloex.de')}>
            <select name="Anrede" required defaultValue="">
              <option value="" disabled>Anrede*</option>
              <option value="Frau">Frau</option>
              <option value="Herr">Herr</option>
            </select>
            <div className="name-row">
              <input type="text" name="Vorname" placeholder="Vorname*" required />
              <input type="text" name="Nachname" placeholder="Nachname*" required />
            </div>
            <input type="email" name="E-Mail" placeholder="E-Mail*" required />
            <input type="tel" name="Telefon" placeholder="Telefon" />
            <select name="Stelle" defaultValue="">
              <option value="" disabled>Stelle</option>
              {jobs.map(job => <option key={job.title} value={job.title}>{job.title}</option>)}
            </select>
            <textarea name="Nachricht" placeholder="Nachricht" rows={8} />
            <label className="consent">
              <input type="checkbox" name="consent" required />
              <span>{CONSENT_TEXT}</span>
            </label>
            <button type="submit" className="btn btn-primary">Senden</button>
          </form>
        </div>
      </section>
    </>
  )
}
