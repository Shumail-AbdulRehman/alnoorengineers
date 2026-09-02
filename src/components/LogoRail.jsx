import { clients } from '../data/content'

// Client logos seated on equipment-label plates — off-white chips so the brand
// colors read correctly against the dark rack background. Logos sourced from
// each operator's own site; hover lifts the plate.
const LOGO_FILES = {
  Nokia: '/images/logos/nokia.svg',
  Jazz: '/images/logos/jazz.png',
  'Telenor Pakistan': '/images/logos/telenor.svg',
  Zong: '/images/logos/zong.png',
  Ufone: '/images/logos/ufone.png',
  PTCL: '/images/logos/ptcl.svg',
}

export default function LogoRail() {
  return (
    <section aria-label="Clients we serve" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="tnum font-mono text-xs text-dim">Trusted by operators and vendors</p>
        <ul className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
          {clients.map((client) => {
            const src = LOGO_FILES[client]
            if (!src) return null
            return (
              <li key={client}>
                <div
                  title={client}
                  className="flex h-12 items-center border border-line bg-[#f4f2ea] px-4 transition-all duration-150 hover:-translate-y-0.5 hover:border-amber"
                >
                  <img src={src} alt={`${client} logo`} className="h-6 w-auto object-contain" loading="lazy" />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
