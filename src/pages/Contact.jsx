import PageBanner from '../components/PageBanner'
import QuoteForm from '../components/QuoteForm'
import Reveal from '../components/Reveal'
import { SITE, whatsappLink } from '../lib/site'

export default function Contact() {
  return (
    <>
      <PageBanner
        image="/images/banner-contact.jpg"
        alt="Numbered ports on a patch panel with patched network cabling"
        title="Fast channel in, fast answer out"
        lede="WhatsApp or phone is the quickest route: you reach the people who run the lab,
            not a ticket queue. Prefer writing? Use the short form and we pick it up there."
      />

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-[1fr_1.2fr]">
          {/* Direct channels */}
          <Reveal>
            <div>
            <h2 className="font-display text-xl font-bold tracking-tight">Direct</h2>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              <li className="flex items-center justify-between gap-4 py-4">
                <span className="text-sm text-dim">WhatsApp</span>
                <a
                  href={whatsappLink('Hello Al Noor Engineers, I have an equipment repair / supply requirement.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tnum font-mono text-sm text-amber-strong transition-colors hover:text-label"
                >
                  {SITE.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center justify-between gap-4 py-4">
                <span className="text-sm text-dim">Phone</span>
                <a href={`tel:${SITE.phoneHref}`} className="tnum font-mono text-sm text-label transition-colors hover:text-amber-strong">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center justify-between gap-4 py-4">
                <span className="text-sm text-dim">Email</span>
                <a href={`mailto:${SITE.email}`} className="text-sm text-label transition-colors hover:text-amber-strong">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center justify-between gap-4 py-4">
                <span className="text-sm text-dim">Address</span>
                <address className="text-right text-sm not-italic text-label">{SITE.address}</address>
              </li>
              <li className="flex items-center justify-between gap-4 py-4">
                <span className="text-sm text-dim">Hours</span>
                <span className="text-sm font-medium text-label">{SITE.hours}</span>
              </li>
            </ul>
          </div>
          </Reveal>

          {/* Quote form */}
          <Reveal delay={120}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
