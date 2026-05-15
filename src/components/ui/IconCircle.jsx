// Filled icon inside a soft brand-tinted circle.
// Default look matches the home-page feature cards: teal-tinted bg, navy-dark glyph.
export default function IconCircle({ icon: Icon, size = 'md', tone = 'tealBg' }) {
  const sz = {
    sm: { wrap: 'w-11 h-11', icon: 'w-5 h-5' },
    md: { wrap: 'w-14 h-14', icon: 'w-6 h-6' },
    lg: { wrap: 'w-16 h-16', icon: 'w-7 h-7' }
  }[size]

  const tones = {
    tealBg: 'bg-teal/15 text-navy-dark',
    navyBg: 'bg-navy-dark/10 text-navy-dark',
    onDark: 'bg-teal/20 text-teal'
  }[tone]

  return (
    <div className={`rounded-full flex items-center justify-center flex-shrink-0 ${sz.wrap} ${tones}`}>
      <Icon className={sz.icon} />
    </div>
  )
}
