import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-emerald-500 text-slate-900 hover:bg-emerald-400 focus-visible:ring-emerald-500/50 shadow-lg shadow-emerald-500/20',
  outline:
    'border border-slate-300 text-slate-700 hover:border-emerald-500 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:text-emerald-400 focus-visible:ring-emerald-500/40',
  ghost:
    'text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 focus-visible:ring-emerald-500/40',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-7 py-3 text-base gap-2.5',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
  download = false,
  to,
  ...props
}) {
  const classNames = [
    'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-900 active:scale-[0.98]',
    variants[variant],
    sizes[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (to) {
    return (
      <Link to={to} className={classNames} {...props}>
        {children}
      </Link>
    )
  }

  const extraProps = {}
  if (external) extraProps.target = '_blank'
  if (external) extraProps.rel = 'noopener noreferrer'
  if (download) extraProps.download = true

  return (
    <a className={classNames} {...props} {...extraProps}>
      {children}
    </a>
  )
}