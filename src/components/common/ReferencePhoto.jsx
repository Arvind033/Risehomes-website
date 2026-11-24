function ReferencePhoto({ image, className = '', sizes = '100vw', loading = 'lazy', ...props }) {
  return (
    <img
      className={`reference-photo ${className}`.trim()}
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={image.alt}
      loading={loading}
      decoding="async"
      {...props}
    />
  )
}

export default ReferencePhoto