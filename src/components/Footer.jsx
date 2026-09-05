import { Link } from 'react-router-dom'
import { SITE, whatsappLink } from '../lib/site'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <p className="flex items-center gap-2.5 font-display text-base font-bold">
            <Logo className="h-6 w-6 shrink-0" />
            Al Noor Engineers
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-dim">
            {SITE.tagline}. New and refurbished equipment for GSM, PSTN and enterprise
            infrastructure across Pakistan.
          </p>
          <p className="mt-4 text-xs font-medium text-dim">{SITE.hours}</p>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold text-label">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm text-dim">
            <li>
              <a className="tnum font-mono transition-colors hover:text-amber-strong" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                WhatsApp {SITE.whatsappDisplay}
              </a>
            </li>
            <li>
              <a className="tnum font-mono transition-colors hover:text-amber-strong" href={`tel:${SITE.phoneHref}`}>
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-amber-strong" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold text-label">Address</h2>
          <address className="mt-3 text-sm not-italic leading-relaxed text-dim">{SITE.address}</address>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold text-label">Site</h2>
          <ul className="mt-3 space-y-2 text-sm text-dim">
            <li><Link className="transition-colors hover:text-amber-strong" to="/">Home</Link></li>
            <li><Link className="transition-colors hover:text-amber-strong" to="/about">About</Link></li>
            <li><Link className="transition-colors hover:text-amber-strong" to="/services">Services</Link></li>
            <li><Link className="transition-colors hover:text-amber-strong" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-4 sm:px-6">
          <p className="text-xs text-dim">© {new Date().getFullYear()} {SITE.name}</p>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-dim">Repair · Maintenance · Supply</p>
        </div>
      </div>
    </footer>
  )
}
