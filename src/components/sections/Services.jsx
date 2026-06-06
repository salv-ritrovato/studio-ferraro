import { servicesData } from '../../data/servicesData'
import SectionTitle from '../ui/SectionTitle'
import ServiceCard from '../ui/ServiceCard'

function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-background to-white py-20 lg:py-28">
      <div className="container">
        <div className="reveal">
          <SectionTitle
            eyebrow="I nostri servizi"
            title="Cure complete per ogni esigenza"
            subtitle="Dalla prevenzione ai trattamenti più avanzati: un’unica struttura per prenderci cura del tuo sorriso a 360°."
          />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="reveal h-full"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
