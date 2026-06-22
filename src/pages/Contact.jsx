import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import SectionLabel from '../components/ui/SectionLabel'
import { Mail, Phone, MapPin, Clock, ArrowRight } from '../lib/icons'

const channels = [
  { icon: Mail, label: 'Email', value: 'hello@kiipwellsolutions.co.uk', href: 'mailto:hello@kiipwellsolutions.co.uk' },
  { icon: Phone, label: 'Phone', value: '+44 (0) 191 000 0000', href: 'tel:+441910000000' },
  { icon: MapPin, label: 'Area Covered', value: 'North East England' },
  { icon: Clock, label: 'Availability', value: '24/7 on-call support for placements' }
]

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <section aria-labelledby="contact-hero-heading" className="relative overflow-hidden bg-navy-dark py-20 lg:py-28">
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <img src="/unsplash/community.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/85 via-navy-dark/90 to-navy-dark/95" />
          </div>
          <div className="container-x relative z-10 max-w-[820px]">
            <SectionLabel number="01" label="Contact" white />
            <h1
              id="contact-hero-heading"
              className="mt-6 text-[clamp(2.25rem,4.5vw,3.75rem)] font-extrabold text-white tracking-tighter leading-[1.05] mb-6"
            >
              Make a referral or request a service specification
            </h1>
            <p className="text-[17px] text-white/70 leading-[1.8]">
              Local authorities, social workers, and commissioning teams can reach us directly. We respond promptly to placement enquiries and referrals across the North East.
            </p>
          </div>
        </section>

        <section aria-labelledby="contact-heading" className="bg-white py-20 lg:py-28">
          <div className="container-x">
            <div className="grid lg:grid-cols-[42fr_58fr] gap-10 lg:gap-16">
              {/* Channels */}
              <div>
                <SectionLabel number="02" label="Get in Touch" />
                <h2 id="contact-heading" className="mt-6 text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold text-navy-dark tracking-tighter leading-[1.1] mb-8">
                  How to reach us
                </h2>
                <div className="flex flex-col divide-y divide-line">
                  {channels.map((c) => (
                    <div key={c.label} className="flex gap-4 py-4">
                      <div className="w-11 h-11 rounded-full bg-teal/15 flex items-center justify-center flex-shrink-0">
                        <c.icon className="w-5 h-5 text-teal-dark" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[12px] font-bold tracking-[0.12em] uppercase text-muted mb-1">{c.label}</div>
                        {c.href
                          ? <a href={c.href} className="text-[16px] font-semibold text-navy-dark hover:text-teal-dark break-words">{c.value}</a>
                          : <div className="text-[16px] font-semibold text-navy-dark">{c.value}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Referral form */}
              <div className="bg-offwhite border border-line rounded-2xl p-7 lg:p-9">
                <h3 className="text-xl font-extrabold text-navy-dark tracking-tight mb-1.5">Referral enquiry</h3>
                <p className="text-[15px] text-muted leading-[1.7] mb-7">
                  Share a few details and our team will respond to discuss the placement.
                </p>
                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Your name" id="name" />
                    <Field label="Organisation" id="org" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Email" id="email" type="email" />
                    <Field label="Phone" id="phone" type="tel" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-[13px] font-semibold text-navy-dark">Details of enquiry</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 resize-y"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 mt-1 bg-navy-dark text-white font-semibold text-[15px] px-7 py-3 rounded-full shadow-[0_4px_14px_rgba(10,31,77,0.20)] hover:bg-navy transition-all"
                  >
                    Send enquiry
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[12px] text-muted leading-snug">
                    For urgent placements, please call us directly using the number opposite.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function Field({ label, id, type = 'text' }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[13px] font-semibold text-navy-dark">{label}</label>
      <input
        id={id}
        type={type}
        className="rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
      />
    </div>
  )
}
