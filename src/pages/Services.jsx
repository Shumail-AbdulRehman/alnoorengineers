import PageBanner from '../components/PageBanner'
import SupplyCatalog from '../components/SupplyCatalog'
import CTABand from '../components/CTABand'
import WhatsAppButton from '../components/WhatsAppButton'
import { repairServices, supplyServices } from '../data/content'

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
          className="group flex items-center gap-4 border border-line bg-panel px-4 py-4 transition-colors duration-150 hover:border-amber-strong/60"
        >
          <span className="tnum font-mono text-xs text-dim/60">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="flex-1 text-[15px] text-label">{item.name}</span>
          {item.tag && <span className="tnum font-mono text-xs text-dim">{item.tag}</span>}
          {/* status LED reveals on hover / keyboard focus */}
          <span
            aria-hidden="true"
            className="block h-[3px] w-6 shrink-0 bg-amber opacity-0 transition-opacity duration-150 group-focus-within:opacity-100 group-hover:opacity-100"
          />
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
            <span className="tnum font-mono text-xs text-dim">{repairServices.length} SEGMENTS</span>
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
            <span className="tnum font-mono text-xs text-dim">{supplyServices.length} LINES STOCKED</span>
          </div>
          <p className="mt-3 max-w-[62ch] text-dim">
            New and refurbished equipment and consumables — stocked, sourced and delivered to
            site with proper part traceability.
          </p>
          <div className="mt-8">
            <SupplyCatalog items={supplyServices} />
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
