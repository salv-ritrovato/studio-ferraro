import { useEffect, useState } from 'react'
import CalendlyButton from '../ui/CalendlyButton'
import { CONTACT } from '../../data/siteConfig'

const NAV_LINKS = [
  { label: 'Chi siamo', href: '#about' },
  { label: 'Servizi', href: '#services' },
  { label: 'Risultati', href: '#risultati' },
  { label: 'Team', href: '#team' },
  { label: 'Recensioni', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contatti', href: '#contact' },
]

function Logo() {
  return (
    <a href="#hero" className="flex items-center gap-2" aria-label="Studio Dentistico Ferraro - Home">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
          <path d="M16.5 3.5c-1.7 0-2.9.8-4 1.6-.9.6-1.6 1.1-2.5 1.1S8.4 5.7 7.5 5.1c-1.1-.8-2.3-1.6-4-1.6C1.8 3.5.1 5.5.1 9c0 4.2 2.2 9.5 4.6 9.5 1.3 0 2-.7 2.8-1.4.9-.8 1.8-1.6 3.1-1.6s2.2.8 3.1 1.6c.8.7 1.5 1.4 2.8 1.4 2.4 0 4.6-5.3 4.6-9.5 0-3.5-1.7-5.5-3.5-5.5Z" transform="translate(1.4 1.5)" />
        </svg>
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-ink">
        Studio <span className="text-primary">Ferraro</span>
      </span>
    </a>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12)
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll-spy: evidenzia il link della sezione attualmente in vista.
  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.href.slice(1)),
    ).filter(Boolean)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-100 bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <span
        className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left bg-gradient-to-r from-primary via-accent to-mint transition-opacity duration-300"
        style={{ transform: `scaleX(${progress / 100})`, opacity: scrolled ? 1 : 0 }}
        aria-hidden="true"
      />

      <div
        className={`overflow-hidden bg-primary text-white transition-all duration-300 ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
        }`}
      >
        <div className="container flex items-center justify-center gap-2 py-2 text-center text-xs sm:text-sm">
          <svg viewBox="0 0 24 24" className="h-4 w-4 flex-shrink-0" fill="currentColor" aria-hidden="true">
            <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.2 2.2z" />
          </svg>
          <span>
            Emergenze odontoiatriche?{' '}
            <a href={CONTACT.phoneHref} className="font-semibold underline underline-offset-2">
              Chiama {CONTACT.phone}
            </a>
          </span>
        </div>
      </div>

      <nav
        className="container flex h-20 items-center justify-between py-4"
        aria-label="Navigazione principale"
      >
        <Logo />

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.slice(1)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-slate-600'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-primary transition-all duration-300 ${
                      isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                    }`}
                    aria-hidden="true"
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden lg:block">
          <CalendlyButton variant="primary">Prenota una visita</CalendlyButton>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-ink lg:hidden"
          aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-slate-100 bg-white transition-[max-height] duration-300 ease-in-out lg:hidden ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="container flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.slice(1)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={isActive ? 'page' : undefined}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-primary/5 hover:text-primary ${
                    isActive ? 'bg-primary/5 text-primary' : 'text-slate-700'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
