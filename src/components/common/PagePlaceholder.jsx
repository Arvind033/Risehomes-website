import Container from './Container.jsx'
import SectionHeading from './SectionHeading.jsx'

function PagePlaceholder({ title, description, children }) {
  return (
    <section className="page-placeholder">
      <Container>
        <SectionHeading
          as="h1"
          id="page-heading"
          tabIndex={-1}
          title={title}
          description={description}
        />
        {children}
      </Container>
    </section>
  )
}

export default PagePlaceholder