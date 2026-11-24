import { ArrowUpRight, Clock3 } from 'lucide-react'
import ConsultationButton from '../common/ConsultationButton.jsx'
import Container from '../common/Container.jsx'
import ReferencePhoto from '../common/ReferencePhoto.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import { blogContent } from '../../data/blog.js'
import { business } from '../../data/business.js'
import { referencePhotos } from '../../data/home.js'

export function ArticleMeta({ article }) {
  return (
    <p className="journal-meta">
      <span>{article.category}</span>
      <span><Clock3 size={14} aria-hidden="true" /> {article.readingMinutes} min read</span>
    </p>
  )
}

export function JournalPhoto({ image, sizes = '100vw', eager = false, className = '' }) {
  return (
    <figure className={`journal-photo ${className}`.trim()}>
      <ReferencePhoto image={referencePhotos[image]} sizes={sizes} loading={eager ? 'eager' : 'lazy'} />
      <figcaption>Design reference. Not a {business.name} project.</figcaption>
    </figure>
  )
}

export function BlogConsultation() {
  return (
    <section className="journal-contact" aria-labelledby="journal-contact-heading">
      <Container className="journal-contact__inner">
        <div>
          <p className="journal-eyebrow">From ideas to a home</p>
          <SectionHeading id="journal-contact-heading" title={blogContent.contact.title} />
          <p className="journal-description">{blogContent.contact.description}</p>
        </div>
        <ConsultationButton className="journal-contact__button">
          Start Your Project <ArrowUpRight size={18} aria-hidden="true" />
        </ConsultationButton>
      </Container>
    </section>
  )
}