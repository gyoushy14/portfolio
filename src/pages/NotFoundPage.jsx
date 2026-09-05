import { ArrowLeft } from 'lucide-react'
import portfolio from '../data/portfolio'
import Button from '../components/ui/Button'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function NotFoundPage() {
  const { sections } = portfolio

  useDocumentTitle('404 | Mahmoud Mohamed')

  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-24 dark:bg-slate-900">
      <div className="text-center">
        <p className="text-gradient text-8xl font-extrabold tracking-tight">404</p>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
          {sections.notFound.title}
        </h1>
        <p className="mt-3 max-w-md text-lg text-slate-600 dark:text-slate-400">
          {sections.notFound.description}
        </p>
        <div className="mt-8 flex justify-center">
          <Button to="/" variant="primary" size="lg">
            <ArrowLeft size={18} />
            {sections.notFound.backLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}