import Button from '../ui/Button'
import { ArrowRight } from '../../lib/icons'

export default function CTAStrip() {
  return (
    <section className="bg-gradient-to-br from-teal-dark via-teal-dark to-navy-dark py-16 relative overflow-hidden">
      <div className="container-x">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div>
            <div className="text-xs font-bold tracking-[0.1em] uppercase text-white/60 mb-3">Ready to Refer?</div>
            <h2 className="text-[clamp(1.375rem,2.5vw,1.875rem)] font-extrabold text-white tracking-tight leading-[1.2]">
              Refer a young person or request a service specification
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Button to="/contact" variant="white">
              Make a Referral
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
            <Button to="/contact" variant="outlineWhite">
              Download Service Spec
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
