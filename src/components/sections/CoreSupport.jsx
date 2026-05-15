import SectionLabel from '../ui/SectionLabel'
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
    <section aria-labelledby="support-heading" className="bg-white py-20 lg:py-32">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((p) => (
            <article
              key={p.label}
              className={`rounded-lg overflow-hidden bg-white shadow-card border flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-cardHover ${
                p.accent ? 'border-teal/35' : 'border-line'
              }`}
            >
              <div className="h-60 overflow-hidden relative">
                <img src={p.img} alt={p.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <div className="w-10 h-10 rounded-full bg-teal-light border border-teal/20 flex items-center justify-center mb-4">
                  <p.icon className="w-4 h-4 text-teal-dark" />
                </div>
                <div className={`text-[11px] font-bold tracking-[0.12em] uppercase mb-2.5 ${p.accent ? 'text-teal-dark' : 'text-navy'}`}>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
