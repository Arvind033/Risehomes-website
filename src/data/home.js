import { business, serviceArea } from './business.js'

function referencePhoto(folder, name, widths, alt, source) {
  const base = `${import.meta.env.BASE_URL}images/${folder}/${name}`
  const width = widths[widths.length - 1]

  return {
    src: `${base}-${width}.webp`,
    srcSet: widths.map((size) => `${base}-${size}.webp ${size}w`).join(', '),
    width,
    height: width * 2 / 3,
    alt,
    source,
  }
}

export const referencePhotos = {
  hero: {
    src: `${import.meta.env.BASE_URL}images/home/home-hero-indian-villa.webp`,
    width: 1774,
    height: 887,
    alt: 'Architectural reference: an Indian villa design at dusk.',
  },
  house: referencePhoto(
    'construction', 'indian-villa-garden-reference', [720, 1200],
    'Architectural reference: an Indian-style villa with balconies, stone cladding, a compound wall and a planted entrance.',
    `${import.meta.env.BASE_URL}images/home/home-hero-indian-villa.webp`,
  ),
  living: referencePhoto(
    'interiors', 'indian-light-filled-living-reference', [600, 1080],
    'Interior reference: a contemporary Indian living room with light upholstery, timber furniture, veined flooring and a softly lit false ceiling.',
    'https://unsplash.com/photos/a-cozy-and-modern-living-room-decor-60OrX4hTS_g',
  ),
  details: referencePhoto(
    'interiors', 'indian-stair-living-reference', [600, 1080],
    'Interior reference: an Indian living area with a glass-railed staircase, a timber-framed opening and upholstered seating.',
    'https://unsplash.com/photos/cozy-and-modern-living-room-with-unique-decor-F307jXWOjfw',
  ),
  openPlan: referencePhoto(
    'projects', 'indian-open-plan-render-reference', [600, 1080],
    'Interior design reference (3D render): a compact 1BHK living and dining space with a timber divider, ceiling fan and modular kitchen.',
    'https://unsplash.com/photos/a-modern-living-room-with-open-kitchen-and-divider-CBstGVEgTlw',
  ),
}

export const homeServicesIntro = {
  eyebrow: 'From structure to space',
  title: 'Built around the way you live.',
  description: 'A new home or a new way to live in it. Two connected disciplines, one personal vision: yours.',
}

export const homeServices = [
  {
    number: '01',
    title: 'Construction',
    subtitle: 'A considered start. A place to call your own.',
    description: 'Thoughtful planning and quality-conscious execution, from the first conversation to the finishing touches.',
    details: 'Planning. Structure. Finishes.',
    image: referencePhotos.house,
    path: '/construction',
    service: 'Home Construction',
    action: 'Explore Construction',
  },
  {
    number: '02',
    title: 'Interiors',
    subtitle: 'Spaces that feel like you.',
    description: 'Considered layouts, materials, storage, and light. Interiors shaped around your routines and the way you want to live.',
    details: 'Space. Materials. Everyday living.',
    image: referencePhotos.living,
    path: '/interiors',
    service: 'Interiors',
    action: 'Explore Interiors',
  },
]

export const homePrinciplesIntro = {
  eyebrow: `Why ${business.name}`,
  title: 'Built around the way you live.',
  description: 'Clear thinking, thoughtful design and quality-conscious execution \u2014 from the first conversation to the finishing touches.',
}

export const homePrinciples = [
  { title: 'Clarity', description: 'Clear communication, transparent decisions and a process you can understand.' },
  { title: 'Quality', description: 'Thoughtful material choices and careful attention to execution and finishing.' },
  { title: 'Design', description: 'Construction and interiors considered together, so the home feels complete from the beginning.' },
  { title: 'Responsibility', description: 'A practical approach to budgets, timelines and the decisions that shape your home.' },
]

