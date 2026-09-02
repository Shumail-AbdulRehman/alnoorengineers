// Central site configuration.
// REPLACE the placeholder contact details below with the real ones — everything
// (nav, CTAs, footer, contact page) reads from this single file.

export const SITE = {
  name: 'Al Noor Engineers (Pvt.) Ltd.',
  shortName: 'Al Noor Engineers',
  tagline: 'Telecom equipment repair, maintenance & supply',

  // Placeholders — replace before launch
  whatsappDisplay: '+92 3XX XXXXXXX',
  whatsappNumber: '923XXXXXXXXX', // digits only, country code, no "+" or spaces
  phoneDisplay: '+92 3XX XXXXXXX',
  phoneHref: '+923XXXXXXXXX',
  email: 'info@alnoorengineers.pk', // placeholder
  address: 'Rawalpindi / Islamabad, Pakistan', // placeholder — confirm street address

  city: 'Pakistan',
  hours: 'Mon–Sat, 09:00–18:00 PKT',
}

export function whatsappLink(message) {
  const base = `https://wa.me/${SITE.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
