import { fs5 } from '../assets/images'
import { Icon, type IconName } from '../components/Icons'
import { ContactCta, CtaButtons, Hero, ServicesSection } from '../components/Shared'

const principles: { title: string; icon: IconName; text: string }[] = [
  {
    title: 'Vertrauen',
    icon: 'shield',
    text: 'Ihre Immobilie stellt einen beträchtlichen Wert dar und somit ist Vertrauen die Basis unseres Geschäftes. Ob für Ihre privaten oder für gewerbliche Gebäude stellen wir qualifizierte Hausmeister, die sich sowohl um Ihre Mieter, als auch um das gesamte Facility Management kümmern.',
  },
  {
    title: 'Qualität',
    icon: 'star',
    text: 'Unsere Hausmeister sind bestens ausgebildet und ausgerüstet, um täglich anfallende Arbeiten in Ihrer Wohnanlage, in Ihrem Miethaus oder in Ihrem Bürogebäude schnell und gründlich zu erledigen, damit alles einwandfrei funktioniert.',
  },
  {
    title: 'Wirksamkeit',
    icon: 'bolt',
    text: 'Bei uns ist Qualität erschwinglich, denn wir arbeiten präzise und nachhaltig, sodass nicht nur Sie, sondern auch Ihre Mieter profitieren. Langjährige Kunden schätzen die Qualität unserer Gebäudebetreuung – überzeugen auch Sie sich davon!',
  },
]

export default function UeberUns() {
  return (
    <>
      <Hero image={fs5} wide>
        <span className="eyebrow">Über uns</span>
        <h1><span>Merloex</span> building technologies GmbH</h1>
        <p>Facility Management aus einer Hand – zuverlässig, präzise und nachhaltig für private und gewerbliche Immobilien.</p>
        <CtaButtons />
      </Hero>

      <section className="section section-white">
        <div className="container">
          <div className="section-intro">
            <span className="eyebrow">Grundsätze</span>
            <h2>Unsere <span>Grundsätze</span></h2>
          </div>
          <div className="blurbs">
            {principles.map(p => (
              <div className="blurb" key={p.title}>
                <span className="ico"><Icon name={p.icon} /></span>
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
