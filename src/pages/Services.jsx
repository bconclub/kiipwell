import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Services from '../components/sections/Services'
import Spec from '../components/sections/Spec'
import CoreSupport from '../components/sections/CoreSupport'
import Approach from '../components/sections/Approach'
import CTAStrip from '../components/sections/CTAStrip'
import SectionLabel from '../components/ui/SectionLabel'

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section aria-labelledby="services-hero-heading" className="relative overflow-hidden bg-navy-dark py-20 lg:py-28">
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <img src="/unsplash/lifeskills.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/85 via-navy-dark/90 to-navy-dark/95" />
          </div>
          <div className="container-x relative z-10 max-w-[820px]">
            <SectionLabel number="01" label="Services" white />
            <h1
              id="services-hero-heading"
              className="mt-6 text-[clamp(2.25rem,4.5vw,3.75rem)] font-extrabold text-white tracking-tighter leading-[1.05] mb-6"
            >
              Structured accommodation and specialist support
            </h1>
            <p className="text-[17px] text-white/70 leading-[1.8]">
              A holistic, trauma-informed programme of safe accommodation and tailored support for young people aged 16 to 21, commissioned through local authority and health frameworks across the North East.
            </p>
          </div>
        </section>

        <Services number="02" />
        <Spec number="03" />
        <CoreSupport number="04" />
        <Approach number="05" />
        <CTAStrip />
      </main>
      <Footer />
    </>
  )
}
