import PageBanner from '../components/PageBanner'
import RackElevation from '../components/RackElevation'
import CTABand from '../components/CTABand'
import WhatsAppButton from '../components/WhatsAppButton'
import { repairServices, supplyServices } from '../data/content'

const gallery = [
  { src: '/images/gallery-otdr.svg', alt: 'OTDR trace on test set, 1310/1550 nm', label: 'FIBER TEST — OTDR' },
  { src: '/images/gallery-rectifier.svg', alt: '48V rectifier module under test', label: 'RECTIFIER — 48V PLANT' },
  { src: '/images/gallery-patchpanel.svg', alt: 'Fiber patch panel with labelled ODF strips', label: 'ODF — PATCH PANEL' },
  { src: '/images/gallery-ats.svg', alt: 'Automatic transfer switch panel', label: 'ATS — TRANSFER PANEL' },
]

function SegmentCTA() {
  return (
    <div className="mt-8">
      <WhatsAppButton message="Hello Al Noor Engineers, I would like to discuss a repair / supply requirement." >
        Get In Touch
      </WhatsAppButton>
    </div>
  )
}

export default function Services() {
  return (
    <>
      <PageBanner
        image="/images/banner-services.jpg"
        alt="Server racks with patched cabling and status LEDs"
        title="Repair and supply, catalogued like a rack elevation"
        lede="Every line below is a unit we actively repair or stock. If your equipment is on
            this list, we have the bench, the spares and the test gear for it."
      />

      {/* Local Repair */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Local Repair</h2>
          <p className="mt-3 max-w-[62ch] text-dim">
            Bench and field repair to operator standard — diagnosed, repaired, load-tested and
            documented before it goes back on the truck.
          </p>
          <div className="mt-8 max-w-3xl">
            <RackElevation
              title="Repair Bench"
              subtitle={`${repairServices.length} SEGMENTS`}
              items={repairServices}
              accent="amber"
            />
          </div>
          <SegmentCTA />
        </div>
      </section>

      {/* Supply */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Supply</h2>
          <p className="mt-3 max-w-[62ch] text-dim">
            New and refurbished equipment and consumables — stocked, sourced and delivered to
            site with proper part traceability.
          </p>
          <div className="mt-8 max-w-3xl">
            <RackElevation
              title="Supply Lines"
              subtitle={`${supplyServices.length} ITEMS`}
              items={supplyServices}
              accent="teal"
            />
          </div>
          <SegmentCTA />
        </div>
      </section>

      {/* Equipment gallery */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">In the Lab</h2>
          <p className="mt-3 max-w-[62ch] text-dim">
            Equipment as it looks on our benches and racks.
          </p>
          {/* Swap these illustration plates for real equipment photography in /public/images/ when available. */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map(({ src, alt, label }) => (
              <figure key={src} className="border border-line bg-panel p-2">
                <img src={src} alt={alt} className="block w-full" width="480" height="360" loading="lazy" />
                <figcaption className="tnum px-2 py-2 font-mono text-[11px] text-dim">{label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Equipment on the list?"
        body="Send make, model and fault description on WhatsApp — we come back with diagnosis, turnaround and cost."
      />
    </>
  )
}
