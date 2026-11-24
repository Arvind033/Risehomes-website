import { business, contactLinks } from '../../data/business.js'

function ContactDetails() {
  if (!contactLinks.length && !business.address) return null

  return (
    <div className="contact-details">
      {contactLinks.length > 0 && (
        <ul className="contact-links">
          {contactLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      )}
      {business.address && <address>{business.address}</address>}
    </div>
  )
}

export default ContactDetails