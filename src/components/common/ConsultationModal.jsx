import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import Button from './Button.jsx'
import ContactForm from './ContactForm.jsx'
import { business, whatsappHref } from '../../data/business.js'
import '../../styles/consultation.css'

function ConsultationModal({ open, initialService, onClose }) {
  const dialogRef = useRef(null)
  const canRequest = Boolean(business.email || whatsappHref)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!open) {
      if (dialog.open) dialog.close()
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    if (!dialog.open) dialog.showModal()
    dialog.querySelector('h2')?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  function handleBackdropClick(event) {
    if (event.target !== event.currentTarget) return
    const bounds = event.currentTarget.getBoundingClientRect()
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose()
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      event.preventDefault()
      onClose()
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="consultation-dialog"
      aria-labelledby="consultation-heading"
      aria-describedby="consultation-description"
      onCancel={onClose}
      onClose={onClose}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
    >
      <div className="consultation-dialog__toolbar">
        <Button className="consultation-close" variant="secondary" onClick={onClose} aria-label="Close consultation" title="Close consultation">
          <X size={20} aria-hidden="true" />
        </Button>
      </div>
      <div className="consultation-dialog__header">
        <p className="eyebrow">Let's talk about your home</p>
        <h2 id="consultation-heading" tabIndex={-1}>Get a Free Consultation</h2>
        <p id="consultation-description">{canRequest ? 'A few details. A clearer conversation.' : 'Online consultation requests are not available yet.'}</p>
      </div>
      <ContactForm key={`${open}-${initialService}`} initialService={initialService} />
    </dialog>
  )
}

export default ConsultationModal