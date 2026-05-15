import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'
import { Check, Shield, BuildingLibrary, Download, MapPin } from '../../lib/icons'

const designedFor = [
  {
    title: 'Unaccompanied asylum-seeking children (UASC)',
    desc: 'Providing a safe, stable environment.'
  },
  {
    title: 'Care leavers transitioning to independence',
    desc: 'Supporting the next step with confidence.'
  },
  {
    title: 'Young people at risk of homelessness or isolation',
    desc: 'Offering stability, reassurance and tailored support.'
  }
]

const provided = [
  '24/7 Supported Accommodation',
  'Dedicated Key Worker',
  'Individual Support Plan (ISP)',
  'Regular Welfare Checks',
  'Safe, Inspected Properties',
  'Life Skills & Independence Support'
]

export default function Spec() {
  return (
    <section aria-labelledby="spec-heading" className="bg-[#F2F7F6] py-20 lg:py-28">
      <div className="container-x">
        {/* Header: title + trust badges */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-12 lg:mb-14">
          <div className="max-w-[640px]">
            <SectionLabel number="03" label="Specification" />
            <h2
              id="spec-heading"
              className="mt-6 text-[clamp(2rem,3.5vw,3.25rem)] font-extrabold text-navy-dark tracking-tighter leading-[1.1] mb-5"
            >
              Safe, Structured Supported Accommodation
            </h2>
            <p className="text-base text-muted leading-[1.7] max-w-[520px]">
              High quality semi-independent homes with tailored support, helping young people build stability and confidence for the future.
            </p>
          </div>

          <div className="flex items-center gap-6 flex-shrink-0">
            <TrustBadge icon={Shield} title="Registered Tier 3 Placement" desc="Regulated and inspected to national standards" />
            <div className="h-12 w-px bg-teal/25" />
            <TrustBadge icon={BuildingLibrary} title="Designed for Local Authorities" desc="Trusted partner for councils across the North East" />
          </div>
        </div>

        {/* 3-col grid: photo / designed for / what we provide */}
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6">
          {/* Property image */}
          <div className="relative rounded-2xl overflow-hidden min-h-[460px] lg:min-h-[520px]">
            <img
              src="/unsplash/terrace.jpg"
              alt="Supported accommodation, residential property"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/55 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-[0.12em] uppercase text-teal mb-1.5">
                <MapPin className="w-3 h-3" />
                Properties Across
              </div>
              <div className="text-xl lg:text-2xl font-extrabold text-white tracking-tight">
                North East England
              </div>
            </div>
          </div>

          {/* Designed for */}
          <div className="bg-white rounded-2xl p-7 lg:p-8">
            <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-teal-dark pb-4 border-b border-teal/20">
              Designed for
            </div>
            <div className="flex flex-col divide-y divide-line">
              {designedFor.map((d) => (
                <div key={d.title} className="flex gap-3 py-4">
                  <div className="w-7 h-7 rounded-full bg-teal/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-teal-dark" />
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-navy-dark leading-snug mb-1">{d.title}</div>
                    <div className="text-[13px] text-muted leading-snug">{d.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What we provide */}
          <div className="bg-white rounded-2xl p-7 lg:p-8">
            <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-teal-dark pb-4 border-b border-teal/20">
              What We Provide
            </div>
            <div className="flex flex-col divide-y divide-line">
              {provided.map((p) => (
                <div key={p} className="flex items-center gap-3 py-3.5">
                  <div className="w-7 h-7 rounded-full bg-teal/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-teal-dark" />
                  </div>
                  <div className="text-[15px] font-semibold text-navy-dark">{p}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom trust strip */}
        <div className="mt-12 lg:mt-14 bg-teal/[0.10] rounded-2xl p-6 lg:p-7 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <Shield className="w-6 h-6 text-navy-dark" />
            </div>
            <div className="max-w-[680px]">
              <div className="text-[17px] lg:text-lg font-bold text-navy-dark mb-1 tracking-tight">
                Trusted by Local Authorities Across the North East
              </div>
              <div className="text-sm text-muted leading-snug">
                Committed to safeguarding, quality and positive outcomes for every young person in our care.
              </div>
            </div>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-teal-dark bg-white border border-teal/40 rounded-full px-6 py-3 hover:bg-teal hover:text-white hover:border-teal transition-all"
          >
            <Download className="w-4 h-4" />
            Download Statement of Purpose
          </a>
        </div>
      </div>
    </section>
  )
}

function TrustBadge({ icon: Icon, title, desc }) {
  return (
    <div className="flex items-center gap-3 max-w-[220px]">
      <div className="w-11 h-11 rounded-full bg-teal/15 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-teal-dark" />
      </div>
      <div>
        <div className="text-[13px] font-bold text-navy-dark leading-tight">{title}</div>
        <div className="text-[12px] text-muted leading-tight mt-1">{desc}</div>
      </div>
    </div>
  )
}
