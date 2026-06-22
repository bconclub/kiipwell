import SectionLabel from '../ui/SectionLabel'
import {
  Shield, BuildingLibrary, Download, MapPin,
  Globe, UserCheck, Heart,
  Clock, Users, FileText, ShieldCheck, Home, Sparkle
} from '../../lib/icons'

const designedFor = [
  {
    icon: Globe,
    title: 'Unaccompanied asylum-seeking children (UASC)',
    desc: 'Providing a safe, stable environment.'
  },
  {
    icon: UserCheck,
    title: 'Care leavers transitioning to independence',
    desc: 'Supporting the next step with confidence.'
  },
  {
    icon: Heart,
    title: 'Young people at risk of homelessness or isolation',
    desc: 'Offering stability, reassurance and tailored support.'
  }
]

const provided = [
  { icon: Clock, label: '24/7 Supported Accommodation' },
  { icon: Users, label: 'Dedicated Key Worker' },
  { icon: FileText, label: 'Individual Support Plan (ISP)' },
  { icon: ShieldCheck, label: 'Regular Welfare Checks' },
  { icon: Home, label: 'Safe, Inspected Properties' },
  { icon: Sparkle, label: 'Life Skills & Independence Support' }
]

export default function Spec() {
  return (
    <section aria-labelledby="spec-heading" className="bg-[#F2F7F6] py-16 lg:py-24">
      <div className="container-x">
        {/* Header: title + trust badges */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12 mb-10 lg:mb-14">
          <div className="max-w-[760px]">
            <SectionLabel number="03" label="Specification" />
            <h2
              id="spec-heading"
              className="mt-5 text-[clamp(1.875rem,3vw,2.875rem)] font-extrabold text-navy-dark tracking-tighter leading-[1.1] mb-4"
            >
              Safe, Structured Supported<br className="hidden sm:inline" /> Accommodation
            </h2>
            <p className="text-[15px] text-muted leading-[1.7] max-w-[520px]">
              High quality semi-independent homes with tailored support, helping young people build stability and confidence for the future.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-center gap-4 lg:gap-6 flex-shrink-0">
            <TrustBadge icon={Shield} title="Registered Tier 3 Placement" desc="Regulated and inspected to national standards" />
            <div className="hidden lg:block h-12 w-px bg-teal/25" />
            <TrustBadge icon={BuildingLibrary} title="Designed for Local Authorities" desc="Trusted partner for councils across the North East" />
          </div>
        </div>

        {/* 3-col grid: photo / designed for / what we provide */}
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6">
          {/* Property image */}
          <div className="relative rounded-2xl overflow-hidden min-h-[420px] lg:min-h-[480px]">
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
          <div className="bg-white rounded-2xl p-6 lg:p-7">
            <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-teal-dark pb-3 border-b border-teal/20">
              Designed for
            </div>
            <div className="flex flex-col divide-y divide-line">
              {designedFor.map((d) => (
                <div key={d.title} className="flex gap-3 py-3.5">
                  <div className="w-8 h-8 rounded-full bg-teal/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <d.icon className="w-4 h-4 text-teal-dark" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[15px] font-bold text-navy-dark leading-snug mb-0.5">{d.title}</div>
                    <div className="text-[13px] text-muted leading-snug">{d.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What we provide */}
          <div className="bg-white rounded-2xl p-6 lg:p-7">
            <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-teal-dark pb-3 border-b border-teal/20">
              What We Provide
            </div>
            <div className="flex flex-col divide-y divide-line">
              {provided.map((p) => (
                <div key={p.label} className="flex items-center gap-3 py-3">
                  <div className="w-8 h-8 rounded-full bg-teal/15 flex items-center justify-center flex-shrink-0">
                    <p.icon className="w-4 h-4 text-teal-dark" />
                  </div>
                  <div className="text-[15px] font-semibold text-navy-dark">{p.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom trust strip */}
        <div className="mt-10 lg:mt-12 bg-teal/[0.10] rounded-2xl p-6 lg:p-7 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <Shield className="w-6 h-6 text-navy-dark" />
            </div>
            <div className="max-w-[680px]">
              <div className="text-[17px] font-bold text-navy-dark mb-1 tracking-tight">
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
