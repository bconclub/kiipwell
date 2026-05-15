import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from '../../lib/icons'

const services = [
  { label: 'Supported Accommodation', href: '#services' },
  { label: 'Life Skills Programme', href: '#services' },
  { label: 'UASC Specialist Support', href: '#services' },
  { label: 'Safeguarding', to: '/safeguarding', disabled: true }
]
const org = [
  { label: 'About Us', to: '/about', disabled: true },
  { label: 'Our Approach', href: '#approach' },
  { label: 'Contact', to: '/contact' }
]

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-navy-dark pt-14 pb-8 border-t border-white/[0.06]">
      <div className="container-x">
        <div className="grid lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 pb-10 border-b border-white/[0.08] mb-10">
          <div>
            <img src="/logo.png" alt="Kiipwell Solutions" className="h-12 w-auto mb-4 brightness-0 invert" />
            <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-teal mb-4">
              Registered Supported Accommodation Provider
            </div>
            <p className="text-sm text-white/45 leading-[1.7] max-w-[280px]">
              Semi-independent supported accommodation for young people aged 16 to 21. North East England.
            </p>
          </div>

          <FooterColumn title="Services">
            {services.map((s) => (
              <FooterLink key={s.label} {...s} />
            ))}
          </FooterColumn>

          <FooterColumn title="Organisation">
            {org.map((s) => (
              <FooterLink key={s.label} {...s} />
            ))}
          </FooterColumn>

          <FooterColumn title="Contact">
            <li className="flex items-center gap-2.5 text-sm text-white/45">
              <Mail className="w-3.5 h-3.5 text-teal flex-shrink-0" />
              <a href="mailto:hello@kiipwellsolutions.co.uk" className="hover:text-white">hello@kiipwellsolutions.co.uk</a>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-white/45">
              <Phone className="w-3.5 h-3.5 text-teal flex-shrink-0" />
              <span>+44 (0) 191 000 0000</span>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-white/45">
              <MapPin className="w-3.5 h-3.5 text-teal flex-shrink-0" />
              <span>North East England</span>
            </li>
          </FooterColumn>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-white/25">© 2026 Kiipwell Solutions. All rights reserved. Registered in England and Wales.</p>
          <div className="flex flex-wrap gap-5">
            <a href="#" className="text-xs text-white/25 hover:text-white">Privacy Notice</a>
            <a href="#" className="text-xs text-white/25 hover:text-white">Safeguarding Policy</a>
            <a href="#" className="text-xs text-white/25 hover:text-white">Accessibility Statement</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/50 mb-4">{title}</div>
      <ul className="flex flex-col gap-2.5">{children}</ul>
    </div>
  )
}

function FooterLink({ label, href, to, disabled }) {
  if (disabled) {
    return <li><span className="text-sm text-white/25 cursor-not-allowed">{label}</span></li>
  }
  if (to) {
    return <li><Link to={to} className="text-sm text-white/45 hover:text-white">{label}</Link></li>
  }
  return <li><a href={href} className="text-sm text-white/45 hover:text-white">{label}</a></li>
}
