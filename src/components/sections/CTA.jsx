import { useState } from 'react'
import Button from '../ui/Button'
import CalendlyButton from '../ui/CalendlyButton'
import { CONTACT } from '../../data/siteConfig'

function CTA() {
  const [copied, setCopied] = useState(false)

  // Su mobile lascia partire la chiamata (tel:); su desktop, dove tel: spesso
  // non fa nulla, copia il numero negli appunti con un feedback visivo.
  const handleCall = (event) => {
    const isMobile =
      window.matchMedia('(max-width: 1023px)').matches ||
      /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)

    if (isMobile) return

    event.preventDefault()
    const number = CONTACT.phone
    const showFeedback = () => {
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2500)
    }

    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(number).then(showFeedback, showFeedback)
    } else {
      showFeedback()
    }
  }

  return (
    <section className="py-12 lg:py-20">
      <div className="container">
        <div className="reveal relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-secondary px-8 py-14 text-center shadow-soft sm:px-16 lg:py-20">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-mint/30 blur-2xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold leading-[1.1] text-white sm:text-4xl lg:text-5xl">
              Prenota oggi la tua prima visita.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-emerald-50 sm:text-lg">
              La prima visita di valutazione è gratuita e senza impegno. Inizia
              oggi il percorso verso il sorriso che hai sempre desiderato.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CalendlyButton variant="secondary">Prenota online</CalendlyButton>
              <Button
                href={CONTACT.phoneHref}
                variant="outline"
                onClick={handleCall}
                aria-live="polite"
              >
                {copied ? 'Numero copiato negli appunti' : `Chiama: ${CONTACT.phone.replace('+39 ', '')}`}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
