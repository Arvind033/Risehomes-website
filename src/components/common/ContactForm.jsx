import { useEffect, useId, useRef, useState } from 'react'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import Button from './Button.jsx'
import { business, whatsappHref } from '../../data/business.js'

function FormField({ id, label, required = false, error, children, wide = false }) {
  return (
    <div className={`form-field${wide ? ' form-field--wide' : ''}`}>
      <label htmlFor={id}>{label}{required && <span aria-hidden="true"> *</span>}</label>
      {children}
      {error && <p className="field-error" id={`${id}-error`}>{error}</p>}
    </div>
  )
}

function ContactForm({ initialService = '' }) {
  const formId = useId()
  const formRef = useRef(null)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  const locations = business.serviceLocations.filter((location) => location.enabled)
  const canRequest = Boolean(business.email || whatsappHref)

  useEffect(() => {
    const firstError = Object.keys(errors)[0]
    if (firstError) formRef.current?.elements.namedItem(firstError)?.focus()
  }, [errors])

  function getFieldProps(name) {
    return {
      id: `${formId}-${name}`,
      name,
      'aria-invalid': errors[name] ? true : undefined,
      'aria-describedby': errors[name] ? `${formId}-${name}-error` : undefined,
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const values = Object.fromEntries(
      [...new FormData(form)].map(([name, value]) => [name, String(value).trim()]),
    )
    const nextErrors = {}
    const phoneDigits = values.phone.replace(/\D/g, '')

    if (!values.fullName) nextErrors.fullName = 'Enter your full name.'
    if (!/^\+?[\d\s()-]+$/.test(values.phone) || phoneDigits.length < 7 || phoneDigits.length > 15) {
      nextErrors.phone = 'Enter a valid phone number with 7 to 15 digits.'
    }
    if (values.email && form.elements.namedItem('email').validity.typeMismatch) {
      nextErrors.email = 'Enter a valid email address.'
    }
    if (!business.consultationServices.includes(values.service)) nextErrors.service = 'Select a service.'
    if (!locations.some((location) => location.name === values.location)) nextErrors.location = 'Select a project location.'
    if (form.elements.namedItem('area').validity.badInput || (values.area && (!Number.isFinite(Number(values.area)) || Number(values.area) <= 0))) {
      nextErrors.area = 'Enter an area greater than zero, or leave this field empty.'
    }

    setErrors(nextErrors)
    setStatus('')
    if (Object.keys(nextErrors).length) return

    const channel = event.nativeEvent.submitter?.value || (business.email ? 'email' : 'whatsapp')
    if ((channel === 'email' && !business.email) || (channel === 'whatsapp' && !whatsappHref)) {
      setStatus('Online consultation requests are not available yet. No details have been sent.')
      return
    }

    const enquiry = [
      `Consultation enquiry for ${business.name}`,
      '',
      `Name: ${values.fullName}`,
      `Phone: ${values.phone}`,
      `Email: ${values.email || 'Not provided'}`,
      `Service: ${values.service}`,
      `Project location: ${values.location}`,
      `Plot / built-up area (sq ft): ${values.area || 'Not provided'}`,
      '',
      values.message || 'I would like to discuss my project.',
    ].join('\n')

    if (channel === 'whatsapp') {
      window.open(`${whatsappHref}?text=${encodeURIComponent(enquiry)}`, '_blank', 'noopener,noreferrer')
      setStatus('Please review and send your enquiry in WhatsApp. Nothing is sent automatically.')
    } else {
      window.location.assign(`mailto:${business.email}?subject=${encodeURIComponent(`Project enquiry | ${business.name}`)}&body=${encodeURIComponent(enquiry)}`)
      setStatus('Please review and send your enquiry in your email app. Nothing is sent automatically.')
    }
  }

  return (
    <form className="contact-form" ref={formRef} onSubmit={handleSubmit} noValidate>
      {!canRequest && (
        <p className="consultation-availability" id={`${formId}-availability`}>
          You can call us using the number in the header. Online consultation requests are not available until an email or WhatsApp destination is configured. This disabled form does not collect or send details.
        </p>
      )}
      <p className="form-required-note">Fields marked * are required.</p>
      <div className="form-error-summary" role="alert">
        {Object.keys(errors).length > 0 && 'Please check the fields below.'}
      </div>
      <div className="contact-form__fields">
        <FormField id={`${formId}-fullName`} label="Full Name" required error={errors.fullName}>
          <input {...getFieldProps('fullName')} type="text" autoComplete="name" maxLength={80} required />
        </FormField>
        <FormField id={`${formId}-phone`} label="Phone Number" required error={errors.phone}>
          <input {...getFieldProps('phone')} type="tel" inputMode="tel" autoComplete="tel" maxLength={25} required />
        </FormField>
        <FormField id={`${formId}-email`} label="Email" error={errors.email}>
          <input {...getFieldProps('email')} type="email" autoComplete="email" maxLength={254} />
        </FormField>
        <FormField id={`${formId}-service`} label="Select Service" required error={errors.service}>
          <select {...getFieldProps('service')} defaultValue={initialService} required>
            <option value="" disabled>Select a service</option>
            {business.consultationServices.map((service) => <option key={service} value={service}>{service}</option>)}
          </select>
        </FormField>
        <FormField id={`${formId}-location`} label="Project Location" required error={errors.location}>
          <select {...getFieldProps('location')} defaultValue={locations[0]?.name || ''} required>
            <option value="" disabled>Select a location</option>
            {locations.map((location) => <option key={location.name} value={location.name}>{location.name}</option>)}
          </select>
        </FormField>
        <FormField id={`${formId}-area`} label="Plot / Built-up Area (sq ft)" error={errors.area}>
          <input {...getFieldProps('area')} type="number" inputMode="decimal" min="1" step="any" />
        </FormField>
        <FormField id={`${formId}-message`} label="Tell us about your project" wide>
          <textarea {...getFieldProps('message')} rows={3} maxLength={1200} />
        </FormField>
      </div>
      <p className="form-privacy-note">
        Your details stay in this page until you choose to open an enquiry in email or WhatsApp. They are not stored by this website.
      </p>
      <div className="contact-form__actions">
        <Button
          type="submit"
          name="channel"
          value={business.email ? 'email' : 'whatsapp'}
          disabled={!canRequest}
          aria-describedby={!canRequest ? `${formId}-availability` : undefined}
        >
          Request Consultation <ArrowUpRight size={17} aria-hidden="true" />
        </Button>
        <Button type="submit" name="channel" value="whatsapp" variant="secondary" disabled={!whatsappHref}>
          <MessageCircle size={17} aria-hidden="true" /> WhatsApp instead
        </Button>
      </div>
      <p className="form-status" role="status" aria-live="polite">{status}</p>
    </form>
  )
}

export default ContactForm