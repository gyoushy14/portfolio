import { motion } from 'framer-motion'
import { ArrowUpRight, Star } from 'lucide-react'
import Card from '../ui/Card'

const CATEGORY_STYLES = {
  Frontend: 'border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400',
  Backend:
    'border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  Fullstack:
    'border-purple-500/20 bg-purple-500/10 text-purple-600 dark:text-purple-400',
}

const SHOWN_TECH = 3
const SHOWN_HIGHLIGHTS = 3

export default function ProjectCard({ project }) {
  const tech = project.tech ?? project.stack ?? []
  const githubUrl = project.github ?? project.githubUrl
  const liveUrl = project.live ?? null
  const highlights = project.highlights ?? []
  const category = project.category ?? 'Backend'
  const featured = Boolean(project.featured)

  const visibleTech = tech.slice(0, SHOWN_TECH)
  const extraTech = tech.slice(SHOWN_TECH)
  const visibleHighlights = highlights.slice(0, SHOWN_HIGHLIGHTS)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="h-full"
    >
      <Card className="group flex h-full flex-col p-6 transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span
            className={`inline-flex items-center rounded-lg border px-2.5 py-1 text-xs font-semibold ${
              CATEGORY_STYLES[category] ?? CATEGORY_STYLES.Backend
            }`}
          >
            {category}
          </span>
          {featured && (
            <span className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-amber-400/30 bg-amber-400/10 px-2 py-1 text-xs font-bold text-amber-600 dark:text-amber-300">
              <Star size={12} className="fill-current" />
              Featured
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
          {project.title}
        </h3>

        <p className="mt-1 text-xs font-medium text-slate-400 dark:text-slate-500">
          {[project.type, project.period].filter(Boolean).join(' · ')}
        </p>

        <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-600 group-hover:line-clamp-none dark:text-slate-400">
          {project.description}
        </p>

        {visibleHighlights.length > 0 && (
          <ul className="mt-4 hidden space-y-2 group-hover:block">
            {visibleHighlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2 text-xs leading-snug text-slate-600 dark:text-slate-400"
              >
                <span
                  className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                  aria-hidden="true"
                />
                {highlight}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {visibleTech.map((item) => (
            <span
              key={item}
              className="rounded-xl bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300"
            >
              {item}
            </span>
          ))}
          {extraTech.length > 0 && (
            <span className="inline-flex items-center rounded-xl bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500 group-hover:hidden dark:bg-slate-800 dark:text-slate-400">
              +{extraTech.length} more
            </span>
          )}
          {extraTech.map((item) => (
            <span
              key={item}
              className="hidden rounded-xl bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 group-hover:inline-flex dark:bg-slate-800 dark:text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>

        {(githubUrl || liveUrl) && (
          <div className="mt-5 flex flex-wrap items-center gap-5 border-t border-slate-100 pt-4 dark:border-slate-800">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 transition-colors duration-300 ease-in-out hover:text-emerald-500 dark:text-emerald-400"
              >
                GitHub
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 transition-colors duration-300 ease-in-out hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
              >
                Live Demo
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            )}
          </div>
        )}
      </Card>
    </motion.div>
  )
}