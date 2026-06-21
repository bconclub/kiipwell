import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Founder from '../components/sections/Founder'
import Services from '../components/sections/Services'
import Spec from '../components/sections/Spec'
import CoreSupport from '../components/sections/CoreSupport'
import Approach from '../components/sections/Approach'
import Outcomes from '../components/sections/Outcomes'
import Mission from '../components/sections/Mission'
import Safeguarding from '../components/sections/Safeguarding'
import CTAStrip from '../components/sections/CTAStrip'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Founder />
        <Services />
        <Spec />
        <CoreSupport />
        <Approach />
        <Outcomes />
        <Mission />
        <Safeguarding />
        <CTAStrip />
      </main>
      <Footer />
    </>
  )
}
