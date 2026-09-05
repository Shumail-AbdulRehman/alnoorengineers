import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import LogoRail from '../components/LogoRail'
import StatsStrip from '../components/StatsStrip'
import LeadershipBadge from '../components/LeadershipBadge'
import CTABand from '../components/CTABand'
import Reveal from '../components/Reveal'
import { visionMission, leadership, supplyServices, supplyCategories } from '../data/content'

// One product per category for the home-page catalog preview.
const FEATURED_SUPPLY = supplyCategories.map((c) => ({ category: c.title, item: c.items[0] }))

// Lab photography (Unsplash, free license) — see public/images/lab/.
const LAB_SHOTS = [
  {
    src: '/images/lab/lab-bench.webp',
    alt: 'Engineers working at test benches in the repair lab',
    caption: 'The bench: fault isolation and rework',
  },
  {
    src: '/images/lab/lab-pcb.webp',
    alt: 'Macro shot of a circuit board under repair',
    caption: 'Component-level rework',
  },
  {
    src: '/images/lab/lab-cabling.webp',
    alt: 'Numbered patch panel with network cabling',
    caption: 'Field infrastructure we keep online',
  },
]

// Short commitments under the Mission / Vision paragraphs — distilled from
// the company's stated objectives in content.js.
const MISSION_POINTS = [
  "Network operations managed within the operator's budget",
  'OEM quality of service on every engagement',
  'Standing commitment to repair and supply excellence',
]

const VISION_POINTS = [
  'Technical depth operators can depend on',
  'Reliability across GSM, PSTN and enterprise',
  'An ethically run operation, end to end',
]

export default function Home() {
  return (
    <>
      <Hero />
      <LogoRail />

      {/* Mission / Vision — alternating editorial rows with photo collages */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl space-y-20 px-4 py-20 sm:px-6 md:py-24 md:space-y-24">
          {/* Mission — collage left, content right */}
          <Reveal>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="relative">
                <img
                  src="/images/lab/lab-field.webp"
                  alt="Field engineer servicing a telecom cabinet"
                  loading="lazy"
                  className="aspect-[4/3] w-full border border-line object-cover"
                />
                <img
                  src="/images/lab/lab-kit.webp"
                  alt="Test instruments and tools laid out on the bench"
                  loading="lazy"
                  className="absolute -bottom-8 -right-4 hidden w-2/5 border-4 border-rack object-cover shadow-2xl sm:block md:-right-8"
                />
              </div>
              <div>
                <p className="text-4xl sm:text-5xl  font-display font-bold uppercase text-amber-strong">Our Mission</p>
                <h2 className="mt-3 font-display text-xl font-bold tracking-tight sm:text-2xl">
                  Operator-grade service, inside the operator's budget
                </h2>
                <p className="mt-4 max-w-[62ch] leading-relaxed text-dim">{visionMission.mission}</p>
                <ul className="mt-6 space-y-3">
                  {MISSION_POINTS.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm font-medium text-label">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-amber)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
                        <circle cx="12" cy="12" r="9" className="opacity-40" />
                        <path d="m8.5 12.5 2.5 2.5 5-5.5" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Vision — content left, collage right */}
          <Reveal>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="lg:order-2">
                <div className="relative">
                  <img
                    src="/images/lab/lab-macro.webp"
                    alt="Macro detail of a telecom circuit board"
                    loading="lazy"
                    className="aspect-[4/3] w-full border border-line object-cover"
                  />
                  <img
                    src="/images/lab/lab-board-wide.webp"
                    alt="Boards under inspection in the repair lab"
                    loading="lazy"
                    className="absolute -bottom-8 -left-4 hidden w-2/5 border-4 border-rack object-cover shadow-2xl sm:block md:-left-8"
                  />
                </div>
              </div>
              <div className="lg:order-1">
                <p className="text-4xl sm:text-5xl font-display font-bold uppercase  text-amber-strong">Our Vision</p>
                <h2 className="mt-3 font-display text-xl font-bold tracking-tight sm:text-2xl">
                  The telecom services provider Pakistan's operators rely on
                </h2>
                <p className="mt-4 max-w-[62ch] leading-relaxed text-dim">{visionMission.vision}</p>
                <ul className="mt-6 space-y-3">
                  {VISION_POINTS.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm font-medium text-label">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-amber)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
                        <circle cx="12" cy="12" r="9" className="opacity-40" />
                        <path d="m8.5 12.5 2.5 2.5 5-5.5" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Supply preview — ecommerce-style: one product per category, then a
          catalog button that lands on the Services supply section */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                {/* <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-strong">Supply catalog</p> */}
                <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  Stocked, tested, ready to ship
                </h2>
                <p className="mt-3 max-w-[62ch] text-dim">
                  New and refurbished equipment and consumables: stocked, sourced and delivered
                  to site with proper part traceability.
                </p>
              </div>
              {/* <span className="tnum font-mono text-xs font-semibold text-amber-strong">
                {supplyServices.length} LINES STOCKED
              </span> */}
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {FEATURED_SUPPLY.map(({ category, item }, i) => (
              <Reveal key={item.name} delay={i * 90}>
                <Link
                  to="/services#supply"
                  className="group flex h-full flex-col border border-line bg-panel transition-all duration-300 hover:-translate-y-1 hover:border-amber/50"
                >
                  <div className="aspect-square overflow-hidden bg-white">
                    <img
                      src={item.img}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col border-t border-line p-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-amber-strong">{category}</span>
                    <span className="mt-1.5 text-sm font-bold leading-snug text-label">{item.name}</span>
                    {item.tag && <span className="mt-1 text-xs text-dim">{item.tag}</span>}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <Link
              to="/services#supply"
              className="inline-flex items-center gap-2.5 bg-amber px-6 py-3 font-display text-sm font-semibold text-rack transition-all duration-200 hover:bg-[#f0b45a] active:scale-[0.98]"
            >
              Browse the full catalog
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Inside the lab — photography band */}
      {/* <section className="border-b border-line bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-strong">Inside the lab</p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Where the work happens
            </h2>
            <p className="mt-3 max-w-[62ch] text-dim">
              Bench work, component-level rework and the field infrastructure our repairs go back into.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LAB_SHOTS.map((shot, i) => (
              <Reveal key={shot.src} delay={i * 120}>
                <figure className="group overflow-hidden border border-line bg-panel2">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                  <figcaption className="flex items-center gap-2.5 px-4 py-3 text-xs font-medium text-dim">
                    <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-amber" />
                    {shot.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

      <StatsStrip />

      {/* Leadership */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 md:py-24">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              The people who run the lab
            </h2>
            <span aria-hidden="true" className="mx-auto mt-4 block h-1 w-16 bg-amber" />
          </Reveal>
          <div className="mt-12 space-y-16 md:space-y-20">
            {leadership.map((person, i) => (
              <Reveal key={person.name} delay={i * 60}>
                <LeadershipBadge person={person} flip={i % 2 === 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Have equipment down or a supply gap?"
        body="Send us the make, model and fault description. We reply with diagnosis, turnaround and cost, usually the same day."
      />
    </>
  )
}
