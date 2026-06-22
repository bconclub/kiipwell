import SectionLabel from '../ui/SectionLabel'
import IconCircle from '../ui/IconCircle'
import { FileText, Users, Phone, UserCheck } from '../../lib/icons'

const cards = [
  {
    icon: FileText,
    title: 'Comprehensive Safeguarding Policies',
    body: 'Up-to-date policies covering child protection, adults at risk, missing persons, county lines, and online safety. Reviewed annually.'
  },
  {
    icon: Users,
    title: 'Enhanced DBS and Vetted Workforce',
    body: 'All staff hold enhanced DBS clearance. Safer recruitment procedures applied including references, employment history verification, and interview assessment.'
  },
  {
    icon: Phone,
    title: 'Clear Referral and Reporting Procedures',
    body: 'Designated Safeguarding Lead in post. All staff trained in recognising and reporting concerns. Clear referral pathways to MASH and children\'s services.'
  },
  {
    icon: UserCheck,
    title: 'Partnership with Statutory and Voluntary Agencies',
    body: 'Strong partnerships with local authority children\'s services, leaving care teams, and voluntary agencies, supported by ongoing monitoring and review to ensure quality and that young people\'s voices are heard.'
  }
]

export default function Safeguarding({ number = '06' }) {
  return (
    <section id="safeguarding" aria-labelledby="sg-heading" className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="max-w-[720px] mb-12 lg:mb-14">
          <SectionLabel number={number} label="Safeguarding" />
          <h2 id="sg-heading" className="mt-6 text-[clamp(2rem,3.5vw,3rem)] font-extrabold text-navy-dark tracking-tighter leading-[1.1] mb-5">
            Our Safeguarding Commitment
          </h2>
          <p className="text-[17px] text-muted leading-[1.7]">
            Safeguarding is a statutory requirement and a central organisational priority. Our policies and staff competencies are maintained to the standard required by commissioning local authorities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((c) => (
            <article
              key={c.title}
              className="bg-offwhite border border-line rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-teal/35 hover:shadow-cardHover"
            >
              <IconCircle icon={c.icon} size="sm" />
              <h3 className="mt-5 text-[17px] font-bold text-navy-dark tracking-tight leading-[1.3] mb-2.5">{c.title}</h3>
              <p className="text-[15px] text-muted leading-[1.7]">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
