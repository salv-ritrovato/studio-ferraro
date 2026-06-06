import SectionTitle from '../ui/SectionTitle'

// Membri del team. Foto locali in public/assets/img.
const TEAM = [
  {
    id: 'marco-rossi',
    name: 'Dr. Alberto Ferraro',
    role: 'Direttore sanitario',
    photo: '/assets/img/Old_dentist.png',
  },
  {
    id: 'laura-bianchi',
    name: 'Dr.ssa Roberta Della Spezia',
    role: 'Ortodonzista',
    photo: '/assets/img/Female_dentist.png',
  },
  {
    id: 'luca-verdi',
    name: 'Dr. Riccardo Prosi',
    role: 'Implantologo',
    photo: '/assets/img/Male_dentist.png',
  },
]

const SOCIAL_ICONS = [
  { label: 'Email', path: 'M2 5h20v14H2V5zm2 2v.5l8 5 8-5V7l-8 5-8-5z' },
]

function Team() {
  return (
    <section id="team" className="bg-gradient-to-b from-white to-background py-20 lg:py-28">
      <div className="container">
        <div className="reveal">
          <SectionTitle
            eyebrow="Il nostro team"
            title="Professionisti che mettono al centro te"
            subtitle="Un gruppo di specialisti qualificati, in costante aggiornamento, uniti dalla passione per la tua salute orale."
          />
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member, index) => (
            <div
              key={member.id}
              className="reveal h-full"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
            <article className="group h-full overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-soft">
              <div className="relative overflow-hidden">
                <img
                  src={member.photo}
                  alt={`Ritratto di ${member.name}, ${member.role}`}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 bg-gradient-to-t from-ink/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {SOCIAL_ICONS.map((social) => (
                    <a
                      key={social.label}
                      href="#contact"
                      aria-label={`${social.label} di ${member.name}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-secondary transition-colors hover:bg-primary hover:text-white"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                        <path d={social.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-ink">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
              </div>
            </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
