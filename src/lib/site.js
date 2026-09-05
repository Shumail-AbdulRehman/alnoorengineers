// Central site configuration.
// REPLACE the placeholder contact details below with the real ones — everything
// (nav, CTAs, footer, contact page) reads from this single file.

export const SITE = {
  name: 'Al Noor Engineers (Pvt.) Ltd.',
  shortName: 'Al Noor Engineers',
  tagline: 'Telecom equipment repair, maintenance & supply',

  // From the company profile document
  whatsappDisplay: '+92 318 0499755',
  whatsappNumber: '923180499755', // digits only, country code, no "+" or spaces
  phoneDisplay: '+92 318 0499755 · +92 313 5590486',
  phoneHref: '+923180499755',
  email: 'sanamanzoor@alnoorengineers.com',
  address: 'Rawalpindi / Islamabad, Pakistan', // placeholder — confirm street address

  city: 'Pakistan',
  hours: 'Mon–Sat, 09:00–18:00 PKT',
}

export function whatsappLink(message) {
  const base = `https://wa.me/${SITE.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
