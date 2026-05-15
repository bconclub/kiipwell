import SectionLabel from '../ui/SectionLabel'
import { Check } from '../../lib/icons'

const designedFor = [
  'Unaccompanied asylum-seeking children (UASC)',
  'Care leavers transitioning to independence',
  'Young people at risk of homelessness or isolation'
]
const provided = [
  '24/7 supported accommodation',
  'Dedicated key worker',
  'Individual support plan (ISP)',
  'Regular welfare checks',
  'Safe, inspected properties'
]

export default function Spec() {
  return (
    <section aria-labelledby="spec-heading" className="bg-offwhite py-20 lg:py-28">
      <div className="container-x">
        <div className="mb-12 lg:mb-16">
          <SectionLabel number="03" label="Specification" />
          <h2 id="spec-heading" className="mt-6 text-[clamp(2rem,3.5vw,3rem)] font-extrabold text-navy-dark tracking-tighter leading-[1.1] max-w-[640px]">
            Semi-Independent Supported Accommodation
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="relative rounded-2xl overflow-hidden min-h-[360px] shadow-card">
            <img
              src="/unsplash/terrace.jpg"
              alt="Supported accommodation, residential property"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-white/55 mb-1.5">Properties</div>
              <div className="text-[15px] font-bold text-white">North East England</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border-l-[3px] border-l-teal shadow-card p-8 flex flex-col">
            <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-navy mb-5">Designed for</div>
            <div className="flex flex-col">
              {designedFor.map((d, i) => (
                <div key={d} className={`flex items-center gap-3 py-3.5 ${i < designedFor.length - 1 ? 'border-b border-line' : ''}`}>
                  <Check className="w-4 h-4 text-teal flex-shrink-0" />
                  <span className="text-[15px] text-ink">{d}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-card p-8 flex flex-col">
            <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-navy mb-5">What We Provide</div>
            <div className="flex flex-col">
              {provided.map((p, i) => (
                <div key={p} className={`flex justify-between items-center py-3 ${i < provided.length - 1 ? 'border-b border-line' : ''}`}>
                  <span className="text-[15px] text-ink">{p}</span>
                  <span className="text-[11px] font-bold tracking-[0.06em] uppercase text-teal bg-teal/10 px-2 py-1 rounded">Included</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
