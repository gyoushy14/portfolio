import { AlertTriangle, ArrowLeft } from 'lucide-react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import portfolio from '../data/portfolio'
import Button from '../components/ui/Button'

export default function ErrorPage() {
  const error = useRouteError()
  const { sections } = portfolio

  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : error?.message ?? 'Unknown error'

  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-24 dark:bg-slate-900">
      <div className="max-w-md text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
          <AlertTriangle size={28} aria-hidden="true" />
        </span>
        <h1 className="mt-6 text-3xl font-bold text-slate-900 dark:text-white">
          {sections.serverError.title}
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400">
          {sections.serverError.description}
        </p>
        <p className="mt-4 rounded-xl bg-slate-100 px-4 py-2 font-mono text-sm text-slate-500 dark:bg-slate-800 dark:text-slate-400">
          {message}
        </p>
        <div className="mt-8 flex justify-center">
          <Button to="/" variant="primary">
            <ArrowLeft size={18} />
            {sections.serverError.backLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}