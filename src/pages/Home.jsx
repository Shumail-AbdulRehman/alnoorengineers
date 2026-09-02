import Hero from '../components/Hero'
import LogoRail from '../components/LogoRail'
import RackElevation from '../components/RackElevation'
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

      {/* Capabilities preview — the two rack elevations */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                What we repair and supply
              </h2>
              <p className="mt-3 max-w-[62ch] text-dim">
                Two lines of work, one standard: operator-grade repair and documented supply
                of new and refurbished equipment.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <RackElevation
              title="Local Repair"
              subtitle={`${repairServices.length} UNITS SERVICED`}
              items={repairServices.slice(0, 8)}
              accent="amber"
            />
            <RackElevation
              title="Supply"
              subtitle={`${supplyServices.length} ITEMS STOCKED`}
              items={supplyServices.slice(0, 8)}
              accent="teal"
            />
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
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Leadership</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-10 md:gap-14">
            {leadership.map((person) => (
              <LeadershipBadge key={person.name} person={person} />
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
