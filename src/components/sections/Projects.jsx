import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import portfolio from '../../data/portfolio'
import Button from '../ui/Button'
import SectionTitle from '../ui/SectionTitle'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const { projects, sections } = portfolio
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.category ?? 'Backend')))],
    [projects]
  )
  const [active, setActive] = useState('All')
  const filtered =
    active === 'All'
      ? projects
      : projects.filter((project) => (project.category ?? 'Backend') === active)

  return (
    <section id="projects" className="bg-slate-50 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={sections.projects.eyebrow}
          title={sections.projects.title}
          description={sections.projects.description}
        />

        <div
          className="mb-12 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {categories.map((category) => {
            const selected = active === category
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(category)}
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

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project) => (
            <ProjectCard key={project.id ?? project.title} project={project} />
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Button to={sections.projects.viewAll.to} variant="ghost" className="font-semibold">
            {sections.projects.viewAll.label}
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  )
}