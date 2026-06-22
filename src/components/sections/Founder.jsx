import SectionLabel from '../ui/SectionLabel'
import IconCircle from '../ui/IconCircle'
import { Book, ShieldCheck, Globe, UserCheck, Users } from '../../lib/icons'

const founders = [
  {
    name: 'Abdi',
    role: 'Founder',
    photo: '/founder-abdi.jpg',
    lead: 'Abdi leads Kiipwell Solutions with a rare combination of professional financial expertise and the lived experience of seeking sanctuary, grounding the organisation in both rigour and genuine understanding.',
    credentials: [
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
  },
  {
    name: 'Jama',
    role: 'Founder',
    photo: null,
    lead: 'Jama brings extensive experience in support services, leadership, and community engagement, built through both professional employment and voluntary work across the North East.',
    credentials: [
      {
        icon: Book,
        title: 'Academic Background',
        body: 'MSc in Aviation Management, BA (Hons) in Airline and Airport Management, a Foundation Degree in Airline and Airport Management, and a Level 4 qualification in Aviation Security and Cargo.'
      },
      {
        icon: UserCheck,
        title: 'Professional Experience',
        body: 'Client Services Manager at Home Group, where he has worked for over 10 years across roles including Concierge and Support Worker. His earlier role at Northeast Rise supported refugees moving from asylum accommodation into independent living, community integration, and employment.'
      },
      {
        icon: Users,
        title: 'Community and Network',
        body: 'A strong network across Tyne and Wear and trusted relationships with communities, landlords, local authorities, and stakeholders. Jama serves as a trustee for two charities, including Investing in People and Culture (IPC) in Newcastle.'
      },
      {
        icon: Globe,
        title: 'Lived Experience',
        body: 'Through both his professional background and lived experience, Jama understands the challenges and support needs of vulnerable young people, including unaccompanied asylum-seeking children.'
      }
    ]
  }
]

function ProfileCard({ founder }) {
  return (
    <div className="bg-navy-dark rounded-2xl p-8 lg:p-9">
      <div className="flex items-center gap-5 mb-6">
        {founder.photo ? (
          <img
            src={founder.photo}
            alt={`${founder.name}, ${founder.role} of Kiipwell Solutions`}
            className="w-24 h-28 rounded-xl object-cover object-top flex-shrink-0 ring-1 ring-white/15"
            loading="lazy"
          />
        ) : (
          <div className="w-24 h-28 rounded-xl bg-teal/15 border border-teal/30 flex items-center justify-center flex-shrink-0">
            <span className="text-3xl font-extrabold text-teal tracking-tight">{founder.name[0]}</span>
          </div>
        )}
        <div>
          <div className="text-2xl font-extrabold text-white tracking-tight">{founder.name}</div>
          <div className="text-[12px] font-bold tracking-[0.14em] uppercase text-teal mt-1">{founder.role}</div>
        </div>
      </div>
      <p className="text-[15px] text-white/70 leading-[1.8]">{founder.lead}</p>
    </div>
  )
}

export default function Founder({ number = '05' }) {
  return (
    <section id="founder" aria-labelledby="founder-heading" className="bg-offwhite py-20 lg:py-28">
      <div className="container-x">
        <div className="max-w-[720px] mb-12 lg:mb-16">
          <SectionLabel number={number} label="Leadership" />
          <h2
            id="founder-heading"
            className="mt-6 text-[clamp(2rem,3.5vw,3rem)] font-extrabold text-navy-dark tracking-tighter leading-[1.1]"
          >
            Our Founders
          </h2>
        </div>

        <div className="flex flex-col gap-14 lg:gap-20">
          {founders.map((f) => (
            <div key={f.name} className="grid lg:grid-cols-[40fr_60fr] gap-10 lg:gap-16 items-start">
              <div className="lg:sticky lg:top-28">
                <ProfileCard founder={f} />
              </div>
              <div className="flex flex-col gap-5 lg:gap-6 lg:pt-1">
                {f.credentials.map((c) => (
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
          ))}
        </div>
      </div>
    </section>
  )
}
