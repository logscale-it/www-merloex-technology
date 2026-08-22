import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { logo } from '../assets/images'

const PHONE = '+49 (0) 6053 6209552'
const PHONE_HREF = 'tel:+4960536209552'
const EMAIL = 'info@merloex.de'

const services = [
  { to: '/technisches-facility-management', label: 'Technisches FM' },
  { to: '/infrastrukturelles-facility-management', label: 'Infrastrukturelles FM' },
  { to: '/kaufmaennisches-facility-management', label: 'Kaufmännisches FM' },
]

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <div className="top-bar">
        <div className="container">
          <a href={PHONE_HREF}>{PHONE}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </div>

      <header className="site-header">
        <div className="container">
          <Link to="/" className="logo">
            <img src={logo} alt="Merloex - Facility Management" />
          </Link>
          <button
            className="nav-toggle"
            aria-label="Menü öffnen"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            ☰
          </button>
          <nav className={`main-nav${menuOpen ? ' open' : ''}`}>
            <ul>
              <li><NavLink to="/" end>Home</NavLink></li>
              <li className="has-sub">
                <a>Leistungen</a>
                <ul className="sub-menu">
                  {services.map(s => (
                    <li key={s.to}><NavLink to={s.to}>{s.label}</NavLink></li>
                  ))}
                </ul>
              </li>
              <li><NavLink to="/ueber-uns">Über uns</NavLink></li>
              <li><NavLink to="/jobs">Jobs</NavLink></li>
              <li><NavLink to="/kontakt">Kontakt</NavLink></li>
              <li className="cta"><Link to="/kontakt">Angebot einholen</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-widgets">
            <div>
              <h4>Menu</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/#leistungen">Leistungen</Link></li>
                <li><Link to="/ueber-uns">Über uns</Link></li>
                <li><Link to="/jobs">Jobs</Link></li>
                <li><Link to="/kontakt">Kontakt</Link></li>
              </ul>
            </div>
            <div>
              <h4>Leistungen</h4>
              <ul>
                {services.map(s => (
                  <li key={s.to}><Link to={s.to}>{s.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Kontakt</h4>
              <ul>
                <li><a href={PHONE_HREF}>{PHONE}</a></li>
                <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
                <li>Friedrich Wilhelm Straße 3<br />63607 Wächtersbach</li>
              </ul>
            </div>
            <div>
              <h4>Öffnungszeiten</h4>
              <ul>
                <li>Montag – Freitag:</li>
                <li>08:00–17:00 Uhr</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutzerklaerung">Datenschutzerklärung</Link>
            <span>© Alle Rechte vorbehalten</span>
          </div>
        </div>
      </footer>
    </>
  )
}
