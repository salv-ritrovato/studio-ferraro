import SectionTitle from '../ui/SectionTitle'

const HIGHLIGHTS = [
  {
    title: '10+ anni di esperienza',
    description:
      'Un team affiatato che da oltre un decennio si prende cura del sorriso dei propri pazienti con competenza e dedizione.',
    icon: 'M12 2l2.4 7.4H22l-6 4.6 2.3 7.4-6.3-4.6L5.7 21 8 14 2 9.4h7.6L12 2z',
  },
  {
    title: 'Tecnologie moderne',
    description:
      'Diagnostica digitale, radiografie a basse emissioni e strumentazione di ultima generazione per cure precise e indolori.',
    icon: 'M12 2a7 7 0 00-7 7c0 2.4 1.2 4 2.5 5.2.7.7 1 1.1 1.2 2.1.1.6.6 1 1.1 1h4.4c.5 0 1-.4 1.1-1 .2-1 .5-1.4 1.2-2.1C17.8 13 19 11.4 19 9a7 7 0 00-7-7zM9 21h6M10 23h4',
  },
  {
    title: 'Approccio personalizzato',
    description:
      'Ogni piano di cura è costruito intorno alle tue esigenze, con ascolto, trasparenza e attenzione al tuo comfort.',
    icon: 'M12 21s-7-4.5-9.5-9C1 8.5 2.5 5 6 5c2 0 3.2 1.3 4 2.3C10.8 6.3 12 5 14 5c3.5 0 5 3.5 3.5 7-2.5 4.5-9.5 9-9.5 9z',
  },
]

function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <div className="reveal relative order-2 lg:order-1">
          <div
            className="pointer-events-none absolute -left-8 -top-8 h-48 w-48 rounded-full bg-mint/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="organic-alt relative overflow-hidden shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1100&q=80"
              alt="Dentista sorridente che accoglie un paziente nello studio"
              loading="lazy"
              className="h-[440px] w-full object-cover"
            />
          </div>
          <div className="absolute -right-4 bottom-8 hidden rounded-2xl bg-primary px-6 py-5 text-white shadow-soft sm:block">
            <p className="text-3xl font-bold">97%</p>
            <p className="text-sm text-emerald-100">pazienti ci consigliano</p>
          </div>
        </div>

        <div className="reveal order-1 lg:order-2">
          <SectionTitle
            eyebrow="Chi siamo"
            title="Uno studio dove sentirsi davvero a proprio agio"
            subtitle="Lo Studio Ferraro nasce dalla passione per un’odontoiatria moderna, etica e centrata sulla persona. Crediamo che prendersi cura del sorriso significhi prima di tutto prendersi cura delle persone."
            align="left"
          />

          <ul className="mt-8 space-y-5">
            {HIGHLIGHTS.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={item.icon} />
                  </svg>
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
