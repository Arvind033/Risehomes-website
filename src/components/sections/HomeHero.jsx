import { ArrowDown, ArrowUpRight, MessageCircle } from 'lucide-react'
import Button from '../common/Button.jsx'
import ConsultationButton from '../common/ConsultationButton.jsx'
import Container from '../common/Container.jsx'
import ReferencePhoto from '../common/ReferencePhoto.jsx'
import { business, serviceArea, whatsappHref } from '../../data/business.js'
import { referencePhotos } from '../../data/home.js'

function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="page-heading">
      <ReferencePhoto image={referencePhotos.hero} className="home-hero__image" loading="eager" fetchPriority="high" />
      <Container className="home-hero__inner">
        <div className="home-hero__copy">
          <p className="eyebrow">{business.serviceLine} / {serviceArea}</p>
          <h1 id="page-heading" tabIndex={-1}>{business.name}</h1>
          <p className="home-hero__tagline">{business.tagline}</p>
          <p className="home-hero__description">Thoughtfully designed. Carefully built.</p>
          <div className="home-hero__actions">
            <ConsultationButton className="button--light">
              Start Your Project <ArrowUpRight size={18} aria-hidden="true" />
            </ConsultationButton>
            {whatsappHref && (
              <Button className="button--hero-outline" href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Us" title="WhatsApp Us">
                <MessageCircle size={18} aria-hidden="true" /><span className="hero-whatsapp-label">WhatsApp Us</span>
              </Button>
            )}
          </div>
        </div>
        <div className="home-hero__bottom">
          <a href="#our-process" className="hero-discover">Our approach <ArrowDown size={16} aria-hidden="true" /></a>
          <p>Architectural reference. Not a {business.name} project.</p>
        </div>
      </Container>
    </section>
  )
}

export default HomeHero