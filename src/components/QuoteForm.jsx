import { useState } from 'react'
import { whatsappLink } from '../lib/site'

// Short quote-request form. Static site — on submit it hands the request to
// WhatsApp with the details prefilled, which is the channel this audience wants.
export default function QuoteForm() {
  const [form, setForm] = useState({ company: '', segment: '', message: '' })

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const text = [
      'Quote request — Al Noor Engineers website',
      `Company: ${form.company}`,
      `Equipment / segment: ${form.segment}`,
      '',
      form.message,
    ].join('\n')
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
  }

  const inputClass =
    'w-full border border-line bg-rack px-4 py-3 text-sm text-label placeholder:text-dim/60 transition-colors focus:border-amber'

  return (
    <form onSubmit={submit} className="border border-line bg-panel">
      <header className="border-b border-line px-5 py-4">
        <h2 className="font-display text-lg font-bold tracking-tight">Request a Quote</h2>
        <p className="mt-1 text-sm text-dim">Three fields. We reply on WhatsApp or by phone.</p>
      </header>

      <div className="space-y-5 p-5 sm:p-6">
        <div>
          <label htmlFor="q-company" className="mb-2 block text-sm text-dim">Company name</label>
          <input
            id="q-company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            value={form.company}
            onChange={update('company')}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="q-segment" className="mb-2 block text-sm text-dim">Equipment / segment</label>
          <input
            id="q-segment"
            name="segment"
            type="text"
            required
            placeholder="e.g. Delta ESR 48/40 rectifier repair"
            value={form.segment}
            onChange={update('segment')}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="q-message" className="mb-2 block text-sm text-dim">Message</label>
          <textarea
            id="q-message"
            name="message"
            rows="4"
            value={form.message}
            onChange={update('message')}
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-amber px-6 py-3 font-display text-sm font-semibold text-rack transition-colors duration-150 hover:bg-[#f0b45a] sm:w-auto"
        >
          Send via WhatsApp
        </button>
      </div>
    </form>
  )
}
