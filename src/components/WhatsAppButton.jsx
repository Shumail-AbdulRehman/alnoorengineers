import { whatsappLink } from '../lib/site'

// Reusable amber WhatsApp CTA. variant: "solid" (primary) | "outline" (teal secondary)
export default function WhatsAppButton({ children = 'Message on WhatsApp', variant = 'solid', message, className = '' }) {
  const base =
    'inline-flex items-center justify-center gap-2 px-5 py-2.5 font-display font-semibold text-sm transition-colors duration-150'
  const styles =
    variant === 'solid'
      ? 'bg-amber text-rack hover:bg-[#f0b45a]'
      : 'border border-teal text-label hover:border-amber hover:text-amber-strong'

  return (
    <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.2-.7l.4-.5c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3z" />
      </svg>
      {children}
    </a>
  )
}
