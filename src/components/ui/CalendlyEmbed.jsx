import { useEffect, useRef } from 'react'
import { CALENDLY_URL } from '../../data/siteConfig'
import { loadCalendlyAssets, withLocale, CALENDLY_LOCALE } from '../../lib/calendly'

// Widget Calendly inline: mostra il calendario direttamente nella pagina.
function CalendlyEmbed({ url = CALENDLY_URL, className = '' }) {
  const containerRef = useRef(null)

  useEffect(() => {
    let cancelled = false

    loadCalendlyAssets().then(() => {
      const container = containerRef.current
      if (cancelled || !container || !window.Calendly) return
      // Evita una doppia inizializzazione (es. StrictMode in sviluppo).
      if (container.childElementCount > 0) return
      window.Calendly.initInlineWidget({
        url: withLocale(url),
        parentElement: container,
        embed_locale: CALENDLY_LOCALE,
      })
    })

    return () => {
      cancelled = true
    }
  }, [url])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ minWidth: '320px', height: '660px' }}
      role="region"
      aria-label="Calendario per la prenotazione degli appuntamenti"
    />
  )
}

export default CalendlyEmbed
