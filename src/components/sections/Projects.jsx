import { ArrowRight } from 'lucide-react'
import portfolio from '../../data/portfolio'
import Button from '../ui/Button'
import SectionTitle from '../ui/SectionTitle'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const { projects, sections } = portfolio

  return (
    <section id="projects" className="bg-slate-50 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={sections.projects.eyebrow}
          title={sections.projects.title}
          description={sections.projects.description}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

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