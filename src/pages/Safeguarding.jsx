import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Safeguarding from '../components/sections/Safeguarding'
import Approach from '../components/sections/Approach'
import CTAStrip from '../components/sections/CTAStrip'
import SectionLabel from '../components/ui/SectionLabel'

export default function SafeguardingPage() {
  return (
    <>
      <Header />
      <main>
        <section aria-labelledby="sg-hero-heading" className="relative overflow-hidden bg-navy-dark py-20 lg:py-28">
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <img src="/unsplash/wellbeing.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/85 via-navy-dark/90 to-navy-dark/95" />
          </div>
          <div className="container-x relative z-10 max-w-[820px]">
            <SectionLabel number="01" label="Safeguarding" white />
            <h1
              id="sg-hero-heading"
              className="mt-6 text-[clamp(2.25rem,4.5vw,3.75rem)] font-extrabold text-white tracking-tighter leading-[1.05] mb-6"
            >
              Protecting young people from harm
            </h1>
            <p className="text-[17px] text-white/70 leading-[1.8]">
              Safeguarding is central to everything we do. We are committed to protecting young people and promoting their wellbeing through clear policies, trained staff, strong partnerships, and ongoing monitoring and review.
            </p>
          </div>
        </section>

        <Safeguarding number="02" />
        <Approach number="03" />
        <CTAStrip />
      </main>
      <Footer />
    </>
  )
}
