const VARIANTS = {
  primary:
    'bg-primary text-white shadow-soft hover:bg-secondary hover:-translate-y-0.5 focus-visible:outline-primary',
  secondary:
    'bg-white text-secondary border border-secondary/20 hover:border-secondary hover:bg-secondary/5 focus-visible:outline-secondary',
  outline:
    'bg-transparent text-white border border-white/70 hover:bg-white hover:text-secondary focus-visible:outline-white',
  ghost:
    'bg-white/10 text-white border border-white/30 hover:bg-white/20 focus-visible:outline-white',
}

function Button({
  variant = 'primary',
  children,
  onClick,
  type = 'button',
  href,
  className = '',
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${
    VARIANTS[variant] ?? VARIANTS.primary
  } ${className}`

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  )
}

export default Button
