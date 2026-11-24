import { Link } from 'react-router-dom'

function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  disabled = false,
  type = 'button',
  ...props
}) {
  const classes = `button button--${variant} ${className}`.trim()

  if (to && !disabled) {
    return <Link className={classes} to={to} {...props}>{children}</Link>
  }

  if (href && !disabled) {
    return <a className={classes} href={href} {...props}>{children}</a>
  }

  return (
    <button className={classes} type={type} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button