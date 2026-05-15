import SectionLabel from '../ui/SectionLabel'
import IconCircle from '../ui/IconCircle'
import { Sparkle, Activity, Book, Globe } from '../../lib/icons'

const pillars = [
  {
    img: '/unsplash/lifeskills.jpg',
    alt: 'Life skills and independence',
    label: 'Life Skills',
    title: 'Independence Development',
    icon: Sparkle,
    items: ['Budgeting and money management', 'Cooking and daily living', 'Tenancy management']
  },
  {
    img: '/unsplash/wellbeing.jpg',
    alt: 'Health and emotional wellbeing',
    label: 'Health',
    title: 'Wellbeing and Health',
    icon: Activity,
    items: ['Emotional support', 'Trauma-informed care', 'NHS and GP access']
  },
  {
    img: '/unsplash/education.jpg',
    alt: 'Education and training',
    label: 'Education',
    title: 'Education and Employment',
    icon: Book,
    items: ['College and ESOL support', 'Career guidance', 'Volunteering pathways']
  },
  {
    img: '/unsplash/community.jpg',
    alt: 'UASC and community support',
    label: 'UASC',
    title: 'Asylum and Cultural Support',
    icon: Globe,
    accent: true,
    items: ['Legal process support', 'English language development', 'Cultural integration']
  }
]

export default function CoreSupport() {
  return (
    <section aria-labelledby="support-heading" className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <SectionLabel number="04" label="Support Areas" />
            <h2 id="support-heading" className="mt-6 text-[clamp(2rem,3.5vw,3rem)] font-extrabold text-navy-dark tracking-tighter leading-[1.1]">
              Core Support Programme
            </h2>
          </div>
          <p className="text-[15px] text-muted max-w-[400px] leading-[1.7]">
            Each young person receives a tailored programme from four core support areas, reviewed regularly against agreed outcomes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {pillars.map((p) => (
            <article
              key={p.label}
              className={`group relative rounded-2xl overflow-hidden bg-white shadow-card border flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-cardHover ${
                p.accent ? 'border-teal/35' : 'border-line'
              }`}
            >
              <div className="h-60 overflow-hidden relative">
                <img src={p.img} alt={p.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <IconCircle icon={p.icon} size="sm" />
                <div className={`mt-4 text-[11px] font-bold tracking-[0.12em] uppercase mb-2.5 ${p.accent ? 'text-teal-dark' : 'text-navy'}`}>
                  {p.label}
                </div>
                <h3 className="text-base font-bold text-navy-dark tracking-tight mb-3.5">{p.title}</h3>
                <ul className="flex flex-col gap-2">
                  {p.items.map((i) => (
                    <li key={i} className="text-sm text-muted flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal to-teal-dark origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
