import { motion } from 'framer-motion'

export default function SkillBadge({ label }) {
  return (
    <motion.span
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-colors duration-300 ease-in-out hover:border-emerald-500/60 hover:text-emerald-600 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-emerald-400/60 dark:hover:text-emerald-400"
    >
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
      />
      {label}
    </motion.span>
  )
}