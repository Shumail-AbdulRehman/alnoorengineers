import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import LogoRail from '../components/LogoRail'
import StatsStrip from '../components/StatsStrip'
import LeadershipBadge from '../components/LeadershipBadge'
import CTABand from '../components/CTABand'
import WhatsAppButton from '../components/WhatsAppButton'
import Reveal from '../components/Reveal'
import { visionMission, leadership, repairServices, supplyServices } from '../data/content'

// Lab photography (Unsplash, free license) — see public/images/lab/.
const LAB_SHOTS = [
  {
    src: '/images/lab/lab-bench.jpg',
    alt: 'Engineers working at test benches in the repair lab',
    caption: 'The bench: fault isolation and rework',
  },
  {
    src: '/images/lab/lab-pcb.jpg',
    alt: 'Macro shot of a circuit board under repair',
    caption: 'Component-level rework',
  },
  {
    src: '/images/lab/lab-cabling.jpg',
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
                  src="/images/lab/lab-field.jpg"
                  alt="Field engineer servicing a telecom cabinet"
                  loading="lazy"
                  className="aspect-[4/3] w-full border border-line object-cover"
                />
                <img
                  src="/images/lab/lab-kit.jpg"
                  alt="Test instruments and tools laid out on the bench"
                  loading="lazy"
                  className="absolute -bottom-8 -right-4 hidden w-2/5 border-4 border-rack object-cover shadow-2xl sm:block md:-right-8"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-strong">Our Mission</p>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
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
                    src="/images/lab/lab-macro.jpg"
                    alt="Macro detail of a telecom circuit board"
                    loading="lazy"
                    className="aspect-[4/3] w-full border border-line object-cover"
                  />
                  <img
                    src="/images/lab/lab-board-wide.jpg"
                    alt="Boards under inspection in the repair lab"
                    loading="lazy"
                    className="absolute -bottom-8 -left-4 hidden w-2/5 border-4 border-rack object-cover shadow-2xl sm:block md:-left-8"
                  />
                </div>
              </div>
              <div className="lg:order-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-strong">Our Vision</p>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
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

      {/* Capabilities preview — repair feature + supply mini-catalog */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-strong">Capabilities</p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              What we repair and supply
            </h2>
            <p className="mt-3 max-w-[62ch] text-dim">
              Two lines of work, one standard: operator-grade repair and documented supply
              of new and refurbished equipment.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            {/* Local Repair — bench photograph under a scrim, ledger list on top.
                Like the page banners, the scrim pins the copy to the light label
                color in both themes. */}
            <Reveal className="lg:col-span-7">
              <article className="group relative flex h-full flex-col overflow-hidden border border-line transition-colors duration-300 hover:border-amber/40">
                <img
                  src="/images/lab/lab-scope.jpg"
                  alt="Electronics workbench with a circuit under test and measurement gear"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#0e1613]/95 via-[#0e1613]/85 to-[#0e1613]/50" />
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0e1613]/80 to-transparent" />

                <div className="relative flex flex-1 flex-col p-6 sm:p-8">
                  <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f4f2ea]/60">
                    <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-amber" />
                    Bench &amp; field
                  </p>
                  <div className="mt-3 flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-xl font-bold tracking-tight text-[#f4f2ea]">Local Repair</h3>
                    <span className="tnum font-mono text-xs font-semibold text-amber">
                      {repairServices.length} SEGMENTS
                    </span>
                  </div>
                  <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-[#f4f2ea]/75">
                    Bench and field repair to operator standard: diagnosed, repaired, load-tested
                    and documented before it goes back on the truck.
                  </p>
                  <ul className="mt-5 grid gap-x-6 border-t border-[#f4f2ea]/15 sm:grid-cols-2">
                    {repairServices.slice(0, 6).map((item, i) => (
                      <li
                        key={item.name}
                        className="flex items-baseline gap-3 border-b border-[#f4f2ea]/15 py-2.5 text-sm"
                      >
                        <span className="tnum font-mono text-[11px] font-semibold text-amber">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-[#f4f2ea]">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-[#f4f2ea]/60">
                    + {repairServices.length - 6} more segments ·{' '}
                    <Link to="/services" className="font-semibold text-amber underline-offset-4 hover:underline">
                      full repair list
                    </Link>
                  </p>
                </div>
              </article>
            </Reveal>

            {/* Supply — snap-scrolling product rail, white tiles like the catalogue */}
            <Reveal className="lg:col-span-5" delay={120}>
              <article className="flex h-full flex-col border border-line bg-panel transition-colors duration-300 hover:border-amber/40">
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-xl font-bold tracking-tight">Supply</h3>
                    <span className="tnum font-mono text-xs font-semibold text-amber-strong">
                      {supplyServices.length} LINES STOCKED
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-dim">
                    New and refurbished equipment and consumables, stocked, sourced and delivered
                    to site with proper part traceability.
                  </p>
                  <Link
                    to="/services"
                    className="mt-6 inline-flex self-start bg-amber px-5 py-2.5 font-display text-sm font-semibold text-rack transition-all duration-200 hover:bg-[#f0b45a] active:scale-[0.98]"
                  >
                    Full supply catalog
                  </Link>
                  <p className="mt-auto pt-6 text-xs leading-relaxed text-dim">
                    Fusion splicers, OTDRs, fiber test sets, CCTV and cable testers, FTTH toolkits.
                    Drag the rail for a preview.
                  </p>
                </div>
                <div className="relative border-t border-line">
                  <div className="scrollbar-hide flex snap-x snap-mandatory gap-px overflow-x-auto bg-line">
                    {supplyServices.slice(0, 7).map((item) => (
                      <div key={item.name} className="relative aspect-square w-32 shrink-0 snap-start overflow-hidden bg-white sm:w-36" title={item.name}>
                        <img
                          src={item.img}
                          alt={item.name}
                          loading="lazy"
                          className="h-full w-full object-contain p-2 transition-transform duration-500 ease-out hover:scale-[1.06]"
                        />
                      </div>
                    ))}
                    <Link
                      to="/services"
                      className="flex aspect-square w-32 shrink-0 snap-start flex-col items-center justify-center gap-1 bg-panel2 text-center transition-colors duration-200 hover:bg-amber/10 sm:w-36"
                    >
                      <span className="tnum font-display text-lg font-bold text-amber-strong">
                        +{supplyServices.length - 7}
                      </span>
                      <span className="px-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-dim">more lines</span>
                    </Link>
                  </div>
                  {/* fade hint that the rail continues */}
                  <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-panel to-transparent" />
                </div>
              </article>
            </Reveal>
          </div>

          <Reveal className="mt-8">
            <WhatsAppButton
              variant="outline"
              message="Hello Al Noor Engineers, I would like to discuss a repair or supply requirement."
            >
              Get In Touch
            </WhatsAppButton>
          </Reveal>
        </div>
      </section>

      {/* Inside the lab — photography band */}
      <section className="border-b border-line bg-panel">
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
      </section>

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
