const logoBasePath = `${import.meta.env.BASE_URL}images/logo/`

export const business = {
  name: 'RISE HOMES',
  siteUrl: 'https://www.risehomes.in',
  tagline: 'Building Dreams, Creating Futures',
  serviceLine: 'Construction \u2022 Interiors',
  logos: {
    header: `${logoBasePath}Rise-Homes-Website-Horizontal-3000x1000.png`,
    full: `${logoBasePath}Rise-Homes-Master-Transparent-6000px.png`,
    white: `${logoBasePath}Rise-Homes-White-Transparent-6000px.png`,
    social: `${logoBasePath}Rise-Homes-Social-Square-2000px.png`,
    icon: `${logoBasePath}Rise-Homes-Icon-2000px.png`,
  },
  phone: '7019256060',
  additionalPhones: ['7975418080'],
  whatsapp: '',
  email: '',
  address: 'No. 376, 60 Feet Road, MEI Layout, Bagalagunte, Bengaluru Urban-560073',
  serviceLocations: [{ name: 'Bengaluru', enabled: true }],
  consultationServices: ['Home Construction', 'Interiors', 'Renovation', 'Commercial Construction', 'Other'],
  socialLinks: [
    { name: 'Instagram', url: '' },
    { name: 'Facebook', url: '' },
    { name: 'YouTube', url: '' },
  ],
}

export const serviceArea = business.serviceLocations
  .filter((location) => location.enabled)
  .map((location) => location.name)
  .join(', ')

export const phoneHref = business.phone
  ? `tel:${business.phone.replace(/[^\d+]/g, '')}`
  : ''

export const whatsappHref = business.whatsapp
  ? `https://wa.me/${business.whatsapp.replace(/\D/g, '')}`
  : ''

export const contactLinks = [
  { label: `Call ${business.phone}`, href: phoneHref },
  ...business.additionalPhones.map((phone) => ({
    label: `Call ${phone}`,
    href: `tel:${phone.replace(/[^\d+]/g, '')}`,
  })),
  {
    label: 'WhatsApp',
    href: whatsappHref,
  },
  { label: business.email, href: business.email ? `mailto:${business.email}` : '' },
  ...business.socialLinks.map((link) => ({ label: link.name, href: link.url })),
].filter((link) => link.href)