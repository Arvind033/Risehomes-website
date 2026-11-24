import { useId, useRef, useState } from 'react'
import { Maximize2 } from 'lucide-react'
import Container from '../common/Container.jsx'
import ReferencePhoto from '../common/ReferencePhoto.jsx'
import ReferenceLightbox from './ReferenceLightbox.jsx'
import { designReferences, referenceCategories } from '../../data/projects.js'

function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeReference, setActiveReference] = useState(null)
  const triggerRef = useRef(null)
  const idPrefix = useId()
  const visibleReferences = designReferences.filter((reference) => activeCategory === 'All' || reference.category === activeCategory)

  function openReference(reference, event) {
    triggerRef.current = event.currentTarget
    setActiveReference(reference)
  }

  return (
    <section id="reference-gallery" className="projects-section projects-gallery" aria-labelledby="reference-gallery-heading">
      <Container>
        <div className="projects-gallery__toolbar">
          <h2 id="reference-gallery-heading">Design references</h2>
          <div className="projects-filters" role="group" aria-label="Filter design references">
            {referenceCategories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                aria-controls={`${idPrefix}-list`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <p className="projects-gallery__status" role="status" aria-live="polite" aria-atomic="true">
          {visibleReferences.length} {visibleReferences.length === 1 ? 'design reference' : 'design references'}
        </p>
        <ul className="projects-reference-list" id={`${idPrefix}-list`} role="list">
          {visibleReferences.map((reference, index) => {
            const referenceId = `${idPrefix}-${reference.id}`
            const isWide = visibleReferences.length > 1 && visibleReferences.length % 2 === 1 && index === visibleReferences.length - 1
            const sizes = isWide || index % 2 === 0
              ? '(min-width: 83rem) 43.25rem, (min-width: 48rem) 55vw, 100vw'
              : '(min-width: 83rem) 31rem, (min-width: 48rem) 40vw, 100vw'

            return (
              <li key={reference.id} className={`projects-reference-item${isWide ? ' projects-reference-item--wide' : ''}`}>
                <figure className="projects-reference">
                  <button
                    className="projects-reference__open"
                    type="button"
                    aria-haspopup="dialog"
                    aria-labelledby={`${referenceId}-title ${referenceId}-label`}
                    aria-describedby={`${referenceId}-category`}
                    title={`View ${reference.title}`}
                    onClick={(event) => openReference(reference, event)}
                  >
                    <ReferencePhoto image={reference.image} sizes={sizes} />
                    <span id={`${referenceId}-label`} className="projects-reference__label">Design reference</span>
                    <span className="projects-reference__view" aria-hidden="true"><Maximize2 size={20} /></span>
                  </button>
                  <figcaption>
                    <p id={`${referenceId}-category`} className="projects-reference-category">{reference.category}</p>
                    <h3 id={`${referenceId}-title`}>{reference.title}</h3>
                  </figcaption>
                </figure>
              </li>
            )
          })}
        </ul>
      </Container>
      <ReferenceLightbox reference={activeReference} triggerRef={triggerRef} onClose={() => setActiveReference(null)} />
    </section>
  )
}

export default ProjectsGallery