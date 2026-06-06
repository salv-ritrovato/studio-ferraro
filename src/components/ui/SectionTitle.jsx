function SectionTitle({ title, subtitle, align = 'center', eyebrow }) {
  const isCenter = align === 'center'

  return (
    <div className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : 'text-left'}`}>
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold leading-[1.15] text-ink sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
          {subtitle}
        </p>
      )}
      <span
        className={`mt-6 block h-1 w-20 rounded-full bg-gradient-to-r from-primary via-accent to-mint ${
          isCenter ? 'mx-auto' : ''
        }`}
        aria-hidden="true"
      />
    </div>
  )
}

export default SectionTitle
