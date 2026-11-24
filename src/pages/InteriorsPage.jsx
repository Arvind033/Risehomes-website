import { useEffect } from 'react'
import { ArrowDown, ArrowUpRight, MessageCircle } from 'lucide-react'
import Button from '../components/common/Button.jsx'
import ConsultationButton from '../components/common/ConsultationButton.jsx'
import Container from '../components/common/Container.jsx'
import ReferencePhoto from '../components/common/ReferencePhoto.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import InteriorsFaq from '../components/interiors/InteriorsFaq.jsx'
import InteriorsProcess from '../components/interiors/InteriorsProcess.jsx'
import { business, serviceArea, whatsappHref } from '../data/business.js'
import { referencePhotos } from '../data/home.js'
import { interiorApproach, interiorPrinciples, interiorScope, interiorSpaces } from '../data/interiors.js'
import '../styles/interiors.css'

function InteriorsHeading({ id, eyebrow, title, description }) {
  return (
    <div className="interiors-section-heading">
      <p className="interiors-eyebrow">{eyebrow}</p>
      <SectionHeading id={id} title={title} />
      {description && <p className="interiors-introduction">{description}</p>}
    </div>
  )
}

function InteriorsList({ items, className, start = 0 }) {
  return (
    <ol className={`interiors-numbered-list ${className}`} start={start + 1} role="list">
      {items.map((item, index) => (
        <li key={item.title}>
          <span className="interiors-number" aria-hidden="true">{String(start + index + 1).padStart(2, '0')}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

function InteriorsActions() {
  return (
    <div className="interiors-actions">
      <ConsultationButton service="Interiors" className="interiors-primary-action">
        Start Your Project <ArrowUpRight size={18} aria-hidden="true" />
      </ConsultationButton>
      {whatsappHref && (
        <Button href={whatsappHref} className="interiors-whatsapp-action" target="_blank" rel="noopener noreferrer">
          <MessageCircle size={18} aria-hidden="true" /> WhatsApp Us
        </Button>
      )}
    </div>
  )
}

function InteriorsPage() {
  useEffect(() => {
    document.title = `Interior Design & Interiors in ${serviceArea} | ${business.name}`
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      `${business.name} creates thoughtful residential and selected commercial interiors in ${serviceArea}, from space planning and design direction to execution and finishing.`,
    )
  }, [])

  return (
    <div className="interiors-page">
      <section className="interiors-hero" aria-labelledby="interiors-heading">
        <ReferencePhoto image={referencePhotos.living} className="interiors-hero__image" loading="eager" fetchPriority="high" />
        <Container className="interiors-hero__inner">
          <div className="interiors-hero__copy">
            <p className="interiors-eyebrow">Interiors</p>
            <h1 id="interiors-heading" tabIndex={-1}>SPACES THAT FEEL LIKE YOU.</h1>
            <p className="interiors-hero__description">Thoughtful interiors shaped around how you live, work and spend time at home.</p>
            <InteriorsActions />
          </div>
          <div className="interiors-hero__bottom">
            <a href="#interior-spaces">Explore interior spaces <ArrowDown size={16} aria-hidden="true" /></a>
            <p className="interiors-hero__reference">Design reference. Not a {business.name} project.</p>
          </div>
        </Container>
      </section>

      <section id="interior-spaces" className="interiors-section interiors-spaces" aria-labelledby="interiors-spaces-heading">
        <Container>
          <InteriorsHeading
            id="interiors-spaces-heading"
            eyebrow="Spaces we design"
            title="Every room has a role. Every detail has a reason."
          />
          <div className="interiors-spaces__layout">
            <div className="interiors-spaces__column">
              <figure className="interiors-reference">
                <ReferencePhoto image={referencePhotos.openPlan} sizes="(min-width: 83rem) 43.25rem, (min-width: 48rem) 55vw, 100vw" />
                <figcaption>Design reference</figcaption>
              </figure>
              <InteriorsList items={interiorSpaces.slice(0, 4)} className="interiors-spaces__list" />
            </div>
            <div className="interiors-spaces__column">
              <figure className="interiors-reference">
                <ReferencePhoto image={referencePhotos.details} sizes="(min-width: 83rem) 31rem, (min-width: 48rem) 40vw, 100vw" />
                <figcaption>Design reference</figcaption>
              </figure>
              <InteriorsList items={interiorSpaces.slice(4)} className="interiors-spaces__list" start={4} />
            </div>
          </div>
        </Container>
      </section>

      <section className="interiors-section interiors-approach" aria-labelledby="interiors-approach-heading">
        <Container className="interiors-split">
          <InteriorsHeading
            id="interiors-approach-heading"
            eyebrow="Our approach"
            title="Designed around your life, not just the room."
            description="The sequence and level of support depend on the project and agreed scope."
          />
          <InteriorsList items={interiorApproach} className="interiors-approach__list" />
        </Container>
      </section>

      <section className="interiors-section interiors-scope" aria-labelledby="interiors-scope-heading">
        <Container>
          <InteriorsHeading
            id="interiors-scope-heading"
            eyebrow="Interior scope"
            title="From the big picture to the finishing details."
          />
          <InteriorsList items={interiorScope} className="interiors-scope__list" />
        </Container>
      </section>

      <InteriorsProcess />

      <section className="interiors-section interiors-principles" aria-labelledby="interiors-principles-heading">
        <Container>
          <InteriorsHeading
            id="interiors-principles-heading"
            eyebrow="Design principles"
            title="Good interiors balance beauty with everyday life."
          />
          <InteriorsList items={interiorPrinciples} className="interiors-principles__list" />
        </Container>
      </section>

      <section className="interiors-section interiors-faq" aria-labelledby="interiors-faq-heading">
        <Container className="interiors-split">
          <InteriorsHeading id="interiors-faq-heading" eyebrow="FAQ" title="Questions before you design." />
          <InteriorsFaq />
        </Container>
      </section>

      <section className="interiors-section interiors-contact" aria-labelledby="interiors-contact-heading">
        <Container className="interiors-contact__inner">
          <InteriorsHeading
            id="interiors-contact-heading"
            eyebrow="Start a conversation"
            title="Ready to shape your space?"
            description="Tell us about your home, the spaces you want to transform and what you have in mind."
          />
          <InteriorsActions />
        </Container>
      </section>
    </div>
  )
}

export default InteriorsPage