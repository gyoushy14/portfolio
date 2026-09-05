import { useState, useTransition } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import portfolio from '../../data/portfolio'
import Icon from '../ui/Icon'
import SectionTitle from '../ui/SectionTitle'
import SkillBadge from './SkillBadge'

export default function Skills() {
  const { skills, sections } = portfolio
  const categories = ['All', ...skills.map((s) => s.category)]
  const [active, setActive] = useState('All')
  const [isPending, startTransition] = useTransition()

  const groups =
    active === 'All' ? skills : skills.filter((s) => s.category === active)

  const handleSelect = (category) => {
    startTransition(() => setActive(category))
  }

  return (
    <section id="skills" className="bg-slate-50 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={sections.skills.eyebrow}
          title={sections.skills.title}
          description={sections.skills.description}
        />

        <div
          className="mb-12 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter skills by category"
        >
          {categories.map((category) => {
            const selected = active === category
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => handleSelect(category)}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                  selected
                    ? 'bg-emerald-500 text-slate-900 shadow-md shadow-emerald-500/25'
                    : 'bg-white text-slate-600 shadow-sm hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            aria-busy={isPending}
            className={[
              'space-y-10 transition-opacity duration-300 ease-in-out',
              isPending ? 'opacity-60' : 'opacity-100',
            ].join(' ')}
            animate={{ y: 0 }}
            initial={{ opacity: 0, y: 12 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {groups.map((group) => (
              <motion.div key={group.category} layout>
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Icon name={group.icon} size={18} />
                  </span>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                    {group.category}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {group.items.map((skill) => (
                    <SkillBadge key={skill} label={skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}