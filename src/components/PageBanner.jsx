// Full-bleed page header shared by About / Services / Contact.
// A photograph fills the band; a left-weighted charcoal scrim keeps the
// headline legible. The band stays dark in both themes, so the copy is pinned
// to the light label color here instead of following the theme flip.
export default function PageBanner({ image, alt = '', title, lede }) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#0e1613]/95 via-[#0e1613]/75 to-[#0e1613]/20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0e1613]/70 to-transparent"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-36 sm:px-6 md:pb-20 md:pt-44">
        <h1 className="font-expanded max-w-3xl font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-[#f4f2ea] sm:text-5xl">
          {title}
        </h1>
        {lede && <p className="mt-6 max-w-[68ch] text-lg leading-relaxed text-[#f4f2ea]/75">{lede}</p>}
      </div>
    </section>
  )
}
