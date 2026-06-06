const FOOTER_LINKS = [
  { label: 'Chi siamo', href: '#about' },
  { label: 'Servizi', href: '#services' },
  { label: 'Risultati', href: '#risultati' },
  { label: 'Team', href: '#team' },
  { label: 'Recensioni', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contatti', href: '#contact' },
]

const SOCIALS = [
  {
    label: 'Facebook',
    href: '#',
    icon: 'M13.5 9H16l.5-3h-3V4.2c0-.8.3-1.4 1.5-1.4H17V.1C16.6.1 15.4 0 14.3 0 11.8 0 10 1.5 10 4v2H7.5v3H10v8h3.5V9z',
  },
  {
    label: 'Instagram',
    href: '#',
    icon: 'M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 4 4 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zm0 3.3a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 10.7a4.2 4.2 0 110-8.4 4.2 4.2 0 010 8.4zm6.7-10.9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: 'M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3V9zm6 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21H9V9z',
  },
]

function Footer() {
  return (
    <footer className="bg-ink text-slate-300">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <a href="#hero" className="flex items-center gap-2" aria-label="Studio Dentistico Ferraro - Home">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                <path d="M16.5 3.5c-1.7 0-2.9.8-4 1.6-.9.6-1.6 1.1-2.5 1.1S8.4 5.7 7.5 5.1c-1.1-.8-2.3-1.6-4-1.6C1.8 3.5.1 5.5.1 9c0 4.2 2.2 9.5 4.6 9.5 1.3 0 2-.7 2.8-1.4.9-.8 1.8-1.6 3.1-1.6s2.2.8 3.1 1.6c.8.7 1.5 1.4 2.8 1.4 2.4 0 4.6-5.3 4.6-9.5 0-3.5-1.7-5.5-3.5-5.5Z" transform="translate(1.4 1.5)" />
              </svg>
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-white">
              Studio <span className="text-accent">Ferraro</span>
            </span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Cure dentali moderne e personalizzate per tutta la famiglia. Il tuo
            sorriso, la nostra priorità.
          </p>
        </div>

        <nav aria-label="Link di navigazione footer">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Navigazione
          </h4>
          <ul className="mt-4 space-y-2.5">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contatti
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
            <li>Via Roma 42, 20121 Milano</li>
            <li>
              <a href="tel:+390212345678" className="transition-colors hover:text-accent">
                +39 02 3331 74020
              </a>
            </li>
            <li>
              <a href="mailto:info@studioferraro.it" className="transition-colors hover:text-accent">
                info@studioferraro.it
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Seguici
          </h4>
          <div className="mt-4 flex gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-all hover:bg-primary hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Studio Dentistico Ferraro. Tutti i diritti riservati.</p>
          <p>P.IVA 012345678908 · Dir. San. Dr. Alberto Ferraro</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
