import Button from '../ui/Button'
import IconCircle from '../ui/IconCircle'
import { Users, Clock, Shield, Home as HomeIcon, ArrowRight, Heart } from '../../lib/icons'

const stats = [
  { icon: Users, val: '16 to 21', label: 'Age group supported' },
  { icon: Clock, val: '24/7', label: 'On-call support available' },
  { icon: Shield, val: '100%', label: 'DBS-checked workforce' },
  { icon: HomeIcon, val: 'Tier 3', label: 'Semi-independent placement' }
]

export default function Hero() {
  return (
    <section aria-label="Introduction" className="bg-white">
      <div className="container-x pt-12 lg:pt-16 pb-28 lg:pb-36">
        <div className="grid lg:grid-cols-[5fr_6fr] gap-10 lg:gap-16 items-center">
          <div className="flex flex-col gap-8 lg:gap-10">
            <span
              className="self-start inline-flex items-center px-4 py-1.5 rounded-full bg-teal/10 border border-teal/25 text-[11px] font-bold tracking-[0.16em] uppercase text-teal-dark animate-fadeUp"
              style={{ animationDelay: '50ms' }}
            >
              SAFE. STRUCTURED. SUPPORTED.
            </span>

            <div className="max-w-[580px]">
              <h1
                className="text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold text-navy-dark tracking-tighter leading-[1.05] mb-6 animate-fadeUp"
                style={{ animationDelay: '180ms' }}
              >
                Semi-Independent<br />
                Supported Accommodation<br />
                <span className="text-teal-dark">for Young People</span>
              </h1>
              <div className="w-20 h-1 bg-teal rounded animate-fadeUp mb-6" style={{ animationDelay: '280ms' }} />
              <p
                className="text-base text-muted leading-[1.75] mb-9 max-w-[460px] animate-fadeUp"
                style={{ animationDelay: '360ms' }}
              >
                Kiipwell Solutions is a refugee-led provider of registered, structured accommodation and trauma-informed support for young people aged 16 to 21, including UASC and care leavers, across the North East.
              </p>
              <div className="flex gap-3 flex-wrap animate-fadeUp" style={{ animationDelay: '460ms' }}>
                <Button to="/contact" variant="navy">
                  Make a Referral
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
                <Button href="#services" variant="outline">
                  <Heart className="w-3.5 h-3.5" />
                  View Services
                </Button>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-offwhite min-h-[420px] lg:min-h-[600px]">
            <img
              src="/homepage/hero-photo.webp"
              alt="Support worker in conversation with a young person"
              className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
              loading="eager"
            />
          </div>
        </div>
      </div>

      <div className="container-x relative z-10 -mt-16 sm:-mt-20 lg:-mt-24 pb-16 lg:pb-20">
        <div className="bg-white rounded-2xl border border-navy-dark/[0.06] shadow-float p-5 sm:p-6 lg:px-8 lg:py-7 grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-start text-left gap-3 lg:flex-row lg:items-center lg:gap-4">
              <IconCircle icon={s.icon} size="sm" />
              <div className="min-w-0">
                <div className="text-lg sm:text-xl lg:text-2xl font-extrabold text-navy-dark tracking-tight leading-none">
                  {s.val}
                </div>
                <div className="text-[12px] sm:text-[13px] text-muted mt-1.5 leading-snug">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
