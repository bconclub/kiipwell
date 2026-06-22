import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Founder from '../components/sections/Founder'
import Outcomes from '../components/sections/Outcomes'
import CTAStrip from '../components/sections/CTAStrip'
import SectionLabel from '../components/ui/SectionLabel'
import { Users, Sparkle, Book, Heart, Globe } from '../lib/icons'

const stats = [
  { value: '20+ yrs', label: 'Supporting asylum seekers and refugees' },
  { value: '16 yrs', label: 'Housing association management experience' },
  { value: 'Refugee-led', label: 'Rooted in lived experience' }
]

const community = [
  { icon: Users, title: 'Regular Group Activities', body: 'Shared experiences that build connection, routine, and a sense of purpose.' },
  { icon: Heart, title: 'Shared Meals', body: 'Coming together around food to foster belonging and everyday community.' },
  { icon: Globe, title: 'Cultural and Religious Identity', body: 'Celebrating identities that transcend nationality, culture, and faith.' }
]

const opportunity = [
  { icon: Book, title: 'Education', body: 'Access to school, college, and ESOL provision tailored to each young person.' },
  { icon: Sparkle, title: 'Employment Pathways', body: 'Guidance into training, volunteering, and work opportunities.' },
  { icon: Users, title: 'Life Skills', body: 'Budgeting, cooking, tenancy responsibilities, and daily living.' },
  { icon: Heart, title: 'Emotional Wellbeing', body: 'Trauma-informed support that builds resilience and confidence.' }
]

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section aria-labelledby="about-hero-heading" className="relative overflow-hidden bg-navy-dark py-20 lg:py-28">
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <img src="/unsplash/about.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/85 via-navy-dark/90 to-navy-dark/95" />
          </div>
          <div className="container-x relative z-10 max-w-[820px]">
            <SectionLabel number="01" label="About Us" white />
            <h1
              id="about-hero-heading"
              className="mt-6 text-[clamp(2.25rem,4.5vw,3.75rem)] font-extrabold text-white tracking-tighter leading-[1.05] mb-6"
            >
              A refugee-led approach,<br className="hidden sm:inline" /> rooted in lived experience
            </h1>
            <p className="text-[17px] text-white/70 leading-[1.8]">
              We bring extensive experience in supporting young people seeking asylum, delivered through a highly skilled and dedicated workforce. Over time we have developed a sustainable, community-focused model that delivers meaningful, long-term outcomes for the young people we serve.
            </p>
          </div>
        </section>

        {/* Who we are */}
        <section aria-labelledby="who-heading" className="bg-white py-20 lg:py-28">
          <div className="container-x">
            <div className="grid lg:grid-cols-[55fr_45fr] gap-10 lg:gap-16 items-center">
              <div className="relative rounded-2xl overflow-hidden bg-offwhite min-h-[360px] lg:min-h-[480px] order-2 lg:order-1">
                <img src="/unsplash/about.jpg" alt="Kiipwell support team in discussion" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="order-1 lg:order-2">
                <SectionLabel number="02" label="Who We Are" />
                <h2 id="who-heading" className="mt-6 text-[clamp(2rem,3.5vw,3rem)] font-extrabold text-navy-dark tracking-tighter leading-[1.1] mb-6">
                  Trusted, informed, and close to community
                </h2>
                <p className="text-base text-ink leading-[1.8] mb-5">
                  Our approach is rooted in lived experience. We are not only closely connected to refugee-led networks, but are a refugee-led organisation ourselves. This distinctive position enables us to build trust and engage effectively with some of the most vulnerable young people, including those who may be isolated, distrustful of statutory systems, or unable to access mainstream provision.
                </p>
                <p className="text-base text-muted leading-[1.8] mb-8">
                  We are committed to creating safe, inclusive, and empowering environments where young people aged 16 to 21 can rebuild confidence, access opportunities, and thrive within their communities.
                </p>
                <div className="grid grid-cols-3 gap-4 border-t border-line pt-7">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-2xl lg:text-3xl font-extrabold text-navy-dark tracking-tight">{s.value}</div>
                      <div className="text-[12px] text-muted leading-snug mt-1.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community approach */}
        <section aria-labelledby="community-heading" className="bg-offwhite py-20 lg:py-28">
          <div className="container-x">
            <div className="max-w-[720px] mb-12 lg:mb-14">
              <SectionLabel number="03" label="Community" />
              <h2 id="community-heading" className="mt-6 text-[clamp(2rem,3.5vw,3rem)] font-extrabold text-navy-dark tracking-tighter leading-[1.1] mb-5">
                Our Community Approach
              </h2>
              <p className="text-[17px] text-muted leading-[1.7]">
                We create safe, welcoming, and inclusive communities that transcend nationality, culture, and faith. Our stable and nurturing housing provision offers young people a genuine sense of home, promoting emotional wellbeing and positive transitions towards independence.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-5 lg:gap-6">
              {community.map((c) => (
                <article key={c.title} className="bg-white border border-line rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal/35 hover:shadow-cardHover">
                  <div className="w-11 h-11 rounded-full bg-teal/15 flex items-center justify-center mb-5">
                    <c.icon className="w-5 h-5 text-teal-dark" />
                  </div>
                  <h3 className="text-[17px] font-bold text-navy-dark tracking-tight mb-2.5 leading-[1.3]">{c.title}</h3>
                  <p className="text-[15px] text-muted leading-[1.7]">{c.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Supporting independence and opportunity */}
        <section aria-labelledby="opportunity-heading" className="bg-white py-20 lg:py-28">
          <div className="container-x">
            <div className="max-w-[720px] mb-12 lg:mb-14">
              <SectionLabel number="04" label="Opportunity" />
              <h2 id="opportunity-heading" className="mt-6 text-[clamp(2rem,3.5vw,3rem)] font-extrabold text-navy-dark tracking-tighter leading-[1.1] mb-5">
                Supporting Independence and Opportunity
              </h2>
              <p className="text-[17px] text-muted leading-[1.7]">
                Our holistic, trauma-informed approach empowers young people to rebuild confidence, reconnect with a sense of purpose, and shape positive, independent futures rooted in dignity and opportunity.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {opportunity.map((o) => (
                <article key={o.title} className="bg-offwhite border border-line rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-teal/35 hover:shadow-cardHover">
                  <div className="w-11 h-11 rounded-full bg-teal/15 flex items-center justify-center mb-5">
                    <o.icon className="w-5 h-5 text-teal-dark" />
                  </div>
                  <h3 className="text-[17px] font-bold text-navy-dark tracking-tight mb-2.5 leading-[1.3]">{o.title}</h3>
                  <p className="text-[15px] text-muted leading-[1.7]">{o.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Founder />
        <Outcomes />
        <CTAStrip />
      </main>
      <Footer />
    </>
  )
}
