import { useEffect, useRef, useState } from 'react'
import Button from '../ui/Button'
import CalendlyButton from '../ui/CalendlyButton'

const STATS = [
  { id: 'patients', prefix: '', value: 5, decimals: 0, label: "Postazioni all'avanguardia" },
  { id: 'years', value: 10, suffix: '+', label: 'Anni di esperienza' },
  { id: 'rating', value: 4.7, decimals: 1, suffix: '/5', label: 'Valutazione media' },
]

// Contatore animato che parte quando entra nel viewport.
function Counter({ value, decimals = 0, prefix = '', suffix = '', duration = 1600 }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setDisplay(value)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const tick = (now) => {
              const progress = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setDisplay(value * eased)
              if (progress < 1) requestAnimationFrame(tick)
              else setDisplay(value)
            }
            requestAnimationFrame(tick)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [value, duration])

  const formatted = display.toLocaleString('it-IT', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-background to-background pt-36 pb-20 lg:pt-44 lg:pb-28"
    >
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-mint/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <div className="reveal max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-secondary shadow-card">
            <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
            Siamo pronti ad accoglierti
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Il tuo sorriso
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text pb-2 leading-[1.15] text-transparent">
              merita il meglio.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-500">
            Allo Studio Dentistico Ferraro uniamo tecnologie all’avanguardia e
            un approccio umano per offrirti cure dentali serene, sicure e su
            misura per te.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CalendlyButton variant="primary">Prenota una visita</CalendlyButton>
            <Button href="#services" variant="secondary">
              Scopri i servizi
            </Button>
          </div>

          <dl className="mt-10 flex flex-wrap gap-8">
            {STATS.map((stat) => (
              <div key={stat.id}>
                <dt className="font-display text-3xl font-extrabold tracking-tight text-primary">
                  <Counter
                    value={stat.value}
                    decimals={stat.decimals}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </dt>
                <dd className="text-sm text-slate-500">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal relative">
          <div className="organic relative overflow-hidden shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
              alt="Interno moderno e luminoso dello Studio Dentistico Ferraro"
              loading="eager"
              className="h-[420px] w-full object-cover lg:h-[520px]"
            />
          </div>

          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-soft animate-float">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-bold text-ink">+157 pazienti</p>
              <p className="text-xs text-slate-500">soddisfatti del nostro lavoro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
