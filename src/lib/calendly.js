// Caricamento on-demand degli asset Calendly (script + CSS).
// Gli asset vengono iniettati solo al primo utilizzo per non rallentare il load iniziale.
const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js'
const CSS_HREF = 'https://assets.calendly.com/assets/external/widget.css'

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
        window.Calendly.initPopupWidget({ url })
      }
    })
    .catch(() => {
      // Fallback: se Calendly non è raggiungibile, apri il link in una nuova scheda.
      window.open(url, '_blank', 'noopener,noreferrer')
    })
}
