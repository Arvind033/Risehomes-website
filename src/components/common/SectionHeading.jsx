function SectionHeading({ title, description, as: Heading = 'h2', ...props }) {
  return (
    <div className="section-heading">
      <Heading {...props}>{title}</Heading>
      {description && <p>{description}</p>}
    </div>
  )
}

export default SectionHeading