import { clients } from '../data/content'

// Client logos on transparent chips — the brand marks sit directly on the
// page background in both themes. Logos sourced from each operator's own
// site. PTCL's mark is dark green on transparent, so dark mode lifts it
// with a brightness filter (the .logo-lift rule in index.css).
const LOGO_FILES = {
  // Nokia: '/images/logos/nokia.svg',
  Jazz: '/images/logos/jazz.png',
  // 'Telenor Pakistan': '/images/logos/telenor.svg',
  Zong: '/images/logos/zong.png',
  Ufone: '/images/logos/ufone.png',
  PTCL: '/images/logos/ptcl.svg',
}

const DARK_MARKS = new Set(['PTCL'])

export default function LogoRail() {
  return (
    <section aria-label="Clients we serve" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-dim">Trusted by operators and vendors</p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {clients.map((client) => {
            const src = LOGO_FILES[client]
            if (!src) return null
            return (
              <li key={client} className={DARK_MARKS.has(client) ? 'logo-lift' : undefined}>
                <div
                  title={client}
                  className="flex h-16 items-center px-4 transition-all duration-150 hover:-translate-y-0.5"
                >
                  <img src={src} alt={`${client} logo`} className="h-9 w-auto object-contain" loading="lazy" />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
