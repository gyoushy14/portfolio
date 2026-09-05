import { motion } from 'framer-motion'

export default function PageLoader() {
  return (
    <div
      role="status"
      aria-label="Loading page"
      className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-900"
    >
      <motion.span
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
        className="h-10 w-10 rounded-full border-4 border-emerald-500/20 border-t-emerald-500"
      />
      <span className="sr-only">Loading…</span>
    </div>
  )
}