import { business, serviceArea } from './business.js'

export const pages = [
  {
    path: '/',
    title: 'Home',
    heading: business.name,
    description: `${business.tagline}. Thoughtfully planned construction and interiors in ${serviceArea}.`,
  },
  {
    path: '/construction',
    title: 'Construction',
    description: `Home construction in ${serviceArea}. Service details coming soon.`,
  },
  {
    path: '/interiors',
    title: 'Interiors',
    description: `Home interiors in ${serviceArea}. Service details coming soon.`,
  },
  {
    path: '/projects',
    title: 'Projects',
    description: 'Our journey starts here. Project updates will be shared when available.',
  },
  {
    path: '/projects/:slug',
    title: 'Project Details',
    description: 'No project information has been published here yet.',
    showInNavigation: false,
  },
  {
    path: '/about',
    title: 'About',
    description: `${business.name} is a ${serviceArea}-based construction and interiors company. More about us coming soon.`,
  },
  {
    path: '/blog',
    title: 'Blog',
    description: 'Articles will appear here when they are ready. Nothing has been published yet.',
  },
  {
    path: '/blog/:slug',
    title: 'Article',
    description: 'No article has been published at this address yet.',
    showInNavigation: false,
  },
  {
    path: '/contact',
    title: 'Contact',
    description: `Currently serving ${serviceArea}. Contact details will be shared here when available.`,
  },
]

export const navigationLinks = pages
  .filter((page) => page.showInNavigation !== false)
  .map((page) => ({ path: page.path, label: page.title }))

export const notFoundPage = {
  path: '*',
  title: 'Page Not Found',
  description: 'This address does not match a page on our website.',
}