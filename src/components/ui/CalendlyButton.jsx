import Button from './Button'
import { CALENDLY_URL } from '../../data/siteConfig'
import { openCalendlyPopup } from '../../lib/calendly'

// Pulsante che apre la prenotazione Calendly in un popup overlay.
function CalendlyButton({
  variant = 'primary',
  children = 'Prenota una visita',
  className = '',
  url = CALENDLY_URL,
  onClick,
}) {
  const handleClick = () => {
    if (onClick) onClick()
    openCalendlyPopup(url)
  }

  return (
    <Button
      variant={variant}
      onClick={handleClick}
      className={className}
      aria-haspopup="dialog"
    >
      {children}
    </Button>
  )
}

export default CalendlyButton
