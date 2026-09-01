import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { logo } from '../assets/images'
import { EMAIL, PHONE, PHONE_HREF, services } from '../services'
import { Icon } from './Icons'

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <header className="site-header">
        <div className="container">
          <Link to="/" className="logo">
            <img src={logo} alt="Merloex building technologies GmbH" />
          </Link>
          <button
            className="nav-toggle"
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={28} />
          </button>
          <nav className={`main-nav${menuOpen ? ' open' : ''}`}>
            <ul>
              <li className="has-sub">
                <a tabIndex={0} aria-haspopup="true">Leistungen <Icon name="expand" size={18} /></a>
                <ul className="sub-menu">
                  {services.map(s => (
                    <li key={s.to}>
                      <NavLink to={s.to}>
                        <span className="ico"><Icon name={s.icon} /></span>
                        <span>{s.label}<small>{s.blurb}</small></span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li><NavLink to="/ueber-uns">Über uns</NavLink></li>
              <li><NavLink to="/jobs">Jobs</NavLink></li>
              <li><NavLink to="/kontakt">Kontakt</NavLink></li>
              <li className="nav-cta"><Link to="/kontakt" className="btn btn-primary">Angebot anfordern</Link></li>
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
              <div className="footer-brand">Merloex<small>building technologies GmbH</small></div>
              <p>Facility Management aus einer Hand – in Wächtersbach und im Rhein-Main-Gebiet.</p>
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
              <h4>Unternehmen</h4>
              <ul>
                <li><Link to="/ueber-uns">Über uns</Link></li>
                <li><Link to="/jobs">Jobs</Link></li>
                <li><Link to="/kontakt">Kontakt</Link></li>
              </ul>
            </div>
            <div>
              <h4>Kontakt</h4>
              <ul>
                <li><a className="emergency" href={PHONE_HREF}><Icon name="call" />{PHONE}</a></li>
                <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
                <li>Friedrich Wilhelm Straße 3<br />63607 Wächtersbach</li>
                <li>Mo – Fr: 08:00 – 17:00 Uhr</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Merloex building technologies GmbH. Alle Rechte vorbehalten.</span>
            <span className="footer-legal">
              <Link to="/impressum">Impressum</Link>
              <Link to="/datenschutzerklaerung">Datenschutzerklärung</Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}
