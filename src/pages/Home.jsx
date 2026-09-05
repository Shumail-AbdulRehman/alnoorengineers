import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import LogoRail from '../components/LogoRail'
import StatsStrip from '../components/StatsStrip'
import LeadershipBadge from '../components/LeadershipBadge'
import CTABand from '../components/CTABand'
import WhatsAppButton from '../components/WhatsAppButton'
import { visionMission, leadership, repairServices, supplyServices } from '../data/content'

export default function Home() {
  return (
    <>
      <Hero />
      <LogoRail />

      {/* Vision / Mission */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div className="border-l-2 border-teal pl-6">
            <h2 className="font-display text-2xl font-bold tracking-tight">Vision</h2>
            <p className="mt-4 max-w-[62ch] leading-relaxed text-dim">{visionMission.vision}</p>
          </div>
          <div className="border-l-2 border-amber pl-6">
            <h2 className="font-display text-2xl font-bold tracking-tight">Mission</h2>
            <p className="mt-4 max-w-[62ch] leading-relaxed text-dim">{visionMission.mission}</p>
          </div>
        </div>
      </section>

      {/* Capabilities preview — repair feature + supply mini-catalog */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            What we repair and supply
          </h2>
          <p className="mt-3 max-w-[62ch] text-dim">
            Two lines of work, one standard: operator-grade repair and documented supply
            of new and refurbished equipment.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Local Repair — feature card */}
            <article className="group flex flex-col border border-line bg-panel">
              <div className="relative aspect-[16/9] overflow-hidden border-b border-line">
                <img
                  src="/images/banner-about.jpg"
                  alt="Technician soldering a circuit board at a repair bench"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold tracking-tight">Local Repair</h3>
                <p className="mt-2 text-sm leading-relaxed text-dim">
                  Bench and field repair to operator standard — diagnosed, repaired, load-tested
                  and documented before it goes back on the truck.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {repairServices.slice(0, 6).map((item) => (
                    <li
                      key={item.name}
                      className="border border-line px-2.5 py-1 text-xs text-dim transition-colors duration-150 hover:border-amber-strong/60 hover:text-label"
                    >
                      {item.name}
                    </li>
                  ))}
                  <li className="border border-line px-2.5 py-1 text-xs text-dim">+{repairServices.length - 6} more</li>
                </ul>
                <Link
                  to="/services"
                  className="mt-6 inline-flex self-start bg-amber px-5 py-2.5 font-display text-sm font-semibold text-rack transition-colors duration-150 hover:bg-[#f0b45a]"
                >
                  Full repair list
                </Link>
              </div>
            </article>

            {/* Supply — mini catalog */}
            <article className="group flex flex-col border border-line bg-panel">
              <div className="grid grid-cols-2 gap-px border-b border-line bg-line">
                {supplyServices.slice(0, 4).map((item) => (
                  <div key={item.name} className="relative aspect-[8/5] overflow-hidden bg-rack">
                    <img
                      src={item.img}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl font-bold tracking-tight">Supply</h3>
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-dim">
                    {supplyServices.length} LINES STOCKED
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-dim">
                  New and refurbished equipment and consumables — stocked, sourced and delivered
                  to site with proper part traceability.
                </p>
                <Link
                  to="/services"
                  className="mt-6 inline-flex self-start bg-amber px-5 py-2.5 font-display text-sm font-semibold text-rack transition-colors duration-150 hover:bg-[#f0b45a]"
                >
                  Full supply catalog
                </Link>
              </div>
            </article>
          </div>

          <div className="mt-8">
            <WhatsAppButton
              variant="outline"
              message="Hello Al Noor Engineers, I would like to discuss a repair or supply requirement."
            >
              Get In Touch
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <StatsStrip />

      {/* Leadership */}
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
        title="Have equipment down or a supply gap?"
        body="Send us the make, model and fault description. We reply with diagnosis, turnaround and cost — usually the same day."
      />
    </>
  )
}
