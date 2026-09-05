import PageBanner from '../components/PageBanner'
import SupplyCatalog from '../components/SupplyCatalog'
import LeadershipBadge from '../components/LeadershipBadge'
import CTABand from '../components/CTABand'
import { aboutIntro, objectives, supplies, leadership } from '../data/content'

export default function About() {
  return (
    <>
      <PageBanner
        image="/images/banner-about.jpg"
        alt="Technician soldering a circuit board at a repair bench"
        title="A decade of keeping Pakistan’s telecom hardware online"
        lede={aboutIntro}
      />

      {/* Objectives — verbatim */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Objectives</h2>
          <ul className="mt-8 space-y-0 border-t border-line">
            {objectives.map((objective) => (
              <li key={objective} className="flex gap-4 border-b border-line px-2 py-5 sm:gap-6 sm:px-4">
                <span aria-hidden="true" className="mt-2 block h-[3px] w-8 shrink-0 bg-teal" />
                <p className="max-w-[70ch] leading-relaxed text-label">{objective}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our Supplies — image catalog */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Our Supplies</h2>
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-dim">{supplies.length} LINES</span>
          </div>
          <p className="mt-3 max-w-[62ch] text-dim">
            Core stock moving through the warehouse — fusion splicers, OTDRs, fiber test sets,
            CCTV and cable testers, and field toolkits.
          </p>
          <div className="mt-8">
            <SupplyCatalog items={supplies} />
          </div>
        </div>
      </section>

      {/* Leadership — full bios */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            The people who run the lab
          </h2>
          <span aria-hidden="true" className="mx-auto mt-4 block h-1 w-16 bg-amber" />
          <div className="mt-12 space-y-16 md:space-y-20">
            {leadership.map((person, i) => (
              <LeadershipBadge key={person.name} person={person} flip={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Talk to the people who run the lab"
        body="Repairs, maintenance contracts and supply quotes go straight to leadership — no ticket queues."
      />
    </>
  )
}
