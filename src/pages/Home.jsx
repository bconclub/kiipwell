import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Spec from '../components/sections/Spec'
import CoreSupport from '../components/sections/CoreSupport'
import Approach from '../components/sections/Approach'
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
        <Services />
        <Spec />
        <CoreSupport />
        <Approach />
        <Mission />
        <Safeguarding />
        <CTAStrip />
      </main>
      <Footer />
    </>
  )
}
