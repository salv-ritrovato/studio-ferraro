import { beforeAfterData } from '../../data/beforeAfterData'
import SectionTitle from '../ui/SectionTitle'
import BeforeAfterSlider from '../ui/BeforeAfterSlider'

function BeforeAfter() {
  return (
    <section id="risultati" className="bg-white py-20 lg:py-28">
      <div className="container">
        <div className="reveal">
          <SectionTitle
            eyebrow="Risultati"
            title="Prima e dopo"
            subtitle="Trascina il cursore sulle immagini per scoprire alcune delle trasformazioni ottenute nel nostro studio."
          />
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {beforeAfterData.map((item, index) => (
            <div
              key={item.id}
              className="reveal"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <BeforeAfterSlider
                before={item.before}
                after={item.after}
                alt={item.treatment}
              />
              <p className="mt-4 text-center text-sm font-semibold text-ink">
                {item.treatment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter
