import { stats } from '../data/content'

export default function StatsStrip() {
  return (
    <section aria-label="Company at a glance" className="border-y border-line bg-panel">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 divide-line px-4 sm:px-6 lg:grid-cols-4 lg:divide-x">
        {stats.map(({ value, label }) => (
          <div key={label} className="px-2 py-10 lg:px-8">
            <dt className="order-2 mt-3 block text-sm leading-snug text-dim">{label}</dt>
            <dd className="tnum font-mono text-5xl font-medium tracking-tight text-label lg:text-6xl">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