export const processSteps = [
  {
    title: 'Discover',
    heading: 'First, we listen.',
    description: 'Every home begins with a conversation. We get to know your location, your priorities, and what a good home means to you.',
    focus: ['Your needs and priorities', 'Your location and space', 'Your initial ideas'],
  },
  {
    title: 'Design',
    heading: 'Give your ideas a direction.',
    description: 'Explore how spaces connect, how light moves, and how your home can support the way you live. Your brief guides the design conversation.',
    focus: ['Layouts and flow', 'Light and everyday use', 'Your design preferences'],
  },
  {
    title: 'Plan',
    heading: 'Bring the details into focus.',
    description: 'Discuss the scope, material choices, budget, and sequence of work. Clear decisions at this stage create a more useful starting point for execution.',
    focus: ['An agreed scope', 'Materials and budget', 'Approvals and sequencing'],
  },
  {
    title: 'Build',
    heading: 'Turn the plan into a place.',
    description: 'Translate the agreed plans into careful on-site execution, with attention to coordination and communication as work progresses.',
    focus: ['Site coordination', 'Workmanship and checks', 'Progress conversations'],
  },
  {
    title: 'Finish',
    heading: 'Make the details count.',
    description: 'Bring together the finishes, fittings, and final details that shape the experience of a home. Review both how things look and how they work.',
    focus: ['Material finishes', 'Fit and function', 'Attention to detail'],
  },
  {
    title: 'Handover',
    heading: 'A thoughtful finish. A new beginning.',
    description: 'Review the completed scope together, discuss care and use, and bring the project to a considered close.',
    focus: ['A joint walkthrough', 'Agreed-scope review', 'Care and use guidance'],
  },
]

export const designInspiration = [
  {
    title: 'Room for life to unfold.',
    theme: 'Connected spaces / Natural light',
    image: referencePhotos.openPlan,
  },
  {
    title: 'Details that bring it together.',
    theme: 'Timber details / Open living',
    image: referencePhotos.details,
  },
]

export const qualityDetails = [
  { title: 'Decisions with purpose', description: 'Specifications and material choices considered alongside your needs, budget, and design intent.' },
  { title: 'Care through the process', description: 'Attention to coordination, workmanship, and the details that connect one stage to the next.' },
  { title: 'Finishes for everyday life', description: 'A thoughtful balance of appearance, function, and maintenance when bringing the final details together.' },
]

export const homeFaqs = [
  {
    question: 'Which locations do you currently serve?',
    answer: `${business.name} currently serves ${serviceArea}. Share your project location so we can discuss your requirements in context.`,
  },
  {
    question: 'Can I discuss both construction and interiors?',
    answer: 'Yes. Construction and interiors are both part of our service offering. We can discuss an approach that considers the structure and the spaces within it together.',
  },
  {
    question: 'What is included in a construction project?',
    answer: 'The scope depends on your site, design, requirements, and agreed specifications. Inclusions and exclusions should be clarified during planning, before work begins.',
  },
  {
    question: 'Can I choose my own materials and finishes?',
    answer: 'Your preferences are part of the planning conversation. The agreed selections should balance design, budget, availability, and everyday maintenance.',
  },
  {
    question: 'How much will my project cost?',
    answer: 'Costs depend on area, site conditions, scope, and material choices. A useful estimate starts with a clear brief; a single rate cannot describe every home.',
  },
  {
    question: 'How long does a project take?',
    answer: 'The schedule depends on the scope, design decisions, approvals, and site conditions. An appropriate timeline is discussed once the project requirements are understood.',
  },
  {
    question: 'What about home loan assistance?',
    answer: 'Financing considerations can be discussed alongside your construction plans. Loan eligibility, approval, interest rates, and disbursement terms are always decided by your lender.',
  },
  {
    question: 'How do I start the conversation?',
    answer: 'Begin with your project location, the kind of space you have in mind, and your main priorities. These details give us a useful starting point for a consultation.',
  },
]