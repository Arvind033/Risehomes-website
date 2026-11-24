import { useEffect, useId, useRef } from 'react'
import { X } from 'lucide-react'
import ReferencePhoto from '../common/ReferencePhoto.jsx'

function ReferenceLightbox({ reference, triggerRef, onClose }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const idPrefix = useId()

  useEffect(() => {
    if (!reference) return
    const dialog = dialogRef.current
    const trigger = triggerRef.current
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    if (!dialog.open) dialog.showModal()
    closeRef.current?.focus()

    return () => {
      if (dialog.open) dialog.close()
      document.body.style.overflow = previousOverflow
      if (trigger?.isConnected) trigger.focus({ preventScroll: true })
    }
  }, [reference, triggerRef])

  function handleCancel(event) {
    event.preventDefault()
    onClose()
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape') handleCancel(event)
    if (event.key === 'Tab') {
      event.preventDefault()
      closeRef.current?.focus()
    }
  }

  function handleBackdropClick(event) {
    if (event.target !== event.currentTarget) return
    const bounds = event.currentTarget.getBoundingClientRect()
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      className="projects-lightbox"
      aria-labelledby={`${idPrefix}-title`}
      aria-describedby={`${idPrefix}-label`}
      onCancel={handleCancel}
      onKeyDown={handleKeyDown}
      onClick={handleBackdropClick}
    >
      {reference && (
        <>
          <div className="projects-lightbox__toolbar">
            <p id={`${idPrefix}-label`}>Design reference</p>
            <button ref={closeRef} className="projects-lightbox__close" type="button" onClick={onClose} aria-label="Close reference" title="Close reference">
              <X size={22} aria-hidden="true" />
            </button>
          </div>
          <ReferencePhoto key={reference.id} image={reference.image} className="projects-lightbox__image" sizes="(min-width: 72rem) 68rem, calc(100vw - 2rem)" loading="eager" />
          <div className="projects-lightbox__caption">
            <p className="projects-reference-category">{reference.category}</p>
            <h2 id={`${idPrefix}-title`}>{reference.title}</h2>
          </div>
        </>
      )}
    </dialog>
  )
}

export default ReferenceLightbox