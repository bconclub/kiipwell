import SectionLabel from '../ui/SectionLabel'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="grid lg:grid-cols-[55fr_45fr] gap-10 lg:gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden bg-offwhite min-h-[360px] lg:min-h-[480px] order-2 lg:order-1">
            <img
              src="/unsplash/about.jpg"
              alt="Kiipwell support team in discussion"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionLabel number="01" label="Organisation" />
            <h2
              id="about-heading"
              className="mt-6 text-[clamp(2rem,3.5vw,3rem)] font-extrabold text-navy-dark tracking-tighter leading-[1.1] mb-6"
            >
              Who We Are
            </h2>
            <p className="text-base text-ink leading-[1.8] mb-5">
              Kiipwell Solutions is a supported housing provider operating in the North East of England. We work exclusively with young people aged 16 to 21, including unaccompanied asylum-seeking children (UASC), care leavers, and young people at risk of homelessness or social isolation.
            </p>
            <p className="text-base text-muted leading-[1.8]">
              Our team combines professional backgrounds in housing management, safeguarding, and statutory youth support with direct lived experience of the asylum process, enabling a uniquely informed approach.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
