import { useState } from 'react'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import CalendlyEmbed from '../ui/CalendlyEmbed'

const CONTACT_INFO = [
  {
    label: 'Telefono',
    value: '+39 02 1234 5678',
    href: 'tel:+390212345678',
    icon: 'M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.2 2.2z',
  },
  {
    label: 'Email',
    value: 'info@studioferraro.it',
    href: 'mailto:info@studioferraro.it',
    icon: 'M2 5h20v14H2V5zm2 2v.5l8 5 8-5V7l-8 5-8-5z',
  },
  {
    label: 'Indirizzo',
    value: 'Via Roma 42, 20121 Milano',
    href: 'https://maps.google.com/?q=Via+Roma+42+Milano',
    icon: 'M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z',
  },
]

const INITIAL_FORM = { name: '', email: '', phone: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) {
    errors.name = 'Inserisci il tuo nome.'
  }
  if (!values.email.trim()) {
    errors.email = 'Inserisci la tua email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Inserisci un indirizzo email valido.'
  }
  if (values.phone.trim() && !/^[+\d][\d\s().-]{6,}$/.test(values.phone)) {
    errors.phone = 'Inserisci un numero di telefono valido.'
  }
  if (!values.message.trim()) {
    errors.message = 'Scrivi un messaggio.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Il messaggio deve contenere almeno 10 caratteri.'
  }
  return errors
}

function Contact() {
  const [values, setValues] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true)
      setValues(INITIAL_FORM)
    }
  }

  const fieldClass = (field) =>
    `w-full rounded-xl border bg-background px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 ${
      errors[field] ? 'border-red-400' : 'border-slate-200'
    }`

  return (
    <section id="contact" className="bg-gradient-to-b from-background to-white py-20 lg:py-28">
      <div className="container">
        <div className="reveal">
          <SectionTitle
            eyebrow="Contatti"
            title="Parliamo del tuo sorriso"
            subtitle="Compila il form o usa i nostri recapiti: ti risponderemo il prima possibile per fissare il tuo appuntamento."
          />
        </div>

        <div className="reveal mt-14 grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            {CONTACT_INFO.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-background p-5 transition-all hover:border-primary/30 hover:shadow-card"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                    <path d={info.icon} />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {info.label}
                  </span>
                  <span className="block text-sm font-medium text-ink">{info.value}</span>
                </span>
              </a>
            ))}

            <div className="mt-2 overflow-hidden rounded-2xl border border-slate-100">
              <div className="flex items-center gap-3 bg-primary/5 px-5 py-4">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" strokeLinecap="round" />
                </svg>
                <p className="text-sm font-medium text-ink">Lun–Ven 9:00–19:00 · Sab 9:00–13:00</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-slate-100 bg-background p-6 shadow-card sm:p-8">
            {submitted && (
              <div
                role="status"
                className="mb-6 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Grazie! La tua richiesta è stata inviata. Ti ricontatteremo a breve.
              </div>
            )}

            <div className="grid gap-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                  Nome <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Mario Rossi"
                  className={fieldClass('name')}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'error-name' : undefined}
                />
                {errors.name && (
                  <p id="error-name" className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="mario@email.it"
                    className={fieldClass('email')}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'error-email' : undefined}
                  />
                  {errors.email && (
                    <p id="error-email" className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
                    Telefono
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={handleChange}
                    placeholder="+39 333 1234567"
                    className={fieldClass('phone')}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'error-phone' : undefined}
                  />
                  {errors.phone && (
                    <p id="error-phone" className="mt-1.5 text-xs text-red-500">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                  Messaggio <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={values.message}
                  onChange={handleChange}
                  placeholder="Vorrei prenotare una prima visita..."
                  className={`${fieldClass('message')} resize-none`}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'error-message' : undefined}
                />
                {errors.message && (
                  <p id="error-message" className="mt-1.5 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Invia richiesta
              </Button>
            </div>
          </form>
        </div>

        <div id="prenota" className="reveal mt-16">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary">
              Prenota online
            </span>
            <h3 className="text-2xl font-bold text-ink sm:text-3xl">
              Scegli data e orario in tempo reale
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">
              Seleziona lo slot che preferisci dal nostro calendario: riceverai
              conferma e promemoria automatici via email.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card">
            <CalendlyEmbed />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
