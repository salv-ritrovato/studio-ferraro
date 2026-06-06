// Mappa delle icone SVG usate dai servizi (chiave -> elemento SVG).
const ICONS = {
  tooth: (
    <path d="M16 4c-1.7 0-2.9.8-4 1.6C11.1 6.2 10.4 6.7 9.5 6.7S8 6.2 7 5.6C6 4.8 4.8 4 3.1 4 1.4 4 0 6 0 9.5 0 13.7 2.2 19 4.6 19c1.3 0 2-.7 2.8-1.4.9-.8 1.8-1.6 3.1-1.6s2.2.8 3.1 1.6c.8.7 1.5 1.4 2.8 1.4 2.4 0 4.6-5.3 4.6-9.5C21 6 19.3 4 16 4Z" transform="translate(1.5 .5)" />
  ),
  align: (
    <>
      <rect x="3" y="4" width="18" height="4" rx="1.5" />
      <rect x="6" y="10" width="12" height="4" rx="1.5" />
      <rect x="3" y="16" width="18" height="4" rx="1.5" />
    </>
  ),
  implant: (
    <path d="M12 2c-2.2 0-4 1.8-4 4 0 1 .3 1.6.9 2.4.5.7.6 1.1.6 2.1l-.2 2.5c0 .6.4 1 1 1h.4l.5 6.2c.1.7.4 1.3.8 1.3s.7-.6.8-1.3l.5-6.2h.4c.6 0 1-.4 1-1l-.2-2.5c0-1 .1-1.4.6-2.1.6-.8.9-1.4.9-2.4 0-2.2-1.8-4-4-4Z" />
  ),
  sparkle: (
    <path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2zm6 11l.9 2.5L21.5 16l-2.6.9L18 19.5l-.9-2.6L14.5 16l2.6-.9L18 13zM6 14l.7 2L8.5 16.7 6.5 17.4 6 19.5l-.7-2.1L3.5 16.7 5.5 16 6 14z" />
  ),
  scalpel: (
    <path d="M3 17.5 14.5 6 18 9.5 6.5 21 3 21v-3.5zM16 4.5l2-2c.6-.6 1.5-.6 2 0l1.5 1.5c.6.6.6 1.5 0 2l-2 2L16 4.5z" />
  ),
  smile: (
    <>
      <circle cx="12" cy="12" r="9" fill="none" strokeWidth="2" stroke="currentColor" />
      <circle cx="9" cy="10" r="1.2" />
      <circle cx="15" cy="10" r="1.2" />
      <path d="M8 14c1 1.6 2.4 2.4 4 2.4S15 15.6 16 14" fill="none" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />
    </>
  ),
}

function ServiceCard({ title, description, icon }) {
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-soft">
      <span
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden="true"
      />
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7"
          fill="currentColor"
          aria-hidden="true"
        >
          {ICONS[icon] ?? ICONS.tooth}
        </svg>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-500">{description}</p>
    </article>
  )
}

export default ServiceCard
