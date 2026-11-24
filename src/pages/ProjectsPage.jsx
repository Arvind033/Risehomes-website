import { useEffect } from 'react'
import { ArrowDown, ArrowUpRight, MessageCircle } from 'lucide-react'
import Button from '../components/common/Button.jsx'
import ConsultationButton from '../components/common/ConsultationButton.jsx'
import Container from '../components/common/Container.jsx'
import ReferencePhoto from '../components/common/ReferencePhoto.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import ProjectsGallery from '../components/projects/ProjectsGallery.jsx'
import { business, whatsappHref } from '../data/business.js'
import { referencePhotos } from '../data/home.js'
import '../styles/projects.css'

function ProjectsActions({ hero = false }) {
  return (
    <div className="projects-actions">
      <ConsultationButton className="projects-primary-action">
        Start Your Project <ArrowUpRight size={18} aria-hidden="true" />
      </ConsultationButton>
      {hero ? (
        <Button href="#reference-gallery" className="projects-secondary-action">
          Explore References <ArrowDown size={18} aria-hidden="true" />
        </Button>
      ) : whatsappHref && (
        <Button href={whatsappHref} className="projects-secondary-action" target="_blank" rel="noopener noreferrer">
          <MessageCircle size={18} aria-hidden="true" /> WhatsApp Us
        </Button>
      )}
    </div>
  )
}

function ProjectsPage() {
  useEffect(() => {
    document.title = `Projects & Design References | ${business.name}`
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      `Explore architectural and interior design references from ${business.name}, reflecting contemporary Indian homes, interiors, materials and spaces.`,
    )
  }, [])

  return (
    <div className="projects-page">
      <section className="projects-hero" aria-labelledby="projects-heading">
        <ReferencePhoto image={referencePhotos.hero} className="projects-hero__image" loading="eager" fetchPriority="high" />
        <Container className="projects-hero__inner">
          <div className="projects-hero__copy">
            <p className="projects-eyebrow">Projects &amp; design references</p>
            <h1 id="projects-heading" tabIndex={-1}>Ideas that shape the way we build.</h1>
            <p className="projects-hero__description">Explore architectural and interior references that reflect the kind of thoughtful, contemporary spaces we aim to create with our clients.</p>
            <ProjectsActions hero />
          </div>
          <p className="projects-hero__reference">
            <span>Architectural reference</span>
            Design reference, not a {business.name} project.
          </p>
        </Container>
      </section>

      <section className="projects-section projects-introduction" aria-labelledby="projects-introduction-heading">
        <Container className="projects-introduction__inner">
          <div className="projects-section-heading">
            <p className="projects-eyebrow">Our design direction</p>
            <SectionHeading id="projects-introduction-heading" title="A collection of ideas, materials and spaces we admire." />
          </div>
          <p className="projects-introduction__copy">These references are used to communicate design direction and possibilities. They are not presented as completed {business.name} projects.</p>
        </Container>
      </section>

      <ProjectsGallery />

      <section className="projects-section projects-contact" aria-labelledby="projects-contact-heading">
        <Container className="projects-contact__inner">
          <div className="projects-section-heading">
            <p className="projects-eyebrow">Start your project</p>
            <SectionHeading id="projects-contact-heading" title="Have an idea of your own?" />
            <p className="projects-introduction-copy">Tell us about the home or space you are planning, and let's explore the right direction for it.</p>
          </div>
          <ProjectsActions />
        </Container>
      </section>
    </div>
  )
}

export default ProjectsPage