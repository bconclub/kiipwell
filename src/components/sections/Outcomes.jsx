import SectionLabel from '../ui/SectionLabel'
import { Sparkle, Book, Heart, Users, ArrowRight } from '../../lib/icons'

const outcomes = [
  { icon: Sparkle, title: 'Increased Independence', body: 'Stronger life skills and the confidence to manage a home, budget, and daily living.' },
  { icon: Book, title: 'Education and Employment', body: 'Engagement in education, training, or employment through clear, supported pathways.' },
  { icon: Heart, title: 'Improved Wellbeing', body: 'Better emotional wellbeing built on stability, safety, and trauma-informed support.' },
  { icon: Users, title: 'Community Connection', body: 'Stronger community connections, reduced isolation, and a genuine sense of belonging.' }
]

export default function Outcomes() {
  return (
    <section id="outcomes" aria-labelledby="outcomes-heading" className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="max-w-[720px] mb-12 lg:mb-14">
          <SectionLabel number="06" label="Impact" />
          <h2 id="outcomes-heading" className="mt-6 text-[clamp(2rem,3.5vw,3rem)] font-extrabold text-navy-dark tracking-tighter leading-[1.1] mb-5">
            Outcomes and Impact
          </h2>
          <p className="text-[17px] text-muted leading-[1.7]">
            Our service is focused on achieving positive, lasting outcomes. We regularly review support plans to ensure progress and adapt to each young person's changing needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {outcomes.map((o) => (
            <article
              key={o.title}
              className="bg-offwhite border border-line rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-teal/35 hover:shadow-cardHover"
            >
              <div className="w-11 h-11 rounded-full bg-teal/15 flex items-center justify-center mb-5">
                <o.icon className="w-5 h-5 text-teal-dark" />
              </div>
              <h3 className="text-[17px] font-bold text-navy-dark tracking-tight mb-2.5 leading-[1.3]">{o.title}</h3>
              <p className="text-[15px] text-muted leading-[1.7]">{o.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 bg-navy-dark rounded-2xl px-7 py-6 lg:px-9 flex flex-col sm:flex-row sm:items-center gap-4">
          <ArrowRight className="w-6 h-6 text-teal flex-shrink-0" />
          <p className="text-[15px] text-white/80 leading-[1.7]">
            <span className="font-extrabold text-white">Successful transition into adulthood.</span>{' '}
            Every young person is supported to leave our care more independent, connected, and prepared for a positive future.
          </p>
        </div>
      </div>
    </section>
  )
}
