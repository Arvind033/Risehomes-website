import { ArrowUpRight } from 'lucide-react'
import ConsultationButton from '../common/ConsultationButton.jsx'
import Container from '../common/Container.jsx'
import ReferencePhoto from '../common/ReferencePhoto.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import { business } from '../../data/business.js'
import { designInspiration } from '../../data/home.js'

function HomeInspiration() {
  return (
    <section className="home-section home-inspiration" aria-labelledby="inspiration-heading">
      <Container>
        <div className="home-section-heading inspiration-heading">
          <div>
            <p className="eyebrow">Design inspiration</p>
            <SectionHeading id="inspiration-heading" title="Our journey starts here." />
          </div>
          <p className="section-introduction">Light, thoughtful layouts, and details that feel personal. A few references to begin imagining your own space.</p>
        </div>
        <p className="inspiration-disclosure">These are reference designs, not projects completed by {business.name}.</p>
        <div className="inspiration-gallery">
          {designInspiration.map((item) => (
            <figure key={item.title}>
              <div className="inspiration-gallery__image">
                <ReferencePhoto image={item.image} sizes="(min-width: 768px) 50vw, 100vw" />
                <span className="image-label">Design reference</span>
              </div>
              <figcaption>
                <h3>{item.title}</h3>
                <p>{item.theme}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="inspiration-footer">
          <p>Your home should have its own point of view.</p>
          <ConsultationButton variant="text">Let's find yours <ArrowUpRight size={18} aria-hidden="true" /></ConsultationButton>
        </div>
      </Container>
    </section>
  )
}

export default HomeInspiration