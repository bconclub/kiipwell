export default function IconCircle({ icon: Icon, size = 'md', tone = 'teal' }) {
  const sz = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-12 h-12'
  }[size]
  const iconSz = { sm: 'w-4 h-4', md: 'w-[18px] h-[18px]', lg: 'w-5 h-5' }[size]
  const tones = {
    teal: 'bg-teal-light border-teal/20 text-teal-dark',
    navy: 'bg-navy-dark/[0.06] border-navy/15 text-navy-dark'
  }[tone]
  return (
    <div className={`rounded-full border flex items-center justify-center flex-shrink-0 ${sz} ${tones}`}>
      <Icon className={iconSz} />
    </div>
  )
}
