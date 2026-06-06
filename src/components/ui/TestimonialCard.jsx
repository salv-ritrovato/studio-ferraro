function StarRating({ rating = 5 }) {
  return (
    <div
      className="flex gap-0.5 text-amber-400"
      role="img"
      aria-label={`Valutazione ${rating} su 5 stelle`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className="h-5 w-5"
          fill={index < rating ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15l-5.2 2.6 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  )
}

function getInitials(name = '') {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

function TestimonialCard({ name, role, review, rating }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
      <svg
        viewBox="0 0 24 24"
        className="h-9 w-9 text-primary/20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M9.5 6C6.5 7.3 4.5 10 4.5 13.2c0 2.7 1.7 4.8 4 4.8 2 0 3.5-1.5 3.5-3.5S10.4 11 8.5 11c-.4 0-.8 0-1 .2.5-1.7 2-3 3.8-3.8L9.5 6zm9 0c-3 1.3-5 4-5 7.2 0 2.7 1.7 4.8 4 4.8 2 0 3.5-1.5 3.5-3.5S19.4 11 17.5 11c-.4 0-.8 0-1 .2.5-1.7 2-3 3.8-3.8L18.5 6z" />
      </svg>
      <StarRating rating={rating} />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
        “{review}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-semibold text-white">
          {getInitials(name)}
        </span>
        <span>
          <span className="block text-sm font-semibold text-ink">{name}</span>
          <span className="block text-xs text-slate-400">{role}</span>
        </span>
      </figcaption>
    </figure>
  )
}

export default TestimonialCard
