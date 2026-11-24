import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../common/Button.jsx'
import Container from '../common/Container.jsx'
import ReferencePhoto from '../common/ReferencePhoto.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import { homeServices, homeServicesIntro } from '../../data/home.js'

function HomeServices() {
  return (
    <section className="home-section home-services" aria-labelledby="services-heading">
      <Container>
        <div className="home-section-heading services-heading">
          <div>
            <p className="eyebrow">{homeServicesIntro.eyebrow}</p>
            <SectionHeading id="services-heading" title={homeServicesIntro.title} />
          </div>
          <p className="section-introduction">{homeServicesIntro.description}</p>
        </div>
        <div className="service-showcase">
          {homeServices.map((service, index) => (
            <article className="service-feature" key={service.title} aria-labelledby={`home-service-${service.number}`}>
              <figure className="service-feature__image">
                <ReferencePhoto
                  image={service.image}
                  sizes={index === 0
                    ? '(min-width: 80rem) 44rem, (min-width: 48rem) 56vw, calc(100vw - 2.5rem)'
                    : '(min-width: 80rem) 32rem, (min-width: 48rem) 40vw, calc(100vw - 2.5rem)'}
                />
                <figcaption>Design reference</figcaption>
              </figure>
              <div className="service-feature__heading">
                <h3 id={`home-service-${service.number}`}><Link to={service.path}>{service.title}</Link></h3>
                <span aria-hidden="true">{service.number}</span>
              </div>
              <p className="service-feature__subtitle">{service.subtitle}</p>
              <p className="service-feature__description">{service.description}</p>
              <div className="service-feature__bottom">
                <p>{service.details}</p>
                <Button to={service.path} variant="text">
                  {service.action} <ArrowUpRight size={18} aria-hidden="true" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default HomeServices