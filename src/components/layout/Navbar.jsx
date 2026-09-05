import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import portfolio from '../../data/portfolio'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { useTheme } from '../../hooks/useTheme'

const sectionIds = portfolio.navLinks.map((l) => l.id)

function NavItem({ to, label, isActive, onClick, showUnderline = true }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={`relative block rounded-xl px-3 py-2 text-sm font-medium transition-colors duration-300 ease-in-out ${
        isActive
          ? 'text-emerald-600 dark:text-emerald-400'
          : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
      }`}
    >
      {label}
      {isActive && showUnderline && (
        <motion.span
          layoutId="nav-underline"
          className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-emerald-500"
          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
        />
      )}
    </Link>
  )
}

function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition-colors duration-300 ease-in-out hover:bg-slate-100 hover:text-emerald-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { theme, toggleTheme } = useTheme()

  const isHome = pathname === '/'
  const active = useScrollSpy(isHome ? sectionIds : [])
  const isProjectsActive = pathname.startsWith('/projects')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  const isActiveFor = (link) => (link.to === '/projects' ? isProjectsActive : active === link.id)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'border-b border-slate-200/70 bg-white/80 backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/80'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <Link
          to="/"
          onClick={closeMenu}
          className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          Mahmoud<span className="text-emerald-500">.dev</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {portfolio.navLinks.map((link) => (
            <NavItem
              key={link.id}
              to={link.to}
              label={link.label}
              isActive={isActiveFor(link)}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition-colors duration-300 ease-in-out hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-slate-200/70 bg-white/95 backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/95 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {portfolio.navLinks.map((link) => (
                <NavItem
                  key={link.id}
                  to={link.to}
                  label={link.label}
                  isActive={isActiveFor(link)}
                  onClick={closeMenu}
                  showUnderline={false}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}