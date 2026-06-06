# Studio Dentistico Ferraro

Sito vetrina professionale per uno studio dentistico moderno, realizzato con **React (Vite)** e **Tailwind CSS**, senza librerie UI esterne.

## Stack

- React 18 + Vite 5
- Tailwind CSS 3 (+ PostCSS, Autoprefixer)
- CSS plain per animazioni e stili globali
- Design responsive mobile-first

## Avvio rapido

```bash
npm install
npm run dev
```

Apri l'indirizzo mostrato in console (di norma `http://localhost:5173`).

## Script

| Comando           | Descrizione                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Avvia il server di sviluppo          |
| `npm run build`   | Crea la build di produzione (`dist`) |
| `npm run preview` | Anteprima della build di produzione  |

## Struttura del progetto

```
src/
├── components/
│   ├── layout/      Navbar, Footer, BackToTop
│   ├── sections/    Hero, About, Services, Team, Testimonials, FAQ, Contact, CTA
│   └── ui/          Button, SectionTitle, ServiceCard, TestimonialCard, FAQItem,
│                    CalendlyButton, CalendlyEmbed
├── data/            servicesData, testimonialsData, faqData, siteConfig
├── lib/             calendly (loader asset on-demand)
├── App.jsx
└── main.jsx
```

## Personalizzazione

- **Contenuti**: modifica i file in `src/data/` (servizi, recensioni, FAQ).
- **Palette colori**: definita in `tailwind.config.js` (`primary`, `secondary`, `accent`, `background`, `ink`).
- **Immagini**: i placeholder usano Unsplash; sostituiscili con le foto reali dello studio.
- **Recapiti**: telefono, email e indirizzo sono centralizzati in `src/data/siteConfig.js`.

## Prenotazione appuntamenti (Calendly)

La gestione degli appuntamenti è integrata tramite **Calendly**:

- **Popup** sui pulsanti "Prenota una visita" (Navbar, Hero) e "Prenota online" (sezione CTA).
- **Widget inline** nella sezione Contatti (calendario direttamente in pagina).

Gli asset Calendly vengono caricati **on-demand** (solo al primo utilizzo), così la
prima visualizzazione della pagina resta veloce.

### Configurazione

1. Crea un account su [calendly.com](https://calendly.com) e configura un tipo di evento
   (es. "Visita dentistica").
2. Copia l'URL pubblico dell'evento (es. `https://calendly.com/nome-studio/visita-dentistica`).
3. Incollalo in `src/data/siteConfig.js`:

```js
export const CALENDLY_URL = 'https://calendly.com/nome-studio/visita-dentistica'
```

Tutti i pulsanti e il widget inline useranno automaticamente questo link.

## Caratteristiche

- Navbar sticky con menu hamburger mobile
- Smooth scrolling tra le sezioni
- Animazioni fade-in on scroll (IntersectionObserver)
- Pulsante "Torna su"
- Form di contatto con validazione frontend
- Accessibilità di base (ARIA, focus visibile, `prefers-reduced-motion`)
