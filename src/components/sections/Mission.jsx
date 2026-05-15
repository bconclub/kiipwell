import Button from '../ui/Button'
import { ArrowRight } from '../../lib/icons'

export default function Mission() {
  return (
    <section aria-labelledby="mission-heading" className="bg-navy-dark py-24 lg:py-32 relative overflow-hidden">
      <div className="container-x text-center max-w-[820px]">
        <div className="inline-flex items-center justify-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase text-teal mb-6">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          Statement of Purpose
        </div>
        <h2 id="mission-heading" className="text-[clamp(1.875rem,3.5vw,3rem)] font-extrabold text-white tracking-tighter leading-[1.2] mb-8">
          "To provide safe, registered accommodation where young people can develop the skills and confidence needed for independent living."
        </h2>
        <div className="h-px bg-white/15 mx-auto max-w-[300px] mb-8" />
        <p className="text-[15px] text-white/55 leading-[1.8] max-w-[580px] mx-auto mb-10">
          Committed to outcomes-focused delivery, collaborative working with commissioning bodies, and continuous improvement through feedback and inspection readiness.
        </p>
        <Button to="/contact" variant="white">
          Discuss a Placement
          <ArrowRight className="w-3.5 h-3.5" />
        </Button>
      </div>
    </section>
  )
}
