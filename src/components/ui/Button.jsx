import { Link } from 'react-router-dom'

const base = 'inline-flex items-center gap-2 font-semibold rounded-full transition-all whitespace-nowrap'

const variants = {
  navy: 'bg-navy-dark text-white shadow-[0_4px_14px_rgba(10,31,77,0.20)] hover:bg-navy hover:shadow-[0_8px_22px_rgba(10,31,77,0.30)]',
  outline: 'bg-teal/[0.04] text-teal-dark border border-teal hover:bg-teal hover:text-white',
  white: 'bg-white text-teal-dark font-bold shadow-[0_4px_14px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_22px_rgba(0,0,0,0.18)]',
  outlineWhite: 'bg-white/10 text-white border border-white/30 backdrop-blur-sm hover:bg-white/20 hover:border-white/60'
}

const sizes = {
  md: 'text-[15px] px-7 py-3',
  sm: 'text-sm px-5 py-2.5'
}

export default function Button({
  to,
  href,
  variant = 'navy',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>
  return <button type="button" className={cls} {...rest}>{children}</button>
}
