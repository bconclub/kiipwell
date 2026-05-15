import SectionLabel from '../ui/SectionLabel'
import { Target, ShieldCheck, Globe } from '../../lib/icons'

const items = [
  {
    num: '01',
    icon: Target,
    title: 'Person-Centred Planning',
    body: 'Every support plan is built around the individual: their history, goals, language needs, and pace. Reviews held regularly with active participation from the young person.'
  },
  {
    num: '02',
    icon: ShieldCheck,
    title: 'Trauma-Informed Practice',
    body: 'All staff trained in trauma-informed approaches. Our environment and interactions are designed to build safety and trust, recognising the weight of adverse experience.'
  },
  {
    num: '03',
    icon: Globe,
    title: 'Culturally Responsive Delivery',
    body: 'We employ staff with lived experience of the asylum journey. Support is delivered with genuine understanding of language barriers, cultural norms, and religious observance.'
  }
]

export default function Approach() {
  return (
    <section aria-labelledby="approach-heading" className="bg-offwhite py-20 lg:py-28">
      <div className="container-x">
        <div className="mb-12 lg:mb-16 max-w-[720px]">
          <SectionLabel number="05" label="Methodology" />
          <h2 id="approach-heading" className="mt-6 text-[clamp(2rem,3.5vw,3rem)] font-extrabold text-navy-dark tracking-tighter leading-[1.1] mb-5">
            Our Approach to Supported Living
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] max-w-[580px]">
            Three principles that guide every placement, every plan, and every interaction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <article
              key={it.num}
              className="bg-white border border-line rounded-lg p-9 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_16px_36px_rgba(27,58,140,0.08)]"
            >
              <div className="text-xs font-extrabold tracking-widest text-teal-dark mb-5">{it.num}</div>
              <div className="w-11 h-11 rounded-full bg-teal-light border border-teal/20 flex items-center justify-center mb-6">
                <it.icon className="w-[18px] h-[18px] text-teal-dark" />
              </div>
              <h3 className="text-lg font-bold text-navy-dark tracking-tight mb-3 leading-[1.3]">{it.title}</h3>
              <p className="text-[15px] text-muted leading-[1.7]">{it.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
