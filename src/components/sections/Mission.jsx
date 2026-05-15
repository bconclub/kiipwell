import { Star, Shield, Users, FileText, Heart, Home } from '../../lib/icons'

const trustItems = [
  { icon: Shield, line1: 'Local Authority', line2: 'Ready' },
  { icon: Users, line1: 'Safeguarding', line2: 'First' },
  { icon: FileText, line1: 'Ofsted', line2: 'Prepared' },
  { icon: Heart, line1: 'Outcomes', line2: 'Focused' },
  { icon: Home, line1: 'UASC Specialist', line2: 'Support' }
]

export default function Mission() {
  return (
    <section aria-labelledby="mission-heading" className="relative overflow-hidden py-20 lg:py-28 bg-navy-dark">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="/unsplash/about.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/85 via-navy-dark/90 to-navy-dark/95" />
      </div>

      <div className="container-x relative z-10">
        <div className="text-center max-w-[920px] mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center mb-8 lg:mb-10">
            <Star className="w-4 h-4 text-teal mb-2.5" />
            <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-teal mb-3">
              Statement of Purpose
            </div>
            <div className="w-10 h-px bg-teal/50" />
          </div>

          {/* Big quote */}
          <h2
            id="mission-heading"
            className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-normal italic text-white leading-[1.35] mb-8 lg:mb-10"
          >
            <span className="text-teal not-italic mr-1" aria-hidden="true">&ldquo;</span>
            To provide safe, registered accommodation where young people can develop the skills and confidence needed for independent living.
            <span className="text-teal not-italic ml-1" aria-hidden="true">&rdquo;</span>
          </h2>

          <div className="w-16 h-px bg-teal/40 mx-auto mb-8 lg:mb-10" />

          {/* Supporting */}
          <p className="text-[15px] text-white/70 leading-[1.85] max-w-[620px] mx-auto mb-10 lg:mb-12">
            We work collaboratively with local authorities, health teams, and commissioning bodies to deliver safe, outcomes-focused supported accommodation across the North East.
          </p>

          {/* Signature */}
          <img
            src="/logo.png"
            alt="Kiipwell Solutions"
            className="h-[66px] lg:h-[72px] w-auto mx-auto mb-4 brightness-0 invert opacity-95"
            loading="lazy"
          />
          <div className="text-[10px] font-bold tracking-[0.28em] uppercase text-white/50">
            Committed to Better Outcomes
          </div>
        </div>

        {/* Trust pillars row */}
        <div className="mt-14 lg:mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-8 lg:gap-x-0 max-w-[1100px] mx-auto">
          {trustItems.map((t, i) => (
            <div
              key={`${t.line1}-${t.line2}`}
              className={`flex items-center justify-center gap-3 px-2 ${
                i < trustItems.length - 1 ? 'lg:border-r lg:border-white/12' : ''
              }`}
            >
              <t.icon className="w-7 h-7 text-teal flex-shrink-0" />
              <div className="text-left text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase text-white/85 leading-tight">
                {t.line1}
                <br />
                {t.line2}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
