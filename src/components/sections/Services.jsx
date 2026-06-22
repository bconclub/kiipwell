import SectionLabel from '../ui/SectionLabel'
import IconCircle from '../ui/IconCircle'
import { Home, UserCheck, Sparkle, Activity, Book, Globe } from '../../lib/icons'

const services = [
  { icon: Home, title: 'Safe Semi-Independent Accommodation', body: 'Well-maintained, registered properties with 24/7 staff on-call and regular safety inspections.' },
  { icon: UserCheck, title: 'Dedicated Key Worker Support', body: 'Individual support plans, regular welfare reviews, and coordinated case management tailored to each young person.' },
  { icon: Sparkle, title: 'Life Skills and Independence', body: 'Structured programmes covering budgeting, tenancy management, cooking, and practical daily living skills.' },
  { icon: Activity, title: 'Health and Emotional Wellbeing', body: 'Trauma-informed care, mental health signposting, and NHS access coordination for all residents.' },
  { icon: Book, title: 'Education, Training and Employment', body: 'College enrolment support, ESOL pathways, vocational guidance and volunteering opportunities.' },
  { icon: Globe, title: 'Specialist UASC Support', body: 'Legal appointment support, English language development, cultural integration and asylum process navigation.', accent: true }
]

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-navy-dark py-20 lg:py-28">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-12 lg:mb-16">
          <div>
            <SectionLabel number="02" label="Services" white />
            <h2
              id="services-heading"
              className="mt-6 text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-white tracking-tighter leading-[1.05]"
            >
              What We Offer
            </h2>
          </div>
          <p className="text-base text-white/55 leading-[1.75]">
            A holistic, trauma-informed programme of accommodation and specialist support, building a genuine sense of belonging while delivering meaningful, long-term outcomes. Commissioned through local authority and health frameworks across the North East.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className={`p-8 lg:p-9 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                s.accent
                  ? 'bg-teal/10 border-teal/30 hover:bg-teal/15'
                  : 'bg-white/[0.04] border-white/10 hover:bg-white/[0.08] hover:border-teal/40'
              }`}
            >
              <IconCircle icon={s.icon} size="md" tone="onDark" />
              <h3 className="mt-6 text-[17px] font-bold text-white/95 mb-3 tracking-tight leading-[1.3]">
                {s.title}
              </h3>
              <p className="text-sm text-white/60 leading-[1.75]">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
