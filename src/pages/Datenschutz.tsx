// Long static legal text ported verbatim from the WordPress page; kept as raw HTML
// instead of hand-converting ~22KB of JSX. Content is our own, not user input.
import datenschutzHtml from '../content/datenschutz.html?raw'

export default function Datenschutz() {
  return (
    <section className="section legal">
      <div
        className="container"
        style={{ maxWidth: '800px' }}
        dangerouslySetInnerHTML={{ __html: datenschutzHtml }}
      />
    </section>
  )
}
