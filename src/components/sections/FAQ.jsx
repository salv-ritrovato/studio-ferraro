import { faqData } from '../../data/faqData'
import SectionTitle from '../ui/SectionTitle'
import FAQItem from '../ui/FAQItem'

function FAQ() {
  return (
    <section id="faq" className="bg-gradient-to-b from-white to-background py-20 lg:py-28">
      <div className="container">
        <div className="reveal">
          <SectionTitle
            eyebrow="FAQ"
            title="Domande frequenti"
            subtitle="Le risposte ai dubbi più comuni. Non trovi quello che cerchi? Contattaci, saremo felici di aiutarti."
          />
        </div>

        <div className="reveal mx-auto mt-12 flex max-w-3xl flex-col gap-4">
          {faqData.map((faq) => (
            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
