import { business, serviceArea } from './business.js'
import { processSteps } from './home.js'

export const constructionTypes = [
  { title: 'Independent Homes', description: 'Individual homes considered around your site, daily routines, and the spaces you need.' },
  { title: 'Contemporary Villas', description: 'A considered approach to space, natural light, and the relationship between indoors and outdoors.' },
  { title: 'Residential Construction', description: 'Residential building requirements discussed around the site, intended use, and agreed scope.' },
  { title: 'Renovation & Improvements', description: 'Changes to an existing home assessed around its condition, your priorities, and the proposed project scope.' },
]

export const constructionServices = [
  { title: 'Planning & Coordination', description: 'Bring together the brief, site information, design requirements, and sequence of work before execution.' },
  { title: 'Civil & Structural Work', description: 'Coordinate foundation, structural, and civil work according to the project design and agreed scope.' },
  { title: 'Electrical & Plumbing', description: 'Consider service routes, points, and installation requirements alongside the layout and construction sequence.' },
  { title: 'Flooring & Finishes', description: 'Discuss surfaces and finishes in relation to how each space will be used, the design direction, and the budget.' },
  { title: 'Painting & Surface Finishing', description: 'Coordinate surface preparation and painting choices as part of the agreed finishing work.' },
  { title: 'Final Finishing & Handover', description: 'Review the agreed work, discuss finishing details, and coordinate the steps toward handover.' },
]

export const constructionInclusions = [
  { title: 'Planning & Scope', description: 'We discuss your requirements, site context, and project scope before execution. The work, responsibilities, and information needed should be clarified together; inclusions depend on the agreed project scope.' },
  { title: 'Structure & Civil Work', description: 'Depending on the agreed scope and design, civil work may involve site preparation, foundations, the structural frame, walls, and related construction stages. The sequence and requirements are reviewed for the individual project.' },
  { title: 'Electrical & Plumbing', description: 'Electrical points, water supply, drainage routes, and installation requirements are coordinated with the building layout. The systems and work included depend on the agreed project scope.' },
  { title: 'Finishes', description: 'Flooring, wall finishes, painting, and other finishing stages are discussed alongside material preferences and intended use. Selections and inclusions are confirmed within the agreed project scope.' },
  { title: 'Final Review & Handover', description: 'The completed scope is reviewed together, including finishing details and any points needing attention. Final checks, relevant care information, and handover arrangements are coordinated for the agreed work.' },
]

const constructionProcessDescriptions = {
  Discover: 'Understand your requirements, site and expectations.',
  Design: 'Develop the direction for the home and its spaces.',
  Plan: 'Clarify scope, sequence and execution requirements.',
  Build: 'Coordinate construction and execution.',
  Finish: 'Complete finishing details and prepare the home.',
  Handover: 'Review the completed scope and coordinate handover.',
}

export const constructionProcess = processSteps.map((step) => ({
  ...step,
  description: constructionProcessDescriptions[step.title] ?? step.description,
}))

export const constructionPrinciples = [
  { title: 'Clarity', description: 'Clearer communication and scope from the beginning.' },
  { title: 'Planning', description: 'Thoughtful preparation before execution moves forward.' },
  { title: 'Attention', description: 'Careful consideration of construction and finishing details.' },
  { title: 'Responsibility', description: 'A considered approach to coordination, execution and handover.' },
]

export const constructionFaqs = [
  { title: 'What does Rise Homes offer for construction?', description: `${business.name} offers residential construction support, from planning and coordination through civil work, services, finishes, and handover. The work included is defined by the agreed project scope.` },
  { title: 'Can I build a home on my own plot?', description: 'We can discuss a home on your plot based on the site, your requirements, and the proposed scope. Share the location and available site details so feasibility and applicable approvals can be considered.' },
  { title: 'Do you provide design and construction together?', description: 'Design and construction requirements can be discussed together so the plans and execution approach are considered as a whole. Design responsibilities and deliverables are clarified in the agreed scope.' },
  { title: 'Can I customize the design of my home?', description: 'Your preferences for layouts, spaces, and finishes are part of the planning conversation. The agreed design needs to consider the site, budget, feasibility, and applicable approvals.' },
  { title: 'Do you take up renovation projects?', description: 'Renovation and improvement projects can be discussed and assessed based on the condition of the existing space and the proposed scope.' },
  { title: 'How does the initial consultation work?', description: 'Share your site location, requirements, and ideas through the consultation form. These details give us a starting point to discuss the project and possible next steps.' },
  { title: 'What information should I have before contacting Rise Homes?', description: 'Start with your site location, approximate plot or built-up area, intended use, and main priorities. Share any available drawings and budget considerations; you do not need every detail settled to start a conversation.' },
  { title: 'Where does Rise Homes currently provide construction services?', description: `${business.name} currently serves ${serviceArea}. Share your project location so the requirements and scope can be discussed in context.` },
]