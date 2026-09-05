// Supply catalog — one card per line, photo on top, name below.
// Shared by the Services page and the About page inventory.
export default function SupplyCatalog({ items }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.name} className="group border border-line bg-panel transition-all duration-300 hover:-translate-y-1 hover:border-amber/50">
          <div className="aspect-[4/3] overflow-hidden border-b border-line bg-panel2">
            <img
              src={item.img}
              alt={item.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
          </div>
          <div className="flex items-center justify-between gap-3 px-4 py-3">
            <span className="text-base font-bold text-label">{item.name}</span>
            {item.tag && <span className="text-xs font-semibold uppercase tracking-wide text-amber">{item.tag}</span>}
          </div>
        </li>
      ))}
    </ul>
  )
}
