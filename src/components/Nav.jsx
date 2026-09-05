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
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-rack/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="Al Noor Engineers — home">
          <Logo className="h-7 w-7 shrink-0" />
          <span className="truncate font-display text-base font-bold tracking-tight">
            Al Noor <span className="text-dim font-medium">Engineers</span>
          </span>
        </Link>

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
            className="bg-amber px-4 py-2 font-display text-sm font-semibold text-rack transition-colors duration-150 hover:bg-[#f0b45a]"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* mobile link row — no hamburger */}
      <nav aria-label="Primary mobile" className="border-t border-line md:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `border px-3 py-2.5 text-sm transition-colors duration-150 ${
                  isActive
                    ? 'border-transparent text-amber-strong'
                    : 'border-transparent text-dim hover:border-amber hover:bg-amber hover:text-black'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}

export { SITE }
