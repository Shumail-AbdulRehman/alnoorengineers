import PageBanner from '../components/PageBanner'
import SupplyCatalog from '../components/SupplyCatalog'
import LeadershipBadge from '../components/LeadershipBadge'
import CTABand from '../components/CTABand'
import Reveal from '../components/Reveal'
import { aboutIntro, objectives, supplies, leadership } from '../data/content'

export default function About() {
  return (
    <>
      <PageBanner
        image="/images/banner-about.webp"
        alt="Technician soldering a circuit board at a repair bench"
        title="A decade of keeping Pakistan’s telecom hardware online"
        lede={aboutIntro}
      />

      {/* Objectives — verbatim */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-strong">What we hold ourselves to</p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">Objectives</h2>
          </Reveal>
          <ul className="mt-8 space-y-0 border-t border-line">
            {objectives.map((objective, i) => (
              <Reveal key={objective} delay={i * 90}>
                <li className="flex gap-4 border-b border-line px-2 py-5 sm:gap-6 sm:px-4">
                  <span aria-hidden="true" className="mt-2 block h-[3px] w-8 shrink-0 bg-teal" />
                  <p className="max-w-[70ch] leading-relaxed text-label">{objective}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Inside the lab — wide photography band */}
      <section className="border-b border-line bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-strong">Inside the lab</p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Bench, bench supply, and the burn-in rack
            </h2>
            <p className="mt-3 max-w-[62ch] text-dim">
              Every unit that comes in is diagnosed, repaired and run under load before it ships
              back, with the test record attached.
            </p>
          </Reveal>
          <Reveal delay={120}>
            {/* aspect lives on the img itself — no inner frame, so no panel
                color can peek through. Taller 4:3 crop on mobile, cinematic
                21:9 on desktop. */}
            <figure className="group mt-12 overflow-hidden border border-line bg-panel2">
              <img
                src="/images/lab/lab-board-wide.webp"
                alt="Circuit board under inspection in the repair lab"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] sm:aspect-[16/10] lg:aspect-[21/9]"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Our Supplies — image catalog */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Our Supplies</h2>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-dim">{supplies.length} LINES</span>
            </div>
            <p className="mt-3 max-w-[62ch] text-dim">
              Core stock moving through the warehouse: fusion splicers, OTDRs, fiber test sets,
              CCTV and cable testers, and field toolkits.
            </p>
          </Reveal>
          <Reveal className="mt-8" delay={120}>
            <SupplyCatalog items={supplies} />
          </Reveal>
        </div>
      </section>

      {/* Leadership — full bios */}
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
        title="Talk to the people who run the lab"
        body="Repairs, maintenance contracts and supply quotes go straight to leadership. No ticket queues."
      />
    </>
  )
}
