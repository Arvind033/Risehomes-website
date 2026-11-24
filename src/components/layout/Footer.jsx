import { Link } from 'react-router-dom'
import ContactDetails from '../common/ContactDetails.jsx'
import Container from '../common/Container.jsx'
import { business, serviceArea } from '../../data/business.js'
import { navigationLinks } from '../../data/pages.js'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" aria-label={`${business.name} home`}>
              <img
                className="footer-logo"
                src={business.logos.white}
                alt={`${business.name}. ${business.tagline}. ${business.serviceLine}`}
                width="6000"
                height="3809"
                loading="lazy"
                decoding="async"
              />
            </Link>
          </div>
          <div className="footer-information">
            <nav aria-label="Footer navigation">
              <ul className="footer-links">
                {navigationLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            {serviceArea && <p>Currently serving {serviceArea}.</p>}
            <ContactDetails />
          </div>
        </div>
        <p className="footer-copyright">
          &copy; {currentYear} {business.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}

export default Footer