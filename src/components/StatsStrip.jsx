import { stats } from '../data/content'

// Stats band — diagnostic amber background, charcoal ink. Big expanded
// numerals with small-caps mono labels underneath.
export default function StatsStrip() {
  return (
    <section aria-label="Company at a glance" className="border-y border-line bg-amber">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 px-4 sm:px-6 lg:grid-cols-4 lg:divide-x lg:divide-[#0e1613]/15">
        {stats.map(({ value, label }) => (
          <div key={label} className="px-2 py-10 lg:px-8 lg:py-14">
            <dd className="tnum font-display text-5xl font-extrabold leading-none tracking-tight text-[#0e1613] lg:text-6xl">
              {value}
            </dd>
            <dt className="mt-3 text-[11px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-[#0e1613]/70">
              {label}
            </dt>
          </div>
        ))}
      </dl>
    </section>
  )
}
