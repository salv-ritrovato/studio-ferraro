import { useId, useRef, useState } from 'react'

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef(null)
  const id = useId()

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition-shadow duration-300 hover:shadow-soft">
      <h3>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${id}`}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="text-base font-semibold text-ink sm:text-lg">
            {question}
          </span>
          <span
            className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 ${
              isOpen ? 'rotate-45' : ''
            }`}
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={`faq-panel-${id}`}
        ref={contentRef}
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px' }}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
      >
        <p className="px-6 pb-5 text-sm leading-relaxed text-slate-500">{answer}</p>
      </div>
    </div>
  )
}

export default FAQItem
