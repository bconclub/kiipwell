import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowRight } from '../../lib/icons'

const navItems = [
  { label: 'Home', to: '/', live: true },
  { label: 'About', to: '/about', live: false },
  { label: 'Services', to: '/services', live: false },
  { label: 'Safeguarding', to: '/safeguarding', live: false },
  { label: 'Contact', to: '/contact', live: true }
]

function NavItem({ item }) {
  if (!item.live) {
    return (
      <span
        aria-disabled="true"
        title="Coming soon"
        className="text-sm font-medium text-muted/45 px-4 py-2 rounded-full cursor-not-allowed select-none"
      >
        {item.label}
      </span>
    )
  }
  return (
    <NavLink
      to={item.to}
      end={item.to === '/'}
      className={({ isActive }) =>
        `text-sm font-medium px-4 py-2 rounded-full transition-colors ${
          isActive
            ? 'text-navy font-bold bg-offwhite'
            : 'text-muted hover:text-navy hover:bg-offwhite'
        }`
      }
    >
      {item.label}
    </NavLink>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-50 bg-white border-b border-line">
      <div className="container-x h-[80px] flex items-center justify-between gap-8">
        <Link to="/" aria-label="Kiipwell Solutions home" className="flex items-center flex-shrink-0">
          <img src="/logo.png" alt="Kiipwell Solutions" className="h-[60px] w-auto block" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navItems.slice(0, -1).map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
          <NavItem item={navItems[navItems.length - 1]} />
        </nav>

        <div className="hidden lg:block flex-shrink-0">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-dark px-3.5 py-2 rounded-full hover:bg-teal/[0.08] hover:text-navy-dark transition-colors group"
          >
            Make a Referral
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden flex flex-col gap-1 p-2"
        >
          <span className="block w-5 h-[1.5px] bg-navy-dark rounded" />
          <span className="block w-5 h-[1.5px] bg-navy-dark rounded" />
          <span className="block w-5 h-[1.5px] bg-navy-dark rounded" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-b border-line container-px py-3">
          {navItems.map((item) => (
            <div
              key={item.label}
              className={`py-3 border-b border-line text-sm font-semibold ${
                item.live ? 'text-navy-dark' : 'text-muted/45'
              }`}
            >
              {item.live ? (
                <Link to={item.to} onClick={() => setOpen(false)}>{item.label}</Link>
              ) : (
                <span aria-disabled="true">{item.label}</span>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block mt-4 text-center bg-navy-dark text-white font-semibold px-5 py-3 rounded-full"
          >
            Make a Referral
          </Link>
        </div>
      )}
    </header>
  )
}
