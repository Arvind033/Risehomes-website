import { useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Button from '../components/common/Button.jsx'
import ConsultationButton from '../components/common/ConsultationButton.jsx'
import ContactDetails from '../components/common/ContactDetails.jsx'
import Container from '../components/common/Container.jsx'
import ReferencePhoto from '../components/common/ReferencePhoto.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import ContactEnquiryForm from '../components/contact/ContactEnquiryForm.jsx'
import { business, serviceArea, whatsappHref } from '../data/business.js'
import { contactContent } from '../data/contact.js'
import { referencePhotos } from '../data/home.js'
import '../styles/contact.css'

function ContactPage() {
  const canRequest = Boolean(business.email || whatsappHref)

  useEffect(() => {
    document.title = `Contact ${business.name} | Construction & Interiors in ${serviceArea}`
    document.querySelector('meta[name="description"]')?.setAttribute('content', `Plan your next steps for home construction or interiors in ${serviceArea} with ${business.name}. View consultation availability, services and verified contact information.`)
  }, [])

  return (
    <div className="contact-page">
      <section className="contact-hero" aria-labelledby="contact-heading">
        <ReferencePhoto image={referencePhotos.openPlan} className="contact-hero__image" loading="eager" fetchPriority="high" />
        <Container className="contact-hero__inner">
          <div className="contact-hero__copy">
            <p className="contact-eyebrow">{contactContent.eyebrow}</p>
            <h1 id="contact-heading" tabIndex={-1}>{contactContent.title}</h1>
            <p className="contact-hero__description">{contactContent.description}</p>
          </div>
          <p className="contact-hero__reference">Design reference. Not a {business.name} project.</p>
        </Container>
      </section>

      <div className="contact-section">
        <Container className="contact-enquiry-layout">
          <section aria-labelledby="contact-form-heading">
            <p className="contact-eyebrow">A considered beginning</p>
            <SectionHeading id="contact-form-heading" title="Get a Free Consultation" />
            <ContactEnquiryForm />
          </section>
          <section className="contact-options" aria-labelledby="contact-options-heading">
            <p className="contact-eyebrow">Contact options</p>
            <SectionHeading id="contact-options-heading" title={`Based in ${serviceArea}.`} />
            <p className="contact-description">{business.serviceLine}</p>
            <p className="contact-description">Currently serving {serviceArea}.</p>
            <ContactDetails />
            {!business.phone && !business.email && !whatsappHref && (
              <p className="contact-options__availability">Phone, email and WhatsApp details will be shared here once confirmed.</p>
            )}
            <div className="contact-options__preparation">
              <h3>Before we talk.</h3>
              <p className="contact-description">Think about the spaces you need, the way you want to live and the questions you would like to work through.</p>
              <Button to="/blog" variant="text">Read the journal <ArrowUpRight size={18} aria-hidden="true" /></Button>
            </div>
          </section>
        </Container>
      </div>

      <section className="contact-section contact-next" aria-labelledby="contact-next-heading">
        <Container>
          <p className="contact-eyebrow">What happens next</p>
          <SectionHeading id="contact-next-heading" title="A conversation, then a direction." />
          {!canRequest && <p className="contact-description">Online enquiries are not configured yet. You can call either number listed above to start a conversation.</p>}
          <ol className="contact-next__steps" role="list">
            {contactContent.steps.map((step, index) => (
              <li key={step.title}>
                <span className="contact-next__number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p className="contact-description">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="contact-section contact-services" aria-labelledby="contact-services-heading">
        <Container>
          <p className="contact-eyebrow">Construction &amp; interiors</p>
          <SectionHeading id="contact-services-heading" title="Two ways to shape your home." />
          <div className="contact-services__list">
            {contactContent.services.map((service) => (
              <article key={service.path}>
                <h3>{service.title}</h3>
                <p className="contact-description">{service.description}</p>
                <Button to={service.path} variant="text">Explore {service.title} <ArrowUpRight size={18} aria-hidden="true" /></Button>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="contact-section contact-final" aria-labelledby="contact-final-heading">
        <Container className="contact-final__inner">
          <div>
            <p className="contact-eyebrow">Your home, your priorities</p>
            <SectionHeading id="contact-final-heading" title="Start with what matters to you." />
            <p className="contact-description">A little context can shape a more useful conversation about your home.</p>
            {!canRequest && <p className="contact-final__availability">Online enquiries are not configured yet. Please call either number listed on this page.</p>}
          </div>
          <ConsultationButton>
            {canRequest ? 'Get a Free Consultation' : 'View consultation details'} <ArrowUpRight size={18} aria-hidden="true" />
          </ConsultationButton>
        </Container>
      </section>
    </div>
  )
}

export default ContactPage