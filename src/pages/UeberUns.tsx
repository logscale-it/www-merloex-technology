import { fs5 } from '../assets/images'
import { ContactCta, CtaButtons, Hero, ServicesSection } from '../components/Shared'

const principles = [
  {
    title: 'Vertrauen',
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    text: 'Ihre Immobilie einen beträchtlichen Wert dar und somit ist Vertrauen die Basis unseres Geschäftes. Ob für Ihre privaten oder für gewerbliche Gebäude stellen wir qualifizierte Hausmeister, die sich sowohl um Ihre Mieter, als auch um das gesamte Facility Management kümmern.',
  },
  {
    title: 'Qualität',
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="9" r="6" />
        <path d="M8.5 14l-2 7 5.5-3 5.5 3-2-7" />
      </svg>
    ),
    text: 'Unsere Hausmeister sind bestens ausgebildet und ausgerüstet, um täglich anfallende Arbeiten in Ihrer Wohnanlage, in Ihrem Miethaus oder in Ihrem Bürogebäude schnell und gründlich zu erledigen, damit alles einwandfrei funktioniert.',
  },
  {
    title: 'Wirksamkeit',
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" />
      </svg>
    ),
    text: 'Bei uns ist Qualität erschwinglich, denn wir arbeiten präzise und nachhaltig, sodass nicht nur Sie, sondern auch Ihre Mieter profitieren. Langjährige Kunden schätzen die Qualität unserer Gebäudebetreuung – überzeugen auch Sie sich davon!',
  },
]

export default function UeberUns() {
  return (
    <>
      <Hero image={fs5} wide>
        <h1><span>Merloex</span> building technologies GmbH</h1>
        <CtaButtons />
      </Hero>

      <section className="section">
        <div className="container">
          <h2>Unsere <span>Grundsätze</span></h2>
          <div className="blurbs" style={{ marginTop: '2.5rem' }}>
            {principles.map(p => (
              <div className="blurb" key={p.title}>
                <div className="blurb-icon">{p.icon}</div>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection />

      <ContactCta />
    </>
  )
}
