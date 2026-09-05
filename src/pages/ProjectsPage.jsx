import { ArrowLeft } from 'lucide-react'
import portfolio from '../data/portfolio'
import SectionTitle from '../components/ui/SectionTitle'
import ProjectCard from '../components/sections/ProjectCard'
import Button from '../components/ui/Button'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function ProjectsPage() {
  const { projects, sections } = portfolio

  useDocumentTitle('Projects | Mahmoud Mohamed')

  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={sections.projectsPage.eyebrow}
          title={sections.projectsPage.title}
          description={sections.projectsPage.description}
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button to="/" variant="ghost">
            <ArrowLeft size={18} />
            Back to home
          </Button>
        </div>
      </div>
    </section>
  )
}