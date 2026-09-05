import { motion } from 'framer-motion'
import { ArrowUpRight, Calendar, FolderGit2 } from 'lucide-react'
import Card from '../ui/Card'

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="h-full"
    >
      <Card className="group flex h-full flex-col p-6 transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/5">
        <div className="mb-4 flex items-center justify-between">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition-transform duration-300 ease-in-out group-hover:scale-110 dark:text-emerald-400">
            <FolderGit2 size={22} />
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 dark:text-slate-500">
            <Calendar size={13} />
            {project.period}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-xl bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 transition-colors duration-300 ease-in-out hover:text-emerald-500 dark:text-emerald-400"
          >
            View on GitHub
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        )}
      </Card>
    </motion.div>
  )
}