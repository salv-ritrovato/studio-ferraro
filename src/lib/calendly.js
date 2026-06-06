// Caricamento on-demand degli asset Calendly (script + CSS).
// Gli asset vengono iniettati solo al primo utilizzo per non rallentare il load iniziale.
const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js'
const CSS_HREF = 'https://assets.calendly.com/assets/external/widget.css'

// Lingua forzata per gli embed Calendly.
// NB: la lingua deve essere abilitata anche nelle impostazioni dell'account Calendly.
export const CALENDLY_LOCALE = 'it'

// Aggiunge il parametro locale all'URL (rinforzo oltre all'opzione embed_locale).
export function withLocale(url) {
  const separator = url.includes('?') ? '&' : '?'
  return `${url}${separator}locale=${CALENDLY_LOCALE}`
}

let loadingPromise = null

export function loadCalendlyAssets() {
  if (typeof window === 'undefined') return Promise.resolve()
  if (window.Calendly) return Promise.resolve()
  if (loadingPromise) return loadingPromise

  loadingPromise = new Promise((resolve, reject) => {
    if (!document.querySelector(`link[href="${CSS_HREF}"]`)) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = CSS_HREF
      document.head.appendChild(link)
    }

    const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`)
    if (existing) {
      existing.addEventListener('load', () => resolve())
      if (window.Calendly) resolve()
      return
    }

    const script = document.createElement('script')
    script.src = SCRIPT_SRC
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Impossibile caricare Calendly'))
    document.body.appendChild(script)
  })

  return loadingPromise
}

export function openCalendlyPopup(url) {
  loadCalendlyAssets()
    .then(() => {
      if (window.Calendly) {
        window.Calendly.initPopupWidget({
          url: withLocale(url),
          embed_locale: CALENDLY_LOCALE,
        })
      }
    })
    .catch(() => {
      // Fallback: se Calendly non è raggiungibile, apri il link in una nuova scheda.
      window.open(withLocale(url), '_blank', 'noopener,noreferrer')
    })
}
