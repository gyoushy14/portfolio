import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import portfolio from '../../data/portfolio'
import Badge from '../ui/Badge'
import SectionTitle from '../ui/SectionTitle'

export default function Experience() {
  const { experience, sections } = portfolio

  return (
    <section id="experience" className="bg-white py-24 dark:bg-slate-800/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={sections.experience.eyebrow}
          title={sections.experience.title}
          description={sections.experience.description}
        />

        <ol className="relative ml-3 border-s border-slate-200 dark:border-slate-700">
          {experience.map((job) => (
            <motion.li
              key={`${job.role}-${job.company}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="relative mb-12 pl-10 last:mb-0"
            >
              <span
                className="absolute -left-[27px] top-1 inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-emerald-500 bg-white dark:bg-slate-800"
                aria-hidden="true"
              >
                <Briefcase size={13} className="text-emerald-500" />
              </span>

              <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                <Badge tone="accent">{job.period}</Badge>
              </div>

              <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                {job.role}
              </h3>
              <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                {job.company}
              </p>

              <p className="mt-3 max-w-3xl leading-relaxed text-slate-600 dark:text-slate-300">
                {job.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}