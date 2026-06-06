import { useEffect, useState } from 'react'
import { testimonialsData } from '../../data/testimonialsData'
import SectionTitle from '../ui/SectionTitle'
import TestimonialCard from '../ui/TestimonialCard'

// Numero di card visibili in base alla larghezza dello schermo.
function usePerView() {
  const [perView, setPerView] = useState(1)

  useEffect(() => {
    const compute = () => {
      const width = window.innerWidth
      setPerView(width >= 1024 ? 3 : width >= 768 ? 2 : 1)
    }
    compute()
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [])

  return perView
}

function Testimonials() {
  const perView = usePerView()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const maxIndex = Math.max(0, testimonialsData.length - perView)

  // Mantiene l'indice valido quando cambia il numero di card visibili.
  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex))
  }, [maxIndex])

  // Autoplay (in pausa all'hover e con riduzione del movimento).
  useEffect(() => {
    if (paused || maxIndex === 0) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1))
    }, 6000)
    return () => clearInterval(id)
  }, [paused, maxIndex])

  // Navigazione circolare: dall'inizio torna alla fine e viceversa.
  const goPrev = () => setIndex((current) => (current <= 0 ? maxIndex : current - 1))
  const goNext = () => setIndex((current) => (current >= maxIndex ? 0 : current + 1))

  return (
    <section id="testimonials" className="bg-gradient-to-b from-background to-white py-20 lg:py-28">
      <div className="container">
        <div className="reveal">
          <SectionTitle
            eyebrow="Recensioni"
            title="La voce dei nostri pazienti"
            subtitle="La fiducia di chi si affida a noi è la nostra soddisfazione più grande. Ecco cosa raccontano."
          />
        </div>

        <div
          className="reveal mt-14"
          role="region"
          aria-roledescription="carosello"
          aria-label="Recensioni dei pazienti"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
            >
              {testimonialsData.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="h-full shrink-0 px-3"
                  style={{ flexBasis: `${100 / perView}%`, maxWidth: `${100 / perView}%` }}
                >
                  <TestimonialCard
                    name={testimonial.name}
                    role={testimonial.role}
                    review={testimonial.review}
                    rating={testimonial.rating}
                  />
                </div>
              ))}
            </div>
          </div>

          {maxIndex > 0 && (
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Recensione precedente"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-ink transition-colors hover:border-primary hover:text-primary"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 5l-7 7 7 7" />
                </svg>
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, dot) => (
                  <button
                    key={dot}
                    type="button"
                    onClick={() => setIndex(dot)}
                    aria-label={`Vai al gruppo ${dot + 1}`}
                    aria-current={index === dot}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === dot ? 'w-6 bg-primary' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={goNext}
                aria-label="Recensione successiva"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-ink transition-colors hover:border-primary hover:text-primary"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
