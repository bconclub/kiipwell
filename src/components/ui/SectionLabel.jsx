export default function SectionLabel({ number, label, white = false }) {
  const tone = white
    ? 'bg-white/10 border-white/20 text-white/85'
    : 'bg-teal/10 border-teal/25 text-teal-dark'
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[11px] font-bold tracking-[0.14em] uppercase ${tone}`}>
      <span>{number}</span>
      <span aria-hidden="true">·</span>
      <span>{label}</span>
    </div>
  )
}
