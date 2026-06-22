import SectionLabel from '../ui/SectionLabel'
import IconCircle from '../ui/IconCircle'
import { Target, ShieldCheck, Globe, Users, Heart, UserCheck } from '../../lib/icons'

const items = [
  {
    num: '01',
    icon: Target,
    title: 'Person-Centred Planning',
    body: 'Every support plan is built around the individual: their history, goals, language needs, and pace. Reviews are completed regularly with active participation from the young person.',
    footerIcon: Users,
    footer: 'Built around the individual'
  },
  {
    num: '02',
    icon: ShieldCheck,
    title: 'Trauma-Informed Practice',
    body: 'All staff are trained in trauma-informed approaches. Our environment and interactions are designed to build safety and trust, recognising the weight of adverse experience.',
    footerIcon: Heart,
    footer: 'Safety, trust and understanding'
  },
  {
    num: '03',
    icon: Globe,
    title: 'Culturally Responsive Delivery',
    body: 'We employ staff with lived experience of the asylum journey. Support is delivered with genuine understanding of language barriers, cultural norms, and religious observance.',
    footerIcon: UserCheck,
    footer: 'Respect, inclusion and belonging'
  }
]

export default function Approach({ number = '05' }) {
  return (
    <section aria-labelledby="approach-heading" className="relative overflow-hidden bg-white py-14 lg:py-20">
      <div className="absolute right-0 top-0 hidden h-[420px] w-[68%] lg:block" aria-hidden="true">
        <img
          src="/homepage/mentor-young-person.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-white" />
      </div>

      <div className="container-x relative z-10">
        <div className="max-w-[520px] mb-10 lg:mb-12">
          <SectionLabel number={number} label="Methodology" />
          <h2 id="approach-heading" className="mt-7 text-[clamp(2.25rem,4.2vw,4rem)] font-extrabold text-navy-dark tracking-tighter leading-[0.98] mb-6">
            Our Approach to Supported Living
          </h2>
          <div className="w-16 h-1 bg-teal rounded mb-6" />
          <p className="text-[17px] sm:text-[18px] text-muted leading-[1.65] max-w-[420px]">
            Three principles that guide every placement, every plan, and every interaction.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-7">
          {items.map((it) => (
            <article
              key={it.num}
              className="bg-white border border-navy-dark/[0.06] rounded-2xl shadow-card p-8 lg:p-10 min-h-[340px] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover"
            >
              <div className="text-sm font-extrabold tracking-widest text-teal-dark mb-6">{it.num}</div>
              <IconCircle icon={it.icon} size="lg" />
              <h3 className="mt-7 text-xl font-extrabold text-navy-dark tracking-tight mb-4 leading-[1.2]">{it.title}</h3>
              <div className="w-12 h-0.5 bg-teal rounded mb-5" />
              <p className="text-[15px] text-muted leading-[1.7] flex-1">{it.body}</p>
              <div className="mt-7 flex items-center gap-3 text-sm font-bold text-teal-dark">
                <it.footerIcon className="w-5 h-5 flex-shrink-0" />
                <span>{it.footer}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 bg-teal/10 rounded-2xl px-6 py-5 lg:px-8 flex flex-col sm:flex-row sm:items-center gap-4">
          <IconCircle icon={ShieldCheck} size="sm" />
          <p className="text-[15px] text-muted leading-[1.6]">
            <span className="font-extrabold text-teal-dark">Ethical. Consistent. Outcomes-Focused.</span>
            <span className="hidden sm:inline"> </span>
            Our approach ensures every young person receives safe, high-quality support that promotes stability and independence.
          </p>
        </div>
      </div>
    </section>
  )
}
