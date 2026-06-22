import SectionLabel from '../ui/SectionLabel'
import IconCircle from '../ui/IconCircle'
import { Book, ShieldCheck, Globe } from '../../lib/icons'

const credentials = [
  {
    icon: Book,
    title: 'Academic Background',
    body: 'Master of Accountancy from Bowling Green State University, Ohio, specialising in investigative auditing, financial reporting, governance, risk, and compliance. BA in Accounting from Middlesex University, London.'
  },
  {
    icon: ShieldCheck,
    title: 'Governance and Compliance',
    body: 'Strong technical expertise in financial controls, governance, and risk management, supporting the organisation to maintain robust compliance frameworks and high standards of accountability.'
  },
  {
    icon: Globe,
    title: 'Lived Experience',
    body: 'As a former refugee, Abdi brings a profound depth of lived insight, offering a nuanced understanding of the challenges faced by the individuals and communities we serve.'
  }
]

export default function Founder({ number = '05' }) {
  return (
    <section id="founder" aria-labelledby="founder-heading" className="bg-offwhite py-20 lg:py-28">
      <div className="container-x">
        <div className="grid lg:grid-cols-[40fr_60fr] gap-10 lg:gap-16 items-start">
          {/* Profile card */}
          <div className="lg:sticky lg:top-28">
            <SectionLabel number={number} label="Leadership" />
            <h2
              id="founder-heading"
              className="mt-6 text-[clamp(2rem,3.5vw,3rem)] font-extrabold text-navy-dark tracking-tighter leading-[1.1] mb-7"
            >
              Founder Profile
            </h2>

            <div className="bg-navy-dark rounded-2xl overflow-hidden">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="/founder-abdi.jpg"
                  alt="Abdi, Founder of Kiipwell Solutions"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6">
                  <div className="text-2xl font-extrabold text-white tracking-tight">Abdi</div>
                  <div className="text-[12px] font-bold tracking-[0.14em] uppercase text-teal mt-1">Founder</div>
                </div>
              </div>
              <p className="text-[15px] text-white/70 leading-[1.8] p-8 lg:p-9">
                Abdi leads Kiipwell Solutions with a rare combination of professional financial expertise and the lived experience of seeking sanctuary, grounding the organisation in both rigour and genuine understanding.
              </p>
            </div>
          </div>

          {/* Credentials */}
          <div className="flex flex-col gap-5 lg:gap-6 lg:pt-2">
            {credentials.map((c) => (
              <article
                key={c.title}
                className="bg-white border border-line rounded-2xl p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-teal/35 hover:shadow-cardHover"
              >
                <div className="flex items-start gap-5">
                  <IconCircle icon={c.icon} size="sm" />
                  <div>
                    <h3 className="text-[17px] font-bold text-navy-dark tracking-tight mb-2.5">{c.title}</h3>
                    <p className="text-[15px] text-muted leading-[1.7]">{c.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
