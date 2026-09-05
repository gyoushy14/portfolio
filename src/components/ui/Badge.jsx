const tones = {
  default: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
  accent: 'bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
  solid: 'bg-emerald-500 text-slate-900',
}

export default function Badge({ children, className = '', tone = 'default' }) {
  const classNames = [
    'inline-flex items-center gap-1.5 rounded-xl px-2.5 py-1 text-xs font-semibold transition-colors duration-300 ease-in-out',
    tones[tone],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <span className={classNames}>{children}</span>
}