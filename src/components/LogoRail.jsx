import { clients } from '../data/content'

// Client logos on transparent chips — the brand marks sit directly on the
// page background in both themes. Logos sourced from each operator's own
// site. PTCL's mark is dark green on transparent, so dark mode lifts it
// with a brightness filter (the .logo-lift rule in index.css). Jazz's mark
// is a square badge, so it gets a larger slot to match the wordmarks.
const LOGO_FILES = {
  // Nokia: '/images/logos/nokia.svg',
  Jazz: '/images/logos/jazz.png',
  // 'Telenor Pakistan': '/images/logos/telenor.svg',
  Zong: '/images/logos/zong.png',
  Ufone: '/images/logos/ufone.png',
  PTCL: '/images/logos/ptcl.svg',
}

const DARK_MARKS = new Set(['PTCL'])

const LOGO_SIZE = {
  Jazz: 'h-11 sm:h-12',
}

export default function LogoRail() {
  return (
    <section aria-label="Clients we serve" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-dim">Trusted by operators and vendors</p>
        <ul className="mx-auto mt-8 grid max-w-xs grid-cols-2 place-items-center gap-x-8 gap-y-6 sm:max-w-none sm:flex sm:flex-wrap sm:justify-center sm:gap-x-10">
          {clients.map((client) => {
            const src = LOGO_FILES[client]
            if (!src) return null
            return (
              <li key={client} className={DARK_MARKS.has(client) ? 'logo-lift' : undefined}>
                <div
                  title={client}
                  className="flex items-center transition-transform duration-150 hover:-translate-y-0.5"
                >
                  <img
                    src={src}
                    alt={`${client} logo`}
                    className={`w-auto object-contain ${LOGO_SIZE[client] ?? 'h-8 sm:h-9'}`}
                    loading="lazy"
                  />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
