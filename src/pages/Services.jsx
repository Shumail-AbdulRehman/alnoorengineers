import PageBanner from '../components/PageBanner'
import SupplyCatalog from '../components/SupplyCatalog'
import CTABand from '../components/CTABand'
import WhatsAppButton from '../components/WhatsAppButton'
import { repairServices, supplyServices, supplyCategories } from '../data/content'

function SegmentCTA({ message }) {
  return (
    <div className="mt-10">
      <WhatsAppButton message={message}>Get In Touch</WhatsAppButton>
    </div>
  )
}

// Repair capability chips — numbered bench tags, not a table.
function RepairGrid() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {repairServices.map((item, i) => (
        <li
          key={item.name}
          className="group relative flex items-center gap-4 overflow-hidden border border-line bg-panel px-5 py-4 transition-colors duration-150 hover:border-amber-strong/60 hover:bg-amber/[0.05]"
        >
          {/* amber edge light reveals on hover / keyboard focus */}
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-[3px] bg-amber opacity-0 transition-opacity duration-150 group-focus-within:opacity-100 group-hover:opacity-100"
          />
          <span className="tnum flex h-9 w-9 shrink-0 items-center justify-center border border-line font-mono text-xs font-semibold text-amber transition-colors duration-150 group-hover:border-amber-strong/60">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="flex-1 text-[15px] font-medium text-label">{item.name}</span>
          {item.tag && (
            <span className="shrink-0 border border-line px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-amber transition-colors duration-150 group-hover:border-amber-strong/40">
              {item.tag}
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}

export default function Services() {
  return (
    <>
      <PageBanner
        image="/images/banner-services.jpg"
        alt="Server racks with patched cabling and status LEDs"
        title="Every unit we repair, every line we stock"
        lede="The full capability list below — bench-tested repair segments and the supply
            catalog we keep moving. If your equipment is on it, we have the spares and the
            test gear for it."
      />

      {/* Local Repair */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Local Repair</h2>
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-dim">{repairServices.length} SEGMENTS</span>
          </div>
          <p className="mt-3 max-w-[62ch] text-dim">
            Bench and field repair to operator standard — diagnosed, repaired, load-tested and
            documented before it goes back on the truck.
          </p>
          <div className="mt-8">
            <RepairGrid />
          </div>
          <SegmentCTA message="Hello Al Noor Engineers, I would like to discuss a repair requirement." />
        </div>
      </section>

      {/* Supply */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Supply</h2>
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-dim">{supplyServices.length} LINES STOCKED</span>
          </div>
          <p className="mt-3 max-w-[62ch] text-dim">
            New and refurbished equipment and consumables — stocked, sourced and delivered to
            site with proper part traceability. Lines below follow our 2024 test-instrument
            and tooling catalogue.
          </p>
          <div className="mt-12 space-y-14">
            {supplyCategories.map((category) => (
              <div key={category.title}>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 border-b border-line pb-3">
                  <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                    {category.title}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-dim">
                    {category.items.length} LINES
                  </span>
                </div>
                <div className="mt-6">
                  <SupplyCatalog items={category.items} />
                </div>
              </div>
            ))}
          </div>
          <SegmentCTA message="Hello Al Noor Engineers, I would like to discuss a supply requirement." />
        </div>
      </section>

      <CTABand
        title="Equipment on the list?"
        body="Send make, model and fault description on WhatsApp — we come back with diagnosis, turnaround and cost."
      />
    </>
  )
}
