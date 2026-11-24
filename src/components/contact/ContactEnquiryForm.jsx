import { useEffect, useId, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Button from '../common/Button.jsx'
import { business, whatsappHref } from '../../data/business.js'
import { contactContent, contactServices } from '../../data/contact.js'
import '../../styles/consultation.css'

function EnquiryField({ id, label, required = false, error, wide = false, children }) {
  return (
    <div className={`form-field${wide ? ' form-field--wide' : ''}`}>
      <label htmlFor={id}>{label}{required && <span aria-hidden="true"> *</span>}</label>
      {children}
      {error && <p className="field-error" id={`${id}-error`}>{error}</p>}
    </div>
  )
}

function ContactEnquiryForm() {
  const formId = useId()
  const formRef = useRef(null)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  const canRequest = Boolean(business.email || whatsappHref)

  useEffect(() => {
    const firstError = Object.keys(errors)[0]
    if (firstError) formRef.current?.elements.namedItem(firstError)?.focus()
  }, [errors])

  function fieldProps(name) {
    return {
      id: `${formId}-${name}`,
      name,
      'aria-invalid': errors[name] ? true : undefined,
      'aria-describedby': errors[name] ? `${formId}-${name}-error` : undefined,
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!canRequest) {
      setStatus('Online submission is not available yet. No details have been collected or sent.')
      return
    }

    const form = event.currentTarget
    const values = Object.fromEntries([...new FormData(form)].map(([name, value]) => [name, String(value).trim()]))
    const nextErrors = {}
    if (!values.fullName) nextErrors.fullName = 'Enter your full name.'
    if (!values.email || form.elements.namedItem('email').validity.typeMismatch) nextErrors.email = 'Enter a valid email address, such as name@example.com.'
    if (values.phone && (!/^\+?[\d\s()-]+$/.test(values.phone) || !/^\d{7,15}$/.test(values.phone.replace(/\D/g, '')))) nextErrors.phone = 'Enter a phone number with 7 to 15 digits, or leave this field empty.'
    if (!contactServices.includes(values.service)) nextErrors.service = 'Select Construction, Interiors, or Construction & Interiors.'
    if (!values.message) nextErrors.message = 'Tell us a little about your project.'
    setErrors(nextErrors)
    setStatus('')
    if (Object.keys(nextErrors).length) return

    const enquiry = [
      `Project enquiry for ${business.name}`,
      '',
      `Name: ${values.fullName}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone || 'Not provided'}`,
      `Service: ${values.service}`,
      `Project location: ${values.location || 'Not provided'}`,
      '',
      values.message,
    ].join('\n')

    if (business.email) {
      window.location.assign(`mailto:${business.email}?subject=${encodeURIComponent(`Project enquiry | ${business.name}`)}&body=${encodeURIComponent(enquiry)}`)
      setStatus('Your email app has been requested. Review and send the draft there. Nothing is sent automatically; if no app opened, your message has not been sent.')
    } else {
      window.open(`${whatsappHref}?text=${encodeURIComponent(enquiry)}`, '_blank', 'noopener,noreferrer')
      setStatus('WhatsApp has been requested in a new tab. Review and send the draft there. Nothing is sent automatically; if no tab opened, your message has not been sent.')
    }
  }

  return (
    <form className="contact-enquiry" ref={formRef} onSubmit={handleSubmit} aria-labelledby="contact-form-heading" aria-describedby={`${formId}-availability`} noValidate>
      <p className="contact-enquiry__availability" id={`${formId}-availability`}>
        {canRequest
          ? `This form prepares a draft in ${business.email ? 'your email app' : 'WhatsApp'}. Review and send it there; nothing is sent automatically. Your details are not stored by this website.`
          : contactContent.unavailable}
      </p>
      <p className="form-required-note">Fields marked * are required.</p>
      <div className="form-error-summary" role="alert" aria-atomic="true">
        {Object.keys(errors).length > 0 && 'Please check the highlighted fields. No details have been sent.'}
      </div>
      <fieldset disabled={!canRequest} aria-describedby={`${formId}-availability`}>
        <legend>Your project details</legend>
        <div className="contact-form__fields">
          <EnquiryField id={`${formId}-fullName`} label="Full name" required error={errors.fullName}>
            <input {...fieldProps('fullName')} autoComplete="name" maxLength={80} required />
          </EnquiryField>
          <EnquiryField id={`${formId}-email`} label="Email" required error={errors.email}>
            <input {...fieldProps('email')} type="email" autoComplete="email" maxLength={254} required />
          </EnquiryField>
          <EnquiryField id={`${formId}-phone`} label="Phone number (optional)" error={errors.phone}>
            <input {...fieldProps('phone')} type="tel" inputMode="tel" autoComplete="tel" maxLength={25} />
          </EnquiryField>
          <EnquiryField id={`${formId}-service`} label="Service interested in" required error={errors.service}>
            <select {...fieldProps('service')} defaultValue="" required>
              <option value="" disabled>Select a service</option>
              {contactServices.map((service) => <option key={service} value={service}>{service}</option>)}
            </select>
          </EnquiryField>
          <EnquiryField id={`${formId}-location`} label="Project location (optional)" wide>
            <input {...fieldProps('location')} autoComplete="address-level2" maxLength={160} />
          </EnquiryField>
          <EnquiryField id={`${formId}-message`} label="Message" required error={errors.message} wide>
            <textarea {...fieldProps('message')} rows={5} maxLength={2000} required />
          </EnquiryField>
        </div>
        <Button type="submit" className="contact-enquiry__submit" disabled={!canRequest} aria-describedby={`${formId}-availability`}>
          {canRequest ? (business.email ? 'Open email draft' : 'Open WhatsApp draft') : 'Submission unavailable'} <ArrowUpRight size={18} aria-hidden="true" />
        </Button>
      </fieldset>
      <p className="form-status" role="status" aria-live="polite" aria-atomic="true">{status}</p>
    </form>
  )
}

export default ContactEnquiryForm