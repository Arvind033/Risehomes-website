import { useEffect } from 'react'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import Button from '../components/common/Button.jsx'
import ConsultationButton from '../components/common/ConsultationButton.jsx'
import Container from '../components/common/Container.jsx'
import ReferencePhoto from '../components/common/ReferencePhoto.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import { aboutContent } from '../data/about.js'
import { business, whatsappHref } from '../data/business.js'
import '../styles/about.css'

function AboutHeading({ id, content }) {
  return (
    <div className="about-section-heading">
      <p className="about-eyebrow">{content.eyebrow}</p>
      <SectionHeading id={id} title={content.title} />
      {content.description && <p className="about-description">{content.description}</p>}
    </div>
  )
}

function AboutCopy({ content }) {
  return (
    <div className="about-copy">
      <p className="about-copy__lead">{content.lead}</p>
      {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </div>
  )
}

function AboutNumberedList({ items, className }) {
  return (
    <ol className={`about-numbered-list ${className}`} role="list">
      {items.map((item, index) => (
        <li key={item.title}>
          <span className="about-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

function AboutActions({ onDark = false }) {
  return (
    <div className={`about-actions${onDark ? ' about-actions--on-dark' : ''}`}>
      <ConsultationButton className="about-primary-action">
        Start Your Project <ArrowUpRight size={18} aria-hidden="true" />
      </ConsultationButton>
      {whatsappHref && (
        <Button href={whatsappHref} variant="secondary" className="about-whatsapp-action" target="_blank" rel="noopener noreferrer">
          <MessageCircle size={18} aria-hidden="true" /> WhatsApp Us
        </Button>
      )}
    </div>
  )
}

function AboutPage() {
  useEffect(() => {
    document.title = aboutContent.seo.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', aboutContent.seo.description)
  }, [])

  return (
    <div className="about-page">
      <section className="about-hero" aria-labelledby="about-heading">
        <ReferencePhoto image={aboutContent.hero.image} className="about-hero__image" loading="eager" fetchPriority="high" />
        <Container className="about-hero__inner">
          <div className="about-hero__copy">
            <p className="about-eyebrow">{aboutContent.hero.eyebrow}</p>
            <h1 id="about-heading" tabIndex={-1}>{aboutContent.hero.title}</h1>
            <p className="about-hero__description">{aboutContent.hero.description}</p>
            <AboutActions onDark />
          </div>
          <p className="about-hero__reference">Design reference. Not a {business.name} project.</p>
        </Container>
      </section>

      <section className="about-section about-story" aria-labelledby="about-story-heading">
        <Container className="about-split">
          <AboutHeading id="about-story-heading" content={aboutContent.story} />
          <AboutCopy content={aboutContent.story} />
        </Container>
      </section>

      <section className="about-section about-philosophy" aria-labelledby="about-philosophy-heading">
        <Container>
          <AboutHeading id="about-philosophy-heading" content={aboutContent.philosophy} />
          <AboutNumberedList items={aboutContent.philosophy.items} className="about-philosophy__list" />
        </Container>
      </section>

      <section className="about-section about-values" aria-labelledby="about-values-heading">
        <Container className="about-split">
          <AboutHeading id="about-values-heading" content={aboutContent.values} />
          <AboutNumberedList items={aboutContent.values.items} className="about-values__list" />
        </Container>
      </section>

      <section className="about-section about-process" aria-labelledby="about-process-heading">
        <Container>
          <AboutHeading id="about-process-heading" content={aboutContent.process} />
          <ol className="about-process__list" role="list">
            {aboutContent.process.steps.map((step, index) => (
              <li key={step.title}>
                <span className="about-process__number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="about-section about-services" aria-labelledby="about-services-heading">
        <Container>
          <div className="about-split">
            <AboutHeading id="about-services-heading" content={aboutContent.services} />
            <AboutCopy content={aboutContent.services} />
          </div>
          <div className="about-services__layout">
            {aboutContent.services.items.map((service, index) => (
              <article className="about-service" key={service.path} aria-labelledby={`about-service-${index}`}>
                <figure className="about-service__image">
                  <ReferencePhoto
                    image={service.image}
                    sizes={index === 0
                      ? '(min-width: 83rem) 43.25rem, (min-width: 48rem) 55vw, 100vw'
                      : '(min-width: 83rem) 31rem, (min-width: 48rem) 40vw, 100vw'}
                  />
                  <figcaption>Design reference</figcaption>
                </figure>
                <h3 id={`about-service-${index}`}>{service.title}</h3>
                <p>{service.description}</p>
                <div className="about-service__action">
                  <Button to={service.path} variant="text">
                    {service.action} <ArrowUpRight size={18} aria-hidden="true" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="about-section about-stand-for" aria-labelledby="about-stand-for-heading">
        <Container>
          <AboutHeading id="about-stand-for-heading" content={aboutContent.standFor} />
          <AboutNumberedList items={aboutContent.standFor.items} className="about-stand-for__list" />
        </Container>
      </section>

      <section className="about-section about-contact" aria-labelledby="about-contact-heading">
        <Container className="about-contact__inner">
          <AboutHeading id="about-contact-heading" content={aboutContent.contact} />
          <AboutActions />
        </Container>
      </section>
    </div>
  )
}

export default AboutPage