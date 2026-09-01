import type { ReactNode } from 'react'
import { ContactCta, CtaButtons, Hero } from '../components/Shared'

// one template for the three Leistungen pages — original pages share this layout
export interface FmPageData {
  title: string
  intro: string
  heroImage: string
  scopeTitle: ReactNode
  scopeItems: string[]
  detailImage: string
  detailTitle: ReactNode
  detailBody: ReactNode
  banner?: { title: ReactNode; body: string }
}

export default function FmPage({ data }: { data: FmPageData }) {
  return (
    <>
      <Hero image={data.heroImage} wide>
        <span className="eyebrow">Leistungen</span>
        <h1>{data.title}</h1>
        <p>{data.intro}</p>
        <CtaButtons />
      </Hero>

      <section className="section section-white">
        <div className="container copy">
          <span className="eyebrow">Leistungsumfang</span>
          <h2>{data.scopeTitle}</h2>
          <ul className="check-list grid-list" style={{ marginTop: '2.5rem' }}>
            {data.scopeItems.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div className="rounded"><img src={data.detailImage} alt="" /></div>
          <div className="copy">
            <h2>{data.detailTitle}</h2>
            <p>{data.detailBody}</p>
          </div>
        </div>
      </section>

      {data.banner && (
        <section className="section section-tinted">
          <div className="container section-intro copy" style={{ marginBottom: 0 }}>
            <h2>{data.banner.title}</h2>
            <p>{data.banner.body}</p>
          </div>
        </section>
      )}

      <ContactCta />
    </>
  )
}
