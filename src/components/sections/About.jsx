import { motion } from 'framer-motion'
import portfolio from '../../data/portfolio'
import Card from '../ui/Card'
import Icon from '../ui/Icon'
import SectionTitle from '../ui/SectionTitle'

function FactCard({ icon, label, value }) {
  return (
    <Card className="group flex items-start gap-4 p-5 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition-transform duration-300 ease-in-out group-hover:scale-110 dark:text-emerald-400">
        <Icon name={icon} size={20} />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
          {label}
        </p>
        <p className="mt-1 text-sm font-medium leading-snug text-slate-800 dark:text-slate-200">
          {value}
        </p>
      </div>
    </Card>
  )
}

function Stat({ value, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="text-center"
    >
      <p className="text-3xl font-extrabold text-slate-900 dark:text-white">
        <span className="text-gradient">{value}</span>
      </p>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{label}</p>
    </motion.div>
  )
}

export default function About() {
  const { profile, facts, stats, sections } = portfolio

  return (
    <section id="about" className="bg-white py-24 dark:bg-slate-800/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={sections.about.eyebrow}
          title={sections.about.title}
          description={sections.about.description}
        />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {profile.summary}
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <Stat key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {facts.map((fact) => (
              <FactCard
                key={fact.label}
                icon={fact.icon}
                label={fact.label}
                value={fact.value}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}