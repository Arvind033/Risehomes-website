import { business, serviceArea } from './business.js'
import { referencePhotos } from './home.js'

export const aboutContent = {
  seo: {
    title: `About ${business.name} | Construction & Interiors in ${serviceArea}`,
    description: `Learn about ${business.name}, a ${serviceArea}-based construction and interiors company focused on clearer planning, thoughtful design and quality-conscious execution.`,
  },
  hero: {
    eyebrow: `About ${business.name}`,
    title: 'A clearer way to create a home.',
    description: `${business.name} is a ${serviceArea}-based construction and interiors company built with a simple idea \u2014 make the process of creating a home clearer, more thoughtful and more personal.`,
    image: referencePhotos.hero,
  },
  story: {
    eyebrow: 'Our story',
    title: 'Built around a simpler idea.',
    lead: 'Creating a home should feel exciting, not overwhelming.',
    paragraphs: [
      `${business.name} brings construction and interiors together with a focus on clearer communication, thoughtful planning and considered design. We want every stage of the journey \u2014 from the first conversation to the finishing touches \u2014 to feel easier to understand and more intentional.`,
      `We are building ${business.name} around long-term relationships, responsible execution and homes that feel personal to the people who live in them.`,
    ],
  },
  philosophy: {
    eyebrow: 'Our philosophy',
    title: 'Clarity before complexity.',
    description: 'Good homes begin with good conversations.',
    items: [
      { title: 'CLARITY', description: 'Clear conversations, realistic planning and an approach that helps you understand what comes next.' },
      { title: 'THOUGHTFULNESS', description: 'Every decision matters \u2014 from how a space is planned to how the smallest details come together.' },
      { title: 'PERSONAL', description: 'Your home should reflect the way you live. We listen first, then shape the design and execution around your needs.' },
    ],
  },
  values: {
    eyebrow: 'Our values',
    title: 'What guides the way we work.',
    items: [
      { title: 'CLARITY', description: 'Making decisions, expectations and the next steps easier to understand.' },
      { title: 'QUALITY', description: 'Paying attention to materials, workmanship and the details that shape the finished home.' },
      { title: 'DESIGN', description: 'Creating spaces that balance beauty, function and the way you actually live.' },
      { title: 'RESPONSIBILITY', description: 'Communicating honestly, planning carefully and taking ownership of the work.' },
    ],
  },
  process: {
    eyebrow: 'How we work',
    title: 'A considered process, from first conversation to handover.',
    steps: [
      { title: 'Discover', description: 'Understand your requirements, lifestyle, site and priorities.' },
      { title: 'Design', description: 'Shape the architectural and interior direction around how you want to live.' },
      { title: 'Plan', description: 'Bring together scope, decisions, timelines and the information needed to move forward.' },
      { title: 'Build', description: 'Execute with attention to workmanship, coordination and quality.' },
      { title: 'Finish', description: 'Bring together materials, interiors, lighting and the details that complete the space.' },
      { title: 'Handover', description: 'Complete the final stage carefully and help you move into your new space with clarity.' },
    ],
  },
  services: {
    eyebrow: 'One home. One approach.',
    title: 'Construction and interiors, considered together.',
    lead: 'A home is more than its structure.',
    paragraphs: [
      'Construction creates the foundation. Interiors shape how the finished space feels, functions and lives.',
      `${business.name} brings these two sides together so that planning, design and finishing decisions can be considered as part of the same journey.`,
    ],
    items: [
      {
        title: 'Construction',
        description: 'Thoughtful planning and quality-conscious execution from foundation to finish.',
        image: referencePhotos.house,
        path: '/construction',
        action: 'Explore Construction',
      },
      {
        title: 'Interiors',
        description: 'Considered spaces shaped around your lifestyle, preferences and everyday needs.',
        image: referencePhotos.living,
        path: '/interiors',
        action: 'Explore Interiors',
      },
    ],
  },
  standFor: {
    eyebrow: 'What we stand for',
    title: 'The details matter.',
    items: [
      { title: 'HONEST SCOPE', description: 'Clear conversations about what the project involves.' },
      { title: 'CONSIDERED DESIGN', description: 'Design decisions made with purpose, not simply for appearance.' },
      { title: 'QUALITY-CONSCIOUS EXECUTION', description: 'Attention to workmanship, materials and finishing details.' },
      { title: 'RESPONSIBLE COMMUNICATION', description: 'Keeping decisions, expectations and next steps clear.' },
    ],
  },
  contact: {
    eyebrow: 'Start a conversation',
    title: "Let's talk about your home.",
    description: "Whether you're planning a new home or shaping the interiors of an existing space, start with a conversation about what you have in mind.",
  },
}