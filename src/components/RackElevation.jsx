// Core repeated component: a labelled rack elevation.
// Each row is one equipment unit — name on the left, status indicator + spec tag on the right.
// Rows are separated by hairlines, not cards. Indicator/tag reveal on hover and keyboard focus.

export default function RackElevation({ title, subtitle, items, accent = 'amber', id }) {
  const indicator = accent === 'amber' ? 'bg-amber' : 'bg-teal'

  return (
    <section id={id} className="border border-line bg-panel">
      <header className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line px-5 py-4">
        <h3 className="font-display text-lg font-bold tracking-tight">{title}</h3>
        {subtitle && <p className="font-mono text-xs text-dim">{subtitle}</p>}
      </header>

      <ul role="list">
        {items.map((item, i) => {
          const { name, tag } = typeof item === 'string' ? { name: item } : item
          return (
            <li
              key={name + i}
              className="group border-b border-line last:border-b-0 focus-within:bg-rack hover:bg-rack"
            >
              <div className="flex items-center justify-between gap-4 px-5 py-3.5">
                <span className="text-[15px] text-label">{name}</span>
                <span className="flex shrink-0 items-center gap-3">
                  {tag && (
                    <span className="tnum font-mono text-xs text-dim opacity-0 transition-opacity duration-150 group-focus-within:opacity-100 group-hover:opacity-100">
                      {tag}
                    </span>
                  )}
                  {/* status indicator: 2px LED bar */}
                  <span
                    aria-hidden="true"
                    className={`block h-[3px] w-8 ${indicator} opacity-40 transition-opacity duration-150 group-focus-within:opacity-100 group-hover:opacity-100`}
                  />
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
