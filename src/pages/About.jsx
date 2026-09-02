import PageBanner from '../components/PageBanner'
import RackElevation from '../components/RackElevation'
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

      {/* Our Supplies — rack elevation */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Our Supplies</h2>
          <p className="mt-3 max-w-[62ch] text-dim">
            New and refurbished stock moving through the warehouse — rectifiers, solar,
            power, fiber and microwave.
          </p>
          <div className="mt-8 max-w-3xl">
            <RackElevation
              title="Supply Inventory"
              subtitle={`${supplies.length} LINES`}
              items={supplies}
              accent="amber"
            />
          </div>
        </div>
      </section>

      {/* Leadership — full bios */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Leadership</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-10 md:gap-14">
            {leadership.map((person) => (
              <LeadershipBadge key={person.name} person={person} full />
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
