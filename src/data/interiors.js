import { business, serviceArea } from './business.js'
import { processSteps } from './home.js'

export const interiorSpaces = [
  { title: 'Living Spaces', description: 'Comfortable, welcoming spaces designed around everyday life.' },
  { title: 'Kitchens', description: 'Functional layouts with thoughtful storage, materials and lighting.' },
  { title: 'Bedrooms', description: 'Calm, personal spaces designed for comfort and rest.' },
  { title: 'Wardrobes & Storage', description: 'Practical storage integrated with the overall design.' },
  { title: 'TV & Entertainment', description: 'Balanced media walls and entertainment spaces that fit naturally into the room.' },
  { title: 'False Ceiling & Lighting', description: 'Lighting and ceiling details that shape the atmosphere of a space.' },
  { title: 'Home Offices', description: 'Focused workspaces designed for comfort and everyday productivity.' },
  { title: 'Office & Commercial Interiors', description: 'Thoughtful interiors for offices and other selected spaces based on project scope.' },
]

export const interiorApproach = [
  { title: 'Understand', description: 'We begin by understanding your requirements, lifestyle, preferences and space.' },
  { title: 'Plan', description: 'Layouts, functional requirements and the overall design direction are clarified.' },
  { title: 'Design', description: 'Materials, finishes, lighting and visual details come together into a considered interior.' },
  { title: 'Execute', description: 'The agreed design is coordinated through the execution and finishing stages.' },
]

export const interiorScope = [
  { title: 'Space Planning', description: 'Consider circulation, furniture placement, and how each space connects to your daily routines.' },
  { title: 'Interior Design Direction', description: 'Develop a visual and functional direction around your preferences and the character of the space.' },
  { title: 'Material & Finish Selection', description: 'Discuss materials and finishes in relation to appearance, use, maintenance, and the agreed budget.' },
  { title: 'Custom Storage & Wardrobes', description: 'Plan storage and wardrobe layouts around what you need to keep and the space available.' },
  { title: 'Kitchen Design', description: 'Consider kitchen workflows, storage, work surfaces, and service positions together.' },
  { title: 'Lighting & False Ceiling', description: 'Coordinate lighting and ceiling ideas with room use, service requirements, and the design direction.' },
  { title: 'Furniture & Styling Coordination', description: 'Consider furniture proportions, placement, and finishing touches as part of the agreed interior scope.' },
  { title: 'Execution & Finishing Coordination', description: 'Coordinate the agreed interior work, finishing details, and points to review before handover.' },
]

const interiorProcessDescriptions = {
  Discover: 'Understand your requirements, space and preferences.',
  Design: 'Develop the visual and functional direction.',
  Plan: 'Clarify scope, materials, sequence and execution requirements.',
  Build: 'Coordinate the agreed interior work.',
  Finish: 'Complete the details that bring the design together.',
  Handover: 'Review the completed scope and coordinate handover.',
}

export const interiorProcess = processSteps.map((step) => ({
  ...step,
  description: interiorProcessDescriptions[step.title] ?? step.description,
}))

export const interiorPrinciples = [
  { title: 'FUNCTION', description: 'Spaces should work naturally for the people using them.' },
  { title: 'LIGHT', description: 'Natural and artificial lighting should support both mood and function.' },
  { title: 'MATERIAL', description: 'Materials and finishes should work together rather than compete.' },
  { title: 'DETAIL', description: 'Small decisions often shape how complete a space feels.' },
]

export const interiorFaqs = [
  { question: 'What interior services does Rise Homes provide?', answer: `${business.name} can help with space planning, design direction, materials and finishes, storage, kitchens, lighting, and execution coordination. The work included depends on the agreed project scope.` },
  { question: 'Can I customize the design?', answer: 'Your preferences, routines, and priorities shape the design conversation. Layouts, materials, and finishes are considered alongside the space, feasibility, and agreed budget.' },
  { question: 'Do you work with existing homes?', answer: 'Existing-home projects can be discussed based on the condition of the space, your requirements, and the proposed scope. Share what you would like to retain or change so the approach can be considered.' },
  { question: 'Can you design only one room?', answer: 'Individual spaces can be discussed depending on the project. Tell us which room you have in mind, how you use it, and the changes you would like to explore.' },
  { question: 'Do you take up kitchen and wardrobe work?', answer: 'Kitchen and wardrobe requirements can be discussed as part of the interior scope. Layouts, storage, materials, and execution responsibilities are clarified for the project.' },
  { question: 'Can you help with lighting and false ceiling design?', answer: 'Lighting and false ceiling ideas can be considered together with the room layout and intended use. The proposed work depends on site conditions, service requirements, and the agreed scope.' },
  { question: 'How does the interior consultation work?', answer: 'Use the consultation form to outline your location, the spaces you want to work on, and your main priorities. Available room dimensions, photographs, or drawings can help inform the conversation.' },
  { question: 'Where does Rise Homes currently provide interior services?', answer: `${business.name} currently serves ${serviceArea}. Share your project location so your interior requirements and scope can be discussed in context.` },
]