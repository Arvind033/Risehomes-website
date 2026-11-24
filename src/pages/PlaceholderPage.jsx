import { useEffect } from 'react'
import Button from '../components/common/Button.jsx'
import ContactDetails from '../components/common/ContactDetails.jsx'
import PagePlaceholder from '../components/common/PagePlaceholder.jsx'
import { business } from '../data/business.js'

function PlaceholderPage({ page }) {
  useEffect(() => {
    document.title = `${page.title} | ${business.name}`
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description)
  }, [page.title, page.description])

  return (
    <PagePlaceholder title={page.heading ?? page.title} description={page.description}>
      {page.path === '/contact' && <ContactDetails />}
      {page.path === '*' && <Button to="/">Return Home</Button>}
    </PagePlaceholder>
  )
}

export default PlaceholderPage