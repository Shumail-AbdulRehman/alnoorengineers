import { Link } from 'react-router-dom'
import WhatsAppButton from './WhatsAppButton'

// Full-width CTA band before the footer — amber-accented panel, WhatsApp primary.
export default function CTABand({ title, body }) {
  return (
    <section className="border-y border-line bg-panel">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 border-l-2 border-amber px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
          {body && <p className="mt-3 leading-relaxed text-dim">{body}</p>}
        </div>
        <div className="flex flex-wrap gap-3">
          <WhatsAppButton message="Hello Al Noor Engineers, I would like a quote for repair / supply of telecom equipment." />
          <Link
            to="/contact"
            className="border border-teal px-5 py-2.5 font-display text-sm font-semibold text-label transition-colors duration-150 hover:border-amber hover:text-amber-strong"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
