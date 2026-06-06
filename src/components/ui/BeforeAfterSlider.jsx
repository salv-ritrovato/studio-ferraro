import { useEffect, useRef, useState } from 'react'

function BeforeAfterSlider({
  before,
  after,
  alt = '',
  beforeLabel = 'Prima',
  afterLabel = 'Dopo',
}) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef(null)
  const draggingRef = useRef(false)

  const updateFromClientX = (clientX) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, pct)))
  }

  useEffect(() => {
    const handleMove = (event) => {
      if (draggingRef.current) updateFromClientX(event.clientX)
    }
    const stop = () => {
      draggingRef.current = false
    }
    window.addEventListener('pointermove', handleMove)
    window.addEventListener('pointerup', stop)
    return () => {
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerup', stop)
    }
  }, [])

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      setPos((prev) => Math.max(0, prev - 4))
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      setPos((prev) => Math.min(100, prev + 4))
    }
  }

  return (
    <div
      ref={containerRef}
      style={{ touchAction: 'none' }}
      onPointerDown={(event) => {
        event.preventDefault()
        draggingRef.current = true
        updateFromClientX(event.clientX)
      }}
      className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl shadow-card"
    >
      <img
        src={after}
        alt={`${alt} — dopo`}
        draggable="false"
        loading="lazy"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <img
        src={before}
        alt={`${alt} — prima`}
        draggable="false"
        loading="lazy"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold text-white">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-white">
        {afterLabel}
      </span>

      <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -ml-px w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.35)]" />
        <button
          type="button"
          role="slider"
          aria-label={`Confronto prima e dopo${alt ? `: ${alt}` : ''}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={handleKeyDown}
          className="absolute top-1/2 -ml-5 -mt-5 flex h-10 w-10 cursor-ew-resize items-center justify-center rounded-full bg-white text-primary shadow-soft transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default BeforeAfterSlider