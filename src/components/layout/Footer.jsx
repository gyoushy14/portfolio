import { Heart, Mail } from 'lucide-react'
import portfolio from '../../data/portfolio'
import Icon from '../ui/Icon'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © {year} {portfolio.profile.name}. All rights reserved.
          </p>

          <ul className="flex items-center gap-4">
            {portfolio.socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
                >
                  <Icon name={social.icon} size={20} />
                </a>
              </li>
            ))}
            <li>
              <a
                href={portfolio.links.email}
                aria-label="Email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
              >
                <Mail size={20} />
              </a>
            </li>
          </ul>

          <p className="inline-flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400">
            Built with <Heart size={14} className="fill-emerald-500 text-emerald-500" />
            <span aria-hidden="true">using React &amp; Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  )
}