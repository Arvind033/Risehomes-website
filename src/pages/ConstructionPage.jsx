import { useEffect } from 'react'
import { ArrowDown, ArrowUpRight, MessageCircle } from 'lucide-react'
import Button from '../components/common/Button.jsx'
import ConsultationButton from '../components/common/ConsultationButton.jsx'
import Container from '../components/common/Container.jsx'
import ReferencePhoto from '../components/common/ReferencePhoto.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import ConstructionAccordion from '../components/construction/ConstructionAccordion.jsx'
import ConstructionProcess from '../components/construction/ConstructionProcess.jsx'
import { business, serviceArea, whatsappHref } from '../data/business.js'
import { constructionFaqs, constructionInclusions, constructionPrinciples, constructionServices, constructionTypes } from '../data/construction.js'
import { referencePhotos } from '../data/home.js'
import '../styles/construction.css'

function ConstructionHeading({ id, eyebrow, title, description }) {
  return (
    <div className="construction-section-heading">
      <p className="construction-eyebrow">{eyebrow}</p>
      <SectionHeading id={id} title={title} />
      {description && <p className="construction-introduction">{description}</p>}
    </div>
  )
}

function ConstructionList({ items, className }) {
  return (
    <ol className={`construction-numbered-list ${className}`} role="list">
      {items.map((item, index) => (
        <li key={item.title}>
          <span className="construction-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

function ConstructionActions() {
  return (
    <div className="construction-actions">
      <ConsultationButton service="Home Construction" className="construction-primary-action">
        Start Your Project <ArrowUpRight size={18} aria-hidden="true" />
      </ConsultationButton>
      {whatsappHref && (
        <Button href={whatsappHref} className="construction-whatsapp-action" target="_blank" rel="noopener noreferrer">
          <MessageCircle size={18} aria-hidden="true" /> WhatsApp Us
        </Button>
      )}
    </div>
  )
}

function ConstructionPage() {
  useEffect(() => {
    document.title = `Construction Services in ${serviceArea} | ${business.name}`
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      `${business.name} provides thoughtful residential construction and renovation services in ${serviceArea}, from planning and execution to finishing and handover.`,
    )
  }, [])

  return (
    <div className="construction-page">
      <section className="construction-hero" aria-labelledby="construction-heading">
        <ReferencePhoto image={referencePhotos.hero} className="construction-hero__image" loading="eager" fetchPriority="high" />
        <Container className="construction-hero__inner">
          <div className="construction-hero__copy">
            <p className="construction-eyebrow">We build homes</p>
            <h1 id="construction-heading" tabIndex={-1}>WITH CLARITY FROM FOUNDATION TO FINISH.</h1>
            <p className="construction-hero__description">Thoughtful planning, coordinated execution and careful attention to the details that turn a plan into a home.</p>
            <ConstructionActions />
          </div>
          <div className="construction-hero__bottom">
            <a href="#construction-build">Explore construction <ArrowDown size={16} aria-hidden="true" /></a>
            <p className="construction-hero__reference">Architectural reference. Not a {business.name} project.</p>
          </div>
        </Container>
      </section>

      <section id="construction-build" className="construction-section" aria-labelledby="construction-build-heading">
        <Container className="construction-split">
          <ConstructionHeading
            id="construction-build-heading"
            eyebrow="What we build"
            title="Homes planned around the way you want to live."
          />
          <ConstructionList items={constructionTypes} className="construction-types" />
        </Container>
      </section>

      <section className="construction-section construction-services" aria-labelledby="construction-services-heading">
        <Container>
          <ConstructionHeading
            id="construction-services-heading"
            eyebrow="Construction services"
            title="From the first plan to the final finish."
          />
          <ConstructionList items={constructionServices} className="construction-services__list" />
        </Container>
      </section>

      <section className="construction-section construction-inclusions" aria-labelledby="construction-inclusions-heading">
        <Container className="construction-split">
          <ConstructionHeading
            id="construction-inclusions-heading"
            eyebrow="What's included"
            title="Know what goes into your build."
            description="Every project has its own requirements. We help clarify the scope, sequence and information needed before work moves forward."
          />
          <ConstructionAccordion items={constructionInclusions} numbered />
        </Container>
      </section>

      <ConstructionProcess />

      <section className="construction-section construction-quality" aria-labelledby="construction-quality-heading">
        <Container>
          <ConstructionHeading
            id="construction-quality-heading"
            eyebrow="Quality"
            title="Quality is in the details."
          />
          <ConstructionList items={constructionPrinciples} className="construction-quality__list" />
        </Container>
      </section>

      <section className="construction-section construction-faq" aria-labelledby="construction-faq-heading">
        <Container className="construction-split">
          <ConstructionHeading
            id="construction-faq-heading"
            eyebrow="FAQ"
            title="Questions before you build."
          />
          <ConstructionAccordion items={constructionFaqs} />
        </Container>
      </section>

      <section className="construction-section construction-contact" aria-labelledby="construction-contact-heading">
        <Container className="construction-contact__inner">
          <ConstructionHeading
            id="construction-contact-heading"
            eyebrow="Start a conversation"
            title="Thinking about building your home?"
            description="Tell us about your site, requirements and ideas. We'll help you understand the next steps."
          />
          <ConstructionActions />
        </Container>
      </section>
    </div>
  )
}

export default ConstructionPage