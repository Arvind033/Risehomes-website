import { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MapPin, PhoneCall } from 'lucide-react'
import Button from '../common/Button.jsx'
import Container from '../common/Container.jsx'
import { business, phoneHref, serviceArea } from '../../data/business.js'
import { navigationLinks } from '../../data/pages.js'

function Header({ onConsultation }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)

  function handleKeyDown(event) {
    if (event.key === 'Escape' && menuOpen) {
      event.preventDefault()
      setMenuOpen(false)
      menuButtonRef.current?.focus()
    }
  }

  return (
    <header className="site-header" onKeyDown={handleKeyDown}>
      <div className="header-topbar">
        <Container className="header-topbar__inner">
          {phoneHref && (
            <a className="header-topbar__item" href={phoneHref} aria-label={`Call ${business.name} at ${business.phone}`}>
              <PhoneCall size={18} aria-hidden="true" />
              <span>{business.phone}</span>
            </a>
          )}
          {business.additionalPhones.map((phone) => (
            <a
              key={phone}
              className="header-topbar__item"
              href={`tel:${phone.replace(/[^\d+]/g, '')}`}
              aria-label={`Call ${business.name} at ${phone}`}
            >
              <PhoneCall size={18} aria-hidden="true" />
              <span>{phone}</span>
            </a>
          ))}
          <span className="header-topbar__item header-topbar__location">
            <MapPin size={18} aria-hidden="true" />
            <span>{serviceArea}</span>
          </span>
        </Container>
      </div>
      <Container className="header-inner">
        <Link
          to="/"
          className="site-brand"
          aria-label={`${business.name} home`}
          onClick={() => setMenuOpen(false)}
        >
          <picture>
            <source
              media="(min-width: 75rem)"
              srcSet={business.logos.header}
              width="3000"
              height="1000"
            />
            <img
              className="header-logo"
              src={business.logos.header}
              alt={`${business.name}. ${business.tagline}. ${business.serviceLine}`}
              width="3000"
              height="1000"
              decoding="async"
            />
          </picture>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          ref={menuButtonRef}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="menu-toggle__icon" aria-hidden="true" />
          Menu
        </button>

        <div
          id="primary-navigation"
          className={`header-navigation${menuOpen ? ' header-navigation--open' : ''}`}
        >
          <nav aria-label="Main navigation" className="primary-navigation">
            <ul className="navigation-links">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-actions">
            <Button
              href={phoneHref}
              disabled={!phoneHref}
              variant="secondary"
              title={phoneHref ? undefined : 'Phone details are not available yet'}
            >
              Call Us
            </Button>
            <Button
              to={onConsultation ? undefined : '/contact'}
              onClick={() => {
                setMenuOpen(false)
                if (menuOpen && onConsultation) menuButtonRef.current?.focus()
                onConsultation?.()
              }}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header