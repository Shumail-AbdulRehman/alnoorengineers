import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SITE, whatsappLink } from '../lib/site'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-rack/95 backdrop-blur-sm">
      <div className="relative mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* hamburger — mobile only */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-[5px] text-label md:hidden"
        >
          <span
            aria-hidden="true"
            className={`block h-[2px] w-5 bg-current transition-transform duration-300 ${open ? 'translate-y-[3.5px] rotate-45' : ''}`}
          />
          <span
            aria-hidden="true"
            className={`block h-[2px] w-5 bg-current transition-transform duration-300 ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`}
          />
        </button>

        {/* logo — centered on mobile, left-aligned on desktop */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="absolute left-1/2 flex min-w-0 -translate-x-1/2 items-center gap-2.5 md:static md:translate-x-0"
          aria-label="Al Noor Engineers home"
        >
          <Logo className="h-7 w-7 shrink-0" />
          <span className="whitespace-nowrap font-display text-base font-bold tracking-tight">
            Al Noor <span className="font-medium text-dim">Engineers</span>
          </span>
        </Link>

        {/* desktop links */}
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `border px-3 py-1.5 text-sm transition-colors duration-150 ${
                  isActive
                    ? 'border-transparent text-amber-strong'
                    : 'border-transparent text-dim hover:border-amber hover:bg-amber hover:text-black'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          <ThemeToggle />
          <a
            href={whatsappLink('Hello Al Noor Engineers, I would like to discuss an equipment repair or supply requirement.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden bg-amber px-4 py-2 font-display text-sm font-semibold text-rack transition-colors duration-150 hover:bg-[#f0b45a] sm:block"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* mobile menu overlay — staggered link reveal. absolute (not fixed):
          the header's backdrop-blur would make it the containing block for a
          fixed child, collapsing the overlay's height. */}
      <div
        className={`absolute inset-x-0 top-full z-40 flex h-[calc(100dvh-3.5rem)] flex-col bg-rack transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <nav aria-label="Primary mobile" className="flex flex-1 flex-col justify-center gap-2 px-8">
          {links.map(({ to, label }, i) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${100 + i * 90}ms` : '0ms' }}
              className={({ isActive }) =>
                `border-b border-line py-4 font-display text-2xl font-bold tracking-tight transition-all duration-500 ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                } ${isActive ? 'text-amber-strong' : 'text-label'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href={whatsappLink('Hello Al Noor Engineers, I would like to discuss an equipment repair or supply requirement.')}
            target="_blank"
            rel="noopener noreferrer"
            style={{ transitionDelay: open ? `${100 + links.length * 90}ms` : '0ms' }}
            className={`mt-8 inline-flex self-start bg-amber px-6 py-3 font-display text-sm font-semibold text-rack transition-all duration-500 ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            Message on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}

export { SITE }
